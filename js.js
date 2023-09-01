	
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