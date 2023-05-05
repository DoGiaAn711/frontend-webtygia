import React, { useEffect, useRef, useState } from 'react';
import styles from './slideimage.module.css';

const images = [
	'https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75',
	'https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75',
	'https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75',
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
		<div className={`${styles.slideshow}`}>
			<div
				className={`${styles.slideshowSlider}`}
				style={{
					transform: `translate3d(${-index * 100}%, 0, 0)`,
				}}
			>
				{images &&
					images.map((image, index) => (
						<img
							// crossOrigin="anonymous"
							className="h-full min-h-screen object-cover"
							// style={{ backgroundColor }}
							src={image}
						></img>
					))}
			</div>

			<div className={`${styles.slideshowDots}`}>
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
