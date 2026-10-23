export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  unit: string;
  weightGrams: number;
  piecesPerPack: number;
  preparationTimeMin: number;
  airFryerTempC: number;
  calories: number;
  category: 'salados' | 'dulces' | 'complementos' | 'favoritos' | 'mas_vendidos';
  image: string;
  rating: number;
  reviewsCount: number;
  bakingInstructions: {
    airFryer: string;
    oven: string;
  };
  ingredients: string[];
  nutritionalInfo: {
    protein: string;
    fat: string;
    carbs: string;
    sodium: string;
  };
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DistributorLead {
  id?: string;
  fullName: string;
  companyName: string;
  city: string;
  whatsapp: string;
  email: string;
  estimatedVolume: string;
  notes?: string;
  createdAt?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  prepTime: string;
  difficulty: 'Fácil' | 'Intermedio' | 'Gourmet';
  author: string;
  image: string;
  productPairingId: string;
  ingredients: string[];
  steps: string[];
  seoDescription: string;
}

export interface Order {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  city: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  paymentMethod:
    | 'Wompi (PSE, Nequi, Tarjetas, Bancolombia)'
    | 'Tarjeta de Crédito / Stripe'
    | 'PSE'
    | 'Nequi'
    | 'Pago Contraentrega';
  status: 'Recibido' | 'En Preparación' | 'En Camino (Refrigerado)' | 'Entregado';
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  city: string;
  rating: number;
  comment: string;
  productName: string;
  verifiedPurchase: boolean;
  date: string;
}
