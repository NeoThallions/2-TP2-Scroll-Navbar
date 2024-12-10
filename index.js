const nav = document.querySelector("nav");

let value1 = window.scrollY;
console.log(value1);
window.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    let value2 = window.scrollY;
    // let value = value2 - value1;
    console.log(value2);

    // if (value2 > value1) {
    //     console.log("ça descend");
    // } else {
    //     console.log("ça monte!!!");
    // }
});
