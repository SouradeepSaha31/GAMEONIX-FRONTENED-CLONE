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
      bubb.style.top = randomTop1[i] ;
  })
  bubble2.forEach((bubb, i) => {
      bubb.style.top = randomTop2[i] ;
  })
  bubble3.forEach((bubb, i) => {
      bubb.style.top = randomTop3[i] ;
  })
  
  bubble1.forEach((bubb, i) => {
  gsap.to(bubb, {
      y: -520,
      duration: 15,
      repeat: -1,
      ease: "linear",
      delay: i * 0.5
  });
  });
  
  bubble2.forEach((bubb, i) => {
    gsap.to(bubb, {
      y: -520,
      duration: 7,
      repeat: -1,
      ease: "linear",
      delay: i * 0.4
    });
  });
  
  bubble3.forEach((bubb, i) => {
    gsap.to(bubb, {
      y: -520,
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


let gamecard = document.querySelectorAll('.game_card');
let cardoverlay = document.querySelectorAll('.card_overlay');
let cardoverlayicon = document.querySelectorAll('.card_overlay i');
gamecard.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(cardoverlay[index], {
      y:0,
      duration: 0.5,
      ease: "back.out(2)"
    })
    gsap.to(cardoverlayicon[index], {
      scale:1.3,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out"
    })
  })
  card.addEventListener('mouseleave', () => {
    gsap.to(cardoverlay[index], {
      y:"100%",
      duration: 0.2,
      ease: "power2.out"
    })
    gsap.to(cardoverlayicon[index], {
      scale:0,
      duration: 0.5,
      ease: "power2.out"
    })
  })
})