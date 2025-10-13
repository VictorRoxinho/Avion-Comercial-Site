export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  detailedDescription?: string;
  features?: string[];
}

export const categories = [
  'Todos',
  'Limpeza Geral',
  'Sanitizantes',
  'Descartáveis',
  'Papelaria',
  'Higiene Pessoal',
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Detergente Neutro 5L',
    category: 'Limpeza Geral',
    description: 'Detergente neutro concentrado para limpeza geral',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=300&fit=crop',
    detailedDescription: 'Detergente neutro de alta qualidade, ideal para limpeza de pisos, paredes e superfícies em geral. Fórmula concentrada que rende mais.',
    features: ['Concentrado', 'Biodegradável', 'pH Neutro', 'Alto rendimento'],
  },
  {
    id: '2',
    name: 'Desinfetante 5L',
    category: 'Sanitizantes',
    description: 'Desinfetante bactericida com fragrância',
    image: 'https://images.unsplash.com/photo-1585999679900-fffa21c21d33?w=400&h=300&fit=crop',
    detailedDescription: 'Desinfetante potente com ação bactericida e fungicida. Elimina 99,9% dos germes.',
    features: ['Ação bactericida', 'Fragrância agradável', 'Longa duração', 'Multiuso'],
  },
  {
    id: '3',
    name: 'Sabonete Líquido 5L',
    category: 'Higiene Pessoal',
    description: 'Sabonete líquido para mãos e corpo',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop',
    detailedDescription: 'Sabonete líquido cremoso com pH balanceado, ideal para uso em banheiros corporativos e condomínios.',
    features: ['pH Balanceado', 'Hidratante', 'Dermatologicamente testado', 'Fragrância suave'],
  },
  {
    id: '4',
    name: 'Papel Toalha 1000 folhas',
    category: 'Descartáveis',
    description: 'Papel toalha interfolhado de alta absorção',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop',
    detailedDescription: 'Papel toalha interfolhado de 2 dobras, com alta capacidade de absorção e resistência.',
    features: ['Alta absorção', '1000 folhas', '2 dobras', 'Econômico'],
  },
  {
    id: '5',
    name: 'Álcool Gel 70% - 5L',
    category: 'Sanitizantes',
    description: 'Álcool em gel para higienização das mãos',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop',
    detailedDescription: 'Álcool em gel 70% INPM, ideal para higienização rápida e eficaz das mãos.',
    features: ['70% INPM', 'Aprovado Anvisa', 'Não resseca', 'Secagem rápida'],
  },
  {
    id: '6',
    name: 'Saco de Lixo 100L',
    category: 'Descartáveis',
    description: 'Saco de lixo reforçado com 100 unidades',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop',
    detailedDescription: 'Sacos de lixo de alta resistência, ideais para lixeiras grandes de condomínios e empresas.',
    features: ['100 litros', 'Extra resistente', '100 unidades', 'Preto'],
  },
  {
    id: '7',
    name: 'Multiuso Concentrado 5L',
    category: 'Limpeza Geral',
    description: 'Limpador multiuso para diversas superfícies',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
    detailedDescription: 'Limpador multiuso concentrado que limpa, desengraxe e perfuma ambientes.',
    features: ['Concentrado', 'Remove gordura', 'Multiuso', 'Fragrância agradável'],
  },
  {
    id: '8',
    name: 'Papel Higiênico Folha Dupla',
    category: 'Descartáveis',
    description: 'Papel higiênico de qualidade com 60 rolos',
    image: 'https://images.unsplash.com/photo-1585761165779-1b45ea49937c?w=400&h=300&fit=crop',
    detailedDescription: 'Papel higiênico macio e resistente, com folha dupla para maior conforto.',
    features: ['Folha dupla', '60 rolos', 'Macio', 'Alta qualidade'],
  },
  {
    id: '9',
    name: 'Sabão em Pó 5kg',
    category: 'Limpeza Geral',
    description: 'Sabão em pó para roupas e tecidos',
    image: 'https://images.unsplash.com/photo-1602143407249-cf009a764c6f?w=400&h=300&fit=crop',
    detailedDescription: 'Sabão em pó de alta eficiência na remoção de manchas e sujeiras.',
    features: ['5kg', 'Remove manchas', 'Fragrância duradoura', 'Rende muito'],
  },
  {
    id: '10',
    name: 'Luvas Descartáveis - 100un',
    category: 'Higiene Pessoal',
    description: 'Luvas descartáveis de látex para limpeza',
    image: 'https://images.unsplash.com/photo-1585468274952-66ba49b1c9c7?w=400&h=300&fit=crop',
    detailedDescription: 'Luvas de látex resistentes, ideais para proteção durante atividades de limpeza.',
    features: ['100 unidades', 'Látex', 'Tamanhos variados', 'Resistente'],
  },
  {
    id: '11',
    name: 'Vassoura Profissional',
    category: 'Limpeza Geral',
    description: 'Vassoura de cerdas duras com cabo de madeira',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=300&fit=crop',
    detailedDescription: 'Vassoura profissional com cerdas resistentes, ideal para áreas externas e grandes espaços.',
    features: ['Cabo de madeira', 'Cerdas duras', 'Durável', 'Profissional'],
  },
  {
    id: '12',
    name: 'Guardanapo de Papel - 5000un',
    category: 'Descartáveis',
    description: 'Guardanapos de papel de alta qualidade',
    image: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=400&h=300&fit=crop',
    detailedDescription: 'Guardanapos de papel macios e absorventes, perfeitos para eventos e refeitórios.',
    features: ['5000 unidades', 'Macio', 'Absorvente', 'Branco'],
  },
];