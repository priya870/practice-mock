let url = "https://api.thecatapi.com/v1/breeds";

let getData = async (i) => {
  try {
    let res = await fetch(`${url}?limit=5&page=${i}`);
    data = await res.json();
    console.log(data);
    render_data(data);
  } catch (err) {
    console.log(err);
  }
};

getData(1);

let render_data = (data) => {
  let container = document.getElementById("container");
  container.innerText = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute = ("id", "main");
    let name = document.createElement("h1");
    name.innerText = el.name;

    let image = document.createElement("img");
    image.src = `https://cdn2.thecatapi.com/images/${el.reference_image_id}.jpg`;

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let origin = document.createElement("h3");
    origin.innerText = ` Origin - ${el.origin}`;

    let ls = document.createElement("h3");
    ls.innerText = ` life-Span - ${el.life_span}`;

    let temp = document.createElement("h4");
    temp.innerText = ` Temperament - ${el.temperament}`;

    let url = document.createElement("h5");
    url.innerText = ` Read more - ${el.wikipedia_url}`;

    let butt = document.createElement("button");
    butt.innerText = "view more";
    butt.setAttribute("class", "view_more");
    butt.addEventListener("click", function () {
      show();
    });

    div.append(image, name, desc, origin, ls, temp, url, butt);
    container.append(div);
  });
};

function show() {
  window.location.href = "http://127.0.0.1:5502/cat.html";
}

let i = 0;
function prev() {
  if (i > 1) {
    getData(--i);
  } else if (i === 1) {
    getData(i);
  }
}
function next() {
  if (i >= 4) {
    return;
  } else {
    getData(++i);
  }
}
