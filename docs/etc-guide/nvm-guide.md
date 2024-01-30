---
sidebar_position: 3
---

# NVM으로 Node 버전 관리하기

항상 최신 버전 Node를 쓰면 좋겠지만, 여러개의 Node 버전을 사용해야 할 때가 있습니다.
오랫동안 서비스한 프로젝트의 경우 하위 Node 버전을 유지해야할 수도 있고, Docusaurus 같은 경우엔 Node 16 이상 버전을 사용해야 합니다. 그럴때 nvm을 사용하면 node 버전을 여러개 설치해두고 필요할 때마다 변경해서 변경해서 사용할 수 있습니다.

## nvm 설치

```bash
$brew install nvm
$brew list nvm # nvm 설치된 위치 찾기
```

- 설치 위치는 `/usr/local/opt/nvm` `/usr/local/Celler/nvm` 이 기본 설치 위치
- 회사 컴퓨터에서는 `/opt/homebrew/Celler/nvm` 에 설치되어 있었다.

## nvm 명령어 등록

```bash
export NVM_DIR="/opt/homebrew/Cellar/nvm/{nvm 버전}" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

- `~/.bash_profile` `~/.zshrc` 사용하는 셀에 따라 위 내용을 등록
- 회사 컴퓨터에선 `zsh` 셀 사용
- `source` 명령으로 변경 내용 적용

## node 설치

```bash
$nvm install 18 # 원하는 node 버전 설치
$nvm install node # 최신 node 버전 설치
$node --version # 설치된 node 버전 확인
```

## 프로젝트 별 node 설정

```bash
# .nvmrc
21.5.0 
```

- 프로젝트 root 폴더에 `.nvmrc` 파일을 생성해서 원하는 node 버전을 작성

```bash
$nvm ls
v14.21.3
->v21.5.0
system
```

- `$nvm ls` 명령으로 설치된 node 목록을 알 수 있다

```bash
$nvm current # 현재 사용중인 node 버전 확인
$nvm use # .nvmrc 파일이 있는 위치에서 실행, 사용할 node 버전을 변경
```

- nvm 명령어로 node 버전을 확인하고 변경할 수 있다