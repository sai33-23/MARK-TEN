constbillAmount = document.querySelector("#bill=amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#erroe-message")
const noOfNotes = document.querySelectorAll("#no-of-notes")

const availableNotes = [2000,500,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturned);

        }else{
            showMessage("The cash proided should alleast be equal to the bill amount")
        }

    }else{
        showMessage("invalid bill amount")
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.lenghth;i++){
        const numberOfNotes = math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned%=availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    amountToBeReturned%=availableNotes[0]
}


function hideMessage(){
message.style.display = "none";
}
    message.innerText = msg;

// console.log(cashGiven.value)