
+const profile = {
+    en: {
+        htmlLang: "en",
+        toggleLabel: "Ελληνικά",
+        toggleAria: "Switch language to Greek",
+        logoHint: "Your logo can be added here any time.",
+        name: "Petros Nakoutsi",
+        title: "Information & Communication Systems Engineer | Security • Networking • Systems Architecture",
+        intro: "This site presents my academic/research path and serves as a practical reference point for students who need meaningful technical support.",
+        sectionsTitle: "Explore",
+        sectionsAria: "Profile sections",
+        ctaGithub: "GitHub Profile",
+        ctaHelp: "Get Help",
+        aiNote: "* This site was made using OpenAI LLM and Codex — I speak fluent AI 🤪. If you're okay with that (and with me as a vibe lifer), just contact me and I'll help you ASAP.",
+        sections: [
+            {
+                id: "about",
+                title: "About",
+                subtitle: "Academic background & mission",
+                content: `
+                    <p>I'm a graduate of the Department of Information & Communication Systems Engineering at the University of the Aegean.</p>
+                    <p>My focus is cybersecurity, computer networks, and systems architecture. I care about understanding technology at mechanism level: why it was designed, which problem it solves, and where it can fail.</p>
+                    <p>The goal of this site is twofold: to present my work and research path, and to become a trusted point of reference for students working on technical assignments and projects.</p>
+                `
+            },
+            {
+                id: "thesis",
+                title: "Thesis (Ongoing)",
+                subtitle: "Windows Server security evolution (2012–2025)",
+                content: `
+                    <p><strong>Evolution of Security Features in Windows Servers (2012–2025) and Analysis of Version-Specific Attack Behavior</strong></p>
+                    <ul>
+                        <li>Security feature mapping across versions</li>
+                        <li>Architectural logic behind each feature</li>
+                        <li>Correlation with known attack techniques</li>
+                        <li>Version-specific attack behavior analysis</li>
+                        <li>How defensive architecture influences attacker strategy</li>
+                    </ul>
+                    <p>The study focuses on how attack surface changes with each release, not just feature descriptions.</p>
+                `
+            },
+            {
+                id: "interests",
+                title: "Research Interests",
+                subtitle: "Academic and personal",
+                content: `
+                    <p><strong>Academic / Technical</strong></p>
+                    <ul>
+                        <li>Network Security Architecture</li>
+                        <li>Windows Internals & Server Security</li>
+                        <li>Wireless Security</li>
+                        <li>Attack Surface Analysis</li>
+                        <li>Secure System Design</li>
+                        <li>Identity & Access Control</li>
+                    </ul>
+                    <p><strong>Beyond Engineering</strong></p>
+                    <ul>
+                        <li>Music</li>
+                        <li>Entrepreneurship & tech startups</li>
+                        <li>Bouldering</li>
+                        <li>Quality time with good company</li>
+                    </ul>
+                `
+            },
+            {
+                id: "projects",
+                title: "Projects & Coursework",
+                subtitle: "Hands-on security and networking work",
+                content: `
+                    <ul>
+                        <li><strong>Low-Level Static Analysis of Smart Home Applications:</strong> MobSF analysis on 12 apps, permissions/network checks, dangerous CWEs, tracker analysis, and detailed vulnerability report.</li>
+                        <li><strong>Social Engineering & Privacy Risks:</strong> human factor in cybersecurity, cognitive weaknesses, and behavioral patterns linked to attack tactics.</li>
+                        <li><strong>Linux Server Hardening & Security Implementation:</strong> access control, user/permission management, kernel hardening, logging/monitoring, and attack surface reduction.</li>
+                        <li><strong>SSID Confusion Attack Analysis:</strong> feasibility study on Raspberry Pi with roaming and network identification analysis.</li>
+                        <li><strong>WPA Network Fuzzing:</strong> WPAXFuzz-based robustness testing of access points under malformed management frames.</li>
+                    </ul>
+                `
+            },
+            {
+                id: "offer",
+                title: "What I Offer",
+                subtitle: "How I support students",
+                content: `
+                    <ul>
+                        <li>Support for theses and academic projects in security & networking</li>
+                        <li>Design and implementation of lab environments</li>
+                        <li>Attack and defense mechanism analysis</li>
+                        <li>Windows and Linux security architecture guidance</li>
+                        <li>Mentoring for hands-on technical projects</li>
+                    </ul>
+                    <p>My approach is mechanism-first understanding, not tool memorization.</p>
+                `
+            },
+            {
+                id: "students",
+                title: "For Students",
+                subtitle: "Technical support & consulting",
+                content: `
+                    <p>If you're a student from any school/department and need technical support—regardless of difficulty level—I can support you end to end.</p>
+                    <p><strong>Examples:</strong></p>
+                    <blockquote>"I'm studying Psychology and doing research, but I don't know how to set up a proper Google Form."</blockquote>
+                    <ul>
+                        <li>How should data be organized?</li>
+                        <li>How is statistical processing done?</li>
+                        <li>How are charts produced correctly?</li>
+                        <li>How do I present results properly?</li>
+                    </ul>
+                    <p><strong>General support:</strong></p>
+                    <ul>
+                        <li>Design and implementation of research tools</li>
+                        <li>Data structure and analysis support</li>
+                        <li>Technical support for assignments</li>
+                        <li>Project guidance and consulting</li>
+                        <li>Technical consulting for academic needs</li>
+                    </ul>
+                    <p>Send your request with a short description and I will reply as soon as possible.</p>
+                `
+            }
+        ]
+    },
+    el: {
+        htmlLang: "el",
+        toggleLabel: "English",
+        toggleAria: "Switch language to English",
+        logoHint: "Το λογότυπο μπορεί να προστεθεί εδώ όποτε το στείλεις.",
+        name: "Petros Nakoutsi",
+        title: "Μηχανικός Πληροφοριακών και Επικοινωνιακών Συστημάτων | Security • Networking • Systems Architecture",
+        intro: "Το site παρουσιάζει την ακαδημαϊκή και ερευνητική μου πορεία και λειτουργεί ως σημείο αναφοράς για φοιτητές που χρειάζονται ουσιαστική τεχνική υποστήριξη.",
+        sectionsTitle: "Πλοήγηση",
+        sectionsAria: "Ενότητες προφίλ",
+        ctaGithub: "Προφίλ GitHub",
+        ctaHelp: "Ζήτα Βοήθεια",
+        aiNote: "* Αυτό το site φτιάχτηκε με OpenAI LLM και Codex — μιλάω άπταιστα AI 🤪. Αν είσαι οκ με αυτό (και με μένα ως vibe lifer), απλά επικοινώνησε μαζί μου και θα σε βοηθήσω ASAP.",
+        sections: [
+            {
+                id: "about",
+                title: "Σχετικά",
+                subtitle: "Ακαδημαϊκό υπόβαθρο και στόχος",
+                content: `
+                    <p>Ονομάζομαι Petros Nakoutsi και είμαι απόφοιτος του Τμήματος Μηχανικών Πληροφοριακών και Επικοινωνιακών Συστημάτων του Πανεπιστημίου Αιγαίου.</p>
+                    <p>Η ερευνητική μου κατεύθυνση εστιάζει στην κυβερνοασφάλεια, στα δίκτυα και στην αρχιτεκτονική συστημάτων. Με ενδιαφέρει η κατανόηση τεχνολογιών σε επίπεδο μηχανισμού: πώς σχεδιάστηκαν, ποιο πρόβλημα λύνουν και πώς αποτυγχάνουν.</p>
+                    <p>Στόχος του site είναι να παρουσιάζει τη δουλειά μου και να αποτελεί σημείο αναφοράς για φοιτητές με εργασίες σε τεχνικά αντικείμενα.</p>
+                `
+            },
+            {
+                id: "thesis",
+                title: "Διπλωματική (Σε εξέλιξη)",
+                subtitle: "Εξέλιξη ασφάλειας Windows Server (2012–2025)",
+                content: `
+                    <p><strong>Evolution of Security Features in Windows Servers (2012–2025) and Analysis of Version-Specific Attack Behavior</strong></p>
+                    <ul>
+                        <li>Χαρτογράφηση security features ανά έκδοση</li>
+                        <li>Ανάλυση της αρχιτεκτονικής λογικής κάθε feature</li>
+                        <li>Συσχέτιση features με γνωστές τεχνικές επίθεσης</li>
+                        <li>Μελέτη version-specific attack behavior</li>
+                        <li>Κατανόηση του πώς η αμυντική αρχιτεκτονική επηρεάζει τη στρατηγική του επιτιθέμενου</li>
+                    </ul>
+                    <p>Η προσέγγιση εξετάζει πώς μεταβάλλεται το attack surface σε κάθε νέα έκδοση.</p>
+                `
+            },
+            {
+                id: "interests",
+                title: "Ερευνητικά Ενδιαφέροντα",
+                subtitle: "Ακαδημαϊκά και προσωπικά",
+                content: `
+                    <p><strong>Academic / Technical</strong></p>
+                    <ul>
+                        <li>Network Security Architecture</li>
+                        <li>Windows Internals & Server Security</li>
+                        <li>Wireless Security</li>
+                        <li>Attack Surface Analysis</li>
+                        <li>Secure System Design</li>
+                        <li>Identity & Access Control</li>
+                    </ul>
+                    <p><strong>Beyond Engineering</strong></p>
+                    <ul>
+                        <li>Μουσική</li>
+                        <li>Επιχειρηματικότητα & τεχνολογικά startups</li>
+                        <li>Bouldering</li>
+                        <li>Ποιοτικός χρόνος με καλή παρέα</li>
+                    </ul>
+                `
+            },
+            {
+                id: "projects",
+                title: "Projects & Μαθήματα",
+                subtitle: "Εφαρμοσμένη δουλειά σε security και networking",
+                content: `
+                    <ul>
+                        <li><strong>Low-Level Static Analysis of Smart Home Applications:</strong> ανάλυση 12 εφαρμογών με MobSF, permission/network security checks, dangerous CWEs, trackers, και αναλυτική τεχνική αναφορά.</li>
+                        <li><strong>Social Engineering & Privacy Risks:</strong> ανθρώπινος παράγοντας στην κυβερνοασφάλεια, γνωστικές αδυναμίες και behavioral patterns.</li>
+                        <li><strong>Linux Server Hardening & Security Implementation:</strong> access control policies, user/permission management, kernel hardening, logging/monitoring και surface reduction.</li>
+                        <li><strong>SSID Confusion Attack Analysis:</strong> μελέτη εφικτότητας σε Raspberry Pi και ανάλυση roaming/network identification.</li>
+                        <li><strong>WPA Network Fuzzing:</strong> χρήση WPAXFuzz για έλεγχο ανθεκτικότητας access points σε malformed management frames.</li>
+                    </ul>
+                `
+            },
+            {
+                id: "offer",
+                title: "Τι προσφέρω",
+                subtitle: "Πώς βοηθάω φοιτητές",
+                content: `
+                    <ul>
+                        <li>Βοήθεια σε διπλωματικές και ακαδημαϊκές εργασίες σε security & networking</li>
+                        <li>Σχεδιασμό και υλοποίηση lab environments</li>
+                        <li>Ανάλυση επιθέσεων και αμυντικών μηχανισμών</li>
+                        <li>Καθοδήγηση σε Windows και Linux security architecture</li>
+                        <li>Mentoring σε hands-on projects</li>
+                    </ul>
+                    <p>Η προσέγγισή μου βασίζεται σε κατανόηση μηχανισμών και όχι σε αποστήθιση εργαλείων.</p>
+                `
+            },
+            {
+                id: "students",
+                title: "Για Φοιτητές",
+                subtitle: "Τεχνική υποστήριξη & consulting",
+                content: `
+                    <p>Αν είσαι φοιτητής οποιασδήποτε σχολής και χρειάζεσαι βοήθεια σε τεχνικό κομμάτι — ανεξαρτήτως επιπέδου δυσκολίας — μπορώ να σε υποστηρίξω.</p>
+                    <p><strong>Παραδείγματα:</strong></p>
+                    <blockquote>«Σπουδάζω Ψυχολογία και κάνω έρευνα αλλά δεν ξέρω πώς να στήσω σωστά ένα Google Form.»</blockquote>
+                    <ul>
+                        <li>«Πώς οργανώνονται τα δεδομένα;»</li>
+                        <li>«Πώς γίνεται η στατιστική επεξεργασία;»</li>
+                        <li>«Πώς προκύπτουν τα γραφήματα;»</li>
+                        <li>«Πώς παρουσιάζω σωστά τα αποτελέσματα;»</li>
+                    </ul>
+                    <p><strong>Ή γενικότερα:</strong></p>
+                    <ul>
+                        <li>Σχεδιασμός και υλοποίηση ερευνητικών εργαλείων</li>
+                        <li>Δομή και ανάλυση δεδομένων</li>
+                        <li>Τεχνική υποστήριξη για εργασίες</li>
+                        <li>Καθοδήγηση σε projects</li>
+                        <li>Technical consulting για φοιτητικές ή ακαδημαϊκές ανάγκες</li>
+                    </ul>
+                    <p>Στείλε μου το αίτημά σου με μια σύντομη περιγραφή και θα σου απαντήσω το συντομότερο δυνατό.</p>
+                `
+            }
+        ]
     }

+};
+
+let currentLang = "el";
+let activeSectionId = "about";
+
+const languageToggle = document.getElementById("languageToggle");
+const logoHintNode = document.getElementById("logoHint");
+const nameNode = document.getElementById("name");
+const titleNode = document.getElementById("title");
+const introNode = document.getElementById("intro");
+const ctaBtnNode = document.getElementById("githubBtn");
+const helpBtnNode = document.getElementById("helpBtn");
+const aiNoteNode = document.getElementById("aiNote");
+const sectionsTitleNode = document.getElementById("sectionsTitle");
+const cardsNode = document.getElementById("cards");
+const detailsTitleNode = document.getElementById("detailsTitle");
+const detailsContentNode = document.getElementById("detailsContent");
+
+function render() {
+    const locale = profile[currentLang];
+    const existingIds = locale.sections.map((section) => section.id);
+
+    if (!existingIds.includes(activeSectionId)) {
+        activeSectionId = locale.sections[0].id;
     }
+
+    document.documentElement.lang = locale.htmlLang;
+    languageToggle.textContent = locale.toggleLabel;
+    languageToggle.setAttribute("aria-label", locale.toggleAria);
+    logoHintNode.textContent = locale.logoHint;
+    nameNode.textContent = locale.name;
+    titleNode.textContent = locale.title;
+    introNode.textContent = locale.intro;
+    ctaBtnNode.textContent = locale.ctaGithub;
+    helpBtnNode.textContent = locale.ctaHelp;
+    aiNoteNode.textContent = locale.aiNote;
+    sectionsTitleNode.textContent = locale.sectionsTitle;
+    cardsNode.setAttribute("aria-label", locale.sectionsAria);
+
+    cardsNode.innerHTML = "";
+
+    locale.sections.forEach((section) => {
+        const isActive = section.id === activeSectionId;
+
+        const card = document.createElement("button");
+        card.className = `card ${isActive ? "active" : ""}`;
+        card.type = "button";
+        card.setAttribute("role", "tab");
+        card.setAttribute("aria-selected", String(isActive));
+        card.innerHTML = `
+            <span class="card-title">${section.title}</span>
+            <span class="card-subtitle">${section.subtitle}</span>
+        `;
+
+        card.addEventListener("click", () => {
+            activeSectionId = section.id;
+            render();
+        });
+
+        cardsNode.appendChild(card);
+    });
+
+    const selected = locale.sections.find((s) => s.id === activeSectionId) || locale.sections[0];
+    detailsTitleNode.textContent = selected.title;
+    detailsContentNode.innerHTML = selected.content;
 }
+
+cardsNode.addEventListener("keydown", (event) => {
+    if (!event.target.classList.contains("card")) {
+        return;
+    }
+
+    const locale = profile[currentLang];
+    const currentIndex = locale.sections.findIndex((s) => s.id === activeSectionId);
+
+    if (event.key === "ArrowRight") {
+        const next = (currentIndex + 1) % locale.sections.length;
+        activeSectionId = locale.sections[next].id;
+        render();
+        cardsNode.children[next]?.focus();
+        event.preventDefault();
+    }
+
+    if (event.key === "ArrowLeft") {
+        const prev = (currentIndex - 1 + locale.sections.length) % locale.sections.length;
+        activeSectionId = locale.sections[prev].id;
+        render();
+        cardsNode.children[prev]?.focus();
+        event.preventDefault();
+    }
+});
+
+helpBtnNode.addEventListener("click", () => {
+    activeSectionId = "students";
+    render();
+    document.getElementById("details").scrollIntoView({ behavior: "smooth", block: "start" });
+});
+
+languageToggle.addEventListener("click", () => {
+    currentLang = currentLang === "el" ? "en" : "el";
+    render();
+});
+
+render();
