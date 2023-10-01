let stack = [];
const display = document.getElementById("output");

const appendCharacter = (value) => {
	stack.push(value);
	updateDisplay();
};

const deleteLast = () => {
	if (stack.length > 0) {
		stack.pop();
		updateDisplay();
	}
};

const clearDisplay = () => {
	stack = [];
	updateDisplay();
};

const calculateResult = () => {
	try {
		const result = eval(stack.join(""));
		stack = [result.toString()];
		updateDisplay();
	} catch (error) {
		stack = ["Error"];
		updateDisplay();
	}
};

const updateDisplay = () => {
	display.value = stack.join("");
};
