import getKeyByValue from './utilities.js';
import locations from './data/locations';
import getMenuData from './getMenuData';

const dishesByCategory = [];

function getAllDishesByLocation() {
	locations.map((location) => {
		//console.log(location.location)
		//console.log(location.location.name)
		//console.log(location.location.pickup_menu_url)
		getMenuData(location.location.pickup_menu_url).then((data) => {
			data.menu.categories.map((category) => {
				console.log(category.category);
				console.log(category.category.name);
				console.log(dishesByCategory)
			})
		});
	})
}

export default getAllDishesByLocation;
