# 구현 기록

## Graph Focus Lines + HUD Position — 2026-10-16

노드 hover와 키보드 focus 시 해당 노드의 `data-index`에 연결된 SVG 간선에 `is-connected` 클래스를 적용해 밝은 선과 가벼운 glow로 강조했다. Contact의 이메일 하위 노드도 이 규칙을 따른다. 그래프 HUD는 좌측 하단으로 재배치했고, `SEONGINHONG`은 좌표값 위에, Overview 링크는 좌측 상단에 뒀다.

## Recruiter Overview + Contact — 2026-10-16

Profile에서 다섯 상위 분류로 가는 간선을 각각 절반 길이로 압축하고, 연관 하위 군집도 가까운 위치로 재배치했다. Contact에 `mailto:tjddls207@gmail.com` 이메일 노드를 추가했다.

그래프 상단의 `OVERVIEW` 링크는 새 정적 `/overview/` 페이지로 연결된다. 이 페이지는 채용 담당자가 빠르게 읽을 수 있도록 역할·TelePIX 경험·관심 기술·한서대학교 학력·대표 프로젝트·연락 수단을 랜딩 페이지 형태로 요약한다.

## Compact Live Graph Motion — 2026-10-16

하위 노드 좌표를 부모 분류 노드 주위로 다시 배치해 간선 길이를 줄였다. `src/pages/index.astro`의 별도 클라이언트 스크립트는 각 노드에 다른 위상의 2–6px 드리프트를 적용하고, 매 프레임 SVG 간선의 양 끝점을 같은 이동 좌표로 갱신한다. 움직임은 그래프의 부모·자식 관계를 보이기 위한 것이며, `prefers-reduced-motion`에서는 실행하지 않는다.

`pixel.css`에서 대제목인 branch 노드를 15–21px, 700 굵기와 밝은 색으로 올리고 점도 16px로 키웠다. 하위 노드는 10px으로 유지해 위계를 분명히 했다.

## Public Portfolio Content Graph — 2026-10-16

`src/pages/index.astro`를 6개의 상위 분류와 16개의 하위 노드로 확장했다. 중심 `Profile`에서 Skills, Main Projects, Research, Experience, Contact로 이어지고, 각 하위 노드는 자신이 속한 분류 점에만 연결된다. 모든 노드는 점이 좌표 기준이며 라벨은 점 바로 아래에 렌더링한다.

하위 노드는 GitHub와 LinkedIn 공개 정보에서 확인한 Python·LLM Agents·MCP/API, Satellite Image Agent·Medical AI Platform·UAV Control·NewRecipe, 세 편의 연구, TelePIX·LG Aimers·한서대 연구실, GitHub·LinkedIn 링크로 구성했다. 선택하면 오른쪽 패널에 제목·짧은 설명·공개 출처 링크를 표시하고 URL의 `?node=` 상태와 브라우저 뒤로가기를 지원한다.

## GitHub 기반 하위 노드 조사 — 2026-10-16

공개 GitHub 계정 `espada105`의 저장소를 확인해, 다음 그래프 하위 노드 후보를 선별했다. 원본 저장소는 `Main Projects` 또는 `Skills`에, 포크이지만 README에 홍성인의 공동 작업 역할이 명시된 저장소는 `Collaborative Projects` 성격으로 표시한다. GitHub만으로 회사·고용 경력은 확인할 수 없으므로 `Career`에는 내용을 임의로 넣지 않는다.

- `Main Projects`: Satellite Image Analysis Agent (MVP Skeleton), NewRecipe, UAV control using LLM.
- `Skills`: Python, LangChain / LangGraph, FastAPI / FastMCP, LLM, Unity / Ollama. 이 항목은 `AI_Engineering_Tech_Stack` 및 각 프로젝트 README에 명시된 기술로 제한한다.
- `Collaborative Projects`: Brain Tumor MRI Classification, LG Aimers pregnancy-success prediction, Satellite Simulator. 포크 상태와 팀 구성은 각각의 저장소에서 확인했다.
- `Side Projects`: Personal Assistant SION, Document Summarizer AI Assistant는 원본 Python 저장소이나 상세 설명이 더 필요하므로 대표 노드보다 확장 노드 후보로 보류한다.

