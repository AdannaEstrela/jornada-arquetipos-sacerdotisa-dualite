export interface Chapter {
  day: number;
  title: string;
  divinity: string;
  imageUrl: string;
  arcano: {
    title: string;
    myth: string;
    meaning: string;
    keywords: string[];
  };
  quiz: string[];
  ritual: {
    title: string;
    description: string;
  };
  intuitionTip: string;
  affirmation: string;
  metaphor: string;
  aromatherapy: {
    oil: string;
    usage: string;
    benefits: string;
  };
  phytotherapy: {
    herb: string;
    properties: string;
    contraindications: string;
    recipes: { title: string; description: string }[];
  };
  lunar: {
    connection: string;
    reflection: string;
  };
  musicLink: string;
}

export const chapters: Chapter[] = [
  // Dia 0 - O Louco
  {
    day: 0,
    title: "O Louco",
    divinity: "Dionísio",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 0 – O Louco",
      myth: "Dionísio, o deus do vinho, do êxtase e da natureza selvagem. Nascido duas vezes, ele representa o poder da ressurreição e a coragem de viver fora das convenções. Ele dança entre a loucura e a genialidade, o caos e a criação, nos convidando a abraçar o desconhecido com uma fé inabalável e um coração aberto à espontaneidade.",
      meaning: "O Louco é o ponto zero, o potencial puro. Ele marca o início da sua jornada, o primeiro passo dado com fé cega, sem saber o destino, mas confiando no caminho. Ele te convida a se libertar de bagagens, medos e expectativas. A Sacerdotisa Interior, neste momento, é a alma livre que se permite começar de novo. A sombra que ele revela é a imprudência e a negação da realidade. A luz é a liberdade, a autenticidade e a confiança cósmica.",
      keywords: ["Início", "Fé", "Espontaneidade", "Liberdade", "Potencial", "Inocência"],
    },
    quiz: [
      "Se você pudesse dar um passo hoje, sem a necessidade de saber onde ele te levaria, para qual direção seus pés se moveriam naturalmente?",
      "Que parte sua, talvez uma parte esquecida, anseia por dançar livremente sob o céu, sem se preocupar com quem está olhando?",
      "Se a confiança fosse um vento suave te empurrando pelas costas, o que você se permitiria começar, mesmo que parecesse um pouco 'louco'?",
    ],
    ritual: {
      title: "Dança da Alma Livre (10 min)",
      description: "Coloque uma música instintiva e vibrante (a playlist da jornada é perfeita). Em um espaço onde você não seja interrompida, feche os olhos e simplesmente permita que seu corpo se mova. Sem coreografia, sem julgamento. Pule, gire, balance os braços. Deixe a música te guiar. Dance até sentir que liberou qualquer tensão ou rigidez.",
    },
    intuitionTip: "Hoje, ao sair de casa, faça um caminho diferente do habitual. Pode ser uma rua nova no seu bairro ou um corredor diferente no supermercado. Apenas observe o que você vê, ouve e sente de novo, sem propósito, apenas pela experiência.",
    affirmation: "Assim como Dionísio encontra êxtase no fluxo da vida, você pode se permitir abraçar o inesperado com um espírito de alegre confiança.",
    metaphor: "Imagine uma semente que não sabe que árvore se tornará. Ela não questiona, não hesita. Ela simplesmente se entrega à terra escura, confiando que o sol e a chuva a farão brotar no tempo certo.",
    aromatherapy: {
      oil: "Óleo Essencial de Laranja Doce (Citrus sinensis)",
      usage: "Pingue 3 a 5 gotas em seu difusor de ambientes. Ou, pingue 1 gota na palma das mãos, esfregue-as e inale profundamente por 3 vezes.",
      benefits: "A Laranja Doce é o óleo da alegria e da espontaneidade. Ele dissipa a melancolia, estimula a criatividade e nos lembra da leveza da criança interior, perfeita para a energia do Louco.",
    },
    phytotherapy: {
      herb: "Dente-de-leão (Taraxacum officinale)",
      properties: "Fisicamente, é um poderoso diurético e desintoxicante do fígado. Energeticamente, ajuda a liberar padrões mentais rígidos e crenças limitantes, abrindo caminho para o novo.",
      contraindications: "Pessoas com obstrução dos ductos biliares ou oclusão intestinal devem evitar. Use com cautela se tiver gastrite ou úlcera.",
      recipes: [
        {
          title: "Chá de Liberação",
          description: "Ferva 200ml de água. Desligue o fogo e adicione 1 colher de chá das folhas secas de dente-de-leão. Abafe por 10 minutos, coe e beba, intencionando que ele limpe tudo o que te impede de dar o primeiro passo.",
        },
        {
          title: "Banho de Novos Começos",
          description: "Prepare o chá (500ml de água para 3 colheres de sopa da erva). Após seu banho de higiene, jogue a mistura coada do pescoço para baixo, visualizando velhas amarras se dissolvendo e indo ralo abaixo.",
        },
      ],
    },
    lunar: {
      connection: "O Louco está profundamente conectado à energia da Lua Nova. É o momento de escuridão fértil, o ponto zero do ciclo, onde plantamos nossas sementes de intenção sem ter certeza de como irão germinar.",
      reflection: "Nesta Lua Nova da alma, que semente de 'loucura' sagrada eu me permito plantar para o ciclo que se inicia?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 1 - O Mago
  {
    day: 1,
    title: "O Mago",
    divinity: "Hermes",
    imageUrl: "https://images.unsplash.com/photo-1564045579622-00329c35154c?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 1 – O Mago",
      myth: "Hermes é o mensageiro dos deuses, o deus da comunicação, da astúcia, da magia e das fronteiras. Ele transita entre o Olimpo, a Terra e o Submundo com fluidez e habilidade. Hermes nos ensina a usar os recursos que temos (os quatro elementos em sua mesa) para manifestar nossa vontade no mundo, transformando pensamento em realidade.",
      meaning: "Após o salto de fé do Louco, o Mago aparece para te dizer: 'Você tem tudo o que precisa'. Ele representa o poder da manifestação, o foco e a habilidade de usar seus dons e ferramentas para co-criar sua realidade. A Sacerdotisa Interior, aqui, é a Alquimista, aquela que canaliza a vontade divina e a manifesta no plano terreno. A sombra deste arcano é a manipulação e o engano. Sua luz é o poder pessoal, a habilidade e a concentração.",
      keywords: ["Manifestação", "Poder", "Habilidade", "Foco", "Comunicação", "Recursos"],
    },
    quiz: [
      "Se todos os recursos do universo estivessem disponíveis em uma mesa à sua frente agora, qual ferramenta sua mão escolheria primeiro, intuitivamente?",
      "Que mensagem, que antes parecia difícil de expressar, poderia encontrar as palavras certas para fluir através de você hoje?",
      "Ao observar suas próprias habilidades como se fossem tesouros, qual delas você se permitiria polir e usar com mais intenção a partir de agora?",
    ],
    ritual: {
      title: "Altar da Manifestação (15 min)",
      description: "Crie um pequeno altar temporário. Represente os 4 elementos: uma vela (fogo), um copo com água (água), um cristal ou moeda (terra) e um incenso ou pena (ar). Sente-se diante deles. Escreva em um papel um desejo claro e objetivo para esta jornada. Leia-o em voz alta e queime o papel na chama da vela, visualizando seu desejo subindo com a fumaça e se tornando realidade.",
    },
    intuitionTip: "Hoje, preste atenção à sua fala. Use palavras que fortalecem, como 'Eu escolho', 'Eu posso', 'Eu crio', em vez de 'Eu tenho que' ou 'Eu não consigo'. Observe como a linguagem molda sua energia.",
    affirmation: "Assim como Hermes viaja entre os mundos com maestria, você pode descobrir que já possui a habilidade de conectar sua intenção ao poder da manifestação.",
    metaphor: "Imagine que você é uma artesã e suas mãos sabem exatamente como moldar o barro. Você não força a forma, você sente o potencial dentro da argila e simplesmente a guia, com foco e presença, até que a obra de arte se revele.",
    aromatherapy: {
      oil: "Óleo Essencial de Hortelã-Pimenta (Mentha piperita)",
      usage: "Pingue 1 gota na palma das mãos, esfregue e inale antes de uma tarefa que exija foco. Ou use 3 gotas no difusor para clarear o ambiente.",
      benefits: "A Hortelã-Pimenta é o óleo da clareza mental e do foco. Ele desperta a mente, melhora a concentração e ajuda a organizar os pensamentos, sendo um aliado perfeito para a energia direcionada do Mago.",
    },
    phytotherapy: {
      herb: "Alecrim (Rosmarinus officinalis)",
      properties: "Fisicamente, melhora a circulação e a digestão. Energeticamente, é uma erva de foco, clareza mental, proteção e manifestação. Conhecida como a 'erva da alegria'.",
      contraindications: "Hipertensos e gestantes devem usar com moderação. Evitar o uso à noite, pois pode causar insônia.",
      recipes: [
        {
          title: "Chá do Mago",
          description: "Ferva 200ml de água, desligue o fogo e adicione 1 colher de chá de alecrim seco. Abafe por 5 minutos. Beba pela manhã, mentalizando clareza e poder para realizar suas tarefas.",
        },
        {
          title: "Banho de Foco",
          description: "Prepare o chá concentrado (500ml de água para 3 colheres de sopa da erva). Após o banho de higiene, jogue a mistura coada do pescoço para baixo, pedindo que a sabedoria do alecrim clareie sua mente e direcione sua energia.",
        },
      ],
    },
    lunar: {
      connection: "O Mago se conecta com a energia da Lua Crescente, o momento de agir. Após plantar a semente na Lua Nova, agora é hora de nutrir, focar e usar nossos recursos para fazer o projeto crescer.",
      reflection: "Nesta fase de crescimento, qual ação focada eu posso tomar hoje para nutrir a intenção que plantei?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 2 - A Sacerdotisa
  {
    day: 2,
    title: "A Sacerdotisa",
    divinity: "Perséfone",
    imageUrl: "https://images.unsplash.com/photo-1532719089026-5354333a80a7?q=80&w=1964&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 2 – A Sacerdotisa",
      myth: "Perséfone, Rainha do Submundo e deusa da primavera. Sua história é a jornada arquetípica da donzela que desce ao inconsciente (seu rapto por Hades), confronta suas sombras, integra seu poder e emerge como uma mulher sábia e soberana de seus próprios reinos, tanto internos quanto externos. Ela é a guardiã dos mistérios, aquela que conhece o que está oculto sob a superfície.",
      meaning: "Este é o coração da nossa jornada. A Sacerdotisa te convida a silenciar o mundo exterior para ouvir a voz da sua intuição. Ela é o portal para o seu inconsciente, seus sonhos, seus segredos mais profundos. Ela te ensina que a verdadeira sabedoria não está nos livros, mas no silêncio do seu próprio ser. A Sacerdotisa Interior é esta conexão direta com o divino feminino. Sua sombra é o isolamento e a passividade. Sua luz é a intuição, a sabedoria oculta e a autoconfiança espiritual.",
      keywords: ["Intuição", "Mistério", "Inconsciente", "Sabedoria Interior", "Silêncio", "Gestação"],
    },
    quiz: [
      "Se sua intuição tivesse uma voz, em que parte do seu corpo você a sentiria sussurrar hoje?",
      "Que segredo sua alma está esperando o silêncio certo para te revelar?",
      "Ao se permitir olhar para além do véu da realidade cotidiana, que padrão ou símbolo sutil começa a se mostrar para você?",
    ],
    ritual: {
      title: "Meditação do Véu (15 min)",
      description: "Sente-se confortavelmente, feche os olhos e respire fundo. Visualize que você está diante de um véu de seda translúcido, que separa o mundo consciente do inconsciente. Com reverência, peça permissão para olhar além. Lentamente, em sua mente, afaste uma ponta do véu. Não force nada, apenas observe que imagem, sentimento ou palavra surge do outro lado. Agradeça e feche o véu ao terminar.",
    },
    intuitionTip: "Hoje, antes de tomar uma pequena decisão (o que comer, que música ouvir), feche os olhos, coloque a mão no coração e pergunte: 'O que minha alma realmente precisa agora?'. Siga a primeira resposta que vier, sem questionar.",
    affirmation: "Assim como Perséfone viaja entre a luz e a escuridão, você pode se permitir confiar na sabedoria que floresce nos jardins secretos da sua alma.",
    metaphor: "Imagine um lago de águas perfeitamente paradas. A superfície reflete o céu. Mas a verdadeira vida, os tesouros e os mistérios, estão nas profundezas. Somente no silêncio e na quietude é possível enxergar o que há lá embaixo.",
    aromatherapy: {
      oil: "Óleo Essencial de Sândalo (Santalum album) ou Olíbano (Boswellia carterii)",
      usage: "Use 1 gota no chakra do terceiro olho (entre as sobrancelhas) antes da meditação, ou 4 gotas no difusor para criar um ambiente sagrado e introspectivo.",
      benefits: "Ambos são óleos sagrados, usados há milênios para facilitar a meditação, acalmar a mente e abrir o canal da intuição. Eles nos conectam com a sabedoria espiritual superior.",
    },
    phytotherapy: {
      herb: "Artemísia (Artemisia vulgaris)",
      properties: "Conhecida como a 'erva das bruxas', a artemísia é poderosa para abrir a visão interior, intensificar sonhos (sonhos lúcidos) e proteger o campo psíquico. Fisicamente, regula ciclos menstruais.",
      contraindications: "TOTALMENTE PROIBIDA para gestantes (pode ser abortiva). Evitar durante a amamentação. Usar em pequenas quantidades.",
      recipes: [
        {
          title: "Chá dos Sonhos (use com cautela)",
          description: "Ferva 200ml de água, desligue e adicione apenas uma pitada (meia colher de café) de artemísia seca. Abafe por 5 minutos. Beba apenas meia xícara antes de dormir, pedindo por sonhos claros e reveladores.",
        },
        {
          title: "Banho de Intuição",
          description: "Prepare o chá (500ml de água para 1 colher de sopa da erva). Jogue do pescoço para baixo, mentalizando a abertura do seu terceiro olho e a conexão com sua sabedoria interior.",
        },
      ],
    },
    lunar: {
      connection: "A Sacerdotisa ressoa com a energia profunda da Lua Cheia, quando a luz do Sol ilumina plenamente a noite, revelando o que estava oculto na escuridão. É um pico de energia psíquica e intuição.",
      reflection: "Sob a luz desta Lua Cheia, que verdade oculta sobre mim mesma está sendo iluminada e revelada?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 3 - A Imperatriz
  {
    day: 3,
    title: "A Imperatriz",
    divinity: "Deméter",
    imageUrl: "https://images.unsplash.com/photo-1598164790483-7b6a8c389547?q=80&w=1964&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 3 – A Imperatriz",
      myth: "Deméter é a deusa da agricultura, da colheita, da fertilidade e da nutrição. Como a Grande Mãe, ela rege os ciclos da natureza e da vida. Sua dor pela perda da filha Perséfone cria o inverno, e sua alegria em seu retorno traz a primavera. Ela nos ensina sobre o poder da criação, do cuidado, da abundância e da beleza sensorial do mundo.",
      meaning: "A Imperatriz é o arquétipo da criação em sua forma mais plena. Ela te convida a conectar-se com seu corpo, com os prazeres da vida, com a natureza e com sua capacidade de nutrir a si mesma e aos seus projetos. A Sacerdotisa Interior aqui é a Mãe Criadora, aquela que dá à luz novas ideias, projetos e uma nova versão de si mesma. A sombra é o excesso, o apego e a superproteção. A luz é a fertilidade, a abundância e o amor incondicional.",
      keywords: ["Criação", "Abundância", "Nutrição", "Fertilidade", "Natureza", "Sensualidade"],
    },
    quiz: [
      "Se a abundância fosse uma cor, qual cor preencheria seu corpo e seu dia hoje?",
      "Que projeto ou ideia, como um pequeno jardim, você se permitiria regar e nutrir com mais amor a partir de agora?",
      "De que maneira simples e sensorial seu corpo está pedindo para ser cuidado e honrado neste momento?",
    ],
    ritual: {
      title: "Banho Nutritivo (15 min)",
      description: "Prepare um banho morno. Adicione um punhado de aveia (em um saquinho de pano para não entupir o ralo), algumas pétalas de rosa ou calêndula e 3 gotas de óleo essencial de gerânio. Entre na água e sinta-se abraçada e nutrida pela Mãe Terra. Concentre-se na sensação da água em sua pele.",
    },
    intuitionTip: "Coma uma fruta hoje com total presença. Observe sua cor, sinta sua textura, seu aroma. Coma devagar, saboreando cada pedaço, com gratidão pela nutrição que a Terra te oferece.",
    affirmation: "Assim como Deméter nutre a terra para que floresça, você pode descobrir que já existe dentro de si uma fonte inesgotável de amor para nutrir sua própria vida.",
    metaphor: "Imagine um campo fértil. Você não precisa forçar as sementes a crescer. Você apenas prepara a terra, oferece água e sol, e confia no processo natural da vida, que sabe exatamente como florescer em abundância.",
    aromatherapy: {
      oil: "Óleo Essencial de Rosa (Rosa damascena) ou Gerânio (Pelargonium graveolens)",
      usage: "Dilua 1 gota em um pouco de óleo vegetal (como amêndoas) e massageie a área do coração. Ou use 4 gotas no difusor.",
      benefits: "São os óleos do sagrado feminino. Acalmam o coração, promovem o amor-próprio, equilibram os hormônios e conectam com a energia da Grande Mãe.",
    },
    phytotherapy: {
      herb: "Camomila (Matricaria chamomilla)",
      properties: "Fisicamente, é um calmante digestivo e relaxante. Energeticamente, tem uma vibração maternal, que acalma, nutre e traz uma sensação de conforto e segurança.",
      contraindications: "Geralmente segura, mas pode causar reações alérgicas em pessoas sensíveis à família Asteraceae.",
      recipes: [
        {
          title: "Chá do Aconchego",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de sopa de flores de camomila. Abafe por 5 a 7 minutos. Beba antes de dormir ou em momentos de estresse.",
        },
        {
          title: "Escalda-pés da Imperatriz",
          description: "Prepare um chá forte de camomila (1 litro de água para 4 colheres de sopa). Despeje em uma bacia com água morna e mergulhe os pés, visualizando a energia da terra subindo e te nutrindo.",
        },
      ],
    },
    lunar: {
      connection: "A Imperatriz está no auge de seu poder na Lua Cheia, o ápice da fertilidade, da colheita e da manifestação. É quando a luz está em sua plenitude, mostrando os frutos do que foi plantado.",
      reflection: "Sob a luz abundante desta Lua, quais 'frutos' em minha vida eu posso reconhecer, celebrar e agradecer hoje?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 4 - O Imperador
  {
    day: 4,
    title: "O Imperador",
    divinity: "Zeus",
    imageUrl: "https://images.unsplash.com/photo-1615184697985-c9bde1b07ab6?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 4 – O Imperador",
      myth: "Zeus é o rei dos deuses, o senhor do céu e do trovão, que governa o cosmos a partir do seu trono no Olimpo. Ele representa a ordem, a lei, a estrutura e a autoridade paterna. Após destronar seu pai Cronos, Zeus estabeleceu um novo sistema no universo, distribuindo domínios entre os deuses e garantindo estabilidade. Ele é o arquiteto do mundo, o protetor da ordem e o mestre da estratégia.",
      meaning: "Depois da criação fértil da Imperatriz, o Imperador chega para dar forma e estrutura a essa energia. Ele te convida a ser a soberana da sua própria vida, a estabelecer limites saudáveis, a criar ordem em seu caos interior e a usar sua autoridade com sabedoria. A Sacerdotisa Interior aqui é a Líder Sábia, aquela que constrói um reino seguro e estável para sua alma florescer. A sombra deste arcano é a rigidez, o controle excessivo e o autoritarismo. Sua luz é a estabilidade, a liderança e a proteção.",
      keywords: ["Estrutura", "Ordem", "Autoridade", "Liderança", "Estabilidade", "Limites"],
    },
    quiz: [
      "Se o seu mundo interior fosse um reino, que lei gentil e firme você estabeleceria hoje para garantir sua paz e segurança?",
      "Em que área da sua vida um pouco mais de estrutura poderia permitir que sua energia fluísse com mais liberdade e propósito?",
      "Ao se permitir sentar no trono de sua própria vida, qual decisão, que antes parecia difícil, agora se torna clara e simples?",
    ],
    ritual: {
      title: "O Mapa do Reino (15 min)",
      description: "Pegue uma folha de papel e caneta. Desenhe um círculo no centro que representa você. Ao redor, escreva as principais áreas da sua vida (trabalho, família, saúde, espiritualidade, etc.). Para cada área, escreva uma ação concreta e estruturada que você pode tomar esta semana para trazer mais ordem e estabilidade. Ex: 'Organizar minha mesa de trabalho por 10 minutos' ou 'Definir meu horário de dormir'.",
    },
    intuitionTip: "Hoje, pratique dizer 'não' de forma amorosa a algo que drene sua energia ou ultrapasse seus limites. Observe a sensação de poder e auto-respeito que surge ao honrar seu próprio espaço.",
    affirmation: "Assim como Zeus governa o céu com sabedoria e ordem, você pode descobrir a força tranquila que existe em ser a arquiteta consciente do seu próprio universo.",
    metaphor: "Imagine um rio poderoso. Sem margens, ele se espalha e perde sua força. As margens (a estrutura) não o aprisionam; elas dão ao rio a direção e o poder para seguir seu curso e chegar ao oceano.",
    aromatherapy: {
      oil: "Óleo Essencial de Cedro Atlas (Cedrus atlantica)",
      usage: "Pingue 4 gotas no difusor enquanto trabalha ou planeja sua semana. Ou pingue 1 gota na sola dos pés (diluído em óleo vegetal) para se sentir mais aterrada e estável.",
      benefits: "O Cedro é a árvore da força, estabilidade e dignidade. Ele aterra a energia, acalma a mente ansiosa e promove um sentimento de segurança e autoconfiança, perfeito para a energia do Imperador.",
    },
    phytotherapy: {
      herb: "Gengibre (Zingiber officinale)",
      properties: "Fisicamente, é um poderoso anti-inflamatório, digestivo e estimulante da circulação. Energeticamente, o gengibre traz foco, determinação e a energia do fogo para a ação estruturada.",
      contraindications: "Pessoas com hipertensão, problemas de coagulação ou cálculos biliares devem usar com moderação.",
      recipes: [
        {
          title: "Chá da Ação Focada",
          description: "Ferva 200ml de água com 2-3 rodelas finas de gengibre fresco por 5 minutos. Desligue, adicione algumas gotas de limão e beba pela manhã para ativar sua força realizadora.",
        },
        {
          title: "Banho do Construtor",
          description: "Prepare um chá concentrado de gengibre. Após o banho, jogue a mistura coada do pescoço para baixo, pedindo coragem e estrutura para construir a vida que você deseja.",
        },
      ],
    },
    lunar: {
      connection: "O Imperador se alinha com a Lua Crescente, o momento de construir e dar forma às intenções plantadas na Lua Nova. É a fase de arregaçar as mangas e criar as estruturas necessárias para o crescimento.",
      reflection: "Nesta fase de construção, que pilar ou estrutura fundamental eu preciso estabelecer em minha vida para sustentar meus sonhos?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 5 - O Hierofante
  {
    day: 5,
    title: "O Hierofante",
    divinity: "Quíron",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8be22b7db0f6?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 5 – O Hierofante",
      myth: "Quíron, o mais sábio dos centauros, era um mestre imortal, curador e professor dos grandes heróis gregos. Diferente dos outros centauros selvagens, ele era um guardião da sabedoria, música, astrologia e medicina. Ferido acidentalmente por uma flecha envenenada, ele não podia morrer, mas também não conseguia se curar completamente, tornando-se o 'Curador Ferido'. Ele é a ponte entre a sabedoria divina e o aprendizado humano.",
      meaning: "O Hierofante é o guia espiritual, o mestre que revela os mistérios sagrados. Ele te convida a buscar conhecimento, a encontrar um professor ou mentor, e a conectar-se com tradições e sistemas de crenças que ressoam com sua alma. A Sacerdotisa Interior aqui é a Buscadora da Verdade, aquela que aprende e também ensina, transformando suas feridas em fontes de sabedoria para os outros. A sombra deste arcano é o dogmatismo e a conformidade cega. Sua luz é a sabedoria, a orientação e a fé.",
      keywords: ["Tradição", "Sabedoria", "Mentoria", "Aprendizado", "Crenças", "Ponte Espiritual"],
    },
    quiz: [
      "Se a sabedoria ancestral pudesse te dar um conselho hoje através de um livro, de um mestre ou do canto de um pássaro, que mensagem você estaria pronta para ouvir?",
      "Que 'ferida' em sua história já começou a se transformar em uma fonte de profunda compaixão e entendimento?",
      "Ao se permitir ser tanto aluna quanto mestra, que conhecimento você sentiria alegria em compartilhar, mesmo que seja de forma simples?",
    ],
    ritual: {
      title: "Carta à Mestra Interior (10 min)",
      description: "Acenda uma vela. Sente-se em silêncio e visualize a versão mais sábia de si mesma, sua Hierofante interna. Escreva uma carta para ela, fazendo uma pergunta que está em seu coração. Depois, mude a caneta de mão (ou apenas a intenção) e permita que a resposta flua, sem julgamento. Deixe a sabedoria do seu Eu Superior te guiar.",
    },
    intuitionTip: "Hoje, procure aprender algo novo, não por obrigação, mas por pura curiosidade. Pode ser ler um poema, ouvir um podcast sobre um tema desconhecido ou aprender o nome de uma planta em seu caminho. Alimente sua alma com conhecimento.",
    affirmation: "Assim como Quíron transforma sua dor em um portal de cura para os outros, você pode descobrir que suas experiências são chaves preciosas de sabedoria.",
    metaphor: "Imagine uma ponte antiga e sólida. Ela não é o destino, mas é o caminho seguro que te permite cruzar abismos e chegar a um novo lugar de entendimento. Cada livro que você lê, cada mestre que você ouve, é um tijolo nesta ponte.",
    aromatherapy: {
      oil: "Óleo Essencial de Olíbano (Boswellia carterii)",
      usage: "Pingue 1 gota no topo da cabeça (chakra coronário) antes da sua prática espiritual. Use 4-5 gotas no difusor para criar um ambiente de reverência e estudo.",
      benefits: "O Olíbano é um dos óleos mais antigos e sagrados, usado para elevar a consciência, facilitar a oração e a meditação, e conectar com a sabedoria divina. Ele aquieta a mente para que possamos ouvir o mestre interior.",
    },
    phytotherapy: {
      herb: "Sálvia (Salvia officinalis)",
      properties: "Fisicamente, tem propriedades anti-inflamatórias e melhora a função cognitiva. Energeticamente, a Sálvia (cujo nome vem de salvare, 'salvar' ou 'curar') é usada para purificação, proteção e para atrair sabedoria.",
      contraindications: "Não recomendada em altas doses para gestantes, lactantes e pessoas com epilepsia.",
      recipes: [
        {
          title: "Chá da Sabedoria",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de folhas secas de sálvia. Abafe por 5 minutos. Beba enquanto estuda ou medita, pedindo clareza e conexão com seus guias.",
        },
        {
          title: "Defumação de Purificação",
          description: "Use um bastão de sálvia branca (ou folhas secas de sálvia comum em um recipiente à prova de fogo) para defumar seu espaço de estudo ou meditação, limpando as energias e abrindo o campo para o aprendizado sagrado.",
        },
      ],
    },
    lunar: {
      connection: "O Hierofante se conecta com a Lua Crescente, fase em que buscamos orientação e conhecimento para dar os próximos passos. É o momento de encontrar o mapa, o guia, a tradição que nos ajudará a estruturar nosso crescimento.",
      reflection: "Nesta fase de aprendizado, qual tradição, mestre ou livro está me chamando para aprofundar meu conhecimento e minha fé?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 6 - Os Enamorados
  {
    day: 6,
    title: "Os Enamorados",
    divinity: "Páris",
    imageUrl: "https://images.unsplash.com/photo-1505526237658-b7b80b7318a6?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 6 – Os Enamorados",
      myth: "Em uma festa dos deuses, a deusa da discórdia lança uma maçã de ouro 'para a mais bela'. Hera, Atena e Afrodite disputam o título. Zeus designa o mortal Páris para ser o juiz. Hera lhe oferece poder, Atena lhe oferece sabedoria e vitória na guerra, e Afrodite lhe promete o amor da mulher mais bela do mundo, Helena. Páris escolhe o amor, entrega a maçã a Afrodite, e sua decisão desencadeia a Guerra de Troia.",
      meaning: "Os Enamorados representam um momento de escolha fundamental. Mais do que uma escolha entre dois amores, é uma escolha sobre valores, sobre o que é mais importante para sua alma. A jornada te coloca diante de uma encruzilhada: você escolherá o poder, a sabedoria ou o amor? O caminho da mente ou o caminho do coração? A Sacerdotisa Interior aqui é a Guardiã dos Valores, aquela que sabe que toda escolha autêntica nasce de um profundo alinhamento com sua verdade. A sombra é a indecisão e a escolha baseada no superficial. A luz é a harmonia, o alinhamento e as relações autênticas.",
      keywords: ["Escolha", "Valores", "Relacionamentos", "Harmonia", "Alinhamento", "União"],
    },
    quiz: [
      "Se seu coração fosse uma bússola, para qual direção ele apontaria suavemente neste momento da sua vida?",
      "Diante de uma escolha, qual voz dentro de você — a do poder, a da sabedoria ou a do amor — pede para ser ouvida com mais atenção hoje?",
      "Que duas partes de você, talvez a sua mente e seu coração, estão prontas para iniciar uma conversa e encontrar um caminho em comum?",
    ],
    ritual: {
      title: "O Ritual dos Valores (15 min)",
      description: "Escreva em pequenos pedaços de papel os seus valores mais importantes (ex: amor, liberdade, segurança, criatividade, etc.). Espalhe-os à sua frente. Acenda uma vela e um incenso. Olhe para cada papel. Pegue os 3 que mais pulsam em seu coração hoje. Coloque-os perto da vela e medite por alguns minutos sobre como você pode honrar esses três valores com uma pequena ação amanhã.",
    },
    intuitionTip: "Hoje, pratique a 'escuta do coração'. Antes de responder a um e-mail ou a uma mensagem, respire fundo, coloque a mão no peito e se pergunte: 'Qual resposta está em maior harmonia com quem eu sou?'.",
    affirmation: "Assim como Páris teve que consultar seu desejo mais profundo para fazer sua escolha, você pode permitir que seu coração te revele o caminho que está em perfeita harmonia com sua alma.",
    metaphor: "Imagine duas notas musicais diferentes. Tocadas separadamente, são apenas sons. Mas quando tocadas juntas, na combinação certa, elas criam uma harmonia bela e poderosa. Sua mente e seu coração podem encontrar essa mesma harmonia.",
    aromatherapy: {
      oil: "Óleo Essencial de Ylang Ylang (Cananga odorata) ou Jasmim (Jasminum officinale)",
      usage: "Dilua 1 gota em óleo vegetal e passe nos pulsos e sobre o coração como um perfume sagrado. Use 3-4 gotas no difusor para criar uma atmosfera de amor e união.",
      benefits: "São óleos que conectam com o chakra do coração. O Ylang Ylang acalma a ansiedade mental e promove a união do masculino e feminino internos. O Jasmim é o óleo da sensualidade e do amor, que ajuda a seguir os desejos do coração.",
    },
    phytotherapy: {
      herb: "Hibisco (Hibiscus sabdariffa)",
      properties: "Fisicamente, é rico em vitamina C e ajuda a controlar a pressão arterial. Energeticamente, o hibisco está ligado ao amor, à paixão e ao desejo. Ele abre o coração e estimula a energia da atração e da união.",
      contraindications: "Pode alterar os níveis hormonais, então deve ser evitado por quem faz reposição hormonal. Pessoas com pressão baixa devem consumir com moderação.",
      recipes: [
        {
          title: "Chá do Coração Aberto",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de flores de hibisco. Abafe por 5 minutos (não mais, para não amargar). Beba, mentalizando que seu coração se abre para fazer escolhas alinhadas com sua verdade.",
        },
        {
          title: "Banho da Harmonia",
          description: "Prepare o chá concentrado (500ml de água para 3 colheres de hibisco) e adicione algumas lascas de canela em pau. Após o banho, jogue a mistura coada do pescoço para baixo, pedindo harmonia em seus relacionamentos e clareza em suas escolhas.",
        },
      ],
    },
    lunar: {
      connection: "Os Enamorados conectam-se com a Lua Crescente, quando as primeiras encruzilhadas aparecem. Depois de definir a estrutura, surgem as escolhas sobre como usar essa energia e em qual direção seguir.",
      reflection: "Nesta fase de crescimento, que escolha do coração precisa ser feita para que eu continue avançando em harmonia com meu propósito?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 7 - O Carro
  {
    day: 7,
    title: "O Carro",
    divinity: "Ares",
    imageUrl: "https://images.unsplash.com/photo-1599469806322-383b1b5ca3fc?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 7 – O Carro",
      myth: "Ares é o deus da guerra, da coragem, da ação impetuosa e da força bruta. Filho de Zeus e Hera, ele representa a energia pura do impulso, a vontade de conquistar e a determinação para superar obstáculos. Enquanto Atena é a estrategista da guerra, Ares é a fúria da batalha, a força que avança sem hesitação. Sua carruagem simboliza o movimento direcionado pela vontade.",
      meaning: "Após a escolha dos Enamorados, O Carro chega para colocar essa decisão em movimento. Ele representa a vitória, o autocontrole e a força de vontade necessários para superar os conflitos e avançar em direção aos seus objetivos. Os dois cavalos representam as forças opostas dentro de você (mente e emoção, luz e sombra) que precisam ser controladas e direcionadas por uma vontade unificada. A Sacerdotisa Interior aqui é a Guerreira Focada, que assume o controle de sua jornada. A sombra é a agressividade e a falta de direção. A luz é a determinação, a vitória e o autocontrole.",
      keywords: ["Vontade", "Ação", "Controle", "Vitória", "Determinação", "Foco"],
    },
    quiz: [
      "Se sua força de vontade fosse o cocheiro, para qual destino claro e luminoso ela guiaria sua carruagem hoje?",
      "Que forças opostas dentro de você, como dois cavalos selvagens, estão prontas para serem guiadas por um único propósito?",
      "Ao sentir a vitória já pulsando em suas veias, que pequeno obstáculo você se permitiria superar com facilidade neste momento?",
    ],
    ritual: {
      title: "O Grito da Guerreira (5-10 min)",
      description: "Encontre um lugar onde você possa ter privacidade (dentro do carro, em um travesseiro, ou em meio à natureza). Pense em um obstáculo que você está enfrentando. Sinta a força de Ares subindo de seus pés, passando pelo seu corpo e chegando à sua garganta. Solte um grito (ou um som poderoso) que represente sua determinação em superar isso. Libere a energia estagnada e sinta sua força interior se expandir.",
    },
    intuitionTip: "Hoje, complete uma tarefa que você vem adiando. Pode ser algo pequeno. Ao terminar, feche os olhos e sinta a energia da vitória e da realização. Ancore essa sensação em seu corpo.",
    affirmation: "Assim como Ares guia sua carruagem através do campo de batalha, você pode descobrir que já possui toda a força de vontade necessária para unificar suas energias e avançar em direção ao seu triunfo.",
    metaphor: "Imagine uma flecha. Para que ela atinja o alvo, o arqueiro precisa unir a força do arco, a estabilidade da mão e a clareza do olhar em uma única intenção. Sua vontade é o arqueiro que mira e lança a flecha da sua vida.",
    aromatherapy: {
      oil: "Óleo Essencial de Gengibre (Zingiber officinale) ou Pimenta Preta (Piper nigrum)",
      usage: "Pingue 1 gota na palma das mãos, esfregue e inale profundamente antes de começar seu dia ou uma tarefa desafiadora. Use 3 gotas de Gengibre no difusor para um ambiente energizado.",
      benefits: "São óleos quentes, de fogo, que estimulam a ação. O Gengibre é o 'óleo do poder pessoal', que traz coragem e iniciativa. A Pimenta Preta aquece a alma e te impulsiona a sair da estagnação.",
    },
    phytotherapy: {
      herb: "Urtiga (Urtica dioica)",
      properties: "Fisicamente, é extremamente nutritiva, rica em ferro e minerais, combatendo a fadiga. Energeticamente, a urtiga, com sua natureza 'picante' e resiliente, oferece a força e a proteção de um guerreiro, ajudando a fortalecer a vontade.",
      contraindications: "Manuseie com luvas quando fresca. Pessoas com problemas cardíacos ou renais graves devem consultar um médico.",
      recipes: [
        {
          title: "Chá da Força do Guerreiro",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de folhas secas de urtiga. Abafe por 10 minutos. Beba para nutrir seu corpo e fortalecer seu espírito para os desafios do dia.",
        },
        {
          title: "Banho de Vitória",
          description: "Prepare o chá concentrado (500ml de água para 3 colheres de sopa de urtiga). Após o banho, jogue a mistura coada do pescoço para baixo, visualizando uma armadura de luz te envolvendo e te dando coragem para avançar.",
        },
      ],
    },
    lunar: {
      connection: "O Carro está no auge da sua força na Lua Crescente, especialmente no Quarto Crescente, quando a energia de ação atinge seu pico. É o momento de superar os primeiros grandes desafios e acelerar em direção ao objetivo.",
      reflection: "Nesta fase de ação máxima, que obstáculo estou pronta para enfrentar e conquistar com minha força de vontade unificada?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 8 - A Força
  {
    day: 8,
    title: "A Força",
    divinity: "Héracles",
    imageUrl: "https://images.unsplash.com/photo-1605561536858-892959635032?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 8 – A Força",
      myth: "Em seu primeiro dos Doze Trabalhos, Héracles foi encarregado de matar o Leão de Nemeia, uma besta cuja pele era impenetrável a qualquer arma. Ao perceber que a força bruta era inútil, Héracles usou sua inteligência e coragem. Ele encurralou o leão em uma caverna e o dominou com suas próprias mãos, não por agressão, mas por uma força calma e superior. Ele então usou as próprias garras do leão para esfolá-lo, vestindo sua pele como uma armadura invencível.",
      meaning: "A Força, neste contexto, não é sobre poder muscular, mas sobre a coragem do coração, a paciência e a compaixão. Ela te convida a domar seus 'leões internos' — seus instintos, medos, paixões e raiva — não através da repressão, mas do amor e da aceitação. A Sacerdotisa Interior aqui é a Domadora Compassiva, que integra sua natureza selvagem com sabedoria. A sombra é a força bruta e a repressão. A luz é a coragem, a paciência e o autodomínio.",
      keywords: ["Força Interior", "Coragem", "Paciência", "Compaixão", "Autodomínio", "Integração"],
    },
    quiz: [
      "Que 'leão' interior (um medo, um desejo, uma raiva) está pedindo não para ser combatido, mas para ser olhado com compaixão e coragem hoje?",
      "Se a paciência fosse uma carícia suave, em que parte da sua vida você a aplicaria com mais gentileza?",
      "Ao reconhecer que sua maior força vem do seu coração, que desafio você se sentiria capaz de encarar com uma nova serenidade?",
    ],
    ritual: {
      title: "Diálogo com o Leão Interior (15 min)",
      description: "Sente-se em meditação. Visualize-se em um lugar seguro. Convide seu 'leão' (seu instinto, medo, etc.) a aparecer. Não o tema. Apenas observe sua forma, sua cor, sua energia. Pergunte a ele: 'O que você veio me ensinar? Do que você precisa?'. Ouça a resposta com o coração, sem julgamento. Agradeça por sua mensagem e visualize-se fazendo um gesto de paz, como uma carícia em sua juba.",
    },
    intuitionTip: "Hoje, pratique a gentileza consigo mesma. Se cometer um erro, em vez de se criticar, pare, respire e diga para si mesma: 'Está tudo bem. Eu sou humana. Estou aprendendo'. Trate-se com a mesma compaixão que ofereceria a um amigo querido.",
    affirmation: "Assim como Héracles descobriu a verdadeira força na calma e não na fúria, você pode se surpreender ao encontrar um poder imenso na gentileza com que abraça sua própria natureza.",
    metaphor: "Imagine um cavalo selvagem, belo e poderoso. Você não o doma com o chicote, pois isso só o tornaria mais assustado e rebelde. Você o conquista com confiança, paciência e uma maçã, até que ele permita que você monte em seu dorso e galopem juntos em liberdade.",
    aromatherapy: {
      oil: "Óleo Essencial de Bergamota (Citrus bergamia)",
      usage: "Pingue 3-4 gotas no difusor para elevar o ânimo. Coloque 1 gota diluída sobre o plexo solar (acima do umbigo) para fortalecer a autoconfiança e liberar a raiva contida.",
      benefits: "A Bergamota é o óleo da autoaceitação e da autoconfiança. Ele ajuda a dissolver a autocrítica e o medo, promovendo um otimismo corajoso, perfeito para encarar os leões internos com amor.",
    },
    phytotherapy: {
      herb: "Aveia (Avena sativa)",
      properties: "A aveia (especialmente as pontas floridas, usadas em tinturas) é um tônico nutritivo para o sistema nervoso. Ela acalma a ansiedade, combate o esgotamento e restaura a força interior de forma suave e constante.",
      contraindications: "Segura para a maioria, exceto para celíacos (verificar contaminação por glúten).",
      recipes: [
        {
          title: "Mingau da Força Calma",
          description: "Prepare um mingau de aveia pela manhã. Adicione canela, frutas e mel. Coma devagar, sentindo como ele nutre e fortalece seu corpo e sua alma para o dia.",
        },
        {
          title: "Banho de Suavidade",
          description: "Coloque um copo de flocos de aveia em um saquinho de pano e amarre bem. Coloque na banheira ou pendure no chuveiro para que a água passe por ele. O banho acalma a pele e o espírito, trazendo a energia suave da Força.",
        },
      ],
    },
    lunar: {
      connection: "A Força brilha intensamente sob a Lua Cheia, um momento de plenitude emocional onde nossos instintos e paixões estão mais à tona. É a oportunidade perfeita para olhá-los de frente e integrá-los com a luz da consciência.",
      reflection: "Sob a luz reveladora desta Lua Cheia, qual instinto ou emoção intensa está se mostrando, pedindo para ser domado com amor e não com repressão?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 9 - O Eremita
  {
    day: 9,
    title: "O Eremita",
    divinity: "Cronos",
    imageUrl: "https://images.unsplash.com/photo-1534231844329-34a0b89a941a?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 9 – O Eremita",
      myth: "Cronos, o titã que personifica o tempo. Após castrar seu pai, Urano, e tomar o poder, ele foi advertido que seria destronado por um de seus filhos. Com medo, ele devorava cada um ao nascer. Cronos representa a introspecção, a sabedoria que vem com o tempo e a necessidade de se retirar para confrontar os próprios medos e o passado. Sua jornada é solitária, um mergulho profundo no interior para encontrar a verdade.",
      meaning: "O Eremita te convida a se afastar do barulho do mundo exterior para encontrar a luz da sua própria sabedoria. É um chamado para a introspecção, para a meditação, para a busca solitária. A lanterna que ele carrega não ilumina todo o caminho, apenas o próximo passo, simbolizando a confiança na sua guia interior. A Sacerdotisa Interior aqui é a Sábia Silenciosa, que encontra todas as respostas no silêncio de sua própria alma. A sombra é o isolamento por medo. A luz é a sabedoria, a introspecção e a orientação interior.",
      keywords: ["Introspecção", "Sabedoria", "Solidão", "Guia Interior", "Busca", "Silêncio"],
    },
    quiz: [
      "Se você se permitisse apagar o som do mundo por um instante, que sussurro de sabedoria sua própria alma te diria?",
      "Que luz, vinda de dentro de você, está pronta para iluminar o seu próximo passo, mesmo que o resto do caminho ainda pareça escuro?",
      "Em que caverna silenciosa do seu ser você poderia entrar hoje, nem que seja por cinco minutos, para encontrar paz e clareza?",
    ],
    ritual: {
      title: "O Ritual da Lanterna (15 min)",
      description: "Apague todas as luzes do cômodo. Acenda apenas uma vela (sua lanterna). Sente-se em silêncio, olhando para a chama. Deixe que a luz da vela seja seu único foco. Respire fundo e peça à sua guia interior que te mostre clareza sobre uma questão. Não espere respostas grandiosas. Apenas observe as sensações, imagens ou palavras que surgem na quietude.",
    },
    intuitionTip: "Hoje, reserve um tempo para ficar em completo silêncio, sem música, sem podcast, sem TV. Pode ser durante uma caminhada, lavando a louça ou simplesmente sentado em uma cadeira. Observe os pensamentos que vêm e vão, sem se apegar a eles.",
    affirmation: "Assim como Cronos se retira para contemplar o tempo, você pode descobrir que no silêncio do seu próprio ser, uma luz de sabedoria já brilha para guiar seus passos.",
    metaphor: "Imagine uma pérola. Ela só é formada no interior escuro e silencioso da ostra, a partir de um grão de areia que a incomoda. É na introspecção e no confronto com nossos desconfortos que criamos nossas pérolas de sabedoria.",
    aromatherapy: {
      oil: "Óleo Essencial de Vetiver (Vetiveria zizanoides)",
      usage: "Pingue 1 gota na sola de cada pé antes de dormir para um sono profundo e reparador. Use 3 gotas no difusor para meditação, criando um ambiente de tranquilidade e aterramento.",
      benefits: "O Vetiver é o 'óleo da tranquilidade'. Destilado das raízes, ele tem um aroma profundo e terroso que acalma a mente hiperativa, aterra profundamente e nos ajuda a mergulhar em nosso mundo interior sem ansiedade.",
    },
    phytotherapy: {
      herb: "Valeriana (Valeriana officinalis)",
      properties: "Fisicamente, é um dos mais conhecidos sedativos naturais, auxiliando no tratamento de insônia e ansiedade. Energeticamente, a valeriana nos ajuda a 'desligar' o mundo exterior e a mergulhar nas profundezas do nosso inconsciente, facilitando a introspecção.",
      contraindications: "Não opere máquinas nem dirija após o uso. Não misturar com álcool ou outros sedativos. Evitar em gestantes, lactantes e crianças pequenas.",
      recipes: [
        {
          title: "Chá do Sono Profundo",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá da raiz de valeriana. Abafe por 10-15 minutos. Beba 30 minutos antes de dormir. (O cheiro é forte, mas o efeito é recompensador).",
        },
        {
          title: "Banho de Desconexão",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa da raiz). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que ela te ajude a silenciar as vozes externas para que você possa ouvir a sua própria.",
        },
      ],
    },
    lunar: {
      connection: "O Eremita caminha sob a luz da Lua Minguante. É a fase de recolhimento, de finalizar o ciclo, de olhar para dentro e refletir sobre o que foi aprendido antes de entrar na escuridão fértil da Lua Nova.",
      reflection: "Nesta fase de recolhimento, que sabedoria o ciclo que está terminando me trouxe? O que eu preciso integrar em silêncio antes de começar de novo?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 10 - A Roda da Fortuna
  {
    day: 10,
    title: "A Roda da Fortuna",
    divinity: "As Moiras",
    imageUrl: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 10 – A Roda da Fortuna",
      myth: "As Moiras são as três irmãs que personificam o destino, sobre o qual nem mesmo Zeus tinha controle absoluto. Cloto ('a fiandeira') tece o fio da vida no nascimento. Láquesis ('a distribuidora') mede o fio, definindo os eventos e a duração da vida. Átropos ('a inevitável') corta o fio, determinando a morte. Elas representam a natureza cíclica e incontrolável da vida, os altos e baixos, e os pontos de virada que alteram nosso caminho.",
      meaning: "A Roda da Fortuna gira, lembrando que nada é permanente. Ela te convida a encontrar seu centro em meio às mudanças, a fluir com os ciclos da vida em vez de resistir a eles. Quando você está no topo da roda, desfrute com gratidão. Quando está embaixo, tenha fé, pois ela voltará a girar. A Sacerdotisa Interior aqui é a Sábia dos Ciclos, que dança com o destino e encontra liberdade na aceitação. A sombra é a vitimização e a resistência à mudança. A luz é a sorte, a sincronicidade e a capacidade de adaptação.",
      keywords: ["Ciclos", "Destino", "Mudança", "Sorte", "Pontos de Virada", "Fluir"],
    },
    quiz: [
      "Se a sua vida é uma roda que gira, em que ponto do ciclo você se percebe agora, e que nova paisagem já começa a aparecer no horizonte?",
      "Que mudança, que talvez você estivesse resistindo, pode agora ser vista como uma oportunidade para um novo e surpreendente começo?",
      "Ao se permitir confiar no movimento maior da vida, que pequeno peso você poderia soltar para girar com mais leveza e graça?",
    ],
    ritual: {
      title: "Mandala dos Ciclos (15 min)",
      description: "Pegue uma folha de papel e desenhe um grande círculo. Dentro dele, desenhe ou escreva símbolos que representem os ciclos da sua vida: momentos de alegria (sol), de tristeza (chuva), de começos (semente), de finais (folha seca). Não precisa ser uma obra de arte. Apenas medite sobre a beleza de cada fase enquanto cria sua mandala. Ao final, observe o todo e agradeça por cada parte da sua jornada.",
    },
    intuitionTip: "Hoje, preste atenção às sincronicidades. Um número que se repete, uma música que toca com uma mensagem, um encontro inesperado. Anote esses 'acasos' e perceba como o universo conversa com você, mostrando que há uma ordem maior em movimento.",
    affirmation: "Assim como as Moiras tecem o destino com fios invisíveis, você pode começar a perceber que cada volta da roda da sua vida tece a tapeçaria perfeita da sua evolução.",
    metaphor: "Imagine que você está em um rio. Lutar contra a correnteza apenas te esgota. Mas se você se deita de costas, confia no fluxo e usa as mãos apenas para se desviar suavemente das pedras, o rio te levará exatamente para onde você precisa ir.",
    aromatherapy: {
      oil: "Óleo Essencial de Laranja Doce (Citrus sinensis)",
      usage: "Use 4-5 gotas no difusor para trazer uma atmosfera de otimismo e leveza para o seu dia. Inale diretamente do frasco em momentos de incerteza para renovar a fé.",
      benefits: "A Laranja Doce é o óleo da alegria e do desapego. Ele nos ajuda a ver o lado positivo das mudanças, a não levar a vida tão a sério e a confiar que, após a chuva, o sol sempre volta a brilhar, perfeito para a energia da Roda.",
    },
    phytotherapy: {
      herb: "Dente-de-leão (Taraxacum officinale)",
      properties: "Já o vimos no Dia 0, e ele retorna aqui por ser a erva dos ciclos por excelência. Sua capacidade de desintoxicar o fígado (centro das emoções como raiva e frustração) ajuda a liberar a resistência às mudanças da vida.",
      contraindications: "Pessoas com obstrução dos ductos biliares ou oclusão intestinal devem evitar. Use com cautela se tiver gastrite ou úlcera.",
      recipes: [
        {
          title: "Chá do Fluir",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá das folhas secas. Abafe por 10 minutos. Beba, intencionando soltar o controle e se entregar com confiança ao fluxo dos acontecimentos.",
        },
        {
          title: "Banho de Aceitação",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa da erva). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo ajuda para aceitar o momento presente e confiar nas voltas que a vida dá.",
        },
      ],
    },
    lunar: {
      connection: "A Roda da Fortuna engloba todas as fases da Lua. Ela é o próprio ciclo em movimento: o início na Nova, o crescimento na Crescente, o auge na Cheia e o declínio na Minguante. Ela nos ensina que cada fase é essencial para a totalidade.",
      reflection: "Observando a fase atual da Lua, como posso honrar este momento específico do ciclo em minha vida, sabendo que ele é parte de um movimento maior e perfeito?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 11 - A Justiça
  {
    day: 11,
    title: "A Justiça",
    divinity: "Atena",
    imageUrl: "https://images.unsplash.com/photo-1585252428239-6a3c1a300643?q=80&w=1964&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 11 – A Justiça",
      myth: "Atena, a deusa da sabedoria, da estratégia e da justiça. Nascida já adulta da cabeça de Zeus, ela não representa a emoção, mas a clareza mental e a verdade racional. Ela é a juíza imparcial, que pesa os fatos na balança sem se deixar levar por sentimentalismos. Sua espada não é de agressão, mas de decisão: ela corta as ilusões para revelar a verdade e age de acordo com a lei de causa e efeito.",
      meaning: "A Justiça chega para te convidar a olhar para sua vida com clareza e honestidade. É um momento de colher o que foi plantado (a lei do karma), de tomar decisões baseadas na verdade e de assumir a responsabilidade por suas escolhas. A balança pede equilíbrio e a espada, ação decisiva. A Sacerdotisa Interior aqui é a Guardiã da Verdade, que vive em integridade consigo mesma. A sombra é o julgamento, a crítica excessiva e a indecisão. A luz é a clareza, a responsabilidade e o equilíbrio.",
      keywords: ["Verdade", "Equilíbrio", "Clareza", "Causa e Efeito", "Decisão", "Responsabilidade"],
    },
    quiz: [
      "Se a balança da sua vida estivesse à sua frente, que área estaria pedindo por um pouco mais de peso e atenção para encontrar o equilíbrio perfeito?",
      "Que verdade, que talvez estivesse encoberta por emoções, está agora pronta para ser vista com a clareza da mente e a calma do coração?",
      "Ao empunhar a espada da decisão com sabedoria, que corda de uma velha situação você se permitiria cortar para se sentir mais livre e íntegra?",
    ],
    ritual: {
      title: "O Ritual da Balança (15 min)",
      description: "Sente-se confortavelmente com papel e caneta. Pense em uma situação em desequilíbrio. Desenhe uma balança. De um lado, liste todos os 'prós' ou aspectos positivos/lógicos. Do outro, todos os 'contras' ou aspectos negativos/emocionais. Olhe para a sua lista com a imparcialidade de Atena. Medite sobre qual lado pesa mais em sua verdade interior e qual pequena ação traria mais equilíbrio.",
    },
    intuitionTip: "Hoje, pratique a 'comunicação justa'. Antes de falar, se pergunte: 'Isso é verdade? Isso é necessário? Isso é gentil?'. Fale a partir de um lugar de clareza, não de reatividade emocional.",
    affirmation: "Assim como Atena enxerga através da névoa da ilusão, você pode descobrir uma nova clareza que te permite tomar decisões com a sabedoria equilibrada que já reside em você.",
    metaphor: "Imagine limpar o vidro embaçado de uma janela. A paisagem sempre esteve ali, mas só quando você passa o pano e remove a condensação (as emoções confusas), você consegue ver a vista com total nitidez e beleza.",
    aromatherapy: {
      oil: "Óleo Essencial de Hortelã-Pimenta (Mentha piperita)",
      usage: "Inale 1 gota da palma das mãos antes de tomar uma decisão importante. Use 3-4 gotas no difusor em seu ambiente de trabalho para manter a mente afiada e clara.",
      benefits: "A Hortelã-Pimenta é o óleo da clareza mental e do discernimento. Ela 'corta' a confusão mental, ajuda a organizar os pensamentos e a enxergar as situações com uma lógica afiada, como a de Atena.",
    },
    phytotherapy: {
      herb: "Alfazema/Lavanda (Lavandula angustifolia)",
      properties: "Fisicamente, é conhecida por suas propriedades calmantes, aliviando o estresse e a ansiedade. Energeticamente, a lavanda é a erva do equilíbrio. Ela acalma as emoções exaltadas para que a mente possa operar com mais clareza, trazendo harmonia entre a lógica e o sentimento.",
      contraindications: "Geralmente muito segura. Pessoas com pressão baixa devem usar com moderação.",
      recipes: [
        {
          title: "Chá do Equilíbrio",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de flores de lavanda. Abafe por 5 minutos. Beba em momentos de estresse mental ou emocional para trazer o centro de volta.",
        },
        {
          title: "Banho da Clareza",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa de lavanda). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que a lavanda acalme suas emoções e traga clareza para suas decisões.",
        },
      ],
    },
    lunar: {
      connection: "A Justiça brilha sob a luz da Lua Cheia. É o momento em que a luz do sol ilumina totalmente a escuridão, revelando a verdade sem filtros. É a fase da colheita, onde os resultados de nossas ações (causa e efeito) se tornam plenamente visíveis.",
      reflection: "Sob a luz desta Lua Cheia, que verdade sobre minhas ações e suas consequências está sendo iluminada? Que decisão equilibrada estou sendo chamada a tomar?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 12 - O Enforcado
  {
    day: 12,
    title: "O Enforcado",
    divinity: "Prometeu",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 12 – O Enforcado",
      myth: "Prometeu, o titã que amava a humanidade. Vendo os humanos no frio e na escuridão, ele desafiou Zeus e roubou o fogo dos deuses para entregá-lo aos mortais. Como punição por seu sacrifício, Zeus o acorrentou a uma rocha, onde uma águia vinha todos os dias para devorar seu fígado, que se regenerava à noite. Prometeu suportou seu sofrimento com nobreza, sabendo que seu sacrifício trouxe luz e evolução para a humanidade.",
      meaning: "O Enforcado representa uma pausa, uma rendição voluntária. Ele te convida a soltar o controle, a parar de lutar e a olhar o mundo de uma perspectiva completamente nova (de cabeça para baixo). É através deste sacrifício de seu ego e de sua vontade que uma nova iluminação pode surgir. A Sacerdotisa Interior aqui é a Mística, que encontra liberdade na rendição e sabedoria na quietude. A sombra é a vitimização e a estagnação. A luz é a iluminação, a mudança de perspectiva e o desapego.",
      keywords: ["Pausa", "Rendição", "Nova Perspectiva", "Sacrifício", "Iluminação", "Desapego"],
    },
    quiz: [
      "Se você se permitisse ficar suspensa no tempo por um momento, sem a necessidade de agir ou decidir, que nova e surpreendente visão sobre sua situação atual poderia surgir?",
      "De que pequena luta ou controle seu ego estaria disposto a abrir mão hoje, para que uma paz maior pudesse entrar?",
      "Ao olhar para um problema 'de cabeça para baixo', que solução simples e inesperada começa a se revelar?",
    ],
    ritual: {
      title: "A Postura da Rendição (10 min)",
      description: "Se você tem prática de yoga, pode fazer uma inversão segura (como a postura da vela ou do arado). Se não, simplesmente deite-se no chão e eleve as pernas contra a parede, formando um 'L'. Feche os olhos, respire fundo e sinta o sangue fluindo na direção oposta. Intencione soltar o controle e se abrir para novas perspectivas. Permaneça por 5 a 10 minutos.",
    },
    intuitionTip: "Hoje, quando se sentir presa ou frustrada, em vez de forçar uma solução, pare. Respire fundo três vezes e diga: 'Eu me rendo a um poder maior. Que a melhor solução se revele no tempo certo'. E então, mude de atividade.",
    affirmation: "Assim como Prometeu encontrou um propósito maior em sua pausa forçada, você pode descobrir que, ao soltar a luta, uma clareza inesperada e libertadora começa a brilhar.",
    metaphor: "Imagine que você está tentando abrir uma porta empurrando, mas ela não se move. Você empurra com mais força, se frustra, se cansa. Então, você para e percebe uma pequena placa que diz 'Puxe'. A solução estava na rendição e na mudança de perspectiva.",
    aromatherapy: {
      oil: "Óleo Essencial de Camomila Romana (Anthemis nobilis) ou Manjerona (Origanum majorana)",
      usage: "Dilua 2 gotas em óleo vegetal e massageie a nuca e os ombros, soltando a tensão do controle. Use 4 gotas no difusor antes de dormir para promover um sono de total entrega.",
      benefits: "São óleos que acalmam profundamente o sistema nervoso e o espírito. A Camomila Romana é o 'óleo do propósito espiritual', que nos ajuda a render e confiar. A Manjerona solta a necessidade de controle e o medo, promovendo paz.",
    },
    phytotherapy: {
      herb: "Passiflora/Flor do Maracujá (Passiflora incarnata)",
      properties: "Um dos melhores calmantes naturais para a mente agitada, ansiedade e insônia. Energeticamente, a passiflora nos ajuda a 'desligar' o loop de pensamentos obsessivos, permitindo a rendição mental necessária para que novas ideias e soluções surjam.",
      contraindications: "Pode potencializar o efeito de sedativos. Não usar antes de dirigir. Evitar em gestantes, lactantes e crianças pequenas.",
      recipes: [
        {
          title: "Chá da Entrega",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de passiflora seca. Abafe por 10 minutos. Beba à noite ou em momentos de grande ansiedade, permitindo que a mente se aquiete.",
        },
        {
          title: "Banho de Perspectiva",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa da erva). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo para soltar o controle e se abrir para ver sua vida de um novo ângulo.",
        },
      ],
    },
    lunar: {
      connection: "O Enforcado ressoa profundamente com a Lua Minguante, especialmente a fase Balsâmica, os últimos três dias antes da Lua Nova. É um tempo de escuridão, de quietude, de soltar o que restou do ciclo e se render ao vazio, confiando na renovação que virá.",
      reflection: "Nesta fase de escuridão e silêncio, o que estou sendo convidada a sacrificar (soltar) para que uma nova luz possa nascer em mim no próximo ciclo?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 13 - A Morte
  {
    day: 13,
    title: "A Morte",
    divinity: "Hades",
    imageUrl: "https://images.unsplash.com/photo-1558016229-2dc96de42e59?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 13 – A Morte",
      myth: "Hades, o deus que governa o Submundo, o reino das almas. Ao contrário da imagem popular, ele não era o mal, mas o guardião dos ciclos de fim e começo. Ele é o senhor das riquezas ocultas da terra (como minerais e sementes que dormem no inverno) e o garantidor de que tudo o que morre abre espaço para algo novo nascer. Seu rapto de Perséfone não foi um ato de maldade, mas o catalisador que a transformou de donzela em rainha. Hades representa a transformação inevitável.",
      meaning: "A Morte raramente significa morte física. Este arcano é um dos mais positivos, pois anuncia o fim necessário de um ciclo, uma transformação profunda e a liberação do que não serve mais. É a poda da roseira para que ela floresça mais forte. É o convite para deixar ir velhos padrões, relacionamentos e identidades. A Sacerdotisa Interior aqui é a Alquimista da Alma, que abraça os finais como portais para o renascimento. A sombra é o medo do fim e o apego ao passado. A luz é a transformação, a liberação e o renascimento.",
      keywords: ["Fim", "Transformação", "Liberação", "Desapego", "Renascimento", "Limpeza"],
    },
    quiz: [
      "Que folha seca, representando um velho hábito ou crença, você está pronta para deixar o vento do outono levar hoje, com gratidão por tudo que ela já foi?",
      "Se o fim de uma situação fosse a porta de entrada para um novo e excitante começo, que porta você se permitiria atravessar agora?",
      "Que espaço vazio e fértil seria criado em sua vida se você se permitisse liberar algo que já cumpriu seu propósito?",
    ],
    ritual: {
      title: "O Ritual do Fogo Transformador (15 min)",
      description: "Escreva em um pedaço de papel tudo o que você deseja liberar: medos, apegos, mágoas, padrões. Leia em voz alta, honrando o papel que cada um teve em sua vida. Com segurança (em um caldeirão, pia ou recipiente de cerâmica), queime o papel. Enquanto o fogo consome as palavras, visualize essa energia sendo transformada em fumaça e subindo, liberada. Sinta o espaço que se abre dentro de você.",
    },
    intuitionTip: "Hoje, faça uma limpeza física. Organize uma gaveta, doe roupas que não usa mais, jogue fora papéis velhos. A limpeza externa ajuda a mover a energia interna e a sinalizar para o universo que você está pronta para o novo.",
    affirmation: "Assim como Hades guarda as sementes que dormem no inverno para renascer na primavera, você pode descobrir que todo final em sua vida é a promessa silenciosa de um novo florescer.",
    metaphor: "Imagine uma lagarta dentro do casulo. Para ela, parece o fim do mundo. É escuro, apertado, e todo o seu ser está se desintegrando. Ela não sabe que está se transformando em uma borboleta. A morte da lagarta é o nascimento da borboleta.",
    aromatherapy: {
      oil: "Óleo Essencial de Cipreste (Cupressus sempervirens)",
      usage: "Use 4-5 gotas no difusor para ajudar a processar o luto e a mudança. Dilua 2 gotas em óleo vegetal e massageie o peito para confortar o coração em momentos de perda e transição.",
      benefits: "O Cipreste é a árvore dos cemitérios e dos lugares de passagem. É o óleo da transição, que nos dá força e estrutura para passar por grandes mudanças e finais de ciclo. Ele limpa a energia estagnada do luto e nos ajuda a seguir em frente.",
    },
    phytotherapy: {
      herb: "Sabugueiro (Sambucus nigra)",
      properties: "Fisicamente, suas flores e frutos são poderosos antivirais, excelentes para a imunidade. Energeticamente, o Sabugueiro é uma planta guardiã, associada à Deusa Anciã. Ele protege durante as transições, ajuda a liberar os mortos (simbólicos ou literais) e a conectar com a sabedoria dos ancestrais.",
      contraindications: "Os frutos devem ser consumidos apenas cozidos. As folhas e galhos são tóxicos.",
      recipes: [
        {
          title: "Chá de Liberação (Flores)",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de flores secas de sabugueiro. Abafe por 10 minutos. Beba, pedindo proteção e força para atravessar o fim de um ciclo.",
        },
        {
          title: "Banho de Despedida",
          description: "Prepare o chá concentrado com as flores (500ml para 3 colheres de sopa). Após o banho, jogue a mistura coada do pescoço para baixo, visualizando-se sendo limpa de velhas energias e se despedindo com amor do que precisa ir.",
        },
      ],
    },
    lunar: {
      connection: "A Morte é a essência da Lua Negra, o período de escuridão total entre o fim da fase Minguante e o início da Nova. É o momento do grande vazio, da morte do ciclo antigo, onde a terra descansa e se recompõe antes de gerar nova vida.",
      reflection: "Nesta escuridão fértil da Lua Negra, o que precisa morrer em mim para que uma versão mais autêntica possa renascer? O que eu entrego à terra com gratidão?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 14 - A Temperança
  {
    day: 14,
    title: "A Temperança",
    divinity: "Íris",
    imageUrl: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 14 – A Temperança",
      myth: "Íris é a personificação do arco-íris e a mensageira dos deuses, assim como Hermes. No entanto, enquanto Hermes é rápido e astuto, Íris é a conexão suave e harmoniosa. Ela viaja no arco-íris, a ponte perfeita entre o céu (divino) e a terra (humano), entre os deuses e a humanidade. Ela representa a alquimia, a mistura cuidadosa de opostos para criar algo novo, belo e equilibrado.",
      meaning: "Após a grande transformação da Morte, a Temperança chega para trazer cura e integração. Ela te convida a encontrar o caminho do meio, a misturar as diferentes partes de si mesma (luz e sombra, mente e coração, masculino e feminino) em uma alquimia harmoniosa. É um chamado para a paciência, a moderação e o equilíbrio. A Sacerdotisa Interior aqui é a Curadora Alquímica, que integra todas as suas facetas para encontrar a totalidade. A sombra é o excesso e a falta de moderação. A luz é o equilíbrio, a cura e a sinergia.",
      keywords: ["Equilíbrio", "Moderação", "Alquimia", "Integração", "Cura", "Harmonia"],
    },
    quiz: [
      "Se você fosse uma alquimista, que dois ingredientes aparentemente opostos em sua vida (como descanso e trabalho, ou solidão e socialização) você poderia misturar hoje para criar a 'poção' do equilíbrio perfeito?",
      "Que fluxo suave e paciente, como água sendo derramada de um cálice para o outro, sua alma está pedindo para você adotar neste momento?",
      "Ao visualizar a ponte do arco-íris conectando seu coração (emoção) e sua mente (razão), que mensagem de harmonia eles trocariam entre si?",
    ],
    ritual: {
      title: "O Ritual dos Dois Cálices (10 min)",
      description: "Pegue dois copos ou taças. Encha um deles com água. Sente-se em silêncio. Lentamente, com total atenção, comece a passar a água de um copo para o outro, e de volta. Tente não derramar nenhuma gota. Sinta o equilíbrio, a paciência e o fluxo. Faça isso por alguns minutos, como uma meditação em movimento, com a intenção de integrar as dualidades dentro de você.",
    },
    intuitionTip: "Hoje, pratique a moderação. Se você come rápido, coma devagar. Se trabalha demais, faça uma pausa. Se descansa demais, faça uma pequena caminhada. Encontre o caminho do meio em uma de suas atividades diárias e observe como se sente.",
    affirmation: "Assim como Íris cria um arco-íris ao unir a luz e a água, você pode descobrir que, ao misturar as diferentes partes do seu ser com paciência, uma nova e bela harmonia se revela.",
    metaphor: "Imagine um mestre de chá. Ele não joga a água fervente sobre as folhas de qualquer maneira. Ele controla a temperatura, o tempo de infusão, a quantidade. É essa mistura cuidadosa e paciente que extrai o sabor mais requintado e curativo da erva.",
    aromatherapy: {
      oil: "Óleo Essencial de Gerânio (Pelargonium graveolens)",
      usage: "Pingue 1 gota em cada pulso e esfregue-os para equilibrar a energia. Use 4-5 gotas no difusor para harmonizar o ambiente e as emoções.",
      benefits: "O Gerânio é o grande equilibrador do sistema hormonal e emocional. Ele trabalha as dualidades, acalmando a ansiedade e elevando o espírito, ajudando a encontrar o ponto de equilíbrio perfeito entre a mente e o coração.",
    },
    phytotherapy: {
      herb: "Melissa/Erva-cidreira (Melissa officinalis)",
      properties: "Fisicamente, é um calmante suave para o sistema nervoso e digestivo. Energeticamente, a Melissa tem uma vibração de paz e harmonia. Ela acalma o coração, alivia a angústia e nos ajuda a encontrar contentamento e equilíbrio no momento presente.",
      contraindications: "Pessoas com hipotireoidismo ou pressão muito baixa devem usar com moderação.",
      recipes: [
        {
          title: "Chá da Harmonia",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de sopa de folhas frescas de melissa (ou 1 de chá das secas). Abafe por 5-7 minutos. Beba ao final do dia, sentindo a paz se instalar em seu ser.",
        },
        {
          title: "Banho de Alquimia Interior",
          description: "Prepare o chá concentrado (500ml para 4 colheres de sopa da erva). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que as energias opostas dentro de você se integrem em perfeita harmonia.",
        },
      ],
    },
    lunar: {
      connection: "A Temperança se alinha com a Lua Minguante, no Quarto Minguante. Após o pico da Lua Cheia e a grande liberação, é o momento de reajustar, reequilibrar e integrar os aprendizados. É uma fase de cura e preparação para o novo ciclo.",
      reflection: "Nesta fase de reequilíbrio, que área da minha vida está pedindo por mais moderação e paciência? Onde preciso aplicar a alquimia da integração?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 15 - O Diabo
  {
    day: 15,
    title: "O Diabo",
    divinity: "Pan",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 15 – O Diabo",
      myth: "Pan é o deus dos bosques, da natureza selvagem, dos pastores e da fertilidade. Com seus chifres e pernas de bode, ele representa nossa natureza instintiva, a sexualidade primordial e o poder criativo da Terra. O cristianismo demonizou sua imagem, transformando-o no Diabo. No entanto, Pan é a força da vida sem filtros, o riso, o pânico (palavra que vem de seu nome) e o desejo. Ele nos convida a olhar para aquilo que acorrenta nosso espírito: nossos apegos, vícios e medos.",
      meaning: "O Diabo não é uma força externa do mal, mas um espelho de nossas próprias sombras. Ele te convida a olhar de frente para seus apegos, vícios, medos e crenças limitantes — as correntes que você mesma colocou em seu pescoço. É um convite para reconhecer e integrar sua natureza instintiva sem culpa, e para se libertar do que te aprisiona. A Sacerdotisa Interior aqui é a Confrontadora da Sombra, que encontra poder e liberdade ao encarar seus demônios internos. A sombra é o vício e a ignorância. A luz é a libertação e a aceitação da própria humanidade.",
      keywords: ["Apego", "Sombra", "Libertação", "Vícios", "Medo", "Poder Criativo"],
    },
    quiz: [
      "Se uma corrente que te prende fosse feita apenas de fumaça, que passo você daria para simplesmente atravessá-la e se sentir livre?",
      "Que desejo ou instinto, que talvez você tenha julgado como 'sombrio', está na verdade guardando uma poderosa fonte de energia criativa e vitalidade?",
      "Ao olhar para um medo de frente, com a curiosidade de Pan, que poder escondido você descobre que ele estava apenas guardando para você?",
    ],
    ritual: {
      title: "O Ritual de Quebra de Correntes (10 min)",
      description: "Fique de pé, com os pés firmes no chão. Feche os olhos e visualize correntes em seus tornozelos e pulsos, representando um apego ou medo. Sinta o peso delas. Respire fundo, trazendo a energia selvagem de Pan, a força da Terra. Com um movimento brusco e um som (um 'RA!' ou 'HA!'), quebre as correntes imaginárias. Sacuda as mãos e os pés, sentindo a leveza e a liberdade no corpo.",
    },
    intuitionTip: "Hoje, observe um 'pequeno vício': roer unhas, checar o celular a cada minuto, comer um doce por ansiedade. Apenas observe, sem julgamento. Pergunte a si mesma: 'Qual é a real necessidade por trás deste hábito?'. A consciência é o primeiro passo para a libertação.",
    affirmation: "Assim como Pan dança com sua própria sombra sem medo, você pode começar a perceber que, ao olhar para o que te aprisiona, você encontra a chave exata para a sua mais profunda libertação.",
    metaphor: "Imagine um leão em uma jaula com a porta apenas encostada. Ele está tão acostumado com os limites das grades que nem percebe que poderia simplesmente empurrar a porta e sair. Muitas de nossas correntes são como essa porta.",
    aromatherapy: {
      oil: "Óleo Essencial de Patchouli (Pogostemon cablin)",
      usage: "Pingue 1 gota na sola dos pés para se conectar com sua energia terrena e instintiva. Use 2-3 gotas no difusor (é um aroma forte) para trabalhar a aceitação do corpo e da sombra.",
      benefits: "O Patchouli é o óleo da corporeidade. Com seu aroma terroso e sensual, ele nos aterra, nos conecta com nosso corpo físico, com nossa sexualidade e nos ajuda a aceitar nossa natureza humana sem culpa, sendo perfeito para trabalhar a energia de Pan.",
    },
    phytotherapy: {
      herb: "Canela (Cinnamomum zeylanicum)",
      properties: "Fisicamente, é um estimulante, aquece o corpo, melhora a circulação e equilibra o açúcar no sangue. Energeticamente, a canela é a erva da paixão, da vitalidade e da energia criativa. Ela nos ajuda a queimar a estagnação e a transformar a energia da sombra em combustível para a ação.",
      contraindications: "Usar com moderação na gravidez. Em excesso, pode irritar a mucosa gástrica.",
      recipes: [
        {
          title: "Chá da Força Vital",
          description: "Ferva 200ml de água com um pedaço de canela em pau por 5 minutos. Beba pela manhã, intencionando despertar sua força vital e criativa para o dia.",
        },
        {
          title: "Banho de Libertação",
          description: "Prepare o chá concentrado (500ml de água com 3 paus de canela e 7 cravos-da-índia). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que o fogo da canela queime todas as correntes e apegos que te prendem.",
        },
      ],
    },
    lunar: {
      connection: "O Diabo se revela na Lua Negra. Na escuridão mais profunda do ciclo, somos convidadas a mergulhar em nossa própria escuridão, a enfrentar os medos e as sombras que evitamos olhar durante as fases de luz. É um confronto necessário para uma renovação verdadeira.",
      reflection: "Nesta noite escura da alma, que corrente invisível estou pronta para ver? Que parte da minha sombra estou pronta para abraçar, sabendo que nela reside um grande poder?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 16 - A Torre
  {
    day: 16,
    title: "A Torre",
    divinity: "Poseidon",
    imageUrl: "https://images.unsplash.com/photo-1562215226-5a4049b79490?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 16 – A Torre",
      myth: "Poseidon, o deus dos mares, dos terremotos e das tempestades. Irmão de Zeus e Hades, ele é uma força da natureza poderosa e imprevisível. Quando sua fúria é despertada, ele pode abalar a terra com seu tridente, criar tempestades e destruir as estruturas mais sólidas construídas pelo homem. Poseidon representa a força do inconsciente que, quando reprimida, emerge de forma avassaladora para destruir tudo o que é falso e frágil.",
      meaning: "A Torre representa uma mudança súbita, uma crise, uma revelação que destrói as estruturas falsas em sua vida. É a torre do ego, das crenças limitantes, da segurança ilusória que você construiu. O raio é a verdade divina que vem para te libertar, mesmo que o processo seja doloroso. A Sacerdotisa Interior aqui é a Sobrevivente Resiliente, que sabe que das ruínas de uma falsa prisão se pode construir um templo verdadeiro. A sombra é a catástrofe e a destruição. A luz é a libertação e a revelação da verdade.",
      keywords: ["Ruptura", "Liberação Súbita", "Revelação", "Crise", "Despertar", "Falsas Estruturas"],
    },
    quiz: [
      "Se um raio de pura verdade pudesse iluminar sua vida agora, que estrutura, que talvez já estivesse rachada, ele finalmente te ajudaria a deixar ruir?",
      "Que 'terremoto' interior, por mais assustador que pareça, está na verdade te libertando de uma fundação que não era mais sólida para você?",
      "Ao se permitir cair em queda livre por um instante, que asas inesperadas você descobre que sempre teve?",
    ],
    ritual: {
      title: "O Som da Liberação (10 min)",
      description: "Coloque uma música muito intensa e catártica (pode ser um rock, uma música eletrônica forte). Deixe a vibração entrar no seu corpo. Soque almofadas, pule, grite, dance de forma caótica. Permita que qualquer energia de raiva, frustração ou medo saia do seu corpo através do movimento e do som. Libere a tempestade interna de forma segura.",
    },
    intuitionTip: "Hoje, se algo inesperado acontecer e quebrar seus planos, em vez de se frustrar, respire e pergunte: 'Qual é a libertação aqui? O que o universo está tentando me mostrar?'. Tente encontrar a bênção na ruptura.",
    affirmation: "Assim como a tempestade de Poseidon limpa a paisagem para um novo crescimento, você pode descobrir que até mesmo as maiores rupturas em sua vida estão, na verdade, abrindo um espaço sagrado para a verdade florescer.",
    metaphor: "Imagine um pintinho dentro de um ovo. A casca que antes era sua proteção e segurança, agora se tornou sua prisão. Ele precisa usar sua força para quebrar a estrutura de dentro para fora. A quebra da casca parece violenta, mas é o único caminho para a sua verdadeira vida e liberdade.",
    aromatherapy: {
      oil: "Óleo Essencial de Eucalipto (Eucalyptus globulus) ou Tea Tree/Melaleuca (Melaleuca alternifolia)",
      usage: "Use 4-5 gotas no difusor para uma limpeza energética profunda do ambiente. Pingue 1 gota no ralo do chuveiro antes de ligar a água quente; o vapor criará uma sauna purificadora.",
      benefits: "São óleos de limpeza e purificação intensas. O Eucalipto abre as vias respiratórias e 'expulsa' a energia psíquica estagnada. O Tea Tree é um poderoso antisséptico, que limpa padrões mentais e emocionais tóxicos que levam ao colapso da Torre.",
    },
    phytotherapy: {
      herb: "Bardana (Arctium lappa)",
      properties: "Fisicamente, a raiz de bardana é uma das mais poderosas desintoxicantes, purificando o sangue e o sistema linfático. Energeticamente, ela nos ajuda a ir fundo para arrancar as 'ervas daninhas' pela raiz, limpando padrões negativos profundos e crônicos que sustentam nossas torres falsas.",
      contraindications: "Pode estimular o útero, evitar na gravidez. Diabéticos devem usar com cautela, pois pode baixar o açúcar no sangue.",
      recipes: [
        {
          title: "Chá de Purificação Profunda",
          description: "Ferva 200ml de água com 1 colher de chá da raiz seca de bardana por 10 minutos. Beba uma vez ao dia, com a intenção de limpar tudo o que não é verdadeiro em seu sistema.",
        },
        {
          title: "Banho de Ruptura",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa da raiz). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que ela ajude a dissolver as bases de todas as estruturas falsas em sua vida.",
        },
      ],
    },
    lunar: {
      connection: "A Torre pode acontecer em qualquer fase, mas sua energia de revelação súbita é muito conectada à Lua Cheia, quando a luz penetra na escuridão e segredos são revelados, ou na Lua Negra, quando a pressão interna se torna tão grande que a estrutura precisa ruir para o novo ciclo começar.",
      reflection: "Neste momento de intensidade lunar, que verdade o Universo está tentando me mostrar, mesmo que isso abale minhas estruturas? Estou pronta para me libertar?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 17 - A Estrela
  {
    day: 17,
    title: "A Estrela",
    divinity: "Pandora",
    imageUrl: "https://images.unsplash.com/photo-1472552944129-b035e9ea3744?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 17 – A Estrela",
      myth: "Pandora foi a primeira mulher, criada pelos deuses. Ela recebeu uma caixa (ou jarro) com a instrução de nunca abri-la. Movida pela curiosidade, ela abriu a caixa e liberou todos os males no mundo: a doença, a dor, a inveja. Quando fechou a tampa, aterrorizada, restou apenas uma coisa no fundo: Elpis, a personificação da Esperança. Assim, mesmo no mundo cheio de sofrimento, a esperança permanece como um guia.",
      meaning: "Após a destruição da Torre, a Estrela surge como uma luz de esperança, fé e inspiração. É um momento de calma, cura e otimismo. Ela te convida a se reconectar com sua verdade, a se sentir em paz com o universo e a ter fé no futuro. A água que ela derrama simboliza a renovação e o fluxo da vida. A Sacerdotisa Interior aqui é a Portadora da Esperança, que encontra sua guia na luz da sua própria alma. A sombra é o desânimo e a falta de fé. A luz é a esperança, a inspiração e a serenidade.",
      keywords: ["Esperança", "Fé", "Inspiração", "Cura", "Serenidade", "Renovação"],
    },
    quiz: [
      "Se a esperança fosse uma estrela no céu noturno, qual estrela brilharia mais forte para você neste momento, guiando seu caminho?",
      "Que fonte de inspiração, como água pura, está pronta para fluir através de você hoje, nutrindo sua alma e seus sonhos?",
      "Ao se permitir ter fé no universo e em seu próprio caminho, que sentimento de calma e serenidade começa a preencher seu coração?",
    ],
    ritual: {
      title: "O Ritual da Água Estrelada (10 min)",
      description: "Encha um copo ou uma tigela de vidro com água. Se for à noite, deixe-o sob a luz da lua e das estrelas por alguns minutos. Se for de dia, simplesmente segure o recipiente e visualize a luz da estrela mais brilhante sendo derramada na água. Beba a água lentamente, sentindo que está bebendo esperança, cura e inspiração.",
    },
    intuitionTip: "Hoje, passe um tempo perto da natureza, especialmente da água (um rio, o mar, ou até mesmo um banho consciente). Sinta a energia de fluxo e renovação. Ou, à noite, olhe para as estrelas e simplesmente sinta a vastidão e a beleza do universo.",
    affirmation: "Assim como Pandora encontrou a esperança no fundo de sua caixa, você pode descobrir que, mesmo após as maiores tempestades, uma luz serena de fé já brilha dentro de você, pronta para te guiar.",
    metaphor: "Imagine um navegador em alto mar, em uma noite escura. Ele não vê a terra, não sabe exatamente onde está. Mas ele confia na Estrela Polar. Ele sabe que, enquanto seguir aquela luz, ele está na direção certa. Sua fé é a sua Estrela Polar.",
    aromatherapy: {
      oil: "Óleo Essencial de Lavanda (Lavandula angustifolia)",
      usage: "Pingue uma gota na palma das mãos, esfregue e inale profundamente para acalmar a mente e o coração. Use 5 gotas no difusor para um ambiente de paz e serenidade.",
      benefits: "A Lavanda é o óleo da cura e da calma. Após o caos da Torre, ela vem para tranquilizar o sistema nervoso, limpar as feridas emocionais e nos reconectar com nossa essência espiritual, trazendo a paz da Estrela.",
    },
    phytotherapy: {
      herb: "Jasmim (Jasminum officinale)",
      properties: "Fisicamente, o jasmim é usado como um relaxante e afrodisíaco. Energeticamente, suas flores, que se abrem à noite, estão conectadas à lua, aos sonhos e à espiritualidade. O jasmim eleva o espírito, inspira o otimismo e nos ajuda a ter fé na beleza da vida.",
      contraindications: "Evitar na gravidez.",
      recipes: [
        {
          title: "Chá da Esperança",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de flores de jasmim (geralmente encontradas em blends de chá verde). Abafe por 3-5 minutos. Beba sentindo a inspiração e a doçura preenchendo seu ser.",
        },
        {
          title: "Banho de Fé",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa das flores). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que a energia do jasmim renove sua fé e sua conexão com o divino.",
        },
      ],
    },
    lunar: {
      connection: "A Estrela brilha mais forte na Lua Crescente. Após a escuridão da Lua Nova (e a crise que pode acontecer em qualquer fase), a primeira luz que surge no céu é um símbolo de esperança e de um novo começo. É a fé de que a luz está voltando.",
      reflection: "Nesta fase em que a luz começa a crescer novamente, qual é a minha estrela-guia? Que inspiração estou recebendo para nutrir neste novo ciclo?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 18 - A Lua
  {
    day: 18,
    title: "A Lua",
    divinity: "Hécate",
    imageUrl: "https://images.unsplash.com/photo-1532543411683-93672b73e0b7?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 18 – A Lua",
      myth: "Hécate é a deusa da magia, das encruzilhadas, da noite e dos mistérios. Ela é a Rainha da Noite, que não vive nem no Olimpo nem no Submundo, mas no limiar, nos lugares de transição. Com suas tochas, ela ilumina a escuridão do inconsciente, guiando as almas perdidas. Ela é a face anciã da Deusa, a parteira psíquica que nos ajuda a navegar pelos nossos medos, ilusões e pela sabedoria que se encontra nos sonhos.",
      meaning: "A Lua te convida a fazer a jornada final pelo seu inconsciente. É um mergulho profundo no reino dos sonhos, das ilusões, dos medos e da intuição selvagem. O caminho não é claro, as coisas não são o que parecem. Você é chamada a confiar em sua intuição (Hécate) para te guiar através da escuridão. A Sacerdotisa Interior aqui é a Bruxa Sábia, que caminha entre os mundos e confia em sua visão interior. A sombra é o medo, a ilusão e a confusão. A luz é a intuição, os dons psíquicos e a revelação de segredos.",
      keywords: ["Inconsciente", "Ilusão", "Medo", "Intuição", "Sonhos", "Mistério"],
    },
    quiz: [
      "Se você se permitisse caminhar por uma trilha enluarada em sua mente, sem saber o destino, que paisagem misteriosa e fascinante você começaria a descobrir?",
      "Que medo antigo, como uma sombra na parede, ao ser iluminado pela tocha da sua consciência, se revela muito menor do que parecia?",
      "Que mensagem sua intuição mais selvagem e instintiva está uivando para você, sob a luz desta lua interior?",
    ],
    ritual: {
      title: "O Diário dos Sonhos de Hécate (Antes de dormir)",
      description: "Antes de se deitar, acenda uma vela e peça a Hécate que te guie em seus sonhos. Deixe um caderno e uma caneta ao lado da cama. Escreva a pergunta: 'O que meu inconsciente quer me revelar esta noite?'. Ao acordar, antes de fazer qualquer outra coisa, anote tudo o que você se lembrar do sonho: imagens, sentimentos, pessoas, símbolos. Não tente analisar, apenas registre.",
    },
    intuitionTip: "Hoje, confie em um 'pressentimento', mesmo que pareça ilógico. Pode ser a vontade de ligar para alguém, de mudar um caminho, ou uma sensação sobre uma pessoa. Apenas observe o que acontece quando você honra essa sabedoria não-verbal.",
    affirmation: "Assim como Hécate ilumina os caminhos ocultos com suas tochas, você pode descobrir que já possui uma luz interior capaz de te guiar com segurança através dos mistérios da sua própria alma.",
    metaphor: "Imagine que você está mergulhando no oceano à noite. A superfície é escura e assustadora. Mas conforme você mergulha mais fundo, descobre um mundo de criaturas bioluminescentes, corais que brilham no escuro, uma beleza que só existe nas profundezas.",
    aromatherapy: {
      oil: "Óleo Essencial de Sândalo (Santalum album) ou Junípero (Juniperus communis)",
      usage: "Pingue 1 gota no terceiro olho antes de meditar ou de dormir para facilitar a visão interior. Use 4 gotas no difusor para criar um ambiente protegido para a jornada xamânica ou o trabalho com sonhos.",
      benefits: "O Sândalo acalma a mente e aprofunda a meditação, permitindo um mergulho seguro no inconsciente. O Junípero é um grande purificador e protetor psíquico, que limpa o medo e as energias negativas, como as tochas de Hécate.",
    },
    phytotherapy: {
      herb: "Artemísia (Artemisia vulgaris)",
      properties: "Retornamos a esta erva poderosa, a planta de Hécate por excelência. Ela é a chave para abrir os portais do inconsciente, intensificar os sonhos e a visão psíquica. Use com extremo respeito e cautela.",
      contraindications: "TOTALMENTE PROIBIDA para gestantes (pode ser abortiva). Evitar durante a amamentação. Usar em pequenas quantidades.",
      recipes: [
        {
          title: "Chá de Visão (use com cautela)",
          description: "Beba apenas meia xícara do chá fraco (ver Dia 2) antes de dormir, especificamente para o trabalho com sonhos.",
        },
        {
          title: "Travesseiro de Sonhos",
          description: "Faça um pequeno saquinho de pano e encha com folhas secas de artemísia e algumas flores de lavanda. Coloque dentro da fronha do seu travesseiro para estimular sonhos lúcidos e reveladores.",
        },
      ],
    },
    lunar: {
      connection: "A Lua é a própria energia da Lua Cheia e da Lua Negra. Na Cheia, ela está em seu poder máximo, intensificando as emoções e o mundo psíquico. Na Negra, ela é o mistério absoluto, o mergulho na escuridão total.",
      reflection: "Sob a luz (ou escuridão) desta Lua, que ilusão estou pronta para dissolver? Que medo estou pronta para encarar, sabendo que minha intuição é minha guia mais fiel?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 19 - O Sol
  {
    day: 19,
    title: "O Sol",
    divinity: "Apolo",
    imageUrl: "https://images.unsplash.com/photo-1597545932247-367a56c1c586?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 19 – O Sol",
      myth: "Apolo é o deus do Sol, da luz, da clareza, da verdade, da música, da profecia e da cura. Irmão gêmeo de Ártemis (a deusa da lua), ele representa a consciência, a razão e a iluminação. Onde Apolo chega com sua carruagem solar, a escuridão e a ilusão da Lua se dissipam. Ele é a energia da vida, da vitalidade e da alegria de ser quem se é, de forma autêntica e visível para todos.",
      meaning: "Após a jornada noturna da Lua, o Sol nasce para trazer clareza, alegria e sucesso. É o momento de sair das sombras e brilhar sua luz no mundo. Tudo se torna claro, a verdade é revelada e a energia vital é restaurada. É um arcano de otimismo, confiança e celebração. A Sacerdotisa Interior aqui é a Mulher Solar, que se alegra em sua própria existência e ilumina o mundo com sua presença. A sombra é o ego excessivo e a arrogância. A luz é a alegria, a clareza e a vitalidade.",
      keywords: ["Clareza", "Alegria", "Sucesso", "Vitalidade", "Consciência", "Otimismo"],
    },
    quiz: [
      "Se a luz do sol pudesse iluminar e aquecer cada canto da sua alma hoje, que parte sua se sentiria mais vibrante e cheia de vida?",
      "Que verdade sobre si mesma, agora vista com total clareza, você se permitiria celebrar e mostrar ao mundo com alegria?",
      "Ao se permitir ser o sol da sua própria vida, que sombra de dúvida ou medo simplesmente se dissolve com o seu brilho?",
    ],
    ritual: {
      title: "Saudação ao Sol (10 min)",
      description: "Ao acordar, vá para um local onde possa ver o céu ou sentir a luz da manhã. Fique de pé, com os pés firmes no chão. Feche os olhos e sinta a energia do sol (mesmo que esteja nublado) em sua pele. Levante os braços para o céu, como um girassol, e diga em voz alta ou em pensamento: 'Eu saúdo a luz do sol. Eu saúdo a luz dentro de mim. Eu permito que minha alegria e minha verdade brilhem hoje'.",
    },
    intuitionTip: "Hoje, faça algo que te traga pura e simples alegria infantil. Pode ser dançar sua música favorita, tomar um sorvete, brincar com um animal de estimação ou rir de uma comédia. Reconecte-se com a energia da celebração.",
    affirmation: "Assim como Apolo traz clareza e calor para o mundo a cada amanhecer, você pode se surpreender ao sentir sua própria luz interior brilhando com mais força, iluminando seu caminho com alegria e confiança.",
    metaphor: "Imagine um girassol. Ele não se esforça para ser um girassol. Ele não questiona se merece a luz. Ele simplesmente se volta para o sol e, ao fazer isso, torna-se a expressão mais plena e radiante de si mesmo.",
    aromatherapy: {
      oil: "Óleo Essencial de Limão Siciliano (Citrus limon) ou Bergamota (Citrus bergamia)",
      usage: "Use 5-6 gotas no difusor pela manhã para energizar o ambiente e trazer uma atmosfera de otimismo e alegria. Pingue 1 gota em um lenço e inale durante o dia para elevar o ânimo.",
      benefits: "Os óleos cítricos são como 'sol líquido'. Eles dissipam a tristeza e a apatia, limpam a mente, promovem o otimismo e a autoconfiança, e nos conectam com a energia vibrante e alegre do Sol.",
    },
    phytotherapy: {
      herb: "Calêndula (Calendula officinalis) ou Hipérico/Erva de São João (Hypericum perforatum)",
      properties: "A Calêndula, com suas flores solares, é um anti-inflamatório e cicatrizante para a pele, trazendo calor e cura. O Hipérico é conhecido como um poderoso antidepressivo natural, que 'traz a luz do sol' para a mente.",
      contraindications: "Hipérico pode causar fotossensibilidade e INTERFERE com muitos medicamentos (incluindo anticoncepcionais e antidepressivos). CONSULTE UM PROFISSIONAL antes de usar.",
      recipes: [
        {
          title: "Chá Solar (Calêndula)",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de flores de calêndula. Abafe por 5 minutos. Beba, visualizando a energia do sol preenchendo cada célula do seu corpo com vitalidade.",
        },
        {
          title: "Banho de Alegria",
          description: "Prepare o chá concentrado de calêndula (500ml para 3 colheres de sopa das flores). Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que a alegria, o sucesso e a clareza iluminem sua vida.",
        },
      ],
    },
    lunar: {
      connection: "O Sol representa o poder da Lua Cheia em seu esplendor máximo. É o momento de maior luz, visibilidade, celebração e consciência. É quando a jornada da escuridão (Lua Nova) atinge seu clímax de iluminação.",
      reflection: "Sob a luz plena desta Lua, que sucesso ou verdade em minha vida estou pronta para celebrar? Como posso permitir que minha luz brilhe plenamente, sem medo?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 20 - O Julgamento
  {
    day: 20,
    title: "O Julgamento",
    divinity: "Hermes Psicopompo",
    imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 20 – O Julgamento",
      myth: "Além de mensageiro, Hermes tinha a sagrada função de Psicopompo, o guia das almas. Era ele quem conduzia as almas dos mortos até as margens do rio Estige, no Submundo. Ele não julgava, apenas guiava a transição. Este mito representa um chamado para um nível mais elevado de consciência, um despertar para uma nova vida, deixando para trás o passado e renascendo.",
      meaning: "O Julgamento é um chamado para o seu despertar. É o momento de avaliar sua vida, perdoar a si mesma e aos outros, e renascer para um propósito maior. Não é um julgamento externo, mas um chamado da sua própria alma para se elevar. Você está pronta para atender a esse chamado? A Sacerdotisa Interior aqui é a Alma Desperta, que se liberta do passado e renasce para sua verdadeira missão. A sombra é a autocrítica e a culpa. A luz é o perdão, o renascimento e a vocação.",
      keywords: ["Despertar", "Renascimento", "Chamado", "Perdão", "Vocação", "Libertação"],
    },
    quiz: [
      "Se a sua alma estivesse soprando uma trombeta, chamando você para sua verdadeira vida, que som ela faria e para qual direção ela te convidaria a ir?",
      "Que velho peso do passado, talvez uma culpa ou um ressentimento, você estaria disposto a deixar para trás hoje para poder se erguer mais leve?",
      "Ao se permitir renascer neste exato momento, qual é a primeira coisa que sua nova versão gostaria de experimentar ou criar?",
    ],
    ritual: {
      title: "O Ritual do Perdão (15 min)",
      description: "Sente-se em um lugar tranquilo. Visualize à sua frente uma pessoa (ou uma versão sua do passado) que você precisa perdoar. Fale em voz alta ou em pensamento tudo o que precisa ser dito. Depois, diga: 'Eu te perdoo e te libero. Eu me perdoo e me libero'. Visualize um cordão que os unia sendo cortado por uma luz dourada. Sinta a leveza que o perdão traz.",
    },
    intuitionTip: "Hoje, ouça músicas que te elevam, que te fazem sentir que tudo é possível. A música é uma forma poderosa de atender ao chamado da alma e de mudar sua vibração.",
    affirmation: "Assim como Hermes guia as almas para uma nova jornada, você pode começar a ouvir um chamado interior te convidando a despertar para um nível mais elevado de ser, livre do passado.",
    metaphor: "Imagine uma semente que passou todo o inverno debaixo da terra escura. Então, na primavera, ela sente um chamado, um impulso irresistível para a luz. Ela não sabe exatamente como será o mundo lá fora, mas ela responde ao chamado e rompe a terra, renascendo como um broto.",
    aromatherapy: {
      oil: "Óleo Essencial de Olíbano (Boswellia carterii)",
      usage: "Use 1 gota no chakra coronário (topo da cabeça) para facilitar o despertar espiritual. Use 5 gotas no difusor durante sua meditação para se conectar com seu chamado superior.",
      benefits: "Retornamos a este óleo sagrado. O Olíbano é o óleo do despertar espiritual. Ele nos ajuda a cortar os laços com o passado, a perdoar e a nos conectar com nossa missão de alma, facilitando a transição representada pelo Julgamento.",
    },
    phytotherapy: {
      herb: "Rosa Mosqueta (Rosa canina/rubiginosa)",
      properties: "Fisicamente, seus frutos são extremamente ricos em Vitamina C, renovando a imunidade e a vitalidade. Energeticamente, a Rosa, em todas as suas formas, trabalha a cura do coração, o perdão e o amor incondicional, essenciais para o processo de renascimento do Julgamento.",
      contraindications: "Geralmente segura.",
      recipes: [
        {
          title: "Chá do Renascimento",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de frutos secos de rosa mosqueta. Abafe por 10-15 minutos. Beba, intencionando perdoar o passado e renascer com o coração aberto.",
        },
        {
          title: "Banho do Perdão",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa dos frutos) e adicione um punhado de pétalas de rosa. Após o banho, jogue a mistura coada do pescoço para baixo, pedindo que todas as mágoas sejam lavadas e que seu coração seja renovado.",
        },
      ],
    },
    lunar: {
      connection: "O Julgamento ecoa na energia da Lua Balsâmica, os últimos dias de escuridão antes da Lua Nova. É um tempo de profunda reflexão, de avaliação do ciclo que passou e de perdão, preparando o terreno para a semente do novo ciclo que está prestes a ser plantada.",
      reflection: "Neste momento de quietude antes do recomeço, o que eu preciso perdoar e liberar de vez? Qual é o chamado que sinto para o próximo ciclo que se inicia?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
  // Dia 21 - O Mundo
  {
    day: 21,
    title: "O Mundo",
    divinity: "Hermafrodito",
    imageUrl: "https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1974&auto=format&fit=crop",
    arcano: {
      title: "Arcano do Dia 21 – O Mundo",
      myth: "Hermafrodito era filho de Hermes (o masculino, a lógica) e Afrodite (o feminino, o amor). Ele era um jovem de beleza estonteante. A ninfa Salmacis se apaixonou perdidamente por ele e, ao abraçá-lo em uma fonte, pediu aos deuses que nunca mais fossem separados. Seu desejo foi atendido e os dois corpos se fundiram em um só ser, que continha tanto o masculino quanto o feminino. Hermafrodito representa a integração final dos opostos, a totalidade e a união sagrada.",
      meaning: "O Mundo é a conclusão da jornada do Louco. Você chegou! Este arcano representa sucesso, realização, integração e plenitude. Você dança em harmonia com o universo, pois integrou todas as partes de si mesma. É o fim de um grande ciclo e a celebração de tudo o que você aprendeu e se tornou. A Sacerdotisa Interior aqui é a Mulher Completa, a Deusa em sua própria dança cósmica.",
      keywords: ["Conclusão", "Integração", "Plenitude", "Sucesso", "Realização", "Totalidade"],
    },
    quiz: [
      "Ao sentir a dança do universo fluindo através de você, que passo de celebração seu corpo gostaria de dar neste momento?",
      "Que partes de você, antes em conflito, agora dançam juntas em perfeita harmonia, celebrando sua totalidade?",
      "Olhando para a jornada que você percorreu, que sentimento de orgulho e realização você se permite sentir plenamente agora, sabendo que você chegou em casa, dentro de si mesma?",
    ],
    ritual: {
      title: "A Dança da Totalidade (10 min)",
      description: "Coloque a música mais celebratória e expansiva que você ama. Em pé, no centro do seu espaço, comece a se mover. Dance como se o universo inteiro estivesse dançando com você. Gire, abra os braços, sorria. Sinta a alegria da conclusão, a gratidão pela jornada e a plenitude de ser exatamente quem você é, aqui e agora.",
    },
    intuitionTip: "Hoje, celebre! Faça algo especial para honrar a si mesma e sua jornada. Pode ser preparar uma refeição deliciosa, comprar uma flor para si, ou simplesmente se olhar no espelho e dizer: 'Parabéns. Nós conseguimos. Eu te honro'.",
    affirmation: "Assim como Hermafrodito uniu o masculino e o feminino para encontrar a totalidade, você pode descobrir, com uma alegria profunda, que já é completa, inteira e está dançando em perfeita harmonia com o ritmo do universo.",
    metaphor: "Imagine a jornada de um rio. Ele nasce pequeno, enfrenta pedras, desce cachoeiras, atravessa planícies e, finalmente, após uma longa jornada, ele chega ao oceano. Ele não deixa de ser rio, mas agora ele também é o oceano. Ele encontrou sua totalidade.",
    aromatherapy: {
      oil: "Óleo Essencial de Lavanda (Lavandula angustifolia)",
      usage: "Pingue uma gota no chakra do coração e uma no coronário, unindo o céu e a terra dentro de você. Use 5-6 gotas no difusor para um ambiente de celebração, paz e plenitude.",
      benefits: "A Lavanda, a grande mãe da aromaterapia, retorna aqui por sua capacidade de integrar e equilibrar todos os sistemas. Ela traz uma sensação de paz profunda, de missão cumprida e de conexão com o todo, coroando a jornada.",
    },
    phytotherapy: {
      herb: "Manjericão Sagrado/Tulsi (Ocimum sanctum)",
      properties: "Fisicamente, é uma erva adaptógena, que ajuda o corpo a lidar com o estresse e a encontrar equilíbrio. Energeticamente, o Tulsi é reverenciado na Índia como uma deusa encarnada. Ele purifica a aura, abre o coração e a mente, e promove um estado de consciência integrada e bem-estar divino.",
      contraindications: "Pode afinar o sangue, usar com cautela com anticoagulantes. Evitar na gravidez.",
      recipes: [
        {
          title: "Chá da Plenitude",
          description: "Ferva 200ml de água, desligue e adicione 1 colher de chá de Tulsi seco. Abafe por 5-7 minutos. Beba em estado meditativo, sentindo a harmonia e a paz preenchendo todo o seu ser.",
        },
        {
          title: "Banho da Celebração",
          description: "Prepare o chá concentrado (500ml para 3 colheres de sopa da erva) e adicione pétalas de flores coloridas. Após o banho, jogue a mistura coada do pescoço para baixo, celebrando a conclusão da sua jornada e a beleza da sua totalidade.",
        },
      ],
    },
    lunar: {
      connection: "O Mundo representa a totalidade do ciclo lunar. Contém a semente da Lua Nova, o crescimento da Crescente, a plenitude da Cheia e a sabedoria da Minguante. Ao chegar no Mundo, você compreende e honra cada fase da jornada como essencial para a sua integração.",
      reflection: "Olhando para todo o ciclo que se fecha, qual foi a maior dádiva que cada fase da lua (e da minha jornada) me trouxe? Como posso celebrar esta totalidade que agora sou?",
    },
    musicLink: "https://open.spotify.com/playlist/3OTU1GjwkFAQO62UC5LuX6",
  },
];
