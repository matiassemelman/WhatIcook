export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  preparationTime: number; // minutes
  difficulty: 'fácil' | 'medio' | 'difícil';
  category: 'principal' | 'entrada' | 'postre' | 'desayuno' | 'almuerzo';
}

export const recipes: Recipe[] = [
  // Platos Principales
  {
    id: '1',
    name: 'Pasta con salsa de tomate',
    ingredients: ['pasta', 'tomate', 'cebolla', 'ajo', 'aceite de oliva', 'sal', 'albahaca'],
    instructions: [
      'Cocinar la pasta en agua con sal',
      'Sofreír la cebolla y el ajo',
      'Agregar los tomates y cocinar por 15 minutos',
      'Agregar albahaca al final',
      'Mezclar la pasta con la salsa'
    ],
    preparationTime: 25,
    difficulty: 'fácil',
    category: 'principal'
  },
  {
    id: '2',
    name: 'Tortilla de papas',
    ingredients: ['huevo', 'papa', 'cebolla', 'aceite', 'sal'],
    instructions: [
      'Pelar y cortar las papas en rodajas finas',
      'Batir los huevos',
      'Freír las papas y la cebolla',
      'Mezclar con los huevos y cocinar la tortilla'
    ],
    preparationTime: 35,
    difficulty: 'medio',
    category: 'principal'
  },
  {
    id: '3',
    name: 'Ensalada mixta',
    ingredients: ['lechuga', 'tomate', 'cebolla', 'zanahoria', 'aceite de oliva', 'sal'],
    instructions: [
      'Lavar las verduras',
      'Cortar todos los ingredientes',
      'Mezclar en un bowl',
      'Aliñar con aceite y sal'
    ],
    preparationTime: 15,
    difficulty: 'fácil',
    category: 'entrada'
  },
  // Nuevas recetas
  {
    id: '4',
    name: 'Arroz con pollo',
    ingredients: ['arroz', 'pollo', 'cebolla', 'zanahoria', 'arvejas', 'ajo', 'aceite', 'sal'],
    instructions: [
      'Dorar el pollo',
      'Sofreír las verduras',
      'Agregar el arroz y el caldo',
      'Cocinar hasta que el arroz esté listo'
    ],
    preparationTime: 45,
    difficulty: 'medio',
    category: 'principal'
  },
  {
    id: '5',
    name: 'Tostadas francesas',
    ingredients: ['pan', 'huevo', 'leche', 'azúcar', 'canela', 'manteca'],
    instructions: [
      'Batir huevos con leche y canela',
      'Remojar el pan en la mezcla',
      'Derretir manteca en la sartén',
      'Cocinar hasta dorar',
      'Espolvorear con azúcar'
    ],
    preparationTime: 20,
    difficulty: 'fácil',
    category: 'desayuno'
  },
  {
    id: '6',
    name: 'Hamburguesa casera',
    ingredients: ['carne picada', 'huevo', 'pan rallado', 'cebolla', 'ajo', 'sal', 'pan de hamburguesa', 'lechuga', 'tomate'],
    instructions: [
      'Mezclar la carne con huevo, pan rallado y condimentos',
      'Formar las hamburguesas',
      'Cocinar en la plancha',
      'Armar con lechuga y tomate'
    ],
    preparationTime: 30,
    difficulty: 'fácil',
    category: 'almuerzo'
  },
  {
    id: '7',
    name: 'Flan casero',
    ingredients: ['huevo', 'leche', 'azúcar', 'esencia de vainilla'],
    instructions: [
      'Hacer el caramelo con azúcar',
      'Batir huevos con leche y azúcar',
      'Agregar vainilla',
      'Cocinar a baño maría'
    ],
    preparationTime: 60,
    difficulty: 'medio',
    category: 'postre'
  },
  {
    id: '8',
    name: 'Revuelto de verduras',
    ingredients: ['huevo', 'espinaca', 'cebolla', 'champignon', 'aceite', 'sal'],
    instructions: [
      'Saltear las verduras',
      'Batir los huevos',
      'Mezclar todo y cocinar',
      'Salpimentar a gusto'
    ],
    preparationTime: 20,
    difficulty: 'fácil',
    category: 'almuerzo'
  },
  {
    id: '9',
    name: 'Licuado de banana',
    ingredients: ['banana', 'leche', 'azúcar', 'canela'],
    instructions: [
      'Pelar y cortar la banana',
      'Licuar con leche',
      'Agregar azúcar y canela a gusto'
    ],
    preparationTime: 5,
    difficulty: 'fácil',
    category: 'desayuno'
  },
  {
    id: '10',
    name: 'Guiso de lentejas',
    ingredients: ['lentejas', 'papa', 'zanahoria', 'cebolla', 'ajo', 'tomate', 'caldo', 'aceite', 'sal'],
    instructions: [
      'Remojar las lentejas',
      'Sofreír verduras',
      'Agregar lentejas y caldo',
      'Cocinar hasta que estén tiernas'
    ],
    preparationTime: 90,
    difficulty: 'medio',
    category: 'principal'
  }
];