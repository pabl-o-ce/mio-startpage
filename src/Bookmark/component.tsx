import React from 'react';

import './style.scss';

const Bookmark = (): JSX.Element => (
  <section className="app-bookmark d-flex flex-justify-center flex-wrap">
    <div>

    </div>
    <a className="bmk btn box-shadow-none" href="https://outlook.office.com/mail/inbox">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/email.svg`} width="25"/>
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
    <a className="bmk btn box-shadow-none" href="https://primer.style/css/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/primer.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://my.vultr.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/vultr.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://poscye.signin.aws.amazon.com/console">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/aws.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://dash.cloudflare.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/cloudflare.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://ap.www.namecheap.com/dashboard">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/namecheap.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://wiki.archlinux.org/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/archlinux.svg`} width="25"/>
    </a>
    <a className="bmk btn box-shadow-none" href="https://web.whatsapp.com/">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/whatsapp.svg`} width="25"/>
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
    <a className="bmk btn box-shadow-none" href="https://torrentgalaxy.pw">
      <img className="icon-bookmark" src={`${process.env.PUBLIC_URL}/assets/img/tg.svg`} width="25"/>
    </a>
    {/* <a className="bmk btn box-shadow-none" href="https://onehack.us/">OneHack</a> */}
  </section>
);

export default Bookmark;
