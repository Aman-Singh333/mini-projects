const timer=document.getElementById("root");
function leapyear(){
    const recent= new Date();
const leapyear=new Date("2028-02-29");

const diff=leapyear-recent;
console.log(diff);

const day=Math.floor(diff/(1000*60*60*24));
const hour=Math.floor((diff/(1000*60*60))%24);
const mint=Math.floor((diff/(1000*60))%60);
const sec=Math.floor((diff/(1000))%60);

  timer.innerHTML = `
    ${day} Days ${hour} Hours ${mint} Minutes ${sec} Seconds
  `;
// console.log(`leap year countdownTime: day ${day}, hour ${hour}, mint ${mint}, sec ${sec}`);
}



timer.innerHTML=setInterval(leapyear,1000);




