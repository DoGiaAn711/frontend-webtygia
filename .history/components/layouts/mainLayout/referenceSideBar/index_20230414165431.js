import React from 'react';
import Coin from './Coin';
import Stock from './Stock';
import CategoryFollowing from './CategoryFollowing';
import Petrol from './Petrol';
import Gold from './Gold';

function ReferenceSideBar() {
	return (
		<div className="hidden lg:block min-w-[31.8rem] ">
			{/* danh muc theo doi xuat hien khi dang nhap */}
			{/* <CategoryFollowing /> */}
			<Coin />
			<Stock />
			<Petrol />
			<Gold />
		</div>
	);
}

export default ReferenceSideBar;
