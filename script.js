function displayInput() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("output");
    output.textContent = input; // or use innerHTML if you want formatting
}