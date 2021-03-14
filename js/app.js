'use srtict';

let names =['bag','banana','bathroom','boots','breakfast','bubblegum'
,'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors',
'shark','sweep'];

let imgSection=document.getElementById('imgsection');
let rImg = document.getElementById('rightimg');
let cImg = document.getElementById('centerimg');
let lImg = document.getElementById('leftimg');

function proMall(name){
    this.name=name;
    this.viwe =0;
    this.vote =0;
    this.path=`./img/${name}.jpg`
    proMall.allObj.push(this);
}
proMall.allObj=[];

for(i=0;i<names.length;i++)
{
 new proMall(names[i]);
}
console.table(proMall.allObj);

function rand(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}
function render()
{
    let leftIndex = rand(0,proMall.allObj.length - 1);
    let leftRandomProduct=proMall.allObj[leftIndex];
    leftimg.src=leftRandomProduct.path;
    leftimg.title=leftRandomProduct.name;
    leftimg.alt=leftRandomProduct.name;
    console.log(leftimg);
    let centerIndex = rand(0,proMall.allObj.length - 1);
    let centerRandomProduct=proMall.allObj[centerIndex];
    centerimg.src=centerRandomProduct.path;
    centerimg.title=centerRandomProduct.name;
    centerimg.alt=centerRandomProduct.name;
    console.log(centerimg);
    let rightIndex = rand(0,proMall.allObj.length - 1);
    let rightRandomProduct=proMall.allObj[rightIndex];
    rightimg.src=rightRandomProduct.path;
    rightimg.title=rightRandomProduct.name;
    rightimg.alt=rightRandomProduct.name;
    console.log(rightimg);
}
imgSection.addEventListener('click',ch)
function ch(event){
    if(event.target.id === 'imgSection' )
    {
        for(let i=0; proMall.allObj.length;i++){
            if(proMall.allObj[i].name===event.target.title){
                proMall.allObj[i].vote++;
            }
        }
        render();
    }
}

render();