import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЭкоРеклама — Легальная реклама на асфальте в Санкт-Петербурге",
  description:
    "Первый сервис легальной экологичной рекламы на асфальте в Санкт-Петербурге. Водосмываемые трафареты, без штрафов, с гарантией результата.",
  keywords: [
    "реклама на асфальте",
    "экореклама",
    "трафаретная реклама",
    "Санкт-Петербург",
    "легальная реклама",
    "экологичная реклама",
  ],
  openGraph: {
    title: "ЭкоРеклама — Легальная реклама на асфальте",
    description: "Первый в Петербурге. Законно. Экологично. Заметно.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased" suppressHydrationWarning>
      <head>
        <meta name="yandex-verification" content="abbb1e5377257b6d" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){var d={"--c-primary":"#88D99E","--c-on-primary":"#00391A","--c-primary-ctr":"#005228","--c-on-primary-ctr":"#A4F5B8","--c-secondary":"#B4CDBA","--c-on-secondary":"#203528","--c-secondary-ctr":"#374B3E","--c-on-secondary-ctr":"#D0E9D6","--c-tertiary":"#A5CCDF","--c-on-tertiary":"#073543","--c-tertiary-ctr":"#244C5B","--c-on-tertiary-ctr":"#C1E8FB","--c-surface":"#111411","--c-on-surface":"#DFE4DD","--c-on-surface-v":"#BFC8BD","--c-srf-lowest":"#0C0F0C","--c-srf-low":"#191C19","--c-srf-ctr":"#1D201D","--c-srf-high":"#282B27","--c-srf-highest":"#323632","--c-srf-dim":"#111411","--c-outline":"#8B938A","--c-outline-v":"#414941","--c-inv-surface":"#DFE4DD","--c-inv-on-surface":"#2E312E","--c-inv-primary":"#1B6B3A","--c-error":"#FFB4AB","--c-on-error":"#690005"};var s=document.documentElement.style;for(var k in d)s.setProperty(k,d[k])}else if(t==='light'){var l={"--c-primary":"#1B6B3A","--c-on-primary":"#FFFFFF","--c-primary-ctr":"#D7F2DF","--c-on-primary-ctr":"#00210D","--c-secondary":"#4E6355","--c-on-secondary":"#FFFFFF","--c-secondary-ctr":"#D0E9D6","--c-on-secondary-ctr":"#0B1F14","--c-tertiary":"#3D6373","--c-on-tertiary":"#FFFFFF","--c-tertiary-ctr":"#C1E8FB","--c-on-tertiary-ctr":"#001F2A","--c-surface":"#FFFFFF","--c-on-surface":"#1A1C1A","--c-on-surface-v":"#6B7770","--c-srf-lowest":"#FFFFFF","--c-srf-low":"#F5F7F4","--c-srf-ctr":"#EFF1EE","--c-srf-high":"#E8EBE7","--c-srf-highest":"#DFE2DD","--c-srf-dim":"#D7DCD5","--c-outline":"#9EA69D","--c-outline-v":"#C5CDC3","--c-inv-surface":"#2E312E","--c-inv-on-surface":"#EFF2EC","--c-inv-primary":"#88D99E","--c-error":"#BA1A1A","--c-on-error":"#FFFFFF"};var s=document.documentElement.style;for(var k in l)s.setProperty(k,l[k])}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108548183','ym');ym(108548183,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108548183"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
