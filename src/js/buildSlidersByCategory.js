import { checkVeg, checkVegan } from '../js/checkdishes';

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

async function buildSlidersByCategory(data, $f7) {
	const sliderMarkup = document.createElement('div');

	Object.values(data).forEach(item => {
		//item.categories.forEach(item => {
			const category = item.name;

			if (category === 'Beverages') {
				return;
			}

			const title = document.createElement('div');
			const classes = ['block-title', 'block-title-medium'];
					title.textContent = category;
					title.classList.add(...classes);

			const swiperTemplate = document.createElement('div');
		   		swiperTemplate.classList.add('swiper');
		   const swiperWrapper = document.createElement('div');
		   		swiperWrapper.classList.add('swiper-wrapper');
		   		swiperTemplate.appendChild(swiperWrapper);

			const swiper = $f7.swiper.create(swiperTemplate, {
				// Optional parameters
				direction: 'horizontal',
				loop: false,
				effect: "cards"
			});

			let slideCount = 0;

			for ( const dish of item.items ) {
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

					slideCount++;

					swiper.appendSlide(`<div
							data-restaruant-id="${dish.item.restaurantId}"
							data-dish-id="${dish.item.id}"
							data-dish-name="${name}"
							data-dish-location="${dish.item.restaurantName}"
							data-dish-description="${description}"
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
									I'm interested
									<i class="icon f7-icons if-not-md">heart</i>
									<i class="icon material-icons if-md">heart</i>
								</div>
							</div>
							<h3>${name}</h3>
							<p>${description}</p>
							</div>
							<div class="card-footer">at ${dish.item.restaurantName}</p>
							</div>
						</div>`);
					}
  			}

  			if (slideCount > 0) {
  				title.textContent += ` (${slideCount})`;
  				sliderMarkup.appendChild(title);
  				sliderMarkup.appendChild(swiper.el);
  			}
			});
		//});

	return sliderMarkup;
}

export default await buildSlidersByCategory;
