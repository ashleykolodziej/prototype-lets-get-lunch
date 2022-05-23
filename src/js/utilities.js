function getObjectKeyByKeyValuePair(array, key, value) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i][key] == value) {
			return i;
		}
	}
}

export default getObjectKeyByKeyValuePair;
