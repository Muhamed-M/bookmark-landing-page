function accordion(){
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function(){
            const panel = this.nextElementSibling;
            const icon = this.children[0];
            if (panel.style.display === "block"){
                panel.style.display = "none";
                icon.style.transform = "rotate(0deg)";
            } else {
                panel.style.display = "block";
                icon.style.transform = "rotate(180deg)";
            }
        });
    }
}
accordion();

function emailValid(){
    let email = document.querySelector("#email");
    let iconError = document.querySelector("#icon-error");
    let errorMess = document.querySelector("#err-message");
    
      if (!email.checkValidity()){
        iconError.style.visibility = "visible";
        errorMess.style.display = "inline-block";
      }
      else {
        iconError.style.visibility = "hidden";
        errorMess.style.display = "none";
      }
    }

function menu(){
    let overlay = document.querySelector(".overlay");
        
    if (overlay.style.display === "block"){
        overlay.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }
    else {
        overlay.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
    }
}