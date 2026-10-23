import { Product, Review, Order } from '@/types';

export const PRODUCTS: Product[] = [
  // ─── HOJALDRES SALADOS ────────────────────────────────────────
  {
    id: 'prod-1',
    name: 'Pastel Pollo',
    slug: 'pastel-pollo',
    tagline: 'Hojaldre crujiente relleno de pollo desmechado',
    description: 'Hojaldre congelado artesanal relleno de pollo sazonado y desmechado. Masa hojaldrada de mantequilla con capas perfectas que se doran uniformemente en tu Air Fryer u horno.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 155,
    category: 'salados',
    image: '/images/products/pastel_pollo.png',
    rating: 4.95,
    reviewsCount: 142,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Colocar los pasteles sin amontonar. Hornear durante 15 minutos hasta dorar.',
      oven: 'Precalentar horno a 200°C. Hornear sobre bandeja con papel vegetal durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Pollo desmechado sazonado', 'Mantequilla', 'Sal'],
    nutritionalInfo: {
      protein: '9.2g',
      fat: '8.5g',
      carbs: '14.0g',
      sodium: '220mg'
    }
  },
  {
    id: 'prod-2',
    name: 'Pastel Carne',
    slug: 'pastel-carne',
    tagline: 'Masa hojaldrada con carne molida sazonada',
    description: 'Hojaldre congelado relleno de carne molida de res con especias criollas. Al hornearse, la carne queda jugosa dentro de capas crujientes de masa artesanal.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 165,
    category: 'salados',
    image: '/images/products/pastel_carne.png',
    rating: 4.90,
    reviewsCount: 118,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos hasta que estén dorados.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos sobre bandeja engrasada.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Carne molida de res sazonada', 'Cebolla', 'Especias criollas'],
    nutritionalInfo: {
      protein: '10.5g',
      fat: '9.0g',
      carbs: '13.5g',
      sodium: '230mg'
    }
  },
  {
    id: 'prod-3',
    name: 'Pastel Jamón y Queso',
    slug: 'pastel-jamon-y-queso',
    tagline: 'El clásico que nunca falla: jamón y queso derretido',
    description: 'Hojaldre congelado relleno de jamón premium y queso derretido. Combinación perfecta de sabor salado y cremoso envuelta en masa hojaldrada crujiente.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 160,
    category: 'salados',
    image: '/images/products/pastel_jamon_queso.png',
    rating: 4.93,
    reviewsCount: 134,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Colocar y hornear 15 minutos hasta dorar.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Jamón premium', 'Queso mozzarella', 'Mantequilla'],
    nutritionalInfo: {
      protein: '8.8g',
      fat: '9.2g',
      carbs: '12.8g',
      sodium: '280mg'
    }
  },
  {
    id: 'prod-4',
    name: 'Pastel Espinaca',
    slug: 'pastel-espinaca',
    tagline: 'Hojaldre saludable con espinaca y queso',
    description: 'Hojaldre congelado relleno de espinaca fresca salteada con queso cremoso. Una opción deliciosa y equilibrada para quienes buscan sabor y nutrición.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 140,
    category: 'salados',
    image: '/images/products/pastel_espinaca.png',
    rating: 4.88,
    reviewsCount: 89,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Espinaca fresca', 'Queso crema', 'Mantequilla'],
    nutritionalInfo: {
      protein: '6.5g',
      fat: '7.8g',
      carbs: '13.0g',
      sodium: '200mg'
    }
  },
  {
    id: 'prod-5',
    name: 'Pastel Tocineta Queso',
    slug: 'pastel-tocineta-queso',
    tagline: 'Tocineta crocante y queso fundido en hojaldre',
    description: 'Hojaldre congelado relleno de tocineta crocante y queso fundido. La combinación perfecta de lo crujiente y lo cremoso en cada mordisco.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 175,
    category: 'salados',
    image: '/images/products/pastel_tocineta_queso.png',
    rating: 4.92,
    reviewsCount: 97,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos hasta dorar.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Tocineta premium', 'Queso mozzarella', 'Mantequilla'],
    nutritionalInfo: {
      protein: '9.5g',
      fat: '10.2g',
      carbs: '12.5g',
      sodium: '310mg'
    }
  },
  {
    id: 'prod-6',
    name: 'Pastel Carnes Mixta',
    slug: 'pastel-carnes-mixta',
    tagline: 'Mezcla de carnes selectas en hojaldre dorado',
    description: 'Hojaldre congelado relleno de una mezcla de carnes selectas sazonadas con especias tradicionales. Un sabor robusto y lleno de carácter.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 170,
    category: 'salados',
    image: '/images/products/pastel_carnes_mixta.png',
    rating: 4.87,
    reviewsCount: 76,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos sobre bandeja engrasada.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Mezcla de carnes sazonadas', 'Cebolla', 'Especias naturales'],
    nutritionalInfo: {
      protein: '11.0g',
      fat: '9.5g',
      carbs: '13.0g',
      sodium: '250mg'
    }
  },
  {
    id: 'prod-7',
    name: 'Pastel Pollo Verduras',
    slug: 'pastel-pollo-verduras',
    tagline: 'Pollo con verduras frescas en hojaldre crujiente',
    description: 'Hojaldre congelado relleno de pollo desmechado con verduras frescas salteadas. La opción equilibrada y nutritiva con todo el sabor de un hojaldre artesanal.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 148,
    category: 'salados',
    image: '/images/products/pastel_pollo_verduras.png',
    rating: 4.89,
    reviewsCount: 82,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Pollo desmechado', 'Verduras frescas', 'Mantequilla'],
    nutritionalInfo: {
      protein: '8.5g',
      fat: '7.5g',
      carbs: '14.5g',
      sodium: '210mg'
    }
  },
  {
    id: 'prod-8',
    name: 'Rollo Jamón y Queso',
    slug: 'rollo-jamon-y-queso',
    tagline: 'Rollo hojaldrado con jamón y queso en espiral',
    description: 'Rollo de masa hojaldrada congelado relleno de jamón y queso en forma de espiral. Al hornearse, las capas se despliegan en un rollo dorado con relleno derretido.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 162,
    category: 'salados',
    image: '/images/products/rollo_jamon_queso.png',
    rating: 4.91,
    reviewsCount: 93,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos hasta dorar.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Jamón premium', 'Queso mozzarella', 'Mantequilla'],
    nutritionalInfo: {
      protein: '8.2g',
      fat: '9.0g',
      carbs: '13.0g',
      sodium: '275mg'
    }
  },
  {
    id: 'prod-9',
    name: 'Rollo Quesudo',
    slug: 'rollo-quesudo',
    tagline: 'Explosión de queso fundido en rollo hojaldrado',
    description: 'Rollo de hojaldre congelado con generosa porción de queso fundido. Al hornearse, el queso se derrite creando una textura irresistible dentro del rollo crujiente.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 158,
    category: 'salados',
    image: '/images/products/rollo_quesudo.png',
    rating: 4.94,
    reviewsCount: 105,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 200°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Mezcla de quesos', 'Mantequilla', 'Sal'],
    nutritionalInfo: {
      protein: '7.8g',
      fat: '8.8g',
      carbs: '12.0g',
      sodium: '240mg'
    }
  },
  {
    id: 'prod-10',
    name: 'Croissant Queso',
    slug: 'croissant-queso',
    tagline: 'Croissant hojaldrado con relleno de queso',
    description: 'Croissant congelado de masa hojaldrada relleno de queso cremoso. Al hornearse despliega capas ligeras y crujientes con un centro de queso derretido.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 168,
    category: 'salados',
    image: '/images/products/croissant_queso.png',
    rating: 4.90,
    reviewsCount: 88,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 190°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada de mantequilla', 'Queso mozzarella', 'Mantequilla pura', 'Sal'],
    nutritionalInfo: {
      protein: '7.5g',
      fat: '10.0g',
      carbs: '15.0g',
      sodium: '220mg'
    }
  },
  {
    id: 'prod-11',
    name: 'Croissant Tres Quesos',
    slug: 'croissant-tres-quesos',
    tagline: 'Triple queso fundido en croissant artesanal',
    description: 'Croissant congelado de masa hojaldrada relleno de una mezcla de tres quesos selectos. El máximo placer para los amantes del queso.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 178,
    category: 'salados',
    image: '/images/products/croissant_tres_quesos.png',
    rating: 4.96,
    reviewsCount: 110,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 190°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada de mantequilla', 'Queso mozzarella', 'Queso parmesano', 'Queso crema'],
    nutritionalInfo: {
      protein: '9.0g',
      fat: '11.5g',
      carbs: '14.0g',
      sodium: '260mg'
    }
  },
  // ─── PALITOS DE QUESO ─────────────────────────────────────────
  {
    id: 'prod-12',
    name: 'Palitos de Queso',
    slug: 'palitos-de-queso',
    tagline: 'Crujientes por fuera, derretidos por dentro',
    description: 'Palitos de queso congelados elaborados con queso colombiano 100% natural. Al hornearse, el queso se derrite creando ese estiramiento irresistible que todos amamos.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 12,
    airFryerTempC: 160,
    calories: 145,
    category: 'complementos',
    image: '/images/products/palitos_de_queso.png',
    rating: 4.97,
    reviewsCount: 156,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Colocar los palitos sin amontonar. Hornear durante 12 minutos hasta dorar.',
      oven: 'Precalentar horno a 200°C. Hornear sobre bandeja con papel vegetal durante 16 a 18 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Queso colombiano 100% natural', 'Mantequilla', 'Sal'],
    nutritionalInfo: {
      protein: '7.2g',
      fat: '8.1g',
      carbs: '11.4g',
      sodium: '210mg'
    }
  },
  // ─── HOJALDRES DULCES ─────────────────────────────────────────
  {
    id: 'prod-13',
    name: 'Pastel Arequipe',
    slug: 'pastel-arequipe',
    tagline: 'Dulce de leche envuelto en hojaldre crujiente',
    description: 'Hojaldre congelado relleno de arequipe cremoso artesanal. Al hornearse, la masa se dora a la perfección mientras el arequipe se carameliza suavemente.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 14,
    airFryerTempC: 160,
    calories: 185,
    category: 'dulces',
    image: '/images/products/pastel_arequipe.png',
    rating: 4.94,
    reviewsCount: 102,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 14 minutos hasta dorar. Dejar reposar 2 minutos.',
      oven: 'Precalentar horno a 190°C. Hornear durante 18 minutos sobre bandeja con papel vegetal.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Arequipe cremoso artesanal', 'Mantequilla', 'Azúcar'],
    nutritionalInfo: {
      protein: '4.5g',
      fat: '8.0g',
      carbs: '22.0g',
      sodium: '150mg'
    }
  },
  {
    id: 'prod-14',
    name: 'Pastel Guayaba Queso',
    slug: 'pastel-guayaba-queso',
    tagline: 'El matrimonio colombiano en hojaldre perfecto',
    description: 'Hojaldre congelado con bocadillo de guayaba y queso blanco. El clásico matrimonio colombiano elevado con masa hojaldrada artesanal de mantequilla pura.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 14,
    airFryerTempC: 160,
    calories: 172,
    category: 'dulces',
    image: '/images/products/pastel_guayaba_queso.png',
    rating: 4.95,
    reviewsCount: 128,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 14 minutos. Dejar reposar 2 minutos.',
      oven: 'Precalentar horno a 190°C. Hornear durante 18 minutos hasta que la superficie esté dorada.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Bocadillo de guayaba', 'Queso blanco campesino', 'Mantequilla'],
    nutritionalInfo: {
      protein: '5.8g',
      fat: '7.2g',
      carbs: '20.5g',
      sodium: '160mg'
    }
  },
  {
    id: 'prod-15',
    name: 'Pastel Arequipe Queso',
    slug: 'pastel-arequipe-queso',
    tagline: 'Arequipe y queso: dulzura y cremosidad en un bocado',
    description: 'Hojaldre congelado relleno de arequipe cremoso y queso fundido. Una combinación dulce y salada que sorprende con cada mordisco.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 14,
    airFryerTempC: 160,
    calories: 180,
    category: 'dulces',
    image: '/images/products/pastel_arequipe_queso.png',
    rating: 4.93,
    reviewsCount: 95,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 14 minutos. Dejar reposar 2 minutos.',
      oven: 'Precalentar horno a 190°C. Hornear durante 18 minutos.'
    },
    ingredients: ['Masa hojaldrada artesanal', 'Arequipe cremoso', 'Queso mozzarella', 'Mantequilla'],
    nutritionalInfo: {
      protein: '5.5g',
      fat: '8.5g',
      carbs: '21.0g',
      sodium: '170mg'
    }
  },
  // ─── COMPLEMENTOS ─────────────────────────────────────────────
  {
    id: 'prod-16',
    name: 'Rollo de Canela',
    slug: 'rollo-de-canela',
    tagline: 'Canela aromática en masa esponjosa y glaseada',
    description: 'Rollo de canela congelado listo para hornear. Masa suave y esponjosa con generosas capas de canela y azúcar morena que al hornearse llena tu hogar de un aroma irresistible.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 16,
    airFryerTempC: 160,
    calories: 195,
    category: 'complementos',
    image: '/images/products/rollo_canela.png',
    rating: 4.96,
    reviewsCount: 120,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 16 minutos. Glasear con el glaseado incluido.',
      oven: 'Precalentar horno a 180°C. Hornear durante 20 minutos. Glasear al salir del horno.'
    },
    ingredients: ['Masa de harina de trigo', 'Canela en polvo', 'Azúcar morena', 'Mantequilla', 'Glaseado de vainilla'],
    nutritionalInfo: {
      protein: '4.0g',
      fat: '7.5g',
      carbs: '28.0g',
      sodium: '180mg'
    }
  },
  {
    id: 'prod-17',
    name: 'Croissant de Chocolate',
    slug: 'croissant-de-chocolate',
    tagline: 'Chocolate premium envuelto en hojaldre de mantequilla',
    description: 'Croissant congelado de masa hojaldrada con barra de chocolate premium en su interior. Al hornearse, el chocolate se funde creando un centro irresistible.',
    price: 24000,
    unit: 'Paquete x 6 unidades',
    weightGrams: 480,
    piecesPerPack: 6,
    preparationTimeMin: 15,
    airFryerTempC: 160,
    calories: 200,
    category: 'complementos',
    image: '/images/products/croissant_chocolate.png',
    rating: 4.98,
    reviewsCount: 135,
    isBestSeller: true,
    bakingInstructions: {
      airFryer: 'Dejar descongelar a temperatura ambiente antes de hornear. Precalentar Air Fryer a 160°C. Hornear durante 15 minutos.',
      oven: 'Precalentar horno a 180°C. Hornear durante 18 a 20 minutos.'
    },
    ingredients: ['Masa hojaldrada de mantequilla', 'Chocolate premium 55% cacao', 'Mantequilla pura', 'Azúcar'],
    nutritionalInfo: {
      protein: '5.0g',
      fat: '11.0g',
      carbs: '24.0g',
      sodium: '140mg'
    }
  }
];

