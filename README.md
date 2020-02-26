![github pages](https://github.com/ukitomato/portfolio/workflows/github%20pages/badge.svg)
[![Build Status](https://travis-ci.com/ukitomato/portfolio.svg?branch=master)](https://travis-ci.com/ukitomato/portfolio)
[![CircleCI](https://circleci.com/gh/ukitomato/portfolio.svg?style=shield)](https://circleci.com/gh/ukitomato/portfolio)
# Portfolio
This is my portfolio developed by React.
I'm testing various tools and services.
## Architecture
- Language:
    - [React](https://reactjs.org)
    - [NodeJS](https://nodejs.org): v12.x
    - [TypeScript](https://www.typescriptlang.org)
- Hosting:
    - [Github Pages](https://pages.github.com): https://gh.ukitomato.codes/portfolio
    - [Firebase Hosting](https://firebase.google.com/docs/hosting): https://portfolio-ukitomato.firebaseapp.com
    - [Nginx](https://nginx.org) on [CentOS 8 Stream](https://www.centos.org) at My Home Server: https://ukitomato.codes

- CI/CD:
    - [Github Actions](https://github.co.jp/features/actions) → (Testing) → (Building) → (Deploying) → Github Pages
    - [Travis CI](https://travis-ci.com) → (Testing) → (Building) → (Deploying) → Firebase Hosting
    - [Circle CI](https://circleci.com) → (Testing) → (Updating) → My Home Server

## Tools
- Editor: WebStorm
- Design: Adobe XD

