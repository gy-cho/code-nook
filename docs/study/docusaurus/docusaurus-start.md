---
slug: 1
sidebar_position: 1
---

# Docusaurus 블로그 시작하기

시작하기 전에, Docusaurus는 node 16 버전 이상을 사용해야 합니다. node가 설치되어 있지 않다면 설치하고, 이미 설치된 다른 버전의 node 가 있다면 nvm으로 여러가지 버전의 node를 설치하여 관리할 수 있습니다. node 설치와 nvm 설정은 아래 가이드를 참고해주세요.

:::tip[node 및 nvm 설치 가이드]
[NVM으로 Node 버전 관리하기](../etc-guide/nvm-guide)
:::


## Docusaurus 설치

```bash
$npm install -g docusaurus # docusaurus 설치
$npx docusaurus -V # docusaurus 설치 확인
```

## Docusaurus 프로젝트 생성

```bash
$npx @docusaurus/init@latest init {프로젝트 이름} classic
$npx create-docusaurus@latest {프로젝트 이름} classic --typescript
```

## Docusaurus 빌드

```bash
$npx docusaurus start # 개발서버 시작
```

- npm 으로  실행하면 실시간 리로딩이 안 됩니다. docusaurus 로 실행해야 실시간 리로딩 됩니다.
- `npm install --save docusaurus @docusaurus/preset-classic` 을 설치해야 실시간 리로딩이 된다고 하는데 꼭 설치해야하는 건지 모르겠네요.
