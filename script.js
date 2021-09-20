
let btn  = document.getElementById('profile')
let div  = document.getElementById('leftbar')

btn.addEventListener('click', () => {
	if(div.style.display === 'none'){
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none'
	}
})
