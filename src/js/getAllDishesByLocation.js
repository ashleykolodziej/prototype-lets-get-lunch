import getObjectKeyByKeyValuePair from './utilities.js';
import locations from './data/locations';
import getMenuData from './getMenuData';

async function getAllDishesByLocation( locationArr = locations, byCategory = false ) {
	let dishesArray = [];

	for (let location of locationArr) {
		await getMenuData(location.location.pickup_menu_url).then(data => {
			data.menu.categories.map((category) => {
				category.category.restaurantId = location.location.id;
				category.category.restaurantName = location.location.name;
				// Add an association point between items and restaurants
				category.category.items.map((item) => {
					item.item.categoryName = category.category.name;
					item.item.restaurantName = location.location.name;
					item.item.restaurantId = location.location.id;
				});

				let matchingKey;

				if ( byCategory ) {
					// TODO: This will match _exact_ same categories, but I should find a way to combine
					// like categories as well. Example: Beverages and Drinks should probably be the same
					// category in this map.
					// Perhaps mapping categories by cuisine or item type could be good.
					matchingKey = getObjectKeyByKeyValuePair(dishesArray, 'name', category.category.name);
				} else {
					matchingKey = getObjectKeyByKeyValuePair(dishesArray, 'restaurantId', category.category.restaurantId);
				}

				if ( undefined === matchingKey ) {
					// Add the new category to the list
					dishesArray.push(category.category);
				} else {
					// Combine this restaurant's dishes into this category
					dishesArray[matchingKey].items = [...dishesArray[matchingKey].items, ...category.category.items]
				}
			});
		});
	}

	return dishesArray;
}

export default getAllDishesByLocation;
