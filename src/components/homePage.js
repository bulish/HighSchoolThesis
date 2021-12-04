// react hooks
import { useEffect, useRef } from 'react';

// images
import image1 from '../assets/images/uvod.png';

// gsap
import gsap from 'gsap';

const HomePage = props => {
	// ref
	const firstBoxRef = useRef();
	const settingRef = useRef();

	useEffect(() => {
		if (props.secondBox) {
			let tl = gsap.timeline();
			tl.fromTo(
				settingRef.current,
				{
					opacity: 1,
					duration: 0.1,
				},
				{
					opacity: 0,
					duration: 0.1,
				},
			);
			tl.fromTo(
				firstBoxRef.current,
				{
					display: 'flex',
					opacity: 1,
					duration: 0.75,
					scale: 1,
				},
				{
					opacity: 0,
					duration: 0.75,
					scale: 0.95,
					onComplete: function () {
						gsap.to(firstBoxRef.current, {
							display: 'none',
							duration: 0.75,
						});
					},
				},
			);
		}
	}, [props.secondBox, props.firstBox]);

	useEffect(() => {
		if (props.firstBoxRight) {
			let tl = gsap.timeline();
			tl.fromTo(
				settingRef.current,
				{
					opacity: 0,
					duration: 0.1,
				},
				{
					opacity: 1,
					duration: 0.1,
				},
			);
			tl.fromTo(
				firstBoxRef.current, 0.75,
				{
					display: 'none',
					scale: 0.95,
					opacity: 0,
				},
				{
					display: 'flex',
					onComplete: function () {
						gsap.to(firstBoxRef.current, {
							opacity: 1,
							scale: 1,
							duration: 0.75,
						});
					},
				},
			);
		}
	}, [props.firstBoxRight]);

	useEffect(() => {
		if (props.backToStart) {
			let tl = gsap.timeline();
			tl.fromTo(firstBoxRef.current, 0.75, {
				opacity: 0,
				display: 'none',
				scale: .95,
			}, {
				display: 'flex',
				onComplete: function () {
					gsap.to(firstBoxRef.current, {
						opacity: 1,
						scale: 1
					})
				}
			})
			tl.fromTo(
				settingRef.current,
				{
					opacity: 0,
					duration: 0.1,
				},
				{
					opacity: 1,
					duration: 0.1,
					onComplete: function () {
						props.setFirstBox(false);
						props.setSecondBox(false);
						props.setThirdBox(false);
						props.setFirstBoxRight(false);
						props.setBackToStart(false);
					}
				},
			);
		}
	}, [props.backToStart])
	return (
		<div
			className="homePage w-full flex items-center justify-center absolute"
			ref={firstBoxRef}
		>
			<div
				ref={settingRef}
				className="absolute top-10 right-10 flex items-center cursor-pointer button-wrapper"
				onMouseEnter={() => {
					props.setMenuBtnHover(true);
				}}
				onMouseLeave={() => {
					props.setMenuBtnHover(false);
				}}
				onClick={() => {
					props.setMenuActive(!props.menuActive);
				}}
			>
				<div
					className={
						props.menuBtnHover ? 'button mr-5 buttonHover' : 'button mr-5'
					}
				>
					<span className="w-6 h-0.5 bg-white block"></span>
					<span className="w-6 h-0.5 bg-white my-1 block"></span>
					<span className="w-6 h-0.5 bg-white block"></span>
				</div>
				<span className="uppercase text-white font-semibold">nastavení</span>
			</div>
			<div className="homePage__container text-white text-center">
				<img
					src={image1}
					alt="uvodni-obrazek"
					className="object-cover mx-auto"
				/>
				<h1 className="md:my-12 my-6 font-semibold">Matematický kvíz</h1>
				<h5 className="md:my-12 my-6 font-semibold">pro 1. stupeň ZŠ</h5>
				<button
					className="uppercase py-2 md:px-20 px-12 rounded-xl border border-white outline-none"
					onClick={() => {
						props.setFirstBox(false);
						props.setSecondBox(true);
						props.setFirstBoxRight(false);
						props.setSecondBoxRight(false);
						props.setMenuActive(false);
					}}
				>
					hrát
				</button>
			</div>
		</div>
	);
};

export default HomePage;
