class Calculator{
    constructor(display,buttonBoard){
        this.result = 0;
        this.numberA = 0;
        this.numberB = 0;
        this.operation = "";
        this.display = display;
        this.buttonBoard = buttonBoard;   
        this.displayOn = false;
        globalThis = this;     
    }
   
    initializeBoard(){
        this.display.textContent = 0;

        for(let index = 0; index < buttonBoard.length; index++){

            let button = this.buttonBoard[index];                    

            if(button.textContent == 'DEL'){
                button.addEventListener("click",this.deleteDisplay);                            
            }else if (button.textContent =='CLEAR'){
                button.addEventListener("click",this.clearDisplay); 
            }else if(button.textContent == '='){
                button.addEventListener("click",this.showResult); 
            }else if(button.textContent == '+'|| button.textContent == '-' || button.textContent == '*' 
                    || button.textContent == '/' || button.textContent == '+/-'){
                button.addEventListener("click",this.doOperation);                       
            }else{
                button.addEventListener("click",this.writeDisplay); 
            }     

        }
    }  

    writeDisplay(){
        if(globalThis.displayOn == false){
            globalThis.display.textContent = ""; 
            globalThis.displayOn = true;                     
        }
        globalThis.display.textContent += this.textContent;        
    }

    deleteDisplay(){
        let str = globalThis.display.textContent;
        globalThis.display.textContent  = str.substring(0,str.length-1);
    }

    clearDisplay(){
        globalThis.display.textContent = "";
    }

    showResult(){
        globalThis.numberB = Number(globalThis.display.textContent);       
        switch (globalThis.operation) {
            case '+':
                globalThis.result = globalThis.numberA + globalThis.numberB;
                break;
            case '-':
                globalThis.result = globalThis.numberA - globalThis.numberB;
                break;
            case '*':
                globalThis.result = globalThis.numberA * globalThis.numberB;
                break;
            case '/':
                globalThis.result = globalThis.numberA / globalThis.numberB;
                break;
            case '+/-':
                globalThis.result = -1*globalThis.result;
                break;                               
            default:
                break;
        }
        globalThis.display.textContent = globalThis.result;   
    }

    doOperation(){
        if(globalThis.operation != ""){
            globalThis.numberA = globalThis.numberB;
        }
        globalThis.numberA = Number(globalThis.display.textContent);       
        globalThis.operation = this.textContent; 
        globalThis.displayOn = false;  
        globalThis.display.textContent = "";    
    }

    
}