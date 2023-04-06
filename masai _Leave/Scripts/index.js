
start_date.min = new Date().toISOString().split("T")[0]

end_date.min = new Date().toISOString().split("T")[0]





document.querySelector("form").addEventListener("submit", addData);
let data = JSON.parse(localStorage.getItem("leave")) || [];

function addData(event) {
  event.preventDefault();

  let unique = document.querySelector("#unique").value;
  let name = document.querySelector("#name").value;
  let leave = document.querySelector("#leave").value;
  let desig = document.querySelector("#desig").value;
  let start_date = document.querySelector("#start_date").value;
  let end_date = document.querySelector("#end_date").value;
  let date1 = new Date(start_date)
  let date2 = new Date(end_date)
  const days = (date2.getTime() - date1.getTime())/(1000*3600*24)
  let overseer = document.querySelector("#overseer").value;
  let otp = Math.floor(1000 + Math.random()*9000)

  let isIdExist = data.filter((el) => {
    el.unique == unique;
  });
 
  if (isIdExist.length > 0) {
    alert("User having same id");
  }else if (name.length <= 4) {
    alert("Enter atleast four Character");
  } else if (start_date == end_date) {
    alert("Date should not be same");
  }else{

    let info = {
        unique,
        leave,
        desig,
        start_date,
        end_date,
        name,
        leave,
        overseer,
        days,
        otp

    }

    data.push(info);
    localStorage.setItem("leave" ,JSON.stringify(data))
    alert("Apply successfully")
    document.querySelector("form").reset()
  }


}


