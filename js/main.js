console.log("Retro minimal site loaded 🚀");

const translations = {
    ID: {
        hero_sub: "Operasional Infrastruktur IT & Data Center",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Keandalan | Konektivitas | Presisi <br> Selalu mencari peluang baru",
        btn_contact: "Hubungi Saya", btn_cv: "Unduh CV", label_history: "// riwayat_kerja",
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "Pemeliharaan UPS/Genset, monitoring link, VMware, analisis log transaksi." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "Monitoring DC 24/7 dan pendinginan presisi." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Koperasi Indosat", desc: "Instalasi Aruba/Ruckus proyek Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Technical Support", comp: "PT. Persada", desc: "Implementasi jaringan wireless korporat dan troubleshooting." }
        ]
    },
    EN: {
        hero_sub: "IT Infrastructure & Data Center Operations",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Reliability | Connectivity | Precision <br> Always seeking new opportunities",
        btn_contact: "Contact Me", btn_cv: "Download CV", label_history: "// work_history",
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "UPS/Genset maintenance, link monitoring, VMware, log analysis." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "24/7 DC monitoring and precision cooling." },
            { year: "2015 - 2016", title: "Wi-Fi Support Engineer", comp: "Indosat Coop", desc: "Aruba/Ruckus installation for Indosat Super Wi-Fi." },
            { year: "2012 - 2014", title: "Technical Support", comp: "PT. Persada", desc: "Corporate wireless network and troubleshooting." }
        ]
    },
    ZH: { hero_sub: "IT 基础设施与数据中心运营", hero_title: "Dezan Sanubari", hero_tagline: "可靠性 | 连接性 | 精准 <br> 始终寻求新机会", btn_contact: "联系我", btn_cv: "下载简历", label_history: "// 工作经历", jobs: [{ year: "2020 - 2025", title: "IT运营支持", comp: "PT. ValueStream", desc: "UPS/发电机维护、链路监控、VMware、日志分析。" }, { year: "2016 - 2020", title: "数据中心专员", comp: "PT. ValueStream", desc: "24/7 数据中心基础设施监控和精密冷却。" }, { year: "2015 - 2016", title: "Wi-Fi技术支持", comp: "Indosat", desc: "安装 Aruba/Ruckus 接入点。" }, { year: "2012 - 2014", title: "技术支持", comp: "PT. Persada", desc: "企业无线网络实施和故障排除。" }] },
    JP: { hero_sub: "ITインフラ・データセンター運用", hero_title: "デザン・サヌバリ", hero_tagline: "信頼性 | 接続性 | 精度 <br> 常に新しい機会を求めて", btn_contact: "お問い合わせ", btn_cv: "履歴書", label_history: "// 職歴", jobs: [{ year: "2020 - 2025", title: "IT運用サポート", comp: "PT. ValueStream", desc: "UPS/発電機メンテナンス、VMware、ログ分析。" }, { year: "2016 - 2020", title: "DCスペシャリスト", comp: "PT. ValueStream", desc: "24時間365日のDC監視と精密冷却。" }, { year: "2015 - 2016", title: "Wi-Fiエンジニア", comp: "Indosat", desc: "Indosat Super Wi-Fi用AP設置。" }, { year: "2012 - 2014", title: "技術サポート", comp: "PT. Persada", desc: "企業のワイヤレスネットワーク構築。" }] },
    KO: { hero_sub: "IT 인프라 및 데이터 센터 운영", hero_title: "Dezan Sanubari", hero_tagline: "신뢰성 | 연결성 | 정밀도 <br> 항상 새로운 기회를 찾고 있습니다", btn_contact: "문의하기", btn_cv: "이력서 다운로드", label_history: "// 경력 사항", jobs: [{ year: "2020 - 2025", title: "IT 운영 지원", comp: "PT. ValueStream", desc: "UPS/발전기 유지보수, VMware, 로그 분석." }, { year: "2016 - 2020", title: "데이터 센터 전문가", comp: "PT. ValueStream", desc: "24/7 DC 인프라 모니터링." }, { year: "2015 - 2016", title: "Wi-Fi 지원", comp: "Indosat", desc: "Aruba/Ruckus AP 설치." }, { year: "2012 - 2014", title: "기술 지원", comp: "PT. Persada", desc: "기업 무선 네트워크 구축." }] },
    DE: { hero_sub: "IT-Infrastruktur & RZ-Betrieb", hero_title: "Dezan Sanubari", hero_tagline: "Zuverlässigkeit | Konnektivität | Präzision <br> Immer auf der Suche nach neuen Möglichkeiten", btn_contact: "Kontakt", btn_cv: "Lebenslauf", label_history: "// Erfahrung", jobs: [{ year: "2020 - 2025", title: "IT-Operations", comp: "PT. ValueStream", desc: "Wartung USV/Genset, VMware, Analyse." }, { year: "2016 - 2020", title: "RZ-Spezialist", comp: "PT. ValueStream", desc: "24/7 RZ-Monitoring und Kühlung." }, { year: "2015 - 2016", title: "Wi-Fi-Ingenieur", comp: "Indosat", desc: "Aruba/Ruckus AP Installation." }, { year: "2012 - 2014", title: "Tech-Support", comp: "PT. Persada", desc: "WLAN-Implementierung." }] },
    FR: { hero_sub: "Infrastructure IT & Data Center", hero_title: "Dezan Sanubari", hero_tagline: "Fiabilité | Connectivité | Précision <br> Toujours à la recherche d'opportunités", btn_contact: "Contact", btn_cv: "Télécharger CV", label_history: "// Expérience", jobs: [{ year: "2020 - 2025", title: "Support IT", comp: "PT. ValueStream", desc: "Maintenance UPS, VMware, analyse logs." }, { year: "2016 - 2020", title: "Spécialiste DC", comp: "PT. ValueStream", desc: "Monitoring 24/7 et refroidissement." }, { year: "2015 - 2016", title: "Ingénieur Wi-Fi", comp: "Indosat", desc: "Installation AP Aruba/Ruckus." }, { year: "2012 - 2014", title: "Support Technique", comp: "PT. Persada", desc: "Réseau sans fil entreprise." }] },
    ES: { hero_sub: "Infraestructura IT & Data Center", hero_title: "Dezan Sanubari", hero_tagline: "Fiabilidad | Conectividad | Precisión <br> Siempre buscando oportunidades", btn_contact: "Contacto", btn_cv: "Descargar CV", label_history: "// Experiencia", jobs: [{ year: "2020 - 2025", title: "Soporte TI", comp: "PT. ValueStream", desc: "Mantenimiento UPS, VMware, análisis." }, { year: "2016 - 2020", title: "Especialista DC", comp: "PT. ValueStream", desc: "Monitoreo 24/7 y enfriamiento." }, { year: "2015 - 2016", title: "Soporte Wi-Fi", comp: "Indosat", desc: "Instalación AP Aruba/Ruckus." }, { year: "2012 - 2014", title: "Soporte Técnico", comp: "PT. Persada", desc: "Redes inalámbricas." }] },
    PT: { hero_sub: "Infraestrutura de TI & Data Center", hero_title: "Dezan Sanubari", hero_tagline: "Confiabilidade | Precisão <br> Sempre buscando oportunidades", btn_contact: "Contato", btn_cv: "Baixar CV", label_history: "// Experiência", jobs: [{ year: "2020 - 2025", title: "Suporte TI", comp: "PT. ValueStream", desc: "Manutenção UPS, VMware, logs." }, { year: "2016 - 2020", title: "Especialista DC", comp: "PT. ValueStream", desc: "Monitoramento 24/7." }, { year: "2015 - 2016", title: "Engenheiro Wi-Fi", comp: "Indosat", desc: "Instalação AP Aruba/Ruckus." }, { year: "2012 - 2014", title: "Suporte Técnico", comp: "PT. Persada", desc: "Redes sem fio." }] },
    RU: { hero_sub: "IT-инфраструктура и ЦОД", hero_title: "Дезан Санубари", hero_tagline: "Надежность | Точность <br> Всегда в поиске новых возможностей", btn_contact: "Контакт", btn_cv: "Скачать CV", label_history: "// Опыт", jobs: [{ year: "2020 - 2025", title: "IT-поддержка", comp: "PT. ValueStream", desc: "Обслуживание ИБП, VMware." }, { year: "2016 - 2020", title: "Специалист ЦОД", comp: "PT. ValueStream", desc: "Мониторинг 24/7." }, { year: "2015 - 2016", title: "Wi-Fi инженер", comp: "Indosat", desc: "Установка точек доступа." }, { year: "2012 - 2014", title: "Техподдержка", comp: "PT. Persada", desc: "Беспроводные сети." }] },
    NL: { hero_sub: "IT Infrastructuur & Datacenter", hero_title: "Dezan Sanubari", hero_tagline: "Betrouwbaarheid | Precisie <br> Altijd op zoek naar kansen", btn_contact: "Contact", btn_cv: "Download CV", label_history: "// Ervaring", jobs: [{ year: "2020 - 2025", title: "IT Support", comp: "PT. ValueStream", desc: "UPS onderhoud, VMware." }, { year: "2016 - 2020", title: "DC Specialist", comp: "PT. ValueStream", desc: "24/7 monitoring." }, { year: "2015 - 2016", title: "Wi-Fi Engineer", comp: "Indosat", desc: "Aruba/Ruckus installatie." }, { year: "2012 - 2014", title: "Technical Support", comp: "PT. Persada", desc: "Bedrijfsnetwerken." }] },
    IT: { hero_sub: "Infrastruttura IT & Data Center", hero_title: "Dezan Sanubari", hero_tagline: "Affidabilità | Precisione <br> Sempre alla ricerca di opportunità", btn_contact: "Contatto", btn_cv: "Scarica CV", label_history: "// Esperienza", jobs: [{ year: "2020 - 2025", title: "Supporto IT", comp: "PT. ValueStream", desc: "Manutenzione UPS, VMware." }, { year: "2016 - 2020", title: "Specialista DC", comp: "PT. ValueStream", desc: "Monitoraggio 24/7." }, { year: "2015 - 2016", title: "Ingegnere Wi-Fi", comp: "Indosat", desc: "Installazione AP." }, { year: "2012 - 2014", title: "Supporto Técnico", comp: "PT. Persada", desc: "Reti wireless." }] },
    AR: { hero_sub: "بنية تكنولوجيا المعلومات والبيانات", hero_title: "ديزان سنوباري", hero_tagline: "الموثوقية | الدقة <br> البحث دائما عن فرص جديدة", btn_contact: "اتصل بي", btn_cv: "السيرة الذاتية", label_history: "// الخبرة", jobs: [{ year: "2020 - 2025", title: "دعم العمليات", comp: "PT. ValueStream", desc: "صيانة المولدات و VMware." }, { year: "2016 - 2020", title: "أخصائي مركز البيانات", comp: "PT. ValueStream", desc: "مراقبة على مدار الساعة." }, { year: "2015 - 2016", title: "مهندس Wi-Fi", comp: "Indosat", desc: "تركيب نقاط وصول." }, { year: "2012 - 2014", title: "الدعم الفني", comp: "PT. Persada", desc: "شبكات لاسلكية." }] }
};

