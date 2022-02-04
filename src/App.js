import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutCancer from "./components/pages/AboutCancer";
import CancerTypes from "./components/pages/CancerTypes";
import Hospitals from "./components/pages/Hospitals";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<AboutCancer />} />
						<Route path="/cancertypes" element={<CancerTypes />} />
						<Route path="/hospitals" element={<Hospitals />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
