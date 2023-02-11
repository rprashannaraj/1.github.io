function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function fun() {
  location.reload();
  }
  
var selectedRow = null;
function onFormSubmit(e){
  event.preventDefault();
  var formData = readFormData();
  if(selectedRow === null){
      insertNewRecord(formData);
  }else{
      updateRecord(formData)
  }
  resetForm();
  }

function readFormData(){
  var formData = {};
  formData["dn"] = document.getElementById("dn").value;
  formData["dp"] = document.getElementById("dp").value;
  formData["dl"] = document.getElementById("dl").value;
  formData["dsl"] = document.getElementById("dsl").value;
  formData["ge"] = document.getElementById("ge").value;
  formData["ve"] = document.getElementById("ve").value;
  formData["vrn"] = document.getElementById("vrn").value;
  formData["vb"] = document.getElementById("vb").value;
  formData["vm"] = document.getElementById("vm").value;
  formData["yom"] = document.getElementById("yom").value;
  formData["vrt"] = document.getElementById("vrt").value;
  formData["cl"] = document.getElementById("cl").value;
  return formData;
}


function insertNewRecord(data){
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.dn;
  var cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.dp;
  var cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.dl;
  var cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.dsl;
  var cell5 = newRow.insertCell(4);
      cell5.innerHTML = data.ge;
  var cell6 = newRow.insertCell(5);
      cell6.innerHTML = data.ve;
  var cell7 = newRow.insertCell(6);
      cell7.innerHTML = data.vrn;
  var cell8 = newRow.insertCell(7);
      cell8.innerHTML = data.vb;
  var cell9 = newRow.insertCell(8);
      cell9.innerHTML = data.vm;
  var cell10 = newRow.insertCell(8);
      cell10.innerHTML = data.yom;
  var cell11 = newRow.insertCell(10);
      cell11.innerHTML = data.vrt;
  var cell12 = newRow.insertCell(11);
      cell12.innerHTML = data.cl;
  var cell13 = newRow.insertCell(12);
      cell13.innerHTML = `<a href="#" onClick='onEdit(this);openForm();'>Edit</a>
                      <a href="#" onClick='onDelete(this)'>Delete</a>`;
}



function resetForm(){
  document.getElementById('dn').value = '';
  document.getElementById('dp').value = '';
  document.getElementById('dl').value = '';
  document.getElementById('dsl').value = '';
  document.getElementById('ge').value = '';
  document.getElementById('ve').value = '';
  document.getElementById('vrn').value = '';
  document.getElementById('vb').value = '';
  document.getElementById('vm').value = '';
  document.getElementById('yom').value = '';
  document.getElementById('vrt').value = '';
  document.getElementById('cl').value = '';
  selectedRow = null;
}


function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById('dn').value = selectedRow.cells[0].innerHTML;
  document.getElementById('dp').value = selectedRow.cells[1].innerHTML;
  document.getElementById('dl').value = selectedRow.cells[2].innerHTML;
  document.getElementById('dsl').value = selectedRow.cells[3].innerHTML;
  document.getElementById('ge').value = selectedRow.cells[4].innerHTML;
  document.getElementById('ve').value = selectedRow.cells[5].innerHTML;
  document.getElementById('vrn').value = selectedRow.cells[6].innerHTML;
  document.getElementById('vb').value = selectedRow.cells[7].innerHTML;
  document.getElementById('vm').value = selectedRow.cells[8].innerHTML;
  document.getElementById('yom').value = selectedRow.cells[9].innerHTML;
  document.getElementById('vrt').value = selectedRow.cells[10].innerHTML;
  document.getElementById('cl').value = selectedRow.cells[11].innerHTML;
}
function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.dn;
  selectedRow.cells[1].innerHTML = formData.dp;
  selectedRow.cells[2].innerHTML = formData.dl;
  selectedRow.cells[3].innerHTML = formData.dsl;
  selectedRow.cells[4].innerHTML = formData.ge;
  selectedRow.cells[5].innerHTML = formData.ve;
  selectedRow.cells[6].innerHTML = formData.vrn;
  selectedRow.cells[7].innerHTML = formData.vb;
  selectedRow.cells[8].innerHTML = formData.vm;
  selectedRow.cells[9].innerHTML = formData.yom;
  selectedRow.cells[10].innerHTML = formData.vrt;
  selectedRow.cells[11].innerHTML = formData.cl;
}
function onDelete(td){
  if(confirm('Are you sure you want to delete this record?')){
      row = td.parentElement.parentElement;
      document.getElementById('employeeList').deleteRow(row.rowIndex);
      resetForm();
  }    
}








   