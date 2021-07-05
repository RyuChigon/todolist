# Redwit Intern Task: Todo List

Start: 2021.06.28

## 파일 설명

components, screens 폴더에는 해당 이름의 폴더로 또 한 번 구성되어 있습니다. 폴더 안에는 js 파일과 css 파일. 두 파일로 구성되어 있습니다.

public
ㄴ favicon.ico : html head 아이콘
ㄴ index.html

src
ㄴ actions
    ㄴ actions.js : actions 정의
    ㄴ index.js
    ㄴ types.js : types 정의

ㄴ components
    ㄴ CommentViewer : 댓글 보는 뷰어 (댓글 작성자, 댓글 내용)

    ㄴ Header : Header (게시판 이름, 작성 버튼)

    ㄴ Preview : MainScreen에서 나오는 글 목록 (버튼 형식으로 구현되어 있으며, 작성자,제목,좋아요,댓글 표시)

    ㄴ SButton : 일반적으로 사용하는 버튼. 이 버튼 형식을 사용하지 않는 버튼도 있습니다! 구현하다 만 버튼이기 때문에 새로운 버튼을 만들거나 이 버튼을 바꾸면 될 것 같아요.

    ㄴ SubScreen : MainScreen, ViewScreen에서 보여지는 왼쪽 부분

    ㄴ Viewer : ViewScreen에서 보여지는 Viewer로, 글 작성자, 제목, 내용 + 버튼(이전글, 다음글, 수정, 삭제, 목록) + 댓글 작성창으로 구성되어 있습니다.

    ㄴ Write : WriteScreen에서 사용되는 input들로 구성.

ㄴ reducers
    ㄴ index.js
    ㄴ reducer.js

ㄴ screens
    ㄴ MainScreen : 메인 페이지로 글 목록을 보여줌
    
    ㄴ PWCheckScreen : 글 수정/삭제시 비밀번호 확인을 위한 페이지

    ㄴ ViewScreen : 메인 페이지에서 글을 클릭시 글을 보여주는 페이지

    ㄴ WriteScreen : 글을 작성하는 페이지 (글을 수정시에도 이 페이지를 사용합니다)

ㄴ index.css
ㄴ index.js
