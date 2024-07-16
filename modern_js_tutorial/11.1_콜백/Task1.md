원문: https://ko.javascript.info/task/animate-circle-callback

<details>
  <summary>정답</summary>

  ```js
function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("안녕하세요!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() { // div의 크기변화가 끝났을 때
        div.removeEventListener('transitionend', handler); // 해당 이벤트리스너를 제거하고
        callback(div); // 안녕하세요! 를 띄우는 콜백을 실행시킨다.
      });
    }, 0);
  }
  ```
</details>
