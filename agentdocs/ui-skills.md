# UI 스킬 선정 및 복구 기록

조사일 및 복구일: 2026-09-08. 이전 조사에서 확인한 GitHub API 수치를 기록한 것이며 복구 시 다시 순위를 조사한 것은 아니다.

| 후보 | 조사 시점 스타 | 판단 |
| --- | ---: | --- |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 125,974 | UI 전용 프로젝트. Codex 설치 구조, 로컬 디자인 검색, Astro 등 스택 지침 제공. 기본 스킬로 선정. |
| [Impeccable](https://github.com/pbakaus/impeccable) | 66,470 | 비평, 시각적 마감, 모션 및 브라우저 반복 작업의 후속 후보. |
| [Anthropic frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | 175,144 | 개성 있는 프런트엔드 디자인 지침. 스타는 전체 스킬 모음 기준. |
| [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) | 30,959 | React 및 웹 구현 품질 보조 후보. 스타는 전체 모음 기준. |

스타는 공개 관심도의 대리 지표이며 Codex 사용량이나 결과물 품질 순위가 아니다. 확인한 자료만으로 Codex 성능 1위라고 단정하지 않는다. UI 전용 프로젝트의 관심도, Codex 호환성, 작업 적합성을 종합하여 선정했다.

## 설치 정보

- 설치 위치: `.agents/skills/ui-ux-pro-max/`
- 원본: `nextlevelbuilder/ui-ux-pro-max-skill`
- 고정 커밋: `4aad0584d92131626b16d4ff4d77f0455385013c`
- 원본 경로: `.claude/skills/ui-ux-pro-max/`
- 기본 skill-installer로 데이터·스크립트·참조를 함께 복구했다.
- 원본 루트의 MIT LICENSE를 함께 보존한다.
- 전역 설정이 아닌 저장소 전용 구성이다. 루트 AGENTS.md에서 상세 규칙으로 연결한다.
- Python 3 표준 라이브러리와 로컬 데이터를 사용하는 BM25 기반 검색이다.

[OpenAI 공식 문서](https://learn.chatgpt.com/docs/build-skills)에 명시된 저장소 스킬 위치는 `.agents/skills`이다. 다음 요청부터 사용하며, 목록에 나타나지 않을 경우 Codex를 다시 시작한다.

## 확인된 한계

이전 실행에서 `developer portfolio editorial`은 FAQ/Documentation 패턴으로 잘못 매칭되었다. `personal portfolio showcase`로 좁히자 관련 후보를 반환했지만 손글씨 폰트와 즉시 전환 등의 제안은 그대로 채택하기 어렵다. 결과를 심사해서 적용해야 하며, 웹 UI의 시각적 검증을 대체하지 않는다.

## 유지보수

업데이트 시 새 커밋을 별도 경로에 받아 기존 버전과 비교한 후 반영한다. 고정 커밋과 라이선스를 갱신하고 검색 동작을 확인한다. 프로젝트별 규칙은 `agentdocs/workflow.md`에 유지한다.

## 모션 스킬 추가

추가일: 2026-10-16. 포트폴리오의 UI 모션 작업과 화면 녹화 기반 재현 작업을 지원하기 위해 아래의 저장소 전용 스킬을 추가했다. 모두 MIT 라이선스 원본을 함께 보존한다.

| 원본 | 고정 커밋 | 설치 범위 | 이 프로젝트에서의 용도 |
| --- | --- | --- | --- |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | `2d228630ba1446365f614a108cb8252f1feda202` | `emil-design-eng`, `animate`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-performance`, `animation-vocabulary` | 모션의 필요성·타이밍·easing을 판단하고 기존 애니메이션을 검토한다. |
| [iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills) | `b6dba3eb759726845a44163ff0bad70dd9e7fbb6` | `gsap-web`, `60fps-animation`, `accessible-animation`, `micro-interaction`, `svg-animation`, `page-transition-animation`, `lottie-animation`, `glassmorphism`, `ascii-animation` | Astro 사이트의 스크롤, 마이크로 인터랙션, 성능 및 모션 접근성을 구현한다. |
| [KumarSashank/motiscope](https://github.com/KumarSashank/motiscope) | `c0ce3ddedfbe59f445b74372a064e908587a648a` | `analyze`, `doctor`, `recreate`, `rebuild-site`, 공용 `scripts/`, `references/` | 화면 녹화에서 모션을 측정한 뒤 GSAP·CSS·Framer Motion·Lottie 코드로 재현한다. |

모든 스킬은 `.agents/skills/`에 설치했다. Motiscope의 네 개 워크플로가 기대하는 공용 파일은 `.agents/scripts/`와 `.agents/references/`에 두어, `SKILL.md`의 상대 경로 fallback이 동작하도록 구성했다. `python .agents/scripts/mvsetup.py --check`가 성공하여 분석 사전 점검도 통과했다. 실제 녹화 분석은 로컬 영상 파일을 받았을 때에만 실행한다.
