let contributors =
  [
    ["Arrowhead Golf Course", "https://www.golfarrowhead9.com/"],
    ["Baileys Harbor Fish Company", "https://www.baileysharborfishcompany.com/"],
    ["Balistreri's Bluemound Inn", "http://www.balistreris.com/"],
    ["Basal Layer & Company", "https://www.basallayerandco.com/"],
    ["Baskin Robbins", "https://www.baskinrobbins.com/en"],
    ["Beef Jerky Outlet", "https://www.beefjerkyoutlet.com/"],
    ["Berres Brothers Cafe", "https://www.berresbrothers.com/"],
    ["Best Place", "https://www.bestplacemilwaukee.com/"],
    ["Black Stone Creek Golf Course", "https://blackstonecreekgc.com/"],
    ["Blues Egg", "https://bluesegg.com/"],
    ["Brewski's Sports Club", "https://www.brewskismke.com/"],
    ["Brighton Dale Links", "https://www.golfbrightondale.com/"],
    ["Brookfield Hills Golf Course", "https://brookfieldhillsgolf.com/"],
    ["Buck Bradley's", "https://buckbradleys.com/"],
    ["Bunzel's Meat Market", "https://bunzels.com/"],
    ["Cheesecake Factory", "https://www.thecheesecakefactory.com/?gclid=4b273ebf263f12a5e1f25cbb04a836e8&gclsrc=3p.ds&"],
    ["Circus World Museum", "https://www.circusworldbaraboo.org/"],
    ["Colonel Hart's", "https://www.facebook.com/ColonelHarts"],
    ["Coopers Hawk", "https://chwinery.com/locations/wisconsin/brookfield"],
    ["Dana's Field House", "https://www.facebook.com/Danas-Fieldhouse-132205720172219/"],
    ["DeRosa Restaurants", "http://www.derosacorp.com/"],
    ["Door County Maritime Museum", "https://www.dcmm.org/"],
    ["Downtown Beverage, Hartford", "#"],
    ["East Shore Specialty Foods", "https://www.eastshorefoods.com/"],
    ["Edgewood Golf Course", "https://edgewoodgolf.com/"],
    ["Elkhart Lake's Road America", "https://www.roadamerica.com/"],
    ["Escape MKE", "https://www.escapegame.com/escapemke"],
    ["First Stage Milwaukee", "https://www.firststage.org/"],
    ["Five Guys", "http://www.fiveguys.com/"],
    ["Fleming's Prime Steakhouse & Wine Bar", "https://www.flemingssteakhouse.com/Locations/NE/Omaha"],
    ["Fork in the Road", "https://forkintheroadrestaurant.com/"],
    ["From Olives to Oil", "https://fromolivestooil.com/"],
    ["German Fest", "https://germanfest.com/"],
    ["Golf TEC Brookfield", "https://www.golftec.com/golf-lessons/milwaukee/brookfield"],
    ["Green Bay Packers Give Back", "https://www.packers.com/community/give-back-award"],
    ["Hartford Wine & Spirits", "https://www.facebook.com/hartfordliquor/"],
    ["Hectors", "https://www.hectors.com/"],
    ["Honey Acres", "https://honeyacres.com/"],
    ["House of Home Made Sausage", "http://houseofhomemadesausage.com/"],
    ["In Cahoots", "https://www.facebook.com/InCahoots2/"],
    ["J&B's Blue Ribbon Bar & Grill", "https://www.jbblueribbon.com/"],
    ["Johnson's Cycle & Fitness", "https://www.johnsonsbikeshop.com/"],
    ["Julie Hass, Hass Kitchen", "#"],
    ["Kettle Hills Golf Course", "https://www.kettlehills.com/"],
    ["Koss Corporation", "https://koss.com/"],
    ["Lake Country Cigars", "https://www.lccigars.com/"],
    ["Lake Geneva Cruise Line", "https://www.cruiselakegeneva.com/"],
    ["Lakefront Brewery", "https://lakefrontbrewery.com/"],
    ["Leff's Lucky Town", "https://leffs.com/"],
    ["Little Caesars", "https://littlecaesars.com/en-us/"],
    ["Lowlands Group", "https://lowlandsgroup.com/"],
    ["Major Goolsby’s", "https://www.majorgoolsbys.com/"],
    ["Mama D's Coffee", "https://www.mamadscoffee.com/"],
    ["Milwaukee Admirals", "https://www.milwaukeeadmirals.com/"],
    ["Milwaukee County Zoo", "http://www.milwaukeezoo.org/"],
    ["Milwaukee Food & City Tours", "https://www.milwaukeefoodtours.com/"],
    ["Milwaukee Magazine", "https://www.milwaukeemag.com/"],
    ["Milwaukee Steak House", "http://themilwaukeesteakhouse.com/"],
    ["Milwaukee World Festivals", "https://www.milwaukeeworldfestival.com/"],
    ["Mobcraft Brewing", "https://www.mobcraftbeer.com/"],
    ["MOD Pizza Wauwatosa", "https://locations.modpizza.com/usa/wi/wauwatosa/7470-w-state-st"],
    ["Monkey Joe's", "https://www.monkeyjoes.com/"],
    ["Morningstar Golf Club", "https://www.morningstargc.com/"],
    ["Naga-Waukee Ice Arena", "https://www.waukeshacounty.gov/nagawaukeeicearena/"],
    ["New Berlin Hills Golf Course", "https://www.newberlinhillsgolf.com/"],
    ["Northern Sky Theater, Fish Creek", "https://northernskytheater.com/"],
    ["O’Briens Pub", "http://obriens-irishpub.com/"],
    ["O'Donoghue's Irish Pub", "http://odonoghuesirishpub.com/"],
    ["Old Dog Design - James Hass", "#"],
    ["Old German Beer Hall", "https://oldgermanbeerhall.com/"],
    ["O'Sullivan's Irish Pub", "https://osullivansbrookfield.com/"],
    ["Paganica Golf Course", "https://www.paganicagolf.com/"],
    ["Peninsula Players, Fish Creek", "https://www.peninsulaplayers.com/"],
    ["Petrifying Springs Golf Course", "https://www.petrifyingspringsgolf.com/"],
    ["Picnic Basket", "https://picnicbasketrestaurant.com/"],
    ["Pioneer Bowl", "https://pioneerbowlsports.com/"],
    ["Pitch's", "https://www.pitchsribs.com/"],
    ["Polish Heritage Alliance", "https://www.polishcenterofwisconsin.org/polish-heritage-alliance"],
    ["Prairieville Park", "https://www.prairievillepark.com/"],
    ["Red Circle Inn", "https://redcircleinn.com/"],
    ["Rocky Rococco's", "https://rockyrococo.com/"],
    ["Sausage Haus", "#"],
    ["Saz’s Catering", "https://sazs.com/Catering/"],
    ["Scenic View Country Club", "https://scenicviewcc.com/"],
    ["Schauer Arts Center", "https://www.schauercenter.org/"],
    ["Schlitz Audubon Nature Center", "https://www.schlitzaudubon.org/"],
    ["Skylight Music Theater", "https://www.skylightmusictheatre.org/"],
    ["Songbird Hills Golf Club", "https://www.golfsongbird.com/"],
    ["SS Badger", "https://www.ssbadger.com/"],
    ["Starbucks Coffee", "https://www.starbucks.com/"],
    ["Storms Golf", "http://www.stormsgolf.com/"],
    ["Toppers Hairstyling", "#"],
    ["Trader Joes", "https://www.traderjoes.com/home"],
    ["Tralee Irish Imports", "https://www.traleeirishimports.com/"],
    ["Transfer Pizzeria", "https://www.transfermke.com/"],
    ["Ultimate Confection", "https://www.ultimateconfection.com/"],
    ["Walters on North", "https://www.facebook.com/Walters-on-North-108749675845600/"],
    ["Weissgerber’s Seven Seas", "https://sevenseaswi.com/home.php"],
    ["Wisconsin State Fair", "https://wistatefair.com/fair/home/"]
  ];

  let corporateContributors = [
    ["Eagle Printing & Graphics", "https://www.eagleprinter.com/"],
    ["Eaton Corporation", "https://www.eaton.com/us/en-us.html"],
    ["Green Bay Packers", 'https://www.packers.com/'],
    ["Hunger Task Force", "https://www.hungertaskforce.org/"],
    ["I.A.G. Wealth Partners", "https://iagwealthpartners.com/"],
    ["Kwik Trip", "https://www.kwiktrip.com/"],
    ["Roundy's / Kroger", "https://www.kroger.com/"]
  ];



