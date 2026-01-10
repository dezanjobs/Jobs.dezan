console.log("Retro minimal site loaded 🚀");
const translations = {
    ID: {
        hero_sub: "Operasional Infrastruktur IT & Data Center",
        hero_title: "Dezan Sanubari",
        hero_tagline: "Keandalan | Konektivitas | Presisi <br> Selalu mencari peluang baru",
        hero_about: "Insinyur jaringan berusia 31 tahun di Bandung dengan 12 tahun pengalaman. Spesialisasi dalam Data Center, virtualisasi VMware, dan jaringan Cisco/Mikrotik. Penggemar fotografi dan pendukung setia Real Madrid & Persib Bandung.",
        btn_contact: "Hubungi Saya", btn_cv: "Unduh CV", 
        label_about: "// tentang_saya", label_history: "// riwayat_kerja", label_skills: "// keahlian_teknis", label_school: "// pendidikan",
        skills: ["VMware", "Linux", "Mikrotik", "Cisco", "ISO8583", "JSON", "UPS/Genset", "Zabbix", "EMC Storage"],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri Bandung", major: "S1 Teknik Informatika (Bachelor of Computer Science)" },
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
        hero_about: "Dedicated 31-year-old network engineer in Bandung with 12 years of experience. Specialized in data centers, VMware, and network protocols. Enthusiastic supporter of Real Madrid and Persib Bandung.",
        btn_contact: "Contact Me", btn_cv: "Download CV", 
        label_about: "// about_me", label_history: "// work_history", label_skills: "// technical_skills", label_school: "// education",
        skills: ["VMware", "Linux", "Mikrotik", "Cisco", "ISO8583", "JSON", "UPS/Genset", "Zabbix", "EMC Storage"],
        school: [
            { year: "2014 - 2017", name: "STMIK Indonesia Mandiri Bandung", major: "Bachelor of Computer Science" },
            { year: "2009 - 2012", name: "Angkasa 1 Margahayu Vocational HS", major: "Computer & Network Engineering" }
        ],
        jobs: [
            { year: "2020 - 2025", title: "IT Operations Support", comp: "PT. ValueStream International", desc: "UPS/Genset maintenance, VMware virtualization, ISO8583/JSON log analysis." },
            { year: "2016 - 2020", title: "Datacenter Specialist", comp: "PT. ValueStream International", desc: "24/7 DC monitoring and precision cooling." }
        ]
    },
    ZH: { hero_sub: "IT 基础设施与运营", hero_title: "Dezan Sanubari", hero_about: "31 岁的网络工程师，拥有 12 年经验，精通数据中心和虚拟化技术。", label_about: "// 关于我", label_history: "// 工作经历", label_skills: "// 技术技能", label_school: "// 教育经历" },
    JP: { hero_sub: "ITインフラ・DC運用", hero_title: "デザン・サヌバリ", hero_about: "バンドンを拠点とする31歳のエンジニア。データセンターとVMwareのスペシャリスト。", label_about: "// 私について", label_history: "// 職歴", label_skills: "// スキル", label_school: "// 学歴" },
    KO: { hero_sub: "IT 인프라 및 운영", hero_title: "Dezan Sanubari", hero_about: "12년 경력의 31세 네트워크 엔지니어. 데이터 센터 및 가상화 전문가.", label_about: "// 자기소개", label_history: "// 경력", label_skills: "// 기술", label_school: "// 학력" },
    DE: { hero_sub: "IT-Infrastruktur & RZ-Betrieb", hero_title: "Dezan Sanubari", hero_about: "31-jähriger Netzwerkingenieur mit 12 Jahren Erfahrung in Rechenzentren und VMware.", label_about: "// über mich", label_history: "// erfahrung", label_skills: "// fähigkeiten", label_school: "// bildung" },
    FR: { hero_sub: "Infrastructure IT & Data Center", hero_title: "Dezan Sanubari", hero_about: "Ingénieur réseau de 31 ans avec 12 ans d'expérience. Expert en Data Center et VMware.", label_about: "// à propos", label_history: "// expérience", label_skills: "// compétences", label_school: "// éducation" },
    ES: { hero_sub: "Infraestructura IT", hero_title: "Dezan Sanubari", hero_about: "Ingeniero de redes de 31 años con 12 años de experiencia en centros de datos.", label_about: "// sobre mí", label_history: "// experiencia", label_skills: "// habilidades", label_school: "// educación" },
    PT: { hero_sub: "Infraestrutura de TI", hero_title: "Dezan Sanubari", hero_about: "Engenheiro de redes de 31 anos com vasta experiência em infraestrutura e VMware.", label_about: "// sobre mim", label_history: "// experiência", label_skills: "// competências", label_school: "// educação" },
    RU: { hero_sub: "IT-инфраструктура и ЦОД", hero_title: "Дезан Санубари", hero_about: "31-летний сетевой инженер с 12-летним опытом работы в области ЦОД.", label_about: "// обо мне", label_history: "// опыт", label_skills: "// навыки", label_school: "// образование" },
    NL: { hero_sub: "IT Infrastructuur", hero_title: "Dezan Sanubari", hero_about: "31-jarige netwerkingenieur gespecialiseerd in datacenters en virtualisatie.", label_about: "// over mij", label_history: "// ervaring", label_skills: "// vaardigheden", label_school: "// opleiding" },
    IT: { hero_sub: "Infrastruttura IT", hero_title: "Dezan Sanubari", hero_about: "Ingegnere di rete di 31 anni esperto in Data Center e infrastrutture critiche.", label_about: "// su di me", label_history: "// esperienza", label_skills: "// competenze", label_school: "// istruzione" },
    AR: { hero_sub: "بنية تكنولوجيا المعلومات", hero_title: "ديزان سنوباري", hero_about: "مهندس شبكات يبلغ من العمر 31 عامًا ولديه 12 عامًا من الخبرة في مراكز البيانات.", label_about: "// نبذة عني", label_history: "// الخبرة", label_skills: "// المهارات", label_school: "// التعليم" }
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
    
    // 1. Update Teks Statis (Hero, Labels, About)
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if(d[k]) el.innerHTML = d[k];
    });

    // 2. Update About Me secara spesifik (jika ada elemen #about-text)
    const aboutBox = document.getElementById('about-text');
    if (aboutBox) aboutBox.innerHTML = d.hero_about || fallback.hero_about;

    // 3. Update Riwayat Kerja
    const workBox = document.getElementById('work-content');
    if (workBox) {
        const jobs = d.jobs || fallback.jobs;
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

    // 4. Update Skills
    const skillBox = document.getElementById('skill-content');
    if (skillBox) {
        const skills = d.skills || fallback.skills;
        skillBox.innerHTML = skills.map(s => `<span class="skill-tag mono">${s}</span>`).join('');
    }

    // 5. Update Pendidikan
    const schoolBox = document.getElementById('school-content');
    if (schoolBox) {
        const school = d.school || fallback.school;
        schoolBox.innerHTML = school.map(s => `
            <div class="work-item">
                <div class="work-year mono">${s.year}</div>
                <div class="work-info">
                    <h3>${s.name}</h3>
                    <p>${s.major}</p>
                </div>
            </div>`).join('');
    }

    // Update UI State
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
    const s = localStorage.getItem('selectedLang') || 'ID';
    changeLang(s);
    console.log("Dezan Portfolio Loaded with 13 Languages & Education Fixed 🚀");
});
