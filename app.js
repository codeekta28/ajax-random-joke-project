console.log("This is app file");
document.querySelector("#get-joke").addEventListener("click",()=>{
let xhr = new XMLHttpRequest();
 xhr.open("GET","https://api.chucknorris.io/jokes/random",true);
xhr.onprogress=function(){
    console.log("onProgress");
}
xhr.onload = function(){
    if(xhr.status===200 && this.readyState===4){
        let jokes = JSON.parse(this.responseText)
        console.log(jokes.value);
        document.querySelector("#display-joke").innerHTML = jokes.value;
    }else{
        errorMsg();
    }
}
xhr.send();
function errorMsg(){
    document.querySelector("#display-joke").innerHTML = `Oops Some Error`
}
})
