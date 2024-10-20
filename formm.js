const  username=document.querySelector(".userr");

const  email=document.querySelector(".emaill");

const  phoneno=document.querySelector(".phnoo");

const  password=document.querySelector(".passs");

const  cpassword=document.querySelector(".cpasss");

const button=document.querySelector("#bu");



let span1=document.querySelector("#u");

let span2=document.querySelector("#ma");

let span3=document.querySelector("#ph");

let span4=document.querySelector("#pa");

let span5=document.querySelector("#cpa");



emailcheck= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;


button.addEventListener("click",(e)=>{
    if (username.value===''|| username.value===null)
        {
            e.preventDefault();
            // console.log("its working?");
            span1.innerHTML="USERNAME IS REQUIRED";
            setTimeout(()=>{
                span1.innerHTML="";
            },2000);
        }
    else if (!email.value.match(emailcheck))
        {
            e.preventDefault();
            span2.innerHTML="ENTER VALID EMAIL";
            setTimeout(()=>{
                span2.innerHTML="";
            },2000);
        }
    else if( isNaN(phoneno.value) || phoneno.value==='')
        {
            e.preventDefault();
            span3.innerHTML="ENTER VALID NUMBER";
            setTimeout(()=>{
                span3.innerHTML="";
            },2000);
        }
    else if(password.value.length<6 || password.value==='')
        {
            e.preventDefault();
            span4.innerHTML="PASSWORD MUST CONTAIN 6 CHARACTERS";
            setTimeout(()=>{
                span4.innerHTML="";
            },2000);
        }
    else if(password.value.length>20)
        {
            e.preventDefault();
            span4.innerHTML="PASSWORD MUST NOT EXCEED 20 CHARACTERS";
            setTimeout(()=>{
                span4.innerHTML="";
            },2000);
        }

    else if(password.value!==cpassword.value ||  cpassword.value==='')
        {
            e.preventDefault();
            span5.innerHTML="IT DOESN'T MATCH WITH PASSWORD";
            setTimeout(()=>{
                span5.innerHTML="";
            },2000);
        }
});

