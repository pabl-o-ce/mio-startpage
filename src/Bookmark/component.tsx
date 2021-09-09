import React from 'react';

import './style.scss';

const Bookmark: React.FC = () => (
  <section className="app-bookmark d-flex flex-justify-center flex-wrap pb-6">
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://outlook.office.com/mail/inbox">Email</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://reddit.com">Reddit</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://youtube.com">YouTube</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://news.ycombinator.com/">HackerNews</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://www.github.com/">GitHub</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://my.vultr.com/">Vultr</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://poscye.signin.aws.amazon.com/console">AWS</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://dash.cloudflare.com/">CloudFlare</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://ap.www.namecheap.com/dashboard">NameCheap</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://wiki.archlinux.org/">ArchWiki</a>
    {/* <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="http://libgen.rs/">LibraryGenesis</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://torrentgalaxy.pw">TorrentGalaxy</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://onehack.us/">OneHack</a> */}
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://amazon.com/">Amazon</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://newegg.com/">NewEgg</a>
    <a className="btn btn-outline mt-3 mr-4 box-shadow-none pt-3 pb-3 pl-5 pr-5" href="https://ebay.com/">EBay</a>
  </section>
);

export default Bookmark;
