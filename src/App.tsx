import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import Footer from "./pages/components/footer";
import Header from "./pages/components/header";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

const App = () => {
	const [currentAction, setCurrentAction] = useState<string>("");

	const callbackAction = (action: string) => {
		if (action === "clear") {
			setCurrentAction("clear");
		}
		setTimeout(() => {
			setCurrentAction("");
		}, 100);
	};

	return (
		<div className="bg-[#F8F6F1] w-full h-full">
			<Header callbackAction={callbackAction} />
			<Routes>
				<Route path="/" element={<HomePage action={currentAction} />} />
				<Route path="/about/" element={<AboutPage />} />
				<Route path="/contact/" element={<ContactPage />} />
				<Route path="*" element={<HomePage action={currentAction} />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
