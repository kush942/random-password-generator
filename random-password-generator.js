const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let newPass = '';
let randomPass;
const btn = document.querySelector('.button button');
const icon = document.querySelector('.password i');
const h2 = document.querySelector('.password h2');
const alert = document.querySelector('#alert');
btn.addEventListener('click',function(){
  // h2.innerHTML = '';
  h2.innerHTML = passGenerator(); 
});
function passGenerator(){
  newPass = '';
  for(let i=0; i<14; i++){
    randomPass = Math.floor(Math.random()*72);
    newPass += characters[randomPass];
  }
  console.log(newPass);
  return newPass;
}

icon.addEventListener('click', function () {
  if(newPass === ""){
    window.alert("please click the generate button first");
  }else{
    navigator.clipboard.writeText(newPass)
      .then(()=>{
        alert.innerHTML = `<h2 class="pop-up-show">Copied ${newPass}</h2>`;
      })
      .catch(err => {
        console.error("Failed to copy: ",err);
      });
  }
});

