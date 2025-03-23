module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: { browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'] },
        modules: false,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
  env: {
    test: {
      presets: [['@babel/env'], '@babel/react'],
      plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
