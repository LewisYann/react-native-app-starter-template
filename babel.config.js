module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src/*': './src',
          '@components/*': './src/components',
          '@constants/*': './src/constants',
          '@navigation/*': './src/navigation',
          '@screens/*': './src/screens',
          '@utils/*': './src/utils',
          '@theme/*': './src/theme',
        },
      },
    ],
  ],
};
