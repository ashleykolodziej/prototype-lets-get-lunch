const veggieSafe = [
	'beyond burger',
	'impossible burger',
	'vegetarian'
]

const simpleVegCheck = [
	'chicken',
	'burger',
	'bacon',
	'beef',
	'lamb',
	'bone-in',
	'pork',
	'wings',
	'prosciutto',
	'tuna',
	'lobster',
	'oyster',
	'fish',
	'meat',
	'pepperoni',
	'poke',
	'salmon',
	'steak'
]

const veganSafe = [
	'vegan'
]

const simpleVeganCheck = [
	'eggs',
	'egg',
	'omelet',
	'bene',
	'cheese',
	'yogurt',
	'whip',
	'pesto',
	'mayo',
	'feta',
	'chocolate',
	'queso',
	'cream',
	'tzatziki',
	'honey',
	'mozzarella'
]

function checkVeg(data) {
	if ( veggieSafe.some(r=> data.toLowerCase().indexOf(r) >= 0) ) {
		return true;
	}

	return !simpleVegCheck.some(r=> data.toLowerCase().indexOf(r) >= 0);
}

function checkVegan(data) {
	if ( veganSafe.some(r=> data.toLowerCase().indexOf(r) >= 0) ) {
		return true;
	}

	return !simpleVeganCheck.some(r=> data.toLowerCase().indexOf(r) >= 0);
}

export { checkVeg, checkVegan };
