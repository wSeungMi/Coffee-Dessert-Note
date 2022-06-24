# Coffee-Dessert-Note

- [설치 및 실행](#설치-및-실행)
- [설계](#설계)
- [기능](#기능)
- [구현](#구현)
- [트러블 슈팅](#트러블-슈팅)

## 설치 및 실행

TBD

## 설계

### 목표

- `React`와 `Typescript`를 사용하여 **커피&디저트 기록노트** 만들기
- CRUD 기능 구현해보기

### 기술 스택

| 분류      | 내용                           |
| --------- | ------------------------------ |
| Lang      | typescript                     |
| Library   | React, Redux, React-query(api) |
| CSS Style | Tailwind                       |
| Storag    | LocalStorage                   |
| API       | kakao map api                  |

### 공부 필요

- 1차 목표 : 프론트까지 구현
- 2차 목표 : DB 사용(Firebase사용), 로그인 기능 업데이트
- 사용법
  - typescript
  - Library (React, Redux, React-query)
  - Emotion

### 조사 필요

- api 사용법

### 레이아웃

<img src="https://user-images.githubusercontent.com/104605709/174498170-c0ec4b66-d3d0-4f65-99af-9333bea73379.jpg" width="600">
<img src="https://user-images.githubusercontent.com/104605709/174498094-e122f0fd-20b6-4d5e-8908-29117c4db8c4.jpg" width="600">
<img src="https://user-images.githubusercontent.com/104605709/174498183-a46bee22-a428-4093-b650-a14973024aff.jpg" width="600">

## 기능

\*로그인/사용자 정보 저장 X

1. header

- 홈 이동 버튼
  - 로고를 누르면 어느 페이지에서든 메인 홈으로 이동

2. nav

- 기록노트 목록
  - 메인 홈으로 이동
- 기록노트 작성
  - 작성 페이지로 이동

3. main

- 기록노트 목록
  - 폴더(커피, 케이크, 베이커리) 스타일로 목록 출력 (light/dark UI 고려)
  - 폴더를 눌러 이동하면 입력된 내용을 보여줌(세로 스크롤)
  - 내용을 클릭하면 상세페이지를 볼 수 있음
  - 기록노트 수정, 삭제 기능
- 기록노트 작성
  - 입력할 내용
  - 폴더 선택(커피, 케이크, 베이커리)
  - 메뉴 이름
  - 가게 이름(api 구현 가능하면 지도 검색해서 주소까지 입력, 안되면 상호명만 직접 입력)
  - 맛 평가(아이콘으로 표현 / 5점 척도-1점(노맛), 2점(그냥그럼), 3점(추천가능), 4번(또먹고 싶음), 5점(인생최고의 맛)
  - 가격
  - 메모
  - 사진추가

## 구현

TBD

## 트러블 슈팅

TBD

##
