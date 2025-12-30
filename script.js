function responsiveNavbarAnimation(){

  let menuBar = document.querySelector("#responsive_navbar")
  let flag = false
  document.querySelector(".nav_menu_icon i").addEventListener("click", ()=>{
    if (!flag){
      menuBar.style.transform = "translateX(0%)"
      flag = true
    } else {
      menuBar.style.transform = "translateX(110%)"
      flag = false
    }
  })

}
responsiveNavbarAnimation()

function bubbleAnimation(){
  let bubble1 = document.querySelectorAll('.bubble1');
  let bubble2 = document.querySelectorAll('.bubble2');
  let bubble3 = document.querySelectorAll('.bubble3');
  
  let randomTop1 = [
    "34.85vh", "7.10vh", "62.40vh",
    "18.95vh", "49.30vh", "71.65vh",
    "26.20vh", "55.80vh", "3.90vh"
  ]
  let randomTop2 = [
    "68.10vh", "41.75vh", "12.60vh",
    "77.40vh", "29.95vh", "59.20vh",
    "21.30vh", "46.85vh", "65.55vh",
    "9.45vh"
  ]
  
  let randomTop3 = [
    "38.10vh", "73.95vh", "15.80vh", "52.40vh", "27.65vh",
    "6.25vh", "61.90vh", "33.20vh", "70.30vh", "44.60vh",
    "19.75vh", "57.10vh", "24.40vh", "75.10vh", "11.30vh",
    "48.70vh", "66.85vh", "31.55vh", "54.95vh", "2.10vh",
    "34.85vh", "7.10vh", "62.40vh", "18.95vh", "49.30vh",
    "71.65vh", "26.20vh", "55.80vh", "3.90vh", "68.10vh"
  ]
  
  bubble1.forEach((bubb, i) => {
      bubb.style.bottom = randomTop1[i] ;
  })
  bubble2.forEach((bubb, i) => {
      bubb.style.bottom = randomTop2[i] ;
  })
  bubble3.forEach((bubb, i) => {
      bubb.style.top = randomTop3[i] ;
  })
  
  bubble1.forEach((bubb, i) => {
  gsap.to(bubb, {
      y: -620,
      duration: 15,
      repeat: -1,
      ease: "linear",
      delay: i * 0.5
  });
  });
  
  bubble2.forEach((bubb, i) => {
    gsap.to(bubb, {
      y: -620,
      duration: 7,
      repeat: -1,
      ease: "linear",
      delay: i * 0.4
    });
  });
  
  bubble3.forEach((bubb, i) => {
    gsap.to(bubb, {
      y: -620,
      duration: 5,
      repeat: -1,
      ease: "linear",
      delay: i * 0.2
    });
  });

}
bubbleAnimation()

function heroTextAnimation(){
  const h1 = document.querySelector("#title");
  
  let words = h1.innerText.split(" ");
  h1.innerHTML = ""
  let splitedWords = []
  words.map((word) => {
    splitedWords.push(word.split(""))
  })
  
  splitedWords.forEach(wordBox => {
    let div = document.createElement("div");
    wordBox.forEach(word => {
      let span = document.createElement("span");
      span.innerText = word;
      span.style.display = "inline-block";
      div.appendChild(span);
    })
    div.style.display = "inline-block";
    div.style.marginRight = "10px";
    h1.appendChild(div);
  })
  
  let tl = gsap.timeline();
  tl.from(".lower", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })
  tl.from("#title span", {
    display: "none",
    duration: 0.1,
    stagger: 0.08,
    ease: "power2.out"
  });

}
heroTextAnimation()

function swiperAndInnerSwiperAnimations(){
  var swiper = new Swiper(".mySwiper", {
        // autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,                 // infinite loop
        speed: 400,                 // slide transition time (ms)
        autoplay: {
          delay: 4000,              // time gap between slides (ms)
          disableOnInteraction: false
        },
      });
  
  
  let slide = document.querySelectorAll('.swiper-slide');
  let animatedLine = document.querySelectorAll('.animated-line');
  let lineAnimationBox = document.querySelectorAll('.swiper-slide .texts .heading');
  slide.forEach((slid, index) => {
    slid.addEventListener('mouseenter', () => {
      animatedLine[index].style.width = "100%";
      lineAnimationBox[index].style.alignItems = "flex-start";
    })
    slid.addEventListener('mouseleave', () => {
      animatedLine[index].style.width = "0%";
      lineAnimationBox[index].style.alignItems = "flex-end";
    })
  });

}
swiperAndInnerSwiperAnimations()

