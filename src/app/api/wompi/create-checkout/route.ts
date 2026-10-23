import { NextResponse } from 'next/server';
import { generateWompiIntegritySignature, WOMPI_CONFIG, WompiCheckoutPayload } from '@/lib/wompi';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { orderId, amount, customerEmail, customerName, phone, redirectUrl } = body;

    if (!orderId || !amount || !customerEmail) {
      return NextResponse.json(
        { error: 'Parámetros incompletos (orderId, amount, customerEmail son requeridos)' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(Number(amount) * 100);
    const reference = `${orderId}-${Date.now().toString().slice(-4)}`;
    const signature = generateWompiIntegritySignature(reference, amountInCents, 'COP');

    const origin = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const finalRedirectUrl = redirectUrl || `${origin}/mi-cuenta?orderId=${encodeURIComponent(orderId)}`;

    const checkoutData: WompiCheckoutPayload = {
      publicKey: WOMPI_CONFIG.publicKey,
      currency: 'COP',
      amountInCents,
      reference,
      signature,
      redirectUrl: finalRedirectUrl,
      customerData: {
        email: customerEmail,
        fullName: customerName || 'Cliente HORNEA',
        phoneNumber: phone || undefined,
      },
    };

    return NextResponse.json({
      success: true,
      checkoutData,
      wompiCheckoutUrl: `${WOMPI_CONFIG.checkoutUrl}?public-key=${checkoutData.publicKey}&currency=${checkoutData.currency}&amount-in-cents=${checkoutData.amountInCents}&reference=${checkoutData.reference}&signature:integrity=${checkoutData.signature}&redirect-url=${encodeURIComponent(checkoutData.redirectUrl)}`,
    });
  } catch (error: unknown) {
    console.error('Error generando checkout de Wompi:', error);
    return NextResponse.json(
      { error: 'Error interno generando la sesión de pago Wompi' },
      { status: 500 }
    );
  }
}