출처: GitHub 공개 프로필과 각 공개 저장소 README. 이후 구현에서는 노드 클릭 시 해당 저장소 링크와 저장소에 적힌 짧은 설명만 노출한다.

## LinkedIn 교차 조사 및 콘텐츠 구조 — 2026-10-16

공개 LinkedIn 프로필 `seongin-hong-2b95b7345`의 검색 노출 정보와 GitHub를 교차 확인했다. 직접 프로필 요청은 LinkedIn의 요청 제한으로 열리지 않았지만, 검색 결과에 공개된 항목을 사용했다. 홈의 대제목과 하위 노드는 다음 구조로 정리한다.

- `Profile`: Hong Seongin · AI Software Engineer · LLM Agents & AI Applications. 경력 하위 노드는 TelePIX Co., Ltd.로 표시한다.
- `Skills`: Python, LangChain, LangGraph, FastAPI, FastMCP, LLM Agents, MCP, Unity, Ollama, Computer Vision. 앞의 여섯 기술은 GitHub의 AI Engineering Tech Stack 저장소에, Unity·Ollama는 UAV 프로젝트 README에 근거한다.
- `Main Projects`: Satellite Image Analysis Agent (FastAPI/MCP/RAG), Medical Artificial Intelligence Platform (Agent2Agent/MCP), LLM for UAV Control in Unity, NewRecipe (멀티모달 레시피 탐색).
- `Research & Publications`: "Conceptual Study on Multimodal AI-based Motion Surveillance Autonomous Satellite Agent" (KSAS), "HRNet-Based High-Performance Brain Tumor MRI Classification" (KIIT), "Recent Trends in AI Technology Applications and Related Policies in the Space Security Industry" (KASS).
- `Collaborative / Challenge Work`: HRNet Brain Tumor MRI Classification, LG Aimers pregnancy-success prediction, Satellite Simulator. 포크·팀 작업이라는 사실을 각 상세 설명에 표시한다.
- `Experience & Certificates`: TelePIX Co., Ltd.; LG Aimers 5·6·7기 수료. 학력은 한서대학교(2020–2026)와 대규모 항공우주 지능시스템 연구실 학부연구생 이력을 LinkedIn에서 확인했다.

수치 표기는 근거가 있는 경우에만 허용한다. HRNet 저장소의 99.69%와 LG Aimers 6기 저장소의 private score 0.74159 / 상위 22%는 각각의 프로젝트 상세에서만 사용하며, 프로필 전체의 성과처럼 요약하지 않는다.

## Dynamic Graph Node Network — 2026-10-16

정적인 소수 노드 대신, 선택 메뉴 시드마다 28개 노드를 생성하고 각 노드에서 가장 가까운 두 노드를 연결하는 SVG 네트워크를 구현했다. 네 개의 노드는 오른쪽 포커스 메뉴 위치의 밝은 종점으로 연결한다. 메뉴 전환 시 네트워크를 새로 그려 선택 메뉴와 그래프의 관계를 유지한다.

## Connected Cylindrical Navigator — 2026-10-16

원통 메뉴의 wheel 방향을 반전하고, 인접 메뉴가 보이지 않던 문제를 원통 회전 각과 깊이를 줄여 해결했다. 좌측에 선택 메뉴별 SVG 노드 그래프를 추가해 밝은 종점이 오른쪽 포커스 메뉴 방향에 닿도록 구성했다. 활성 메뉴 전환 시 SVG의 `data-active`와 메뉴 위치를 함께 갱신한다.

## Cylindrical Menu 전환 — 2026-10-16

오른쪽의 평면 메뉴 바를 CSS 3D 원통형 텍스트 목록으로 바꿨다. 각 메뉴의 활성 항목 대비 상대 위치를 -2부터 2까지 계산해 `rotateX`와 `translateZ`로 원통 표면에 놓고, wheel·클릭·방향키로 활성 인덱스를 바꿀 때 재배치한다.