const languages = [
    {id:'ID', n:'Indonesian'}, {id:'EN', n:'English'}, {id:'ZH', n:'Chinese'},
    {id:'JP', n:'Japanese'}, {id:'KO', n:'Korean'}, {id:'DE', n:'German'},
    {id:'FR', n:'French'}, {id:'ES', n:'Spanish'}, {id:'PT', n:'Portuguese'},
    {id:'RU', n:'Russian'}, {id:'NL', n:'Dutch'}, {id:'IT', n:'Italian'}, {id:'AR', n:'Arabic'}
];

function changeLang(l) {
    const d = translations[l] || translations.ID;
    
    // Update Teks
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if(d[k]) el.innerHTML = d[k];
    });

    // Update Riwayat Kerja
    const workBox = document.getElementById('work-content');
    if (workBox) {
        workBox.innerHTML = d.jobs.map(j => `
            <div class="work-item">
                <div class="work-year mono">${j.year}</div>
                <div class="work-info">
                    <h3>${j.title}</h3>
                    <span class="company">${j.comp}</span>
                    <p>${j.desc}</p>
                </div>
            </div>`).join('');
    }

    // Update UI
    document.getElementById('current-lang').innerText = l;
    document.body.style.direction = (l === 'AR') ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLang', l);
}

// Ekspos ke window agar bisa dipanggil onclick dari HTML
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
    const s = localStorage.getItem('selectedLang') || 'ID';
    changeLang(s);
    console.log("Dezan Portfolio Loaded with 13 Languages 🚀");
});
