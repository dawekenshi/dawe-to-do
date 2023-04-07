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

let svgcount = 0;

let idTitl = document.getElementById('id-titl')
let taitol = document.getElementById('taitol')

taitol.addEventListener('mouseleave', function() {
    switch(svgcount){
        case 0:
            svgcount++;
            console.log(svgcount)
            taitol.innerHTML = `
            <h1 id="id-titl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>

            To-Do List

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
            </h1>
            `;
            break;

        case 1:
            svgcount++;
            console.log(svgcount)
            taitol.innerHTML = `
            <h1 id="id-titl">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>

            To-Do List


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>

            </h1>
            `;
            break;

        case 2:
            svgcount = 0;
            console.log(svgcount)
            taitol.innerHTML = `
            <h1 id="id-titl">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
            </svg>


            To-Do List

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
            </svg>

            </h1>
            `;
            break;
    }
})

