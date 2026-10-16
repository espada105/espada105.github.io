# 작업 규칙

## 목적 및 범위

- GitHub Pages에 게시할 개인 포트폴리오를 만든다. 자기소개를 먼저, 프로젝트를 아래에 배치한다.
- UI 완성도를 최우선으로 삼는다. 타이포그래피, 구도, 이미지, 여백, 반응형, 모션을 함께 설계한다.
- README.md는 사용자의 명시적 요청 없이 수정하지 않는다.
- 작업 계획, 조사, 결정, 검증 기록은 `agentdocs/`에서 관리한다. 루트 AGENTS.md는 진입점으로만 유지한다.
- 스킬 원본과 그 실행에 필요한 참조 자료는 `.agents/skills/`에 유지한다.
- 소개, 경력, 프로젝트, 성과 수치를 지어내지 않는다. 미확인 콘텐츠는 명확한 임시 콘텐츠로 표시한다.

## UI 스킬 적용

UI 기획·구현·검토 전에 `.agents/skills/ui-ux-pro-max/SKILL.md`를 읽는다. 순수 Git 관리나 비시각적 유지보수에는 불필요하다.

원본의 `CLAUDE_PLUGIN_ROOT` 예제는 이 환경에서 사용하지 않는다. 아래처럼 저장소의 실제 절대 경로로 실행한다.

```powershell
$portfolioRoot = (git rev-parse --show-toplevel).Trim()
$uiSearch = "$portfolioRoot/.agents/skills/ui-ux-pro-max/scripts/search.py"
python -B $uiSearch "personal portfolio showcase" --design-system -p "Espada Portfolio" -f markdown
python -B $uiSearch "keyboard focus visible" --domain ux
```

- 새 페이지나 전체 디자인 방향에는 `--design-system`, 특정 문제에는 명시적인 `--domain`을 사용한다.
- 설치된 의존성과 선택한 기술을 확인한 다음에만 `--stack` 지침을 적용한다. Astro는 현재 제안 단계다.
- 제품 유형, 레이아웃, 폰트, 모션 결과의 적합성을 검토한다. 잘못된 매칭은 한 번 좁혀 재검색하고, 계속 부적합하면 일반 지침이라는 점을 밝힌다.
- 검색 결과는 권고이며 사용자의 요구나 프로젝트 결정을 대체하지 않는다. 한국어 글리프와 폰트 조합도 확인한다.
- 원본 스킬은 고정 버전을 유지하고 프로젝트별 보완 사항은 이 문서에 적는다.

## 디자인 결정 관리

- 확정한 디자인 토큰과 방향은 `agentdocs/design-system/MASTER.md`에 기록한다.
- 페이지별 차이는 `agentdocs/design-system/pages/`에 기록한다.
- 자동 생성된 검색 결과를 확정 디자인으로 간주하지 않는다. 원본 `--persist`는 사용하지 않고 검토한 결정만 위 경로에 정리한다.
- 기존 결정 문서를 읽고 변경 이유를 기록한다. 초기 다크 팔레트와 React/Motion 조합은 확정 사항이 아니다.

## 검증 및 완료 보고

- 구현 후 브라우저에서 375, 768, 1024, 1440px 화면을 확인한다.
- 키보드 탐색, 포커스 표시, 텍스트 대비, 모션 감소, 텍스트 넘침, 이미지 로딩, 실제 링크를 확인한다.
- 실제 실행한 검사와 남은 제약을 구분해서 보고한다. 검사하지 않은 UI를 검증 완료로 표시하지 않는다.
- 빌드 결과물만 GitHub Pages에 배포하고 작업 문서·스킬을 사이트 자산에 포함하지 않는다.
