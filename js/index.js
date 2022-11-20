"use strict";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9ded418773mshb7add42b953ffcap17120ejsn63e01fb3cfef',
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  }
};

function fetchData() {
  fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => showdata(response))
}

let HEADING = document.querySelector("h1");
let HEADING2 = document.querySelector("h2");
let HEADING3 = document.querySelector("h3");

let video = document.getElementById("video");
let image = document.getElementById("image");

let btn = document.getElementById("submit");

function showdata(data) {
  let randNum = Math.round(Math.random() * 87)
  console.log(data[randNum]);
  let {
    title,
    competition,
    date,
    embed,
    thumbnail
  } = data[randNum];
  HEADING.innerHTML = competition["name"];
  HEADING2.innerHTML = "Teams: " + title;
  HEADING3.innerHTML = "Date: " + date;

  image.src = thumbnail;
  image.setAttribute("class", "img");
  image.setAttribute("alt", "match-image");

  let div = embed.slice(0);
  video.innerHTML = div;
}

btn.addEventListener("click", fetchData, false);