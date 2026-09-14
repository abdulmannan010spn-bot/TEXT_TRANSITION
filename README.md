# Skadoosh Text Animation

A minimal text-reveal animation built with GSAP. Each letter of the heading splits into its own `<span>` and animates in with a staggered slide-up + fade-in effect.

## ✨ Features

- Splits heading text into individual animated letters
- Smooth staggered entrance animation powered by [GSAP](https://gsap.com/)
- Clean, centered full-screen layout
- Styled with the elegant **Bodoni Moda** Google Font

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox)
- JavaScript (Vanilla)
- [GSAP 3.13](https://gsap.com/) + ScrollTrigger
- [Remix Icon](https://remixicon.com/)

## 📂 Project Structure

```
├── index.html      # Markup
├── index.css       # Styling
└── index.js        # Text-splitting & GSAP animation logic
```

## 🎬 How It Works

`index.js` grabs the `.text` element, splits its content into individual characters, and wraps each in a `<span>`. GSAP's `from()` method then animates these spans from `y: 100, opacity: 0` into their natural position with a `0.2s` stagger between each letter, creating a cascading reveal effect.

## ✏️ Customization

- Change the animated text by editing the `<h1 class="text">` content in `index.html`.
- Adjust animation timing (`duration`, `delay`, `stagger`) in `index.js`.
- Update font size/family in `index.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
