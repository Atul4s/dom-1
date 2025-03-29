 let btn = document.querySelector('button');
 let h2 = document.querySelector('h2');
 let h4 = document.querySelector('h4');
 let box = document.querySelector('#pic')
 let h3 = document.querySelector('h3');
 let csk = document.querySelector('.csk')
 let dc = document.querySelector('.dc')
 let gt = document.querySelector('.gt')
 let kt = document.querySelector('.kt')



// let box = document.querySelector('#box');



// btn.addEventListener("click", function () {
  
//  let c1 = Math.floor(Math.random()*256)
//  let c2 = Math.floor(Math.random()*256)
//  let c3 = Math.floor(Math.random()*256)
  

//   if (flag == 0) {
//     h2.innerHTML = "Friends";
//     h2.style.color = "green";
//     btn.innerHTML = "Remove Friend";
//     flag = 1;
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//   } else {
//       box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     h2.innerHTML = "Stranger";
//     h2.style.color = "Red";
//     btn.innerHTML = "Add Friend";
//     flag = 0;

//   }
// });


let arr = [
  {
  team:'Chennai Super Kings',
  pic:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png' 
},
{
  team:'Delhi Capitals',
 pic:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png'

},
{
team:'Gujarat Titans',
pic:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png'
},
{
team:'Kolkata Knight Riders',
pic:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png'

}


]
  





btn.addEventListener("click",function(){

  let c1 = Math.floor(Math.random()*256)
  let c2 = Math.floor(Math.random()*256)
  let c3 = Math.floor(Math.random()*256)

  let num = Math.floor(Math.random()*arr.length)

  let winner = arr[num]

  h2.innerHTML = winner.team
  // h3.innerHTML = winner.pic 
  box.style.display = "flex";
 box.style.backgroundImage =`url('${winner.pic}')`;
 box.style.backgroundRepeat = "no-repeat"; 
box.style.backgroundSize = "cover";
h2.style.color = `rgb(${c1},${c2},${c3})`;
box.classList.remove("animate");
void box.offsetWidth;
box.classList.add('animate');

if(winner == arr[0]){
  csk.style.display = "grid";
  csk.classList.add('animate'); 
  dc.style.display = "none";
  gt.style.display = "none";
  kt.style.display = "none";
}else if(winner == arr[1]){
  dc.style.display = "grid";
  dc.classList.add('animate');
  csk.style.display = "none";
  gt.style.display = "none";
  kt.style.display = "none";
}else if (winner == arr[2]){
  gt.style.display = "grid";
  gt.classList.add('animate');
  csk.style.display = "none";
  dc.style.display = "none";
  kt.style.display = "none";
}else if(winner == arr[3]){
  kt.style.display = "grid";
  kt.classList.add('animate');
  csk.style.display = "none";
  dc.style.display = "none";
  gt.style.display = "none";
}

})