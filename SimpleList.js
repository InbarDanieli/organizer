/************************************************** 
remove the option to put "" item (or " " and so on)
add option to delete items without the web asing you if you want to delete everytime

make the not safe text look better
**************************************************/


//get html's elements
const warningtext = document.getElementById("warningtext")
const delButton = document.getElementById("buttonDel");
const buttonAdder = document.getElementById("ButtonAdder");
const ONOFFbutt = document.getElementById("OnOffButt");
const List = document.getElementById("List");
/** @type {HTMLInputElement} */
const input = document.getElementById("input");



function CreateList() {
  if (input.value === "") { return confirm('cannot add blank item') }
  const ListItem = document.createElement('li');
  List.appendChild(CreateItem(ListItem));
}


/**
 * 
 * @param {HTMLUListElement} list 
 * @returns 
 */
function CreateItem(list) {
  const Box = document.createElement('input');
  Box.type = "checkbox";
  list.appendChild(Box);

  const par = document.createElement('p');
  par.style.display = "inline"
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


// on/off button:
const warning = document.createElement("p");

ONOFFbutt.addEventListener('change', ()=> {
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


//by clicking a button:
buttonAdder.addEventListener('click', (Event) => { CreateList() });

//by press 'enter':
input.addEventListener('keypress', (k) => { if (k.key === 'Enter') { CreateList() } });
