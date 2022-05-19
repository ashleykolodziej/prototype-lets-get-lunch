const locationIds = [
	//799571,
	779266,
	//755898,
	//801423,
	//126,
	//779588,
	//728388,
	//11085,
	//727994
]

const veggieSafe = [
	'beyond burger',
	'impossible burger'
]

const simpleVegCheck = [
	'chicken',
	'burger',
	'bacon',
	'beef',
	'lamb',
	'bone-in',
	'pork',
	'wings',
	'prosciutto',
	'tuna',
	'lobster',
	'oyster',
	'fish',
	'meat',
	'pepperoni',
	'poke',
	'salmon',
	'steak'
]

const veganSafe = [
	'vegan'
]

const simpleVeganCheck = [
	'eggs',
	'egg',
	'omelet',
	'bene',
	'cheese',
	'yogurt',
	'whip',
	'pesto',
	'mayo',
	'feta',
	'chocolate',
	'queso',
	'cream',
	'tzatziki',
	'honey',
	'mozzarella'
]

function checkVeg(data) {
	if ( veggieSafe.some(r=> data.toLowerCase().indexOf(r) >= 0) ) {
		return true;
	}

	return !simpleVegCheck.some(r=> data.toLowerCase().indexOf(r) >= 0);
}

function checkVegan(data) {
	if ( veganSafe.some(r=> data.toLowerCase().indexOf(r) >= 0) ) {
		return true;
	}

	return !simpleVeganCheck.some(r=> data.toLowerCase().indexOf(r) >= 0);
}

let lat = 42.437431;
let lng = -71.059319;

fetch(`https://api.thelevelup.com/v15/apps/1/locations?fulfillment_types=in_store,pickup&lat=${lat}&lng=${lng}`, { cache: "force-cache" })
  .then(response => response.json())
  .then(data => {
  		data.forEach(item => {
  			const restaurant = item.location.name;
  			//console.log(restaurant);
  			//console.log(item);
  		});
  });


const pickit = function () {
	const swiper = this.swiper.create('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: false
	});

	locationIds.forEach( location => {
		fetch(`https://api.thelevelup.com/v15/locations/${location}`)
		  .then(response => response.json())
		  .then(item => {
	  			const restaurant = item.location.name ? item.location.name : item.location.merchant_name;
	  			if (
	  			 	null !== item.location.delivery_menu_url &&
	  			 	null !== restaurant
	  			) {
	  				fetch(item.location.delivery_menu_url)
					  .then(response => response.json())
					  .then(data => {
					  		Object.values(data).forEach(item => {
					  			item.categories.forEach(item => {
					  				const category = item.category.name;
					  				console.log(category);

					  				if ('Beverages' === category) {
					  					return;
					  				}

					  				for ( const dish of item.category.items ) {
					  					const img = dish.item.image_url,
					  							name = dish.item.name,
					  							description = dish.item.description,
					  							allOfIt = name + ' ' + description;
					  					if (
					  						null !== img &&
					  						null !== name &&
					  						null !== description &&
					  						'' !== description
					  					) {
											// Crummy vegan filter test
											const isVeg = checkVeg(allOfIt);
											let isVegan = false;

											if (isVeg) {
												isVegan = checkVegan(allOfIt);
											}

											if (!isVegan) {
												return;
											}

											swiper.appendSlide(`<div class="swiper-slide">
													<div class="card">
													<img src="${img}?density=1&height=300&width=420">
													<div class="card-content card-content-padding">
													<div class="tags">
														${ isVeg ? '<span class="badge">vegetarian</span>' : '' }
														${ isVegan ? '<span class="badge">vegan</span>' : '' }
													</div>
													<h3>${name}</h3>
													<p>${description}</p>
													</div>
													<div class="card-footer">at ${restaurant}</p>
													</div>
												</div>`);
					  					}
						  			}
					  			});
					  		})
					  });
	  			}
		  	});
	} )

}



export default pickit;
