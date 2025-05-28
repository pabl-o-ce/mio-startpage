<script lang="ts">
const bookmarks = [
  {
    title: "Email",
    url: "https://mail.poscye.com/SOGo",
    icon: "email.svg",
  },
  {
    title: "ProtonMail",
    url: "https://mail.protonmail.com",
    icon: "protonmail.svg",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    icon: "reddit.svg",
  },
  {
    title: "YouTube",
    url: "https://youtube.com",
    icon: "youtube.svg",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/",
    icon: "spotify.svg",
  },
  {
    title: "TuneIn",
    url: "https://tunein.com/radio/home/",
    icon: "tunein.svg",
  },
  {
    title: "Hacker News",
    url: "https://news.ycombinator.com/",
    icon: "hackernews.svg",
  },
  {
    title: "GitHub",
    url: "https://www.github.com/",
    icon: "github.svg",
  },
  {
    title: "Chat",
    url: "https://chat.openai.com/chat",
    icon: "tg.svg",
  },
  {
    title: "Claude",
    url: "https://claude.ai/chat",
    icon: "tg.svg",
  },
  {
    title: "GoogleGeminiChat",
    url: "https://gemini.google.com",
    icon: "tg.svg",
  },
  {
    title: "MistralChat",
    url: "https://chat.mistral.ai",
    icon: "tg.svg",
  },
  {
    title: "HuggingChat",
    url: "https://huggingface.co/chat/",
    icon: "tg.svg",
  },
  {
    title: "Perplexity",
    url: "https://labs.perplexity.ai/",
    icon: "tg.svg",
  },
  {
    title: "Notion",
    url: "https://www.notion.so",
    icon: "notion.svg",
  },
  {
    title: "Excalidraw",
    url: "https://excalidraw.com",
    icon: "excalidraw.svg",
  },
  {
    title: "CrowdSec",
    url: "https://app.crowdsec.net/",
    icon: "crowdsec.svg",
  },
  {
    title: "InfluxDB",
    url: "https://cloud2.influxdata.com/signup",
    icon: "influxdb.svg",
  },
  {
    title: "Grafana",
    url: "https://poscye.grafana.net/login",
    icon: "grafana.svg",
  },
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/docs/",
    icon: "typescript.svg",
  },
  {
    title: "Node.js",
    url: "https://nodejs.org/en/docs/",
    icon: "nodejs.svg",
  },
  {
    title: "React",
    url: "https://reactjs.org/docs/getting-started.html",
    icon: "react.svg",
  },
  {
    title: "Next.js",
    url: "https://nextjs.org/docs/getting-started",
    icon: "nextjs.svg",
  },
  {
    title: "Rust",
    url: "https://www.rust-lang.org/learn",
    icon: "rust.svg",
  },
  {
    title: "Apollo GraphQL",
    url: "https://www.apollographql.com/docs/",
    icon: "apollo-graphql.svg",
  },
  {
    title: "Jest",
    url: "https://jestjs.io/docs/getting-started",
    icon: "jest.svg",
  },
  {
    title: "Lodash",
    url: "https://lodash.com/",
    icon: "lodash.svg",
  },
  {
    title: "Webpack",
    url: "https://webpack.js.org/concepts/",
    icon: "webpack.svg",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    icon: "tailwind.svg",
  },
  {
    title: "Heroicons",
    url: "https://heroicons.com/",
    icon: "heroicons.svg",
  },
  {
    title: "Primer CSS",
    url: "https://primer.style/css/",
    icon: "primer.svg",
  },
  {
    title: "Docker",
    url: "https://docs.docker.com/",
    icon: "docker.svg",
  },
  {
    title: "Kubernetes",
    url: "https://kubernetes.io/docs/home/",
    icon: "kubernets.svg",
  },
  {
    title: "Hetzner",
    url: "https://console.hetzner.cloud",
    icon: "hetzner.svg",
  },
  {
    title: "Vultr",
    url: "https://my.vultr.com/",
    icon: "vultr.svg",
  },
  {
    title: "Vercel",
    url: "https://vercel.com/",
    icon: "vercel.svg",
  },
  {
    title: "AWS",
    url: "https://poscye.signin.aws.amazon.com/console",
    icon: "aws.svg",
  },
  {
    title: "Cloudflare",
    url: "https://dash.cloudflare.com/",
    icon: "cloudflare.svg",
  },
  {
    title: "Sendinblue",
    url: "https://my.sendinblue.com/",
    icon: "sendingblue.svg",
  },
  {
    title: "NixOS",
    url: "https://wiki.nixos.org/wiki/NixOS_Wiki",
    icon: "nixos.svg",
  },
  {
    title: "Arch Linux",
    url: "https://wiki.archlinux.org/",
    icon: "archlinux.svg",
  },
  {
    title: "Telegram",
    url: "https://web.telegram.org/k/",
    icon: "telegram.svg",
  },
  {
    title: "WhatsApp",
    url: "https://web.whatsapp.com/",
    icon: "whatsapp.svg",
  },
  {
    title: "Discord",
    url: "https://discord.com/app",
    icon: "discord.svg",
  },
  {
    title: "Newegg",
    url: "https://newegg.com/",
    icon: "newegg.svg",
  },
  {
    title: "eBay",
    url: "https://ebay.com/",
    icon: "ebay.svg",
  },
  {
    title: "Library Genesis",
    url: "https://libgen.fun/",
    icon: "libgen.svg",
  },
  {
    title: "1337x",
    url: "https://1337x.to",
    icon: "1337x.svg",
  },
];

</script>

<section class="w-full max-h-60 relative z-50 flex flex-col justify-start flex-wrap items-center">
    {#each bookmarks as { title, url, icon }, i}
        <a class="mb-[15px] mr-3.5 btn box-shadow-none" href={url}>
            <img class="icon-bookmark" src={`/img/${icon}`} width="25" alt={title}/>
        </a>
    {/each}
</section>