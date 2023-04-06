// let catls = JSON.parse(localStorage.getItem('cat'))

function appendData(data){
    let cont = document.querySelector("#fav_cont");
    cont.innerHTML =null;

    data.forEach((el,i)=>{
        let image = document.createElement('img');
        image.src = `${el.url}`;
        image.setAttribute('class','image_favb');

        let btn = document.createElement('button');
        btn.innerText ='Remove';
        btn.setAttribute('class','remove');
        btn.onclick=()=>{
            removeFun(i)
        }
        let div = document.createElement('div');
        div.append(image,btn);
        cont.append(div);
    })
}

let dataFromLs =JSON.parse(localStorage.getItem('cat'));
appendData(dataFromLs);

function removeFun(i){
    let dataFromLs =JSON.parse(localStorage.getItem('cat'));
    dataFromLs.splice(i,1);
    localStorage.setItem('cat',JSON.stringify(dataFromLs));
    window.location.reload();
}