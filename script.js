const container= document.querySelector('#container');
let k=0;
rownum=4;
const btn=document.querySelector('#btn');

btn.addEventListener('click',()=>{
    container.innerHTML='';
    gridsize= parseInt(prompt("Enter the grid size(should not be more than 100):"))
    if(gridsize>100){
        window.alert("Gridsize should be less than 100:");
    }
    rownum=gridsize;
    for (let i = 1; i <=rownum; i++){
        let row=document.createElement('div');
        row.classList.add('row');
        let idname=String.fromCharCode(48+i);
        row.setAttribute('id',idname);
        for (let j = 1; j <=rownum; j++){
            let square=document.createElement('div');
            square.classList.add('tile');
            let idname=String.fromCharCode(96+(i+k+j-1));
            square.setAttribute('id',idname);
            row.appendChild(square);   
        }
        k=k+rownum-1;
        container.appendChild(row);
    }

    const tile=document.querySelectorAll('.tile');
    tile.forEach((item)=>{
        item.addEventListener('mouseover',()=>{
            let r= Math.round(Math.random()*255);
            let g= Math.round(Math.random()*255);
            let b= Math.round(Math.random()*255);
            item.style=`background:rgb(${r},${g},${b});`
        })

        item.addEventListener('click',()=>{
            item.style=`background:None;`
        })
    })
})
    








