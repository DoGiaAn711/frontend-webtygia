// const config = {
// 	headers: {
// 		'Content-type': 'application/json',
// 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
// 	},
// };

const config = (token) => {
	return {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNhNjIzY2I2MjhmNTgwOGY1Njc5ZWEiLCJpYXQiOjE2ODIwNzA4NTksImV4cCI6MTcxMzYyODQ1OX0.P4fAEQ4NfltAA68l3lenRKL2sx8AQIUpz70bbHDPrRk',
		},
	};
};

export default config;
