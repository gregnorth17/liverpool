import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";

const Home = ({lfc, setLfc, lfcm, setLfcm}) => {
	
	const handleChangeLfc = () => {
		setLfc(true)
	}

	const handleChangeLfcm = () => {
		setLfcm(true)
	}

	return (
		<div className="home">
			
			<div className="home-lfc">
				{/* <Navbar lfc={lfc}/> */}
				<div className="home-container">
					<h1 className="home-title"><span className="home-title-lfc">Liverp</span><span className="home-title-lfcm">ool FC</span><br></br> Two Clubs, One Love</h1>
					<p className="home-text">From the Mersey to the banks of the Río de la Plata</p>
					<button onClick={handleChangeLfc} className="btn btn-lfc">The Reds</button>
					<button onClick={handleChangeLfcm} className="btn btn-lfcm">Negriazules</button>
				</div>
			</div>
			<div className="home-lfcm">
				{/* <Navbar/> */}
				
			</div>
		</div>
	)
}

export default Home;