function formatDate(input){
    input.value = input.value.replace(/\D/g,'');
    if(input.value.length > 2 && input.value.length <= 4)
        input.value = input.value.slice(0,2) + '/' + input.value.slice(2);
    else if(input.value.length > 4)
        input.value = input.value.slice(0,2) + '/' + input.value.slice(2,4) + '/' + input.value.slice(4,8);
}

function calculateAge(){
    var dobValue = document.getElementById("dob").value;
    var parts = dobValue.split("/");

    if(parts.length !== 3){
        document.getElementById("result").innerHTML = "Invalid Date";
        return;
    }

    var day = parseInt(parts[0]);
    var month = parseInt(parts[1]) - 1;
    var year = parseInt(parts[2]);

    var dob = new Date(year, month, day);
    var today = new Date();

    if(isNaN(dob)){
        document.getElementById("result").innerHTML = "Invalid Date";
        return;
    }

    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();

    if(m < 0 || (m === 0 && today.getDate() < dob.getDate())){
        age--;
    }

    document.getElementById("result").innerHTML = "YOUR AGE: " + age;
}

var dobInput = document.getElementById("dob");

dobInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        calculateAge();
    }
});


function darkMode(){
    document.body.classList.add("dark");
}

function lightMode(){
    document.body.classList.remove("dark");
}
