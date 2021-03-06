// import our store
import store from './store.js';
import locations from './data/locations.js';

const locationIds = [
	100489,
	//799571,
	//779266,
	//755898,
	//801423,
	//779588,
	//728388,
	/*11085,
	727994*/
]

let lat = 42.437431;
let lng = -71.059319;

/*fetch(`https://api.thelevelup.com/v15/apps/1/locations?fulfillment_types=in_store,pickup&lat=${lat}&lng=${lng}`, { cache: "force-cache" })
  .then(response => response.json())
  .then(data => {
  		console.log(data)
  		data.forEach(item => {
  			const restaurant = item.location.name;
  		});
  });
  */

locations.forEach(item => {
	const restaurant = item.location.name;
});

document.body.addEventListener( 'click', function(e) {
	const $this = e.target;
	const $delegated = $this.closest('.swiper-slide');

	if ( $delegated ) {
		const $icon = $delegated.querySelector('.icon');
		$icon.textContent = ($icon.textContent === 'heart_fill' ? 'heart' : 'heart_fill');

		const theFaved = { ...$delegated.dataset };

		const alreadyFaved = store.state.favorites.some(element => {
		  if (element.dishId === theFaved.dishId) {
		    return true;
		  }

		  return false;
		});

		if (alreadyFaved) {
			store.state.favorites = store.state.favorites.filter(object => {
			  return object.dishId !== theFaved.dishId;
			});
		} else {
			store.state.favorites = [...store.state.favorites, theFaved];
		}
	}
} );

const pickit = function (page) {
	const swiper = page.app.swiper.create('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: false
	});

	let currentLocations = locationIds;
	let locationSingle = page.route.params.id;

	if ( locationSingle ) {
		currentLocations = locations.filter(obj => {
		  return obj.location.id == locationSingle
		});
	}

	/*locationIds.forEach( locationId => {
		// Filter to the correct location
		currentLocations = locations.filter(obj => {
		  return obj.location.id === locationId
		});
	} );*/

	console.log(currentLocations)

	const item = currentLocations[0];
	const restaurant = item.location.name ? item.location.name : item.location.merchant_name;
  	const dataRestaurantId = item.location.id;

	if (
	 	null !== item.location.delivery_menu_url &&
	 	null !== restaurant
	) {
	//fetch(item.location.delivery_menu_url)
	fetch(`js/data/menu-${locationSingle}.json`)
	  .then(response => response.json())
	  .then(data => {
	  		console.log(data)
	  		Object.values(data).forEach(item => {
	  			item.categories.forEach(item => {
	  				const category = item.category.name;

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

							if (!isVeg) {
								return;
							}

							swiper.appendSlide(`<div
									data-restaruant-id="${dataRestaurantId}"
									data-dish-id="${dish.item.id}"
									data-dish-name="${name}"
									data-dish-location="${restaurant}"
									data-dish-img="${img}?density=1&height=300&width=420"
									class="swiper-slide">
									<div class="card">
									<div class="card-media">
										<img src="${img}?density=1&height=300&width=420">
									</div>
									<div class="card-content card-content-padding">
									<div class="card-meta">
										<div class="tags">
											${ isVeg ? '<span class="badge">vegetarian</span>' : '' }
											${ isVegan ? '<span class="badge">vegan</span>' : '' }
										</div>
										<div class="card-favorite">
											<i class="icon f7-icons if-not-md">heart</i>
      									<i class="icon material-icons if-md">heart</i>
   									</div>
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
}



export default pickit;
