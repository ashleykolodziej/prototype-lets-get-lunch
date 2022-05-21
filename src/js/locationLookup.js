import locations from './data/locations';

function locationLookup(locationId) {
	const theLocation = locations.filter(obj => {
	  return obj.location.id === locationId
	});

	return theLocation;
}

export default locationLookup;
