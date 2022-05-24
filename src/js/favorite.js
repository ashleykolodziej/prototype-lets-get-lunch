import store from './store.js';

function favoriteIconClick(e) {
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
			store.state.favorites = [...store.state.favorites, theFaved];
		}
	}
}

function addFavoriteListeners() {
	document.body.addEventListener( 'click', favoriteIconClick );
}

export default addFavoriteListeners;
