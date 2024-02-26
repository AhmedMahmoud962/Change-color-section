/// to hover on Header ===> change color
{
  changeColor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
  });
  changeColor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
  });
}

//// to change the Background color of header when click on HeaderBG
Headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360);
  header.style.backgroundColor = `hsl(${random},44%,55%)`;

  const firstTitle = document.querySelector("#header > h1");
  firstTitle.style.backgroundColor = `hsl(${random},44%,55%)`;

  // dark.style.backgroundColor = `hsl(${ Math.round(Math.random() * 100)},44%,55%)`
});

//// to change the Background color of all (h1) when click on "TitleBG"
TitleBG.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)");
  const random = Math.round(Math.random() * 360);

  allTitle.forEach((item) => {
    item.style.backgroundColor = `hsl(${random},44%,55%)`;
  });
});

/// diffrent way to get random ////////
// to change the Color of all (h1) when click on "TitleBG"
const changeRgb = () => {
  return Math.round(Math.random() * 255);
};

titlecolor.addEventListener("click", (eo) => {
  const rgb1 = changeRgb();
  const rgb2 = changeRgb();
  const rgb3 = changeRgb();
  const allTitle = document.querySelectorAll("h1:not(#header > h1)");

  allTitle.forEach((item) => {
    item.style.color = `rgb(${rgb1},${rgb2},${rgb3})`;
  });
});
///// the same part but with hexa
//to change the Background color of all(section)when click on"SectionBG"
const changehexa = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

SectionBG.addEventListener("click", (eo) => {
  const sections = document.querySelectorAll("section");
  const hexa = changehexa();
  sections.forEach((item) => {
    // console.log(random)
    item.style.backgroundColor = hexa;
  });
});
/// to change the background of footer

footerBG.addEventListener("click", (eo) => {
  const hexa = changehexa();
  const Footer = document.querySelector("#body > footer > p");

  Footer.style.backgroundColor = hexa;
});

////// SectionBG BACKGROUND using Array,I++
//to change the Background color of all(section)when click on"SectionBG"
// const arrColors = ["#99b7da", "#FBE7C6", "#2a9d8f", "#e4c1f9", "#a98467", "#ffc300", "#f8ad9d", "#00b4d8", "#2a9d8f", "#b8c0ff"]
// let i = 0;
// SectionBG.addEventListener("click", (eo) => {
//     const sections = document.querySelectorAll("section");
//     sections.forEach(item => {
//         item.style.backgroundColor = arrColors[i]
//     });

//     i < arrColors.length - 1 ? i++ : i = 0;
//     // if (i < arrColors.length - 1) {
//     //     i++;
//     // } else {
//     //     i = 0;
//     // }
// })

///////////////////////////////////// SectionBG //////////////////////////
///// using Array,Math.random()
//to change the Background color of all(section)when click on"SectionBG"
// const arrColors = ["#99b7da", "#FBE7C6", "#2a9d8f", "#e4c1f9", "#a98467", "#ffc300", "#f8ad9d", "#00b4d8", "#2a9d8f", "#b8c0ff"]

// SectionBG.addEventListener("click", (eo) => {
//     const sections = document.querySelectorAll("section");
//     const random = Math.floor(Math.random() * arrColors.length)

//     sections.forEach(item => {
//         // console.log(random)
//         item.style.backgroundColor = arrColors[random]

//     });
// })

/////////////////////////////////////////////////////////////////////

// the same part but with RGB
// SectionBG.addEventListener("click", (eo) => {

//     const sections = document.querySelectorAll("section");
//     const rgb1 = changeRgb();
//     const rgb2 = changeRgb();
//     const rgb3 = changeRgb();

//     sections.forEach(item => {
//         // console.log(random)
//         item.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`
//     });
// })

//////////////////////////////////////////////////////////////////////

// ///// the same part but with hexa
// //to change the Background color of all(section)when click on"SectionBG"
// const changehexa = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };

// SectionBG.addEventListener("click", (eo) => {
//   const sections = document.querySelectorAll("section");
//   const hexa = changehexa();
//   sections.forEach((item) => {
//     // console.log(random)
//     item.style.backgroundColor = hexa;
//   });
// });

/////  !imortant
// how to replace num to sting with number and a,b,c,d
//  let num = Math.random().toString(16).slice(2, 8); // !imortant

// /// to change the background of footer

// footerBG.addEventListener("click", (eo) => {
//   const hexa = changehexa();
//   const Footer = document.querySelector("#body > footer > p");

//   Footer.style.backgroundColor = hexa;
// });

////// with footer

// footerBG.addEventListener("click", (eo) => {

//     const design = document.getElementsByClassName(".#body > footer > p.design")
//     const random = Math.round(Math.random() * 360);
//     design.style.backgroundColor = `hsl(${random},44%,55%)`

// })
