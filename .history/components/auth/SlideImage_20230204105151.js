import React, { useEffect, useRef, useState } from 'react';
import styles from './slideimage.module.css';

const images = [
	'https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg',
	'https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg',
	'https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg',
];
const delay = 2500;

function SlideImage() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === images?.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);
	return (
		<div className="overflow-hidden w-full mx-auto ">
			<div
				className=" transition-all ease-linear duration-1000 flex"
				style={{
					transform: `translate3d(${-index * 100}%, 0, 0)`,
				}}
			>
				{images &&
					images.map((image, index) => (
						<img
							// crossOrigin="anonymous"
							className=" relative h-full min-h-screen object-cover "
							// style={{ backgroundColor }}
							src={image}
						></img>
					))}
			</div>

			<div className={`${styles.slideshowDots} absolute bottom-[10px]`}>
				{images &&
					images.map((_, idx) => (
						<div
							key={idx}
							className={`${styles.slideshowDot} ${
								index === idx ? styles.active : ''
							}`}
							onClick={() => {
								setIndex(idx);
							}}
						></div>
					))}
			</div>
		</div>
	);
}

export default SlideImage;
