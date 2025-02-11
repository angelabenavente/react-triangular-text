# react-triangular-text [![NPM version](https://img.shields.io/npm/v/react-triangular-text.svg?style=flat)](https://www.npmjs.com/package/react-triangular-text) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](<[LICENSE](https://github.com/angelabenavente/react-triangular-text/LICENSE)>) [![NPM total downloads](https://img.shields.io/npm/dt/react-triangular-text.svg?style=flat)](https://www.npmjs.com/package/react-triangular-text)

<!-- [![NPM monthly downloads](https://img.shields.io/npm/dm/react-triangular-text.svg?style=flat)](https://www.npmjs.com/package/react-triangular-text)-->

> React utility that displays a given text in a equilateral equilateral triangle shape. The triangle will have a width size given in px. Each letter of the text is positioned and rotated around the triangle, with a calculated rotation angle to ensure the text fits perfectly.

<!-- `react-triangular-text` is a tiny library that works in all Javascript environments. -->

---

## 🚀 Features

- **Easy text arrangement**: Distributes the letters of a text string in a equilateral triangular layout within an HTML container.
- **Customizable text appearance**: Allows customization of text color, font, and font weight.
  Precise positioning: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Precise positioning**: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Support for custom fonts**: Allows you to specify a custom font if needed, in addition to standard monospaced fonts.
- **ESM and CJS support**: Fully compatible with modern module systems.

---

## 🚀 Parameters

- **text (string)**: The text to be displayed in a equilateral triangular shape.
- **size (number)**: The size of the triangle width in px where the letters will be placed (optional).
- **id (optional string)**: The ID of the HTML container element where the triangular text will be inserted.
- **options (optional object)**:
  - **color (string, default #000000)**: The text color.
  - **fontFamily (string, default "Menlo, monospace")**: he font to be used. It can be one of the following monospaced fonts:'Menlo', 'Courier New', 'Consolas', 'Lucida Console', 'Monaco', 'monospace', or "customFont" if a custom font is desired.
  - **fontWeight (number, default 400)**: The weight of the font.
  - **fontSize (number, default 16)**: The size of the font.

---

## 📦 Installation

You can install `react-triangular-text` using your favorite package manager:

```
# Using pnpm
pnpm add react-triangular-text

# Using npm
npm install react-triangular-text

# Using yarn
yarn add react-triangular-text
```

---

## 🌟 Usage

Here's how to use the library in your project:

### Import the library

```
// CommonJS
const TriangularText = require('react-triangular-text');

// ES Modules
import TriangularText from 'react-triangular-text';
```

### Basic example

```
import TriangularText from 'react-triangular-text';

 <TriangularText
    text="This words are being displayed as triangular "
    id="container2"
    options={{
      color: "black",
      fontFamily: "Menlo",
      fontWeight: 700,
      fontSize: 16,
    }}
    size={420}
  />
```

## Result

---

## 🛠️ Development

If you want to contribute or run the project locally, follow these steps:

### Clone the repository

```
git clone https://github.com/angelabenavente/react-triangular-text.git
cd react-triangular-text
```

### Install dependencies

```
npm install
```

### Run tests

```
npm run test
```

### Lint the code

```
npm run eslint
```

---

## 🔄 Changelog

See [CHANGELOG.md](https://github.com/angelabenavente/react-triangular-text/blob/main/CHANGELOG.md) for a detailed history of changes.

---

## 💡 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Submit a pull request with a clear description of the changes.

See [CONTRIBUTING.md](https://github.com/angelabenavente/react-triangular-text/blob/main/CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/angelabenavente/react-triangular-text/blob/main/LICENSE). Created with ❤️ by [Ángela Benavente](https://github.com/angelabenavente).

---

## 🌍 Links

- **GitHub Repository:** [https://github.com/angelabenavente/react-triangular-text](https://github.com/angelabenavente/react-triangular-text)

- **NPM Package:** [https://www.npmjs.com/package/react-triangular-text](https://www.npmjs.com/package/react-triangular-text)
