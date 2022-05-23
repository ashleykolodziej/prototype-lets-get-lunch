import locations from './data/locations';
//import locationLookup from 'locationLookup';

function getAllDishesByLocation() {
	locations.map((location) => {
		console.log(location.location)
		console.log(location.location.name)
		console.log(location.location.pickup_menu_url)
	})
}

export default getAllDishesByLocation;
