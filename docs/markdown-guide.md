---
sidebar_position: 1
---

# MarkDown 가이드

## 제목, 부제목 표시
- `#` 1~6개까지 쓸 수 있습니다.
- Docusaurs에서 `md` 파일의 최상단 #은 문서의 제목이 됩니다.
  - 문서 최상단에 #을 쓰지 않으면 파일이름이 제목이 됩니다. 하지만 파일이름은 한글이나 띄어쓰기를 사용하기 어렵습니다.
```md
# 제목
## 부제목1
### 부제목2
#### 부제목3
##### 부제목4
###### 부제목5
```

## 글자 강조(Bold) 표시
- `** **` 사이에 글자를 적어 **강조** 표시합니다.
```md
Let's discover **Docusaurus in less than 5 minutes**.
```

## 글자에 링크 걸기
- http로 시작하는 텍스트를 작성하면 자동으로 링크가 걸립니다.
- 링크를 다른 텍스트로 대체 할 수 있습니다.
- 다른 페이지로 이동할 수 있으며, 게시글의 특정 위치로 이동할 수도 있습니다. [MarkDown 가이드](./markdown-guide#글자에-링크-걸기)

```md
일반 링크 걸기
https://www.naver.com

링크를 다른 텍스트로 대체
[네이버](https://www.naver.com)

다른 페이지로 이동
[MarkDown 가이드](./markdown-guide#글자에-링크-걸기)
```

## 목록 표시
- 지금도 사용하고 있는 . 표시는 `-` `+` `*` 을 사용합니다. 모두 같은 모양으로 표시되므로 원하는 방식을 사용하면 됩니다.
  - 들여쓰기는 앞에 기호 탭을 추가합니다 .
```md
- 목록 작성
* 목록 작성
+ 목록 작성
  - 들여쓰기
```

## 코드 블럭
- 어떤 내용을 블럭 안에 작성하고 싶으면 ` 를 사용하면 됩니다.
- 한 줄 블럭은 \` ` 여러줄 블럭은 \``` ``` 을 사용합니다.
- 한 줄 블럭은 문장에서 특정 단어를 강조하는 용도로도 사용합니다.
- 블럭 안에선 마크다운이 적용되지 않습니다.
#### 개발 언어 지정
- 첫번째 줄에 언어를 명시해주면 문법에 맞춰 텍스트가 하이라이트 표시됩니다.
#### 제목 표시
- title=""로 제목을 추가할 수 있습니다. 파일 제목이나 경로를 작성할 때 유용합니다.
#### 하이라이트 표시
- // highlight-next-line 를 작으면 다음 줄이 하이라이트 표시됩니다.
- 첫번째 줄에 \{1-4}을 적으면 해당 영역의 줄이 하이라이트 표시됩니다.
- 두개를 동시에 사용하면 \{1-4} 만 적용됩니다.

```jsx title="src/pages/my-react-page.js" {1-2}
<button onClick={() => alert('button clicked!')}>Click me!</button>

// highlight-next-line
# 강조하기
```

## Tip 블럭
- Tip을 작성할 수 있는 블럭은 : 를 사용합니다.
  - tip 혹은 danger을 :옆에 작성해줍니다.
- :::tip 옆에 제목을 적으면 블럭의 제목이 변경됩니다.
- 이 블럭 안에선 markdown 언어를 사용 할 수 있습니다.
```md
:::tip[제목]
이 안에 내용을 작성합니다.
:::
```
:::tip[제목]
이 안에 내용을 작성합니다.

여러줄을 작성하거나 **강조** 표시도 할 수 있습니다.
- 목록도 작성할 수 있습니다.
:::
:::danger[주의]
:::

## html 코드 작성
- 말 그대로 html 코드를 작성할 수 있습니다.
- style은 작성할 수 없습니다.
```md
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

### React 코드 작성
- React 코드를 작성하여 화면에 추가할 수도 있습니다.
```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight>

This is <Highlight color="#1877F2">Facebook blue</Highlight>



## 일반 텍스트
- Markdown 문법으로 특정 기호를 못 쓸때 \를 사용하면 쓸 수 있다.  

## 이미지 추가
```md
![Docusaurus logo](/img/docusaurus.png)
```
![Docusaurus logo](/img/docusaurus.png)

