//Get values from the page, start function
function getValues(){
    //Get values
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Convert string to int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Validation
    if(Number.isInteger(startValue) && (Number.isInteger(endValue))){
        //Call generate numbers
        let numbers = generateNumbers(startValue, endValue);
        //Call display numbers
        displayNumbers(numbers);
    } else {
        alert("Error: You must enter integers!");
    }   
}

//Generate numbers from start value to the end value, logic function
function generateNumbers(sValue, eValue){ //Brand new variables(parameters)
    let numbers = []

    //Get all numbers from start to end
    //For loop - start, end, increment
    for(let i = sValue; i <= eValue; i++){
        numbers.push(i);
    }
    return numbers;
}

//Display the numbers and mark even numbers in bold, view function
function displayNumbers(numbers){
    //To store table data
    let templateRows = "";

    //Loop over the array
    numbers.forEach(element => {
        if(element % 2 == 0){
            templateRows += `<tr><td><strong>${element}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${element}</td></tr>`;
        }
    });
    document.getElementById("results").innerHTML = templateRows;
}