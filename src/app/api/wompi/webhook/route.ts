import { NextResponse } from 'next/server';
import { verifyWompiChecksum, WompiWebhookEvent } from '@/lib/wompi';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const event: WompiWebhookEvent = JSON.parse(rawBody);

    // Si está configurado el secret de eventos, validamos el checksum
    if (process.env.WOMPI_EVENTS_SECRET) {
      const isValid = verifyWompiChecksum(event);
      if (!isValid) {
        console.warn('Firma de webhook Wompi inválida');
        return NextResponse.json({ error: 'Firma inválida' }, { status: 401 });
      }
    }

    const { transaction } = event.data;

    console.info(
      `[Wompi Webhook] Transacción ${transaction.id} | Referencia: ${transaction.reference} | Estado: ${transaction.status} | Monto: ${transaction.amount_in_cents / 100} COP`
    );

    // Mapeo de estados de Wompi al sistema de HORNEA
    switch (transaction.status) {
      case 'APPROVED':
        // Pedido confirmado y listo para congelación/despacho
        break;
      case 'DECLINED':
      case 'VOIDED':
      case 'ERROR':
        // Notificación de transacción rechazada o fallida
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true, status: transaction.status });
  } catch (error: unknown) {
    console.error('Error procesando webhook de Wompi:', error);
    return NextResponse.json({ error: 'Error procesando webhook' }, { status: 500 });
  }
}
