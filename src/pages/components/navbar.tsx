import { useState } from "react";
import { Link } from "react-router-dom";

import { FC } from "react";

interface NavbarProps {
	callbackAction: (action: string) => void;
}

const Navbar: FC<NavbarProps> = ({ callbackAction }) => {
	const [pageActive, setPageActive] = useState<string>("/roserillustration/");

	return (
		<div className="h-initial w-full justify-end flex">
			<div className="h-full w-full justify-end items-center sm:flex space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:pr-6 text-xl pt-5 sm:pt-0">
				<div>
					<Link
						className={`${
							pageActive === "/roserillustration/"
								? "text-[#FF3F8A]"
								: ""
						} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
						to="/roserillustration/"
						onClick={() => {
							setPageActive("/roserillustration/");
							callbackAction("clear");
						}}
					>
						Works
					</Link>
				</div>

				<div>
					<Link
						className={`${
							pageActive === "/roserillustration/about/"
								? "text-[#FF3F8A]"
								: ""
						} hover:text-[#FF3F8A]  px-3 py-2 transition duration-200 ease-in-out`}
						to="/roserillustration/about/"
						onClick={() => {
							setPageActive("/roserillustration/about/");
						}}
					>
						About
					</Link>
				</div>
				<div>
					<Link
						className={`${
							pageActive === "/roserillustration/contact/"
								? "text-[#FF3F8A]"
								: ""
						} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
						to="/roserillustration/contact/"
						onClick={() => {
							setPageActive("/roserillustration/contact/");
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
