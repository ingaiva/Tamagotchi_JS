var EN = 10 ;
var FAIM=0;
var JOIE=5;
// - FAIM ne peut dépasser 5
// - JOIE ne peut être inférieure à 0
// - EN ne peut être inférieure à 0
let btnJouer=document.getElementById("btnJouer");
let btnNourir=document.getElementById("btnNourir");
let btnReanimer=document.getElementById("btnReanimer");

let icoEN=document.getElementById("energy");
let icoJOY=document.getElementById("joy");
let icoHUNGER=document.getElementById("hunger");
let txtEN=document.getElementById("txtEnergy");//
let txtJOY=document.getElementById("txtJoy");//
let txtHUNGER=document.getElementById("txtHunger");//

document.addEventListener("DOMContentLoaded", function(event) {
    updateUi();
});

btnJouer.addEventListener("click", function(event){
    jouer();
});

btnNourir.addEventListener("click", function(event){
    nourrir();
});

btnReanimer.addEventListener("click", function(event){
    reanimer();
});

function updateUi(){
    checkBtns();
    checkScore();
}
function checkBtns(){    
    btnReanimer.disabled = (isAlive());   
    btnJouer.disabled=(isAlive()==false);
    btnNourir.disabled=(isAlive()==false); 
}

function checkScore(){
    txtEN.innerText= EN ;
    txtJOY.innerText=JOIE;
    txtHUNGER.innerText=FAIM;

    if(isAlive()==false){
        icoEN.style.color="gray";
        icoJOY.style.color="gray";
        icoHUNGER.style.color="gray";
    }
    else {
        updateScoreEN();
        updateScoreJoy();
        updateScoreHunger();
    }
}

function updateScoreEN(){   
    if(EN <=2){
        icoEN.style.color="red";
    }
    else if(EN >2 && EN <=6){
        icoEN.style.color="orange";
    }
    else if(EN >6 && EN <=10){
        icoEN.style.color="blue";
    }
    else {
        icoEN.style.color="green";
    }
}
function updateScoreJoy(){   
    if(JOIE<=2){
        icoJOY.style.color="red";
    }
    else if(JOIE>2 && JOIE<=6){
        icoJOY.style.color="orange";
    }
    else if(JOIE>6 && JOIE<=10){
        icoJOY.style.color="blue";
    }
    else {
        icoJOY.style.color="green";
    }
}
function updateScoreHunger(){   
    if(FAIM>=5){
        icoHUNGER.style.color="red";
    }
    else if(FAIM < 5 && FAIM >= 3){
        icoHUNGER.style.color="orange";
    }
    else if(FAIM ==2){
        icoHUNGER.style.color="blue";
    }
    else {
        icoHUNGER.style.color="green";
    }
}

function jouer(){//(EN - 2, FAIM + 1, JOIE +1)
    if(EN >=2)
        EN-=2;

    if(FAIM <5)
        FAIM++;

    JOIE++;
    updateUi();
} 

//nourrir (FAIM - 1, JOIE - 1, EN + 2)
function nourrir(){
    EN+=2;
    if(FAIM>0)
        FAIM--;

    if (JOIE>0)
        JOIE--;
    updateUi();
}

function reanimer(){
     EN = 10 ;
     FAIM=0;
     JOIE=5;
     updateUi();
}

function isAlive(){
    if(EN <= 0 || JOIE <= 0 || FAIM >= 5)
        return false;    
    else
        return true;      
}