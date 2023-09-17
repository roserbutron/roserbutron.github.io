import Navbar from "./navbar";

import { ReactElement } from "react";

interface HeaderProps {
	callbackAction: (action: string) => void;
}

const Header = ({ callbackAction }: HeaderProps): ReactElement => {
	return (
		<div className="flex h-1/5 w-full mb-8 max-w-[1420px] m-auto">
			<div className="sm:max-w-[500px] h-auto">
				<img
					className="w-full h-full pt-2 pl-8 object-contain"
					src={require("../../assets/logo.png")}
					alt="logo"
				/>
			</div>
			<Navbar callbackAction={callbackAction} />
		</div>
	);
};

export default Header;
