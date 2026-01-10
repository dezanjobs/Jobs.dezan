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
    // ... (Tambahkan bahasa ZH, JP, KO, DE, FR, ES, PT, RU, NL, IT, AR di sini seperti kode sebelumnya)
};

const languages = [
    {id:'ID', n:'Indonesian'}, {id:'EN', n:'English'}, {id:'ZH', n:'Chinese'},
    {id:'JP', n:'Japanese'}, {id:'KO', n:'Korean'}, {id:'DE', n:'German'},
    {id:'FR', n:'French'}, {id:'ES', n:'Spanish'}, {id:'PT', n:'Portuguese'},
    {id:'RU', n:'Russian'}, {id:'NL', n:'Dutch'}, {id:'IT', n:'Italian'}, {id:'AR', n:'Arabic'}
];

function changeLang(l) {
    const d = translations[l] || translations.ID;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if(d[k]) el.innerHTML = d[k];
    });

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

    document.getElementById('current-lang').innerText = l;
    document.body.style.direction = (l === 'AR') ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLang', l);
}

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
    const savedLang = localStorage.getItem('selectedLang') || 'ID';
    changeLang(savedLang);
});
