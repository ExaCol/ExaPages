// Translations dictionary
const translations = {
  es: {
    header: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      faqs: 'FAQs',
      contact: 'Contáctanos'
    },
    hero: {
      subtitle: 'Desarrollamos soluciones tecnológicas',
      title: 'Impulse su empresa con software diseñado para satisfacer sus necesidades'
    },
    about: {
      title: 'Sobre Nosotros',
      historyTitle: 'Historia de Exa',
      missionTitle: 'Misión',
      visionTitle: 'Visión',
      historyText: [
        'La historia de Exa comenzó en las aulas de la Universidad, donde cinco jóvenes apasionados por la tecnología -Luis, Julián, Nicolás, Tomás y Felipe- descubrieron que compartir una visión podía transformar ideas en realidades. Como estudiantes de Ingeniería de Sistemas, cada proyecto los acercó más a su verdadera vocación: crear soluciones tecnológicas que marcaran la diferencia.',
        'En sexto semestre, en el año 2024, aceptaron un reto en la materia de Desarrollo Web: idear un proyecto innovador. Inspirados en una necesidad real de su universidad, desarrollaron una plataforma para el agendamiento y reserva de laboratorios, un sistema inexistente hasta ese momento. Lo que comenzó como un simple trabajo académico se convirtió en un éxito rotundo. La respuesta de la comunidad fue abrumadora: felicitaciones, agradecimientos y, sobre todo, el impacto real de la solución en la vida estudiantil.',
        'Ese momento les permitió darse cuenta de algo crucial: contaban con las habilidades, la pasión y la visión para lograr más. ¿Por qué limitar su impacto a una sola universidad cuando podían ayudar a muchas más empresas y organizaciones a optimizar sus procesos? Con esa motivación, en enero de 2025 nació Exa, una empresa creada para transformar desafíos en oportunidades a través del desarrollo de software a la medida.',
        'Hoy, su compromiso sigue siendo el mismo con el que iniciaron: innovar, solucionar y acompañar a cada cliente en su transformación digital, ofreciendo tecnología diseñada a la medida de sus necesidades.'
      ],
      missionText: 'Desarrollar soluciones de software innovadoras que impulsen el crecimiento y la transformación digital de nuestros clientes, optimizando la automatización de sus procesos. A través de tecnología de vanguardia, creatividad y un enfoque personalizado, garantizamos un servicio de excelencia, calidad y compromiso, contribuyendo al éxito y sostenibilidad de las empresas con las que trabajamos.',
      visionText: 'Consolidarnos como un referente en el desarrollo de software para pequeñas y medianas empresas, tanto a nivel nacional como internacional. Nos distinguimos por nuestra capacidad para ofrecer soluciones tecnológicas eficientes, innovadoras y adaptadas a las necesidades del mercado, generando un impacto positivo en la productividad empresarial y el desarrollo social.'
    },
    projects: {
      title: 'Nuestros Proyectos',
      cards: [
        {
          title: 'Proyecto 1',
          description: 'Descripcion 1',
          linkText: 'Ver más'
        },
        {
          title: 'Proyecto 2',
          description: 'Descripcion 2',
          linkText: 'Ver más'
        },
        {
          title: 'Proyecto 3',
          description: 'Descripcion 3',
          linkText: 'Ver más'
        },
        {
          title: 'Proyecto 4',
          description: 'Descripcion 4',
          linkText: 'Ver más'
        },
        {
          title: 'Proyecto 5',
          description: 'Descripcion 5',
          linkText: 'Ver más'
        },
        {
          title: 'Proyecto 6',
          description: 'Descripcion 6',
          linkText: 'Ver más'
        }
      ]
    },
    team: {
      title: 'Nuestro Equipo',
      members: [
        {
          name: 'Luis Gabriel Romero',
          role: 'Desarrollador Full Stack',
          description: 'Especialista en Java, gestión de bases de datos y desarrollo web. Con experiencia en análisis de datos, automatización de procesos y administración de sistemas. Habilidades en trabajo en equipo.',
          languages: 'Idiomas: Español, Inglés y Japonés'
        },
        {
          name: 'Julián David Nova',
          role: 'Desarrollador Backend y Analista de Requerimientos',
          description: 'Experto en Java y bases de datos (MySQL y PostgreSQL). Con conocimientos en JavaScript, Python y HTML para aplicaciones web. Destacado por su capacidad de trabajo en equipo.',
          languages: 'Idiomas: Español y Inglés'
        },
        {
          name: 'Nicolás Moreno Ramírez',
          role: 'Backend Developer y ML Engineer',
          description: 'Apasionado por la resolución de problemas y el pensamiento crítico. Destacado en trabajo en equipo, liderazgo y toma de decisiones estratégicas en el desarrollo de software.',
          languages: 'Idiomas: Español y Inglés'
        },
        {
          name: 'Andrés Felipe Triviño',
          role: 'Desarrollador Full Stack con énfasis en Backend',
          description: 'Amplia experiencia en Java, patrones de diseño y bases de datos (MySQL, PostgreSQL y Oracle). Con conocimientos en JavaScript, HTML, CSS y Python. Responsable, detallista y con habilidades de liderazgo.',
          languages: 'Idiomas: Español y Inglés'
        },
        {
          name: 'Tomás David Vera',
          role: 'Desarrollador Full Stack con énfasis en Frontend',
          description: 'Creativo y apasionado por la tecnología. Se destaca por su lógica, compromiso y talento en el desarrollo de interfaces dinámicas y atractivas.',
          languages: 'Idiomas: Español y Inglés'
        },
        // Add translations for other team members similarly
      ],
      moreInfo: 'Más información',
      lessInfo: 'Menos información'
    },
    whySoftware: {
      title: '¿Por qué Necesito un software como solución?',
      paragraphs: [
        'El software es mucho más que una herramienta tecnológica; es la clave para optimizar procesos, mejorar la productividad y reducir costos en cualquier negocio. Se trata de un conjunto de programas diseñados para automatizar tareas, resolver problemas complejos y facilitar la gestión de datos y la comunicación, brindando soluciones eficientes en múltiples sectores.',
        'Implementar software a la medida significa dejar atrás procesos manuales y repetitivos, minimizando errores y maximizando la eficiencia operativa. Desde la automatización de flujos de trabajo hasta la mejora en la toma de decisiones con análisis de datos en tiempo real, la tecnología se convierte en un aliado estratégico para el crecimiento de tu empresa.',
        'No se trata solo de adaptarse a la era digital, sino de aprovechar sus ventajas para impulsar tu negocio al siguiente nivel. Con la solución adecuada, puedes reducir tiempos de ejecución, optimizar recursos y ofrecer un mejor servicio a tus clientes. La transformación comienza hoy. ¿Estás listo para dar el paso hacia la innovación?'
      ]
    },
    whyExa: {
      title: '¿Por qué elegir EXA?',
      cards: [
        {
          title: 'Innovación Tecnológica',
          description: 'Soluciones avanzadas con la mejor tecnología del mercado.'
        },
        {
          title: 'Seguridad y Confianza',
          description: 'Protegemos tu información con los más altos estándares.'
        },
        {
          title: 'Optimización y Eficiencia',
          description: 'Procesos rápidos y efectivos para mejorar tu experiencia.'
        },
        {
          title: 'Soporte y Asesoría',
          description: 'Te acompañamos en cada paso con atención personalizada.'
        }
      ]
    },
    whyExa: {
      title: '¿Por qué elegir EXA?',
      cards: [
        {
          title: 'Innovación Tecnológica',
          description: 'Soluciones avanzadas con la mejor tecnología del mercado.'
        },
        {
          title: 'Seguridad y Confianza',
          description: 'Protegemos tu información con los más altos estándares.'
        },
        {
          title: 'Optimización y Eficiencia',
          description: 'Procesos rápidos y efectivos para mejorar tu experiencia.'
        },
        {
          title: 'Soporte y Asesoría',
          description: 'Te acompañamos en cada paso con atención personalizada.'
        }
      ]
    },
    footer: {
      followText: "Síguenos en",
      and: "y",
      contactTitle: "Datos de contacto",
      phoneText: "Número de Teléfono",
      copyright: "Todos los derechos reservados.",
      location: "Bogotá D.C."
    }

  },
  en: {
    header: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      faqs: 'FAQs',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'We develop technological solutions.',
      title: 'We support your company’s growth with software tailored to your needs.'
    },
    about: {
      title: 'About Us',
      historyTitle: 'Exa’s History',
      missionTitle: 'Mission',
      visionTitle: 'Vision',
      historyText: [
        'Exa’s history began in the university classroom. Five young individuals passionate about technology —Luis, Julián, Nicolás, Tomás, and Felipe— realized that by sharing a common vision, they could turn ideas into reality. As systems engineering students, they came closer to their true mission through projects. Their mission was to create technological solutions that would have an impact on the world.',
        'In 2024, when they reached their sixth semester at university, they accepted a challenge in a "Web Development" class. The challenge was to come up with an innovative project. Inspired by the university’s real needs, they developed a platform to reserve and manage labs, a system that did not exist before. This project, which started as an academic task, became a remarkable success. The university community’s response was overwhelming. They received praise and gratitude, and most importantly, they felt the satisfaction of having made a real impact on student life.',
        'At that moment, they realized something important. They had the skills, passion, and vision, and they knew they could accomplish much more. Why limit themselves to one university? They could optimize processes for many more businesses and organizations. With this in mind, Exa was born in January 2025. Exa is a company with the mission of turning challenges into opportunities through software development.',
        'And to this day, their belief remains unchanged. To innovate, solve problems, and support the digital transformation of all their clients. They continue to offer technology tailored to each individual need.'
      ],
      missionText: 'We develop innovative software solutions, driving the growth and digital transformation of our clients while optimizing process automation. Through cutting-edge technology, creativity, and a personalized approach, we provide services with exceptional quality and high responsibility, contributing to the success and sustainability of the companies we work with.',
      visionText: 'We aim to establish ourselves as leaders in software development for small and medium-sized enterprises, both nationally and internationally. Our mission is to contribute to increasing business productivity and societal development by providing innovative and efficient technological solutions that adapt to market needs.'
    },
    projects: {
      title: 'Our Projects',
      cards: [
        {
          title: 'Project 1',
          description: 'Description 1',
          linkText: 'See more'
        },
        {
          title: 'Project 2',
          description: 'Description 2',
          linkText: 'See more'
        },
        {
          title: 'Project 3',
          description: 'Description 3',
          linkText: 'See more'
        },
        {
          title: 'Project 4',
          description: 'Description 4',
          linkText: 'See more'
        },
        {
          title: 'Project 5',
          description: 'Description 5',
          linkText: 'See more'
        },
        {
          title: 'Project 6',
          description: 'Description 6',
          linkText: 'See more'
        }
      ]
    },
    team: {
      title: 'Our Team',
      members: [
        {
          name: 'Luis Gabriel Romero',
          role: 'Full Stack Engineer',
          description: 'Expert in Java, database management, and web development. With experience in data analysis, process automation, and system administration. Exceptional teamwork skills.',
          languages: 'Languages: Spanish, English, Japanese'
        },
        {
          name: 'Julián David Nova',
          role: 'Backend Engineer and Requirements Analyst',
          description: 'Expert in Java and databases (MySQL and PostgreSQL). Knowledgeable in JavaScript, Python, and HTML for web applications. Excellent teamwork abilities.',
          languages: 'Spanish and English'
        },
        {
          name: 'Nicolás Moreno Ramírez',
          role: 'Backend Developer and ML Engineer',
          description: 'Passionate about problem-solving and critical thinking. Exceptional teamwork, leadership, and strategic decision-making skills in software development.',
          languages: 'Spanish and English'
        },
        {
          name: 'Andrés Felipe Triviño',
          role: 'Full Stack Developer with Backend Focus',
          description: 'With extensive experience in Java, design patterns, and databases (MySQL, PostgreSQL, Oracle). Knowledgeable in JavaScript, HTML, CSS, and Python. Strong responsibility and leadership skills.',
          languages: 'Spanish and English'
        },
        {
          name: 'Tomás David Vera',
          role: 'Full Stack Developer with Frontend Focus',
          description: 'Creative and passionate about technology. With strong logical thinking, responsibility, and skills in developing engaging and dynamic interfaces.',
          languages: 'Spanish and English'
        }
      ],
      moreInfo: 'More Information',
      lessInfo: 'Close Details'
    },
    whySoftware: {
      title: 'Why Software is Necessary as a Solution?',
      paragraphs: [
        'Software is not just a technological tool; it is key to optimizing processes in any business, increasing productivity, and reducing costs.',
        'Software is a set of programs designed to automate tasks, solve complex problems, and improve efficiency in data management and communication, offering effective solutions across various industries.',
        'By implementing custom software, manual and repetitive processes are eliminated, minimizing errors and maximizing operational efficiency.',
        'From workflow automation to improved decision-making through real-time data analysis, technology becomes a strategic partner for business growth.',
        'It’s not just about adapting to the digital age, but leveraging its benefits to take your business to the next level.',
        'Implementing the right solution allows for reduced work time, optimized resources, and improved customer service.',
        'The change starts today. Are you ready to take the first step toward innovation?'
      ]
    },
    whyExa: {
      title: 'Why Choose EXA?',
      cards: [
        {
          title: 'Technological Innovation',
          description: 'Advanced solutions using the best technology in the market.'
        },
        {
          title: 'Security and Trust',
          description: 'We protect your information with the highest standards.'
        },
        {
          title: 'Optimization and Efficiency',
          description: 'We improve your experience with fast and effective processes.'
        },
        {
          title: 'Support and Consultation',
          description: 'We support you step by step with detailed attention.'
        }
      ]
    },
    footer: {
      followText: "Follow us on",
      and: "and",
      contactTitle: "Contact information",
      phoneText: "Phone Number",
      copyright: "All rights reserved.",
      location: "Bogotá D.C."
    }
  },
  ja: {
    // Japanese translations (similar structure to Spanish)
    header: {
      home: 'ホーム',
      services: 'サービス',
      about: '私たちについて',
      faqs: 'FAQ',
      contact: 'お問い合わせ'
    },
    hero: {
      subtitle: '私たちは技術ソリューションを開発しています。',
      title: '貴社の成長を、ニーズに応じたソフトウェアで支援します。'
    },
    about: {
      title: '当社について',
      historyTitle: ' エクサの歴史',
      missionTitle: '使命',
      visionTitle: '展望',
      historyText: [
        'エクサの歴史は大学の教室から始まりました。テクノロジーに情熱を注ぐ5人の若者——ルイス、ジュリアン、ニコラス、トマス、フェリペ——が、一つのビジョンを共有することでアイデアを現実に変えられることに気づいたのです。システム工学の学生として、彼らはプロジェクトを通じて自らの真の使命に近づいていきました。それは、世の中に影響を与える技術ソリューションを創り出すことでした',
        '2024年、彼らが大学の6学期目を迎えたとき、「ウェブ開発」の授業である挑戦を受け入れました。それは、革新的なプロジェクトを考案すること。大学の実際のニーズにインスピレーションを受け、彼らは研究室の予約・管理を行うためのプラットフォームを開発しました。それまで存在しなかったシステムです。単なる学術課題として始まったこのプロジェクトは、驚くべき成功を収めました。大学コミュニティの反応は圧倒的でした。称賛、感謝の声、そして何よりも、学生生活に実際の影響を与えることができたという実感がありました。',
        'その瞬間、彼らは重要なことに気づきました。彼らにはスキル、情熱、そしてビジョンがあり、それを活かせばもっと多くのことを成し遂げられると。なぜ一つの大学にとどまるのか？もっと多くの企業や組織のプロセスを最適化できるはずだ。この想いを胸に、2025年1月、エクサは誕生しました。エクサは、ソフトウェア開発を通じて課題をチャンスに変えることを使命とする企業です。',
        'そして現在も、彼らの信念は変わりません。革新し、課題を解決し、すべてのクライアントのデジタル変革を支援すること。それぞれのニーズに合わせたテクノロジーを提供し続けています。'
      ],
      missionText: '革新的なソフトウェアソリューションを開発し、お客様の成長とデジタル変革を推進するとともに、業務プロセスの自動化を最適化します。最先端技術、創造性、そして個別対応のアプローチを通じて、卓越した品質と高い責任感を持つサービスを提供し、共に働く企業の成功と持続可能性に貢献します。',
      visionText: '国内外の中小企業向けソフトウェア開発のリーダーとしての地位を確立することを目指します。市場のニーズに適応した効率的かつ革新的な技術ソリューションを提供する能力により、企業の生産性向上と社会の発展に貢献することを使命とします。'
    },
    projects: {
      title: '私たちのプロジェクト', // "Nuestros proyectos" en japonés
      cards: [
        {
          title: 'プロジェクト1',
          description: '説明1',
          linkText: '詳細を見る' // "Ver más" en japonés
        },
        {
          title: 'プロジェクト2',
          description: '説明2',
          linkText: '詳細を見る'
        },
        {
          title: 'プロジェクト3',
          description: '説明3',
          linkText: '詳細を見る'
        },
        {
          title: 'プロジェクト4',
          description: '説明4',
          linkText: '詳細を見る'
        },
        {
          title: 'プロジェクト5',
          description: '説明5',
          linkText: '詳細を見る'
        },
        {
          title: 'プロジェクト6',
          description: '説明6',
          linkText: '詳細を見る'
        },
      ]
    },
    team: {
      title: '私たちのチーム',
      members: [
        {
          name: 'Luis Gabriel Romero',
          role: 'フルスタックエンジニア',
          description: 'Java、データベース管理、Web開発の専門家。データ分析、プロセス自動化、システム管理の経験を持つ。チームワークに優れたスキルを持つ。',
          languages: '言語：スペイン語、英語、日本語 '
        },
        {
          name: 'Julián David Nova',
          role: 'バックエンドエンジニア兼要件アナリスト',
          description: 'Javaとデータベース（MySQLおよびPostgreSQL）の専門家。Webアプリケーション向けのJavaScript、Python、HTMLの知識を持つ。チームワークの能力に優れている。',
          languages: 'スペイン語と英語'
        },
        {
          name: 'Nicolás Moreno Ramírez',
          role: 'バックエンド開発者兼MLエンジニア',
          description: '問題解決と批判的思考に情熱を持つ。ソフトウェア開発におけるチームワーク、リーダーシップ、戦略的意思決定に優れている。',
          languages: 'スペイン語と英語'
        },
        {
          name: 'Andrés Felipe Triviño',
          role: 'バックエンドを重視するフルスタック開発者',
          description: 'Java、デザインパターン、およびデータベース（MySQL、PostgreSQL、Oracle）に関する豊富な経験を持つ。JavaScript、HTML、CSS、Pythonの知識を持つ。 責任感が強く、細部に注意を払い、リーダーシップの能力に優れている。',
          languages: 'スペイン語と英語'
        },
        {
          name: 'Tomás David Vera',
          role: 'フロントエンドを重視するフルスタック開発者',
          description: '創造的で技術に情熱を持つ。 論理的思考、責任感、そして魅力的で動的なインターフェースの開発に優れている。',
          languages: 'スペイン語と英語'
        },
        // Add translations for other team members similarly
      ],
      moreInfo: '詳しく見る',
      lessInfo: '詳細を閉じる'
    },
    whySoftware: {
      title: 'なぜ解決策としてソフトウェアが必要なのか？',
      paragraphs: [
        'ソフトウェアは単なる技術ツールではなく、あらゆるビジネスのプロセスを最適化し、生産性を向上させ、コストを削減するための鍵です。',
        'ソフトウェアとは、業務の自動化、複雑な問題の解決、データ管理やコミュニケーションの効率化を実現するために設計されたプログラムの集合体であり、さまざまな業界で効果的なソリューションを提供します。',
        'オーダーメイドのソフトウェアを導入することで、手作業や繰り返しのプロセスを排除し、エラーを最小限に抑え、業務効率を最大化できます。',
        'ワークフローの自動化からリアルタイムデータ分析による意思決定の向上まで、テクノロジーは企業の成長を支える戦略的パートナーとなります。',
        '単にデジタル時代に適応するだけでなく、その利点を活かし、ビジネスを次のレベルへと押し上げましょう。',
        '適切なソリューションを導入することで、作業時間の短縮、リソースの最適化、より良い顧客サービスの提供が可能になります。',
        '変革は今日から始まります。あなたは、革新への一歩を踏み出す準備ができていますか？'
      ]
    },
    whyExa: {
      title: 'なぜEXAを選ぶのか？',
      cards: [
        {
          title: 'テクノロジーの革新',
          description: '市場最高の技術を活用した先進的なソリューション。'
        },
        {
          title: '安全と信頼',
          description: '最高水準の基準であなたの情報を保護します。'
        },
        {
          title: '最適化と効率',
          description: '迅速かつ効果的なプロセスで、あなたの体験を向上させます。'
        },
        {
          title: '支援と相談',
          description: '一歩一歩、丁寧な対応であなたをサポートします。'
        }
      ]
    },
    footer: {
      followText: "フォローしてください",
      and: "と",
      contactTitle: "連絡先",
      phoneText: "電話番号",
      copyright: "全著作権所有。",
      location: "ボゴタ D.C."
    }
  }
};
// Language translation function
function translatePage(language) {
  localStorage.setItem('selectedLanguage', language); // Guarda el idioma en Local Storage
  const currentLang = translations[language];

  // Traducción del header
  document.querySelector('.navbar-menu li:nth-child(1) a').textContent = currentLang.header.home;
  document.querySelector('.navbar-menu li:nth-child(2) a').textContent = currentLang.header.services;
  document.querySelector('.navbar-menu li:nth-child(3) a').textContent = currentLang.header.about;
  document.querySelector('.navbar-menu li:nth-child(4) a').textContent = currentLang.header.faqs;
  document.querySelector('.faq-link').textContent = currentLang.header.contact;

  // Traducción de la sección Hero
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.querySelector('h2').textContent = currentLang.hero.subtitle;
    heroContent.querySelector('h1').textContent = currentLang.hero.title;
  }

  // Traducción de la sección About
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutSection.querySelector('h1').textContent = currentLang.about.title;
    const historyHeaders = aboutSection.querySelectorAll('h2');
    historyHeaders[0].textContent = currentLang.about.historyTitle;
    historyHeaders[1].textContent = currentLang.about.missionTitle;
    historyHeaders[2].textContent = currentLang.about.visionTitle;

    // Actualizar párrafos
    const paragraphs = aboutSection.querySelectorAll('p');
    currentLang.about.historyText.forEach((text, index) => {
      paragraphs[index].textContent = text;
    });
    paragraphs[4].textContent = currentLang.about.missionText;
    paragraphs[5].textContent = currentLang.about.visionText;
  }

  // Traducción de la sección Equipo
  const teamSection = document.querySelector('.team');
  if (teamSection) {
    teamSection.querySelector('h1').textContent = currentLang.team.title;
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
      const memberData = currentLang.team.members[index];
      if (memberData) {
        card.querySelector('.team-name').textContent = memberData.name;
        card.querySelector('.team-role').textContent = memberData.role;
        const hiddenInfo = card.querySelector('.hidden-info');
        const descriptionP = hiddenInfo.querySelectorAll('p');
        descriptionP[0].textContent = memberData.description;
        descriptionP[1].textContent = memberData.languages;
        const toggleButton = card.querySelector('.toggle-info');
        toggleButton.textContent = toggleButton.classList.contains('active')
          ? currentLang.team.lessInfo
          : currentLang.team.moreInfo;
      }
    });
  }
  // Traducción de la sección "¿Por qué Necesito un software como solución?"
  const whySoftwareSection = document.querySelector('.why-software');
  if (whySoftwareSection) {
    whySoftwareSection.querySelector('h1').textContent = currentLang.whySoftware.title;

    const paragraphs = whySoftwareSection.querySelectorAll('p');
    currentLang.whySoftware.paragraphs.forEach((text, index) => {
      if (paragraphs[index]) {
        paragraphs[index].textContent = text;
      }
    });
  }

  // Traducción de la sección "¿Por qué elegir EXA?"
  const whyExaSection = document.querySelector('.why-exa');
  if (whyExaSection) {
    whyExaSection.querySelector('h1').textContent = currentLang.whyExa.title;

    const exaCards = document.querySelectorAll('.why-exa-card');
    currentLang.whyExa.cards.forEach((card, index) => {
      if (exaCards[index]) {
        const cardTitle = exaCards[index].querySelector('h2');
        const cardDescription = exaCards[index].querySelector('p');

        if (cardTitle) cardTitle.textContent = card.title;
        if (cardDescription) cardDescription.textContent = card.description;
      }
    });
  }

  // Traducción de la sección "Nuestros proyectos"
  const projectsSection = document.querySelector('.projects');
  if (projectsSection) {
    projectsSection.querySelector('h1').textContent = currentLang.projects.title;

    const projectCards = document.querySelectorAll('.project-card');
    currentLang.projects.cards.forEach((card, index) => {
      if (projectCards[index]) {
        const cardTitle = projectCards[index].querySelector('h2');
        const cardDescription = projectCards[index].querySelector('p');
        const cardLink = projectCards[index].querySelector('a');

        if (cardTitle) cardTitle.textContent = card.title;
        if (cardDescription) cardDescription.textContent = card.description;
        if (cardLink) cardLink.textContent = card.linkText;
      }
    });
  }

  // Traducción del footer
  const footerSection = document.querySelector('footer');
  if (footerSection) {
    // Traducir "Síguenos en"
    const followText = footerSection.querySelector('p:first-child');
    if (followText) {
      // Preservar los enlaces
      const links = Array.from(followText.querySelectorAll('a'));
      followText.innerHTML = currentLang.footer.followText + ' ';

      // Reinsertamos los enlaces con la puntuación correcta
      links.forEach((link, index) => {
        followText.appendChild(link);
        if (index < links.length - 2) {
          followText.appendChild(document.createTextNode(', '));
        } else if (index === links.length - 2) {
          followText.appendChild(document.createTextNode(' ' + currentLang.footer.and + ' '));
        }
      });
      followText.appendChild(document.createTextNode('.'));
    }

    // Traducir sección de contacto
    const contactoSection = footerSection.querySelector('.contacto');
    if (contactoSection) {
      // Traducir título
      const contactTitle = contactoSection.querySelector('h3');
      if (contactTitle) {
        contactTitle.textContent = currentLang.footer.contactTitle;
      }

      // Traducir "Número de Teléfono"
      const phoneLink = contactoSection.querySelector('a[href^="tel:"]');
      if (phoneLink) {
        phoneLink.textContent = currentLang.footer.phoneText;
      }

      // Traducir "Todos los derechos reservados"
      const copyright = contactoSection.querySelector('p:nth-of-type(1)');
      if (copyright) {
        copyright.textContent = `© Exa. 2025. ${currentLang.footer.copyright}`;
      }

      // Traducir "Bogotá D.C."
      const location = contactoSection.querySelector('p:nth-of-type(2)');
      if (location) {
        location.textContent = currentLang.footer.location;
      }
    }
  }
}

