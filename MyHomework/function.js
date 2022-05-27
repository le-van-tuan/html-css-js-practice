	var table = document.getElementById("myTable");
	var isEdit = false;
	var editRowIndex;

	function addData(){
		if (isEdit) {
			document.getElementById("myTable").deleteRow(editRowIndex);

			var row  = table.insertRow(editRowIndex);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);

			cell2.innerHTML = document.getElementById("userName").value;
			cell3.innerHTML = document.getElementById("userAge").value;
			cell4.innerHTML = document.getElementById("userAddress").value;
			cell5.innerHTML = '<button style="background-color: red;" onclick="delRow(this)">Delete</button> <button style="background-color: yellow; color: black" onclick="editData(this)">Edit</button>';

			document.getElementById("buttonAdd").innerHTML = "Add";
			isEdit = false;
				
		} else {
			var row  = table.insertRow();
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);

			cell2.innerHTML = document.getElementById("userName").value;
			cell3.innerHTML = document.getElementById("userAge").value;
			cell4.innerHTML = document.getElementById("userAddress").value;
			cell5.innerHTML = '<button style="background-color: red;" onclick="delRow(this)">Delete</button> <button style="background-color: yellow; color: black" onclick="editData(this)">Edit</button>';
		}
	}

	function delRow(row){
		var node = row.parentNode.parentNode;
		node.remove();
	}

	function editData(button){
		var child = button.parentNode.parentNode;
		child = child.childNodes;

		document.getElementById("userName").value = child[1].innerHTML;
		document.getElementById("userAge").value = child[2].innerHTML;
		document.getElementById("userAddress").value = child[3].innerHTML;

		document.getElementById("buttonAdd").innerHTML = "Update";
		isEdit = true;
		editRowIndex = button.parentNode.parentNode.rowIndex;
	}

	function search(){
		
	}





























