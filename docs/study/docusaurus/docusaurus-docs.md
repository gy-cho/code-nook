---
slug: 3
sidebar_position: 3
---

# Docusaurus 문서 만들기

처음 도큐사우르스 프로젝트를 만들면 다음과 같은 파일 구조를 가지게 됩니다.
```
blog/
docs/
src/
ㄴcomponents/
ㄴcss/
ㄴpages/
static/
package.json
docusaurus.config.js
sidebars.js
```
다른 폴더들도 있지만 기본적으로 화면 구성에 필요한 내용은 이렇습니다.

상단 메뉴에는 `Blog`와 `Docs` 가 있을 겁니다.

## 문서 만들기
문서는 기본적으로 `md`, `js` 문서를 만들 수 있습니다.

**md** 파일은 `.md` 또는 `.mdx` 확장자를 가진 파일을 만들어서 markdown 언어로 문서를 작성하기만 하면 됩니다.

markdown 문서 작성법은 [MarkDown 가이드](./markdown-guide)를 참고하세요

**js** 파일은 `.js`나 `.jsx` 같은 확장자를 가진 파일로 페이지를 만들 수 있습니다.

React에 기반하여 아래 예시 코드처럼 페이지를 만들 수 있습니다.

```jsx title="src/pages/my-react-page.js"
export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```
어디에 파일을 만들어야 하는지도 알아야겠죠.

`/blog` 폴더나 `/docs` 폴더에는 md 파일만 만들 수 있습니다. js 만드는 방법이 있을 수도 있지만 아직 모르겠네요. `/src/pages` 폴더에는 md 와 js 파일 모두 만들 수 있습니다. 이곳은 React 프로젝트의 src 와 동일한 기능을 하는 폴더입니다. 

/blog 나 /docs 폴더에 추가하면 상단 메뉴의 링크의 좌측에 페이지목록이 추가되고, 도메인 경로는 `/blog/파일이름`, `/docs/파일이름`이 됩니다.
/src/pages 에 추가한 경우 경로는 파일 확장자에 관계없이 `/파일이름`이 됩니다. 하지만 이 위치에 추가한 파일은 기본 메뉴에 자동 추가되진 않아요.

## 상단 메뉴 추가하기
상단에 새로운 메뉴를 추가하려면 `docusaurus.config.js` 파일을 수정해야 합니다. 아래는 기본 생성된 상단 바 코드입니다.
```jsx title="/docusaurus.config.js"
  themeConfig:
    ({
      navbar: {
        // 제목
        title: '보리\'s 코드 공방',
        // 로고 이미지
        logo: {alt: 'My Site Logo',src: 'img/logo.svg'},
        // 메뉴 목록
        items: [
          // Docs 메뉴
          {type: 'docSidebar', sidebarId: 'tutorialSidebar',position: 'left',label: 'Tutorial'},
          // Blog 메뉴
          {to: '/blog', label: 'Blog', position: 'left'},
          // 메뉴 추가하는 방법
          // highlight-next-line
          {to: '/test', label: 'Test', position: 'left'},
          // Git 바로가기 메뉴
          {href: 'https://github.com/gy-cho', position: 'right'},
        ],
      },
    }),
```

상단 바의 items 형식은 [도큐사우르스 공식 가이드](https://docusaurus.io/ko/docs/api/themes/configuration#navbar-items) 를 참고해주세요.
```js title="items 파라메터 설명"
  type      : '메뉴의 타입(타입 종류는 공식 가이드 참고)'
  to        : '메뉴 클릭 시 이동할 경로, to/href 중 하나만 사용'
  href      : '메뉴 클릭 시 이동할 경로, to/href 중 하나만 사용'
  label     : '상단에 표시될 메뉴 이름'
  position  : '왼쪽(left)/오른쪽(right) 배치'
```
Blog 처럼 원하는 위치에 폴더나 파일을 만들고 `items`를 추가해주면 상단 메뉴가 추가됩니다.


## 사이드바 메뉴 만들기
기본 프로젝트에는 Docs 메뉴가 하나밖에 없고, /docs 폴더에 추가한 파일이 Docs 문서 목록에 추가됩니다. 이런 형식의 메뉴를 여러개 만드는 방법입니다.
[도큐사우르스 공식 문서](https://docusaurus.io/ko/docs)와 [도큐사우르스 쇼케이스](https://docusaurus.io/ko/showcase)에 올라와있는 도큐 블로그 소스코드 참고했습니다.

`Menu1`, `Menu2` 두개의 문서 형식 메뉴를 추가해보겠습니다.

우선 문서로 만들 파일이 필요합니다. /docs 폴더 아래 다음과 같이 파일을 만듭니다.
menu 폴더는 꼭 나누지 않아도 괜찮지만, 폴더를 나누어 관리하는게 코드 관리에 용이합니다.

```
/docs/menu1/page1
/docs/menu1/page2
/docs/menu1/page3

/docs/menu2/page1
/docs/menu2/page2
/docs/menu2/page3
```

다음엔 상단에 `Menu1`, `Menu2` 메뉴를 추가합니다. 메뉴 추가하는 방법은 [상단 메뉴 추가하기](./docusaurus-docs.md#상단-메뉴-추가하기) 를 참고하세요.
이동 경로(to)는 메뉴 클릭 시 이동할 첫 페이지로 입력합니다. 
```jsx title="/docusaurus.config.js"
items: [
  // Menu1 메뉴
  {to: '/docs/menu1/page1', label: 'Menu1', position: 'left'}
  // Menu2 메뉴
  {to: '/docs/menu2/page1', label: 'Menu2', position: 'left'}
  ],
```

이제 사이드바를 설정해 줍니다. sidebars.js 파일에 Menu1과 Menu2의 사이드바를 추가해줍니다.
```jsx title="/sidebars.js"
  // Menu1
  menu1Sidebar: [
    'menu1/pages1',
    'menu1/pages2',
    'menu1/pages3',
  ],
  // Menu2
  menu2Sidebar: [    
    'menu2/pages1',
    {
      type: 'category',
      label: '카테고리',
      items: [
        'menu2/pages2',
        'menu2/pages3',
      ],
    },
  ]    
```
Menu1은 뎁스 없이 1,2,3 페이지를 사이드바에 설정해주었고, Menu2에서는 1페이지는 루트에 2,3 페이지는 '카테고리'라는 이름의 뎁스 아래에 추가해 주었습니다. 'category' 타입을 통해 뎁스를 설정해 줄 수도 있습니다.

items에는 docs를 제외한 사이드바에 추가할 페이지의 경로를 작성해줍니다. 이 부분 때문에 docs 폴더에 파일을 만들었습니다.

md파일을 만들면 자동으로 sidebar에 추가되던 Docs폴더와 달리 이 방법은 페이지가 추가 될 때마다 sidebar 목록을 직접 작성해줘야 하는 불편함이 있습니다.

도큐사우르스 쇼케이스에 올라와있는 블로그의 소스코드들을 보면 docs 폴더가 아닌 다른 폴더에서도 sidebar를 만들 수 있는 것 같습니다. 우선 블로그를 정리하며 도큐사우르스의 사용방법에 대해서도 하나씩 알아가보려고 합니다.