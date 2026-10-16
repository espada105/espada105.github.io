# GitHub Pages 배포

`astro.config.mjs`의 site는 원격 저장소에 맞춘 `https://espada105.github.io`이다. 사용자 사이트 루트 경로를 사용한다.

`.github/workflows/pages.yml`은 수동 실행형 배포 워크플로다. 코드 커밋/푸시 후 저장소 Settings → Pages → Source를 GitHub Actions로 설정하고 Actions에서 Deploy portfolio to GitHub Pages를 실행한다.

워크플로: 잠금 파일로 설치 → 타입 검사 및 빌드 → 정적 경로 테스트 → dist만 업로드 → Pages 배포. 작업 문서와 스킬은 배포 결과에 포함하지 않는다.

아직 원격 Pages 설정을 변경하거나 워크플로를 실행하지 않았다. 실제 소개와 예시 프로젝트 교체 후 공개 배포를 권장한다. 배포가 완료되면 HTTPS 홈, 프로젝트 상세 주소 직접 방문, 모바일 화면을 다시 확인한다.
