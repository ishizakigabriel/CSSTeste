var style = '';
var myText;
var myField;
var myButton;
var myTable;
var tableRows = new Array();
var myTableContent;
var colorPicker;
var color;
var styleMessage = '';
var myStyle;

function onload() {
	tableRows = ['font-size: 30px;','font-family: arial;','width: 200px;','text-align:center;','background:#396fb3;','padding: 10px;','border-radius: 10px;','color: white;','border: 2px solid #2967b5;'];
	myText = document.getElementById('myText');
	myField = document.getElementById('tf1');
	myButton = document.getElementById('btn1');
	myTable = document.getElementById('myTable');
	colorPicker = document.getElementById('colorPicker');
	color = document.getElementById('color');
	color.value = colorPicker.value;
	buildTable();
}

function addItem() {
	tableRows.push(myField.value);
	buildTable();
}

function applyTheme() {
	style = '';
	for (var i = 0; i < tableRows.length; i++) {
		style += tableRows[i];
	}
	myText.style = style;
}

function clearTheme() {
	var clear = confirm("Deseja realmente apagar o tema?");
	if( clear ){
		style = '';
		tableRows.splice(0, tableRows.length);
		buildTable();
		myField.value = '';
		myText.style = style;
	} else {
		alert("Operação cancelada");
	}

}

function removeItem(index) {
	tableRows.splice(index, 1);
	buildTable();
}

function editItem(index) {
	var newValue = prompt("Digite o novo valor: ",tableRows[index]);
	if (newValue != null) {
		tableRows[index] = newValue;
		buildTable();
	} else {
		tableRows = tableRows;
		buildTable();
	}
}

function buildTable() {
	applyTheme();
	viewTheme();
	myTableContent = '';
	for (var i = 0; i < tableRows.length; i++) {
		if (i == 0) {
			myTableContent += "<tr><td>" + tableRows[i] + "</td><td><button class='button' onclick='removeItem(" + i + ")'>Remover Item</button></td><td><button class='button' onclick='editItem(" + i + ")'>Editar</button></td><td rowspan = '" + tableRows.length + "'><textarea disabled id='myStyle' rows='" + tableRows.length * 1.9 + "' cols='35'>" + styleMessage + "</textarea></td></tr>";
		} else {
			myTableContent += "<tr><td>" + tableRows[i] + "</td><td><button class='button' onclick='removeItem(" + i + ")'>Remover Item</button></td><td><button class='button' onclick='editItem(" + i + ")'>Editar</button></td></tr>";
		}
	}
	myField.value = '';
	myField.focus();
	myTable.innerHTML = myTableContent;
}

function changeColor() {
	color.value = colorPicker.value;
}

function copyToClipboard() {
	myStyle = document.getElementById('myStyle');
	myStyle.select();
	document.execCommand('copy');
}

function viewTheme() {
	styleMessage = '';
	for (var i = 0; i < tableRows.length; i++) {
		styleMessage += tableRows[i] + "\n";
	}
}

function enterKey(e) {
	if (e.keyCode == 13) {
		addItem();
	}
}

function changeText() {
	var newText = prompt("Deseja alterar o texto?", myText.innerHTML);
	if (newText != null) {
		myText.innerHTML = newText;
	}
}
