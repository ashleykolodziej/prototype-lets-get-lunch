import getObjectKeyByKeyValuePair from './utilities.js';
import locations from './data/locations';
import getMenuData from './getMenuData';

const dishesByCategory = [];

function getAllDishesByLocation() {
	locations.map((location) => {
		getMenuData(location.location.pickup_menu_url).then((data) => {
			data.menu.categories.map((category) => {

				// Add an association point between items and restaurants
				category.category.items.map((item) => {
					item.item.restaurantName = location.location.name;
					item.item.restaurantId = location.location.id;
				})

				const categoryKey = getObjectKeyByKeyValuePair(dishesByCategory, 'name', category.category.name);

				// TODO: This will combine _exact_ same categories, but I should find a way to combine
				// like categories as well. Example: Beverages and Drinks should probably be the same
				// category in this map.
				// Perhaps mapping categories by cuisine or item type could be good.

				if ( undefined === categoryKey ) {
					// Add the new category to the list
					dishesByCategory.push(category.category);
				} else {
					// Combine this restaurant's dishes into this category
					dishesByCategory[categoryKey].items = [...dishesByCategory[categoryKey].items, ...category.category.items]
				}
			});
			console.log(dishesByCategory)
		});
	})
}

export default getAllDishesByLocation;
