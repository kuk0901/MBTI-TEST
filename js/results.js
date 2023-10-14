import { results, mbtis } from "./data.js";

// 쿼리스트링 값 === mbti 결과 얻기
const mbti = new URLSearchParams(location.search).get("mbti");
console.log(mbti);
const result = results[mbtis[mbti]];

const titleEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const jobEls = document.querySelectorAll(".job");
const lectureEl = document.querySelector(".lecture");
const lectureImgEl = document.querySelector(".lecture img");

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach((boxEl, index) => {
  boxEl.innerHTML = result.results[index];
});
jobEls.forEach((jobEl, index) => {
  jobEl.innerHTML = result.jobs[index];
});
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;
