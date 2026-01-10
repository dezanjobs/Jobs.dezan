console.log("Retro minimal site loaded 🚀");
const translations = {
    ID: {
        hero_sub: "Operasional Infrastruktur IT & Data Center",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Keandalan | Konektivitas | Presisi <br> Selalu mencari peluang baru",
        hero_about: "Insinyur jaringan berusia 31 tahun di Bandung dengan 12 tahun pengalaman. Spesialisasi dalam Data Center, virtualisasi VMware, dan jaringan Cisco/Mikrotik. Penggemar fotografi dan pendukung setia Real Madrid & Persib Bandung.",
        btn_contact: "Hubungi Saya", btn_cv: "Unduh CV", 
        label_about: "// tentang_saya", label_history: "// riwayat_kerja", label_skills: "// keahlian_teknis", label_school: "// pendidikan",
        footer_contact: "Kontak", footer_reach: "Hubungi kapan saja untuk kolaborasi atau pertanyaan.",
        skills: ["VMware", "Linux", "Mikrotik", "Cisco", "ISO8583", "JSON", "UPS/Genset", "Zabbix", "EMC Storage"],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri Bandung", major: "S1 Teknik Informatika" },
            { year: "2009 - 2012", name: "SMK Angkasa 1 Margahayu", major: "Teknik Komputer dan Jaringan" }
        ],
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "Pemeliharaan UPS/Genset, monitoring link, VMware, analisis log transaksi ISO8583/JSON." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "Monitoring DC 24/7 dan pendinginan presisi (CRAC)." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Koperasi Indosat", desc: "Instalasi Aruba/Ruckus proyek Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Technical Support", comp: "PT. Persada", desc: "Implementasi jaringan wireless korporat dan troubleshooting." }
        ]
    },
    EN: {
        hero_sub: "IT Infrastructure & Data Center Operations",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Reliability | Connectivity | Precision <br> Always seeking new opportunities",
        hero_about: "31-year-old network engineer in Bandung with 12 years of experience. Specialist in Data Centers, VMware, and Cisco/Mikrotik networks.",
        btn_contact: "Contact Me", btn_cv: "Download CV", 
        label_about: "// about_me", label_history: "// work_history", label_skills: "// technical_skills", label_school: "// education",
        footer_contact: "Contact", footer_reach: "Reach out anytime for collaborations.",
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "UPS/Genset maintenance, link monitoring, VMware, ISO8583/JSON log analysis." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "24/7 DC monitoring and precision cooling (CRAC)." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Indosat Coop", desc: "Aruba/Ruckus installation for Indosat Super Wi-Fi project." },
            { year: "2012 - 2014", title: "Technical Support", comp: "PT. Persada", desc: "Corporate wireless network implementation and troubleshooting." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor of Computer Science" },
            { year: "2009 - 2012", name: "Angkasa 1 Margahayu Vocational HS", major: "Computer & Network Engineering" }
        ]
    },
    /* --- COPY-PASTE BAGIAN INI KE DALAM OBJEK TRANSLATIONS DI main.js --- */

    ZH: {
        hero_sub: "IT 基础设施与数据中心运营", hero_title: "Dezan Sanubari",
        hero_tagline: "可靠性 | 连接性 | 精密性 <br> 始终寻求新机会",
        hero_about: "31 岁的网络工程师，驻扎在万隆，拥有 12 年经验。精通数据中心、VMware 虚拟化以及 Cisco/Mikrotik 网络。",
        btn_contact: "联系我", btn_cv: "下载简历",
        label_about: "// 关于我", label_history: "// 工作经历", label_skills: "// 技术技能", label_school: "// 教育经历",
        footer_contact: "联系方式", footer_reach: "欢迎随时联系进行合作或咨询。",
        jobs: [
            { year: "2020 - 2025", title: "IT 运营支持", comp: "PT. ValueStream International", desc: "UPS/发电机维护、链路监控、VMware、ISO8583/JSON 交易日志分析。" },
            { year: "2016 - 2020", title: "数据中心专家", comp: "PT. ValueStream International", desc: "24/7 数据中心监控和精密制冷 (CRAC) 管理。" },
            { year: "2015 - 2016", title: "Wi-Fi 支持工程师", comp: "Koperasi Indosat", desc: "Indosat Super Wi-Fi 项目的无线电设备安装和配置。" },
            { year: "2012 - 2014", title: "技术支持", comp: "PT. Persada", desc: "企业无线网络实施与故障排除。" }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "计算机科学学士" },
            { year: "2009 - 2012", name: "Angkasa 1 Margahayu 职业高中", major: "计算机与网络工程" }
        ]
    },
    JP: {
        hero_sub: "ITインフラ・データセンター運用", hero_title: "デザン・サヌバリ",
        hero_tagline: "信頼性 | 接続性 | 精密性 <br> 常に新しい機会を求めています",
        hero_about: "バンドンを拠点とする31歳のネットワークエンジニア。12年の経験を持ち、データセンター、VMware仮想化、Cisco/Mikrotikネットワークのスペシャリストです。",
        btn_contact: "お問い合わせ", btn_cv: "CVをダウンロード",
        label_about: "// 私について", label_history: "// 職歴", label_skills: "// 技術スキル", label_school: "// 学歴",
        footer_contact: "連絡先", footer_reach: "コラボレーションやご質問については、いつでもご連絡ください。",
        jobs: [
            { year: "2020 - 2025", title: "IT運用サポート", comp: "PT. ValueStream International", desc: "UPS/発電機保守、リンク監視、VMware、ISO8583/JSONログ分析。" },
            { year: "2016 - 2020", title: "データセンタースペシャリスト", comp: "PT. ValueStream International", desc: "24時間365日のDC監視と精密冷却管理。" },
            { year: "2015 - 2016", title: "Wi-Fiサポートエンジニア", comp: "Koperasi Indosat", desc: "Indosat Super Wi-Fiプロジェクトの無線機器設置と設定。" },
            { year: "2012 - 2014", title: "テクニカルサポート", comp: "PT. Persada", desc: "企業向け無線ネットワークの構築とトラブルシューティング。" }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "コンピューターサイエンス学士" },
            { year: "2009 - 2012", name: "Angkasa 1 職業高校", major: "コンピュータ・ネットワーク工学" }
        ]
    },
    KO: {
        hero_sub: "IT 인프라 및 데이터 센터 운영", hero_title: "Dezan Sanubari",
        hero_tagline: "신뢰성 | 연결성 | 정밀성 <br> 항상 새로운 기회를 찾고 있습니다",
        hero_about: "반둥에서 활동하는 31세 네트워크 엔지니어. 12년 경력의 데이터 센터, VMware 가상화 및 Cisco/Mikrotik 네트워크 전문가.",
        btn_contact: "문의하기", btn_cv: "이력서 다운로드",
        label_about: "// 자기소개", label_history: "// 경력 사항", label_skills: "// 기술 스택", label_school: "// 학력",
        footer_contact: "연락처", footer_reach: "협업이나 질문이 있으시면 언제든지 연락주세요.",
        jobs: [
            { year: "2020 - 2025", title: "IT 운영 지원", comp: "PT. ValueStream International", desc: "UPS/발전기 유지보수, 링크 모니터링, VMware, ISO8583/JSON 로그 분석." },
            { year: "2016 - 2020", title: "데이터 센터 전문가", comp: "PT. ValueStream International", desc: "24/7 데이터 센터 모니터링 및 냉각 시스템 관리." },
            { year: "2015 - 2016", title: "Wi-Fi 기술 지원", comp: "Koperasi Indosat", desc: "Indosat Super Wi-Fi 프로젝트 무선 장비 설치 및 구성." },
            { year: "2012 - 2014", title: "기술 지원", comp: "PT. Persada", desc: "기업용 무선 네트워크 구축 및 문제 해결." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "컴퓨터공학 학사" },
            { year: "2009 - 2012", name: "Angkasa 1 직업 고등학교", major: "컴퓨터 및 네트워크 공학" }
        ]
    },
    DE: {
        hero_sub: "IT-Infrastruktur & RZ-Betrieb", hero_title: "Dezan Sanubari",
        hero_tagline: "Zuverlässigkeit | Konnektivität | Präzision <br> Immer auf der Suche nach neuen Möglichkeiten",
        hero_about: "31-jähriger Netzwerkingenieur in Bandung mit 12 Jahren Erfahrung. Spezialist für Rechenzentren, VMware-Virtualisierung und Cisco/Mikrotik-Netzwerke.",
        btn_contact: "Kontakt", btn_cv: "CV herunterladen",
        label_about: "// Über mich", label_history: "// Werdegang", label_skills: "// Fähigkeiten", label_school: "// Ausbildung",
        footer_contact: "Kontakt", footer_reach: "Kontaktieren Sie mich jederzeit für Kooperationen oder Fragen.",
        jobs: [
            { year: "2020 - 2025", title: "IT-Operations Support", comp: "PT. ValueStream International", desc: "Wartung von USV/Genset, Link-Monitoring, VMware, Analyse von ISO8583/JSON-Logs." },
            { year: "2016 - 2020", title: "RZ-Spezialist", comp: "PT. ValueStream International", desc: "24/7 RZ-Überwachung und Präzisionskühlung (CRAC) Management." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Koperasi Indosat", desc: "Installation und Konfiguration für das Indosat Super Wi-Fi Projekt." },
            { year: "2012 - 2014", title: "Technischer Support", comp: "PT. Persada", desc: "Implementierung von drahtlosen Unternehmensnetzwerken." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor der Informatik" },
            { year: "2009 - 2012", name: "Berufsschule Angkasa 1", major: "Computer- & Netzwerktechnik" }
        ]
    },
    FR: {
        hero_sub: "Infrastructures IT & Opérations Data Center", hero_title: "Dezan Sanubari",
        hero_tagline: "Fiabilité | Connectivité | Précision <br> Toujours à la recherche de nouvelles opportunités",
        hero_about: "Ingénieur réseau de 31 ans à Bandung avec 12 ans d'expérience. Expert en Data Center, virtualisation VMware et réseaux Cisco/Mikrotik.",
        btn_contact: "Contactez-moi", btn_cv: "Télécharger le CV",
        label_about: "// À propos", label_history: "// Expérience", label_skills: "// Compétences", label_school: "// Éducation",
        footer_contact: "Contact", footer_reach: "Contactez-nous à tout moment pour des collaborations ou des questions.",
        jobs: [
            { year: "2020 - 2025", title: "Support Opérations IT", comp: "PT. ValueStream International", desc: "Maintenance onduleurs/groupes électrogènes, VMware, analyse de logs ISO8583/JSON." },
            { year: "2016 - 2020", title: "Spécialiste Data Center", comp: "PT. ValueStream International", desc: "Surveillance 24/7 et gestion de la climatisation de précision." },
            { year: "2015 - 2016", title: "Ingénieur Support Wi-Fi", comp: "Koperasi Indosat", desc: "Installation d'équipements pour le projet Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Support Technique", comp: "PT. Persada", desc: "Mise en œuvre et dépannage de réseaux sans fil d'entreprise." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Licence en Informatique" },
            { year: "2009 - 2012", name: "Lycée Professionnel Angkasa 1", major: "Informatique et Réseaux" }
        ]
    },
    ES: {
        hero_sub: "Infraestructura IT y Operaciones de Data Center", hero_title: "Dezan Sanubari",
        hero_tagline: "Fiabilidad | Conectividad | Precisión <br> Siempre buscando nuevas oportunidades",
        hero_about: "Ingeniero de redes de 31 años con 12 años de experiencia. Especialista en Centros de Datos, virtualización VMware y redes Cisco/Mikrotik.",
        btn_contact: "Contacto", btn_cv: "Descargar CV",
        label_about: "// Sobre mí", label_history: "// Experiencia", label_skills: "// Habilidades", label_school: "// Educación",
        footer_contact: "Contacto", footer_reach: "Comuníquese en cualquier momento para colaboraciones o preguntas.",
        jobs: [
            { year: "2020 - 2025", title: "Soporte de Operaciones TI", comp: "PT. ValueStream International", desc: "Mantenimiento de UPS/Generadores, VMware, análisis de logs ISO8583/JSON." },
            { year: "2016 - 2020", title: "Especialista en Data Center", comp: "PT. ValueStream International", desc: "Monitoreo 24/7 y refrigeración de precisión (CRAC)." },
            { year: "2015 - 2016", title: "Ingeniero de Soporte Wi-Fi", comp: "Koperasi Indosat", desc: "Instalación de Aruba/Ruckus para el proyecto Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Soporte Técnico", comp: "PT. Persada", desc: "Implementación y resolución de problemas de redes inalámbricas." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Grado en Informática" },
            { year: "2009 - 2012", name: "Escuela Profesional Angkasa 1", major: "Ingeniería de Computación y Redes" }
        ]
    },
    PT: {
        hero_sub: "Infraestrutura de TI e Operações de Data Center", hero_title: "Dezan Sanubari",
        hero_tagline: "Confiabilidade | Conectividade | Precisão <br> Sempre buscando novas oportunidades",
        hero_about: "Engenheiro de redes de 31 anos com 12 anos de experiência. Especialista em Data Centers, virtualização VMware e redes Cisco/Mikrotik.",
        btn_contact: "Contato", btn_cv: "Baixar CV",
        label_about: "// Sobre mim", label_history: "// Experiência", label_skills: "// Competências", label_school: "// Educação",
        footer_contact: "Contato", footer_reach: "Entre em contato a qualquer momento para colaborações ou perguntas.",
        jobs: [
            { year: "2020 - 2025", title: "Suporte de Operações de TI", comp: "PT. ValueStream International", desc: "Manutenção de UPS/Geradores, VMware, análise de logs ISO8583/JSON." },
            { year: "2016 - 2020", title: "Especialista em Data Center", comp: "PT. ValueStream International", desc: "Monitoramento 24/7 e refrigeração de precisão." },
            { year: "2015 - 2016", title: "Engenheiro de Suporte Wi-Fi", comp: "Koperasi Indosat", desc: "Instalação de equipamentos para o projeto Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Suporte Técnico", comp: "PT. Persada", desc: "Implementação de redes sem fio corporativas." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bacharel em Ciência da Computação" },
            { year: "2009 - 2012", name: "Escola Profissional Angkasa 1", major: "Informática e Redes" }
        ]
    },
    RU: {
        hero_sub: "IT-инфраструктура и ЦОД", hero_title: "Дезан Санубари",
        hero_tagline: "Надежность | Связность | Точность <br> Всегда в поиске новых возможностей",
        hero_about: "31-летний сетевой инженер в Бандунге с 12-летним опытом. Специалист по ЦОД, виртуализации VMware и сетям Cisco/Mikrotik.",
        btn_contact: "Связаться", btn_cv: "Скачать резюме",
        label_about: "// Обо мне", label_history: "// Опыт работы", label_skills: "// Навыки", label_school: "// Образование",
        footer_contact: "Контакт", footer_reach: "Пишите в любое время для сотрудничества или вопросов.",
        jobs: [
            { year: "2020 - 2025", title: "IT-поддержка операций", comp: "PT. ValueStream International", desc: "Обслуживание ИБП/генераторов, мониторинг каналов, VMware, анализ логов ISO8583/JSON." },
            { year: "2016 - 2020", title: "Специалист ЦОД", comp: "PT. ValueStream International", desc: "Круглосуточный мониторинг ЦОД и прецизионное охлаждение." },
            { year: "2015 - 2016", title: "Wi-Fi инженер", comp: "Koperasi Indosat", desc: "Установка оборудования для проекта Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Техническая поддержка", comp: "PT. Persada", desc: "Внедрение корпоративных беспроводных сетей." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Бакалавр компьютерных наук" },
            { year: "2009 - 2012", name: "Колледж Angkasa 1", major: "Компьютерные сети" }
        ]
    },
    NL: {
        hero_sub: "IT Infrastructuur & Datacenter Operaties", hero_title: "Dezan Sanubari",
        hero_tagline: "Betrouwbaarheid | Connectiviteit | Precisie <br> Altijd op zoek naar nieuwe kansen",
        hero_about: "31-jarige netwerkingenieur in Bandung met 12 jaar ervaring. Specialist in datacenters, VMware-virtualisatie en Cisco/Mikrotik-netwerken.",
        btn_contact: "Contact", btn_cv: "Download CV",
        label_about: "// Over mij", label_history: "// Werkervaring", label_skills: "// Vaardigheden", label_school: "// Opleiding",
        footer_contact: "Contact", footer_reach: "Neem op elk gewenst moment contact op voor samenwerkingen.",
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "Onderhoud UPS/Genset, link-monitoring, VMware, analyse van ISO8583/JSON-logs." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "24/7 DC-bewaking en beheer van precisiekoeling." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Koperasi Indosat", desc: "Installatie van apparatuur voor het Indosat Super Wi-Fi project." },
            { year: "2012 - 2014", title: "Technische Support", comp: "PT. Persada", desc: "Implementatie en troubleshooting van draadloze bedrijfsnetwerken." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor Informatica" },
            { year: "2009 - 2012", name: "Beroepsopleiding Angkasa 1", major: "Computer & Netwerktechniek" }
        ]
    },
    IT: {
        hero_sub: "Infrastruttura IT e Operazioni Data Center", hero_title: "Dezan Sanubari",
        hero_tagline: "Affidabilità | Connettività | Precisione <br> Alla ricerca di nuove opportunità",
        hero_about: "Ingegnere di rete di 31 anni a Bandung con 12 anni di esperienza. Esperto di Data Center, virtualizzazione VMware e reti Cisco/Mikrotik.",
        btn_contact: "Contattami", btn_cv: "Scarica CV",
        label_about: "// Su di me", label_history: "// Esperienza", label_skills: "// Competenze", label_school: "// Istruzione",
        footer_contact: "Contatto", footer_reach: "Contattaci in qualsiasi momento per collaborazioni o domande.",
        jobs: [
            { year: "2020 - 2025", title: "Supporto Operativo IT", comp: "PT. ValueStream International", desc: "Manutenzione UPS/Genset, VMware, analisi log ISO8583/JSON." },
            { year: "2016 - 2020", title: "Specialista Data Center", comp: "PT. ValueStream International", desc: "Monitoraggio DC 24/7 e raffreddamento di precisione." },
            { year: "2015 - 2016", title: "Ingegnere Wi-Fi", comp: "Koperasi Indosat", desc: "Installazione di apparati per il progetto Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Supporto Tecnico", comp: "PT. Persada", desc: "Implementazione reti wireless aziendali e risoluzione problemi." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Laurea in Informatica" },
            { year: "2009 - 2012", name: "Scuola Professionale Angkasa 1", major: "Informatica e Reti" }
        ]
    },
    AR: {
        hero_sub: "بنية تكنولوجيا المعلومات وعمليات مراكز البيانات", hero_title: "ديزان سنوباري",
        hero_tagline: "الموثوقية | الاتصال | الدقة <br> البحث دائماً عن فرص جديدة",
        hero_about: "مهندس شبكات يبلغ من العمر 31 عاماً في باندونغ مع 12 عاماً من الخبرة. متخصص في مراكز البيانات، VMware، وشبكات Cisco/Mikrotik.",
        btn_contact: "اتصل بي", btn_cv: "تحميل السيرة الذاتية",
        label_about: "// نبذة عني", label_history: "// الخبرة العملية", label_skills: "// المهارات", label_school: "// التعليم",
        footer_contact: "اتصل بنا", footer_reach: "تواصل معنا في أي وقت للتعاون أو الاستفسارات.",
        jobs: [
            { year: "2020 - 2025", title: "دعم عمليات تكنولوجيا المعلومات", comp: "PT. ValueStream", desc: "صيانة UPS/Genset، VMware، وتحليل سجلات المعاملات ISO8583." },
            { year: "2016 - 2020", title: "أخصائي مراكز البيانات", comp: "PT. ValueStream", desc: "مراقبة مركز البيانات على مدار الساعة وإدارة التبريد." },
            { year: "2015 - 2016", title: "مهندس دعم Wi-Fi", comp: "Koperasi Indosat", desc: "تركيب أجهزة الراديو لمشروع Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "الدعم الفني", comp: "PT. Persada", desc: "تنفيذ الشبكات اللاسلكية للشركات واستكشاف الأخطاء." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "بكالوريوس في علوم الحاسوب" },
            { year: "2009 - 2012", name: "مدرسة أنجكاسا 1 المهنية", major: "هندسة الحاسوب والشبكات" }
        ]
    }
const languages = [
    {id:'ID', n:'Indonesian'}, {id:'EN', n:'English'}, {id:'ZH', n:'Chinese'},
    {id:'JP', n:'Japanese'}, {id:'KO', n:'Korean'}, {id:'DE', n:'German'},
    {id:'FR', n:'French'}, {id:'ES', n:'Spanish'}, {id:'PT', n:'Portuguese'},
    {id:'RU', n:'Russian'}, {id:'NL', n:'Dutch'}, {id:'IT', n:'Italian'}, {id:'AR', n:'Arabic'}
];

function changeLang(l) {
    const d = translations[l] || translations.ID;
    const fallback = translations.ID;
    
    // Update Static Elements
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if(d[k]) el.innerHTML = d[k];
        else if(fallback[k]) el.innerHTML = fallback[k];
    });

    // Update Jobs
    const workBox = document.getElementById('work-content');
    if (workBox) {
        const jobs = (d.jobs && d.jobs.length > 0) ? d.jobs : fallback.jobs;
        workBox.innerHTML = jobs.map(j => `
            <div class="work-item">
                <div class="work-year mono">${j.year}</div>
                <div class="work-info">
                    <h3>${j.title}</h3>
                    <span class="company">${j.comp}</span>
                    <p>${j.desc}</p>
                </div>
            </div>`).join('');
    }

    // Update School
    const schoolBox = document.getElementById('school-content');
    if (schoolBox) {
        const school = (d.school && d.school.length > 0) ? d.school : fallback.school;
        schoolBox.innerHTML = school.map(s => `
            <div class="work-item">
                <div class="work-year mono">${s.year}</div>
                <div class="work-info">
                    <h3>${s.name}</h3>
                    <p>${s.major}</p>
                </div>
            </div>`).join('');
    }

    // Update Skills (Always use fallback list)
    const skillBox = document.getElementById('skill-content');
    if (skillBox) {
        const skills = fallback.skills;
        skillBox.innerHTML = skills.map(s => `<span class="skill-tag mono">${s}</span>`).join('');
    }

    document.getElementById('current-lang').innerText = l;
    document.body.style.direction = (l === 'AR') ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLang', l);
}

window.changeLang = changeLang;

function initMenu() {
    const m = document.getElementById('lang-menu');
    if (m) {
        m.innerHTML = languages.map(l => `
            <a href="javascript:void(0)" onclick="changeLang('${l.id}')">${l.n}</a>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    changeLang(localStorage.getItem('selectedLang') || 'ID');
});