## Pannable Graph Canvas — 2026-10-16

`src/pages/index.astro`를 전체 화면 탐색 월드로 재구성했다. 초기 진입 시 월드가 화면 중앙에 맞고, 76개의 결정론적 보조 노드와 다섯 메뉴 노드의 근접 이웃을 SVG 선으로 연결한다. pointer drag는 월드 위치를 옮기고 휠은 동일한 방향으로 월드를 이동하며 Ctrl/Cmd+휠은 포인터 기준 확대·축소를 수행한다. 포인터 좌표는 월드 좌표로 환산해 하단 HUD에 표시한다.

메뉴는 버튼과 ARIA tab 상태로 구현했으며, 개인 프로젝트 링크는 보조 탭 패널에 정적 링크로 유지해 빌드된 홈과 상세 페이지의 연결을 보존했다. 홈의 검은 배경·그래프·HUD 스타일은 `src/styles/pixel.css`에 관리한다.

## Graph Map + Content Panels — 2026-10-16

`src/pages/index.astro`의 그래프를 실제 탐색 상태로 교체했다. 다섯 카테고리는 허브와 주변 사각 노드로 구성되고, SVG 연결선은 hover한 군집만 강조한다. 라벨·사각 노드 모두 native button이며, 선택 시 `history.pushState`로 `?panel=<id>`를 남긴 뒤 해당 전체 화면 dialog 패널을 연다. 브라우저 뒤로가기, 닫기 버튼, Escape는 같은 상태를 되돌린다.

패널은 Profile의 제공된 이름·직무·소개, Personal Work의 실제 정적 프로젝트 링크만 사용한다. 나머지 패널은 준비 중이라는 사실만 표시한다. `pixel.css`는 지도 이동·노드 hover·배경 blur·패널 전환을 transform과 opacity 위주로 제어한다.

## Dense Graph Layer 보정 — 2026-10-16

참고 화면과 실제 구현의 밀도 차이를 확인한 뒤, 기존의 다섯 군집 연결을 118개 보조 노드와 다수의 근접·허브 연결로 교체했다. 그래프에는 작은 반복 라벨을 분산하고, 각 허브는 같은 카테고리의 다수 보조 노드에 방사형으로 연결한다. 인터랙션 대상은 기존의 접근 가능한 버튼으로 유지한다.

## Live Node Drift — 2026-10-16

정적 배경으로 보이던 문제를 해결하기 위해 모든 허브·보조 노드·연결선·반복 라벨을 같은 시간 축에서 갱신한다. 각 요소는 서로 다른 위상과 진폭의 낮은 속도 드리프트를 갖고, 선은 매 프레임 양 끝점을 다시 연결한다. 실제 메뉴 버튼도 허브 군집과 함께 움직이며 `prefers-reduced-motion`에서는 정지한다.

## Profile-Centred Portfolio Map — 2026-10-16

앞선 장식 중심 그래프를 제거하고 `src/pages/index.astro`를 6개 의미 노드만 갖는 구조로 교체했다. Profile은 중앙 루트이며 나머지 다섯 포트폴리오 분류에만 SVG 연결선을 둔다. 노드 pointer hover는 위치를 따라가는 짧은 설명 상자를 열고, 클릭은 오른쪽 `aside` 상세 패널을 연다. 이 패널은 지도와 함께 남으며 URL·브라우저 뒤로가기·닫기·Escape로 상태를 제어한다.

## Map Interaction Polish — 2026-10-16

`map-viewport`과 노드에서 텍스트 선택을 비활성화하고 background-coloured clearance를 라벨 주위에 추가했다. 이 여백은 보이지 않지만 선이 라벨과 겹쳐 보이지 않게 한다. 하단 좌측에는 최대 세 줄의 action log를 추가해 hover, click, panel open/close, drag, scroll 입력을 표시한다.

## Dot-Anchored Map Nodes — 2026-10-16

사용자 요청에 따라 라벨 가림 배경을 제거했다. 노드의 월드 좌표는 원형 점의 정확한 중심이 되고, SVG 간선의 시작·종료 좌표도 그 점만 참조한다. 메뉴명은 점의 아래에 렌더링한다.

