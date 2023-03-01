// const wrap = document.getElementById('wrap');

// function wrapStyle(container, W, H, DIS, FD, JC, AI, BGC) {
//   container.style.widht = W;
//   container.style.height = H;
//   container.style.display = DIS;
//   container.style.flexDirection = FD;
//   container.style.justifyContent = JC;
//   container.style.alignItems = AI;
//   container.style.backgroundColor = BGC;
// }


// let wrapSet = wrapStyle(wrap, "100vw", "100vh", "flex", "space-around", "center", "blue");


// 객체 안의 데이터덩어리 > 프로퍼티(속성) > 키, 밸류 
// dataBox라는 함수안에 내가 사용할 속성(프로퍼티)을 obj라는 변수에 담았다
// 
function dataBox(W, H, DIS, FD, JC, AI, BGC) {
  let obj = {
    wid: W,
    hei: H,
    disp: DIS,
    flexD: FD,
    justifyC: JC,
    alignI: AI,
    backGCo: BGC
  }
  // 함수의 스코프 특성때문에 값이 사라지지 않게 return 해준다.
  return obj;
}
// 속성을 적용할 대상에 '접근'하기위한 선언부
let box2 = document.getElementsByClassName("box2");
let kimbob = box2[0];
console.dir(kimbob);

// dataMenu 대상에 접근하여 속성을 선택하는 구간
function dataMenu(kimbob, jaeryo) {
  kimbob.style.width = jaeryo.wid
  kimbob.style.height = jaeryo.hei;
  kimbob.style.display = jaeryo.disp;
  kimbob.style.flexDirection = jaeryo.flexD;
  kimbob.style.justifyContent = jaeryo.justifyC;
  kimbob.style.alignItems = jaeryo.alignI;
  kimbob.style.backgroundColor = jaeryo.backGCo;
}
// rubinChoice라는 변수안에 dataBox의 value값에 넣을 데이터를 입력! 수정이 필요하면 여기서만 수정하면 됨(유지보수 용이)
let rubinChoice = dataBox("42vw", "50vh", "flex", "space-around", "center", "green");
// dataBox에서 각각의 키값에 value가 들어간다 쇽쇽
// 그러면 이제 속성값들은 정해졌으니 dataMenu에 kimbob (매개변수에 속성을 적용시킬 대상(box2))와, rubinChoice(내가 적용시킬 밸류값을 가진 변수)를 담아준다
dataMenu(kimbob, rubinChoice);



