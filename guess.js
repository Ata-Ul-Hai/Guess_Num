const randomNum= Math.floor(Math.random()*50)+1;

const input = document.getElementById("inputs");
const button = document.getElementById("enter");
const hint = document.getElementById("hint");

button.addEventListener("click", () => {
    const guess= Number(input.value);

    if(!guess || guess<1 || guess>50){
        alert("Enter A NUMBER between 1 and 50")
    }
    else if(guess>randomNum){
        hint.textContent="📈 Too high! Try again.";
    }
    else if (guess < randomNum) {
        hint.textContent = "📉 Too low! Try again.";
    }
    else{
        hint.textContent = "🎉 Correct! You guessed the number!";
        hint.style.color = "green";
    }
    input.value="";
})