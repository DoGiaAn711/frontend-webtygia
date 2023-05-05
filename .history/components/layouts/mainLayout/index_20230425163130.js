import { useEffect, useState } from 'react';
// import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';
import dynamic from 'next/dynamic';
import NavigationHeader from './navigationHeader.js';
// const Header = dynamic(() => import('./header/index'), {
// 	ssr: false,
// });
import Header from './header/index';
import Footer from './footer/Footer';
// import BottomNavigation from './bottomNavigation';
const BottomNavigation = dynamic(() => import('./bottomNavigation'), {
	ssr: false,
});

function MainLayout({ children }) {
	const [marginTop, setMarginTop] = useState();
	useEffect(() => {
		const headerElement = document.getElementById('header');
		window.onresize = function () {
			if (headerElement?.offsetHeight > 0) {
				setMarginTop(headerElement.offsetHeight);
				// console.log(headerElement.offsetHeight);
			}
		};
	}, []);
	return (
		<div>
			<BottomNavigation />
			<div className="relative">
				<Header />
				<NavigationHeader />
				<div className="container mx-auto max-w-[144rem]">
					<div
						id="main-content"
						className="flex justify-between max-w-[144rem] mx-auto"
					>
						{/* <MenuSideBar /> */}
						{/* max-w-[89.5rem] */}
						{/* sm:mt-[16.3rem] */}
						<div
							className={`w-full  h-full lg:mr-[2rem] mx-auto pb-[6rem]`}
						>
							{children}
						</div>
						<ReferenceSideBar />
					</div>
				</div>
				{/* <BottomNavigation /> */}
				<Footer />
			</div>
		</div>
	);
}

export default MainLayout;
