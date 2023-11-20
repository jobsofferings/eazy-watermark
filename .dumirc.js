import { defineConfig } from 'dumi';

const REPO_NAME = 'eazy-watermark'

export default defineConfig({
  title: REPO_NAME,
  outputPath: 'dist',
  base: `/${REPO_NAME}/`,
  publicPath: `/${REPO_NAME}/`,
  hash: true,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/jobsofferings/eazy-watermark',
    },
  ],
});
