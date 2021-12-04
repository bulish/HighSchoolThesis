// react hooks
import { useState } from 'react';

// styles
import './App.css';
import './App.scss';

// components
import HomePage from './components/homePage';
import SettingBar from './components/settingBar';
import Game from './components/game';
import End from './components/end';

function App() {
	const [menuActive, setMenuActive] = useState(false);
	const [menuBtnHover, setMenuBtnHover] = useState(false);
	const [firstBox, setFirstBox] = useState(true); // from right to center
	const [secondBox, setSecondBox] = useState(false); // from right to center
	const [thirdBox, setThirdBox] = useState(false); // from right to center
	const [firstBoxRight, setFirstBoxRight] = useState(false); // from center to left
	const [secondBoxRight, setSecondBoxRight] = useState(false); // from center to left
	const [secondBoxLeft, setSecondBoxLeft] = useState(false); // from center to left
	const [backToStart, setBackToStart] = useState(false); // third from center to right, first from left to center

	// numbers
	const [currentNumber, setCurrentNumber] = useState(0);
	const [points, setPoints] = useState(0);
	
	// document.body.onbeforeunload = function () {
	// 	return 'Opravdu';
	// };

	// categories
	const [cat1, setCat1] = useState(true);
	const [cat2, setCat2] = useState(true);
	const [cat3, setCat3] = useState(true);
	const [cat4, setCat4] = useState(true);
	const [cat5, setCat5] = useState(true);
	const [cat6, setCat6] = useState(true);
	const [cat7, setCat7] = useState(true);
	const [cat8, setCat8] = useState(true);
	const [cat9, setCat9] = useState(true);
	const [cat10, setCat10] = useState(true);
	const [cat11, setCat11] = useState(true);
	const [cat12, setCat12] = useState(true);
	
	return (
		<div>
			<SettingBar
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				setCat1={setCat1}
				setCat2={setCat2}
				setCat3={setCat3}
				setCat4={setCat4}
				setCat5={setCat5}
				setCat6={setCat6}
				setCat7={setCat7}
				setCat8={setCat8}
				setCat9={setCat9}
				setCat10={setCat10}
				setCat11={setCat11}
				setCat12={setCat12}
				cat1={cat1}
				cat2={cat2}
				cat3={cat3}
				cat4={cat4}
				cat5={cat5}
				cat6={cat6}
				cat7={cat7}
				cat8={cat8}
				cat9={cat9}
				cat10={cat10}
				cat11={cat11}
				cat12={cat12}
			/>
			<HomePage
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				menuBtnHover={menuBtnHover}
				setMenuBtnHover={setMenuBtnHover}
				firstBox={firstBox}
				setFirstBox={setFirstBox}
				secondBox={secondBox}
				setSecondBox={setSecondBox}
				setSecondBoxRight={setSecondBoxRight}
				setFirstBoxRight={setFirstBoxRight}
				firstBoxRight={firstBoxRight}
				backToStart={backToStart}
				setThirdBox={setThirdBox}
				setSecondBox={setSecondBox}
				setFirstBoxRight={setFirstBoxRight}
				setBackToStart={setBackToStart}
			/>
			<Game
				currentNumber={currentNumber}
				points={points}
				setPoints={setPoints}
				secondBox={secondBox}
				setSecondBox={setSecondBox}
				secondBoxRight={secondBoxRight}
				setSecondBoxRight={setSecondBoxRight}
				setFirstBoxRight={setFirstBoxRight}
				setSecondBoxLeft={setSecondBoxLeft}
				thirdBox={thirdBox}
				setThirdBox={setThirdBox}
				cat1={cat1}
				cat2={cat2}
				cat3={cat3}
				cat4={cat4}
				cat5={cat5}
				cat6={cat6}
				cat7={cat7}
				cat8={cat8}
				cat9={cat9}
				cat10={cat10}
				cat11={cat11}
				cat12={cat12}
			/>
			<End
				points={points}
				thirdBox={thirdBox}
				backToStart={backToStart}
				setBackToStart={setBackToStart}
			/>
		</div>
	);
}

export default App;