function gameCardAnimation(){
let gamecard = document.querySelectorAll('.game_card');
let cardoverlay = document.querySelectorAll('.card_overlay');
let cardoverlayicon = document.querySelectorAll('.card_overlay i');

gamecard.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(cardoverlay[index], {
      y: 0,
      duration: 0.5,
      ease: "back.out(2)",
      overwrite: "auto"
    });

    gsap.to(cardoverlayicon[index], {
      scale: 1.3,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(cardoverlay[index], {
      y: "100%",
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });

    gsap.to(cardoverlayicon[index], {
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
});


}
gameCardAnimation()

function gameCardScrollAnimation(){
  gsap.from("#popular_games .popular_upper", {
    x : -400,
    opacity: 0,
    duration:1,
    ease : "power2.inOut",
    scrollTrigger : {
      trigger : "#popular_games .popular_upper",
      scroller : "body",
      // markers : true,
      start:"top 80%"
    }
  })
  gsap.from("#popular_games .popular_lower", {
    x : 400,
    opacity: 0,
    duration:1,
    ease : "power2.inOut",
    scrollTrigger : {
      trigger : "#popular_games .popular_lower",
      scroller : "body",
      // markers : true,
      start:"top 85%"
    }
  })
  
}
gameCardScrollAnimation()

function whyChooseInnerAnimation(){
  let why_choose_card = document.querySelectorAll(".why_choose_card")
  let why_choose_redline = document.querySelectorAll(".whychoose_redline")
  let why_choose_logoBackground = document.querySelectorAll(".why_choose_card .logo_div")
  let why_choose_logo = document.querySelectorAll(".why_choose_card .logo_div i")
  why_choose_card.forEach((card, idx)=>{
    card.addEventListener("mouseenter", ()=>{
      why_choose_redline[idx].style.width = "100%"
      why_choose_logoBackground[idx].style.backgroundColor = "red"
      why_choose_logoBackground[idx].style.rotate = "10deg"
      why_choose_logo[idx].style.color = "#fff"
    })
    card.addEventListener("mouseleave", ()=>{
      why_choose_redline[idx].style.width = "50px"
      why_choose_logoBackground[idx].style.backgroundColor = "#270000"
      why_choose_logoBackground[idx].style.rotate = "0deg"
      why_choose_logo[idx].style.color = "red"
    })
  })
}
whyChooseInnerAnimation()

function whyChooseGameonixAnimationScrollTrigger(){

  gsap.from("#why_choose_gameonix .why_choose_gameonix_upper", {
    opacity : 0,
    scale : 0.5,
    duration : 1,
    scrollTrigger : {
      trigger : "#why_choose_gameonix .why_choose_gameonix_upper",
      scroller : "body",
      // markers : true,
      start : "top 85%"
    }
  })
  // let why_choose_card = document.querySelectorAll(".why_choose_card")
  gsap.from(".why_choose_gameonix_lower", {
    opacity : 0,
    x : -500,
    duration : 0.8,
    // stagger : 0.2,
    scrollTrigger : {
      trigger : ".why_choose_gameonix_lower",
      scroller : "body",
      // markers : true,
      start : "top 70%"
    }
  })

}
whyChooseGameonixAnimationScrollTrigger()

function DownloadAndBackedByScrollTrigger(){

  gsap.from("#download_gameonix h1", {
    x : -200,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#download_gameonix h1",
      scroller : "body",
      // markers : true,
      start : "top 85%"
    }
  })
  gsap.from("#download_gameonix .download_gameonix_para", {
    x : 200,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#download_gameonix .download_gameonix_para",
      scroller : "body",
      // markers : true,
      start : "top 85%"
    }
  })
  gsap.from(".lighted_button", {
    scale : 0,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : ".lighted_button",
      scroller : "body",
      // markers : true,
      start : "top 90%"
    }
  })


  gsap.from("#backed_by h1, #backed_by .red_line, #backed_by p", {
    x : 400,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#backed_by",
      scroller : "body",
      // markers : true,
      start : "top 75%"
    }
  })
  gsap.from("#backed_by .add_box", {
    x : -400,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#backed_by .add_box",
      scroller : "body",
      // markers : true,
      start : "top 80%"
    }
  })

}
DownloadAndBackedByScrollTrigger()

function questionAnswerEffect(){
  let questionBox = document.querySelectorAll("#questions .many_questions .question_box .ques")
  let ans = document.querySelectorAll("#questions .many_questions .question_box .ans")
  let upDownLogo = document.querySelectorAll("#questions .many_questions .question_box .ques i")
  let ansToggle = [0,0,0,0,0]

  questionBox.forEach((box, idx) =>{
    box.addEventListener("click", ()=>{
      if(!ansToggle[idx]){
        ans[idx].style.height = "auto"
        ans[idx].style.paddingTop = "15px"
        ans[idx].style.paddingBottom = "15px"
        upDownLogo[idx].style.rotate = "0deg"
        ansToggle[idx] = 1
        for(let i = 0 ; i<ansToggle.length ; i++){
          if (ansToggle[i] == 1){
            if(i == idx) continue
            else {
              ans[i].style.height = "0"
              ans[i].style.paddingTop = "0"
              ans[i].style.paddingBottom = "0"
              upDownLogo[i].style.rotate = "180deg"
              ansToggle[i] = 0
              break
            }
          }  
        }
        console.log(ansToggle)
      }else{
        ans[idx].style.height = "0"
        ans[idx].style.paddingTop = "0"
        ans[idx].style.paddingBottom = "0"
        upDownLogo[idx].style.rotate = "180deg"
        ansToggle[idx] = 0
        console.log(ansToggle)
      }
    })
  })

}
questionAnswerEffect()

function questionAnswerScrollTrigger(){

  gsap.from("#questions .question_heading", {
    x : 400,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#questions .question_heading",
      scroller : "body",
      // markers : true,
      start : "top 75%"
    }
  })
  gsap.from("#questions .many_questions", {
    x : -400,
    opacity : 0,
    duration : 0.5,
    scrollTrigger:{
      trigger : "#questions .many_questions",
      scroller : "body",
      // markers : true,
      start : "top 75%"
    }
  })

}
questionAnswerScrollTrigger()