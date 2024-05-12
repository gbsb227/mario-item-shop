const boardContent = document.querySelector(".board-content");

const postButton = document.querySelector(".post-button");

let boardData;

const boardDataLoad = async () => {
  boardData = await supabaseCon.from("posts").select();
  // const { boardData, error } = await supabaseCon.from("posts").select();

  boardData.data.map((d) => {
    boardContent.insertAdjacentHTML(
      "afterend",
      `
      <section class="post board-row-style">
        <p class="post-title board-left-style">${d.title}</p>
        <p class="post-writer board-right-style">${d.writer}</p>
      </section>
    `
    );
  });
  console.log(boardData);
};

boardDataLoad();

// (async () => {
//   const { boardData, error } = await supabaseCon.from("posts").select();

//   boardData.reverse().map((d) => {
//     boardContent.innerHTML += `
//     <section class="post board-row-style">
//             <p class="post-title board-left-style">${d.title}</p>
//             <p class="post-writer board-right-style">${d.writer}</p>
//           </section>

//     `;
//   });
//   console.log(data);
// })();

postButton.addEventListener("click", () => {
  if (authData.data.user === null) {
    alert("로그인 후 이용해주세요");
    location.href = "login.html";
  } else {
    location.href = "upload.html";
  }
});
