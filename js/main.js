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



// var selectedDifficulty;



function boxCreation (elementType, className){

    const newElement = document.createElement(elementType);

    newElement.classList.add(className);

    return newElement;
    
}

const buttonInteractor = document.getElementById("button-play");

buttonInteractor.addEventListener("click",
function(){
    var difficulty = document.getElementById("difficulty").value;

    gridElement.replaceChildren();
    // gridElement.innerHTML = ""; alternativa

    console.log(difficulty);
    
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

    for (let i = 0; i < numCaselle; i++) {

        const newBox = boxCreation("div", gridStyle);
    
        const newSpan = document.createElement("span");
    
        newBox.append(newSpan);
    
        newSpan.append(i + 1);
        
        console.log(parseInt(newSpan.innerHTML));

       
        
        newBox.addEventListener("click",
        
        function(){
            
            if (parseInt(newSpan.innerHTML) <= 16){
                newBox.classList.add("bomb-box");
                alert("hai perso! il tuo punteggio è: " + punteggio)

                
            }
            else{
                newBox.classList.add("flower-box");
                punteggio = punteggio + 1;
                console.log(punteggio);
    
            }
           
            console.log(i + 1);
        
        }
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

function createArray(elementsNum, gridStyle){

    var difficulty = document.getElementById("difficulty").value;

    const bombsArray = [];

    const flowersArray = [];

    for(let i = 0; i = elementsNum; i++){

        let rngBombs = randomNumberGenerator(1 ,"" , 16);

        let rngFlowers = randomNumberGenerator(1,difficulty, );

        if(bombsArray.length !== 16){
            bombsArray.push(rngBombs);
        }
        
        if (flowersArray.length !== elementsNum){
            flowersArray.push(rngFlowers);
        }
            
        

        

        


    }
}

function randomNumberGenerator (min, gridStyle, userNumInsertion){
    if(gridStyle == "easy-grid-box"){
        max = 100;
    }
    else if (gridStyle == "hard-grid-box"){
        max = 81;
    }
    else if (gridStyle == "very-hard-grid-box"){
        max = 49;
    }
    else{
        max = userNumInsertion;
    }
    return Math.floor(Math.random() * (max + min) - 1);
}