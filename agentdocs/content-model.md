# 소개·프로젝트 콘텐츠 관리

## 소개

`src/data/profile.ts`에서 이름, 3줄 headline, 한국어 소개, GitHub 주소를 수정한다. 현재 문구는 임시 초안이다. 실제 소개로 바꾼 뒤 `draft: false`로 변경하면 안내가 사라진다.

## 프로젝트 추가

1. `src/data/projects/`의 JSON 파일 하나를 복사한다.
2. 파일명과 `slug`를 고유하게 바꾸고 아래 필드를 채운다.
3. 이미지는 `public/images/`에 넣고 `image`에 `/images/my-project.webp`처럼 적는다. 이미지가 없으면 `cover`에 지정한 추상 미리보기를 사용한다.
4. `pnpm build` 및 `pnpm test`로 검증한다. 목록, 카테고리 버튼, 상세 페이지와 다음 프로젝트 링크는 자동 생성된다.

```json
{
  "slug": "my-project",
  "order": 4,
  "title": "프로젝트 이름",
  "subtitle": "핵심을 설명하는 한 문장",
  "category": "Web",
  "year": "2026",
  "cover": "form",
  "tags": ["Astro", "TypeScript"],
  "summary": "프로젝트 개요",
  "role": "실제 담당 역할",
  "period": "2026.01 — 2026.03",
  "sample": false,
  "draft": false,
  "sections": [
    { "title": "배경과 문제", "body": "문제와 사용자의 상황" },
    { "title": "접근과 구현", "body": "선택한 해결책과 구현 과정" },
    { "title": "결과와 배움", "body": "확인한 결과와 개선 방향" }
  ]
}
```

- `order`: 작은 숫자가 먼저. 첫 번째 항목이 넓은 대표 프로젝트가 된다.
- `slug`: 영문 소문자·숫자·하이픈. 중복이나 잘못된 값은 빌드 오류로 알린다.
- `category`: 자유롭게 추가 가능. `all`은 전체 필터 예약어이므로 사용하지 않는다.
- `cover`: `form`, `orbit`, `play` 중 하나. 실제 이미지가 있으면 `image`를 우선 표시한다.
- `image`: 선택. `/images/` 아래 실제 파일 경로. 파일이 없으면 빌드에서 알려준다.
- `demo`, `repository`: 선택. 실제 HTTPS 주소를 넣으면 상세에 링크가 나타난다. 값이 없으면 버튼도 표시하지 않는다.
- `draft: true`: 홈과 상세 페이지 생성에서 제외한다.
- `sample: true`: 예시 표시. 실제 프로젝트로 교체하면 false로 바꾼다.
- `sections`: 원하는 만큼 추가 가능한 제목·본문 배열. 본문은 일반 텍스트로 렌더링한다.

새 프로젝트를 추가한 후 다시 빌드·배포해야 공개 사이트에 반영된다. 현재는 브라우저에서 편집하는 CMS가 아닌 Git 파일 기반 관리 방식이다.
