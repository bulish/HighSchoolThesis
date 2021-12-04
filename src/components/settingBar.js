import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SettingBar = props => {
	const categories = [
		{
			id: 1,
			name: 'Počítání do 10',
			input: 'pocitaniDoDeseti',
		},
		{
			id: 2,
			name: 'Počítání do 20',
			input: 'pocitaniDoDvaceti',
		},
		{
			id: 3,
			name: 'Počítání do 100',
			input: 'pocitaniDoSta',
		},
		{
			id: 4,
			name: 'Násobilka 2',
			input: 'nasobilkaDvou',
		},
		{
			id: 5,
			name: 'Násobilka 3',
			input: 'nasobilkaTri',
		},
		{
			id: 6,
			name: 'Násobilka 4',
			input: 'nasobilkaCtyr',
		},
		{
			id: 7,
			name: 'Násobilka 5',
			input: 'nasobilkaPeti',
		},
		{
			id: 8,
			name: 'Násobilka 6',
			input: 'nasobilkaSesti',
		},
		{
			id: 9,
			name: 'Násobilka 7',
			input: 'nasobilkaSedmi',
		},
		{
			id: 10,
			name: 'Násobilka 8',
			input: 'nasobilkaOsmi',
		},
		{
			id: 11,
			name: 'Násobilka 9',
			input: 'nasobilkaDeviti',
		},
		{
			id: 12,
			name: 'Násobilka 10',
			input: 'nasobilkaDeseti',
		},
	];
	const settingBar = useRef();
	useEffect(() => {
		if (props.menuActive) {
			gsap.to(settingBar.current, {
				x: 0,
				duration: 1,
				ease: 'Power4.easeOut',
			});
		} else {
			gsap.to(settingBar.current, {
				x: '130vw',
				duration: 1,
				ease: 'Power4.easeIn',
			});
		}
	}, [props.menuActive]);

	const inputHandler = e => {
		if (e.target.checked) {
			switch (Number(e.target.id)) {
				case 1:
					props.setCat1(true);
					break;
				case 2:
					props.setCat2(true);
					break;
				case 3:
					props.setCat3(true);
					break;
				case 4:
					props.setCat4(true);
					break;
				case 5:
					props.setCat5(true);
					break;
				case 6:
					props.setCat6(true);
					break;
				case 7:
					props.setCat7(true);
					break;
				case 8:
					props.setCat8(true);
					break;
				case 9:
					props.setCat9(true);
					break;
				case 10:
					props.setCat10(true);
					break;
				case 11:
					props.setCat11(true);
					break;
				case 12:
					props.setCat12(true);
					break;
				default:
					break;
			}
		} else {
			switch (Number(e.target.id)) {
				case 1:
					props.setCat1(false);
					break;
				case 2:
					props.setCat2(false);
					break;
				case 3:
					props.setCat3(false);
					break;
				case 4:
					props.setCat4(false);
					break;
				case 5:
					props.setCat5(false);
					break;
				case 6:
					props.setCat6(false);
					break;
				case 7:
					props.setCat7(false);
					break;
				case 8:
					props.setCat8(false);
					break;
				case 9:
					props.setCat9(false);
					break;
				case 10:
					props.setCat10(false);
					break;
				case 11:
					props.setCat11(false);
					break;
				case 12:
					props.setCat12(false);
					break;
				default:
					break;
			}
		}
	};
	return (
		<div
			className="setting-bar fixed top-0 right-0 h-full bg-white z-50 w-96 overflow-y-scroll pb-8"
			ref={settingBar}
		>
			<div className="button-wrapper relative w-full h-16">
				<div
					className="button absolute top-3 right-3 cursor-pointer h-7"
					onClick={() => {
						props.setMenuActive(!props.menuActive);
					}}
				>
					<span className="w-8 block mb-2 transform rotate-45 relative top-3"></span>
					<span className="w-8  block m7-2 transform -rotate-45"></span>
				</div>
			</div>
			<div className="content px-10 flex flex-col">
				{categories.map(item => {
					const { id, name, input } = item;
					return (
						<div
							className="inputContainer w-full rounded-xl px-4 py-4 flex items-center justify-between"
							key={id}
						>
							<label
								htmlFor={input}
								className="text-white uppercase leading-10 inline-block align-top cursor-pointer font-semibold"
							>
								{name}
							</label>
							<input
								id={id}
								type="checkbox"
								className="input outline-none inline-block m-0 relative cursor-pointer align-top h-10 leading-10"
								name={input}
								defaultChecked="checked"
								onChange={e => {
									inputHandler(e);
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SettingBar;
