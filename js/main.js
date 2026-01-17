console.log("Retro minimal site loaded 🚀");
const translations = {
    ID: {
        hero_sub: "Operasional Infrastruktur IT & Data Center",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Keandalan | Konektivitas | Presisi <br> Selalu mencari peluang baru",
        hero_about: "Teknisi Data Center berpengalaman dengan 12 tahun keahlian dalam pemasangan kabel terstruktur, diagnostik perangkat keras, dan operasi kritis. Terbukti mampu menjaga uptime 99,9%, mengurangi waktu troubleshooting hingga 30%, dan mengoptimalkan skalabilitas infrastruktur. Mahir dalam platform VMware dan solusi penyimpanan EMC, memberikan dukungan teknis berbasis hasil di lingkungan 24x7. Berkomitmen untuk memanfaatkan teknologi guna meningkatkan efisiensi operasional dan siap memperluas keahlian dalam perbaikan sistem tingkat papan sirkuit. Sedang meningkatkan keterampilan komunikasi bahasa Inggris untuk keperluan profesional dan teknis.",
        btn_contact: "Hubungi Saya", btn_cv: "Unduh CV", 
        label_about: "// tentang_saya", label_history: "// riwayat_kerja", label_skills: "// keahlian_teknis", label_school: "// pendidikan",
        footer_contact: "Kontak", footer_reach: "Hubungi kapan saja untuk kolaborasi atau pertanyaan.",
        skills: ["ISO 8583","Navicat","Standby Operations","Cloudflare","MySQL","Critical Thinking","System Support","Linux","Oracle Enterprise Linux","Dell PowerEdge Servers","DCIM","Communication","HPE (HP Enterprise Solutions)","Alfresco Software","VMware ESXi","Servers","Generator Operation","IP Management","Networking","VMware","Problem Solving","Grafana","Ubuntu","Virtualization","Zabbix","Network Engineering","Redmine","Data Center Operations","VMware Workstation","VMware vSphere","JSON","Pritunl","Environmux","NetApp Storage","Structured Cabling","OpenDCIM","Teleport","Icinga","Supermicro Servers","MikroTik","VMware vCenter","ManageEngine Applications Manager","Routers","Cisco Routers","Technical Support","CentOS","EMC Storage Products","Bitwarden","Oracle Database Administration","Infrastructure Management","Network Performance Monitoring","Nagios Core","Trello","Ruckus Wireless","Aruba Wireless","BelAir Networks","Radio Installation","IT Asset Management","Field Installation","Internet Protocol Suite (TCP/IP)","Wi-Fi"],
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
        hero_about: "Experienced Data Center Technician with 13 years of expertise in structured cabling, hardware diagnostics, and mission-critical operations. Proven ability to maintain 99.9% uptime, reduce troubleshooting times by 30%, and optimize infrastructure scalability. Skilled in VMware platforms and EMC storage solutions, delivering results-driven technical support in 24x7 environments. Passionate about leveraging technology to enhance operational efficiency and eager to expand expertise in system board-level repair. Actively improving spoken English to enhance professional and technical communication.",
        btn_contact: "Contact Me", btn_cv: "Download CV", 
        label_about: "// about_me", label_history: "// work_history", label_skills: "// technical_skills", label_school: "// education",
        footer_contact: "Contact", footer_reach: "Reach out anytime for collaborations.",
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "- Maintained Data Center electricity systems, UPS, and generators, achieving 99.9% uptime and ensuring uninterrupted operations.<br/>- Reduced incident resolution time by 30% through proactive troubleshooting workflows and effective prioritization of tasks.<br/>- Managed the maintenance and operation of 10 server racks, including the installation of 3 new racks, which enhanced server deployment speed and infrastructure growth and maintenance of 2 network racks, ensuring reliable network performance.<br/>- Configured physical and virtual servers to enhance service reliability and minimize downtime.<br/>- Acted as 2nd level support for complex system and database troubleshooting, contributing to a 20% increase in SLA compliance.<br/>- Collaborated with cross-functional teams, including networking and compliance, to address escalated issues, fostering seamless communication.<br/>- Operated and maintained databases for critical updates, backups, and transaction log analysis (JSON & ISO)." },
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
        hero_about: "資深數據中心技術員，具備13年結構化佈線、硬體診斷及關鍵任務運維經驗。經實證能維持99.9%系統可用性，將故障排除時間縮短30%，並優化基礎架構擴展性。精通VMware平台與EMC儲存解決方案，於全天候運作環境中提供成果導向的技術支援。熱衷運用科技提升營運效率，並積極拓展主機板級維修專業技能。持續精進英語口說能力，以強化專業技術溝通效能.",
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
        hero_about: "構造化配線、ハードウェア診断、ミッションクリティカルな運用において13年の専門知識を有する経験豊富なデータセンター技術者。99.9%の稼働率維持、トラブルシューティング時間の30%削減、インフラストラクチャのスケーラビリティ最適化の実績あり。VMwareプラットフォームおよびEMCストレージソリューションに精通し、24時間365日の環境で結果重視の技術サポートを提供。技術を活用して業務効率を向上させることに情熱を持ち、システム基板レベルの修理に関する専門知識の拡大に意欲的。専門的・技術的なコミュニケーション能力向上のため、英語会話力の向上に積極的に取り組んでいる.",
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
        hero_about: "구조화 케이블링, 하드웨어 진단 및 미션 크리티컬 운영 분야에서 13년의 전문성을 보유한 데이터 센터 기술자입니다. 99.9% 가동률 유지, 문제 해결 시간 30% 단축, 인프라 확장성 최적화 능력을 입증했습니다. VMware 플랫폼 및 EMC 스토리지 솔루션에 능숙하며, 24x7 환경에서 결과 중심의 기술 지원을 제공합니다. 기술을 활용해 운영 효율성을 높이는 데 열정적이며, 시스템 보드 레벨 수리 분야의 전문성 확장에 적극적입니다. 전문적·기술적 의사소통 능력 향상을 위해 영어 회화 실력을 꾸준히 향상 중입니다.",
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
        hero_about: "Erfahrener Rechenzentrumstechniker mit 13 Jahren Fachwissen in den Bereichen strukturierte Verkabelung, Hardware-Diagnose und unternehmenskritische Abläufe. Nachgewiesene Fähigkeit, eine Verfügbarkeit von 99,9 % aufrechtzuerhalten, die Fehlerbehebungszeiten um 30 % zu reduzieren und die Skalierbarkeit der Infrastruktur zu optimieren. Kompetent im Umgang mit VMware-Plattformen und EMC-Speicherlösungen, liefert ergebnisorientierten technischen Support in 24x7-Umgebungen. Begeistert davon, Technologien zur Steigerung der betrieblichen Effizienz einzusetzen, und bestrebt, Fachwissen im Bereich der Reparatur von Systemplatinen zu erweitern. Aktive Verbesserung der englischen Sprachkenntnisse zur Verbesserung der beruflichen und technischen Kommunikation.",
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
        hero_about: "Technicien expérimenté dans les centres de données, avec 13 ans d'expertise dans le câblage structuré, le diagnostic matériel et les opérations critiques. Capacité avérée à maintenir un temps de disponibilité de 99,9 %, à réduire les temps de dépannage de 30 % et à optimiser l'évolutivité de l'infrastructure. Compétent dans les plateformes VMware et les solutions de stockage EMC, fournissant un support technique axé sur les résultats dans des environnements 24h/24 et 7j/7. Passionné par l'utilisation de la technologie pour améliorer l'efficacité opérationnelle et désireux d'élargir son expertise dans la réparation des cartes mères. Améliore activement son anglais parlé afin d'améliorer sa communication professionnelle et technique.",
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
        hero_about: "Técnico de centros de datos con 13 años de experiencia en cableado estructurado, diagnóstico de hardware y operaciones de misión crítica. Capacidad demostrada para mantener un tiempo de actividad del 99,9 %, reducir los tiempos de resolución de problemas en un 30 % y optimizar la escalabilidad de la infraestructura. Experto en plataformas VMware y soluciones de almacenamiento EMC, proporcionando soporte técnico orientado a resultados en entornos 24x7. Apasionado por aprovechar la tecnología para mejorar la eficiencia operativa y deseoso de ampliar sus conocimientos en la reparación de placas base. Mejora activamente su inglés hablado para mejorar la comunicación profesional y técnica.",
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
        hero_about: "Técnico experiente em centros de dados com 13 anos de experiência em cabeamento estruturado, diagnóstico de hardware e operações de missão crítica. Capacidade comprovada de manter 99,9% de tempo de atividade, reduzir o tempo de resolução de problemas em 30% e otimizar a escalabilidade da infraestrutura. Habilitado em plataformas VMware e soluções de armazenamento EMC, fornecendo suporte técnico orientado para resultados em ambientes 24x7. Apaixonado por aproveitar a tecnologia para aumentar a eficiência operacional e ansioso por expandir a experiência em reparos em placas de sistema. Melhorando ativamente o inglês falado para aprimorar a comunicação profissional e técnica.",
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
        hero_about: "Опытный техник по обслуживанию центров обработки данных с 13-летним стажем работы в области структурированных кабельных сетей, диагностики оборудования и критически важных операций. Подтвержденная способность поддерживать 99,9% времени безотказной работы, сокращать время устранения неисправностей на 30% и оптимизировать масштабируемость инфраструктуры. Имеет навыки работы с платформами VMware и решениями для хранения данных EMC, предоставляя ориентированную на результат техническую поддержку в круглосуточном режиме. Увлечен использованием технологий для повышения операционной эффективности и стремится расширить свои знания в области ремонта системных плат. Активно совершенствует устный английский язык для улучшения профессиональной и технической коммуникации.",
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
        hero_about: "Ervaren datacentertechnicus met 13 jaar expertise in gestructureerde bekabeling, hardwarediagnostiek en bedrijfskritische activiteiten. Bewezen vermogen om 99,9% uptime te handhaven, de tijd voor probleemoplossing met 30% te verminderen en de schaalbaarheid van de infrastructuur te optimaliseren. Bekwaam in VMware-platforms en EMC-opslagoplossingen, levert resultaatgerichte technische ondersteuning in 24x7-omgevingen. Gepassioneerd over het gebruik van technologie om de operationele efficiëntie te verbeteren en enthousiast om expertise op het gebied van reparaties op systeembordniveau uit te breiden. Actief bezig met het verbeteren van gesproken Engels om professionele en technische communicatie te verbeteren.",
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
        hero_about: "Tecnico esperto di data center con 13 anni di esperienza nel cablaggio strutturato, nella diagnostica hardware e nelle operazioni mission-critical. Comprovata capacità di mantenere un tempo di attività del 99,9%, ridurre i tempi di risoluzione dei problemi del 30% e ottimizzare la scalabilità dell'infrastruttura. Esperto nelle piattaforme VMware e nelle soluzioni di archiviazione EMC, fornisce un supporto tecnico orientato ai risultati in ambienti 24x7. Appassionato di tecnologia per migliorare l'efficienza operativa e desideroso di ampliare le proprie competenze nella riparazione a livello di scheda madre. Migliora attivamente il proprio inglese parlato per migliorare la comunicazione professionale e tecnica.",
        btn_contact: "Contattami", btn_cv: "Scarica CV",
        label_about: "// Su di me", label_history: "// Esperienza", label_skills: "// Competenze", label_school: "// Istruzione",
        footer_contact: "Contatto", footer_reach: "Contattaci in qualsiasi momento per collaborazioni o domande.",
        jobs: [
            { year: "2020 - 2025", title: "Supporto Operativo IT", comp: "PT. ValueStream International", desc: "- Manutenzione dei sistemi elettrici, degli UPS e dei generatori del data center, raggiungendo un tempo di attività del 99,9% e garantendo operazioni senza interruzioni. <br/>- Riduzione del tempo di risoluzione degli incidenti del 30% grazie a flussi di lavoro proattivi per la risoluzione dei problemi e a un'efficace definizione delle priorità delle attività. <br/>- Gestione della manutenzione e del funzionamento di 10 rack di server, compresa l'installazione di 3 nuovi rack, che ha migliorato la velocità di implementazione dei server e la crescita dell'infrastruttura, e manutenzione di 2 rack di rete, garantendo prestazioni di rete affidabili. <br/>- Configurazione di server fisici e virtuali per migliorare l'affidabilità del servizio e ridurre al minimo i tempi di inattività. <br/>- Ha agito come supporto di secondo livello per la risoluzione di problemi complessi relativi a sistemi e database, contribuendo a un aumento del 20% della conformità agli SLA. <br/>- Ha collaborato con team interfunzionali, inclusi quelli di networking e conformità, per affrontare i problemi escalati, favorendo una comunicazione senza soluzione di continuità. <br/>- Ha gestito e mantenuto database per aggiornamenti critici, backup e analisi dei log delle transazioni (JSON e ISO)." },
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
        hero_about: "فني مراكز بيانات ذو خبرة 13 عامًا في مجال الكابلات الهيكلية وتشخيص الأجهزة والعمليات الحيوية. قدرة مثبتة على الحفاظ على وقت تشغيل بنسبة 99.9٪ وتقليل وقت استكشاف الأخطاء وإصلاحها بنسبة 30٪ وتحسين قابلية التوسع في البنية التحتية. ماهر في منصات VMware وحلول التخزين EMC، ويقدم دعمًا فنيًا قائمًا على النتائج في بيئات تعمل على مدار الساعة طوال أيام الأسبوع. شغوف باستخدام التكنولوجيا لتعزيز الكفاءة التشغيلية وحريص على توسيع خبرته في إصلاح لوحات الأنظمة. يعمل بنشاط على تحسين لغته الإنجليزية المنطوقة لتعزيز التواصل المهني والتقني.",
        btn_contact: "اتصل بي", btn_cv: "تحميل السيرة الذاتية",
        label_about: "// نبذة عني", label_history: "// الخبرة العملية", label_skills: "// المهارات", label_school: "// التعليم",
        footer_contact: "اتصل بنا", footer_reach: "تواصل معنا في أي وقت للتعاون أو الاستفسارات.",
        jobs: [
            { year: "2020 - 2025", title: "دعم عمليات تكنولوجيا المعلومات", comp: "PT. ValueStream", desc: "- صيانة أنظمة الكهرباء ومصادر الطاقة غير المنقطعة والمولدات في مركز البيانات، وتحقيق وقت تشغيل بنسبة 99.9٪ وضمان استمرارية العمليات دون انقطاع. <br/>- تقليل وقت حل المشكلات بنسبة 30٪ من خلال سير عمل استباقي لحل المشكلات وتحديد أولويات المهام بشكل فعال. <br/>- إدارة صيانة وتشغيل 10 حوامل خوادم، بما في ذلك تركيب 3 حوامل جديدة، مما عزز سرعة نشر الخوادم ونمو البنية التحتية وصيانة حوامل شبكة، مما يضمن أداء شبكة موثوقًا. <br/>- تكوين الخوادم الفعلية والافتراضية لتعزيز موثوقية الخدمة وتقليل وقت التعطل. <br/>- عملت كدعم من المستوى الثاني لاستكشاف الأخطاء وإصلاحها في الأنظمة المعقدة وقواعد البيانات، مما ساهم في زيادة الامتثال لاتفاقية مستوى الخدمة بنسبة 20٪. <br/>- تعاونت مع فرق متعددة الوظائف، بما في ذلك الشبكات والامتثال، لمعالجة المشكلات المتصاعدة، وتعزيز التواصل السلس. <br/>- قمت بتشغيل وصيانة قواعد البيانات للتحديثات الهامة والنسخ الاحتياطية وتحليل سجلات المعاملات (JSON و ISO)." },
            { year: "2016 - 2020", title: "أخصائي مراكز البيانات", comp: "PT. ValueStream", desc: "مراقبة مركز البيانات على مدار الساعة وإدارة التبريد." },
            { year: "2015 - 2016", title: "مهندس دعم Wi-Fi", comp: "Koperasi Indosat", desc: "تركيب أجهزة الراديو لمشروع Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "الدعم الفني", comp: "PT. Persada", desc: "تنفيذ الشبكات اللاسلكية للشركات واستكشاف الأخطاء." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "بكالوريوس في علوم الحاسوب" },
            { year: "2009 - 2012", name: "مدرسة أنجكاسا 1 المهنية", major: "هندسة الحاسوب والشبكات" }
        ]
    }
};

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

// Daftarkan fungsi ke window agar bisa dipanggil oleh onclick di HTML (jika masih digunakan)
window.changeLang = changeLang;

// Fungsi untuk mengisi daftar bahasa ke dalam dropdown dengan event listener modern
function initLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.innerHTML = languages.map(lang => `<a href="#" data-lang="${lang.id}">${lang.n}</a>`).join('');
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            if (lang) {
                changeLang(lang);
                // Update aria-expanded untuk aksesibilitas
                const toggle = document.getElementById('lang-toggle');
                if (toggle) toggle.setAttribute('aria-expanded', 'false'); // Tutup dropdown setelah klik
            }
        });
    }
}

// Jalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    initLangMenu(); // Isi menu dropdown dulu
    const savedLang = localStorage.getItem('selectedLang') || 'ID';
    changeLang(savedLang); // Panggil fungsi dengan bahasa tersimpan
});
/* ==========================================================
   DEZAN PREMIUM ADDONS: WORLD-CLASS STAND OUT FEATURES
   ========================================================== */

// 1. TERMINAL INTRO: Simulasi Hardware Scan
function startTerminalIntro() {
    const loader = document.querySelector('.terminal-loader');
    if (!loader) return;

    const commands = [
        ">> INITIALIZING DEZAN_OS v3.0...",
        ">> SCANNING FOR NETWORK NODES...",
        ">> HARDWARE: DATA CENTER INFRASTRUCTURE FOUND",
        ">> UPTIME: 12 YEARS VERSATILE EXPERIENCE",
        ">> STATUS: CONNECTION SECURE...",
        ">> WELCOME TO DEZAN_SANUBARI_SYSTEM"
    ];

    let line = 0;
    const body = loader.querySelector('.terminal-body');
    
    const interval = setInterval(() => {
        if (line < commands.length) {
            const p = document.createElement('div');
            p.className = 'command-line';
            p.innerText = commands[line];
            body.appendChild(p);
            line++;
        } else {
            clearInterval(interval);
            // Sembunyikan loader dengan GSAP agar halus
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                onComplete: () => {
					// 1. Tambahkan class untuk memicu CSS 'display: none'
					loader.classList.add('hidden-final');
					// 2. Pastikan style inline juga menghilang
					loader.style.display = 'none';
					loader.style.pointerEvents = 'none';
    
					// 3. Hapus class loading dari body
					document.body.classList.remove('loading');
    
					console.log("Terminal Loader Berhasil Dimatikan");
                }
            });
        }
    }, 400);
}

