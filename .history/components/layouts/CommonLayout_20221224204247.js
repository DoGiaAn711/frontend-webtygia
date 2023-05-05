function CommonLayout({ children }) {
	return (
		<div className="container max-w-[1440px] flex justify-between">
			<div className="hidden lg:block w-[207px]">
				<div>Side bar left</div>
			</div>
			<div className=" flex-1">
				<header>Header</header>
				<div className="flex">
					<div>{children}</div>
					<div className="hidden md:block">
						<div>side bar right</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommonLayout;
