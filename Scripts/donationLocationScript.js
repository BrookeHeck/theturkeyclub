const countyArray = [
    [
        'Milwaukee County',
        'All Saints Food Pantry',
        'Bay View Community Center',
        'Center for Veteran Issues',
        'Community Advocates',
        'Ebenezer COGIC Food Pantry',
        'Family Life Center',
        'Friedens - Hope House',
        'Friedens at Zion Rock',
        'Hillside Family Resource Center',
        'Hope House/United Southside Food Pantry',
        'LaCausa Crisis Nursery',
        'Milwaukee Center for Children & Youth',
        'Milwaukee Christian Center',
        'Neighborhood House Food Pantry',
        'One God Ministry',
        'Project Concern of Cudahy/St. Francis',
        'Salvation Army Citadel',
        'Silver Spring Neighborhood Center',
        'Sojourner Family Peace Center',
        'South Milwaukee Human Concerns',
        'St. Benedict the Moor',
        'St. Hyacinth\'s Food Pantry',
        'St. Matin DePorres Church',
        'St. Roman\'s Food Pantry',
        'St. Vincent DePaul St. Gail\'s Church',
        'St. Vincent DePaul North',
        'The Gathering',
        'Unity Community Soup Kitchen',
        'Walker\'s Point Youth & Family Center',
        'Wheaton Franciscan Home Health & Hospice'
    ],
    [
        'Ozaukee County',
        'Full Shelf Food Pantry',
        'Germantown Food Pantry/St. Bonifice Church',
        'Family Sharing of Ozaukee County'
    ],
    [
        'Washington County',
        'Full Shelf Food Pantry',
        'Germantown Food Pantry/St. Bonifice Church'
    ],
    [
        'Waukesha County',
        'Falls Area Food Pantry',
        'Hebron House',
        'Salvation Army of Waukesha',
        'Sussex Outreach Services',
        'Waukesha Food Pantry',
        'Women\'s Center of Waukesha'
    ],
    [
        'Jefferson County',
        'Fort Atkinson Food Pantry',
        'St. Joseph\'s Catholic Church'
    ],
    [
        'Dodge County',
        'Ashippun Bread Basket Food Pantry',
        'Dodge County Food Pantry'
    ]
];

const donationLocals = document.querySelector('#donationLocals');


function createLocationRow(locationArray) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    
    let count = 1;
    while(locationArray[count] !== undefined) {
        const col = document.createElement('div');
        col.setAttribute('class', 'col-sm-3');
        col.setAttribute('id', 'donation-location');
        const location = document.createElement('p');
        location.innerHTML = locationArray[count];
        col.appendChild(location);
        
        row.appendChild(col);

        count++;
    }

    return row;
}

for (county of countyArray) {

    const container = document.createElement('div');
    container.classList.add('container', 'countyContainer');

    const header = document.createElement('h2');
    header.setAttribute('class', 'header');
    header.innerHTML = county[0];
    container.appendChild(header);

    const row = createLocationRow(county);
    container.appendChild(row);
    donationLocals.appendChild(container);
}