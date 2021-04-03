[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ukitomato/portfolio)

![github pages](https://github.com/ukitomato/portfolio/workflows/github%20pages/badge.svg)
![Azure Static Web Apps CI/CD](https://github.com/ukitomato/portfolio/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg)
[![Build Status](https://travis-ci.com/ukitomato/portfolio.svg?branch=master)](https://travis-ci.com/ukitomato/portfolio)
[![CircleCI](https://circleci.com/gh/ukitomato/portfolio.svg?style=shield)](https://circleci.com/gh/ukitomato/portfolio)

[![codecov](https://codecov.io/gh/ukitomato/portfolio/branch/master/graph/badge.svg)](https://codecov.io/gh/ukitomato/portfolio)
[![BCH compliance](https://bettercodehub.com/edge/badge/ukitomato/portfolio?branch=master)](https://bettercodehub.com/)
[![CodeScene Code Health](https://codescene.io/projects/7414/status-badges/code-health)](https://codescene.io/projects/7414)
[![CodeScene System Mastery](https://codescene.io/projects/7414/status-badges/system-mastery)](https://codescene.io/projects/7414)

# Portfolio

This is my portfolio developed by React. I'm testing various tools and services.

## Architecture

-   Language:
    -   [React](https://reactjs.org)
    -   [NodeJS](https://nodejs.org): v14.x
    -   [TypeScript](https://www.typescriptlang.org)
-   Hosting:

    -   [Nginx](https://nginx.org) on [CentOS 8 Stream](https://www.centos.org)
        at My Home Server: https://ukitomato.studio
    -   [Azure Static Web Apps](https://docs.microsoft.com/ja-jp/azure/static-web-apps):
        https://www.ukitomato.studio
    -   [AWS Amplify](https://aws.amazon.com/jp/amplify):
        https://amp.ukitomato.studio
    -   [Firebase Hosting](https://firebase.google.com/docs/hosting):
        https://fb.ukitomato.studio
    -   [Github Pages](https://pages.github.com):
        https://gh.ukitomato.studio

-   CI/CD:
    -   [Circle CI](https://circleci.com) → (Testing) → (Building) → (Deploying)
        → My Home Server
    -   [Github Actions](https://github.co.jp/features/actions) → (Deploying) →
        Azure Static Web Apps
    -   [AWS Amplify](https://aws.amazon.com/jp/amplify) → (Deploying) → AWS
        Amplify
    -   [Travis CI](https://travis-ci.com) → (Testing) → (Building) →
        (Deploying) → Firebase Hosting
    -   [Github Actions](https://github.co.jp/features/actions) → (Testing) →
        (Building) → (Deploying) → Github Pages

## Tools

-   Editor: WebStorm
-   Design: Adobe XD
