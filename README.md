## 스크린샷

### `메인 화면`

- 오늘의 추천 카드  
![Screenshot_1660573606](https://user-images.githubusercontent.com/49411767/184657827-02a02a7a-4b4f-4fd5-8f64-401b4368dab4.png)
- 맞춤 추천  
![Screenshot_1660573613](https://user-images.githubusercontent.com/49411767/184658100-0d53cf03-b673-48d4-b4ea-ffd7ef96b877.png)
- 추가 추천  
![Screenshot_1660573896](https://user-images.githubusercontent.com/49411767/184658104-4ac06619-8823-4f0e-9dfe-e297af60ac8a.png)

### `프로필 수정 화면`

- 기본 화면  
![Screenshot_1660573641](https://user-images.githubusercontent.com/49411767/184658153-3e603979-bcd0-4a04-8af2-dd33942f94b0.png)
- 모달 - `키`  
![Screenshot_1660573656](https://user-images.githubusercontent.com/49411767/184658165-d7999eb3-834f-432e-a5c0-14880e060cdd.png)
- 모달 - `체형`  
![Screenshot_1660573665](https://user-images.githubusercontent.com/49411767/184658234-53b2c8c0-285d-444d-acff-0674f3e3cbac.png)
- 모달 - `학력`  
![Screenshot_1660573671](https://user-images.githubusercontent.com/49411767/184658249-f80f936b-ecb6-446c-8618-16c80148d16a.png)

## 사용된 모듈

- `react-native CLI`
- `typescript`
- `@react-navigation/bottom-tabs`
- `@react-navigation/material-top-tabs`
- `@react-navigation/native`
- `@react-navigation/stack`
- `axios`
- `react-native-gesture-handler`
- `react-native-linear-gradient`
- `react-native-modal`
- `react-native-pager-view`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-tab-view`
- `husky`
- `lint-staged`
- `eslint`
- `prettier`

## 구현 기술 리스트

### 페이지 1 - Glam Main (10 / 10)

- [x] 디자인 가이드라인을 참고하여 상단-하단 네비게이션 탭을 구성한다.
- [x] 디자인 가이드라인을 참고하여 메인 리스트를 구성한다.
  - [x] 페이지 진입 시 `오늘의 추천 API`와 `추가 추천 API`를 동시에 호출한다.
  - [x] 호출 완료 시 `오늘의 추천` - `맞춤 추천` - `추가 추천` 순서대로 리스트에 노출 시킨다.
- [x] 디자인 가이드라인을 참고하여 소개 카드 레이아웃을 구성한다.
  - [x] Property `introduction`이 빈 값이 아닐 경우 소개카드의 기본정보(이름, 나이) 하단에 해당 내용을 노출한다.
  - [x] Property `introduction`이 빈 값이 아닐 경우 소개카드의 기본정보 하단에 직업, 거리, 키를 노출한다.
  - [x] `오늘의 추천 API`의 호출로 획득한 항목의 기본정보에 상단에 `오늘의 추천` 태그를 노출한다.
- [x] 리스트 하단에 도달 시 `추가 추천 API`를 통해 획득한 다음 페이지 정보를 이용하여 API를 호출하고 결과를 리스트 하단에 추가한다.
- [x] 맞춤 추천 영역의 선택 버튼 클릭 시 `맞춤 추천 API`를 호출하여 결과를 최상단에 추가한다.
- [x] 소개 카드의 X 버튼 혹은 좋아요 버튼 클릭 시 즉시 리스트에서 삭제 처리한다.
- [x] 상단 네비게이션의 오른쪽 설정 버튼 클릭 시 `페이지 2 - 프로필 수정`으로 이동한다.

### 페이지 2 - 프로필 수정 (2 / 4)

- 프로필 정보 노출
  - [ ] 페이지 진입 시 `내 프로필 API`를 호출하여 현재 프로필 정보를 노출한다. 이 때 response의 `data`와 `meta`를 참고하여 올바른 값이 노출될 수 있도록 로직을 구성한다. -> `프로필 이미지 띄우기 실패`
  - [x] 프로필 수정에 사용되는 모든 정보는 상태로 관리되어야 한다.
- [ ] 사진, 닉네임, 성별, 생일, 위치를 제외한 모든 항목은 수정할 수 있다. -> `직장, 직업, 학교 수정 실패`
- [x] 키, 체형, 학력 클릭 시 수정을 위한 다이얼로그를 노출한다. 다이얼로그의 로직은 `내 프로필 API`의 Response를 바탕으로 유추하여 구성한다.
