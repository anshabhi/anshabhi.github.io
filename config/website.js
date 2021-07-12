const meta = {
  // Metadata
  siteTitle: 'Abhinav Agarwal - Full Stack Developer & Aspiring Data Scientist',
  siteDescription:
    'Abhinav Agarwal - Highly skilled software developer with a deep passion for full stack development and machine learning.',
  siteTitleAlt: 'Abhinav Agarwal',
  siteShortName: 'Abhinav Agarwal',
  siteUrl: 'https://anuraghazra.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: '',
  googleAnalyticsID: '',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
