function CommonLayout({ children }) {
	return (
		<div className="lg:flex ">
			<div className="hidden lg:block">
				<div>Side bar left</div>
			</div>
			<div>
				<header>Header</header>
				<div>
					<div>{children}</div>
					<div>
						<div>side bar right</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommonLayout;
