const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
const txtY = document.getElementById("txtY");
btn.addEventListener("click", () => getData(txt.value));
const getData = async (MovieName) => {
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${MovieName}&apikey=edc1ce65`
  );
  const data = await resp.json();
  const data1 = data.Search;
  if (txtY.value == "") {
    console.log(data1);
    data1.map((i) => {
      print(i);
    });
  } else {
    const year = data1.filter(function (y) {
      if (y.Year === txtY.value) {
        return y;
      }
    });
    year.map((i) => {
      print(i);
    });
  }
  function print(data1) {
    const h2 = document.getElementById("DiplayMovies");
    let html = `<div>
                <h2>${data1.Title}</h2>
                <h5>${data1.Year}</h5>
                <img src=${data1.Poster}>
                </div>`;
    h2.insertAdjacentHTML("afterend", html);
  }
};