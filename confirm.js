
let name = localStorage.getItem('fn');
const first = name.split(' ')[0];
const otp = localStorage.getItem('OTP');
console.log(otp);
let email=localStorage.getItem('em');


document.getElementById('name').innerText=first;
document.getElementById('email').innerText=email;
validateOtp = document.getElementById('validate');


const msg = document.getElementById('message');
let c = 0, Chance = 3;
validateOtp.addEventListener('click',(event)=> {
    const checkOtp = document.querySelector('#inputOtp');
    const fOtp = checkOtp.value;
         if(fOtp == otp){
          return window.location.href="https://google.co/";
        }
        else if(c>1 &&  fOtp != ''){
            return window.location.href="https://google.co/uweydwe";   
         }else if(c<2 && fOtp != ''){
            c++;
            Chance--;
          msg.innerText="Please Enter correct otp. Chance remaining " + Chance ;
          console.log(c);
        }
        
    
})