## Right Rail / Empty Display 정리 — 2026-10-16

홈을 빈 좌측 디스플레이와 우측 메뉴 레일로 바꿨다. Main은 빈 상태를 유지하고, 다른 네 메뉴를 선택할 때에만 선택 메뉴의 이름을 왼쪽에 출력한다. 휠 이벤트는 오른쪽 메뉴 레일에만 연결했고, 클릭과 방향키에도 같은 modulo 순환을 적용했다.

## Spatial Loop Navigator 재구성 — 2026-10-16

사용자가 참고 사이트와 같은 시각적 방향을 요청해 홈을 검은 전체 화면 공간 탐색 화면으로 다시 만들었다. 선으로 연결한 노드 그래프는 이전 사용자 조건에 따라 포함하지 않았다. 다섯 메뉴 라벨·중앙 선택 콘텐츠·작은 리티클·좌표 읽기값을 HTML/CSS로 구현했으며, 메뉴는 wheel·클릭·화살표 키로 끝없이 순환한다.

## Loop Menu 포트폴리오 내비게이터 — 2026-10-16

Jungheon Lee의 범주 탐색 흐름을 참고해 홈 우측을 다섯 메뉴의 순환형 내비게이터로 재구성했다. 노드 그래프는 사용하지 않았고, 순수 HTML/CSS/TypeScript로 휠·클릭·화살표 키를 처리한다. 마지막 메뉴에서 한 단계 더 이동하면 첫 메뉴, 첫 메뉴에서 위로 이동하면 마지막 메뉴를 보이도록 구현했다.

## Profile Rail 홈 재구성 — 2026-10-16

사용자 피드백에 따라 전면 픽셀 히어로를 제거했다. 홈에만 공통 헤더·푸터를 숨기는 `homeShell` 레이아웃 옵션을 추가하고, 좌측 sticky 프로필 레일과 우측 경력·회사 프로젝트·개인 프로젝트 콘텐츠 패널을 구현했다. 경력과 회사 프로젝트는 데이터가 없으므로 준비 중 상태로 표시하며 내용을 만들지 않았다.

## Pixel 아이콘 기반 홈 업데이트 — 2026-10-16

StreamlineHQ의 Pixel 아이콘 언어를 참고해 실제 `/` 홈을 픽셀 아트 포트폴리오로 교체했다. Streamline의 직접 아이콘 또는 자산은 내려받거나 포함하지 않았다. `src/styles/pixel.css`의 독자적인 CSS 기하 도형으로 질감을 만들었고, `Layout.astro`에서 우주 테마 stylesheet를 더 이상 불러오지 않는다.

첫 화면에는 홍성인, AI Engineer, 제공된 소개문과 명시적인 프로필 사진 자리 표시를 배치했다. 작업 카드도 CSS 미리보기로 재구성해 우주·위성 자산이 홈에 나타나지 않게 했다. 기존 상세 페이지와 프로젝트 데이터 구조, GitHub 링크는 유지했다.

## Space 테마 업데이트

홍성인 / hongseongin / AI Engineer 반영. 헤더와 푸터, 메타데이터, 상세 페이지 제목, 파비콘을 갱신했다. 우주 테마는 `src/styles/space.css`, 히어로 구성은 `src/components/Satellite.astro`에 분리했다. 실제 개인 이력이나 성과는 추가하지 않았다. 프로젝트 추가 구조 및 기존 GitHub 계정 링크는 유지한다.

2026-09-10: 기존 CSS/SVG 위성은 인위적인 느낌이라는 피드백에 따라 사실적인 위성 PNG로 교체했다. 이미지 생성 도구로 투명 배경의 고해상도 위성을 만들고 `public/images/hero-satellite-photorealistic.png`에 저장했다. 이후 사용자는 생성 이미지를 쓰지 않고 제공한 TelePIX BlueBON PNG 원본을 사용하도록 지시했다. 제공한 검은 배경 이미지는 위성 구도와 디테일을 보존하고 배경만 투명 알파로 처리한 1364×1153 PNG로 만들었다. 최종 자산은 `public/images/telepix-bluebon-hires.png`이며, `Satellite.astro`에서 화면상 출처를 표시한다. 우주 배경과 텍스트는 CSS로 계속 제어한다.

