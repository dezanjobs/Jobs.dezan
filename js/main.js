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
            { year: "26 Februari 2020 - 25 Februari 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "- Memelihara sistem kelistrikan Data Center, UPS, dan generator, mencapai uptime 99,9% serta memastikan operasional tanpa gangguan.<br/>- Mengurangi waktu penyelesaian insiden sebesar 30% melalui alur troubleshooting proaktif dan prioritas tugas yang efektif.<br/>- Mengelola pemeliharaan dan operasional 10 rack server, termasuk instalasi 3 rack baru yang meningkatkan kecepatan deployment server dan pertumbuhan infrastruktur serta pemeliharaan 2 rack jaringan untuk memastikan performa jaringan yang andal.<br/>- Melakukan konfigurasi server fisik dan virtual untuk meningkatkan keandalan layanan dan meminimalkan downtime.<br/>- Bertindak sebagai support level 2 untuk troubleshooting sistem dan database yang kompleks, berkontribusi pada peningkatan kepatuhan SLA sebesar 20%.<br/>- Berkolaborasi dengan tim lintas fungsi, termasuk networking dan compliance, untuk menangani eskalasi masalah dan membangun komunikasi yang efektif.<br/>- Mengoperasikan dan memelihara database untuk update kritikal, backup, dan analisis transaction log (JSON & ISO)." },
			{ year: "04 April 2016 - 25 Februari 2020", title: "Spesialis Data Center", comp: "PT. ValueStream International", desc: "Melakukan preventive maintenance infrastruktur Data Center, meningkatkan keandalan perangkat hingga 25% dan mengurangi gangguan operasional.<br/>Mengelola instalasi dan commissioning lebih dari 30 posisi rack baru, memungkinkan deployment infrastruktur server lebih cepat.<br/>Melakukan monitoring dan analisis kondisi lingkungan seperti konsumsi daya dan suhu untuk memastikan performa perangkat optimal.<br/>Melakukan instalasi dan perbaikan komponen hardware kritikal termasuk router, switch, dan modem untuk memastikan konektivitas jaringan yang stabil.<br/>Mendukung aplikasi server produksi dengan layanan yang konsisten dan downtime minimal." },
			{ year: "01 Januari 2015 - 31 Maret 2016", title: "Engineer Support Wi-Fi", comp: "Indosat Coop", desc: "Melakukan instalasi dan konfigurasi sistem radio, router, dan access point untuk meningkatkan cakupan Wi-Fi.<br/>Melakukan instalasi jaringan dan troubleshooting untuk meningkatkan keandalan jaringan." },
			{ year: "1 Oktober 2012 - 31 Desember 2014", title: "Technical Support", comp: "PT. Persada", desc: "Melakukan instalasi dan konfigurasi sistem radio, router, dan access point untuk klien enterprise.<br/>Melakukan troubleshooting dan pemeliharaan jaringan secara menyeluruh." },
			{ year: "1 Juli 2011 - 31 Agustus 2014", title: "Magang", comp: "CV. Media Utama Computer", desc: "Memberikan dukungan teknis komputer termasuk pemeliharaan perangkat keras dan perangkat lunak." },
			{ year: "1 Juni 2011 - 30 Juni 2014", title: "Magang", comp: "PT. Securindo Packatama Indonesia", desc: "Membantu dukungan teknis komputer dan troubleshooting sistem." }
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
            { year: "26 February 2020 - 25 february 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "- Maintained Data Center electricity systems, UPS, and generators, achieving 99.9% uptime and ensuring uninterrupted operations.<br/>- Reduced incident resolution time by 30% through proactive troubleshooting workflows and effective prioritization of tasks.<br/>- Managed the maintenance and operation of 10 server racks, including the installation of 3 new racks, which enhanced server deployment speed and infrastructure growth and maintenance of 2 network racks, ensuring reliable network performance.<br/>- Configured physical and virtual servers to enhance service reliability and minimize downtime.<br/>- Acted as 2nd level support for complex system and database troubleshooting, contributing to a 20% increase in SLA compliance.<br/>- Collaborated with cross-functional teams, including networking and compliance, to address escalated issues, fostering seamless communication.<br/>- Operated and maintained databases for critical updates, backups, and transaction log analysis (JSON & ISO)." },
            { year: "04 April 2016 - 25 February 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "Conducted preventive maintenance of Data Center infrastructure, increasing equipment reliability by 25% and reducing operational disruptions.<br/>Managed installation and commissioning of 30+ new rack positions, enabling faster deployment of server infrastructure.<br/>Monitored and analyzed environmental conditions, such as power usage and temperature, to ensure optimal equipment performance.<br/>Installed and repaired critical hardware components, including routers, switches, and modems, ensuring robust network connectivity.<br/>Supported production server applications with consistent service delivery and minimal downtime." },
            { year: "01 January 2015 - 31 March 2016", title: "Wi-Fi Support Engineer", comp: "Indosat Coop", desc: "Installed and configured radio systems, routers, and access points, enabling enhanced Wi-Fi coverage.<br/>Performed network installations and troubleshooting, increasing network reliability." },
            { year: "01 October 2012 - 31 December 2014", title: "Technical Support", comp: "PT. Persada", desc: "Installed and configured radio systems, routers, and access points for enterprise clients.<br/>Conducted comprehensive network troubleshooting and maintenance." },
			{ year: "1 July 2011 - 31 August 2014", title: "Interm", comp: "CV. Media Utama Computer", desc: "Provided computer technical support, including hardware and software maintenance." },
			{ year: "1 June 2011 - 30 June 2014", title: "Interm", comp: "PT. Securindo Packatama Indonesia", desc: "Assisted with computer technical support and system troubleshooting." }
        ],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor of Computer Science (Informatics Engineering)"},
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
            { year: "2020年2月26日 - 2025年2月25日", title: "IT 營運支援", comp: "PT. ValueStream International", desc: "- 維護資料中心電力系統、UPS 與發電機，達成 99.9% 系統可用率，確保營運不中斷。<br/>- 透過主動式故障排除流程與有效任務優先排序，將事件處理時間縮短 30%。<br/>- 管理 10 個伺服器機櫃的維運作業，包含新增 3 個機櫃以提升伺服器部署速度與基礎設施擴展，並維護 2 個網路機櫃以確保穩定網路效能。<br/>- 設定實體與虛擬伺服器以提升服務可靠度並降低停機時間。<br/>- 擔任第二線技術支援，處理複雜系統與資料庫問題，協助提升 SLA 達成率 20%。<br/>- 與跨部門團隊（包含網路與合規單位）合作處理升級事件，促進順暢溝通。<br/>- 執行與維護資料庫，進行關鍵更新、備份與交易紀錄分析（JSON 與 ISO）。" },
			{ year: "2016年4月4日 - 2020年2月25日", title: "資料中心專員", comp: "PT. ValueStream International", desc: "執行資料中心基礎設施的預防性維護，使設備可靠度提升 25%，並降低營運中斷風險。<br/>管理超過 30 個新機櫃位置的安裝與啟用，加速伺服器部署。<br/>監控並分析電力使用與溫度等環境狀況，確保設備最佳效能。<br/>安裝與維修關鍵硬體設備，包括路由器、交換器與數據機，以確保網路穩定性。<br/>支援正式環境伺服器應用，提供穩定服務並將停機時間降至最低。" },
			{ year: "2015年1月1日 - 2016年3月31日", title: "Wi-Fi 支援工程師", comp: "Indosat Coop", desc: "安裝與設定無線電系統、路由器與無線基地台，以提升 Wi-Fi 覆蓋範圍。<br/>執行網路安裝與故障排除，提高網路穩定性。" },
			{ year: "2012年10月1日 - 2014年12月31日", title: "技術支援", comp: "PT. Persada", desc: "為企業客戶安裝與設定無線電系統、路由器與無線基地台。<br/>執行完整的網路故障排除與維護作業。" },
			{ year: "2011年7月1日 - 2014年8月31日", title: "實習生", comp: "CV. Media Utama Computer", desc: "提供電腦技術支援，包括硬體與軟體維護。" },
			{ year: "2011年6月1日 - 2014年6月30日", title: "實習生", comp: "PT. Securindo Packatama Indonesia", desc: "協助電腦技術支援與系統故障排除。" }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "電腦科學學士（資訊工程）"},
			{ year: "2009 - 2012", name: "Angkasa 1 Margahayu 職業高中", major: "電腦與網路工程" }
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
            { year: "2020年2月26日 - 2025年2月25日", title: "IT運用サポート", comp: "PT. ValueStream International", desc: "- データセンターの電力設備、UPS、発電機を維持管理し、稼働率99.9％を達成し無停止運用を実現。<br/>- 予防的トラブルシューティングと優先順位管理により、障害対応時間を30％短縮。<br/>- 10ラックのサーバー運用・保守を担当し、新規3ラックの設置によりサーバー展開速度とインフラ拡張を向上、さらに2ラックのネットワーク機器を保守し安定したネットワーク性能を確保。<br/>- 物理および仮想サーバーの構成を実施し、サービス信頼性向上とダウンタイム削減を実現。<br/>- 複雑なシステムおよびデータベース障害に対する二次対応を担当し、SLA達成率を20％向上。<br/>- ネットワークおよびコンプライアンスを含む部門横断チームと連携し、エスカレーション対応を円滑に実施。<br/>- 重要な更新、バックアップ、トランザクションログ分析（JSON・ISO）を含むデータベース運用を担当。" },
			{ year: "2016年4月4日 - 2020年2月25日", title: "データセンター担当", comp: "PT. ValueStream International", desc: "データセンターインフラの予防保守を実施し、設備信頼性を25％向上、運用障害を低減。<br/>30以上の新規ラック設置およびコミッショニングを管理し、サーバー展開の迅速化を実現。<br/>電力使用量や温度などの環境条件を監視・分析し、最適な設備性能を維持。<br/>ルーター、スイッチ、モデムなどの重要ハードウェアの設置および修理を実施し、安定したネットワーク接続を確保。<br/>本番サーバーアプリケーションを支援し、安定したサービス提供と最小限のダウンタイムを維持。" },
			{ year: "2015年1月1日 - 2016年3月31日", title: "Wi-Fiサポートエンジニア", comp: "Indosat Coop", desc: "無線通信システム、ルーター、アクセスポイントの設置および設定を行い、Wi-Fiカバレッジを向上。<br/>ネットワーク構築およびトラブルシューティングを実施し、ネットワーク信頼性を向上。" },
			{ year: "2012年10月1日 - 2014年12月31日", title: "テクニカルサポート", comp: "PT. Persada", desc: "企業向けに無線通信システム、ルーター、アクセスポイントの設置および設定を実施。<br/>ネットワークの総合的なトラブルシューティングおよび保守を担当。" },
			{ year: "2011年7月1日 - 2014年8月31日", title: "インターン", comp: "CV. Media Utama Computer", desc: "ハードウェアおよびソフトウェア保守を含むコンピュータ技術サポートを提供。" },
			{ year: "2011年6月1日 - 2014年6月30日", title: "インターン", comp: "PT. Securindo Packatama Indonesia", desc: "コンピュータ技術サポートおよびシステム障害対応を補助。" }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "コンピュータサイエンス学士（情報工学）"},
			{ year: "2009 - 2012", name: "Angkasa 1 Margahayu 職業高校", major: "コンピュータ・ネットワーク工学" }
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
            { year: "2020년 2월 26일 - 2025년 2월 25일", title: "IT 운영 지원", comp: "PT. ValueStream International", desc: "- 데이터 센터 전력 시스템, UPS 및 발전기를 유지 관리하여 99.9% 가동률을 달성하고 무중단 운영을 보장함.<br/>- 사전 대응형 트러블슈팅 프로세스와 효과적인 업무 우선순위 설정을 통해 장애 처리 시간을 30% 단축함.<br/>- 서버 랙 10개 운영 및 유지보수를 담당하고 신규 랙 3개 설치를 통해 서버 배포 속도 및 인프라 확장을 향상시켰으며, 네트워크 랙 2개를 유지 관리하여 안정적인 네트워크 성능을 확보함.<br/>- 물리 및 가상 서버를 구성하여 서비스 안정성을 강화하고 다운타임을 최소화함.<br/>- 복잡한 시스템 및 데이터베이스 장애에 대한 2차 기술 지원을 수행하여 SLA 준수율을 20% 향상시킴.<br/>- 네트워크 및 컴플라이언스 팀을 포함한 유관 부서와 협업하여 에스컬레이션 이슈를 효과적으로 해결함.<br/>- 주요 업데이트, 백업 및 트랜잭션 로그 분석(JSON 및 ISO)을 위한 데이터베이스 운영 및 유지 관리 수행." },
			{ year: "2016년 4월 4일 - 2020년 2월 25일", title: "데이터센터 전문가", comp: "PT. ValueStream International", desc: "데이터센터 인프라에 대한 예방 정비를 수행하여 장비 신뢰도를 25% 향상시키고 운영 장애를 감소시킴.<br/>30개 이상의 신규 랙 설치 및 커미셔닝을 관리하여 서버 인프라 구축 속도를 향상시킴.<br/>전력 사용량 및 온도 등 환경 조건을 모니터링 및 분석하여 장비 성능을 최적 상태로 유지함.<br/>라우터, 스위치, 모뎀 등 핵심 하드웨어 장비를 설치 및 수리하여 안정적인 네트워크 연결을 보장함.<br/>운영 서버 애플리케이션을 지원하여 안정적인 서비스 제공과 최소한의 다운타임을 유지함." },
			{ year: "2015년 1월 1일 - 2016년 3월 31일", title: "Wi-Fi 지원 엔지니어", comp: "Indosat Coop", desc: "무선 통신 시스템, 라우터 및 액세스 포인트를 설치 및 구성하여 Wi-Fi 커버리지를 확장함.<br/>네트워크 설치 및 장애 조치를 수행하여 네트워크 안정성을 향상시킴." },
			{ year: "2012년 10월 1일 - 2014년 12월 31일", title: "기술 지원", comp: "PT. Persada", desc: "기업 고객을 대상으로 무선 통신 시스템, 라우터 및 액세스 포인트 설치 및 구성을 수행함.<br/>네트워크 전반에 대한 장애 분석 및 유지보수를 담당함." },
			{ year: "2011년 7월 1일 - 2014년 8월 31일", title: "인턴", comp: "CV. Media Utama Computer", desc: "하드웨어 및 소프트웨어 유지보수를 포함한 컴퓨터 기술 지원 제공." },
			{ year: "2011년 6월 1일 - 2014년 6월 30일", title: "인턴", comp: "PT. Securindo Packatama Indonesia", desc: "컴퓨터 기술 지원 및 시스템 문제 해결 업무 보조." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "컴퓨터공학 학사(정보공학)"},
			{ year: "2009 - 2012", name: "Angkasa 1 Margahayu 직업 고등학교", major: "컴퓨터 및 네트워크 공학" }
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
            { year: "26. Februar 2020 - 25. Februar 2025", title: "IT-Betriebssupport", comp: "PT. ValueStream International", desc: "- Wartung der Stromversorgungssysteme des Rechenzentrums, USV und Generatoren mit einer Verfügbarkeit von 99,9 % zur Sicherstellung eines unterbrechungsfreien Betriebs.<br/>- Reduzierung der Incident-Bearbeitungszeit um 30 % durch proaktive Fehlerbehebungsprozesse und effektive Priorisierung der Aufgaben.<br/>- Verwaltung des Betriebs und der Wartung von 10 Server-Racks einschließlich der Installation von 3 neuen Racks zur Verbesserung der Serverbereitstellung und des Infrastrukturwachstums sowie Wartung von 2 Netzwerk-Racks zur Gewährleistung einer stabilen Netzwerkleistung.<br/>- Konfiguration physischer und virtueller Server zur Steigerung der Servicezuverlässigkeit und Minimierung von Ausfallzeiten.<br/>- Tätigkeit als 2nd-Level-Support für komplexe System- und Datenbankprobleme mit einem Beitrag zur Erhöhung der SLA-Einhaltung um 20 %.<br/>- Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Netzwerk- und Compliance-Abteilungen, zur Bearbeitung eskalierter Vorfälle und Förderung einer reibungslosen Kommunikation.<br/>- Betrieb und Wartung von Datenbanken für kritische Updates, Backups und Analyse von Transaktionsprotokollen (JSON & ISO)." },
			{ year: "04. April 2016 - 25. Februar 2020", title: "Rechenzentrumsspezialist", comp: "PT. ValueStream International", desc: "Durchführung präventiver Wartungsarbeiten an der Rechenzentrumsinfrastruktur, Steigerung der Gerätezuverlässigkeit um 25 % und Reduzierung betrieblicher Störungen.<br/>Verwaltung der Installation und Inbetriebnahme von über 30 neuen Rack-Positionen zur Beschleunigung der Serverbereitstellung.<br/>Überwachung und Analyse von Umweltbedingungen wie Stromverbrauch und Temperatur zur Sicherstellung optimaler Geräteleistung.<br/>Installation und Reparatur kritischer Hardwarekomponenten, einschließlich Router, Switches und Modems, zur Gewährleistung einer stabilen Netzwerkanbindung.<br/>Unterstützung produktiver Serveranwendungen mit stabiler Servicebereitstellung und minimalen Ausfallzeiten." },
			{ year: "01. Januar 2015 - 31. März 2016", title: "Wi-Fi-Supportingenieur", comp: "Indosat Coop", desc: "Installation und Konfiguration von Funksystemen, Routern und Access Points zur Verbesserung der Wi-Fi-Abdeckung.<br/>Durchführung von Netzwerkinstallationen und Fehlerbehebungen zur Steigerung der Netzwerkzuverlässigkeit." },
			{ year: "1. Oktober 2012 - 31. Dezember 2014", title: "Technischer Support", comp: "PT. Persada", desc: "Installation und Konfiguration von Funksystemen, Routern und Access Points für Unternehmenskunden.<br/>Durchführung umfassender Netzwerk-Fehlerbehebung und Wartung." },
			{ year: "1. Juli 2011 - 31. August 2014", title: "Praktikant", comp: "CV. Media Utama Computer", desc: "Bereitstellung von technischem Computersupport einschließlich Hardware- und Softwarewartung." },
			{ year: "1. Juni 2011 - 30. Juni 2014", title: "Praktikant", comp: "PT. Securindo Packatama Indonesia", desc: "Unterstützung im technischen Computersupport und bei der Systemfehlerbehebung." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor der Informatik (Informatiktechnik)"},
			{ year: "2009 - 2012", name: "Berufsschule Angkasa 1 Margahayu", major: "Computer- und Netzwerktechnik" }
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
            { year: "26. Februar 2020 - 25. Februar 2025", title: "IT-Betriebssupport", comp: "PT. ValueStream International", desc: "- Wartung der Stromversorgungssysteme des Rechenzentrums, USV und Generatoren mit einer Verfügbarkeit von 99,9 % zur Sicherstellung eines unterbrechungsfreien Betriebs.<br/>- Reduzierung der Incident-Bearbeitungszeit um 30 % durch proaktive Fehlerbehebungsprozesse und effektive Priorisierung der Aufgaben.<br/>- Verwaltung des Betriebs und der Wartung von 10 Server-Racks einschließlich der Installation von 3 neuen Racks zur Verbesserung der Serverbereitstellung und des Infrastrukturwachstums sowie Wartung von 2 Netzwerk-Racks zur Gewährleistung einer stabilen Netzwerkleistung.<br/>- Konfiguration physischer und virtueller Server zur Steigerung der Servicezuverlässigkeit und Minimierung von Ausfallzeiten.<br/>- Tätigkeit als 2nd-Level-Support für komplexe System- und Datenbankprobleme mit einem Beitrag zur Erhöhung der SLA-Einhaltung um 20 %.<br/>- Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Netzwerk- und Compliance-Abteilungen, zur Bearbeitung eskalierter Vorfälle und Förderung einer reibungslosen Kommunikation.<br/>- Betrieb und Wartung von Datenbanken für kritische Updates, Backups und Analyse von Transaktionsprotokollen (JSON & ISO)." },
			{ year: "04. April 2016 - 25. Februar 2020", title: "Rechenzentrumsspezialist", comp: "PT. ValueStream International", desc: "Durchführung präventiver Wartungsarbeiten an der Rechenzentrumsinfrastruktur, Steigerung der Gerätezuverlässigkeit um 25 % und Reduzierung betrieblicher Störungen.<br/>Verwaltung der Installation und Inbetriebnahme von über 30 neuen Rack-Positionen zur Beschleunigung der Serverbereitstellung.<br/>Überwachung und Analyse von Umweltbedingungen wie Stromverbrauch und Temperatur zur Sicherstellung optimaler Geräteleistung.<br/>Installation und Reparatur kritischer Hardwarekomponenten, einschließlich Router, Switches und Modems, zur Gewährleistung einer stabilen Netzwerkanbindung.<br/>Unterstützung produktiver Serveranwendungen mit stabiler Servicebereitstellung und minimalen Ausfallzeiten." },
			{ year: "01. Januar 2015 - 31. März 2016", title: "Wi-Fi-Supportingenieur", comp: "Indosat Coop", desc: "Installation und Konfiguration von Funksystemen, Routern und Access Points zur Verbesserung der Wi-Fi-Abdeckung.<br/>Durchführung von Netzwerkinstallationen und Fehlerbehebungen zur Steigerung der Netzwerkzuverlässigkeit." },
			{ year: "1. Oktober 2012 - 31. Dezember 2014", title: "Technischer Support", comp: "PT. Persada", desc: "Installation und Konfiguration von Funksystemen, Routern und Access Points für Unternehmenskunden.<br/>Durchführung umfassender Netzwerk-Fehlerbehebung und Wartung." },
			{ year: "1. Juli 2011 - 31. August 2014", title: "Praktikant", comp: "CV. Media Utama Computer", desc: "Bereitstellung von technischem Computersupport einschließlich Hardware- und Softwarewartung." },
			{ year: "1. Juni 2011 - 30. Juni 2014", title: "Praktikant", comp: "PT. Securindo Packatama Indonesia", desc: "Unterstützung im technischen Computersupport und bei der Systemfehlerbehebung." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor der Informatik (Informatiktechnik)"},
			{ year: "2009 - 2012", name: "Berufsschule Angkasa 1 Margahayu", major: "Computer- und Netzwerktechnik" }
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
            { year: "26 de febrero de 2020 - 25 de febrero de 2025", title: "Soporte de Operaciones de TI", comp: "PT. ValueStream International", desc: "- Mantenimiento de los sistemas eléctricos del Data Center, UPS y generadores, logrando un 99,9 % de disponibilidad y garantizando operaciones ininterrumpidas.<br/>- Reducción del tiempo de resolución de incidentes en un 30 % mediante flujos de trabajo de resolución proactiva y una priorización eficaz de tareas.<br/>- Gestión del mantenimiento y operación de 10 racks de servidores, incluida la instalación de 3 nuevos racks que mejoraron la velocidad de despliegue y el crecimiento de la infraestructura, así como el mantenimiento de 2 racks de red para garantizar un rendimiento de red confiable.<br/>- Configuración de servidores físicos y virtuales para mejorar la confiabilidad del servicio y minimizar el tiempo de inactividad.<br/>- Actuación como soporte de segundo nivel para la resolución de problemas complejos de sistemas y bases de datos, contribuyendo a un aumento del 20 % en el cumplimiento de SLA.<br/>- Colaboración con equipos multifuncionales, incluidos redes y cumplimiento, para abordar incidentes escalados y fomentar una comunicación fluida.<br/>- Operación y mantenimiento de bases de datos para actualizaciones críticas, copias de seguridad y análisis de registros de transacciones (JSON e ISO)." },
			{ year: "04 de abril de 2016 - 25 de febrero de 2020", title: "Especialista en Data Center", comp: "PT. ValueStream International", desc: "Ejecución de mantenimiento preventivo de la infraestructura del Data Center, aumentando la confiabilidad del equipo en un 25 % y reduciendo interrupciones operativas.<br/>Gestión de la instalación y puesta en marcha de más de 30 nuevas posiciones de racks, permitiendo un despliegue más rápido de la infraestructura de servidores.<br/>Monitoreo y análisis de condiciones ambientales como consumo eléctrico y temperatura para garantizar un rendimiento óptimo.<br/>Instalación y reparación de componentes de hardware críticos, incluidos routers, switches y módems, asegurando una conectividad de red sólida.<br/>Soporte a aplicaciones de servidores de producción con una entrega de servicio constante y un tiempo de inactividad mínimo." },
			{ year: "01 de enero de 2015 - 31 de marzo de 2016", title: "Ingeniero de Soporte Wi-Fi", comp: "Indosat Coop", desc: "Instalación y configuración de sistemas de radio, routers y puntos de acceso, mejorando la cobertura Wi-Fi.<br/>Ejecución de instalaciones de red y resolución de problemas para aumentar la confiabilidad de la red." },
			{ year: "1 de octubre de 2012 - 31 de diciembre de 2014", title: "Soporte Técnico", comp: "PT. Persada", desc: "Instalación y configuración de sistemas de radio, routers y puntos de acceso para clientes empresariales.<br/>Realización de mantenimiento y resolución integral de problemas de red." },
			{ year: "1 de julio de 2011 - 31 de agosto de 2014", title: "Practicante", comp: "CV. Media Utama Computer", desc: "Prestación de soporte técnico informático, incluido el mantenimiento de hardware y software." },
			{ year: "1 de junio de 2011 - 30 de junio de 2014", title: "Practicante", comp: "PT. Securindo Packatama Indonesia", desc: "Asistencia en soporte técnico informático y resolución de problemas del sistema." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Licenciatura en Ciencias de la Computación (Ingeniería Informática)"},
			{ year: "2009 - 2012", name: "Escuela Vocacional Angkasa 1 Margahayu", major: "Ingeniería en Computación y Redes" }
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
            { year: "26 de fevereiro de 2020 - 25 de fevereiro de 2025", title: "Suporte de Operações de TI", comp: "PT. ValueStream International", desc: "- Manutenção dos sistemas elétricos do Data Center, UPS e geradores, alcançando 99,9% de disponibilidade e garantindo operações ininterruptas.<br/>- Redução do tempo de resolução de incidentes em 30% por meio de fluxos de trabalho proativos de troubleshooting e priorização eficaz de tarefas.<br/>- Gerenciamento da manutenção e operação de 10 racks de servidores, incluindo a instalação de 3 novos racks que melhoraram a velocidade de implantação e o crescimento da infraestrutura, além da manutenção de 2 racks de rede para garantir desempenho confiável.<br/>- Configuração de servidores físicos e virtuais para aumentar a confiabilidade do serviço e minimizar o tempo de inatividade.<br/>- Atuação como suporte de segundo nível para resolução de problemas complexos de sistemas e bancos de dados, contribuindo para um aumento de 20% na conformidade de SLA.<br/>- Colaboração com equipes multifuncionais, incluindo redes e compliance, para lidar com incidentes escalonados e promover comunicação eficiente.<br/>- Operação e manutenção de bancos de dados para atualizações críticas, backups e análise de logs de transações (JSON e ISO)." },
			{ year: "04 de abril de 2016 - 25 de fevereiro de 2020", title: "Especialista em Data Center", comp: "PT. ValueStream International", desc: "Execução de manutenção preventiva da infraestrutura do Data Center, aumentando a confiabilidade dos equipamentos em 25% e reduzindo interrupções operacionais.<br/>Gerenciamento da instalação e comissionamento de mais de 30 novas posições de racks, possibilitando implantação mais rápida da infraestrutura de servidores.<br/>Monitoramento e análise das condições ambientais, como consumo de energia e temperatura, para garantir desempenho ideal.<br/>Instalação e reparo de componentes críticos de hardware, incluindo roteadores, switches e modems, assegurando conectividade de rede estável.<br/>Suporte a aplicações de servidores de produção com entrega de serviço consistente e tempo mínimo de inatividade." },
			{ year: "01 de janeiro de 2015 - 31 de março de 2016", title: "Engenheiro de Suporte Wi-Fi", comp: "Indosat Coop", desc: "Instalação e configuração de sistemas de rádio, roteadores e pontos de acesso, ampliando a cobertura Wi-Fi.<br/>Realização de instalações de rede e troubleshooting para aumentar a confiabilidade da rede." },
			{ year: "1 de outubro de 2012 - 31 de dezembro de 2014", title: "Suporte Técnico", comp: "PT. Persada", desc: "Instalação e configuração de sistemas de rádio, roteadores e pontos de acesso para clientes corporativos.<br/>Execução de manutenção e troubleshooting completo de rede." },
			{ year: "1 de julho de 2011 - 31 de agosto de 2014", title: "Estagiário", comp: "CV. Media Utama Computer", desc: "Prestação de suporte técnico em informática, incluindo manutenção de hardware e software." },
			{ year: "1 de junho de 2011 - 30 de junho de 2014", title: "Estagiário", comp: "PT. Securindo Packatama Indonesia", desc: "Auxílio no suporte técnico de informática e resolução de problemas de sistemas." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bacharel em Ciência da Computação (Engenharia de Informática)"},
			{ year: "2009 - 2012", name: "Escola Profissional Angkasa 1 Margahayu", major: "Engenharia de Computação e Redes" }
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
            { year: "26 февраля 2020 - 25 февраля 2025", title: "Поддержка IT-операций", comp: "PT. ValueStream International", desc: "- Обслуживание систем электропитания дата-центра, ИБП и генераторов с обеспечением доступности 99,9% и бесперебойной работы.<br/>- Сокращение времени устранения инцидентов на 30% за счет проактивных процессов устранения неисправностей и эффективной приоритизации задач.<br/>- Управление эксплуатацией и обслуживанием 10 серверных стоек, включая установку 3 новых стоек для ускорения развертывания серверов и развития инфраструктуры, а также обслуживание 2 сетевых стоек для обеспечения стабильной работы сети.<br/>- Настройка физических и виртуальных серверов для повышения надежности сервисов и минимизации простоев.<br/>- Выполнение функций поддержки второго уровня при сложных сбоях систем и баз данных, что способствовало увеличению соблюдения SLA на 20%.<br/>- Взаимодействие с межфункциональными командами, включая сетевые и комплаенс-подразделения, для решения эскалированных инцидентов и обеспечения эффективной коммуникации.<br/>- Эксплуатация и сопровождение баз данных для критических обновлений, резервного копирования и анализа журналов транзакций (JSON и ISO)." },
			{ year: "04 апреля 2016 - 25 февраля 2020", title: "Специалист дата-центра", comp: "PT. ValueStream International", desc: "Проведение профилактического обслуживания инфраструктуры дата-центра, повышение надежности оборудования на 25% и снижение операционных сбоев.<br/>Управление установкой и вводом в эксплуатацию более 30 новых стоек, что обеспечило более быстрое развертывание серверной инфраструктуры.<br/>Мониторинг и анализ параметров окружающей среды, таких как энергопотребление и температура, для обеспечения оптимальной работы оборудования.<br/>Установка и ремонт критически важного аппаратного обеспечения, включая маршрутизаторы, коммутаторы и модемы, для обеспечения стабильного сетевого соединения.<br/>Поддержка серверных приложений продуктивной среды с минимальными простоями." },
			{ year: "01 января 2015 - 31 марта 2016", title: "Инженер поддержки Wi-Fi", comp: "Indosat Coop", desc: "Установка и настройка радиосистем, маршрутизаторов и точек доступа для расширения покрытия Wi-Fi.<br/>Выполнение сетевых установок и устранения неисправностей для повышения надежности сети." },
			{ year: "1 октября 2012 - 31 декабря 2014", title: "Техническая поддержка", comp: "PT. Persada", desc: "Установка и настройка радиосистем, маршрутизаторов и точек доступа для корпоративных клиентов.<br/>Проведение комплексного обслуживания и устранения сетевых неисправностей." },
			{ year: "1 июля 2011 - 31 августа 2014", title: "Стажёр", comp: "CV. Media Utama Computer", desc: "Оказание компьютерной технической поддержки, включая обслуживание аппаратного и программного обеспечения." },
			{ year: "1 июня 2011 - 30 июня 2014", title: "Стажёр", comp: "PT. Securindo Packatama Indonesia", desc: "Помощь в компьютерной технической поддержке и устранении системных неисправностей." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Бакалавр компьютерных наук (Инженерия информатики)"},
			{ year: "2009 - 2012", name: "Профессиональная школа Angkasa 1 Margahayu", major: "Компьютерная и сетевая инженерия" }
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
            { year: "26 februari 2020 - 25 februari 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "- Onderhoud van de elektrische systemen van het datacenter, UPS en generatoren, met een uptime van 99,9% en gegarandeerde ononderbroken bedrijfsvoering.<br/>- Vermindering van de incidentoplostijd met 30% door proactieve probleemoplossingsprocessen en effectieve taakprioritering.<br/>- Beheer van onderhoud en operatie van 10 serverracks, inclusief de installatie van 3 nieuwe racks ter verbetering van de serverimplementatiesnelheid en infrastructuurgroei, evenals onderhoud van 2 netwerkracks voor betrouwbare netwerkprestaties.<br/>- Configuratie van fysieke en virtuele servers om de servicebetrouwbaarheid te verhogen en downtime te minimaliseren.<br/>- Fungeren als tweedelijns support voor complexe systeem- en databaseproblemen, wat bijdroeg aan een toename van 20% in SLA-naleving.<br/>- Samenwerking met multidisciplinaire teams, waaronder netwerk- en compliance-afdelingen, om geëscaleerde incidenten aan te pakken en soepele communicatie te bevorderen.<br/>- Beheer en onderhoud van databases voor kritische updates, back-ups en analyse van transactielogs (JSON & ISO)." },
			{ year: "04 april 2016 - 25 februari 2020", title: "Datacenterspecialist", comp: "PT. ValueStream International", desc: "Uitvoering van preventief onderhoud aan de datacenterinfrastructuur, verhoging van de betrouwbaarheid van apparatuur met 25% en vermindering van operationele verstoringen.<br/>Beheer van installatie en ingebruikname van meer dan 30 nieuwe rackposities, waardoor snellere serverimplementatie mogelijk werd.<br/>Monitoring en analyse van omgevingscondities zoals stroomverbruik en temperatuur om optimale prestaties te waarborgen.<br/>Installatie en reparatie van kritische hardwarecomponenten, waaronder routers, switches en modems, voor stabiele netwerkconnectiviteit.<br/>Ondersteuning van productie-serverapplicaties met consistente dienstverlening en minimale downtime." },
			{ year: "01 januari 2015 - 31 maart 2016", title: "Wi-Fi Support Engineer", comp: "Indosat Coop", desc: "Installatie en configuratie van radiosystemen, routers en access points ter verbetering van Wi-Fi-dekking.<br/>Uitvoering van netwerkinstallaties en probleemoplossing om de netwerkbetrouwbaarheid te verhogen." },
			{ year: "1 oktober 2012 - 31 december 2014", title: "Technische ondersteuning", comp: "PT. Persada", desc: "Installatie en configuratie van radiosystemen, routers en access points voor zakelijke klanten.<br/>Uitvoering van uitgebreide netwerkproblemenanalyse en onderhoud." },
			{ year: "1 juli 2011 - 31 augustus 2014", title: "Stagiair", comp: "CV. Media Utama Computer", desc: "Verlenen van technische computerondersteuning, inclusief hardware- en softwareonderhoud." },
			{ year: "1 juni 2011 - 30 juni 2014", title: "Stagiair", comp: "PT. Securindo Packatama Indonesia", desc: "Ondersteuning bij technische computerondersteuning en systeemprobleemoplossing." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Bachelor in Computerwetenschappen (Informatica Engineering)"},
			{ year: "2009 - 2012", name: "Beroepsschool Angkasa 1 Margahayu", major: "Computer- en Netwerktechniek" }
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
            { year: "26 febbraio 2020 - 25 febbraio 2025", title: "Supporto Operazioni IT", comp: "PT. ValueStream International", desc: "- Manutenzione dei sistemi elettrici del Data Center, UPS e generatori, raggiungendo un uptime del 99,9% e garantendo operazioni ininterrotte.<br/>- Riduzione del tempo di risoluzione degli incidenti del 30% tramite flussi di troubleshooting proattivi e un'efficace prioritizzazione delle attività.<br/>- Gestione della manutenzione e dell’operatività di 10 rack server, inclusa l’installazione di 3 nuovi rack che hanno migliorato la velocità di distribuzione dei server e la crescita dell’infrastruttura, nonché la manutenzione di 2 rack di rete per garantire prestazioni affidabili.<br/>- Configurazione di server fisici e virtuali per migliorare l’affidabilità dei servizi e ridurre i tempi di inattività.<br/>- Attività di supporto di secondo livello per la risoluzione di problematiche complesse di sistemi e database, contribuendo a un aumento del 20% nella conformità SLA.<br/>- Collaborazione con team interfunzionali, inclusi networking e compliance, per la gestione di incidenti escalati e una comunicazione efficace.<br/>- Gestione e manutenzione dei database per aggiornamenti critici, backup e analisi dei log delle transazioni (JSON e ISO)." },
			{ year: "04 aprile 2016 - 25 febbraio 2020", title: "Specialista Data Center", comp: "PT. ValueStream International", desc: "Esecuzione della manutenzione preventiva dell’infrastruttura del Data Center, aumentando l’affidabilità delle apparecchiature del 25% e riducendo le interruzioni operative.<br/>Gestione dell’installazione e messa in servizio di oltre 30 nuove posizioni rack, consentendo un’implementazione più rapida dell’infrastruttura server.<br/>Monitoraggio e analisi delle condizioni ambientali come consumo energetico e temperatura per garantire prestazioni ottimali.<br/>Installazione e riparazione di componenti hardware critici, inclusi router, switch e modem, assicurando una connettività di rete stabile.<br/>Supporto alle applicazioni server di produzione con erogazione costante del servizio e tempi di inattività minimi." },
			{ year: "01 gennaio 2015 - 31 marzo 2016", title: "Ingegnere di Supporto Wi-Fi", comp: "Indosat Coop", desc: "Installazione e configurazione di sistemi radio, router e access point per migliorare la copertura Wi-Fi.<br/>Esecuzione di installazioni di rete e troubleshooting per aumentare l’affidabilità della rete." },
			{ year: "1 ottobre 2012 - 31 dicembre 2014", title: "Supporto Tecnico", comp: "PT. Persada", desc: "Installazione e configurazione di sistemi radio, router e access point per clienti aziendali.<br/>Esecuzione di manutenzione e troubleshooting di rete completi." },
			{ year: "1 luglio 2011 - 31 agosto 2014", title: "Tirocinante", comp: "CV. Media Utama Computer", desc: "Fornitura di supporto tecnico informatico, inclusa la manutenzione hardware e software." },
			{ year: "1 giugno 2011 - 30 giugno 2014", title: "Tirocinante", comp: "PT. Securindo Packatama Indonesia", desc: "Assistenza nel supporto tecnico informatico e nella risoluzione dei problemi di sistema." }
		],
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "Laurea in Informatica (Ingegneria Informatica)"},
			{ year: "2009 - 2012", name: "Istituto Professionale Angkasa 1 Margahayu", major: "Ingegneria Informatica e delle Reti" }
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
            { year: "26 فبراير 2020 - 25 فبراير 2025", title: "دعم عمليات تقنية المعلومات", comp: "PT. ValueStream International", desc: "- صيانة أنظمة الطاقة في مركز البيانات، وأنظمة UPS والمولدات، وتحقيق نسبة توفر 99.9٪ لضمان استمرارية التشغيل دون انقطاع.<br/>- تقليل زمن معالجة الحوادث بنسبة 30٪ من خلال أساليب استباقية في استكشاف الأخطاء وتحديد أولويات المهام بفعالية.<br/>- إدارة تشغيل وصيانة 10 خزائن خوادم، بما في ذلك تركيب 3 خزائن جديدة ساهمت في تسريع نشر الخوادم ونمو البنية التحتية، بالإضافة إلى صيانة خزانتين للشبكة لضمان أداء شبكي موثوق.<br/>- إعداد الخوادم الفيزيائية والافتراضية لتعزيز موثوقية الخدمات وتقليل فترات التوقف.<br/>- العمل كدعم فني من المستوى الثاني لمعالجة أعطال الأنظمة وقواعد البيانات المعقدة، والمساهمة في رفع الالتزام باتفاقيات مستوى الخدمة بنسبة 20٪.<br/>- التعاون مع الفرق متعددة التخصصات، بما في ذلك فرق الشبكات والامتثال، لمعالجة الحوادث المصعّدة وتعزيز التواصل الفعّال.<br/>- تشغيل وصيانة قواعد البيانات الخاصة بالتحديثات الحرجة والنسخ الاحتياطي وتحليل سجلات المعاملات (JSON و ISO)." },
			{ year: "04 أبريل 2016 - 25 فبراير 2020", title: "أخصائي مركز بيانات", comp: "PT. ValueStream International", desc: "تنفيذ أعمال الصيانة الوقائية للبنية التحتية لمركز البيانات، مما أدى إلى زيادة موثوقية المعدات بنسبة 25٪ وتقليل الأعطال التشغيلية.<br/>إدارة تركيب وتشغيل أكثر من 30 موقع رف جديد، مما ساعد على تسريع نشر البنية التحتية للخوادم.<br/>مراقبة وتحليل الظروف البيئية مثل استهلاك الطاقة ودرجة الحرارة لضمان الأداء الأمثل للمعدات.<br/>تركيب وإصلاح مكونات الأجهزة الحيوية، بما في ذلك أجهزة التوجيه والمحولات والمودمات، لضمان اتصال شبكي مستقر.<br/>دعم تطبيقات خوادم الإنتاج مع الحفاظ على استقرار الخدمة وتقليل فترات التوقف." },
			{ year: "01 يناير 2015 - 31 مارس 2016", title: "مهندس دعم Wi-Fi", comp: "Indosat Coop", desc: "تركيب وتهيئة أنظمة الراديو وأجهزة التوجيه ونقاط الوصول لتحسين تغطية Wi-Fi.<br/>تنفيذ أعمال تركيب الشبكات ومعالجة الأعطال لرفع موثوقية الشبكة." },
			{ year: "1 أكتوبر 2012 - 31 ديسمبر 2014", title: "الدعم الفني", comp: "PT. Persada", desc: "تركيب وتهيئة أنظمة الراديو وأجهزة التوجيه ونقاط الوصول لعملاء الشركات.<br/>تنفيذ أعمال الصيانة الشاملة واستكشاف أخطاء الشبكة." },
			{ year: "1 يوليو 2011 - 31 أغسطس 2014", title: "متدرب", comp: "CV. Media Utama Computer", desc: "تقديم الدعم الفني للحاسوب، بما في ذلك صيانة الأجهزة والبرمجيات." },
			{ year: "1 يونيو 2011 - 30 يونيو 2014", title: "متدرب", comp: "PT. Securindo Packatama Indonesia", desc: "المساعدة في الدعم الفني للحاسوب ومعالجة مشكلات الأنظمة." }
		],	
		school: [
			{ year: "2014 - 2017", name: "STMIK Indonesia Mandiri", major: "بكالوريوس علوم الحاسوب (هندسة المعلوماتية)"},
			{ year: "2009 - 2012", name: "المدرسة المهنية Angkasa 1 Margahayu", major: "هندسة الحاسوب والشبكات" }
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
function setLanguage(lang) {
    // 1. Matikan transisi agar tidak ada 'efek melompat' saat posisi tombol pindah
    document.body.style.transition = 'none';
    
    // 2. Update teks berdasarkan data-key atau data-i18n
    document.querySelectorAll('[data-key], [data-i18n]').forEach(el => {
        const key = el.getAttribute('data-key') || el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 3. Update Label Tombol Navigasi (misal dari "ID" ke "EN")
    const currentLangLabel = document.getElementById('current-lang');
    if (currentLangLabel) currentLangLabel.innerText = lang;

    // 4. Atur Arah Teks (Penting agar dropdown tidak kabur)
    const isRTL = (lang === 'AR'); // Tambahkan kode bahasa lain jika ada yang RTL
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();

    // 5. Jalankan ulang render skill agar garis kuning menyesuaikan posisi
    if (typeof renderCategorizedSkills === "function") {
        renderCategorizedSkills();
    }

    // 6. Hidupkan kembali transisi setelah layout stabil
    setTimeout(() => {
        document.body.style.transition = '';
    }, 50);
}

// --- PAKSA DEFAULT BAHASA INGGRIS SAAT REFRESH ---
// Tambahkan ini di baris paling bawah file main.js Anda
window.addEventListener('DOMContentLoaded', () => {
    setLanguage('EN'); 
});