const getElement = (identifier = "") => document.querySelector(identifier);

function verifySubmission (){
    let name = getElement("#ip1").value;
    let subject = getElement("#ip3").value;
    let text = getElement("#ip2").value;

    if (name && subject && text) {
        alert("sent sucessfully")
    }
    else {
        alert("Please fill in all required fields.")
    }

}



getElement("#send").addEventListener("click", verifySubmission);