let bodyMessage = '';
const contactForm = document.querySelector('#contactForm');
const contactSubmit = document.querySelector('#contactSubmit');

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
    Address:
    ${streetAddress}
    ${city}, ${state}, ${zipcode},
    Comments: ${comments}`;

    return message;
}

function sendEmail() {
    bodyMessage = createMessage();

    Email.send({
        Host : "smtp.gmail.com",
        Username : "turkeyclubcodetester@gmail.com",
        Password : "18GobbleWobble!",
        To : 'turkeyclubcodetester@gmail.com',
        From : document.querySelector('#email').value,
        Subject : 'TC Website Contact Inquiry',
        Body : bodyMessage
    }).then(() => {
        contactForm.innerHTML = '';

        const thankyou = document.createElement('h2');
        thankyou.setAttribute('id', 'thankyouHeader');
        thankyou.innerHTML = 'Thank You!';

        const thankyouMessage = document.createElement('p');
        thankyouMessage.setAttribute('id', 'thankyouMessage');
        thankyouMessage.innerHTML = 'A member of our team will reach out to you shortly.';

        contactForm.appendChild(thankyou);
        contactForm.appendChild(thankyouMessage);
    });
}

contactSubmit.addEventListener('click', sendEmail);
