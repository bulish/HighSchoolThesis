// react hooks
import { useEffect, useRef } from 'react';

// images
import image from '../assets/images/konec.png';
import arrow from '../assets/images/arrowBack.png';

// gsap
import gsap from 'gsap';

const End = props => {
	const thirdBoxRef = useRef();
	useEffect(() => {
		if (props.thirdBox) {
			let tl = gsap.timeline();
			tl.fromTo(
				thirdBoxRef.current,
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
						gsap.to(thirdBoxRef.current, {
							opacity: 1,
							duration: 0.75,
							scale: 1,
						});
					},
				},
				'+=.5',
			);
		}
	}, [props.thirdBox]);

	useEffect(() => {
		console.log(props.backToStart);
		if (props.backToStart) {
			gsap.to(thirdBoxRef.current, {
				opacity: 0,
				scale: 0.95,
				onComplete: function () {
					gsap.to(thirdBoxRef.current, {
						display: 'none',
					});
				},
			});
		}
	}, [props.backToStart]);

	return (
		<div
			className="end w-full flex items-center justify-center relative flex-col"
			ref={thirdBoxRef}
		>
			<div className="topContainer flex justify-between absolute top-0 left-0 w-full px-8 py-6">
				<div
					className="flex items-center arrow"
					onClick={() => {
						props.setBackToStart(true);
					}}
				>
					<img
						src={arrow}
						alt="arrow-back"
						className="w-10 mr-4 cursor-pointer"
					/>
					<span className="text-white font-semibold">ZPĚT</span>
				</div>
			</div>
			<div className="md:w-1/2 mx-auto px-5 py-16 relative rounded-2xl text-center">
				<img
					src={image}
					alt="konec-obrazek"
					className="mx-auto h-auto object-cover img"
				/>
				<h1 className="text-white font-bold my-8 w-full text-center">
					Konec hry
				</h1>
				<div className="text-white font-semibold score">
					Počet bodů: {`${props.points} / 20`}
				</div>
			</div>
		</div>
	);
};

export default End;
