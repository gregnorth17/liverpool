import {useState, useEffect} from "react";
import Home from "./components/home/Home.js";
import Fixtures from "./components/fixtures/Fixtures.js";
import './App.css';
import Dashboard from "./components/dashboard/Dashboard.js";


function App() {
	const [lfc, setLfc] = useState(true);
	// const [lfcm, setLfcm] = useState(null);

  return (
    <div className="App">
			<>
				<Dashboard lfc={lfc}
									// lfcm={lfcm}
				/>
			</>
			{/* {lfc || lfcm ? 
			
			:
			
			<>
				<Home lfc={lfc}  
							lfcm={lfcm} 
							setLfc={setLfc}
							setLfcm={setLfcm}
				/>
			</>}
			<SharedLayout /> */}
    </div>
  );
}

export default App;
