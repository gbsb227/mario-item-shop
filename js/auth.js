const auth = document.querySelector(".auth");

const authFunction = document.querySelector(".auth-function");

const authInfo = document.querySelector(".auth-info");

let authData;

const authDataLoad = async () => {
  try {
    authData = await supabaseCon.auth.getUser();
    console.log(authData.data.user);

    if (authData.data.user !== null) {
      authFunction.classList.add("hidden");
      auth.insertAdjacentHTML(
        "afterend",
        `
        <section class="auth-info">
          <p class="user-name">${authData.data.user.email} 님</p>
          <button class="logout" onclick="logoutHandle()">로그아웃</button>
        </section>
        `
      );
    }
  } catch (err) {
    console.log(err);
  }
};

authDataLoad();

// (async () => {
//   const {
//     data: { user },
//   } = await supabaseCon.auth.getUser();
//   console.log({
//     data: { user },
//   });

//   // userName.textContent = user.email;
//   // authFunction.classList.add("hidden");
//   authFunction.classList.add("hidden");
//   auth.insertAdjacentHTML(
//     "afterend",
//     `
//     <section class="auth-info">
//       <p class="user-name">000님</p>
//       <button class="logout" onclick="logoutHandle()">로그아웃</button>
//     </section>
//   `
//   );
//   // authInfo.classList.remove("hidden");
// })();

const logoutHandle = async (e) => {
  try {
    let { error } = await supabaseCon.auth.signOut();
    alert("로그아웃 되었습니다");
  } catch {
    console.log(error);
    alert("로그아웃 실패");
  }
  location.reload(true);
};
