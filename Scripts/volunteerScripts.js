let bodyMessage = '';
const volunteer_form = document.querySelector('.volunteer_form');
const volunteer_button = document.querySelector('#volunteerSubmit');

function createMessage() {
    const senderName = document.querySelector('#name').value;
    const emailSender = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phone').value;
    const streetAddress = document.querySelector('#street').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const zipcode = document.querySelector('#zipcode').value;
    const comments = document.querySelector('#comments').value;

    const message = `Name: ${senderName}, Email: ${emailSender}, Phone Number: ${phoneNumber},
    Address: ${streetAddress} ${city}, ${state}, ${zipcode}
    Comments: ${comments}`;

    return message;
}

function sendEmail() {
    bodyMessage = createMessage();
    console.log('clicked');

    Email.send({
        Host : "smtp.gmail.com",
        Username : "turkeyclubcodetester@gmail.com",
        Password : "18GobbleWobble!",
        To : 'turkeyclubcodetester@gmail.com, b19heck@gmail.com',
        From : document.querySelector('#email').value,
        Subject : 'TC Website Volunteer SignUp',
        Body : bodyMessage
    }).then(() => {
        volunteer_form.innerHTML = '';

        const thankyou = document.createElement('h2');
        thankyou.setAttribute('id', 'thankyouHeader');
        thankyou.innerHTML = 'Thank You!';

        const thankyouMessage = document.createElement('p');
        thankyouMessage.setAttribute('id', 'thankyouMessage');
        thankyouMessage.innerHTML = 'A member of our team will reach out to you shortly.';

        volunteer_form.appendChild(thankyou);
        volunteer_form.appendChild(thankyouMessage);
    });

    
}

volunteer_button.addEventListener('click', sendEmail);