2026-09-08

## 반영된 사용자 요구

첫 랜딩 화면에 소개만 표시하고, 스크롤 또는 Projects 링크로 프로젝트 목록으로 이동한다. 프로젝트 선택 시 `/projects/<slug>/` 정적 상세 페이지가 즉시 열린다. 공통 템플릿을 사용하며 프로젝트 JSON 파일 추가로 확장한다.

## 구성

- Astro 5.18.2 + TypeScript 5.9.3, 정적 출력. React 런타임은 현재 인터랙션에 필요하지 않아 추가하지 않았다.
- 최신 Astro 7.3.1의 Windows 네이티브 컴파일러는 OS Application Control 정책에 차단되었다. 시스템 정책은 변경하지 않고 WebAssembly 컴파일러를 사용하는 5.x로 구성했다.
- pnpm 잠금 파일 포함. esbuild 설치 스크립트만 허용하고 현재 사용하지 않는 sharp 설치 스크립트는 실행하지 않는다.
- JSON 스키마 검증, slug 중복 검사, 누락 이미지 검사, draft 제외, 자동 정렬.
- 기본 링크 기반 탐색. JavaScript는 목록 필터에만 사용한다.
- 실제 개인정보나 프로젝트 자료를 받지 않아 소개는 임시, 프로젝트 3개는 예시로 표시한다.
- README는 수정하지 않는다. 작업 문서는 agentdocs에 유지한다.

## 실행

```sh
pnpm install
pnpm dev
pnpm build
pnpm test
pnpm preview
```

개발 주소는 기본 `http://127.0.0.1:4321/`. 의존성 재현은 `pnpm install --frozen-lockfile`.

현재 실행 중인 미리보기는 로컬 개발 서버다. 공개 배포나 Git push는 수행하지 않았다.

## 그래프 상세 드릴다운 — 2026-10-16

- 대제목 선택은 기존 너비의 섹션 패널과 하위 노드 목록을 유지한다. 하위 노드 선택 시 패널을 화면 너비의 최대 70%로 확장하고, 스크롤 가능한 프로젝트 보드로 표시한다.
- 프로젝트 보드에는 저장소·공개 프로필에서 확인한 핵심 구성만 `PROJECT HIGHLIGHTS`로 표시한다. 위성 이미지 에이전트, 의료 AI 플랫폼, UAV 제어, NewRecipe에 검증된 기술 요소를 추가했다.
- 상세 보드의 `← BACK`은 직접 부모 노드로 돌아가며, 모든 노드 선택은 축소 후 대상 노드 중심으로 이동하는 카메라 전환을 사용한다. `prefers-reduced-motion`에서는 즉시 이동한다.

## 우측 목록 전용 그래프 카메라 — 2026-10-16

- 그래프 위의 노드는 상세 패널만 열고 카메라를 이동하지 않는다. 우측 상세 보드의 하위 목록을 선택할 때만 전체 그래프를 잠깐 축소해 보여 준 다음, 선택한 노드를 중심으로 1.35배까지 확대한다.
- 카메라의 중간 프레임은 Web Animations API의 `transform`만 사용한다. 패널 크기·좌표의 프레임별 변경과 임의의 `resize` 재중심화를 제거해 이동이 끊기지 않도록 했다.

## 그래프 종료·패널 전환 보완 — 2026-10-16

- 패널을 닫은 뒤 포인터 캡처가 남아도 drag 시각 상태가 남지 않도록 `lostpointercapture`와 `pointercancel`에서 dragging 클래스를 해제한다.
- 대제목 패널과 하위 상세 보드 간 폭 전환은 FLIP 방식으로 처리했다. 실제 폭은 한 번만 바뀌며, 화면에 보이는 전환은 transform으로 실행된다.
- 상세 보드가 열리면 현재 노드와 연결 간선에 hover와 동일한 고휘도 상태를 유지한다.
