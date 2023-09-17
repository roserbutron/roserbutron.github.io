import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FC } from "react";

interface NavbarProps {
	callbackAction: (action: string) => void;
	pageActive: string;
	setPageActive: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: FC<NavbarProps> = ({
	callbackAction,
	pageActive,
	setPageActive,
}) => {
	useEffect(() => {
		const current_path = window.location.pathname;
		setPageActive(current_path);
	}, []);

	return (
		<div className="h-initial w-full justify-end flex">
			<div className="h-full w-full justify-end items-center sm:flex space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:pr-6 text-xl pt-5 sm:pt-0">
				<div>
					<Link
						className={`${
							pageActive === "/" ? "text-[#FF3F8A]" : ""
						} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
						to="/"
						onClick={() => {
							setPageActive("/");
							callbackAction("clear");
						}}
					>
						Works
					</Link>
				</div>

				<div>
					<Link
						className={`${
							pageActive === "/about/" ? "text-[#FF3F8A]" : ""
						} hover:text-[#FF3F8A]  px-3 py-2 transition duration-200 ease-in-out`}
						to="/about/"
						onClick={() => {
							setPageActive("/about/");
						}}
					>
						About
					</Link>
				</div>
				<div>
					<Link
						className={`${
							pageActive === "/contact/" ? "text-[#FF3F8A]" : ""
						} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
						to="/contact/"
						onClick={() => {
							setPageActive("/contact/");
						}}
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
