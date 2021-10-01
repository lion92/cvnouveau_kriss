function closeToZeroTwo(arr) {
  let arrNeg = arr.filter((x) => x < 0).sort();
  let arrPos = arr.filter((x) => x > 0).sort();
  let retArr = [];
  retArr.push(arrNeg[0], arrPos[0]);
  console.log(retArr);
}
closeToZeroTwo([7, 8, 9, -1, -2]);




function changeColor() {
  document.body("html")[0].style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}
const ratio=0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {

 
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      //console.log("visible");
      entry.target.classList.add("reveal");
     
   
     
      //document.querySelector("#projet1").classList.add("reveal");
      observer.unobserve(entry.target);
    } else {
      

    //  console.log("invisible");
    }
  });
};

let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.trace').forEach(function(r){
  observer.observe(r);
})



