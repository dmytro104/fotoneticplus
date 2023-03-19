// For new nav bar on smaller screens
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	})
}

if (close) {
	close.addEventListener('click', () => {
		event.preventDefault();
		nav.classList.remove('active');
	})
}

if (close) {
	document.addEventListener('keydown', () => {
		if (event.keyCode === 27) {
			event.preventDefault();
			nav.classList.remove('active');
		}
	})
}

if (close) {
	close.addEventListener('keydown', () => {
		if (event.keyCode === 27) {
			event.preventDefault();
			nav.classList.remove('active');
		}
	})
}


// Rules for where to scroll when pressing button
function setPos(button, posY) {
	if (button) {
		button.addEventListener('click', () => {
			window.scrollTo({
				top: posY, 
				behavior: 'smooth'
			});
		})
	}	
}

const homeButton = document.getElementById("home");
const homePositionY = 0;
setPos(homeButton, homePositionY);

const aboutButton = document.getElementById("aboutUs");
const newsletterPositionY = document.getElementById("newsletter").offsetTop;
setPos(aboutButton, newsletterPositionY);

function setPosComplex(button, refPt, offsetAmt) {
	if (button) {
		button.addEventListener('click', () => {
			let positionY = refPt.offsetTop + offsetAmt;
			window.scrollTo({
				top: positionY, 
				behavior: 'smooth'
			});
		})
		return positionY = refPt.offsetTop + offsetAmt;
	}
}

const productsButton = document.getElementById("products");
const lastFeatureBox = document.getElementById("last-feature");
const productOffset = 170;
setPosComplex(productsButton, lastFeatureBox, productOffset);

const featureButton = document.getElementById("features");
const featureSection = document.getElementById("feature")
const featureOffset = -90;
setPosComplex(featureButton, featureSection, featureOffset);

const faqButton = document.getElementById("faq");
const lastProductBox = document.getElementById("productFrame");
const faqOffset = 380;
setPosComplex(faqButton, lastProductBox, faqOffset);


//Rules for activating buttons based on location
window.addEventListener('scroll', () => {
	const scrollPos = window.scrollY;
	let productPositionY = lastFeatureBox.offsetTop + productOffset;
	let faqPositionY = lastProductBox.offsetTop + faqOffset;
	let featurePositionY = featureSection.offsetTop + featureOffset;
	if (scrollPos < featurePositionY) {
		homeButton.classList.add('active');
		featureButton.classList.remove('active');
		productsButton.classList.remove('active');
		faqButton.classList.remove('active');
	} else if (scrollPos < productPositionY) {
		homeButton.classList.remove('active');
		featureButton.classList.add('active');
		productsButton.classList.remove('active');
		faqButton.classList.remove('active');
	} else if (scrollPos < faqPositionY) {
		homeButton.classList.remove('active');
		featureButton.classList.remove('active');
		productsButton.classList.add('active')
		faqButton.classList.remove('active');
	} else {
		homeButton.classList.remove('active');
		featureButton.classList.remove('active');
		productsButton.classList.remove('active')
		faqButton.classList.add('active');	
	}
})


//FAQ section

const dropDownButton1 = document.getElementById('open-question1');
const closeQuestion1 = document.querySelector('.close-question1');
const faqAnswer1 = document.querySelector('.answer1');

const dropDownButton2 = document.getElementById('open-question2');
const closeQuestion2 = document.querySelector('.close-question2');
const faqAnswer2 = document.querySelector('.answer2');

const dropDownButton3 = document.getElementById('open-question3');
const closeQuestion3 = document.querySelector('.close-question3');
const faqAnswer3 = document.querySelector('.answer3');

const dropDownButton4 = document.getElementById('open-question4');
const closeQuestion4 = document.querySelector('.close-question4');
const faqAnswer4 = document.querySelector('.answer4');

const dropDownButton5 = document.getElementById('open-question5');
const closeQuestion5 = document.querySelector('.close-question5');
const faqAnswer5 = document.querySelector('.answer5');

const dropDownButton6 = document.getElementById('open-question6');
const closeQuestion6 = document.querySelector('.close-question6');
const faqAnswer6 = document.querySelector('.answer6');

const dropDownButton7 = document.getElementById('open-question7');
const closeQuestion7 = document.querySelector('.close-question7');
const faqAnswer7 = document.querySelector('.answer7');

function expandQuestion(dropDownButton, answerSection, closeAnswerButton) {
	dropDownButton.addEventListener('click', () => {
		event.preventDefault()
		answerSection.style.display = 'block';
		dropDownButton.style.display = 'none';
		closeAnswerButton.style.display = 'block';
	})	
}

function closeQuestion(closeAnswerButton, answerSection, dropDownButton) {
	closeAnswerButton.addEventListener('click', () => {
		event.preventDefault()
		answerSection.style.display = 'none';
		closeAnswerButton.style.display = 'none';
		dropDownButton.style.display = 'block';
	})	
}

function closeQuestionEsc(closeAnswerButton, answerSection, dropDownButton) {
	document.addEventListener('keydown', () => {
		if (event.keyCode === 27) {
			event.preventDefault()
			answerSection.style.display = 'none';
			closeAnswerButton.style.display = 'none';
			dropDownButton.style.display = 'block';
		}	
	})
}

expandQuestion(dropDownButton1, faqAnswer1, closeQuestion1);
closeQuestion(closeQuestion1, faqAnswer1, dropDownButton1);
closeQuestionEsc(closeQuestion1, faqAnswer1, dropDownButton1);

expandQuestion(dropDownButton2, faqAnswer2, closeQuestion2);
closeQuestion(closeQuestion2, faqAnswer2, dropDownButton2);
closeQuestionEsc(closeQuestion2, faqAnswer2, dropDownButton2);

expandQuestion(dropDownButton3, faqAnswer3, closeQuestion3);
closeQuestion(closeQuestion3, faqAnswer3, dropDownButton3);
closeQuestionEsc(closeQuestion3, faqAnswer3, dropDownButton3);

expandQuestion(dropDownButton4, faqAnswer4, closeQuestion4);
closeQuestion(closeQuestion4, faqAnswer4, dropDownButton4);
closeQuestionEsc(closeQuestion4, faqAnswer4, dropDownButton4);

expandQuestion(dropDownButton5, faqAnswer5, closeQuestion5);
closeQuestion(closeQuestion5, faqAnswer5, dropDownButton5);
closeQuestionEsc(closeQuestion5, faqAnswer5, dropDownButton5);

expandQuestion(dropDownButton6, faqAnswer6, closeQuestion6);
closeQuestion(closeQuestion6, faqAnswer6, dropDownButton6);
closeQuestionEsc(closeQuestion6, faqAnswer6, dropDownButton6);

expandQuestion(dropDownButton7, faqAnswer7, closeQuestion7);
closeQuestion(closeQuestion7, faqAnswer7, dropDownButton7);
closeQuestionEsc(closeQuestion7, faqAnswer7, dropDownButton7);
