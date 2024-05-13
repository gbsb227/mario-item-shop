let superMushroomState = 0;
let upMushroomState = 0;
let superStarState = 0;

let states = { superMushroomState, upMushroomState, superStarState };

const orderedSuperMushroom = document.querySelector(
  ".ordered-super-mushroom-number"
);

const orderedUpMushroom = document.querySelector(
  ".ordered-1up-mushroom-number"
);

const orderedSuperStar = document.querySelector(".ordered-super-star-number");

const superMushroomNumber = document.querySelector(".super-mushroom-number");

const upMushroomNumber = document.querySelector(".up-mushroom-number");

const superStarNumber = document.querySelector(".super-star-number");

const plusSuperMushroomButton = document.querySelector(
  ".add-super-mushroom-number"
);

const minusSuperMushroomButton = document.querySelector(
  ".minus-super-mushroom-number"
);

const plusUpMushroomButton = document.querySelector(".add-up-mushroom-number");

const minusUpMushroomButton = document.querySelector(
  ".minus-up-mushroom-number"
);

const plusSuperStarButton = document.querySelector(".add-super-star-number");

const minusSuperStarButton = document.querySelector(".minus-super-star-number");

const render = function () {
  superMushroomNumber.textContent = states.superMushroomState;
  orderedSuperMushroom.textContent = states.superMushroomState;

  upMushroomNumber.textContent = states.upMushroomState;
  orderedUpMushroom.textContent = states.upMushroomState;

  superStarNumber.textContent = states.superStarState;
  orderedSuperStar.textContent = states.superStarState;
};

const changeSuperMushroomState = function (modState) {
  states.superMushroomState = modState;
  render();
};

const changeUpMushroomState = function (modState) {
  states.upMushroomState = modState;
  render();
};

const changeSuperStarState = function (modState) {
  states.superStarState = modState;
  render();
};

plusSuperMushroomButton.addEventListener("click", () => {
  changeSuperMushroomState(++superMushroomState);
});

minusSuperMushroomButton.addEventListener("click", () => {
  if (superMushroomState <= 0) {
    return;
  }
  changeSuperMushroomState(--superMushroomState);
});

plusUpMushroomButton.addEventListener("click", () => {
  changeUpMushroomState(++upMushroomState);
});

minusUpMushroomButton.addEventListener("click", () => {
  if (upMushroomState <= 0) {
    return;
  }
  changeUpMushroomState(--upMushroomState);
});

plusSuperStarButton.addEventListener("click", () => {
  changeSuperStarState(++superStarState);
});

minusSuperStarButton.addEventListener("click", () => {
  if (superStarState <= 0) {
    return;
  }
  changeSuperStarState(--superStarState);
});

const orderButton = document.querySelector(".order-button");

////////

// import Bootpay from "@bootpay/client-js";
// const bootpayCon = bootpay.Bootpay;
// console.log(bootpayCon);

orderButton.addEventListener("click", async () => {
  if (authData.data.user === null) {
    alert("로그인 후 이용하세요");
    return;
  }

  // alert(
  //   `슈퍼버섯 ${states.superMushroomState}개, 1up버섯 ${states.upMushroomState}개, 슈퍼스타 ${states.superStarState}개 주문`
  // );
  try {
    const response = await Bootpay.requestPayment({
      application_id: "59a4d323396fa607cbe75de4",
      price: (superMushroomState + upMushroomState + superStarState) * 100,
      order_name: "테스트결제",
      order_id: "TEST_ORDER_ID",
      pg: "다날",
      method: "카드",
      tax_free: 0,
      user: {
        id: authData.data.user.email,
        username: authData.data.user.email,
        phone: "01000000000",
        email: authData.data.user.email,
      },
      items: [
        {
          id: "supermushroom",
          name: "슈퍼버섯",
          qty: superMushroomState,
          price: 100,
        },
        {
          id: "upmushroom",
          name: "1up버섯",
          qty: upMushroomState,
          price: 100,
        },
        {
          id: "superstar",
          name: "슈퍼스타",
          qty: superStarState,
          price: 100,
        },
      ],
      extra: {
        open_type: "iframe",
        card_quota: "0,2,3",
        escrow: false,
      },
    });
  } catch (err) {
    if (err.error_code === "RC_PROCESS_CANCELLED") {
      alert("결제가 취소되었습니다.");
    } else {
      alert("각 물건은 1개 이상 구매해야 합니다.");
    }
  }
});
