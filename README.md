# 📱스크린샷

## `메인 화면`

### **1. 오늘의 추천**

<img src="https://user-images.githubusercontent.com/49411767/184657827-02a02a7a-4b4f-4fd5-8f64-401b4368dab4.png" width="350" height="700" />

### **2. 맞춤 추천**

<img src="https://user-images.githubusercontent.com/49411767/184658100-0d53cf03-b673-48d4-b4ea-ffd7ef96b877.png" width="350" height="700" />

### **3. 추가 추천**

<img src="https://user-images.githubusercontent.com/49411767/184658104-4ac06619-8823-4f0e-9dfe-e297af60ac8a.png" width="350" height="700" />

## `프로필 수정 화면`

### **1. 기본 화면**

<img src="https://user-images.githubusercontent.com/49411767/184658153-3e603979-bcd0-4a04-8af2-dd33942f94b0.png" width="350" height="700" />  
  
### **2. 모달**1️⃣ `키`  
  
<img src="https://user-images.githubusercontent.com/49411767/184658165-d7999eb3-834f-432e-a5c0-14880e060cdd.png" width="350" height="700" />  
  
  
### **3. 모달**2️⃣ `체형`   
  
<img src="https://user-images.githubusercontent.com/49411767/184658234-53b2c8c0-285d-444d-acff-0674f3e3cbac.png" width="350" height="700" />  
  
  
### **4. 모달**3️⃣ `학력`  
  
<img src="https://user-images.githubusercontent.com/49411767/184658249-f80f936b-ecb6-446c-8618-16c80148d16a.png" width="350" height="700" />

# 🌈사용된 모듈

- `react-native CLI` : react-native로 어플리케이션을 개발할 수 있게 도와주며 필요한 기능이 있는 경우, 모듈을 직접 만들어 사용할 수 있음. Android Emulator와 함께 사용
- `typescript`: 동적 언어인 JS에 타입을 부여해서 에러를 사전에 방지할 수 있게 도와주며 코드 자동 완성과 가이드를 통해 쉽게 코드를 작성할 수 있게 도와줌
- `@react-navigation/bottom-tabs` : 화면의 하단 탭 구성을 도와주는 navigation 라이브러리
- `@react-navigation/material-top-tabs` : 화면의 상단 탭 구성을 도와주는 navigation 라이브러리
- `@react-navigation/stack` : 화면 간 이동을 도와주며 이동 시 stack에 이전의 navigation 정보를 저장
- `axios` : 브라우저, Node.js를 위해 만들어진 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- `react-native-gesture-handler` : 유저의 터치(제스쳐)를 다양하게 할 수 있게 도와주는 라이브러리
- `react-native-linear-gradient` : CSS gradient 작업을 쉽게 도와주는 라이브러리
- `react-native-modal` : react-native 전용 모달 생성 라이브러리
- `react-native-pager-view` : 유저가 스와이핑해서 화면을 전환할 수 있게 도와주는 라이브러리
- `react-native-safe-area-context` : React-native의 SafeAreaView를 보완해주는 라이브러리
- `husky` : git hook을 편리하게 사용할 수 있게 만들어주는 도구
- `lint-staged` : eslint 자동화 도구
- `eslint`: JS, JSX 정적 분석 도구
- `prettier` : 코드 스타일 변환 도구

# 📋 구현 기술 리스트

### 페이지 1 - Glam Main (10 / 10)

- [x] 상단-하단 네비게이션 탭 구성
- [x] 메인 리스트 구성
  - [x] 페이지 진입 시 `오늘의 추천 API`와 `추가 추천 API`를 동시에 호출
  - [x] 호출 완료 시 `오늘의 추천` - `맞춤 추천` - `추가 추천` 순서대로 리스트에 노출
- [x] 소개 카드 레이아웃 구성
  - [x] Property `introduction`이 빈 값이 아닐 경우 소개카드의 기본정보(이름, 나이) 하단에 해당 내용을 노출
  - [x] Property `introduction`이 빈 값이 아닐 경우 소개카드의 기본정보 하단에 직업, 거리, 키를 노출
  - [x] `오늘의 추천 API`의 호출로 획득한 항목의 기본정보에 상단에 `오늘의 추천` 태그를 노출
- [x] 리스트 하단에 도달 시 `추가 추천 API`를 통해 획득한 다음 페이지 정보를 이용하여 API를 호출하고 결과를 리스트 하단에 추가
- [x] 맞춤 추천 영역의 선택 버튼 클릭 시 `맞춤 추천 API`를 호출하여 결과를 최상단에 추가
- [x] 소개 카드의 X 버튼 혹은 좋아요 버튼 클릭 시 즉시 리스트에서 삭제 처리
- [x] 상단 네비게이션의 오른쪽 설정 버튼 클릭 시 `페이지 2 - 프로필 수정`으로 이동

### 페이지 2 - 프로필 수정 (2 / 4)

