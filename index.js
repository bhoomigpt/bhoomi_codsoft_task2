let name =
                document.getElementById("nameInput").value;
            let email =
                document.getElementById("emailInput").value;
            let mobile =
                document.getElementById("numberInput").value;
            let address =
                document.getElementById("addressInput").value;
            
            // Get the table and insert a new row at the end
            let table = document.getElementById("outputTable");
            let newRow = table.insertRow(table.rows.length);
            
            // Insert data into cells of the new row
            newRow.insertCell(0).innerHTML = name;
            newRow.insertCell(1).innerHTML = email;
            newRow.insertCell(2).innerHTML = mobile;
            newRow.insertCell(3).innerHTML = address;
            newRow.insertCell(4).innerHTML =
                '<button onclick="editData(this)">Edit</button>'+
                '<button onclick="deleteData(this)">Delete</button>';
            
            
        }
  
        function editData(button) {
            
            
            let nameCell = row.cells[0];
            let emailCell = row.cells[1];
            let mobileCell = row.cells[2];
            let addressCell = row.cells[3];
            
            /
            nameCell.innerHTML = nameInput;
            emailCell.innerHTML = emailInput;
            mobileCell.innerHTML = numberInput;
            addressCell.innerHTML = addressInput;
        }
        function deleteData(button) {
            
            
        }
        function clearInputs() {
            
            
            document.getElementById("nameInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("numberInput").value = "";
            document.getElementById("addressInput").value = "";
        }