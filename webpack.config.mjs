import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  favicon: './src/favicon.ico',
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
});

export default () => {
  return {
    resolve: {
      fallback: {
        domain: path.resolve(path.dirname(''), 'node_modules/domain-browser'),
        buffer: path.resolve(path.dirname(''), 'node_modules/buffer'),
      },
      alias: {
        'process/browser': 'process/browser.js',
      },
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx'],
        '.mjs': ['.mjs', '.js'],
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
      fullySpecified: false,
    },
    entry: ['babel-polyfill', 'whatwg-fetch', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 100000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js or node_modules/packageName
              const match = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              );

              if (!match) {
                return 'vendor';
              }

              const packageName = match[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [
            path.resolve(path.join(__dirname, 'node_modules')),
            path.resolve(path.join(__dirname, 'src')),
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(md)$/,
          loader: 'raw-loader',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    devtool: 'source-map',
    plugins: [
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      htmlPlugin,
      miniCssExtractPlugin,
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/images', to: 'images' }],
      }),
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
  };
};
