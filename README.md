# [nakoutsi.github.io](https://nakoutsi.github.io/)
# Petros Nakoutsi — Personal Site

This repository contains the source code of my personal website.

The site presents:
- Academic and research path
- Ongoing thesis work
- Security & networking projects
- Technical mentoring offering
- Startup involvement (AroundU)

---

## 🧠 Philosophy

The site is designed around:

- Mechanism-first understanding
- Structured content rendering
- Version-safe bilingual architecture
- Minimal but scalable UI

It is fully dynamic through a structured JavaScript profile object.
No hardcoded content exists in the HTML.

---

## 🏗 Architecture

The project is intentionally simple:

- `index.html` → structural skeleton
- `style.css` → visual system & design language
- `script.js` → dynamic content engine

All sections are rendered from a structured `profile` object:

```js
profile = {
    en: { sections: [...] },
    el: { sections: [...] }
}
