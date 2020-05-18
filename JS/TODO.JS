
var arr = []
let arr1 =[]
let counter = 0

if(!localStorage.getItem('newitem') || !localStorage.getItem('compitem')|| !localStorage.getItem('compitem')) {
	localStorage.setItem('newitem',JSON.stringify(arr))
	localStorage.setItem('compitem',JSON.stringify(arr1))
	localStorage.setItem('counter',JSON.stringify(counter))
}
else{
	console.log(localStorage)
	arr = JSON.parse(localStorage.getItem('newitem')
		)
	arr1 =JSON.parse(localStorage.getItem('compitem'))
	counte = JSON.parse(localStorage.getItem('counter'))
}
localStorage.clear()
// function addcomplete(){
// 		console.log(event.target.id)

// 		// document.querySelector(a).remove()
// 	}
document.addEventListener('DOMContentLoaded', () => {
	
	const r = document.querySelector('#addlist')
	const r1 = document.querySelector('#addlist1')

	document.querySelector('#button-addon1').onclick = ()=>{
		const val = document.querySelector('#list').value
		console.log(val)
		arr.push(val)
		
		localStorage.setItem('newitem',JSON.stringify(arr))
		
		r.innerHTML += `<input type="checkbox" class="${counter}">
        <label class = '${arr[arr.length-1] + String(arr.length - 1)}'for="a">${arr[arr.length-1]}</label><br>`
        document.querySelector('#list').value= ''
	}
	
	console.log(r)
	for (var i = 0; i < arr.length; i++) {
		console.log(arr1.includes(arr[i]),arr1)
		if (!arr1.includes(arr[i])){
			r.innerHTML += `<input type="checkbox"  class ="${arr[i] + String(i)}">
		    <label class ="${arr[i] + String(i)}" for="a">${arr[i]}</label><br>`

    }
	}
	console.log(arr)
	for (var i = 0; i < arr1.length; i++) {
		r1.innerHTML += `<label class ="${arr1[i] + String(i)}" for="a">${arr1[i]}</label><br>`
	}

	document.querySelector("#addlist").onchange= () =>{

		const v = '.' + event.target.className
		console.log(v,document.querySelector(v)) 
		arr1.push(event.target.className.slice(0,-1))
		if (v.includes())
		document.querySelector(v).remove()
		document.querySelector(v).remove()
		document.querySelector('br').remove()
		// console.log(arr,ind)
		localStorage.setItem('compitem',JSON.stringify(arr1))
		localStorage.setItem('newitem',JSON.stringify(arr))
		r1.innerHTML += `<label class ="${arr1[arr1.length-1] + String(i)}" for="a">${arr1[arr1.length-1]}</label><br>`
		// console.log(p)



	}

	// console.log(document.querySelector('input').oncheck)
	// le = addcomplete()
	// console.log(le)
	// console.log(localStorage)
	
})
