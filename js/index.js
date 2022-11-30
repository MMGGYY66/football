const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9ded418773mshb7add42b953ffcap17120ejsn63e01fb3cfef',
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
  },
};

const HEADING = document.querySelector('h1');
const HEADING2 = document.querySelector('h2');
const HEADING3 = document.querySelector('h3');

const video = document.getElementById('video');
const image = document.getElementById('image');

const btn = document.getElementById('submit');

function showdata(data) {
  const randNum = Math.round(Math.random() * 89);
  const {
    title,
    competition,
    date,
    embed,
    thumbnail,
  } = data[randNum];
  HEADING.innerHTML = competition.name;
  HEADING2.innerHTML = `Teams: ${title}`;

  const tIndex = date.indexOf('T');
  const date1 = date.slice(0, tIndex);
  HEADING3.innerHTML = `Date: ${date1}`;

  image.src = thumbnail;
  image.setAttribute('class', 'img');
  image.setAttribute('alt', 'match-image');

  const div = embed.slice(0);
  video.innerHTML = div;
}

function fetchData() {
  fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
    .then((response) => response.json())
    .then((response) => showdata(response));
}

btn.addEventListener('click', fetchData);