const transaction = (event) => {
	event.preventDefault();
	const inputAmount = Number(document.querySelector('#inputAmount').value)
	console.log(inputAmount)

	
	let error_para = document.querySelector('#error_para')
	error_para.innerText=""
	
	if (inputAmount < 100) return error_para.innerText = `100 se kam nhi`
	if (inputAmount > 100000) return error_para.innerText = `100000 se zada nhi`

	console.log(`testing`)
	const notePreference = document.querySelector('#notePreference').value
	console.log(notePreference)




}