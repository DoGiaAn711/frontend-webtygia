import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function NameHeader({
	name,
	image,
	timeUpdate,
	saveGold,
	deleteGold,
	user,
	data,
}) {
	//convert to dd:mm:yy
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}
	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}
	const dateDay = formatDate(new Date(timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex h-[10rem] items-center">
			<img src={image} className="w-auto h-[6rem]" />
			<div className=" ml-[1rem]">
				<h1 className="text-[2.4rem] sm:text-[2.8rem] font-semibold capitalize text-back-text w-fit">
					{name}
					<p className=" text-[1.4rem] text-grey-text">
						cập nhật lúc {dateDay} {dateHour}{' '}
						{user && (
							<span className="ml-[1rem]">
								{user?.followGolds?.includes(data?._id) ? (
									<BookmarkIcon
										sx={{ fontSize: '2.4rem' }}
										onClick={() => deleteGold(data?._id)}
										className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
									/>
								) : (
									<BookmarkBorderIcon
										sx={{ fontSize: '2.4rem' }}
										onClick={() => saveGold(data?._id)}
										className="text-[2.4rem] cursor-pointer hover:opacity-80"
									/>
								)}
							</span>
						)}
					</p>
				</h1>
			</div>
		</div>
	);
}

export default NameHeader;
