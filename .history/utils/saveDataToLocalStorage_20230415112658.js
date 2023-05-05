export function SaveDataToLocalStorage(key, value) {
	if (
		JSON.parse(localStorage.getItem(`${key}`)) &&
		JSON.parse(localStorage.getItem(`${key}`)).length < 5
	) {
		console.log(JSON.parse(localStorage.getItem(`${key}`)).length);
		var a = [];
		// Parse the serialized data back into an aray of objects
		a = JSON.parse(localStorage.getItem(`${key}`)) || [];
		// Push the new data (whether it be an object or anything else) onto the array
		a.push(value);
		// Re-serialize the array back into a string and store it in localStorage
		localStorage.setItem(`${key}`, JSON.stringify(a));
	} else {
		alert('Số lượng theo dõi tối đa khi không đăng nhập không quá 30');
		window.location.reload();
	}
}

export function DeleteDataToLocalStorage(key, value) {
	var a = [];
	// Parse the serialized data back into an aray of objects
	a = JSON.parse(localStorage.getItem(`${key}`)) || [];
	// Remove item in array
	const index = a.indexOf(value);
	if (index > -1) {
		a.splice(index, 1);
	}
	// Re-serialize the array back into a string and store it in localStorage
	localStorage.setItem(`${key}`, JSON.stringify(a));
}
