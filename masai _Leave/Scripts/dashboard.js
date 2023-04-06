let info = JSON.parse(localStorage.getItem("leave")) || [];
let statusArr = JSON.parse(localStorage.getItem("status")) || [];
function appendData(data) {
  let body = document.querySelector("tbody");
  body.innerHTML = null;

  data.forEach((el, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = el.unique;
    let td2 = document.createElement("td");
    td2.textContent = el.name;
    let td3 = document.createElement("td");
    td3.textContent = el.leave;
    let td4 = document.createElement("td");
    td4.textContent = el.desig;
    let td5 = document.createElement("td");
    td5.textContent = el.start_date;
    let td6 = document.createElement("td");
    td6.textContent = el.end_date;
    let td7 = document.createElement("td");
    td7.textContent = el.overseer;

    let td8 = document.createElement("td");
    td8.textContent = el.otp;

    let td9 = document.createElement("td");
    let reject = document.createElement("button");
    reject.textContent = "Reject Leave";
    reject.style.color = "red";
    reject.addEventListener("click", () => {
      deleteInfo(i);
    });
    td9.append(reject);
    let td10 = document.createElement("td");
    let grant = document.createElement("button");
    grant.textContent = "Grant Leave";
    grant.style.color = "green";
    grant.setAttribute("class", "grant");
    grant.addEventListener("click", () => {
      grantLeave(el.id);
    });
    td10.append(grant);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10);
    body.append(tr);
  });
}

appendData(info);

function deleteInfo(i) {
  let newData = info.filter((el, index) => index != i);
  alert("This Leave application is rejected");
  localStorage.setItem("leave", JSON.stringify(newData));
  appendData(newData);
}

function grantLeave(id) {
  let leaveInfo = info.filter((el) => el.id == id);
  const unique = leaveInfo[0]["id"];
  const name = leaveInfo[0]["name"];
  const leave = leaveInfo[0]["leave"];
  const desig = leaveInfo[0]["desig"];
  const start_date = leaveInfo[0]["start_date"];
  const end_date = leaveInfo[0]["end_date"];
  const overseer = leaveInfo[0]["overseer"];
  const days = leaveInfo[0]["days"];
  let newData = info.filter((el) => el.id != id);
  let userOtp = prompt("Enter OTP here !!");
  console.log(newData);

  if (+userOtp == leaveInfo[0]["otp"]) {
    statusArr.push({
      unique: unique,
      name,
      leave,
      desig,
      start_date,
      end_date,
      overseer,
      status: "Granted",
      days,
    });
    alert(`${leaveInfo[0]["name"]} added to the list`);

    new Promise((resolve, reject) =>
      setTimeout(() => {
        alert(`${leaveInfo[0]["start_date"]} to ${leaveInfo[0]["end_date"]}`);
        resolve();
      }, 5000)
    ).then(() =>
      setTimeout(() => {
        if (newData.length == 0) {
          document.querySelector("tbody").innerHTML = null;
        } else {
          appendData(newData);
        }
        localStorage.setItem("status", JSON.stringify(statusArr));
        alert("Leave Granted");
        localStorage.setItem("leave", JSON.stringify(newData));
      }, 10000)
    );
  } else {
    alert("please enter correct otp");
  }
}

//
document.querySelector("#filterByDesig").addEventListener("change", function filterByDesig(){
   let val = document.querySelector("#filterByDesig").value;
   if(val == ""){
    appendData(info)
   }else{
    let newData = info.filter((el)=>el.desig == val);
    appendData(newData)
   }
} )

document.querySelector("#sortByDate").addEventListener("change", function sortByDate(){
    let val = document.querySelector("#sortByDate").value;
    if(val == "asc"){
    let newData = info.sort((a,b)=> a.days - b.days)
    appendData(newData)
    }else{
        let newData = info.sort((a,b)=> b.days - a.days)
        appendData(newData)
    }
 } )

 document.querySelector("#searchByName").addEventListener("change", function searchByName(){
    let val = document.querySelector("#searchByName").value;
    if(val == ""){
     appendData(info)
    }else{
     let newData = info.filter((el)=>el.name.includes(val));
     appendData(newData)
    }
 } )