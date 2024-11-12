function showImage(room) {
    var images = document.getElementsByClassName('image-container');
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
    document.getElementById(room + '-images').classList.add('active');
  }
  window.onload = function() {
  document.getElementById('entryway-images').classList.add('active');
};
/*이미지 슬라이드 js*/
let slideIndex = 1;

function openModal() {
document.getElementById('myModal').style.display = "block";
document.body.style.overflowY = "hidden"; // 스크롤바 숨기기
}

function closeModal() {
document.getElementById('myModal').style.display = "none";
document.body.style.overflowY = "auto"; // 스크롤바 다시 보이기
}

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
/* 1번째 모달 */
let slideIndex = 1;

function openModal() {
document.getElementById('myModal').style.display = "block";
document.body.style.overflowY = "hidden"; // 스크롤바 숨기기
}

function closeModal() {
document.getElementById('myModal').style.display = "none";
document.body.style.overflowY = "auto"; // 스크롤바 다시 보이기
}

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let slides = document.getElementsByClassName("mySlides");
if (n < 1) {
  slideIndex = 1;
} else if (n > slides.length) {
  slideIndex = slides.length;
} else {
  slideIndex = n;
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "block";

// Disable prev and next buttons when on first or last slide
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
if (slideIndex === 1) {
  prevButton.style.color = "grey";
  prevButton.style.cursor = "default";
} else {
  prevButton.style.color = "white";
  prevButton.style.cursor = "pointer";
}
if (slideIndex === slides.length) {
  nextButton.style.color = "grey";
  nextButton.style.cursor = "default";
} else {
  nextButton.style.color = "white";
  nextButton.style.cursor = "pointer";
}
}
showSlides(slideIndex);
}
/* 2번째 모달 */
let slideIndex2 = 1;

function openModal2() {
document.getElementById('myModal2').style.display = "block";
document.body.style.overflowY = "hidden"; // 스크롤바 숨기기
}

function closeModal2() {
document.getElementById('myModal2').style.display = "none";
document.body.style.overflowY = "auto"; // 스크롤바 다시 보이기
}

function plusSlides2(n) {
showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
let slides = document.getElementsByClassName("mySlides2");
if (n < 1) {
  slideIndex2 = 1;
} else if (n > slides.length) {
  slideIndex2 = slides.length;
} else {
  slideIndex2 = n;
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex2 - 1].style.display = "block";

// Disable prev and next buttons when on first or last slide
let prevButton = document.querySelector(".prev2");
let nextButton = document.querySelector(".next2");
if (slideIndex2 === 1) {
  prevButton.style.color = "grey";
  prevButton.style.cursor = "default";
} else {
  prevButton.style.color = "white";
  prevButton.style.cursor = "pointer";
}
if (slideIndex2 === slides.length) {
  nextButton.style.color = "grey";
  nextButton.style.cursor = "default";
} else {
  nextButton.style.color = "white";
  nextButton.style.cursor = "pointer";
}
}
showSlides2(slideIndex2);

/* 3번째 모달 */
let slideIndex3 = 1;

function openModal3() {
document.getElementById('myModal3').style.display = "block";
document.body.style.overflowY = "hidden"; // 스크롤바 숨기기
}

function closeModal3() {
document.getElementById('myModal3').style.display = "none";
document.body.style.overflowY = "auto"; // 스크롤바 다시 보이기
}

function plusSlides3(n) {
showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
let slides = document.getElementsByClassName("mySlides3");
if (n < 1) {
  slideIndex3 = 1;
} else if (n > slides.length) {
  slideIndex3 = slides.length;
} else {
  slideIndex3 = n;
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex3 - 1].style.display = "block";

// Disable prev and next buttons when on first or last slide
let prevButton = document.querySelector(".prev3");
let nextButton = document.querySelector(".next3");
if (slideIndex3 === 1) {
  prevButton.style.color = "grey";
  prevButton.style.cursor = "default";
} else {
  prevButton.style.color = "white";
  prevButton.style.cursor = "pointer";
}
if (slideIndex3 === slides.length) {
  nextButton.style.color = "grey";
  nextButton.style.cursor = "default";
} else {
  nextButton.style.color = "white";
  nextButton.style.cursor = "pointer";
}
}
showSlides3(slideIndex3);