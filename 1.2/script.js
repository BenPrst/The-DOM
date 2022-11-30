const important = document.querySelectorAll('.important');

important.forEach(element => {
    element.setAttribute("title","This is an important item");
});

const images = document.querySelectorAll('img');

images.forEach(img => {
    if (!img.classList.contains("important")){
        img.style.display = "none;"
    }
});

const pg = document.querySelectorAll("p");

pg.forEach(p => {
    console.log(p.textContent);
    if (p.className){
        console.log("Class name: " + p.className);
    }
});

pg.forEach(pg => {
    if (!pg.classList.contains("special")) {
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        pg.style.color = randomColor;
    }
  });