// 2. THREE.JS: 3D Network Topology Background
function init3DNetwork() {
    const canvasContainer = document.getElementById('canvas-container');
    if (!canvasContainer) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Titik-titik Jaringan (Nodes)
    const geometry = new THREE.SphereGeometry(0.1, 12, 12);
    const material = new THREE.MeshBasicMaterial({ color: 0xfdb201 }); // Warna Amber Logo
    const nodes = new THREE.Group();

    for (let i = 0; i < 80; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        nodes.add(mesh);
    }
    scene.add(nodes);
    camera.position.z = 10;

    // Interaksi Mouse
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);
        nodes.rotation.y += 0.002;
        nodes.rotation.x += 0.001;
        
        // Gerakan halus mengikuti kursor
        gsap.to(nodes.rotation, {
            x: mouseY * 0.5,
            y: mouseX * 0.5,
            duration: 2
        });
        
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// 3. GSAP: Magnetic Buttons & Scroll Triggered Elements
function initInteractions() {
    gsap.registerPlugin(ScrollTrigger);

    // Efek Magnetik pada Tombol
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    });

    // Custom Cursor (Titik Laser)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // Sound Design (Klik Mekanik)
    const clickSound = new Audio('assets/mixkit-old-camera-shutter-click-1137.wav');
    clickSound.volume = 0.2;
    document.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {}); // Play hanya jika interaksi user sudah ada
    });
}

