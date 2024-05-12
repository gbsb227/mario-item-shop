const postTitle = document.querySelector(".post-title");

const postContent = document.querySelector(".post-content");

const button = document.querySelector("button");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const { error } = await supabaseCon.from("posts").insert({
      writer: authData.data.user.email,
      title: postTitle.value,
      content: postContent.value,
    });
  } catch {
    alert("작성에 실패했습니다.");
  }
  location.href = "community.html";
});
