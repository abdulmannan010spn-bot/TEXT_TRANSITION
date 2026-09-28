<div align="center">

# ✨ Skadoosh Text Animation

A minimal text-reveal animation built with GSAP. Each letter of the heading splits into its own `<span>` and animates in with a staggered slide-up + fade-in effect.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

A small, focused GSAP experiment: a single centered heading whose letters cascade into view one after another. It's a handy starting point for hero-text intros and any letter-by-letter reveal.

## ✨ Features

- ✂️ Splits heading text into individual animated letters
- 🌊 Smooth staggered entrance animation powered by [GSAP](https://gsap.com/)
- 🖥️ Clean, centered full-screen layout
- 🔤 Styled with the elegant **Bodoni Moda** Google Font
- ⚡ No build step or framework required

## 🚀 Getting Started

### Prerequisites

Just a web browser and an internet connection (GSAP, Remix Icon, and the font load from CDNs).

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/skadoosh-text-animation.git

# Navigate into the project directory
cd skadoosh-text-animation

# Open the page directly
open index.html        # macOS
start index.html         # Windows
xdg-open index.html       # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

## 📂 Project Structure

```
├── index.html      # Markup
├── index.css       # Styling
└── index.js        # Text-splitting & GSAP animation logic
```

## 🎬 How It Works

1. `index.js` grabs the `.text` element and reads its content.
2. The text is split into individual characters, and each one is wrapped in a `<span>`.
3. GSAP's `from()` animates those spans from `y: 100, opacity: 0` into their natural position.
4. A `0.2s` stagger between letters creates the cascading reveal effect.

```js
// Simplified idea
gsap.from(".text span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
});
```

## ✏️ Customization

| What to change | Where |
|----------------|-------|
| Animated text | `<h1 class="text">` content in `index.html` |
| Timing (`duration`, `delay`, `stagger`) | `index.js` |
| Font size / family | `index.css` |

## 🛠️ Built With

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox) |
| Logic | Vanilla JavaScript |
| Animation | [GSAP 3.13](https://gsap.com/) + ScrollTrigger |
| Icons | [Remix Icon](https://remixicon.com/) |
| Typography | [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) (Google Fonts) |

## 🗺️ Possible Improvements

- [ ] Trigger the animation on scroll with ScrollTrigger
- [ ] Add a reduced-motion fallback (`prefers-reduced-motion`)
- [ ] Use GSAP's `SplitText` plugin for more robust splitting (handles spaces and line breaks)
- [ ] Add an exit animation or replay button
- [ ] Add ARIA labeling so screen readers read the heading as one word

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with ✨ and GSAP
</div>
