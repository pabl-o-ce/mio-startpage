import { writable } from 'svelte/store';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  icon?: string;
  isUserDefined?: boolean;
}

const defaultBookmarks: Bookmark[] = [
  {
    id: 'default-0',
    title: "Email",
    url: "https://mail.poscye.com/SOGo",
    icon: "email.svg",
    isUserDefined: false,
  },
  {
    id: 'default-1',
    title: "ProtonMail",
    url: "https://mail.protonmail.com",
    icon: "protonmail.svg",
    isUserDefined: false,
  },
  {
    id: 'default-2',
    title: "Reddit",
    url: "https://reddit.com",
    icon: "reddit.svg",
    isUserDefined: false,
  },
  {
    id: 'default-3',
    title: "YouTube",
    url: "https://youtube.com",
    icon: "youtube.svg",
    isUserDefined: false,
  },
  {
    id: 'default-4',
    title: "Spotify",
    url: "https://open.spotify.com/",
    icon: "spotify.svg",
    isUserDefined: false,
  },
  {
    id: 'default-5',
    title: "TuneIn",
    url: "https://tunein.com/radio/home/",
    icon: "tunein.svg",
    isUserDefined: false,
  },
  {
    id: 'default-6',
    title: "Hacker News",
    url: "https://news.ycombinator.com/",
    icon: "hackernews.svg",
    isUserDefined: false,
  },
  {
    id: 'default-7',
    title: "GitHub",
    url: "https://www.github.com/",
    icon: "github.svg",
    isUserDefined: false,
  },
  {
    id: 'default-8',
    title: "Chat",
    url: "https://chat.openai.com/chat",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-9',
    title: "Claude",
    url: "https://claude.ai/chat",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-10',
    title: "GoogleGeminiChat",
    url: "https://gemini.google.com",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-11',
    title: "MistralChat",
    url: "https://chat.mistral.ai",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-12',
    title: "HuggingChat",
    url: "https://huggingface.co/chat/",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-13',
    title: "Perplexity",
    url: "https://labs.perplexity.ai/",
    icon: "tg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-14',
    title: "Notion",
    url: "https://www.notion.so",
    icon: "notion.svg",
    isUserDefined: false,
  },
  {
    id: 'default-15',
    title: "Excalidraw",
    url: "https://excalidraw.com",
    icon: "excalidraw.svg",
    isUserDefined: false,
  },
  {
    id: 'default-16',
    title: "CrowdSec",
    url: "https://app.crowdsec.net/",
    icon: "crowdsec.svg",
    isUserDefined: false,
  },
  {
    id: 'default-17',
    title: "InfluxDB",
    url: "https://cloud2.influxdata.com/signup",
    icon: "influxdb.svg",
    isUserDefined: false,
  },
  {
    id: 'default-18',
    title: "Grafana",
    url: "https://poscye.grafana.net/login",
    icon: "grafana.svg",
    isUserDefined: false,
  },
  {
    id: 'default-19',
    title: "TypeScript",
    url: "https://www.typescriptlang.org/docs/",
    icon: "typescript.svg",
    isUserDefined: false,
  },
  {
    id: 'default-20',
    title: "Node.js",
    url: "https://nodejs.org/en/docs/",
    icon: "nodejs.svg",
    isUserDefined: false,
  },
  {
    id: 'default-21',
    title: "React",
    url: "https://reactjs.org/docs/getting-started.html",
    icon: "react.svg",
    isUserDefined: false,
  },
  {
    id: 'default-22',
    title: "Next.js",
    url: "https://nextjs.org/docs/getting-started",
    icon: "nextjs.svg",
    isUserDefined: false,
  },
  {
    id: 'default-23',
    title: "Rust",
    url: "https://www.rust-lang.org/learn",
    icon: "rust.svg",
    isUserDefined: false,
  },
  {
    id: 'default-24',
    title: "Apollo GraphQL",
    url: "https://www.apollographql.com/docs/",
    icon: "apollo-graphql.svg",
    isUserDefined: false,
  },
  {
    id: 'default-25',
    title: "Jest",
    url: "https://jestjs.io/docs/getting-started",
    icon: "jest.svg",
    isUserDefined: false,
  },
  {
    id: 'default-26',
    title: "Lodash",
    url: "https://lodash.com/",
    icon: "lodash.svg",
    isUserDefined: false,
  },
  {
    id: 'default-27',
    title: "Webpack",
    url: "https://webpack.js.org/concepts/",
    icon: "webpack.svg",
    isUserDefined: false,
  },
  {
    id: 'default-28',
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    icon: "tailwind.svg",
    isUserDefined: false,
  },
  {
    id: 'default-29',
    title: "Heroicons",
    url: "https://heroicons.com/",
    icon: "heroicons.svg",
    isUserDefined: false,
  },
  {
    id: 'default-30',
    title: "Primer CSS",
    url: "https://primer.style/css/",
    icon: "primer.svg",
    isUserDefined: false,
  },
  {
    id: 'default-31',
    title: "Docker",
    url: "https://docs.docker.com/",
    icon: "docker.svg",
    isUserDefined: false,
  },
  {
    id: 'default-32',
    title: "Kubernetes",
    url: "https://kubernetes.io/docs/home/",
    icon: "kubernets.svg",
    isUserDefined: false,
  },
  {
    id: 'default-33',
    title: "Hetzner",
    url: "https://console.hetzner.cloud",
    icon: "hetzner.svg",
    isUserDefined: false,
  },
  {
    id: 'default-34',
    title: "Vultr",
    url: "https://my.vultr.com/",
    icon: "vultr.svg",
    isUserDefined: false,
  },
  {
    id: 'default-35',
    title: "Vercel",
    url: "https://vercel.com/",
    icon: "vercel.svg",
    isUserDefined: false,
  },
  {
    id: 'default-36',
    title: "AWS",
    url: "https://poscye.signin.aws.amazon.com/console",
    icon: "aws.svg",
    isUserDefined: false,
  },
  {
    id: 'default-37',
    title: "Cloudflare",
    url: "https://dash.cloudflare.com/",
    icon: "cloudflare.svg",
    isUserDefined: false,
  },
  {
    id: 'default-38',
    title: "Sendinblue",
    url: "https://my.sendinblue.com/",
    icon: "sendingblue.svg",
    isUserDefined: false,
  },
  {
    id: 'default-39',
    title: "NixOS",
    url: "https://wiki.nixos.org/wiki/NixOS_Wiki",
    icon: "nixos.svg",
    isUserDefined: false,
  },
  {
    id: 'default-40',
    title: "Arch Linux",
    url: "https://wiki.archlinux.org/",
    icon: "archlinux.svg",
    isUserDefined: false,
  },
  {
    id: 'default-41',
    title: "Telegram",
    url: "https://web.telegram.org/k/",
    icon: "telegram.svg",
    isUserDefined: false,
  },
  {
    id: 'default-42',
    title: "WhatsApp",
    url: "https://web.whatsapp.com/",
    icon: "whatsapp.svg",
    isUserDefined: false,
  },
  {
    id: 'default-43',
    title: "Discord",
    url: "https://discord.com/app",
    icon: "discord.svg",
    isUserDefined: false,
  },
  {
    id: 'default-44',
    title: "Newegg",
    url: "https://newegg.com/",
    icon: "newegg.svg",
    isUserDefined: false,
  },
  {
    id: 'default-45',
    title: "eBay",
    url: "https://ebay.com/",
    icon: "ebay.svg",
    isUserDefined: false,
  },
  {
    id: 'default-46',
    title: "Library Genesis",
    url: "https://libgen.fun/",
    icon: "libgen.svg",
    isUserDefined: false,
  },
  {
    id: 'default-47',
    title: "1337x",
    url: "https://1337x.to",
    icon: "1337x.svg",
    isUserDefined: false,
  },
];

