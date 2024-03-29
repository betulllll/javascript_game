let level = 1;
let clicks = 0;
let timer;
let counterElement;

document.addEventListener("DOMContentLoaded", function() {
    counterElement = document.createElement('div');
    counterElement.id = "counter";
    document.body.appendChild(counterElement);
    updateCounter();
});


document.getElementById("gameButton").addEventListener("mouseover", function() {
    timer = setTimeout(() => {
        this.style.marginTop = Math.random() * 300 + "px";
        this.style.marginLeft = Math.random() * 300 + "px";
    }, 500 - (level - 1) * 100); // Adjust timer duration based on level
});

document.getElementById("gameButton").addEventListener("mouseout", function() {
    clearTimeout(timer); 
});
    
document.getElementById("gameButton").addEventListener("click", function() {
   
    clearTimeout(timer); // Clear the timer if button is clicked
    timer = setTimeout(() => {
        this.style.marginTop = Math.random() * 300 + "px";
        this.style.marginLeft = Math.random() * 300 + "px";
    }, 500 - (level - 1) * 100); // Reset timer for the next round

    clicks++;
    if (clicks === 3) {
        alert("You are the winner! You can go next level! " + level + "!");
        level++;
        clicks = 0;
        if (level === 6) {
            this.style.pointerEvents = 'none';
            alert("Congratulations! You've reached level 6!");
        } else {
            setTimeout(() => {
                this.style.pointerEvents = 'auto';
            }, 500 - (level - 1) * 100);
        }
    }

    // Move the button to a random position
    this.style.marginTop = Math.random() * 300 + "px";
    this.style.marginLeft = Math.random() * 300 + "px";
    updateCounter(); // Update counter
});

function updateCounter() {
    counterElement.textContent = "Clicks: " + clicks;
}