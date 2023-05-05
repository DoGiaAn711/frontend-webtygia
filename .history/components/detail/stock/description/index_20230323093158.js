import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import WebIcon from '@mui/icons-material/Web';

function StockDescription({ description }) {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				Thông tin về {description?.symbol}
			</h2>
			<p className="text-[1.8rem] mt-[1rem]  text-black-text">
				{description?.description}
			</p>
			<h3 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				Thông tin liên lạc
			</h3>
			<div className="  text-[1.8rem] text-black-text font-medium mt-[1.5rem]">
				<div className="flex justify-between px-[1rem] my-[1rem]">
					<div className="min-w-[15rem]">
						<LocationOnIcon className="mr-[1rem]" />
						Địa chỉ
					</div>
					<div className="text-end">{description?.address}</div>
				</div>
				<div className="flex justify-between px-[1rem] my-[1rem] ">
					<div>
						<EmailIcon className="mr-[1rem]" />
						Email
					</div>
					<div>{description?.email}</div>
				</div>
				<div className="flex justify-between px-[1rem] my-[1rem]">
					<div>
						<PhoneIcon className="mr-[1rem]" />
						Điện thoại
					</div>
					<div>{description?.phone}</div>
				</div>
				<div className="flex justify-between px-[1rem] my-[1rem]">
					<div>
						<FaxIcon className="mr-[1rem]" />
						Fax
					</div>
					<div>{description?.fax}</div>
				</div>
				<div className="flex justify-between px-[1rem] my-[1rem]">
					<div>
						<WebIcon className="mr-[1rem]" />
						Website
					</div>
					<div>{description?.website}</div>
				</div>
			</div>
		</div>
	);
}

export default StockDescription;
