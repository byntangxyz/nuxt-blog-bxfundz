export const navbarData = {
  homeTitle: "BxFundz's Blog",
}

export const footerData = {
  author: 'byntangxyz',
  aboutAuthor:
    'Hi! I am byntangxyz, a Tech enthusiast, Web Developers and A.I & Network engineer. Currently attends SMKN2 Depok.',
  authorInterest:
    "Aku hanya manusia biasa makan nasi (jokowi said). Saya baru-baru ini tertarik pada Web Development dan sedikit A.I engineering. Kedepannya mungkin saya akan berbagi info, tips, tutor atau rekomendasi di blog ini",
  aboutTheSite:
    "Personal blog site byntangxyz",
}

export const homePage = {
  title: 'Welcome To My BxFundz Blog',
  description:
    'Dapatkan informasi random dan sesuatu yang mungkin berguna disini! Blog ini akan ada konten jika aku gabut.😁',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Disini berisi blog gabut buatan saya, "Maaf kalo salah".',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Dibawah ini adalah beberapa kategori yang saya kelompokan sesuai temanya, "Maaf kalo salah".',
}

export const aboutPage = {
  title: 'Bintang Maulana M',
  description: 'A.I & Network Engineer, Tech Ethusiast, Website Developer.',
  aboutMe:
    "Halo dunia! saya adalah manusia biasa! gatau sya mau ngetik apa.",
}

export const seoData = {
  title: `BxFundz Blog | BxFundz Blog`,
  ogTitle: `Blog GJLS - BxFundzs Blog | BxFundz's Blog`,
  description: `Hi I am Bintang. - BxFundzs Blog | BxFundz's Blog`,
  twitterDescription: `BxFundz's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - BxFundzs Blog | BxFundz's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://bxfundz.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'bintangmurtifandy@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
