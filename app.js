const button = document.getElementById("saveButton");
let tg = window.Telegram.WebApp;
tg.expand();


const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
  summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
  summaries.forEach((summary) => {
    let detail = summary.parentNode;
      if (detail != this.parentNode) {
        detail.removeAttribute('open');
      }
    });
}


function fillingInputs(inputs){inputs.forEach(input => {
		input.addEventListener('input', (event) =>{
			const value = event.target.value;
			const inputId = event.target.id[event.target.id.length-1]-1

			for (let i = inputId; i < inputs.length; i++){
				if (inputs[i] !== event.target) {
					inputs[i].value = value;
				}
			}
		})
	})
}


document.addEventListener('DOMContentLoaded',(event) =>{
	fillingInputs(document.querySelectorAll('.br'));
	fillingInputs(document.querySelectorAll('.ln'));
	fillingInputs(document.querySelectorAll('.sn'));
	fillingInputs(document.querySelectorAll('.dn'));
})



function readingIt(elements) {
	return Array.from(elements, element =>element.value);
};



button.addEventListener("click", () => {
	
	let breacfast_arr = readingIt(document.getElementsByClassName("br"));
	let lunch_arr = readingIt(document.getElementsByClassName("ln"));
	let snack_arr = readingIt(document.getElementsByClassName("sn"));
	let dinner_arr = readingIt(document.getElementsByClassName("dn"));

	let data = {
		breakfast: breacfast_arr,
		lunch: lunch_arr,
		snack: snack_arr,
		dinner: dinner_arr,
	};
	tg.sendData(JSON.stringify(data));
	tg.close();
});
