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


function autofillInputs(inputs, checkbox) {
            inputs.forEach((input, index) => {
                input.addEventListener('blur', (event) => {
                	const value = event.target.value;
                    
                    // Заполняем только нижние элементы
                    for (let i = index + 1; i < 7; i++) {
                    	if (inputs[i].value !== value && !checkbox[index].checked) {
                        	inputs[i].value = value;
                        	inputs[i].dataset.value = 'auto';
                        }
                    }
                });
            });
        }


document.addEventListener('DOMContentLoaded', () => {
    autofillInputs(Array.from(document.querySelectorAll('.br')), Array.from(document.querySelectorAll('[id^="ch_br"]')));
    autofillInputs(Array.from(document.querySelectorAll('.ln')), Array.from(document.querySelectorAll('[id^="ch_ln"]')));
    autofillInputs(Array.from(document.querySelectorAll('.sn')), Array.from(document.querySelectorAll('[id^="ch_sn"]')));
    autofillInputs(Array.from(document.querySelectorAll('.dn')), Array.from(document.querySelectorAll('[id^="ch_dn"]')));
    
});

//передача данных телеге в формате json
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
