
function saving(){
    localStorage.setItem('save', JSON.stringify(elements));
}
const container = document.getElementById('mainer');
let elements = [];

let sebedu = JSON.parse(localStorage.getItem('save'));

document.addEventListener('DOMContentLoaded', (checkin) => {
    let savedContent = JSON.parse(localStorage.getItem('save'));
    for(let i = 0; i < savedContent.length; i++){
        const newDiv = document.createElement('div');
        const paragraph = document.createElement('p');
        const title = document.createElement('h1');
        const date = document.createElement('p');
        const space = document.createElement('br');
        paragraph.textContent = savedContent[i].paragraph;
        title.textContent = savedContent[i].title;
        date.textContent = savedContent[i].date;
        elements.push(savedContent[i]);
        title.setAttribute('id', 'inner-title')
        newDiv.setAttribute('id', 'gendiv');
        paragraph.setAttribute('id', 'inner-paragraph')
        newDiv.appendChild(title);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(space);
        newDiv.appendChild(date);
        container.appendChild(newDiv);
        count++;
    }
})

let defTitle;
let defPara;
let defDate;
let count = 0;

function saveToDo(title, paragraph, date){
    this.title = title;
    this.paragraph = paragraph;
    this.date = date;
}


document.getElementById('add').addEventListener('click', (data) => {
    defTitle = document.getElementById('title').value;
    defPara = document.getElementById('more_info').value;
    defDate = document.getElementById('deliver_time').value;
})
document.getElementById('add').addEventListener('click', (addDiv) =>{
if(defDate == "" || defTitle == "" || defPara == ""){
    alert("Please fill the needed info");
}else{
    const newDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    const title = document.createElement('h1');
    const date = document.createElement('p');
    const space = document.createElement('br');
    paragraph.textContent = defPara;
    title.textContent = defTitle;
    date.textContent = defDate;
    title.setAttribute('id', 'inner-title');    
    newDiv.setAttribute('id', 'gendiv');
    let test = new saveToDo(defTitle, defPara, defDate);
    elements.push(test);
    newDiv.appendChild(title);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(space);
    newDiv.appendChild(date);
    container.appendChild(newDiv);
    defTitle = document.getElementById('title').value = "";
    defPara = document.getElementById('more_info').value = "";
    defDate = document.getElementById('deliver_time').value = "";
    localStorage.clear();
    count++;
    
}
saving();
})

document.getElementById('dereto').addEventListener('click', (nashe) => {
    localStorage.clear();
    document.getElementById('gendiv').remove;
    window.location.reload();
})
