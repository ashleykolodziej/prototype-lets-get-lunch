import store from './store.js';
import getObjectKeyByKeyValuePair from './utilities.js';

function favoriteIconClick(planId, menuId, e) {
	const $this = e.target;
	const $delegated = $this.closest('.swiper-slide');

	if ( $delegated ) {
		const $icon = $delegated.querySelector('.icon');

		if ( null === $icon ) { return }

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
			const testy = store.state.plans[planId].restaurants[menuId];

			let theRestaurantKey = getObjectKeyByKeyValuePair(store.state.plans[planId].restaurants, 'id', menuId);
			console.log(theRestaurantKey);

			if ( undefined === theRestaurantKey ) {
				const theNewRestaurant = [{
					id: `${menuId}`,
					name: `${$delegated.dataset.dishLocation}`,
					img: 'tacoPartyImg',
					votes: [
						{
							userId: 2,
							img: 'https://randomuser.me/api/portraits/women/80.jpg',
							count: 5
						}]
				}]

				store.state.plans[planId].restaurants = [...store.state.plans[planId].restaurants, theNewRestaurant]
				theRestaurantKey = store.state.plans[planId].restaurants.length - 1;
			}

			store.state.favorites = [...store.state.favorites, theFaved];

			console.log(theRestaurantKey)

			console.log(store.state.plans[planId].restaurants[theRestaurantKey]);

			let userAlreadyVoted;

			if ( undefined !== store.state.plans[planId].restaurants[theRestaurantKey].votes ) {
				userAlreadyVoted = getObjectKeyByKeyValuePair(store.state.plans[planId].restaurants[theRestaurantKey].votes, 'id', '3');
			}

			console.log('alreadyFaved', userAlreadyVoted)

			if ( undefined === userAlreadyVoted ) {
				const theVoted = [{
					userId: 3,
					img: '#',
					count: 1
				}]

				if ( undefined === store.state.plans[planId].restaurants[theRestaurantKey].votes) {
					store.state.plans[planId].restaurants[theRestaurantKey].votes = [...theVoted];
				} else {
					store.state.plans[planId].restaurants[theRestaurantKey].votes = [...store.state.plans[planId].restaurants[theRestaurantKey].votes, ...theVoted];
				}

				console.log(store.state.plans)
			}
		}
	}
}

function addFavoriteListeners(planId, menuId) {
	document.body.addEventListener( 'click', favoriteIconClick.bind(this, planId, menuId) );
}

export default addFavoriteListeners;
