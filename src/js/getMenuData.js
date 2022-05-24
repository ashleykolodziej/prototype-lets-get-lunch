function getMenuData(url) {
	try {
		const response = fetch(url).then(response => response.json());
		return response;
	} catch (err) {
		console.log('Error: ', err.message);
	}
}

export default getMenuData;
