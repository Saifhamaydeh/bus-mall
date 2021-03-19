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
//console.table(proMall.allObj);

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
    //console.log(leftimg);
    let centerIndex = rand(0,proMall.allObj.length - 1);
    let centerRandomProduct=proMall.allObj[centerIndex];
    centerimg.src=centerRandomProduct.path;
    centerimg.title=centerRandomProduct.name;
    centerimg.alt=centerRandomProduct.name;
    //console.log(centerimg);
    let rightIndex = rand(0,proMall.allObj.length - 1);
    let rightRandomProduct=proMall.allObj[rightIndex];
    rightimg.src=rightRandomProduct.path;
    rightimg.title=rightRandomProduct.name;
    rightimg.alt=rightRandomProduct.name;
    //console.log(rightimg);
}
imgSection.addEventListener('click',ch)
let numberOfClicks =25;
function ch(event){
    numberOfClicks--;
    event.preventDefault();
   // console.log(proMall.allObj) ;
    if(event.target.id !== 'imgSection' )
  
    {
        for(let i=0; i<proMall.allObj.length;i++){
              proMall.allObj[i].viwe++;
            if(proMall.allObj[i].name===event.target.title){
                proMall.allObj[i].vote++;
                console.table(proMall.allObj[i].vote);
            }
        }
        render();
    
    }
    if(numberOfClicks==0){
        imgSection.removeEventListener('click',ch)
        chart();
    }

}

render();
var ctx = document.getElementById('myChart');
let productName =[];
let productVote=[];
let prodctViwe=[];
for(let i=0 ;i<proMall.allObj.length;i++)
{
    productName.push(proMall.allObj[i].name);
    productVote.push(proMall.allObj[i].vote);
    prodctViwe.push(proMall.allObj[i].viwe);
}
console.log(productName);
console.log(productVote);
function chart(){
var myChart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        labels:productName,// product name
        datasets: [{
            label: '# of Votes',
            data: productVote,//number of votes for every product
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});}