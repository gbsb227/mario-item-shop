const email = document.querySelector("#user-id");
const password = document.querySelector("#user-pw");
const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", async () => {
  try {
    const { data, error } = await supabaseCon.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error !== null) {
      alert("로그인에 실패했습니다.");
      return;
    }
    alert("로그인에 성공했습니다.");
    console.log(error);
    location.href = "/";
  } catch {
    alert("로그인에 실패했습니다.");
  }
});