// 4. Inisialisasi Seluruh Fitur Tambahan
window.addEventListener('load', () => {
    startTerminalIntro();
    init3DNetwork();
    initInteractions();
});

// Real-time Status Board
const statusList = [
    "STATUS: ANALYZING INFRASTRUCTURE",
    "STATUS: OPTIMIZING VMWARE CLUSTER",
    "STATUS: DEZAN IS LEARNING NEW TECH",
    "STATUS: ALL SYSTEMS OPERATIONAL"
];
let statusIdx = 0;
setInterval(() => {
    const statusEl = document.querySelector('.status-blink');
    if(statusEl && statusEl.parentElement) {
        statusIdx = (statusIdx + 1) % statusList.length;
        // Opsional: ganti teks di samping dot blink jika ada elemennya
    }
}, 5000);
// 1. Definisikan Data Skill Anda (Struktur yang benar)
const skillData = [
    {
        category: "Data Center Operations",
        skills: [
            "Data Center Operations", "Data Center Specialist", "UPS & Generator Operation",
            "Standby Operations", "Precision Cooling (CRAC)", "Racking & Stacking",
            "Structured Cabling", "Environmental Monitoring (Environmux)", "DCIM & OpenDCIM",
            "Infrastructure Management"
        ]
    },
    {
        category: "Monitoring & Analytics",
        skills: [
            "Zabbix", "Nagios Core", "Icinga", "Grafana",
            "ManageEngine Applications Manager", "Network Performance Monitoring",
            "Log Analysis", "ISO 8583 Protocol", "JSON Data Handling"
        ]
    },
    {
        category: "Operating Systems",
        skills: ["Linux", "Ubuntu", "CentOS", "Oracle Enterprise Linux"]
    },
    {
        category: "Database & Transaction Systems",
        skills: [
            "Oracle Database Administration", "MySQL", "Navicat",
            "Transaction Monitoring", "Reconciliation Support"
        ]
    },
    {
        category: "Hardware & Field Operations",
        skills: [
            "Server Hardware Diagnostics", "Generator Operation",
            "Radio Installation", "Field Installation", "Cabling"
        ]
    },
    {
        category: "Tools & Collaboration",
        skills: [
            "Redmine", "Trello", "Alfresco Software", "Bitwarden",
            "System Support", "Technical Support", "IT Asset Management"
        ]
    },
    {
        category: "Professional Skills",
        skills: ["Critical Thinking", "Problem Solving", "Communication"]
    }
];

// 2. Fungsi untuk Menampilkan ke HTML
function renderCategorizedSkills() {
    const skillContainer = document.getElementById('skill-content');
    if (!skillContainer) return;

    skillContainer.innerHTML = ''; 

    skillData.forEach(item => {
        // --- BARIS PENGAMAN AGAR TIDAK ERROR MAP ---
        if (!item || !item.skills) return; 

        const groupDiv = document.createElement('div');
        groupDiv.className = 'skills-group';
        
        groupDiv.innerHTML = `
            <h4 class="mono">// ${item.category}</h4>
            <div class="skill-badges-container">
                ${item.skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
            </div>
        `;
        skillContainer.appendChild(groupDiv);
    });
    console.log("Kategori skill berhasil dimuat 🚀");
}

// 3. JALANKAN FUNGSI
renderCategorizedSkills();