export { defaultBookmarks }; // Export for testing or other external use

const initialBookmarks = (): Bookmark[] => {
  if (typeof localStorage !== 'undefined') {
    const storedBookmarks = localStorage.getItem('mio-startpage-bookmarks');
    if (storedBookmarks) {
      try {
        const parsedBookmarks = JSON.parse(storedBookmarks);
        // Basic validation: check if it's an array
        if (Array.isArray(parsedBookmarks)) {
          return parsedBookmarks;
        }
      } catch (error) {
        console.error("Error parsing bookmarks from localStorage:", error);
        // Fallback to default if parsing fails or data is not an array
      }
    }
  }
  return defaultBookmarks;
};

const createBookmarkStore = () => {
  const { subscribe, set, update } = writable<Bookmark[]>(initialBookmarks());

  subscribe(currentBookmarks => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mio-startpage-bookmarks', JSON.stringify(currentBookmarks));
    }
  });

  return {
    subscribe,
    addBookmark: (title: string, url: string, icon?: string) => {
      const newBookmark: Bookmark = {
        id: `user-${Date.now()}`,
        title,
        url,
        icon,
        isUserDefined: true,
      };
      update(bookmarks => [...bookmarks, newBookmark]);
    },
    editBookmark: (id: string, updates: Partial<Omit<Bookmark, 'id' | 'isUserDefined'>>) => {
      update(bookmarks =>
        bookmarks.map(bookmark =>
          bookmark.id === id ? { ...bookmark, ...updates } : bookmark
        )
      );
    },
    deleteBookmark: (id: string) => {
      update(bookmarks => bookmarks.filter(bookmark => bookmark.id !== id));
    },
    set, // exposing set for potential direct manipulation if needed, though using methods is preferred
  };
};

export const bookmarks = createBookmarkStore();

// Export management functions directly for convenience
export const addBookmark = bookmarks.addBookmark;
export const editBookmark = bookmarks.editBookmark;
export const deleteBookmark = bookmarks.deleteBookmark;
