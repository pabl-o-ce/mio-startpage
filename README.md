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
- ✨ **Customizable Bookmarks**: Easily add, edit, and delete your own bookmarks. Your bookmarks are saved locally in your browser.

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

## 🧩 Features in Detail

### Keyboard Shortcuts

- `/` - Focus search bar
- `Esc` - Clear search
- More shortcuts coming soon!

### Dark Mode

Dark mode automatically syncs with your system preferences but can be toggled manually. Your preference is saved in local storage.

### Bookmark Management

You can now personalize your startpage by managing your own bookmarks:

*   **Adding Bookmarks:** Use the 'Add New Bookmark' form (usually found at the top of the bookmark section) to enter a title and URL for your new bookmark.
*   **Editing Bookmarks:** Click the 'Edit' button next to any of your custom (user-added) bookmarks to change its title or URL.
*   **Deleting Bookmarks:** Click the 'Delete' button next to a custom bookmark to remove it. A confirmation dialog will appear before deletion.
*   **Storage:** Your custom bookmarks are stored directly in your browser's local storage. This means they are private to you and your browser. Default bookmarks are provided as a starting point and cannot be edited or deleted in the same way as user-added bookmarks.

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

Made with ❤️ by PΛBLØ ᄃΞ