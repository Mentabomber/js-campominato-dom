// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
//  Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

let gridElement = document.getElementById("grid");


let index, contatore, boxDifficulty;


var difficulty = document.getElementById("difficulty").value;
// var selectedDifficulty;



function boxCreation (elementType, className){

    const newElement = document.createElement(elementType);

    newElement.classList.add(className);

    return newElement;
    
}

function createArray(elementsNum){


    console.log(difficulty);
    const array = [];
    let rng;

    while(array.length < elementsNum){

        rng = randomNumberGenerator(1 ,difficulty);
        
        if(!array.includes(rng)){
            array.push(rng);
        }
        
    }
    return array;
}

function randomNumberGenerator(min, gridStyle){
    if(gridStyle == "Easy"){
        max = 100;
    }
    else if (gridStyle == "Hard"){
        max = 81;
    }
    else if (gridStyle == "Very Hard"){
        max = 49;
    }

    return Math.floor(Math.random() * (max + min));
}

const buttonInteractor = document.getElementById("button-play");

buttonInteractor.addEventListener("click",
function(){
    var difficulty = document.getElementById("difficulty").value;

    gridElement.replaceChildren();
    // gridElement.innerHTML = ""; alternativa

    // console.log(difficulty);
    
    let boxes;
    

    if(difficulty == "Easy"){
        boxes = creaGriglia(100, "easy-grid-box" );
    }
    else if(difficulty == "Hard"){
        boxes = creaGriglia(81, "hard-grid-box" );
    }
    else if(difficulty == "Very Hard"){
        boxes = creaGriglia(49, "very-hard-grid-box" );
    }
    for(let i = 0; i < boxes.length; i++){

        gridElement.append(boxes[i]);
        
    }
    
}

)

function creaGriglia(numCaselle, gridStyle){

    const boxes = [];

    let punteggio = 0;
    
    let listBombs = createArray(16);

    console.log(listBombs);



    for (let i = 0; i < numCaselle; i++) {

        let newBox = boxCreation("div", gridStyle);
    
        const newSpan = document.createElement("span");
    
        newBox.append(newSpan);
        // console.log(createArray(index));
        
        

       

        newSpan.append(i + 1);
        
        console.log(parseInt(newSpan.innerHTML));

        let punteggioAttuale = document.getElementById("punteggio");
        
        
        
        newBox.addEventListener("click",
        
        function(){
            console.log(numCaselle);
            console.log(parseInt(newSpan.innerHTML));
            
            let controlloBox = document.querySelectorAll("div.easy-grid-box span");
            let index = 0;
            console.log(parseInt(controlloBox[index].innerHTML));
            console.log(controlloBox);
            
           
            // for(let i = 0; i < numCaselle; i++){
                if((listBombs.includes(parseInt(newSpan.innerHTML)))){
                    newBox.classList.add("bomb-box");
                    for(let i = 0; i < numCaselle; i++){
                        // if (parseInt(controlloBox[i].innerHTML) == parseInt(listBombs[index])){
                        //     newBox.classList.add("bomb-box");
                        //     index++;
                        //     i = 0;
                        // }
                        if(listBombs.includes(i + 1)){
                            controlloBox[i].parentElement.classList.add("bomb-box");
                            
                        }
                        // console.log(i);
                        // console.log(index);
        
                    }

                    alert("hai perso! il tuo punteggio è: " + punteggio);
                    punteggio = 0;
                    // gridElement.innerHTML = ""; 
                }
                // if (listBombs.includes(parseInt(newSpan.innerHTML))){
                    // for(let i = 0; i < listBombs.length; i++){
                        // console.log(newBox);
                        // console.log(listBombs[i]);
                        // newBox.getElementsByTagname(`${listBombs[i]}`); 
                        // if(boxSelector.innerHTML("") == ){}
                        // let boxSelector = document.getElementsByClassName("easy-grid-box");
                        // console.log(boxSelector);
                        // newBox.classList.add("bomb-box");
                        // newBox.document.getElementsByTagname(listBombs[i]);
                        // newBox = listBombs[i];
                        // newBox.document.querySelectorAll(listBombs).classList.add("bomb-box");
                        
                    // }

                    // per far terminare la partita
                // }
                else if(punteggio == (boxes.length - listBombs.length) - 1){
                    punteggio = punteggio + 1;
                    alert("hai vinto complimenti!");
                    punteggio = 0;
                    gridElement.innerHTML = ""; 
                }
                else{
                    newBox.classList.add("flower-box");
                    punteggio = punteggio + 1;
                    // console.log(punteggio);
                }

                punteggioAttuale.innerHTML =`il tuo punteggio attuale è :${punteggio}`;
               
                

                // console.log(i + 1);
        
            }
        // }
        ) 
        boxes.push(newBox);
    }
    return boxes;
}





// for (let i = 0; i < 100; i++) {

//     const newGrid = gridCreation("div", "easy-grid-box");
    

//     listArray.push(i + 1);  

//     const newSpan = document.createElement("span");

//     newGrid.append(newSpan);

//     newSpan.append(listArray[i]);

//     newGrid.addEventListener("click",
    
//     function(){

//         this.classList.add("element-selected");
//         console.log(i + 1);
    
//     }
//     ) 
//     gridElementEasy.append(newGrid);
// }

// for (let i = 0; i < 81; i++) {

//     const newGrid = gridCreation("div", "hard-grid-box");
    

//     listArray.push(i + 1);  

//     const newSpan = document.createElement("span");

//     newGrid.append(newSpan);

//     newSpan.append(listArray[i]);

//     newGrid.addEventListener("click",
    
//     function(){

//         this.classList.add("element-selected");
//         console.log(i + 1);
    
//     }
//     ) 
//     gridElementHard.append(newGrid);
// }

// for (let i = 0; i < 48; i++) {

//     const newGrid = gridCreation("div", "very-hard-grid-box");
    

//     listArray.push(i + 1);  

//     const newSpan = document.createElement("span");

//     newGrid.append(newSpan);

//     newSpan.append(listArray[i]);

//     newGrid.addEventListener("click",
    
//     function(){

//         this.classList.add("element-selected");
//         console.log(i + 1);
    
//     }
//     ) 
//     gridElementVeryHard.append(newGrid);
// }

