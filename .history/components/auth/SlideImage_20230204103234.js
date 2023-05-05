import React from 'react';

function SlideImage() {
	return (
		<div className={`${styles.slideshow}`}>
			<div
				className={`${styles.slideshowSlider}`}
				style={{
					transform: `translate3d(${-index * 100}%, 0, 0)`,
				}}
			>
				{latestList &&
					latestList.map((news, index) => (
						<Link
							href={`${path}/${news.timeUpdate}`}
							key={news.timeUpdate}
						>
							<img
								// crossOrigin="anonymous"
								className={`${styles.slide} object-cover`}
								// style={{ backgroundColor }}
								src={news?.image}
							></img>
						</Link>
					))}
			</div>

			<div className={`${styles.slideshowDots}`}>
				{latestList &&
					latestList.map((_, idx) => (
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
