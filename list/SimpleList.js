//
// sidebar
//
const site = document.getElementById("sidebar")
const button = document.getElementById("OpenSB")

function changing() {
  if (site.classList.contains('close-sideB')) {
    site.classList.remove('close-sideB')
    site.classList.add('open-sideB')

    button.classList.remove('close')
    button.classList.add('open')
  }
  else {
    site.classList.remove('open-sideB')
    site.classList.add('close-sideB')

    button.classList.remove('open')
    button.classList.add('close')
  }
}

//
//ceate the list
//
const List = document.getElementById("List");
/** @type {HTMLInputElement} */
const input = document.getElementById("input");


function CreateList(inputInside) {
  if (inputInside.value === "") { return confirm('cannot add blank item') }
  List.appendChild(CreateItem(inputInside));
}
/**
 * 
 * @param {HTMLUListElement} list 
 * @returns 
 */
function CreateItem(input) {
  const list = document.createElement('li');
  const Box = document.createElement('input');
  Box.type = "checkbox";
  list.appendChild(Box);

  const par = document.createElement('p');
  par.style.display = "inline"
  par.style.fontSize = "20px"
  par.innerHTML = `${input.value}`;
  list.appendChild(par);
  input.value = "";


  Box.addEventListener('change', function () {
    if (Box.checked) {
      par.classList.add('changeToDel')
    }
    else {
      par.classList.remove('changeToDel')
    }
  });
  return list;
}

//
// on/off button:
//
const ONOFFbutt = document.getElementById("OnOffButt");
const warningtext = document.getElementById("warningtext")
const warning = document.createElement("p");

ONOFFbutt.addEventListener('change', () => {
  if (!ONOFFbutt.checked) {
    warning.id = "warning"
    warning.innerText = "safe mode if off, there be no alarm when deleting the items"
    warning.style.color = "red";
    warningtext.appendChild(warning)
  }
  else {
    warningtext.removeChild(warning)
  }
})


function deleteItems() {
  const ParArr = document.getElementsByClassName("changeToDel");
  const length = ParArr.length;
  if (length === 0) {
    return
  }

  if (ONOFFbutt.checked) {
    if (!confirm('are you sure you want to delete this items?')) {
      return
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    console.log(ParArr);
    const Delist = ParArr[i].parentElement;
    List.removeChild(Delist);
  }

}

//
//drop down
//
const inputDD = document.getElementById("inputDropDown")
const e = document.getElementById("items");
const Textoutput = document.getElementById("output");
const DivEditArea = document.getElementById("EditArea");

let DisAnble = true
  function show() {
    if (DisAnble === true) {
    Textoutput.value = e.options[e.selectedIndex].text;
    CreateList(Textoutput);
    e.selectedIndex =  0;
    }
  }


//add the items to the drop-down
function AddItem() {
  if (inputDD.value === "") {
    alert("cannot add blank value to your list")
  }
  else {
    const item = document.createElement('option');
    item.text = inputDD.value;
    e.appendChild(item);
    inputDD.value = "";
  }
}
inputDD.addEventListener("keypress", (k) => {
  if (k.key === 'Enter') {
    AddItem()
  }
})


function DelMultypulItems() {
  var selected = [];
  for (var option of e.options) {
    if (option.selected) {
      selected.push(option.index);
    }
  }
  let Number = selected.length
  console.log(Number);
  for (i = Number - 1; i >= 0; i--) {
    e.remove(selected[i]);
  }
}

//create Delete items button
const editButt = document.getElementById("EditButton")
const DelButton = document.createElement("button");
DelButton.id = "DelButton";
DelButton.innerHTML = "delete"
DelButton.addEventListener("click", () => {
  if (e.selectedIndex === -1) {
    alert("you need to select the item you want to delete")
    console.log(e.selectedIndex);
  }
  else {
    DelMultypulItems()
  }
})

//open edit area button
let tooltip = document.getElementById("ToolTip")
tooltip.style.visibility = "hidden"
var allform = document.querySelectorAll("#NonEditArea input, #NonEditArea button, #AddItemsElements input, #AddItemsElements button, #header");


function EditItems() {

  if (!editButt.classList.contains("open")) {
    tooltip.style.visibility = "visible"
    e.setAttribute("multiple", true);
    e.classList.add("DropDownMult");
    DivEditArea.appendChild(DelButton);
    DivEditArea.classList.add("EditArea");
    document.body.classList.add("Background");
    editButt.classList.add("EditButt");
    editButt.innerHTML = "X";
   DisAnble = false;
    for (let el of allform) { el.disabled = true; }
  }
  else {
    tooltip.style.visibility = "hidden"
    e.removeAttribute("multiple")
    e.classList.remove("DropDownMult")
    DivEditArea.removeChild(DelButton);
    DivEditArea.classList.remove("EditArea")
    document.body.classList.remove("Background");
    editButt.classList.remove("EditButt")
    editButt.innerHTML = "edit"
     DisAnble = true
    for (let el of allform) { el.disabled = false; }
  }
  editButt.classList.toggle("open")
  document.getElementById("CenterArea").classList.toggle("CenterArea")
}



//by clicking a button:
const buttonAdder = document.getElementById("ButtonAdder");

buttonAdder.addEventListener('click', (Event) => { CreateList(input) });

//by press 'enter':
input.addEventListener('keypress', (k) => { if (k.key === 'Enter') { CreateList(input) } });