//02. 영화 정보 함수 만들기
const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

//03. 함수의 반환값 사용하기
const message = getMovieMessage("인셉션", 8.4);

console.log(message);

//04. 제목 변경하기
const title = document.querySelector(".title");

title.textContent = "오늘의 추천 영화";

//05. 설명 영역 강조하기
const description = document.querySelector(".description");
description.classList.add("text-primary", "fw-bold");

//06. 함수의 반환값을 화면에 표시하기
const movieList = document.querySelector("#movie-list");
const card = document.createElement("div");
card.textContent = message;
card.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(card);

//07. 영화 하나 더 추가하기
const message2 = getMovieMessage("인터스텔라", 8.7);
const card2 = document.createElement("div");
card2.textContent = message2;
card2.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(card2);

//08. 요소 삭제해보기
//card2.remove();// ← 주석 처리
