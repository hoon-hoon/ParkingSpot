## 진행상황

- 사이드네비게이션 - 더미데이터 리스트로 띄워준 후, 무한스크롤까지 완료했습니다
- 지도 - 현재 위치 자치구로 변환 후, 주차장 전체 데이터 받아서 자치구 별로 마커로 띄워주는 부분까지 완료했습니다

### +

- 현 지도에서 검색 버튼 생성 후 클릭 시 자치구 데이터 업데이트 및 자치구에 맞는 주차장 정보 업데이트
- 사이드네비게이션에 지도위에 떠있는 (필터링 된 주차장들) 을 가까운 순서로 정렬해서 리스트화
- 플로팅 버튼 UI

### Todo

지도
- 플로팅 버튼 조작 시 마커 필터링 기능

사이드 네비게이션
- 즐겨찾기 기능
- 검색 기능

그 외 상세페이지 부분

---

# 주차자리요

## 실행 방법

```bash
npm install
npm run dev
```

---

## 폴더 구조

```bash
src/
|── components/ # 재사용 가능한 컴포넌트
| |── common/ # 공통으로 사용되는 컴포넌트
| |── layout/ # 레이아웃 관련 컴포넌트
| └── features/ # 주요 기능별 컴포넌트
|  └── sideNavigation/ # 사이드 네비게이션 관련 컴포넌트
|  └── map/ # 지도 관련 컴포넌트
|── pages/ # 페이지 구성
| └── HomePage.tsx
|── hooks/ # 커스텀 훅
|── utils/ # 유틸리티 함수
|── services/ # API 통신을 위한 서비스 로직
|── styles/ # 스타일 파일
|── constants/ # 상수 값
└── stores/ # 전역 상태 관리

```

---

## Git 커밋 컨벤션

2. 커밋 메시지 타입

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 변경 (README.md, 문서화 작업)
- style: 코드 포맷팅, 세미콜론 누락 등 코드 변경 없이 스타일 변경
- refactor: 코드 리팩토링 (기능 변화는 없음)
- test: 테스트 코드 추가 또는 수정
- chore: 빌드 업무, 패키지 매니저 설정 등

---

## 코딩 컨벤션

1. 파일 구조

- React 컴포넌트는 각 컴포넌트 폴더에 하나의 컴포넌트 파일과 index.ts로 구성
- 파일 및 폴더명은 카멜케이스로 작성 (예: MyComponent.tsx, useCustomHook.ts)
- 상태 관리 파일은 stores/ 디렉토리 하위에 저장
- 공통 컴포넌트는 common 폴더에 위치
- 페이지별 컴포넌트는 해당 페이지 폴더 내에 위치

2. 명명 규칙

- 컴포넌트: 대문자로 시작하는 파스칼 케이스 (예: MyComponent.jsx)
- 변수 및 함수: 카멜 케이스 사용 (예: myFunction.js, userProfile.js)
- 상태 변수: useStore와 같은 상태 저장 함수는 store, state로 명명
- 스타일: 컴포넌트 이름과 동일하게 (예: Button.css)

3. React

- 함수형 컴포넌트만 사용 (const MyComponent = () => {})
- 모든 custom hooks는 use로 시작 (예: useFetchData)
- JSX에서 한 줄 이상일 경우 괄호로 감싸기

4. 상태 관리 (Zustand)

- 상태 변경 함수는 set을 앞에 붙여 명명 (예: setUser, setIsLoading)
- Zustand의 상태를 가져올 때는 구조 분해 할당을 사용 (예: const { user, isLoading } = useStore())

5. TypeScript

- 모든 변수, 함수, 컴포넌트는 명시적 타입 정의 필수
- any 사용 금지, 필요 시 유니온 타입이나 제네릭으로 해결

6. 스타일 가이드

- Prettier, ESLint 사용
- import 구문은 절대 경로를 사용하며, 그룹화하여 작성 (예: import { useStore } from '~/stores/useStore';)

---
