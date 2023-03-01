let input;
let billingBtn;
let circle;
let money;
let month;

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	$input = document.querySelector('#slider')
	$billingBtn = document.querySelector('.pricing-section__choice__btns--billing-btn')
	$circle = document.querySelector('.circle')
	$money = document.querySelector('.pricing-section__choice__box__label--per-month')
	$month = document.querySelector('.month')
}

const prepareDOMEvents = () => {
	$billingBtn.addEventListener('click', switchOnMonthlyBilling)
	$input.addEventListener('input', handleInputChange)
}

const switchOnMonthlyBilling = () => {
	$billingBtn.classList.toggle('change-bg')

	if ($circle.classList.contains('active')) {
		$circle.classList.remove('active')
		$circle.classList.add('unactive')
	} else {
		$circle.classList.add('active')
		$circle.classList.remove('unactive')
	}
}

const handleInputChange = e => {
	const target = e.target
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'

	$money.textContent = '$' + $input.value;
}

document.addEventListener('DOMContentLoaded', main)
