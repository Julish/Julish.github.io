const button = document.getElementById("saveButton");
let tg = window.Telegram.WebApp;
tg.expand();

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
