import React from 'react';

import './style.scss';

const Bookmark = (): JSX.Element => (
  <section className="relative z-50 flex justify-center flex-wrap items-center">
    <a className="bmk btn box-shadow-none" href="https://mail.poscye.com/SOGo">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/email.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://mail.protonmail.com">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/protonmail.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://reddit.com">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/reddit.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://youtube.com">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/youtube.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://open.spotify.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/spotify.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://tunein.com/radio/home/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/tunein.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://news.ycombinator.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/hackernews.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://www.github.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/github.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://chat.openai.com/chat">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/tg.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://www.notion.so">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/notion.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://excalidraw.com">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/excalidraw.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://app.crowdsec.net/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/crowdsec.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://cloud2.influxdata.com/signup">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/influxdb.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://poscye.grafana.net/login">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/grafana.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://www.typescriptlang.org/docs/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/typescript.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://nodejs.org/en/docs/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/nodejs.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://reactjs.org/docs/getting-started.html">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/react.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://nextjs.org/docs/getting-started">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/nextjs.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://www.rust-lang.org/learn">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/rust.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://www.apollographql.com/docs/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/apollo-graphql.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://jestjs.io/docs/getting-started">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/jest.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://lodash.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/lodash.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://webpack.js.org/concepts/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/webpack.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://tailwindcss.com/docs">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/tailwind.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://heroicons.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/heroicons.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://primer.style/css/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/primer.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://docs.docker.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/docker.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://kubernetes.io/docs/home/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/kubernets.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://console.hetzner.cloud">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/hetzner.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://my.vultr.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/vultr.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://vercel.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/vercel.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://poscye.signin.aws.amazon.com/console">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/aws.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://dash.cloudflare.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/cloudflare.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://my.sendinblue.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/sendingblue.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://ap.www.namecheap.com/dashboard">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/namecheap.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://wiki.archlinux.org/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/archlinux.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://web.telegram.org/k/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/telegram.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://web.whatsapp.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/whatsapp.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://discord.com/app">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/discord.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://newegg.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/newegg.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://ebay.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/ebay.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://libgen.fun/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/libgen.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://1337x.to">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/1337x.svg`} width="25"/>
    </a>
    {/* <a className="bmk btn box-shadow-none" href="https://torrentgalaxy.pw">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/tg.svg`} width="25"/>
    </a> */}
    {/* <a className="bmk btn box-shadow-none" href="https://onehack.us/">OneHack</a> */}
  </section>
);

export default Bookmark;
