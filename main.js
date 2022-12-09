const container = document.getElementById('mainer');
const containerTwo = document.getElementById('gendiv');
let defTitle;
let defPara;
let defDate;

document.getElementById('add').addEventListener('click', (data) => {
    defTitle = document.getElementById('title').value;
    defPara = document.getElementById('more_info').value;
    defDate = document.getElementById('deliver_time').value;
})

document.getElementById('add').addEventListener('click', (addDiv) =>{
    const btnDlt = document.createElement('button');
    btnDlt.textContent = "Delete";
    btnDlt.setAttribute('id', 'sheesh');
    btnDlt.addEventListener('click', (dereto) => {
        newDiv.remove();
    })
    const newDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    const title = document.createElement('h1');
    const date = document.createElement('p');
    const space = document.createElement('br');
    paragraph.textContent = defPara;
    title.textContent = defTitle;
    date.textContent = defDate;
    title.setAttribute('id', 'inner-title')
    newDiv.setAttribute('id', 'gendiv');
    if(defPara <= 0 || defDate <= 0 || defTitle <= 0){
        alert("Please fill needed info");
    }else{
        newDiv.appendChild(title);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(space);
        newDiv.appendChild(date);
        newDiv.appendChild(btnDlt);
        container.appendChild(newDiv);
        defTitle = document.getElementById('title').value = "";
        defPara = document.getElementById('more_info').value = "";
        defDate = document.getElementById('deliver_time').value = "";
    }
})

