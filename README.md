# Nexus AI Finance - Sovereign Mobile Portal

이 저장소는 **Google AI Studio (Gemini)**를 통해 생성된 JP Morgan 스타일의 AI 핀테크 모바일 웹 애플리케이션 프로토타입입니다. 최신 플래그십 기기인 **Samsung Galaxy S25 Ultra** 하드웨어 프레임 모형에 정렬 및 최적화되어 디자인되었습니다. 

모든 프로덕션 소스 코드는 사용자 요구사항에 맞추어 **[/Test1](./Test1)** 폴더 아래에 안전하게 위치해 있습니다.

---

## 📲 단일 포터블 파일 가동: `Nexus AI.html` 즉시 더블클릭 실행

로컬 노드 패키지(`npm install`) 설치 절차나 복잡한 컴파일 세팅 없이, 아래 **실행용 단일 HTML 파일**을 즉시 더블클릭 하거나 클릭만으로 웹 브라우저에서 대화형 시뮬레이션을 1초 만에 확인해 보실 수 있습니다! React, Tailwind, Lucide Icons CDN을 완전 내장하여 가동됩니다.

*   👉 **[루트 진입점: Nexus AI.html 즉시 실행/다운로드 링크](./Nexus%20AI.html)**
*   👉 **[Test1 폴더 하위: Nexus AI.html 즉시 실행/다운로드 링크](./Test1/Nexus%20AI.html)**

---

## ⚡ 실시간 서버 데모: 바로 클릭해서 웹에서 즉시 테스트하기 (Live Sandbox Platforms)

웹 브라우저를 통해 실시간으로 스트리밍 가동 중인 샌드박스 링크입니다. 언제 어디서든 바로 구동해 보실 수 있습니다.

