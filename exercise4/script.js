function checkAge() {
            
    let age = parseInt(document.getElementById("ageInput").value);
    
   
    let ageMessage;
    if (age < 18) {
        ageMessage = "You are a minor.";
    } else if (age >= 18 & age <= 64) {
        ageMessage = "You are an adult.";
    } else {
        ageMessage = "You are a senior.";
    }
    

    
    document.getElementById("ageMessage").innerHTML = ageMessage;

    
    let colors = [];
if (age < 18) {
colors = ["Red", "Yellow" ];
} 
if (age > 18) {
colors = ["Blue" ,"Pink"];
}
if (age > 64) {
colors = ["Green", "Orange"];
}

    
    let colorList = "<ul>";
    for (let i = 0; i < colors.length; i++) {
        colorList += "<li>" + colors[i] + "</li>";
    }
    colorList += "</ul>";

    
    document.getElementById("colorList").innerHTML = colorList;
}