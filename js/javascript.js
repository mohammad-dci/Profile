function showMenu(){
    let checkStyle=document.getElementById("mainMenu").getAttribute("style");
    if(checkStyle=="display: none;"){
    document.getElementById("mainMenu").style="display: block;";
    }
    else{
        document.getElementById("mainMenu").style="display: none;";
    }
}