*   👉 **[개발 전용 샌드박스 URL 실행하기 (Development Live App)](https://ais-dev-kzarxok5ga4zqrvu7cwycp-219759272678.asia-northeast1.run.app)** (가장 즉각적이고 안정적인 테스트베드)
*   👉 **[공유용 프리뷰 호스트 URL 실행하기 (Shared Live App)](https://ais-pre-kzarxok5ga4zqrvu7cwycp-219759272678.asia-northeast1.run.app)** (협업 및 데모용 안정화 빌드)

---

## 🌐 웹에서 바로 실행하고 확인하는 방법 (Web Instant Execution)

이 저장소를 컴퓨터에 다운로드할 필요 없이 **웹 브라우저에서 버튼 클릭 한 번으로 바로 실행**하고 화면을 확인하실 수 있습니다.

### 1. StackBlitz를 사용하여 온라인에서 바로 실행 (강력 추천 ⚡)
StackBlitz는 GitHub 리포지토리를 브라우저상에서 곧바로 빌드하여 로컬 서버 실행 화면까지 한 번에 보여주는 클라우드 웹 샌드박스입니다.

아래 URL 구성 형식을 통해 브라우저 주소창에 입력하시면 곧바로 실행 화면과 코드를 즉시 검토하실 수 있습니다:
```text
https://stackblitz.com/github/<GitHub-ID>/<Repository-Name>/tree/main/Test1
```
*(예시: `https://stackblitz.com/github/myusername/my-gemini-repo/tree/main/Test1`)*

* **작동 방식**: StackBlitz가 자동으로 해당 브라우저 탭에 Node.js 가상 환경을 가동하고, 종속성 패키지(`npm install`) 설치 후 3초 내에 실시간 대화형 모바일 시뮬레이터가 렌더링된 화면을 보여줍니다.

---

### 2. GitHub Codespaces를 활용한 웹 개발 환경 데모
GitHub에서 자체 제공하는 무료 클라우드 환경인 Codespaces를 통해 브라우저 내 VS Code로 즉시 실행할 수 있습니다:

1. 현재 저장소 상단의 **`Code`** 초록색 버튼 클릭 -> **`Codespaces`** 탭 선택 -> **`Create codespace on main`** 클릭
2. 브라우저 내에 가상 VS Code 편집기가 로딩되면하단의 터미널 창에 다음 명령어를 복사하여 실행합니다:
   ```bash
   cd Test1
   npm install
   npm run dev
   ```
3. 터미널의 우측 하단 팝업에서 **`Open in Browser`** 버튼을 클릭하면 실시간 Galaxy S25 섀시 프레임과 함께 대화형 금융 포털이 브라우저 탭에 즉시 팝업하여 실행됩니다.

---

### 3. Vercel / Netlify 배포 후 정적 사이트 URL로 즉시 보기
포트폴리오나 실제 제품 데모 웹 사이트로 배포하여 고유 도메인을 생성하고 싶다면, Vercel을 연동하여 1분 만에 배포가 가능합니다.

1. [Vercel](https://vercel.com/) 로그인 후 **`Add New Project`** -> 현재 GitHub 저장소 임포트(Import)
2. 프로젝트 구성 설정 창에서 **Framework Preset**을 `Vite`로 두고, **Root Directory**를 `Test1` 폴더로 지정합니다.
3. **`Deploy`** 버튼을 누르면 인스턴트 모바일 웹 호스팅 완성과 함께 배포 완료된 라이브 고유 URL 주소가 발급됩니다.

---

## 📄 HTML 파일 구성 명세 (HTML Sources)

이 프로젝트에 구성되어 있는 핵심 진입점 HTML 마크업 코드 원본입니다.

### 1. 루트 인덱스 마크업 (`/index.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus AI Finance</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/Test1/src/main.tsx"></script>
  </body>
</html>
```

### 2. 모듈 테스트 인덱스 마크업 (`/Test1/index.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus AI Finance</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 📂 프로젝트 구조 (Test1 기반)

모든 활성 소스 코드 및 설정 파일은 `/Test1` 폴더 내부에 계층화되어 정리되어 있습니다.

```text
/
├── Test1/                     # 전체 활성 테스트 프로젝트 메인 디렉토리
│   ├── src/
│   │   ├── App.tsx            # Galaxy S25 Ultra 섀시 렌더러 및 6대 Private 뱅킹 서브모듈 (English)
│   │   ├── index.css          # Cormorant Garamond & Inter 폰트 정의, Tailwind 배색 스타일시트
│   │   └── main.tsx           # React 실행 마운팅 진입점
│   ├── index.html             # 웹 브라우저 DOM 설정 및 entry script 바인딩
│   ├── package.json           # React 19, Lucide, Motion, Tailwind 의전성 라이브러리 목록
│   ├── tsconfig.json          # TypeScript 컴파일 매핑 명세
│   └── vite.config.ts         # Vite 모듈 로더 및 빌더 최적화 설정
└── README.md                  # 저장소 대시보드 및 브라우저 실행 가이드
```

---

## ✨ 핵심 기능과 JP Morgan 품격의 디자인

1. **Samsung Galaxy S25 Ultra 시뮬레이션 인터페이스**:
   * Titanium 은빛/황금빛/보라색/진회색 메탈 바디 색상 실시간 커스터마이징 스위처 탑재
   * 대화율 재생빈도(OLED 120Hz Fast Adaptive Rate vs Default 60Hz APY) 애니메이션 시뮬레이터 제공
   * 5G 데이터망 및 초고속 무선 신호 전용 보안 통신망 가상 스위치 제어
   * 실시간 실제 기기 시간과 일치하는 One UI 7 헬스 테이터 헤더 및 Infinity-O micro 렌즈 디자인 구현

2. **6개 하이엔드 금융 디지털 서브페이지 구현 (영어 정밀 번역 수록)**:
   * **Outlook**: 연간 거시 시장 심층 분석 및 프라이빗 AI 펜널 에디토리얼
   * **Allocator**: 실시간 타겟 자산 볼륨 시뮬레이터 연동 및 가상 채권/안전 자산 배분 비전 그래프
   * **Risk AI**: 지정학적 위험, 긴급 유동성 사태, AI 신경망 이탈 등 시나리오 전용 알고리즘 스트레스 시뮬레이터
   * **Treasury**: 런던, 취리히, 싱가포르 등 리테일 연계 자금 수입 스위퍼 대시보드
   *  **Stewardship**: 탄소 배출 규제, 투명성 가해 수칙 등 친환경 ESG 지표 탭 분석 모듈
   * **Consult**: 고액 자산가 가입 onboarding 인증 암호메신저 연계 지원 상담 폼

---
*Created with Google AI Studio (Gemini 2.0 Flash).*
