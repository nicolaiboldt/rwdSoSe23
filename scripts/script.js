let loop = false;
let i = 0;
let width;
let color;
let prevScrollpos = window.pageYOffset;

let progArray = document.getElementsByClassName("progress");
let indArray = document.getElementsByClassName("industry");
let sliders = document.querySelectorAll(".slider");
let headings = document.querySelectorAll(".cHeading");
let descs = document.querySelectorAll(".cDescription");
let clr = ["one", "two", "three", "four", "five"];

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-52px";
  }
  prevScrollpos = currentScrollPos;

  function move() {
    if (!loop) {
      loop = true;
      i = 0;
      let elem = progArray[i];
      sliders[i].classList.add("active");
      headings[i].classList.add("active");
      descs[i].classList.add("active");
      width = 1;
      let id = setInterval(frame, 20);
      function frame() {
        if (width >= 100 && i == progArray.length) {
          indArray[0].classList.remove("passed");
          progArray[0].style.width = "0%";
          indArray[1].classList.remove("passed");
          progArray[1].style.width = "0%";
          indArray[2].classList.remove("passed");
          progArray[2].style.width = "0%";
          indArray[3].classList.remove("passed");
          progArray[3].style.width = "0%";
          indArray[4].classList.remove("active");
          color = document.querySelectorAll(".timeline li.active .progress, li.passed .progress, .timeline .dot, .slider.active");
          color.forEach((cl) => cl.removeAttribute("style"));
          i = 0;
          width = 1;
          elem = progArray[i];
          indArray[i].classList.add("active");
          sliders[i].classList.add("active");
          sliders[sliders.length - 1].classList.remove("active");
          headings[i].classList.add("active");
          headings[headings.length - 1].classList.remove("active");
          descs[i].classList.add("active");
          descs[descs.length - 1].classList.remove("active");
        } else if (width >= 100) {
          width = 1;
          i++;
          elem = progArray[i];
          if (i > 0) {
            indArray[i - 1].classList.remove("active");
            indArray[i - 1].classList.add("passed");
            sliders[i - 1].classList.remove("active");
            headings[i - 1].classList.remove("active");
            descs[i - 1].classList.remove("active");
          }
          indArray[i].classList.add("active");
          sliders[i].classList.add("active");
          headings[i].classList.add("active");
          descs[i].classList.add("active");
          document.querySelectorAll(".slider").forEach((lies) => lies.removeAttribute("style"));
          color = document.querySelectorAll(".timeline li.active .progress, li.passed .progress, li.active .dot, li.passed .dot");
          color.forEach((li) => li.style.backgroundColor = ("var(--clr-" + clr[i] + ")"));
          // sliders[i-1].style.transform = "translateX(-100%)";
        } else {
          //width += 0.35;
          if (i < progArray.length)
            elem.style.width = width + "%";
        }
      }

    }
  }

  if (window.pageYOffset >= document.querySelectorAll(".splash")[0].clientHeight / 3)
    move();

}



for (let f = 0; f < indArray.length; f++) {
  indArray[f].addEventListener("click", () => {
    width = 102;
    i = f - 1;
    for (let g = 0; g < progArray.length; g++) {
      let p = progArray[g];
      sliders[g].classList.remove("active");
      headings[g].classList.remove("active");
      descs[g].classList.remove("active");
      if (g <= i) {
        p.style.width = "100%";
        indArray[g].classList.add("passed");
      }
      else {
        document.querySelectorAll(".dot")[g].removeAttribute("style");
        p.style.width = "0%";
        indArray[g].classList.remove("passed");
      }
      indArray[g].classList.remove("active");
      if (g == progArray.length - 1) {
        indArray[g + 1].classList.remove("active");
        sliders[g + 1].classList.remove("active");
        headings[g + 1].classList.remove("active");
        descs[g + 1].classList.remove("active");
      }
      document.querySelectorAll(".dot")[g + 1].removeAttribute("style");
    }
    color = document.querySelectorAll(".timeline li.active .progress, li.passed .progress, li.active .dot, li.passed .dot");
    color.forEach((li) => li.style.backgroundColor = ("var(--clr-" + clr[i] + ")"));
  });
}


