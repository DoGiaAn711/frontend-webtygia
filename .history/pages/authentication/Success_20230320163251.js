import React, { useEffect } from 'react';

function Success() {
	useEffect(() => {
		setTimeout(() => {
			window.close();
		}, 1000);
	}, []);
	return <div>Đăng nhập thành công</div>;
}

export default Success;
