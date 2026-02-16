const profile = {
    en: {
        htmlLang: "en",
        toggleLabel: "Ελληνικά",
        toggleAria: "Switch language to Greek",
        logoHint: "Your logo can be added here any time.",
        name: "Petros Nakoutsi",
        title: "Information & Communication Systems Engineer | Security • Networking • Systems Architecture",
        intro: "This site presents my academic/research path and serves as a practical reference point for students who need meaningful technical support.",
        sectionsTitle: "Explore",
        sectionsAria: "Profile sections",
        ctaGithub: "GitHub Profile",
        aiNote: "This site was made using OpenAI LLM and Codex — I speak fluent AI 🤖. If you're okay with that (and with me as a vibe lifer), just contact me and I'll help you ASAP.",
        sections: [
            {
                id: "about",
                title: "About",
                subtitle: "Academic background & mission",
                content: `
                    <p>I'm a graduate of the Department of Information & Communication Systems Engineering at the University of the Aegean.</p>
                    <p>My focus is cybersecurity, computer networks, and systems architecture. I care about understanding technology at mechanism level: why it was designed, which problem it solves, and where it can fail.</p>
                    <p>The goal of this site is twofold: to present my work and research path, and to become a trusted point of reference for students working on technical assignments and projects.</p>
                `
            },
            {
                id: "thesis",
                title: "Thesis (Ongoing)",
                subtitle: "Windows Server security evolution (2012–2025)",
                content: `
                    <p><strong>Evolution of Security Features in Windows Servers (2012–2025) and Analysis of Version-Specific Attack Behavior</strong></p>
                    <ul>
                        <li>Security feature mapping across versions</li>
                        <li>Architectural logic behind each feature</li>
                        <li>Correlation with known attack techniques</li>
                        <li>Version-specific attack behavior analysis</li>
                        <li>How defensive architecture influences attacker strategy</li>
                    </ul>
                    <p>The study focuses on how attack surface changes with each release.</p>
                `
            }
        ]
    },

    el: {
        htmlLang: "el",
        toggleLabel: "English",
        toggleAria: "Switch language to English",
        logoHint: "Το λογότυπο μπορεί να προστεθεί εδώ όποτε το στείλεις.",
        name: "Petros Nakoutsi",
        title: "Μηχανικός Πληροφοριακών και Επικοινωνιακών Συστημάτων | Security • Networking • Systems Architecture",
        intro: "Το site παρουσιάζει την ακαδημαϊκή και ερευνητική μου πορεία και λειτουργεί ως σημείο αναφοράς για φοιτητές που χρειάζονται ουσιαστική τεχνική υποστήριξη.",
        sectionsTitle: "Πλοήγηση",
        sectionsAria: "Ενότητες προφίλ",
        ctaGithub: "Προφίλ GitHub",
        aiNote: "Αυτό το site φτιάχτηκε με OpenAI LLM και Codex — μιλάω άπταιστα AI 🤖. Αν είσαι οκ με αυτό (και με μένα ως vibe lifer), επικοινώνησε μαζί μου και θα σε βοηθήσω άμεσα.",
        sections: [
            {
                id: "about",
                title: "Σχετικά",
                subtitle: "Ακαδημαϊκό υπόβαθρο και στόχος",
                content: `
                    <p>Είμαι απόφοιτος του Τμήματος Μηχανικών Πληροφοριακών και Επικοινωνιακών Συστημάτων του Πανεπιστημίου Αιγαίου.</p>
                    <p>Η κατεύθυνσή μου εστιάζει στην κυβερνοασφάλεια, στα δίκτυα και στην αρχιτεκτονική συστημάτων. Με ενδιαφέρει η κατανόηση τεχνολογιών σε επίπεδο μηχανισμού.</p>
                    <p>Στόχος του site είναι να παρουσιάζει τη δουλειά μου και να αποτελεί σημείο αναφοράς για φοιτητές με τεχνικές εργασίες.</p>
                `
            }
        ]
    }
};

let currentLang = "el";
let activeSectionId = "about";

const languageToggle = document.getElementById("languageToggle");
const logoHintNode = document.getElementById("logoHint");
const nameNode = document.getElementById("name");
const titleNode = document.getElementById("title");
const introNode = document.getElementById("intro");
const ctaBtnNode = document.querySelector(".cta-btn");
const aiNoteNode = document.getElementById("aiNote");
const sectionsTitleNode = document.getElementById("sectionsTitle");
const cardsNode = document.getElementById("cards");
const detailsTitleNode = document.getElementById("detailsTitle");
const detailsContentNode = document.getElementById("detailsContent");

function render() {
    const locale = profile[currentLang];

    document.documentElement.lang = locale.htmlLang;
    languageToggle.textContent = locale.toggleLabel;
    languageToggle.setAttribute("aria-label", locale.toggleAria);

    logoHintNode.textContent = locale.logoHint;
    nameNode.textContent = locale.name;
    titleNode.textContent = locale.title;
    introNode.textContent = locale.intro;
    ctaBtnNode.textContent = locale.ctaGithub;
    aiNoteNode.textContent = locale.aiNote;

    sectionsTitleNode.textContent = locale.sectionsTitle;
    cardsNode.setAttribute("aria-label", locale.sectionsAria);

    cardsNode.innerHTML = "";

    locale.sections.forEach((section) => {
        const isActive = section.id === activeSectionId;

        const card = document.createElement("button");
        card.className = `card ${isActive ? "active" : ""}`;
        card.type = "button";
        card.setAttribute("role", "tab");
        card.setAttribute("aria-selected", String(isActive));

        card.innerHTML = `
            <span class="card-title">${section.title}</span>
            <span class="card-subtitle">${section.subtitle}</span>
        `;

        card.addEventListener("click", () => {
            activeSectionId = section.id;
            render();
        });

        cardsNode.appendChild(card);
    });

    const selected =
        locale.sections.find((s) => s.id === activeSectionId) ||
        locale.sections[0];

    detailsTitleNode.textContent = selected.title;
    detailsContentNode.innerHTML = selected.content;
}

cardsNode.addEventListener("keydown", (event) => {
    if (!event.target.classList.contains("card")) return;

    const locale = profile[currentLang];
    const currentIndex = locale.sections.findIndex(
        (s) => s.id === activeSectionId
    );

    if (event.key === "ArrowRight") {
        const next = (currentIndex + 1) % locale.sections.length;
        activeSectionId = locale.sections[next].id;
        render();
        cardsNode.children[next]?.focus();
        event.preventDefault();
    }

    if (event.key === "ArrowLeft") {
        const prev =
            (currentIndex - 1 + locale.sections.length) %
            locale.sections.length;
        activeSectionId = locale.sections[prev].id;
        render();
        cardsNode.children[prev]?.focus();
        event.preventDefault();
    }
});

languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "el" ? "en" : "el";
    render();
});

render();