function createContributor(contributorArray) {
  const contributor = document.createElement('a');
  contributor.setAttribute('class', 'contributorLink');
  contributor.setAttribute('href', contributorArray[1]);
  contributor.setAttribute('target', '_blank');
  contributor.innerHTML = contributorArray[0];

  const contributorDiv = document.createElement('div');
  contributorDiv.setAttribute('id', 'contributorDiv');
  contributorDiv.appendChild(contributor);

  return contributorDiv;
}

function createContributorRow(contributorArray) {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  let count = 0;
  while(contributorArray[count] !== undefined) {
    const col = document.createElement('div');
    col.setAttribute('class', 'col-sm-4');
    col.setAttribute('id', 'contributorBlock');

    const contributorLink = createContributor(contributorArray[count]);
    
    col.appendChild(contributorLink);
    row.appendChild(col);

    count++;
  }

  return row;
}

//Corporate Contributors
const contributorPageContainer = document.querySelector('#contributorGrid');

const corporateContainer = document.createElement('div');
corporateContainer.classList.add('container', 'contributorContainer');

const corporateHeader = document.createElement('h2');
corporateHeader.setAttribute('class', 'contributorHeader');
corporateHeader.innerHTML = 'Corporate Contributors';
corporateContainer.appendChild(corporateHeader);

const row = createContributorRow(corporateContributors);
corporateContainer.appendChild(row);
contributorPageContainer.appendChild(corporateContainer);

// Contributors
const contributorContainer = document.createElement('div');
contributorContainer.classList.add('container', 'contributorContainer');

const contributorHeader = document.createElement('h2');
contributorHeader.setAttribute('class', 'contributorHeader');
contributorHeader.innerHTML = 'Contributors';
contributorContainer.appendChild(contributorHeader);

const row2 = createContributorRow(contributors);
contributorContainer.appendChild(row2);
contributorPageContainer.appendChild(contributorContainer);