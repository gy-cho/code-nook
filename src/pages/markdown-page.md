---
title: Markdown page example
---

# Docusaurus 블로그 시작하기

<aside>
💡 node 및 **nvm 설치 가이드:**

[nvm으로 node 버전 관리](https://www.notion.so/nvm-node-2d0436f2ddaa46a4aeb971c401dc504e?pvs=21)

</aside>

# Docusaurus 설치

```bash
$npm install -g docusaurus # docusaurus 설치
$npx docusaurus -V # docusaurus 설치 확인
```

# Docusaurus 프로젝트 생성

```bash
$npx @docusaurus/init@latest init {프로젝트 이름} classic
$npx create-docusaurus@latest {프로젝트 이름} classic --typescript
```

# Docusaurus 빌드

```bash
$npx docusaurus start # 개발서버 시작
```

- npm 으로  실행하면 실시간 리로딩이 안 됨
- docusaurus 로 실행하면 실시간 리로딩이 됨
- `npm install --save docusaurus @docusaurus/preset-classic` 을 설치해야 실시간 리로딩이 된다고 하는데 꼭 설치해야하는 건지 모르겠다

# Github 호스팅

Docusaurus로 프로젝트를 만들었다면 소스코드를 Git에 올릴텐데요. Github에선 Pages 라는 호스팅 서비스를 제공하고 있습니다.

호스팅 할 Repository에서 `Setting > Pages` 에 들어가면 아래와 같은 화면이 뜨는데요. 호스팅할 Branch 선택하고 `Save`를 누르면 내가 만든 페이지를 github 주소로 호스팅 할 수 있습니다.

호스팅에는 시간이 5~10분정도 걸릴 수 있고, 성공하면 녹색 박스처럼 호스팅 도메인이 상단에 표시됩니다. 

![스크린샷 2024-01-26 오후 4.51.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f18acaa7-0d11-4b3d-8468-0f0c1bf3d3cf/b3b18415-f638-47b9-b082-5a375079ce54/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-26_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.51.19.png)

하지만 Docusaurus 소스코드를 올린 Repository를 호스팅해도 정상적으로 호스팅 되지 않습니다. 보통 주소에 들어가도 README.md 파일의 내용이 뜨는걸 보게 될 겁니다.

Git에 올린 소스는 왼쪽 이미지 처럼 React 소스코드 일텐데, 실제로 내가 만든 화면을 호스팅 하려면 오른쪽 이미지 처럼 `build` 폴더의 파일들이 Repository 의 `/` 경로에 있어야 합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f18acaa7-0d11-4b3d-8468-0f0c1bf3d3cf/429b854b-b563-4e3e-be96-1d2cd1be52b1/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f18acaa7-0d11-4b3d-8468-0f0c1bf3d3cf/6931f5e1-7ba7-490a-bfc0-410de434f8ab/Untitled.png)

gh-pages 패키지를 설치해서 이 문제를 해결할 수 있습니다.

```bash
npm install gh-pages
yarn add gh-pages
```

설치 되었으면 `package.json` 파일을 수정해야 합니다.

`homepage` 에 호스팅 될 도메인 주소를 입력해주고, `scripts` 에 아래 내용을 추가합니다.

Git pages 로 호스팅 하게 되면 다른 도메인을 설정하지 않는 한 기본 주소가 `https://[Git계정이름].github.io/` 으로 생성되게 됩니다. 따라서 `homepage` 에는 `https://[Git계정이름].github.io/[Repository이름]` 형식으로 작성합니다.

```bash
{
	"homepage": "https://gy-cho.github.io/code-nook/",
  ...
	"scripts": {
		...
		"predeploy": "npm run build",
	  "deploy" : "gh-pages -d build"
	},
}
```

수정이 완료되었으면 git 원격저장소에 push 하고 `npm run deploy` 프로젝트 폴더에서 명령을 실행해주세요. 아래 사진처럼 뜨면 완료 됩니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f18acaa7-0d11-4b3d-8468-0f0c1bf3d3cf/92306cc5-2f2d-41f0-b320-0d6046af70b3/Untitled.png)

다시 Git Pages 화면으로 돌아와 보면 `gh-pages` 라는 브랜치가 추가되어있을 거에요. 선택한 후 `Save` 를 눌러주면 내가 만든 블로그가 정상적으로 호스팅 된 걸 볼 수 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f18acaa7-0d11-4b3d-8468-0f0c1bf3d3cf/7fbeb854-c288-45e7-a310-62264158dbac/Untitled.png)

코드를 수정해서 블로그에 반영하고 싶으면, main branch에서 소스코드를 수정 후 프로젝트에서 아래 명령을 실행해주면 자동으로 블로그에 수정사항이 반영됩니다.

꼭 build 후 deploy 해주어야 수정사항이 반영됩니다!