export const MOMENTOS = [
  {
    id: 'm-1',
    title: 'Noche de Películas & Maratón',
    subtitle: 'Olvídate de las palomitas frías',
    description: 'Mete los palitos de queso al Air Fryer durante el intro de la serie. En 12 minutos tienes queso derretido hirviendo en la mesa de la sala.',
    tag: '#AirFryerCinema',
    recommendedProductId: 'prod-12',
    image: '/images/products/palitos_de_queso.png'
  },
  {
    id: 'm-2',
    title: 'Visitas Inesperadas',
    subtitle: 'Hospitalidad colombiana en 15 minutos',
    description: 'Llegaron tus amigos o tu familia de sorpresa. Saca un paquete de pasteles de guayaba y queso. Tu casa olerá a la mejor panadería gourmet de la ciudad.',
    tag: '#AnfitriónEstrella',
    recommendedProductId: 'prod-14',
    image: '/images/products/pastel_guayaba_queso.png'
  },
  {
    id: 'm-3',
    title: 'Domingo en Familia',
    subtitle: 'El brunch de ensueño sin madrugar a amasar',
    description: 'Sirve rollos de canela glaseados, croissants de chocolate y un chocolate caliente casero. Sonrisas garantizadas en la mesa sin ensuciar la cocina.',
    tag: '#BrunchEnHogar',
    recommendedProductId: 'prod-16',
    image: '/images/products/rollo_canela.png'
  },
  {
    id: 'm-4',
    title: 'Desayunos Ejecutivos',
    subtitle: 'Energía artesanal antes de tu primera reunión',
    description: 'En lo que se prepara tu espresso, tus croissants de chocolate y pasteles de pollo quedan listos y dorados en el Air Fryer. Desayuna como rey en 15 minutos.',
    tag: '#MañanasHORNEA',
    recommendedProductId: 'prod-17',
    image: '/images/products/croissant_chocolate.png'
  }
];


