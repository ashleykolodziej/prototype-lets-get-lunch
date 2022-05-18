/* eslint-disable */
/*const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
});*/

fetch('https://sandbox.thelevelup.com/v15/apps/1/locations?fulfillment_types=in_store,pickup&lat=42.361145&lng=-71.057083&in_delivery_area=true')
  .then(response => response.json())
  .then(data => {
  		data.forEach(item => {
  			$i = 0;
  			const restaurant = item.location.name;
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

				  				if ('Beverages' === category) {
				  					return;
				  				}

				  				for ( const dish of item.category.items ) {
				  					const img = dish.item.image_url,
				  							name = dish.item.name,
				  							description = dish.item.description;
				  					if (
				  						null !== img &&
				  						null !== name &&
				  						null !== description &&
				  						'' !== description
				  					) {
				  						/*swiper.appendSlide([
											`<div class="swiper-slide">
												<!--img src="${img}"-->
												<div class="tags">
													<button>vegetarian</button>
													<button>vegan</button>
												</div>
												<h3>${name}</h3>
												<h4>Subtitle</h4>
												<p>${description}</p>
											</div>`
										]);*/

										document.querySelector('.swiper').insertAdjacentHTML('beforeend', `<div class="swiper-slide">
												<img src="https://via.placeholder.com/375x375">
												<div class="tags">
													<button>vegetarian</button>
													<button>vegan</button>
												</div>
												<h3>${name}</h3>
												<h4>at ${restaurant}</h4>
												<p>${description}</p>
											</div>`);
				  					}
					  			}
				  			});
				  		})
				  });
  			}
  		});
  });
