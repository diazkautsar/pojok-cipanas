const path = require('path')
const withPWA = require('next-pwa')

const config = {
  pwa: {
    disable: true,
    dest: 'public',
    maximumFileSizeToCacheInBytes: 5000000
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname),
      "@components": path.join(__dirname, "components"),
      "@icons": path.join(__dirname, "components", "icons"),
    };

    return config;
  },
};

module.exports = withPWA(config);