// console.log(Name);
const submit = document.getElementById("submit");
  const reset = document.getElementById("reset");
  
function storage() {
  const Time = document.getElementById("time").value;
  const dob = document.getElementById("DOB").value;
  const Name = document.getElementById("name").value;
  localStorage.setItem("TIME", Time);
  localStorage.setItem("DOB", dob);
  localStorage.setItem("NAME", Name);
  return;
  
}