- [ ] 프로필 정보 노출
  - [ ] 페이지 진입 시 `내 프로필 API`를 호출하여 현재 프로필 정보를 노출(response의 `data`와 `meta` 참고)=> **`프로필 이미지 띄우기 실패`**
  - [x] 프로필 수정에 사용되는 모든 정보는 상태로 관리
- [ ] 사진, 닉네임, 성별, 생일, 위치를 제외한 모든 항목 수정 가능 => **`직장, 직업, 학교 수정 실패`**
- [x] 키, 체형, 학력 클릭 시 수정을 위한 다이얼로그를 노출

# 📝 배운 점

### React-native CLI

- 이전에 팀 프로젝트를 할 때 `Expo CLI`를 사용한 경험이 있지만, `React-native CLI`는 이번 큐피스트 사전 과제를 하면서 처음 사용해봤습니다. 초기 환경설정이 어렵다는 얘기를 듣고 걱정이 많았지만, 막상 시간을 투자해서 진행을 해보니 할 수 있었습니다. 또한 `Android Emulator`도 함께 사용하여 작업 효율을 높일 수 있었습니다.

### TypeScript

- `JavaScript` 기반의 프로젝트만 진행을 하다가 이번에 처음으로 `TypeScript`를 적용해서 개발을 해봤습니다. 기존 React로 작업할 때와 다르게 **props, state** 등의 **type**이 지정되지 않으면, 엄격하게 계속 에러를 표시하는게 여간 까다로운게 아니였습니다. 하지만 진행을 하면서 `TypeScript`가 사전에 **type** 검사를 해주는 덕분에, 개발작업이 더 안전하게 진행된다는 것을 알았습니다.

### Flatlist

- 과제를 하면서 기능 구현을 위해 Flatlist의 다양한 기능(Header & Footer support, onEndReached, ItemSeparatorComponent 등)들을 더 깊게 배울 수 있었습니다.

# 🔥 어려웠던 점

### `상단-하단 네비게이션 탭 구성`

- 하단 탭 구성은 순조롭게 작업했지만, 하단 탭 각각에 상단 탭을 구성하는게 어려웠습니다. 여러 시행착오를 통해 결국 아래 코드와 같이 하단 탭의 한 구성요소에 상단 탭 컴포넌트를 넣어주어 독립된 상단-하단 탭 구성을 할 수 있었습니다.

```jsx
<BottomTab.Screen name="Home" component={TopTabNavigation} />
```

### `API 데이터 중 pictures를 이미지로 변환 후 메인 화면에 표시`

- `axios`를 통해 `API`를 받아서 `data`를 확인했지만, `pictures`라는 key 값에 배열이 담겨있었고 그 배열 안에는 profile 정보가 담긴 `/profile/01` 과 같은 `string`이 있었습니다. 하지만 이미지를 띄워줄려면 `URL` 정보가 있어야하기 때문에 어떻게 작업을 해야할지 난감했습니다. 여러 시도 중 Base URL과 pictures안의 string 값을 조합하는 방법으로 mock picture를 받을 수 있었습니다.

```jsx
<Image
  style={{ height: "100%" }}
  source={{ uri: CUPIST_URL.DEFAULT + picture }}
/>
```

### `[오늘의 추천]-[맞춤 추천]-[추가 추천] 순서대로 리스트 노출`

- 맞춤 추천 컴포넌트를 오늘의 추천과 추가 추천 사이에 끼워넣는게 어려웠습니다. 처음에는 Flatlist의 FooterComponent와 ItemSeparatorComponent 기능을 사용해서 순서를 잡으려고 했지만 맞춤 추천이 여러번 렌더링 되는 문제가 있었습니다. 그러다 문득 삼항 연산자를 사용해서 1번만 렌더링되게 하면 어떨까라는 생각이 스쳐갔고, `Flatlist`의 `renderItem`의 `index`를 이용해서 아래와 같이 코드를 작성 할 수 있었습니다.

```jsx
{
  index === 1 ? <HomeCustomRecommendation /> : null;
}
```

### `모달 재사용`

- 프로필 수정 화면에서 `키, 체형, 학력` 정보 클릭 시 수정을 위한 다이얼로그를 띄워줘야 하는데, 정보 별로 하나씩 모달을 만들어 결국 총 3개의 모달 컴포넌트를 만들어야했습니다. 처음에는 이 방법이 비효율적이라 생각해서, 클릭 시 해당 정보에 해당하는 **타입 값을 전해주어 하나의 모달 컴포넌트로 재사용**을 하고 싶었습니다. 하지만 생각과 다르게 구현하는게 까다로워 **결국 할 수 없었습니다**. 시도한 방법은 Recoil, GlobalModal, PropertyModal을 이용하여 시도해봤습니다. 모달 재사용법에 대해 좀 더 공부를 해서 적용해보겠습니다.
