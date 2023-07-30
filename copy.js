let newURL=document.getElementById("shorturl");
let coptButton=document.getElementById("copy");
coptButton.onclick=()=>{
    newURL.ariaSelected();

    window.navigator.clipboard.writeText(newURL.value);
}