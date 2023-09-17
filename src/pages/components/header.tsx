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
		<div className="flex h-1/5 w-full mb-8 max-w-[1420px] m-auto">
			<div className="sm:max-w-[500px] h-auto">
				<img
					className="w-full h-full pt-2 pl-8 object-contain"
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
