export interface Product {
    id: number;
    name: string;
    region: string;
    year: string;
    price: number;
    image: string;
    description: string;
    characteristics: string;
    harmonization: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Barolo Riserva",
        region: "Piemonte",
        year: "2016",
        price: 489.00,
        image: "/images/vinho-barolo-reserva.png",
        description: "O 'Rei dos Vinhos'. Complexo, com aromas de rosas secas, alcatrão e trufas. Potente e longevo.",
        characteristics: "Encorpado, taninos firmes, final persistente.",
        harmonization: "Risoto de trufas, ossobuco, caça."
    },
    {
        id: 2,
        name: "Brunello di Montalcino",
        region: "Toscana",
        year: "2015",
        price: 650.00,
        image: "/images/vinho-brunello-montalcino.png",
        description: "Um ícone italiano. Sangiovese Grosso em sua expressão máxima. Elegância e estrutura impecáveis.",
        characteristics: "Encorpado, complexo, taninos aveludados.",
        harmonization: "Bistecca alla Fiorentina, cordeiro assado."
    },
    {
        id: 3,
        name: "Chianti Classico",
        region: "Toscana",
        year: "2018",
        price: 249.00,
        image: "/images/vinho-chianti-classico.png",
        description: "Um clássico toscano de cor rubi intensa. Notas de cereja negra, couro e especiarias.",
        characteristics: "Corpo médio, taninos elegantes, acidez equilibrada.",
        harmonization: "Massas com molho vermelho, carnes grelhadas."
    },
    {
        id: 4,
        name: "Amarone della Valpolicella",
        region: "Veneto",
        year: "2017",
        price: 520.00,
        image: "/images/vinho-amarone-valpolicella.png",
        description: "Vinho de meditação. Feito com uvas passificadas, resultando em grande concentração.",
        characteristics: "Muito encorpado, aveludado, notas de frutas secas.",
        harmonization: "Queijo Gorgonzola, chocolate amargo."
    },
    {
        id: 5,
        name: "Prosecco Superiore",
        region: "Valdobbiadene",
        year: "NV",
        price: 189.00,
        image: "/images/vinho-prosecco-superiore.png",
        description: "Espumante refinado e vibrante. Perlage fina e persistente.",
        characteristics: "Leve, fresco, frutado.",
        harmonization: "Aperitivos, frutos do mar, sushi."
    },
    {
        id: 6,
        name: "Franciacorta Satèn",
        region: "Lombardia",
        year: "2019",
        price: 320.00,
        image: "/images/vinho-franciacorta-saten.png",
        description: "A resposta italiana ao Champagne. Método tradicional, cremoso e sedoso.",
        characteristics: "Bolhas delicadas, notas de amêndoas e pão tostado.",
        harmonization: "Lagosta, caviar, queijo Brie."
    },
    {
        id: 7,
        name: "Nebbiolo Langhe",
        region: "Piemonte",
        year: "2020",
        price: 195.00,
        image: "/images/vinho-nebbiolo-langhe.png",
        description: "A elegância da uva Nebbiolo em uma versão mais jovem e acessível.",
        characteristics: "Taninos presentes, aromas florais e frutados.",
        harmonization: "Massas com trufas, queijos de média cura."
    },
    {
        id: 8,
        name: "Sangiovese Toscana",
        region: "Toscana",
        year: "2019",
        price: 150.00,
        image: "/images/vinho-sangiovese-toscana.png",
        description: "A uva mais plantada da Itália em sua versão pura e autêntica.",
        characteristics: "Fruta vermelha fresca, boa acidez, versátil.",
        harmonization: "Pizza, antepastos, massas leves."
    },
    {
        id: 9,
        name: "Montepulciano d'Abruzzo",
        region: "Abruzzo",
        year: "2018",
        price: 135.00,
        image: "/images/vinho-montepulciano-abruzzo.png",
        description: "Um tinto robusto e frutado, perfeito para o dia a dia.",
        characteristics: "Taninos macios, notas de frutas negras e especiarias.",
        harmonization: "Churrasco, embutidos, pratos condimentados."
    },
    {
        id: 10,
        name: "Primitivo di Manduria",
        region: "Puglia",
        year: "2019",
        price: 210.00,
        image: "/images/vinho-primitivo-manduria.png",
        description: "Do 'salto da bota', um vinho quente, intenso e envolvente.",
        characteristics: "Encorpado, notas de geleia de frutas e tabaco.",
        harmonization: "Carnes de caça, queijos fortes."
    },
    {
        id: 11,
        name: "Nero d'Avola Sicilia",
        region: "Sicília",
        year: "2020",
        price: 165.00,
        image: "/images/vinho-nero-davola-sicilia.png",
        description: "O príncipe dos vinhos sicilianos. Caráter mediterrâneo.",
        characteristics: "Frutado, especiarias doces, corpo médio.",
        harmonization: "Caponata, atum grelhado, massas com berinjela."
    },
    {
        id: 12,
        name: "Vermentino di Sardegna",
        region: "Sardenha",
        year: "2021",
        price: 145.00,
        image: "/images/vinho-vermentino-sardegna.png",
        description: "Um branco fresco e mineral, com a brisa do mar.",
        characteristics: "Acidez vibrante, notas cítricas e florais.",
        harmonization: "Peixes grelhados, frutos do mar, saladas."
    }
];
