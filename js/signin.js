const email = document.querySelector("#user-id");
const password = document.querySelector("#user-pw");
const signinButton = document.querySelector(".signin-button");

signinButton.addEventListener("click", async () => {
  try {
    const { data, error } = await supabaseCon.auth.signUp({
      email: email.value,
      password: password.value,
    });
    alert("회원가입에 성공했습니다.");
    window.location.href = "/";
  } catch {
    alert("회원가입 실패");
    console.log(error);
  }
});
