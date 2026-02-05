# 🍿 Pop Corn Play

🎬 영화 정보를 탐색하고 저장할 수 있는 **리액트 기반 영화 정보 웹앱**입니다.  
🔥 인기/트렌딩 영화, 🔎 검색, 📌 상세 정보, 🎞️ 유사 작품 추천, ❤️ 위시리스트 기능을 제공합니다.

- 🌐 **Demo**: (배포 링크)
- 📦 **Repository**: (깃허브 링크)

---

## ✨ 주요 기능

- 🔥 **트렌딩/인기 영화 탐색**: 오늘의 트렌딩 및 인기 영화를 확인할 수 있습니다.
- 🔎 **영화 검색**: 키워드 기반 검색과 **무한 스크롤** 탐색을 지원합니다.
- 📌 **영화 상세 페이지**: 포스터/백드롭 이미지, 개요, 런타임, 장르 등 상세 정보를 제공합니다.
- 🎞️ **유사 작품 추천**: 상세 페이지에서 유사한 영화를 확인할 수 있습니다.
- ❤️ **위시리스트**: 로그인한 사용자는 관심 영화를 저장/해제할 수 있습니다.
- 🔐 **인증**: Supabase 기반 **로그인/회원가입/마이페이지** 제공.

---

## 🖼️ 미리보기 (Screenshots)

> 이미지는 `.github/assets/` 폴더에 넣고 아래 경로만 바꿔주면 됩니다.

| 🏠 홈(트렌딩/인기) | 📌 상세 | 🔎 검색/무한스크롤 | ❤️ 위시리스트 |
|---|---|---|---|
| ![home](.github/assets/home.png) | ![detail](.github/assets/detail.png) | ![search](.github/assets/search.png) | ![wishlist](.github/assets/wishlist.png) |

---

## 🧰 기술 스택

- ⚛️ **Frontend**: React 19, React Router 7, Vite (rolldown-vite)
- 🎨 **Styling**: Tailwind CSS
- 🔁 **Data Fetching**: TanStack Query, Axios
- 🔐 **Auth/DB**: Supabase

---

## 🚀 로컬 실행 방법

### 1) 📦 설치
```bash
npm install
```

### 2) 💻 개발 서버 실행
```bash
npm run dev
```

---

## 🔑 환경 변수

프로젝트 루트에 `.env` 파일을 생성하고 아래 변수를 설정해야 합니다.

```bash
VITE_DATABASE_MOVIE_API_BASE=YOUR_TMDB_API_BASE_URL
VITE_DATABASE_MOVIE_API_KEY=YOUR_TMDB_API_KEY
VITE_DATABASE_AUTH_URL=YOUR_SUPABASE_URL
VITE_DATABASE_AUTH_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

예시:
```bash
VITE_DATABASE_MOVIE_API_BASE=https://api.themoviedb.org/3
```

✅ `.env`는 Git에 커밋되지 않도록 `.gitignore`에 포함되어 있어야 합니다.

---

## 🧾 스크립트

- `npm run dev` : 개발 서버 실행
- `npm run build` : 프로덕션 빌드
- `npm run preview` : 빌드 결과 미리보기
- `npm run lint` : ESLint 실행
- `npm run format` : Prettier 포맷
- `npm run format:check` : Prettier 검사

---

## 🗂️ 폴더 구조

```txt
src/
  assets/        # 정적 이미지/에셋
  auth/          # Supabase 인증 클라이언트
  components/    # 공통 UI 및 영화 관련 컴포넌트
  config/        # 환경 변수 및 앱 설정
  context/       # 전역 상태/컨텍스트
  hooks/         # 커스텀 훅
  pages/         # 라우트 페이지
  router/        # 라우팅 설정
  services/      # API 클라이언트/서비스
  utils/         # 유틸리티 함수
  App.jsx
  main.jsx
```

---

## 📌 참고

- 🎞️ 영화 데이터는 **The Movie Database (TMDB) API**를 사용합니다.
- 🔐 인증은 **Supabase**를 사용합니다.

---

## 🙏 Credits

- This product uses the **TMDB API** but is not endorsed or certified by TMDB.
