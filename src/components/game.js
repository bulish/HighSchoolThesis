// react hooks
import { useEffect, useRef, useState } from 'react';

// images
import arrow from '../assets/images/arrowBack.png';
import monster from '../assets/images/monster.png';

// gsap
import gsap from 'gsap';

// priklady
import pocitaniDoDeseti from '../priklady/pocitaniDoDeseti';
import pocitaniDoDvaceti from '../priklady/pocitaniDoDvaceti';
import pocitaniDoSta from '../priklady/pocitaniDoSta';
import nasobilkaDvou from '../priklady/nasobilkaDvou';
import nasobilkaTri from '../priklady/nasobilkaTri';
import nasobilkaCtyr from '../priklady/nasobilkaCtyr';
import nasobilkaPeti from '../priklady/nasobilkaPeti';
import nasobilkaSesti from '../priklady/nasobilkaSesti';
import nasobilkaSedmi from '../priklady/nasobilkaSedmi';
import nasobilkaOsmi from '../priklady/nasobilkaOsmi';
import nasobilkaDeviti from '../priklady/nasobilkaDeviti';
import nasobilkaDesiti from '../priklady/nasobilkaDesiti';

const Game = props => {
	const secondBoxRef = useRef();
	const alert = useRef();
	const [questionAmount, setQuestionAmount] = useState(0);
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState({});
	const [index, setIndex] = useState(0);
	let correctAnswer = false;
	let incorrectAnswer = false;
	const questionContainer = useRef();

	useEffect(() => {
		if (props.secondBox) {
			setQuestionAmount(0);
			setIndex(0);
			props.setPoints(0);
			let tl = gsap.timeline();
			tl.fromTo(
				secondBoxRef.current,
				0.75,
				{
					opacity: 0,
					duration: 0.75,
					display: 'none',
					scale: 0.95,
				},
				{
					display: 'flex',
					duration: 0.75,
					onComplete: function () {
						gsap.to(secondBoxRef.current, {
							opacity: 1,
							duration: 0.75,
							scale: 1,
						});
					},
				},
				'+=.5',
			);
		}
	}, [props.secondBox]);

	useEffect(() => {
		if (props.secondBoxRight) {
			let tl = gsap.timeline();
			tl.fromTo(
				secondBoxRef.current,
				{
					display: 'flex',
					scale: 1,
					opacity: 1,
				},
				{
					opacity: 0,
					scale: 0.95,
					duration: 0.75,
					onComplete: function () {
						gsap.to(secondBoxRef.current, {
							display: 'none',
						});
					},
				},
			);
		}
	}, [props.secondBoxRight]);

	// categories
	let categoriesArray = [
		props.cat1,
		props.cat2,
		props.cat3,
		props.cat4,
		props.cat5,
		props.cat6,
		props.cat7,
		props.cat8,
		props.cat9,
		props.cat10,
		props.cat11,
		props.cat12,
	];

	const [cat1Examples, setCat1Examples] = useState(pocitaniDoDeseti());
	const [cat2Examples, setCat2Examples] = useState(pocitaniDoDvaceti());
	const [cat3Examples, setCat3Examples] = useState(pocitaniDoSta());
	const [cat4Examples, setCat4Examples] = useState(nasobilkaDvou());
	const [cat5Examples, setCat5Examples] = useState(nasobilkaTri());
	const [cat6Examples, setCat6Examples] = useState(nasobilkaCtyr());
	const [cat7Examples, setCat7Examples] = useState(nasobilkaPeti());
	const [cat8Examples, setCat8Examples] = useState(nasobilkaSesti());
	const [cat9Examples, setCat9Examples] = useState(nasobilkaSedmi());
	const [cat10Examples, setCat10Examples] = useState(nasobilkaOsmi());
	const [cat11Examples, setCat11Examples] = useState(nasobilkaDeviti());
	const [cat12Examples, setCat12Examples] = useState(nasobilkaDesiti());

	let examples = [
		cat1Examples,
		cat2Examples,
		cat3Examples,
		cat4Examples,
		cat5Examples,
		cat6Examples,
		cat7Examples,
		cat8Examples,
		cat9Examples,
		cat10Examples,
		cat11Examples,
		cat12Examples,
	];

	useEffect(() => {
		setQuestions([]);
		setQuestionAmount(
			Math.ceil(20 / categoriesArray.filter(item => item).length),
		);
	}, [props.secondBox]);

	useEffect(() => {
		for (let i = 0; i < 12; i++) {
			if (categoriesArray[i] === true) {
				for (let j = 0; j < questionAmount; j++) {
					if (questions.length < 20) {
						setQuestions(questions => [
							...questions,
							examples[i][Math.ceil(Math.random() * 20) - 1],
						]);
					}
				}
			}
		}
	}, [questionAmount, questions]);

	useEffect(() => {
		if (questions.length > 20) {
			setQuestions(questions.slice(0, 20));
		}
	}, [questions]);

	const [priklad, setPriklad] = useState('');
	useEffect(() => {
		setCurrentQuestion(questions[index]);
		if (currentQuestion) {
			setPriklad(currentQuestion['priklad']);
		}
	}, [questions, index]);


	const refsLi = useRef([]);
	const addToRefsLi = el => {
		if (el && !refsLi.current.includes(el)) {
			refsLi.current.push(el);
		}
	};

	const showTheResult = e => {
		if (currentQuestion) {
			let result = currentQuestion['vysledek'];
			if (result === e.target.innerHTML) {
				correctAnswer = true;
				props.setPoints(props.points + 1);
				gsap.to(e.target, {
					background: '#2F7536',
					duration: 0.2,
				});
			} else {
				incorrectAnswer = false;
				gsap.to(e.target, {
					background: '#DA5257',
					duration: 0.2,
				});
				refsLi.current.forEach(element => {
					if (element.innerHTML === currentQuestion['vysledek']) {
						gsap.to(element, {
							background: '#2F7536',
							duration: 0.2,
						});
					}
				});
			}
			if (index < 19) {
				let tl = gsap.timeline();
				tl.to(questionContainer.current, {
					scale: 0.95,
					opacity: 0,
					delay: 1,
				});
				tl.to(e.target, {
					background: '#2069AC',
					onComplete: function () {
						setIndex(index + 1);
						refsLi.current.forEach(element => {
							if (element.innerHTML === currentQuestion['vysledek']) {
								gsap.set(element, {
									background: '#2069AC',
									duration: 0.001,
								});
							}
						});
					},
				});
				tl.to(questionContainer.current, {
					scale: 1,
					opacity: 1,
				});
			} else {
				props.setSecondBoxLeft(true);
				props.setThirdBox(true);
				let tl = gsap.timeline();
				tl.fromTo(
					secondBoxRef.current,
					0.75,
					{
						opacity: 1,
						duration: 0.75,
						display: 'flex',
						scale: 1,
					},
					{
						opacity: 0,
						duration: 0.75,
						scale: 0.95,
						onComplete: function () {
							gsap.to(secondBoxRef.current, {
								display: 'none',
							});
						},
					},
					'+=.5',
				);
			}
		}
	};

	const displayAlert = () => {
		gsap.fromTo(
			alert.current,
			{
				display: 'none',
				x: '-130%',
				duration: 1,
				ease: 'Power4.easeOut',
			},
			{
				display: 'block',
				onComplete: function () {
					gsap.to(alert.current, {
						x: 0,
						duration: 1,
						ease: 'Power4.easeOut',
					});
				},
			},
		);
	};

	return (
		<div
			className="game w-full flex items-center justify-center absolute flex-col"
			ref={secondBoxRef}
		>
			<div className="topContainer flex justify-between absolute top-0 left-0 w-full px-8 py-6">
				<div
					className="alert absolute px-6 py-4 text-semibold bg-white left-5 top-5"
					ref={alert}
				>
					<p className="mb-3">Opravdu chceš ukončit hru?</p>
					<div className="buttons flex gap-4 items-center justify-center">
						<button
							className="white uppercase py-1 px-5 rounded-xl w-24"
							onClick={() => {
								gsap.to(alert.current, {
									x: '-110%',
									duration: 1,
									ease: 'Power4.easeOut',
									onComplete: function () {
										gsap.to(alert.current, {
											display: 'none',
										});
										props.setSecondBox(false);
										props.setSecondBoxRight(true);
										props.setFirstBoxRight(true);
									},
								});
							}}
						>
							ano
						</button>
						<button
							className="blue uppercase py-1 px-5 rounded-xl w-24"
							onClick={() => {
								gsap.to(alert.current, {
									x: '-110%',
									duration: 1,
									ease: 'Power4.easeOut',
									onComplete: function () {
										gsap.to(alert.current, {
											display: 'none',
										});
									},
								});
							}}
						>
							ne
						</button>
					</div>
				</div>
				<div
					className="flex items-center arrow"
					onClick={() => {
						displayAlert();
					}}
				>
					<img
						src={arrow}
						alt="arrow-back"
						className="w-10 mr-4 cursor-pointer"
					/>
					<span className="text-white font-semibold">ZPĚT</span>
				</div>
				<div className="text-white font-semibold">{`${props.points} / 20 bodů`}</div>
			</div>
			<div className="questionContainer lg:w-1/2 md:w-3/4 w-11/12 mx-auto px-5 py-16 relative rounded-2xl">
				<div className="priserka absolute sm:block hidden">
					<img
						src={monster}
						alt="priserka"
						className="w-28 h-auto object-cover"
					/>
				</div>
				<div className="priserka absolute sm:block hidden">
					<img
						src={monster}
						alt="priserka"
						className="w-28 h-auto object-cover"
					/>
				</div>
				<div className="priserka absolute sm:block hidden">
					<img
						src={monster}
						alt="priserka"
						className="w-28 h-auto object-cover"
					/>
				</div>
				<div className="priserka absolute sm:block hidden">
					<img
						src={monster}
						alt="priserka"
						className="w-28 h-auto object-cover"
					/>
				</div>
				<div ref={questionContainer}>
					{currentQuestion && (
						<>
							{Object.keys(currentQuestion)
								.filter(item => item === 'priklad')
								.map(key => {
									return (
										<div
											className="question text-center w-full black font-semibold mb-8"
											key={key}
										>
											{currentQuestion['priklad']} &#61; ?
										</div>
									);
								})}
						</>
					)}
					{currentQuestion && (
						<>
							{Object.keys(currentQuestion)
								.filter(item => item === 'moznosti')
								.map(key => {
									return (
										<div
											className="answers grid lg:grid-cols-2 grid-cols-1 gap-8 mx-auto w-full md:px-10"
											key={key}
										>
											{currentQuestion['moznosti'].map(item => {
												const { id, moznost } = item;
												return (
													<div
														key={id}
														ref={addToRefsLi}
														className="rounded-xl text-white option py-3 w-full  px-4 font-semibold cursor-pointer border-2"
														onClick={e => {
															showTheResult(e);
														}}
													>
														{moznost}
													</div>
												);
											})}
										</div>
									);
								})}
						</>
					)}
				</div>
			</div>
			<div className="score w-full px-3 py-3 absolute left-0 bottom-4 text-center">
				<div className="text-white font-semibold">{`${index + 1} / 20`}</div>
			</div>
		</div>
	);
};

export default Game;
