const formatTimestampToDayMonthYear = (timestamp) => {
	const date = new Date(timestamp); // create a new Date object from the timestamp

	const day = date.getDate().toString().padStart(2, '0'); // get the day and pad with leading zero if necessary
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // get the month (months are zero-indexed) and pad with leading zero if necessary
	const year = date.getFullYear().toString(); // get the full year

	const formattedDate = `${day}/${month}/${year}`; // concatenate the day, month, and year with forward slashes

	return formattedDate;
};

module.exports = { formatTimestampToDayMonthYear };
