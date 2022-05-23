function getKeyByValue(array, value) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i].id == value) {
			return i;
		}
	}
}

export default getKeyByValue;
