# VS Code Portfolio

A modern, VS Code-inspired portfolio website built with Next.js and TypeScript. This portfolio showcases your projects, articles, and professional information in a familiar IDE-like interface.


## 🌟 Features

- **VS Code-like Interface**: Familiar IDE experience with file explorer, tabs, and theme support
- **Multiple Themes**: Choose from various themes including:
  - GitHub Dark
  - Dracula
  - Night Owl
  - Nord
  - Ayu
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Project Showcase**: Display your projects with detailed information
- **Article Section**: Share your thoughts and experiences through articles
- **GitHub Integration**: Showcase your GitHub activity and repositories
- **Contact Section**: Easy way for visitors to reach out
- **Dark/Light Mode**: Toggle between dark and light themes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vscode-portfolio.git
   cd vscode-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React GitHub Calendar](https://github.com/grubersjoe/react-github-calendar) - GitHub activity visualization

## 📁 Project Structure

```
├── components/          # React components
│   ├── ArticleCard.tsx  # Article display component
│   ├── ProjectCard.tsx  # Project display component
│   ├── Layout.tsx       # Main layout component
│   └── ...
├── pages/              # Next.js pages
│   ├── _app.tsx        # App entry point
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   └── ...
├── public/             # Static assets
│   ├── logos/          # Logo images
│   └── themes/         # Theme previews
├── styles/             # CSS modules
└── types/              # TypeScript type definitions
```

## 🎨 Customization

### Adding Projects
Edit `data/projects.ts` to add your projects:
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    // ... other project details
  }
];
```

### Changing Themes
Themes can be customized in `styles/themes.css`. Each theme follows a specific color scheme structure.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �� Acknowledgments

- Original template by [Nitin Ranganath](https://github.com/itsnitinr)
- Inspired by VS Code's interface
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Theme colors from popular VS Code themes

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/vscode-portfolio](https://github.com/yourusername/vscode-portfolio)
