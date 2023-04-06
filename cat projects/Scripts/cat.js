const catls = JSON.parse(localStorage.getItem('cat'))||[];

let getData = async ()=>{
    let url = "https://api.thecatapi.com/v1/images/search?limit=10";
    try {
        let res = await fetch(url);
        let data = await res.json();
        appendData(data);
    } catch (error) {
        console.log(error);
    }
}

getData();


function appendData(data){
    let cont = document.getElementById('ten_image');
    cont.innerHTML =null;
    data.forEach((el,i)=>{
        let image = document.createElement('img');
        image.src = el.url;
        image.setAttribute('class','boxes');

        let btn = document.createElement('button');
        btn.innerText ="add to favorites";
        btn.setAttribute('class','btn_box');
        btn.addEventListener('click',function(){
            changeIt(el)
        })
        let div = document.createElement('div');
        div.setAttribute('class','main_b');
        div.append(image,btn);
        cont.append(div);
    })
}

function changeIt(data){
    let added = false;
    for(let i=0;i<catls.length;i++){
        if(catls[i].id == data.id){
            alert("already in the fav");
            added = true;
            break;
        }
    }
    if(added === false){
        catls.push(data);
        alert('added success')
        localStorage.setItem('cat',JSON.stringify(catls))
    }
}