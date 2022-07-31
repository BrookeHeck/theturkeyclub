function makeEmailBody() {
    const subscriberName = document.querySelector('#newsletterName').value;
    const subscriberEmail = document.querySelector('#newsletterEmail').value;

    const bodyMessage = `${subscriberEmail}, ${subscriberName} is requesting to subscribe to your newsletter!`;
    return bodyMessage;
}

function joinNewsletter() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "turkeyclubcodetester@gmail.com",
        Password : "18GobbleWobble!",
        To : 'turkeyclubcodetester@gmail.com, b19heck@gmail.com',
        From : document.querySelector('#newsletterEmail').value,
        Subject : 'TC Website Newsletter Subscription Request',
        Body : makeEmailBody()
    }).then(() => {
        console.log('success');
        const form = document.querySelector('#newsletterForm');
        form.innerHTML = '';

        const subscribed = document.createElement('p');
        subscribed.innerHTML = 'You are signed up to receive our newsletter!';
        form.appendChild(subscribed);
    });
}

function createForm() {
    const newsletterData = document.createElement('form');
    newsletterData.setAttribute('method', 'post');
    newsletterData.setAttribute('id', 'newsletterForm');

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'newsletterName');
    nameLabel.innerHTML = 'Name: ';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'newsletterName');
    nameInput.setAttribute('required', 'required');

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'newsletterEmail');
    emailLabel.innerHTML = 'Email: ';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'newsletterEmail');
    emailInput.setAttribute('required', 'required');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('id', 'newsletterSubmit');
    submitBtn.setAttribute('type', 'button');
    submitBtn.value = 'Submit';
    submitBtn.addEventListener('click', joinNewsletter);

    newsletterData.appendChild(nameLabel);
    newsletterData.appendChild(nameInput);
    newsletterData.appendChild(emailLabel);
    newsletterData.appendChild(emailInput);
    newsletterData.appendChild(submitBtn);
    newsletterData.style.visibility = 'hidden';

    return newsletterData;

}

navOptions = ['Home', 'About Us', 'Events', 'How to Help', 'Contributors', 'Donation Locations', 'Contact Us'];
navSources = ['index.html', 'AboutUs.html', 'events.html', 'howtohelp.html', 'contributors.html', 'donation_locations.html', 'contact_us.html'];