export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Valeria Restrepo',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    city: 'Medellín - Envigado',
    rating: 5,
    comment: 'Llegaron perfectos y super frescos. Los dejamos descongelar un ratito y en 12 minutos de Air Fryer a 160°C los palitos de queso estaban doraditos por fuera, inflados y con el queso super derretido por dentro. Una delicia total.',
    productName: 'Palitos de Queso',
    verifiedPurchase: true,
    date: 'Hace 3 días'
  },
  {
    id: 'rev-2',
    author: 'Carlos Andrés Mendoza',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    city: 'Medellín - Envigado',
    rating: 5,
    comment: 'Los pasteles de guayaba y queso son de otro planeta. El hojaldre se deshace en la boca y el contraste de sabores es increíble. Seguir la instrucción de descongelarlos antes de hornear marca toda la diferencia.',
    productName: 'Pastel Guayaba Queso',
    verifiedPurchase: true,
    date: 'Hace 1 semana'
  },
  {
    id: 'rev-3',
    author: 'Mariana Gómez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    city: 'Medellín - Envigado',
    rating: 5,
    comment: 'El hojaldre del pastel de pollo es una locura, se le sienten todas las capas y el relleno es súper jugoso y bien sazonado. Hornearlo a 160°C después de descongelarlo hace que quede crujiente y perfecto por dentro.',
    productName: 'Pastel Pollo',
    verifiedPurchase: true,
    date: 'Hace 5 días'
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'HOR-9842',
    date: '2026-07-30',
    customerName: 'Santiago Gutierrez',
    customerEmail: 'santiago@example.com',
    shippingAddress: 'Calle 93B #11A-45, Apt 502',
    city: 'Bogotá, D.C.',
    items: [
      { product: PRODUCTS[0], quantity: 2 },
      { product: PRODUCTS[2], quantity: 1 }
    ],
    subtotal: 72700,
    shippingFee: 0,
    discount: 5000,
    total: 67700,
    paymentMethod: 'Tarjeta de Crédito / Stripe',
    status: 'En Camino (Refrigerado)',
    trackingNumber: 'FRZ-BOG-88912',
    estimatedDelivery: 'Hoy antes de las 4:00 PM'
  },
  {
    id: 'HOR-9841',
    date: '2026-07-29',
    customerName: 'Lucía Fernández',
    customerEmail: 'lucia@example.com',
    shippingAddress: 'Carrera 43A #1-50, El Poblado',
    city: 'Medellín',
    items: [
      { product: PRODUCTS[1], quantity: 1 },
      { product: PRODUCTS[3], quantity: 1 }
    ],
    subtotal: 56800,
    shippingFee: 6500,
    discount: 0,
    total: 63300,
    paymentMethod: 'PSE',
    status: 'Entregado',
    trackingNumber: 'FRZ-MDE-44120',
    estimatedDelivery: 'Entregado ayer a las 2:15 PM'
  }
];
