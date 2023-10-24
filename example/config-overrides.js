/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const {
  overrideDevServer,
  override,
  addDecoratorsLegacy,
  disableEsLint,
  useBabelRc,
  addWebpackAlias,
  addBabelPlugin,
  addWebpackPlugin,
  // setWebpackPublicPath
} = require('customize-cra');
const WebpackBar = require('webpackbar')
const styleLoder = require("./styleLoader");

const devServerCorsPlugin = () => config => ({
  ...config,
  port: process.env.PORT,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

const packageName = require('./package.json').name

const libraryTargetPlugin = () => config => {
  const copyConfig = { ...config }
  copyConfig.output.library = `${packageName}`
  copyConfig.output.libraryTarget = 'umd'
  copyConfig.output.jsonpFunction = `webpackJsonp_${packageName}`
  // 禁用 ModuleScopePlugin
  copyConfig.resolve.plugins = copyConfig.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )
  // copyConfig.output.publicPath = process.env.PUBLIC_URL
  return config
}

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: override(
    libraryTargetPlugin(),
    useBabelRc(),
    addDecoratorsLegacy(),
    disableEsLint(),
    styleLoder({
      sourceMap: false,
      javascriptEnabled: true,
      modifyVars: {
        '@dark-color': 'rgba(0,0,0,0.65)',
        '@light-color': 'rgba(0,0,0,0.45)',
        '@placeholder': 'rgba(0,0,0,0.25)',
        '@layout-header-background': '#FFFFFF',
        '@font-family': 'PingFang SC',
        '@card-shadow': '0px 10px 20px 0px rgba(151,151,151,0.12)',
        '@border': 'solid 1px rgba(0,0,0,0.1)',
        '@black-1': 'rgba(0, 0, 0, 1)',
        '@black-2': 'rgba(0, 0, 0, 0.85)',
        '@black-3': 'rgba(0, 0, 0, 0.65)',
        '@black-4': 'rgba(0, 0, 0, 0.45)',
        '@primary-color': '#4b4c65',
        '@darker-color': 'rgba(0,0,0,0.85)',
        '@dark-color': 'rgba(0,0,0,0.65)',
        '@light-color': 'rgba(0,0,0,0.45)',
        '@layout-header-background': '#FFFFFF',
        '@font-family': 'PingFang SC',
        '@card-shadow': '0px 10px 20px 0px rgba(151,151,151,0.12)',
        '@border': 'solid 1px rgba(0,0,0,0.1)',
        '@border-radius-base': '4px',
      },
    }),
    addWebpackAlias({
      'react': path.resolve(__dirname, 'node_modules/react'),
      '@': path.resolve(__dirname, './src'),
      'watermark': path.resolve(__dirname, '../lib/index.js'),
    }),
    addWebpackPlugin(new WebpackBar()),
  ),
  devServer: overrideDevServer(devServerCorsPlugin())
};

