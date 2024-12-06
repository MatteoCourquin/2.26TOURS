import Head from 'next/head';

const SEO = ({
  title = '2.26 Tours | Collectif de musique électronique parisien 🔊',
  // description = '2.26 Tours est un collectif parisien dédié aux musiques électroniques, englobant plusieurs genres tels que la Minimal, Micro, House, Tech House, Techno, Hard Techno, Hardstyle et Hardcore. Nous mettons en avant le plaisir auditif et le partage à travers des podcasts exclusifs et des événements dans la capitale française. Rejoignez-nous pour découvrir nos mixs et artistes passionnés.',
  description = 'Découvrez 2.26 Tours, collectif parisien de musiques électroniques : Minimal, House, Techno et plus. Explorez nos podcasts exclusifs et événements à Paris !',
  image = '/ogImage.png',
  url = 'https://2-26tours.vercel.app/',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="default" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="2.26 Tours" />
      <meta property="og:type" content="website" />

      {/* <meta name="google-site-verification" content="" /> */}

      <meta
        name="keywords"
        content="2.26 Tours, collectif musique électronique, Paris, Minimal, Micro, House, Tech House, Techno, Hard Techno, Hardstyle, Hardcore, événements techno, DJs, producteurs, mixs, podcasts, rave, culture électronique, scène underground, musique dance"
      />

      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
