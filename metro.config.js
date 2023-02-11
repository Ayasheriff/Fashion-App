/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
      resolver: {
        sourceExts: ['jsx', 'js', 'svg', 'png', 'jpg', 'cjs'],
        // assetExts: assetExts.filter(ext => ext !== 'svg'),
        resolverMainFields: ['sbmodern', 'browser', 'main'],
      },
    }),
  },
};
