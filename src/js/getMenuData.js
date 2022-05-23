async function getMenuData(url) {
	try {
		const response = await fetch(url);
		const dishes = await response.json();
		return dishes;
	} catch (err) {
		console.log('Error: ', err.message);
	}
}

export default getMenuData;
