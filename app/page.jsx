"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {


	const showComponent = (icon, box) => {
		icon.current.style.backgroundColor = '#58687e'
		box.current.style.transform = `scale(1)`
	}
	const hideComponent = (icon, box) => {
		icon.current.style.backgroundColor = '#334155'
		box.current.style.transform = `scale(0)`
	}

	// *************** TERMINAL COMPONENT CODE *************** //

	const [textAreaValue, setTextAreaValue] = useState(`muhammadrumman@Rumman-MacBook-Pro-2 ~ % `)
	const text = useRef()

	const entering = (e) => {
		setTextAreaValue(e.target.value)
	}

	const terminalIcon = useRef()
	const terminalBox = useRef()


	const menu = useRef()
	const toggleMenu = () => {
		menu.current.style.transform = 'scale(0)'
		if (menu.current.style.transform == 'scale(0)') {
			menu.current.style.transform = 'scale(1)'
		} else {
			menu.current.style.transform = 'scale(0)'
		}
	}
	const [isTerminalDark, setIsTerminalDark] = useState(true)
	const toggleTerminalTheme = () => {
		if (isTerminalDark) {
			text.current.style.backgroundColor = '#E3E1E4'
			text.current.style.color = '#000'
			setIsTerminalDark(!isTerminalDark)
		}
		else {
			text.current.style.backgroundColor = '#080808'
			text.current.style.color = '#fff'
			setIsTerminalDark(!isTerminalDark)
		}
	}

	// *************************** //


	// *************** FINDER COMPONENT CODE *************** //
	const finderIcon = useRef()
	const finder = useRef()

	// const [isFinderDark, setIsFinderDark] = useState(false)

	// function toggleFinderTheme(){
	// 	if(isFinderDark){
	// 		finder.current.style.backgroundColor = '#E3E1E4'
	// 		// finder.current.style.color = '#000'
	// 		setIsFinderDark(!isFinderDark)
	// 	}
	// 	else{
	// 		finder.current.style.backgroundColor = '#000'
	// 		// finder.current.style.color = '#fff'
	// 		setIsFinderDark(!isFinderDark)
	// 	}
	// }

	// *************************** //

	// *************** CALCULATOR COMPONENT CODE *************** //

	const calculatorIcon = useRef()
	const calculator = useRef()

	const calculationResult = useRef()

	const calculateResult = () => {
		let expression = calculationResult.current.innerText
		let result = eval(expression)
		calculationResult.current.innerText = result
	}

	useEffect(() => {
		document.addEventListener('keypress', (e) => {
			if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 42 || e.keyCode == 43 || e.keyCode == 45 || e.keyCode == 47) {
				calculationResult.current.innerText += e.key
			}
			else if (e.keyCode == 61 || e.keyCode == 13) {
				let expression = calculationResult.current.innerText
				let result = eval(expression)
				calculationResult.current.innerText = result
			}
		})
	}, [])

	// *************************** //




	return (
		<div className="m-0 p-0 h-[100vh] w-[100vw] overflow-hidden flex flex-col items-center">
			<img className="shadow-none fixed -z-50 h-[100vh] w-[100vw] blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuVi8SOBdqXKq0gAkj03xUpq5m-Q9l1Zh3A&s" alt="" />
			{/* <img className="shadow-none fixed -z-50 h-[100vh] w-[100vw]" src="https://raw.githubusercontent.com/PuruVJ/macos-web/refs/heads/main/src/assets/wallpapers/ventura-2.webp" alt="" /> */}

			<input className="bg-[#4F6691] text-white py-1 px-5 w-60 rounded-sm my-9" type="text" placeholder="Search" name="" id="" />
			<div className="icons w-[75vw] h-[70vh] grid grid-cols-7 mt-5 text-sm">


				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8204ffaf2c6f9f46a1a803a96c91e7d5_low_res_Safari.png" alt="" />
					<span className="text-white">Safari</span>
				</div>


				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e87fd5804fa13d57a8430469e779bed3_low_res_Mail.png" alt="" />
					<span className="text-white">Mail</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6c096b9d700d6ddb93bfb0a1b7e4309f_low_res_Contacts.png" alt="" />
					<span className="text-white">Contacts</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c5aa18a9895fc0cabc7643cd0fc03958_5ZqOfDv7fX.png" alt="" />
					<span className="text-white">Calendar</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a082280431c38b1982c2c32470a584a9_363UeyO5vK.png" alt="" />
					<span className="text-white">Reminders</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b9a13f3ab8062067f6f8e3e9d6a02141_low_res_Notes__Transparent_.png" alt="" />
					<span className="text-white">Notes</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/24d219bb8917c4a60160ef9957b41355_low_res_Maps__iOS_18_Dark_.png" alt="" />
					<span className="text-white">Maps</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/90efbb4c8b8a9b1b1b5a826127c5eae3_low_res_Messages__iOS_18_Dark_.png" alt="" />
					<span className="text-white">Messages</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7fb19fa67a35117d6f929805ea09b223_low_res_FaceTime.png" alt="" />
					<span className="text-white">Face Time</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9ae27c8292f9eb873a76dd8d3ea16e3f_low_res_Photo_Booth.png" alt="" />
					<span className="text-white">Photo Booth</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d3b2e2c7d5dca62d5025319419df4b62_BVPvcRq3SA.png" alt="" />
					<span className="text-white">iPhoto</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4abac1388c814d317ac07a87bde337d0_low_res_Photos__Transparent_.png" alt="" />
					<span className="text-white">Photos</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/69f565fd8ce6ecd359c0579fc93afd7e_low_res_iMovie__Transparent_.png" alt="" />
					<span className="text-white">iMovie</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e3b7753a9092f88c2a9f7e11174a81c7_BY88EBiW5W.png" alt="" />
					<span className="text-white">Garage Band</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/0ed2b84d96877e1d7e9b8f1458768668_gxLSQvSnv8.png" alt="" />
					<span className="text-white">Game Center</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/72eae21cdf1c4bfebe47752cf6e18ea4_cJiQWqR451.png" alt="" />
					<span className="text-white">iTunes</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/79e78a99d1a83debb7b5ad0449268c7b_QRUwTdwvrN.png" alt="" />
					<span className="text-white">iBooks</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/1fa0bd405a6babc0401d7d167c85a334_low_res_App_Store.png" alt="" />
					<span className="text-white">App Store</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a1ef2fb5fd2e3524979bea4895ceec01_low_res_Pages.png" alt="" />
					<span className="text-white">Pages</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c36982b08f06fcc4015f94c4d009c29e_zwkaPC79k8.png" alt="" />
					<span className="text-white">Numbers</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/db7ff7ed57c23acb4a2cdbbf47423d75_low_res_Keynote.png" alt="" />
					<span className="text-white">Keynote</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/f277c790ba4f51e96881267e9bb6103e_0DLNdPRHqg.png" alt="" />
					<span className="text-white">Preview</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e453508397ee0c29ab766081b72e5603_HlN2btsg29.png" alt="" />
					<span className="text-white">Dictionary</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img ref={calculatorIcon} onClick={() => showComponent(calculatorIcon, calculator)} width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/056449cd58976a280d5e34b086df3061_low_res_Calculator.png" alt="" />
					<span className="text-white">Calculator</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/5824f9c3d800bd026e910478b9fe3f57_Hd4IIbwlZu.png" alt="" />
					<span className="text-white">Mission Control</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/3907fe904ab86b8c073d9a1febdf022a_Acv8mmCbxr.png" alt="" />
					<span className="text-white">Dashboard</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ee1d55d2024ec98f4e4859017e95cf36_uB4FckQwO2.png" alt="" />
					<span className="text-white">System Preferences</span>
				</div>

				<div className="icon flex flex-col items-center justify-center h-fit">
					<img width={60} height={60} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/83eb267b021f07a6fa8745ba33be65d6_gQoepsgJvQ.png" alt="" />
					<span className="text-white">VS Code</span>
				</div>


			</div>


			{/* // *************** TERMINAL COMPONENT CODE *************** // */}
			<section ref={terminalBox} className="transition-all scale-0 terminal rounded-lg h-[30rem] w-[65vw] bg-[#080808] fixed top-[25vh] left-[23vw]">
				<div className="bg-[#414244] px-3 py-[2px] rounded-t-lg rounded-tr-lg flex items-center justify-between">
					<div className="dots flex gap-2">
						<div onClick={() => { menu.current.style.transform = 'scale(0)'; hideComponent(terminalIcon, terminalBox) }} className="dot bg-red-700 w-[1rem] h-[1rem] rounded-[50%] text-red-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
						<div className="dot bg-orange-500 w-[1rem] h-[1rem] rounded-[50%] text-orange-500 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">-</div>
						<div className="dot bg-green-700 w-[1rem] h-[1rem] rounded-[50%] text-green-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
					</div>
					<div className="text-gray-400 font-mono flex items-center justify-center gap-2">
						<img width={20} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder icon" />
						muhammadrumman -- -zsh -- 80x24
					</div>
					<div className="text-white">
						<div onClick={toggleMenu} className="text-md cursor-pointer font-extrabold rotate-45">&#8945;</div>
						{isTerminalDark ?
							<div ref={menu} className="menu border scale-0 rounded-lg px-2 transition-all bg-[#414244] absolute right-4 top-7 p-1 w-36">
								<ul>
									<li onClick={() => { text.current.style.color = 'rgb(255,255,255)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">White</li>
									<li onClick={() => { text.current.style.color = 'rgb(50, 205, 50)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Green</li>
									<li onClick={() => { text.current.style.color = 'rgb(255,255,0)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Yellow</li>
									<li onClick={() => { text.current.style.color = 'rgb(0, 174, 255)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Blue</li>
									<li onClick={() => { menu.current.style.transform = 'scale(0)'; toggleTerminalTheme() }} className="hover:bg-[#626263] cursor-default">Toggle Theme</li>
								</ul>
							</div>
							:
							<div ref={menu} className="menu border scale-0 rounded-lg px-2 transition-all bg-[#414244] absolute right-4 top-7 p-1 w-36">
								<ul>
									<li onClick={() => { text.current.style.color = 'rgb(0,0,0)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Black</li>
									<li onClick={() => { text.current.style.color = 'rgb(0, 128, 0)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Green</li>
									<li onClick={() => { text.current.style.color = 'rgb(255,0,0)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Red</li>
									<li onClick={() => { text.current.style.color = 'rgb(0, 4, 255)'; menu.current.style.transform = 'scale(0)'; }} className="hover:bg-[#626263] cursor-default">Blue</li>
									<li onClick={() => { menu.current.style.transform = 'scale(0)'; toggleTerminalTheme() }} className="hover:bg-[#626263] cursor-default">Toggle Theme</li>
								</ul>
							</div>
						}
					</div>
				</div>



				<div className="text-area">
					<textarea ref={text} onInput={entering} className="text-white rounded-b-lg font-mono bg-[#080808] w-[100%] h-[452px] overflow-hidden focus:outline-none focus:border-none py-1 px-2" value={textAreaValue}></textarea>
				</div>
			</section>
			{/* // *************************** // */}


			{/* // *************** FINDER COMPONENT CODE *************** // */}
			<section ref={finder} className="finder overflow-hidden bg-[#E3E1E4] h-[92.2vh] w-[100vw] fixed top-0 left-0 py-1 px-2 scale-0">
				<div className="flex items-center justify-between">
					<div className="dots flex gap-2">
						<div onClick={() => hideComponent(finderIcon, finder)} className="dot bg-red-700 w-[1rem] h-[1rem] rounded-[50%] text-red-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
						<div className="dot bg-orange-500 w-[1rem] h-[1rem] rounded-[50%] text-orange-500 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">-</div>
						<div className="dot bg-green-700 w-[1rem] h-[1rem] rounded-[50%] text-green-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
					</div>
					<div className="text-gray-700 font-arial flex items-center justify-center gap-2 text-sm">
						File Explorer Test Files
					</div>
					<div className="text-[#E3E1E4]">
						.
						{/* {isFinderDark?
						<svg onClick={toggleFinderTheme} className="mr-5" width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
						:
						<svg onClick={toggleFinderTheme} className="mr-5" width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
						} */}
					</div>
				</div>
				<div className=" flex justify-between items-center py-1 px-4 ">
					<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" /></svg>
					<div className="flex items-center justify-between gap-4">
						<svg className="mr-12" width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm112 96l-96 0 0 128 96 0 0-128z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
					</div>
					<input className="px-3 focus:outline-none focus:border0-none" type="text" placeholder="Search" />
				</div>
				<div className=" border bg-[#f9f9f9] border-gray-500 rounded-sm py-0 px-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
						<div className="flex items-center justify-center gap-1 ml-5">
							<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
							MacBook-Pro-2
						</div>
						<span className="text-3xl font-extrabold">&#8594;</span>
						<div className="flex items-center justify-center gap-1">
							<img width={17} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="" />
							share
						</div>
						<span className="text-3xl font-extrabold">&#8594;</span>
						<div className="flex items-center justify-center gap-1">
							<img width={17} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="" />
							FileExplorerTestFiles
						</div>
					</div>
					<div>
						<svg width={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z" /></svg>
					</div>
				</div>
				<div className="files-section flex overflow-hidden">
					<div className="left h-[52.5rem] w-[18%] py-2 px-3">
						<p className="font-semibold text-gray-700">Favorites</p>
						<ul>
							<li><svg width={18} fill="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}<path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg> Nearby File Transfer</li>
							<li><img width={18} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9c0171633f35587a2cc740d0e57326c1_low_res_Applications%20Folder.png" alt="" /> Applications</li>
							<li><svg width={18} fill="#eb830c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z" /></svg> stevenzhang</li>
							<li><svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" /></svg> Desktop</li>
							<li><img width={18} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/68a7dff213decfd9420d404a1ecc124e_low_res_Download_Icon.png" alt="" /> Downloads</li>
							<li><svg width={18} fill="#006eff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z" /></svg> Synced</li>
						</ul>
						<p className="font-semibold text-gray-700">Locations</p>
						<ul>
							<li><img width={18} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/5b55f5a0c383a4ca99459f58343bc514_low_res_Macintosh%20HD%20-%20SSD.png" alt="" /> Macintosh HD</li>
						</ul>
						<p className="font-semibold text-gray-700">Connections</p>
						<ul>
							<li><svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg> MacBook-Pro-2</li>
							<li><img width={18} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/98b93477962e374cc5c038dedb5aa395_4ek9rPjPOh.png" alt="" /> git-server</li>
							<li><svg width={18} fill="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" /></svg> Muhammad Rumman</li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div className="right bg-white h-[52.5rem] w-[82%] grid grid-cols-6 gap-1 overflow-y-scroll overflow-x-hidden">
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
						<div className="folder flex flex-col items-center justify-center h-fit">
							<img width={120} src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c3ef21fe8fabfd9d23fcc3ab3134dcf9_GecwaBmkFQ.png" alt="folder-icon" />
							<p className="cursor-default" title="Amazon-like-website">Amazon-lik...</p>
						</div>
					</div>
				</div>
			</section>
			{/* // *************************** // */}


			{/* // *************** CALCULATOR COMPONENT CODE *************** // */}
			<section ref={calculator} className="calculator scale-0 cursor-default h-[32rem] w-[24rem] bg-[#4B4C4E] rounded-xl fixed top-[25vh] left-[33vw]">
				<div className="dots flex gap-2 p-2">
					<div onClick={() => hideComponent(calculatorIcon, calculator)} className="dot bg-red-700 w-[1rem] h-[1rem] rounded-[50%] text-red-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
					<div className="dot bg-orange-500 w-[1rem] h-[1rem] rounded-[50%] text-orange-500 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">-</div>
					<div className="dot bg-green-700 w-[1rem] h-[1rem] rounded-[50%] text-green-700 hover:text-gray-300 cursor-default flex justify-center items-center text-[12px] text-center">X</div>
				</div>
				<div ref={calculationResult} className="result text-white text-end text-6xl mt-2 px-2 overflow-hidden overflow-y-hidden"></div>
				<div className="calc-buttons mt-[1rem] grid grid-cols-4 absolute bottom-0">
					<div onClick={() => { calculationResult.current.innerText = '' }} className="calc-button text-[1.8rem] bg-[#5C5D5F]">AC</div>
					<div onClick={() => { calculationResult.current.innerText = calculationResult.current.innerText * calculationResult.current.innerText }} className="calc-button text-[1.8rem] bg-[#5C5D5F]">x<sup>2</sup></div>
					<div onClick={() => { calculationResult.current.innerText += Math.round(Math.random() * 100) }} className="calc-button text-[1.8rem] bg-[#5C5D5F]">Rand</div>
					<div onClick={() => { calculationResult.current.innerText += '/' }} className="calc-button text-[2.5rem] bg-[#FFA212]">÷</div>
					<div onClick={() => { calculationResult.current.innerText += '7' }} className="calc-button text-[2.5rem] bg-[#777978]">7</div>
					<div onClick={() => { calculationResult.current.innerText += '8' }} className="calc-button text-[2.5rem] bg-[#777978]">8</div>
					<div onClick={() => { calculationResult.current.innerText += '9' }} className="calc-button text-[2.5rem] bg-[#777978]">9</div>
					<div onClick={() => { calculationResult.current.innerText += '*' }} className="calc-button text-[2.5rem] bg-[#FFA212]">×</div>
					<div onClick={() => { calculationResult.current.innerText += '4' }} className="calc-button text-[2.5rem] bg-[#777978]">4</div>
					<div onClick={() => { calculationResult.current.innerText += '5' }} className="calc-button text-[2.5rem] bg-[#777978]">5</div>
					<div onClick={() => { calculationResult.current.innerText += '6' }} className="calc-button text-[2.5rem] bg-[#777978]">6</div>
					<div onClick={() => { calculationResult.current.innerText += '-' }} className="calc-button text-[2.5rem] bg-[#FFA212]">-</div>
					<div onClick={() => { calculationResult.current.innerText += '1' }} className="calc-button text-[2.5rem] bg-[#777978]">1</div>
					<div onClick={() => { calculationResult.current.innerText += '2' }} className="calc-button text-[2.5rem] bg-[#777978]">2</div>
					<div onClick={() => { calculationResult.current.innerText += '2' }} className="calc-button text-[2.5rem] bg-[#777978]">3</div>
					<div onClick={() => { calculationResult.current.innerText += '+' }} className="calc-button text-[2.5rem] bg-[#FFA212]">+</div>
					<div onClick={() => { calculationResult.current.innerText += '0' }} className="calc-button text-[2.5rem] bg-[#777978] rounded-bl-xl">0</div>
					<div onClick={() => { calculationResult.current.innerText += '3.14' }} className="calc-button text-[2.5rem] bg-[#777978]">&pi;</div>
					<div onClick={() => { calculationResult.current.innerText += '.' }} className="calc-button text-[2.5rem] bg-[#777978]">.</div>
					<div onClick={calculateResult} className="calc-button text-[2.5rem] bg-[#FFA212] rounded-br-xl">=</div>
				</div>
			</section>
			{/* // *************************** // */}

			{/* // *************** CALCULATOR COMPONENT CODE *************** // */}
			<section className="vsCode ">

			</section>
			{/* // *************************** // */}


			<nav className="bg-slate-700 w-[65vw] mx-auto h-16 fixed bottom-4 right-0 left-0 flex gap-40 items-center justify-center py-0 px-2">
				<ul className="flex py-0 items-center">
					<li><img ref={finderIcon} onClick={() => { showComponent(finderIcon, finder) }} className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b0bfe333ca52837f20de43aa34cd60a8_low_res_Finder.png" alt="finder" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/5a63aa7ebedb7285e7c7fe5ac746d99d_low_res_Figma.png" alt="figma" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/1fa0bd405a6babc0401d7d167c85a334_low_res_App_Store.png" alt="app store" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/90efbb4c8b8a9b1b1b5a826127c5eae3_low_res_Messages__iOS_18_Dark_.png" alt="messaging" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ad5ee73543fb86f84a3253959040e81c_low_res_Music.png" alt="music" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/83eb267b021f07a6fa8745ba33be65d6_gQoepsgJvQ.png" alt="vs code" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e87fd5804fa13d57a8430469e779bed3_low_res_Mail.png" alt="mail" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/24d219bb8917c4a60160ef9957b41355_low_res_Maps__iOS_18_Dark_.png" alt="map" /></li>
					<li><img ref={calculatorIcon} onClick={() => { showComponent(calculatorIcon, calculator) }} className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/056449cd58976a280d5e34b086df3061_low_res_Calculator.png" alt="calculator" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b9a13f3ab8062067f6f8e3e9d6a02141_low_res_Notes__Transparent_.png" alt="notepad" /></li>
					<li><img ref={terminalIcon} onClick={() => { showComponent(terminalIcon, terminalBox) }} className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/88b357eeaad8b7d835e2232b4a9ed42c_low_res_Terminal__White_border_for_Dark_theme_.png" alt="terminal" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ee1d55d2024ec98f4e4859017e95cf36_uB4FckQwO2.png" alt="settings" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8204ffaf2c6f9f46a1a803a96c91e7d5_low_res_Safari.png" alt="safari" /></li>
					<li><img className="transition-all hover:scale-150" src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ba785108768be2c0185b17b2716cc90e_low_res_Twitter.png" alt="twitter" /></li>
				</ul>
			</nav>
		</div>
	);
}