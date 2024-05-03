## 1. API 설계

🚩기능1 : **Member API**
  1. 로그인 ⇒ app.POST /login
  2. 회원 가입 ⇒ app.POST /join
  3. 회원 탈퇴 ⇒ app.GET /users/:id
  4. 회원 정보 조회 (개별 조회) ⇒ app.DELETE /users/:id

<br>

🚩기능2 : **Channel API**
  1. 채널 생성 ⇒ app.POST /channel
  2. 채널 삭제 ⇒ app.PUT /channel/:id
  3. 채널 수정 ⇒ app.DELETE /channel/:id
  4. 채널 전체 조회 ⇒ app.GET /channels
  5. 채널 개별 조회 ⇒ app.GET /channels/:id
  
---
🚨Tip)
  1. if 긍정문으로 사용
  2. 중복되는 코드를 최소화하기
