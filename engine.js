const errorShowcasers = Array.from(document.getElementsByClassName("errorShowcaser"));
    
const FirstNameField = document.getElementById("FirstNameInput");

const LastNameField = document.getElementById("LastNameInput");

const EmailAddressField = document.getElementById("EmailAddressInput");

const GeneralEnquiry = document.getElementById("GeneralEnquiryInput");

const SupportRequest = document.getElementById("SupportRequestInput");

const consent = document.getElementById("consentInput");

const messageField = document.getElementById("Message");

const SubmitButton = document.getElementById("buttonSubmit");

const ResetButton = document.getElementById("buttonReset");

const alertDIV = document.getElementById("alert");



GeneralEnquiry.addEventListener("keydown", (event) => {

       if (event.key === "Enter") GeneralEnquiry.checked = !GeneralEnquiry.checked;
});

SupportRequest.addEventListener("keydown", (event) => {

      if (event.key === "Enter") SupportRequest.checked = !SupportRequest.checked;
});


 consent.addEventListener("keydown", (event) => {

       if (event.key === "Enter") consent.checked = !consent.checked;
 });



async function errorShowcasersReset() {

    errorShowcasers.forEach(element => {

        element.setAttribute("aria-hidden", "true");

        element.setAttribute("aria-label", "");

        element.classList.remove("active");
    });
}



async function showError(index, messageAriaLabel) {

    errorShowcasers[index].classList.add("active");

    errorShowcasers[index].setAttribute("aria-hidden", "false");

    errorShowcasers[index].setAttribute("aria-label", messageAriaLabel);
}



async function messageSubmit() {


    errorShowcasersReset();


    let errorDetected = false;
    
const FirstName = FirstNameField.value;

const LastName = LastNameField.value;

const EmailAddress = EmailAddressField.value;

const message = messageField.value;


    if(FirstName.trim() == ""){

        showError(0, "Write your first name in the rectangle");

        errorDetected = true;
    }

    if(LastName.trim() == ""){

        showError(1, "Write your last name in the rectangle");

        errorDetected = true;
    }
    

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if( !( emailPattern.test(EmailAddress) ) ){

        showError(2, "Write your email in the retangle, just how it would be typed in Gmail's recipient field");

        errorDetected = true;
    }


    if( !(GeneralEnquiry.checked || SupportRequest.checked) ){

        showError(3, "Select one and only one query type");

        errorDetected = true;
    }
    
    
    if(message.trim() == ""){

        showError(4, "You can't send a massage that only has spaces or a line breaks, you do need to type letters.");

        errorDetected = true;
    }


    if(!consent.checked){

        showError(5, "There won't be much we can do if you do not consent to being contacted by the team...");

        errorDetected = true;
    }


        if(errorDetected) return;


    alertDIV.classList.add("active");

    alertDIV.setAttribute("aria-hidden", "false");

    setTimeout( () => {

        alertDIV.classList.remove("active");

        alertDIV.setAttribute("aria-hidden", "true");

      }, 5000);
}


SubmitButton.addEventListener("click", messageSubmit);

SubmitButton.addEventListener("keydown", (event) => {

      if (event.key === "Enter") messageSubmit();
});



async function messageReset() {


    errorShowcasersReset();


    GeneralEnquiry.checked = false;

     SupportRequest.checked = false;

     consent.checked = false;

    
     FirstNameField.value = "";
     
     LastNameField.value = "";
     
     EmailAddressField.value = "";
     
     messageField.value = "";
}


ResetButton.addEventListener("click", messageReset);

ResetButton.addEventListener("keydown", (event) => {

      if (event.key === "Enter") messageReset();
});