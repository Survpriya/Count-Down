const time= localStorage.getItem("TIME");
const dob= localStorage.getItem("DOB");
const Name= localStorage.getItem("NAME");
console.log(time);
// const endDate = "9 April 2023 23:00" ;







// const endDate = `${dob} ${time}` ;
const endDate = dob+" "+time ;


const inputs = document.getElementsByClassName("box")
function clock() {
const end = new Date(endDate);
const now = new Date();
const diff = (end-now)/1000;   //now the difference is in seconds
inputs[0].value =Math.floor(diff/60/60/24); //days
inputs[1].value = Math.floor((diff/3600)%24);  //hrs
inputs[2].value = Math.floor((diff/60)%60);  //min
inputs[3].value = Math.floor(diff%60);  //sec
}
clock()
setInterval(clock,1000);




