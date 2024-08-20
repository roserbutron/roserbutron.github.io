import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

import { ReactElement, useState } from "react";

interface HeaderProps {
	callbackAction: (action: string) => void;
}

const Header = ({ callbackAction }: HeaderProps): ReactElement => {
	const navigate = useNavigate();
	const [pageActive, setPageActive] = useState<string>("/");

	const handleLogoClick = () => {
		callbackAction("clear");
		setPageActive("/");
		navigate("/");
	};
	return (
		<div className="block md:flex h-1/5 w-full mb-8 max-w-[1420px] m-auto">
			<div className="sm:max-w-[500px] h-auto">
				<img
					className="w-full h-full md:pt-2 md:pl-8 object-contain px-6 pt-4"
					src={require("../../assets/logo.png")}
					alt="logo"
					onClick={handleLogoClick}
				/>
			</div>
			<Navbar
				callbackAction={callbackAction}
				pageActive={pageActive}
				setPageActive={setPageActive}
			/>
		</div>
	);
};

export default Header;
