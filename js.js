	
	let nav = document.querySelector(".nav")
	let menu = document.querySelector(".menu")
	let head = document.querySelector("#header")


		menu.addEventListener("click",()=>{
			nav.classList.toggle("d-sm-none")
			nav.classList.toggle("d-md-none")
			nav.classList.toggle("row1")
		})

		window.addEventListener("scroll",()=>{
			
			if (pageYOffset<299) {
				head.style.boxShadow="none"
				head.style.transition=".3s"	
			}

			else if (pageYOffset>380) {
				head.style.boxShadow="0px 0px 20px #0000004d"
				head.style.transition=".3s"	
				
			}
		})


	let up = document.querySelector(".fixed")
	up.style.visibility="hidden"
	up.style.opacity="0"
	up.classList.remove("d-lg-none")


	window.addEventListener("scroll",()=>{
		let scroll = pageYOffset


		if (scroll<200) {
				up.style.visibility="hidden"
				up.style.opacity="0"
				up.style.transition=".5s"
		}
		 else if (scroll>200) {
				up.style.visibility="visible"
				up.style.opacity="1"
		}
	})


	let space0 = document.querySelector("#section")
	let space1 = document.querySelector("#section1")
	let timeRun = document.querySelector("#section2")
	let counts = document.querySelectorAll("[data-num]")[0]
	let counts1 = document.querySelectorAll("[data-num]")[1]
	let counts2 = document.querySelectorAll("[data-num]")[2]
	let counts3 = document.querySelectorAll("[data-num]")[3]

	let oneTime = 0
	let oneTime1 = 0
	let oneTime2 = 0
	let oneTime3 = 0




	window.addEventListener("scroll",(e)=>{

	let numbers = 0


		if ((timeRun.offsetTop-space1.offsetHeight-100)<scrollY) {

		oneTime++	

			if (oneTime<2) {

				const stops = setInterval(()=>{
	
					numbers++
					counts.innerHTML=numbers
		
				if (counts.dataset.num==numbers) {	
					clearInterval(stops)
					numbers=0
					}
	
				},10)
			}


		}
	})

	window.addEventListener("scroll",(e)=>{

	let numbers = 0


		if ((timeRun.offsetTop-space1.offsetHeight-100)<scrollY) {

		oneTime1++	

			if (oneTime1<2) {

				const stops = setInterval(()=>{
	
					numbers++
					counts1.innerHTML=numbers
		
				if (counts1.dataset.num==numbers) {	
					clearInterval(stops)
					numbers=0
					}
	
				},10)
			}


		}
	})


	window.addEventListener("scroll",(e)=>{

	let numbers = 0


		if ((timeRun.offsetTop-space1.offsetHeight-100)<scrollY) {

		oneTime2++	

			if (oneTime2<2) {

				const stops = setInterval(()=>{
	
					numbers++
					counts2.innerHTML=numbers
		
				if (counts2.dataset.num==numbers) {	
					clearInterval(stops)
					numbers=0
					}
	
				},10)
			}


		}
	})



	window.addEventListener("scroll",(e)=>{

	let numbers = 0


		if ((timeRun.offsetTop-space1.offsetHeight-100)<scrollY) {

		oneTime3++	
		
			if (oneTime3<2) {

				const stops = setInterval(()=>{
	
					numbers++
					counts3.innerHTML=numbers
		
				if (counts3.dataset.num==numbers) {	
					clearInterval(stops)
					numbers=0
					}
	
				},10)
			}


		}
	})