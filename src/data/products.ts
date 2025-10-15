export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  detailedDescription?: string;
  features?: string[];
}

export const categories = ['Todos', 'Limpeza', 'Descartáveis', 'Higiene'];

export const products: Product[] = [
  {
    id: '1',
    name: 'Detergente Neutro 5L',
    category: 'Limpeza',
    description: 'Detergente neutro concentrado para limpeza geral',
    image:
      'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=300&fit=crop',
    detailedDescription:
      'Detergente neutro de alta qualidade, ideal para limpeza de pisos, paredes e superfícies em geral. Fórmula concentrada que rende mais.',
    features: ['Concentrado', 'Biodegradável', 'pH Neutro', 'Alto rendimento'],
  },
  {
    id: '2',
    name: 'Desinfetante 5L',
    category: 'Limpeza',
    description: 'Desinfetante bactericida com fragrância',
    image:
      'https://images.unsplash.com/photo-1585999679900-fffa21c21d33?w=400&h=300&fit=crop',
    detailedDescription:
      'Desinfetante potente com ação bactericida e fungicida. Elimina 99,9% dos germes.',
    features: [
      'Ação bactericida',
      'Fragrância agradável',
      'Longa duração',
      'Multiuso',
    ],
  },
  {
    id: '3',
    name: 'Sabonete Líquido 5L',
    category: 'Higiene',
    description: 'Sabonete líquido para mãos e corpo',
    image:
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop',
    detailedDescription:
      'Sabonete líquido cremoso com pH balanceado, ideal para uso em banheiros corporativos e condomínios.',
    features: [
      'pH Balanceado',
      'Hidratante',
      'Dermatologicamente testado',
      'Fragrância suave',
    ],
  },
  {
    id: '4',
    name: 'Papel Toalha 1000 folhas',
    category: 'Descartáveis',
    description: 'Papel toalha interfolhado de alta absorção',
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop',
    detailedDescription:
      'Papel toalha interfolhado de 2 dobras, com alta capacidade de absorção e resistência.',
    features: ['Alta absorção', '1000 folhas', '2 dobras', 'Econômico'],
  },
  {
    id: '5',
    name: 'Álcool Gel 70% - 5L',
    category: 'Limpeza',
    description: 'Álcool em gel para higienização das mãos',
    image:
      'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop',
    detailedDescription:
      'Álcool em gel 70% INPM, ideal para higienização rápida e eficaz das mãos.',
    features: ['70% INPM', 'Aprovado Anvisa', 'Não resseca', 'Secagem rápida'],
  },
  {
    id: '6',
    name: 'Saco de Lixo 100L',
    category: 'Descartáveis',
    description: 'Saco de lixo reforçado com 100 unidades',
    image:
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop',
    detailedDescription:
      'Sacos de lixo de alta resistência, ideais para lixeiras grandes de condomínios e empresas.',
    features: ['100 litros', 'Extra resistente', '100 unidades', 'Preto'],
  },
  {
    id: '7',
    name: 'Multiuso Concentrado 5L',
    category: 'Limpeza',
    description: 'Limpador multiuso para diversas superfícies',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
    detailedDescription:
      'Limpador multiuso concentrado que limpa, desengraxe e perfuma ambientes.',
    features: [
      'Concentrado',
      'Remove gordura',
      'Multiuso',
      'Fragrância agradável',
    ],
  },
  {
    id: '8',
    name: 'Papel Higiênico Folha Dupla',
    category: 'Descartáveis',
    description: 'Papel higiênico de qualidade com 60 rolos',
    image:
      'https://images.unsplash.com/photo-1585761165779-1b45ea49937c?w=400&h=300&fit=crop',
    detailedDescription:
      'Papel higiênico macio e resistente, com folha dupla para maior conforto.',
    features: ['Folha dupla', '60 rolos', 'Macio', 'Alta qualidade'],
  },
  {
    id: '9',
    name: 'Sabão em Pó 5kg',
    category: 'Limpeza',
    description: 'Sabão em pó para roupas e tecidos',
    image:
      'https://images.unsplash.com/photo-1602143407249-cf009a764c6f?w=400&h=300&fit=crop',
    detailedDescription:
      'Sabão em pó de alta eficiência na remoção de manchas e sujeiras.',
    features: ['5kg', 'Remove manchas', 'Fragrância duradoura', 'Rende muito'],
  },
  {
    id: '10',
    name: 'Luvas Descartáveis - 100un',
    category: 'Higiene',
    description: 'Luvas descartáveis de látex para limpeza',
    image:
      'https://images.unsplash.com/photo-1585468274952-66ba49b1c9c7?w=400&h=300&fit=crop',
    detailedDescription:
      'Luvas de látex resistentes, ideais para proteção durante atividades de limpeza.',
    features: ['100 unidades', 'Látex', 'Tamanhos variados', 'Resistente'],
  },
  {
    id: '11',
    name: 'Vassoura Profissional',
    category: 'Limpeza',
    description: 'Vassoura de cerdas duras com cabo de madeira',
    image:
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=300&fit=crop',
    detailedDescription:
      'Vassoura profissional com cerdas resistentes, ideal para áreas externas e grandes espaços.',
    features: ['Cabo de madeira', 'Cerdas duras', 'Durável', 'Profissional'],
  },
  {
    id: '12',
    name: 'Guardanapo de Papel - 5000un',
    category: 'Descartáveis',
    description: 'Guardanapos de papel de alta qualidade',
    image:
      'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=400&h=300&fit=crop',
    detailedDescription:
      'Guardanapos de papel macios e absorventes, perfeitos para eventos e refeitórios.',
    features: ['5000 unidades', 'Macio', 'Absorvente', 'Branco'],
  },
  {
    id: '13',
    name: 'Água Sanitária 5L',
    category: 'Limpeza',
    description: 'Água sanitária alvejante e desinfetante',
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',
    detailedDescription:
      'Água sanitária de alta concentração para limpeza pesada, desinfecção e alvejamento de roupas e superfícies.',
    features: [
      'Alvejante',
      'Desinfetante',
      'Alta concentração',
      'Uso profissional',
      '5 litros',
    ],
  },
  {
    id: '14',
    name: 'Limpa Vidros 5L',
    category: 'Limpeza',
    description: 'Limpador de vidros e superfícies brilhantes',
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop',
    detailedDescription:
      'Limpa vidros profissional que não deixa manchas, ideal para janelas, espelhos e superfícies de vidro em geral.',
    features: [
      'Não deixa manchas',
      'Secagem rápida',
      'Brilho intenso',
      'Fragrância suave',
      '5 litros',
    ],
  },
  {
    id: '15',
    name: 'Amaciante 5L',
    category: 'Limpeza',
    description: 'Amaciante concentrado para roupas',
    image:
      'https://images.unsplash.com/photo-1582735689339-38e2b45d9381?w=400&h=400&fit=crop',
    detailedDescription:
      'Amaciante concentrado que deixa roupas macias e perfumadas por mais tempo. Reduz eletricidade estática.',
    features: [
      'Concentrado',
      'Perfume duradouro',
      'Reduz estática',
      'Alto rendimento',
      '5 litros',
    ],
  },
  {
    id: '16',
    name: 'Limpa Pisos 5L',
    category: 'Limpeza',
    description: 'Limpador de pisos concentrado',
    image:
      'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    detailedDescription:
      'Limpador de pisos profissional para todos os tipos de piso. Limpa sem agredir o acabamento.',
    features: [
      'Multipisos',
      'Não agride',
      'Perfume agradável',
      'Concentrado',
      '5 litros',
    ],
  },
  {
    id: '17',
    name: 'Removedor de Manchas 5L',
    category: 'Limpeza',
    description: 'Removedor de manchas profissional',
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',
    detailedDescription:
      'Removedor de manchas potente para tecidos e superfícies. Remove manchas difíceis de gordura, café, vinho e mais.',
    features: [
      'Alta eficácia',
      'Remove manchas difíceis',
      'Uso profissional',
      'Concentrado',
      '5 litros',
    ],
  },
  {
    id: '18',
    name: 'Limpador Instantâneo 5L',
    category: 'Limpeza',
    description: 'Limpador de ação rápida multiuso',
    image:
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop',
    detailedDescription:
      'Limpador de ação instantânea para limpezas rápidas. Ideal para manutenção diária de áreas comuns.',
    features: [
      'Ação rápida',
      'Multiuso',
      'Praticidade',
      'Fragrância',
      '5 litros',
    ],
  },
  {
    id: '19',
    name: 'Papel Higiênico 64 Rolos',
    category: 'Descartáveis',
    description: 'Papel higiênico folha dupla de qualidade',
    image:
      'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&h=400&fit=crop',
    detailedDescription:
      'Papel higiênico macio e resistente, com folha dupla para maior conforto. Pacote com 64 rolos ideal para uso profissional.',
    features: [
      'Folha dupla',
      '64 rolos',
      'Macio e resistente',
      'Alta qualidade',
      'Uso profissional',
    ],
  },
  {
    id: '20',
    name: 'Saco de Lixo 100L - Pacote 100un',
    category: 'Descartáveis',
    description: 'Saco de lixo reforçado 100 litros',
    image:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=400&fit=crop',
    detailedDescription:
      'Sacos de lixo de alta resistência, ideais para lixeiras grandes de condomínios e empresas. Extra resistente a rasgos.',
    features: [
      '100 litros',
      'Extra resistente',
      '100 unidades',
      'Cor preta',
      'Anti-vazamento',
    ],
  },
  {
    id: '21',
    name: 'Papel Toalha Bobina 6un',
    category: 'Descartáveis',
    description: 'Papel toalha interfolhado de alta absorção',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    detailedDescription:
      'Papel toalha interfolhado de 2 dobras, com alta capacidade de absorção e resistência. Ideal para banheiros corporativos.',
    features: [
      'Alta absorção',
      '6 rolos',
      '2 dobras',
      'Econômico',
      '1000 folhas por rolo',
    ],
  },
  {
    id: '22',
    name: 'Guardanapo 50x50 - Pacote 500un',
    category: 'Descartáveis',
    description: 'Guardanapos de papel de alta qualidade',
    image:
      'https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=400&h=400&fit=crop',
    detailedDescription:
      'Guardanapos de papel macios e absorventes, perfeitos para eventos, refeitórios e restaurantes.',
    features: [
      '500 unidades',
      'Tamanho 50x50cm',
      'Macio e absorvente',
      'Branco',
      'Alta qualidade',
    ],
  },
  {
    id: '23',
    name: 'Copo Descartável 200ml - 2500un',
    category: 'Descartáveis',
    description: 'Copos descartáveis transparentes 200ml',
    image:
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    detailedDescription:
      'Copos descartáveis de alta qualidade, transparentes, ideais para água, refrigerante e bebidas frias.',
    features: [
      '2500 unidades',
      '200ml',
      'Transparente',
      'Resistente',
      'Uso profissional',
    ],
  },
  {
    id: '24',
    name: 'Luva Látex Descartável - Caixa 100un',
    category: 'Descartáveis',
    description: 'Luvas descartáveis de látex para limpeza',
    image:
      'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    detailedDescription:
      'Luvas de látex resistentes, ideais para proteção durante atividades de limpeza e manuseio de produtos químicos.',
    features: [
      '100 unidades',
      'Látex natural',
      'Tamanhos: P, M, G',
      'Resistente',
      'Texturizada',
    ],
  },
  {
    id: '25',
    name: 'Máscara Descartável - Caixa 50un',
    category: 'Descartáveis',
    description: 'Máscaras descartáveis tripla camada',
    image:
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=400&fit=crop',
    detailedDescription:
      'Máscaras descartáveis de tripla camada, com elástico auricular e clipe nasal. Proteção e conforto.',
    features: [
      '50 unidades',
      'Tripla camada',
      'Clipe nasal',
      'Elástico macio',
      'Alta filtragem',
    ],
  },
  {
    id: '26',
    name: 'Prato Descartável - Pacote 500un',
    category: 'Descartáveis',
    description: 'Pratos descartáveis brancos',
    image:
      'https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=400&h=400&fit=crop',
    detailedDescription:
      'Pratos descartáveis resistentes, ideais para eventos, festas e refeitórios. Não vazam nem entortam.',
    features: [
      '500 unidades',
      'Cor branca',
      'Resistente',
      '21cm de diâmetro',
      'Alta qualidade',
    ],
  },
  {
    id: '27',
    name: 'Garfo e Faca Descartável - Kit 500un',
    category: 'Descartáveis',
    description: 'Kit de talheres descartáveis',
    image:
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    detailedDescription:
      'Kit completo com garfos e facas descartáveis resistentes, perfeitos para eventos e refeições corporativas.',
    features: [
      '500 unidades cada',
      'Resistente',
      'Cor branca',
      'Não quebra facilmente',
      'Kit completo',
    ],
  },
  {
    id: '28',
    name: 'Saco de Lixo 50L - Pacote 200un',
    category: 'Descartáveis',
    description: 'Saco de lixo 50 litros reforçado',
    image:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=400&fit=crop',
    detailedDescription:
      'Sacos de lixo de 50 litros, ideal para lixeiras médias de escritórios, banheiros e áreas comuns.',
    features: [
      '50 litros',
      '200 unidades',
      'Resistente',
      'Cor preta',
      'Bom custo-benefício',
    ],
  },
  {
    id: '29',
    name: 'Sabonete em Barra - Caixa 120un',
    category: 'Higiene',
    description: 'Sabonetes em barra de qualidade',
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop',
    detailedDescription:
      'Sabonetes em barra de alta qualidade, ideais para banheiros de empresas e condomínios. Fragrância agradável.',
    features: [
      '120 unidades',
      'Fragrância suave',
      'Hidratante',
      'Dermatologicamente testado',
      '90g cada',
    ],
  },
  {
    id: '30',
    name: 'Shampoo 5L',
    category: 'Higiene',
    description: 'Shampoo neutro para uso profissional',
    image:
      'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    detailedDescription:
      'Shampoo neutro de alta qualidade para uso em academias, hotéis e vestiários. Limpa sem agredir os fios.',
    features: [
      '5 litros',
      'pH neutro',
      'Limpeza profunda',
      'Fragrância suave',
      'Uso profissional',
    ],
  },
  {
    id: '31',
    name: 'Condicionador 5L',
    category: 'Higiene',
    description: 'Condicionador para uso profissional',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    detailedDescription:
      'Condicionador hidratante que facilita o desembaraço e deixa os cabelos macios. Ideal para uso profissional.',
    features: [
      '5 litros',
      'Hidratante',
      'Facilita desembaraço',
      'Fragrância agradável',
      'Alto rendimento',
    ],
  },
  {
    id: '32',
    name: 'Creme Dental - Caixa 72un',
    category: 'Higiene',
    description: 'Creme dental com flúor',
    image:
      'https://images.unsplash.com/photo-1622654892886-c3c34cee9f2c?w=400&h=400&fit=crop',
    detailedDescription:
      'Creme dental com flúor para proteção completa dos dentes. Ideal para programas de higiene bucal em empresas.',
    features: [
      '72 unidades',
      'Com flúor',
      'Proteção anticáries',
      'Hálito fresco',
      '90g cada',
    ],
  },
  {
    id: '33',
    name: 'Escova Dental - Caixa 144un',
    category: 'Higiene',
    description: 'Escovas dentais de cerdas macias',
    image:
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
    detailedDescription:
      'Escovas dentais com cerdas macias, ideais para programas de saúde bucal. Cabo anatômico e confortável.',
    features: [
      '144 unidades',
      'Cerdas macias',
      'Cabo anatômico',
      'Cores variadas',
      'Embalagem individual',
    ],
  },
  {
    id: '34',
    name: 'Desodorante - Caixa 24un',
    category: 'Higiene',
    description: 'Desodorante aerosol',
    image:
      'https://images.unsplash.com/photo-1585421514738-01798e348b1d?w=400&h=400&fit=crop',
    detailedDescription:
      'Desodorante aerosol de longa duração. Fragrância suave e proteção de até 48 horas.',
    features: [
      '24 unidades',
      '48h de proteção',
      'Fragrância suave',
      'Aerosol',
      '150ml cada',
    ],
  },
  {
    id: '35',
    name: 'Papel Higiênico Folha Dupla 32 Rolos',
    category: 'Higiene',
    description: 'Papel higiênico premium folha dupla',
    image:
      'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&h=400&fit=crop',
    detailedDescription:
      'Papel higiênico premium com folha dupla extra macia. Qualidade superior para banheiros executivos.',
    features: [
      '32 rolos',
      'Folha dupla',
      'Extra macio',
      'Alta qualidade',
      'Perfumado',
    ],
  },
  {
    id: '36',
    name: 'Lenço Umedecido - Caixa 48 Pacotes',
    category: 'Higiene',
    description: 'Lenços umedecidos para higiene pessoal',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    detailedDescription:
      'Lenços umedecidos com loção hidratante, ideais para limpeza e higiene pessoal. Macios e resistentes.',
    features: [
      '48 pacotes',
      'Com loção',
      'Dermatologicamente testado',
      '100 lenços por pacote',
      'Tampa flip-top',
    ],
  },
];
