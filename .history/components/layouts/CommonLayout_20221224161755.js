function CommonLayout({ children }) {
	return (
		<div>
			<div>
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
