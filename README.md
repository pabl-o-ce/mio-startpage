# Mio Startpage 🚀

A modern, customizable browser startpage built with SvelteKit 2, Svelte 5, and TailwindCSS. Features a clean interface with dark mode support, live clock, and search functionality.

## ✨ Features

- 🎯 **Clean, Minimal Interface**: Modern and distraction-free design
- 🌓 **Dark/Light Mode**: Automatic theme switching based on system preferences
- ⌚ **Live Clock**: Real-time clock and date display
- 🔍 **Quick Search**: Instant search with keyboard shortcuts (press '/' to focus)
- ⚡ **Fast & Responsive**: Built with performance in mind
- 📱 **Mobile Friendly**: Fully responsive design
- 🛠️ **Modern Tech Stack**: Built with Svelte 5's latest features
- 🚀 **Cloudflare Pages**: Optimized for deployment on Cloudflare Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- pnpm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/pabl-o-ce/mio-startpage.git
cd mio-startpage

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Start with network access
pnpm dev --host

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Cloudflare Pages Deployment

```bash
# Preview Cloudflare Pages deployment locally
pnpm pages:preview

# Deploy to Cloudflare Pages
pnpm pages:deploy
```

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 2](https://kit.svelte.dev/)
- **UI Library**: [Svelte 5](https://svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Motion**: [svelte-motion](https://www.npmjs.com/package/svelte-motion)
- **Utilities**: 
  - [clsx](https://github.com/lukeed/clsx)
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 📦 Project Structure

```
mio-startpage/
├── src/
│   ├── components/     # Reusable components
│   ├── lib/           # Utility functions and shared code
│   ├── routes/        # SvelteKit routes
│   └── app.d.ts       # TypeScript declarations
├── static/            # Static assets
├── tests/            # Test files
└── [Configuration Files]
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Add your environment variables here
PUBLIC_SOME_KEY=your_value
```

### Customizing the Theme

Modify `tailwind.config.js` to customize colors, spacing, and other design tokens:

```javascript
module.exports = {
  theme: {
    extend: {
      // Add your customizations here
    }
  }
}
```

## 🧩 Features in Detail

### Keyboard Shortcuts

- `/` - Focus search bar
- `Esc` - Clear search
- More shortcuts coming soon!

### Dark Mode

Dark mode automatically syncs with your system preferences but can be toggled manually. Your preference is saved in local storage.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'feat: add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📝 License

[MIT License](LICENSE)

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Cloudflare](https://pages.cloudflare.com/) for the hosting platform

---

Made with ❤️ by [Your Name]