// Add language selector buttons
function addLanguageButtons() {
  const languageContainer = document.createElement('div');
  languageContainer.id = 'language-selector';
  languageContainer.style.position = 'fixed';
  languageContainer.style.bottom = '20px';
  languageContainer.style.right = '20px';
  languageContainer.style.zIndex = '1001';
  languageContainer.style.display = 'flex';
  languageContainer.style.gap = '10px';
  languageContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  languageContainer.style.padding = '10px';
  languageContainer.style.borderRadius = '10px';
  languageContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';

  const languages = [
    { code: 'es', text: 'ES' },
    { code: 'en', text: 'US' },
    { code: 'ja', text: 'JP' }
  ];

  languages.forEach(lang => {
    const button = document.createElement('button');
    button.textContent = lang.text; // Usar texto en lugar de bandera
    button.style.fontSize = '16px'; // Tamaño de fuente adecuado para texto
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.transition = 'transform 0.2s';
    button.style.padding = '5px 8px'; // Añadir padding para mejor apariencia
    button.style.fontWeight = 'bold'; // Hacer el texto más visible

    // Efecto hover
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.2)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });

    button.addEventListener('click', () => {
      translatePage(lang.code);
    });

    languageContainer.appendChild(button);
  });

  document.body.appendChild(languageContainer);
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  addLanguageButtons();

  // Cargar el idioma guardado o establecer por defecto en español
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
  translatePage(savedLanguage);
});

// Modificar el manejador de eventos de los botones toggle-info
document.querySelectorAll('.toggle-info').forEach((button, index) => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    const hiddenInfo = this.parentElement.querySelector('.hidden-info');

    if (hiddenInfo) {
      hiddenInfo.classList.toggle('show');

      // Obtener el idioma actual
      const currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
      const translations = window.translations[currentLanguage];

      // Actualizar el texto del botón según el estado y el idioma
      if (this.classList.contains('active')) {
        this.textContent = translations.team.lessInfo;
      } else {
        this.textContent = translations.team.moreInfo;
      }
    }
  });
});