function createNavs() {
    const navDiv = document.querySelector('#navDiv');

    // Top NavBar
    const topNav = document.createElement('div');
    topNav.setAttribute('class', 'top-nav');

    const brand = document.createElement('a');
    brand.setAttribute('class', 'navbar-brand');
    brand.setAttribute('href', 'index.html');
    const brandImg = document.createElement('img');
    brandImg.src = 'images/logo-the-turkey-club.jpg';
    brandImg.alt = 'Turkey Club Logo';
    brand.appendChild(brandImg);
    topNav.appendChild(brand);

    const topRightNav = document.createElement('div');
    topRightNav.setAttribute('class', 'container');
    topRightNav.setAttribute('id', 'top-nav-right')

    const navRow = document.createElement('div');
    navRow.setAttribute('class', 'row');

    const topCol = document.createElement('div');
    topCol.setAttribute('class', 'col-md-12');
    topCol.setAttribute('id', 'topRightNav');
    
    const facebook = document.createElement('a');
    facebook.setAttribute('href', 'http://www.facebook.com/#!/pages/The-Turkey-Club/111395218916178');
    facebook.setAttribute('target', '_blank');
    const facebookSpan = document.createElement('span');
    facebook.innerHTML = 'Follow Us! ';
    const facebookImage = document.createElement('img');
    facebookImage.src = 'images/facebook.png';
    facebookImage.alt = 'facebook';
    facebookSpan.appendChild(facebookImage);
    facebook.appendChild(facebookSpan);

    const newsletterButton = document.createElement('button');
    newsletterButton.setAttribute('id', 'newsletterButton');
    newsletterButton.innerHTML = 'Join our Newsletter';

    topCol.appendChild(newsletterButton);
    topCol.appendChild(facebook);
    navRow.appendChild(topCol);

    const bottomCol = document.createElement('div');
    bottomCol.setAttribute('class', 'col-md-12');
    const newsletterForm = createForm();
    bottomCol.appendChild(newsletterForm);
    navRow.appendChild(bottomCol);

    newsletterButton.addEventListener('click', () => {
        const form = document.querySelector('#newsletterForm');
        if (form.style.visibility === 'visible') {
            form.style.visibility = 'hidden';
        } else {
            form.style.visibility = 'visible';
        }
    }, false);

    
    topRightNav.appendChild(navRow);
    topNav.appendChild(topRightNav);
    navDiv.appendChild(topNav);


    // Responsive Toggle NavBar
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-md', 'navbar-dark');

    const fluidContainer = document.createElement('container-fluid');
    fluidContainer.setAttribute('class', 'container-fluid');

    const toggleButton = document.createElement('button');
    toggleButton.setAttribute('class', 'navbar-toggler');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');
    const toggleSpan = document.createElement('span');
    toggleSpan.setAttribute('class', 'navbar-toggler-icon');
    toggleButton.appendChild(toggleSpan);
    fluidContainer.appendChild(toggleButton);

    const navList = document.createElement('div');
    navList.classList.add('collapse', 'navbar-collapse');
    navList.setAttribute('id', 'navbarSupportedContent');

    const navUnorderList = document.createElement('ul');
    navUnorderList.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-md-0');
    for (i = 0; i < navOptions.length; i++) {
        if(navOptions[i] === 'Events') {
            const eventItem = document.createElement('li');
            eventItem.classList.add('nav-item', 'dropdown');

            const eventAnchor = document.createElement('a');
            eventAnchor.classList.add('nav-link', 'dropdown-toggle');
            eventAnchor.setAttribute('href', '#');
            eventAnchor.setAttribute('id', 'navbarDropdown');
            eventAnchor.setAttribute('role', 'button');
            eventAnchor.setAttribute('data-bs-toggle', 'dropdown');
            eventAnchor.setAttribute('aria-expanded', 'false');
            eventAnchor.innerHTML = 'Events';
            eventItem.appendChild(eventAnchor);

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.setAttribute('class', 'dropdown-menu');
            dropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

            const eventFlyerItem = document.createElement('li');
            const eventFlyerAnchor = document.createElement('a');
            eventFlyerAnchor.setAttribute('class', 'dropdown-item');
            eventFlyerAnchor.setAttribute('id', 'eventMenuItem');
            eventFlyerAnchor.setAttribute('href', 'events.html');
            eventFlyerAnchor.innerHTML = 'Event Info';

            eventFlyerItem.appendChild(eventFlyerAnchor);
            dropdownMenu.appendChild(eventFlyerItem);

            const eventPhotoItem = document.createElement('li');
            const eventPhotoAnchor = document.createElement('a');
            eventPhotoAnchor.setAttribute('class', 'dropdown-item');
            eventPhotoAnchor.setAttribute('id', 'eventMenuItem');
            eventPhotoAnchor.setAttribute('href', 'eventPhotoGallery.html');
            eventPhotoAnchor.innerHTML = 'Event Photos';

            eventPhotoItem.appendChild(eventPhotoAnchor);
            dropdownMenu.appendChild(eventPhotoItem);

            eventItem.appendChild(dropdownMenu)
            navUnorderList.appendChild(eventItem);

        } else {
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'nav-item');

            const listLink = document.createElement('a');
            listLink.classList.add('nav-link');
            listLink.setAttribute('aria-current', 'page');
            listLink.setAttribute('href', navSources[i]);
            listLink.setAttribute('id', 'navigationLink');
            listLink.innerHTML = navOptions[i];

            listItem.appendChild(listLink);
            navUnorderList.appendChild(listItem);
        }
    }
    navList.appendChild(navUnorderList);
    fluidContainer.appendChild(navList);
    navbar.appendChild(fluidContainer);
    navDiv.appendChild(navbar);
}

createNavs();