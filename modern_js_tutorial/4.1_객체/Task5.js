function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] !== 'number') break;
		obj[key] *= 2;
	}
}
