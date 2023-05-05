function CommonLayout({ children }) {
	return (
		<div className="container max-w-[65rem] flex justify-between">
			<div className="hidden lg:block w-52 bg-slate-500">
				<div>Side bar left</div>
			</div>
			<div className=" flex-1">
				<header className=" bg-slate-500">Header</header>
				<div className="flex justify-between">
					<div className=" bg-white w-full">{children}</div>
					<div className="hidden md:block w-80 bg-slate-600">
						<div>side bar right</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommonLayout;
