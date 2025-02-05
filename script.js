const container= document.querySelector('#container');
let i=1;
const row1=document.createElement('div');
row1.setAttribute('id','one');
while(i<=4){
    let square=document.createElement('div');
    let idname=String.fromCharCode(96+i);
    square.setAttribute('id',idname);
    row1.appendChild(square);
    i++;
}
container.appendChild(row1);

const row2=document.createElement('div');
row2.setAttribute('id','two');
while(i<=8){
    let square=document.createElement('div');
    let idname=String.fromCharCode(96+i);
    square.setAttribute('id',idname);
    row2.appendChild(square);
    i++;
}
container.appendChild(row2);

const row3=document.createElement('div');
row3.setAttribute('id','three');
while(i<=12){
    let square=document.createElement('div');
    let idname=String.fromCharCode(96+i);
    square.setAttribute('id',idname);
    row3.appendChild(square);
    i++;
}
container.appendChild(row3);

const row4=document.createElement('div');
row4.setAttribute('id','four');
while(i<=16){
    let square=document.createElement('div');
    let idname=String.fromCharCode(96+i);
    square.setAttribute('id',idname);
    row4.appendChild(square);
    i++;
}
container.appendChild(row4);