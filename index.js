window.onload = main;

function fizzbuzz(i) {
	if (i % 3 == 0) {
		if (i % 5 == 0) {
			return "Game Dev";
		} else {
			return "Game";
		}
	} else if (i % 5 == 0) {
		return "Dev";
	} else {
		return i.toString();
	}
}

function main() {
	var table = document.createElement("table");
	for (var r = 0, i = 1; r < 10; ++r) {
		var tr = document.createElement("tr");
		for (var c = 0; c < 10; ++c, ++i) {
			var td = document.createElement("td");
			var text = document.createTextNode(fizzbuzz(i));
			
			td.appendChild(text);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.getElementsByTagName("body")[0].appendChild(table);
}