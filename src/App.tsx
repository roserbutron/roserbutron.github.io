import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
			<BrowserRouter>
				<Header callbackAction={callbackAction} />
				<Routes>
					<Route
						path="/roserillustration/"
						element={<HomePage action={currentAction} />}
					/>
					<Route
						path="/roserillustration/about"
						element={<AboutPage />}
					/>
					<Route
						path="/roserillustration/contact"
						element={<ContactPage />}
					/>
					<Route
						path="*"
						element={<HomePage action={currentAction} />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
