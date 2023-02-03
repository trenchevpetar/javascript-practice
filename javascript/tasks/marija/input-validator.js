function MyInputValidator (node, inputElement){

	let acceptedConditions = node.acceptedConditions;

	if(inputElement.value.length >= acceptedConditions.minLength.value && inputElement.value.length < acceptedConditions.maxLength.value) {
		printMessage(onSuccess(node.acceptedConditions.minLength), onSuccess(node.acceptedConditions.maxLength))
	} else 	if(inputElement.value.length >= acceptedConditions.minLength.value && inputElement.value.length >= acceptedConditions.maxLength.value) {
		printMessage(onSuccess(node.acceptedConditions.minLength),onError(node.acceptedConditions.maxLength))
	} else if (inputElement.value.length < acceptedConditions.minLength.value && inputElement.value.length < acceptedConditions.maxLength.value) {
		printMessage(onError(node.acceptedConditions.minLength),onSuccess(node.acceptedConditions.maxLength))
	} else if (inputElement.value.length < acceptedConditions.maxLength.value && inputElement.value.length >= acceptedConditions.maxLength.value) {
		printMessage(onError(node.acceptedConditions.minLength),onError(node.acceptedConditions.maxLength))
	}
}

function onError (message) {
	return `<p style="color: red" class="input__validator__message--error">${message.errorMessage} ❌️</p>`

}

function onSuccess (message) {
	return `<p style="color: green" class="input__validator__message--success">${message.successMessage} ✅</p>`
}

function printMessage (messageMinLength, messageMaxLength) {
	document.querySelector('.input-validator__message').innerHTML = messageMinLength;
	document.querySelector('.input-validator__message').innerHTML += messageMaxLength;

}

let node = {
	id: 'input-marija',
	acceptedConditions: {
		maxLength: {
			value: 5,
			errorMessage: "Please enter less than five characters",
			successMessage: "Maximum length is satisfied",
		},
		minLength: {
			value: 1,
			errorMessage: "Please enter more than one character",
			successMessage: "Minimum length is satisfied",
		}
	}
}

const inputElement = document.getElementById(node.id);

inputElement.addEventListener('keypress', (event) => {
	MyInputValidator(node, inputElement)
})


