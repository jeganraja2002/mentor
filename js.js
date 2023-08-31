
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