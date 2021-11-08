/** @type {HTMLUListElement} */
const list = document.getElementById("List");
const ButtonL = document.getElementById("ButtonList");
/** @type {HTMLInputElement} */
const input = document.getElementById("InputList");

//create delete button:
function createButt(li) {
  const butt = document.createElement('button');
  butt.textContent = 'done';
  butt.addEventListener('click', (Event)=> {
    if(confirm('are you sure you want to delete this item?'))
    {
      list.removeChild(li); 
    }
  })
  return butt;
}


//create item in the list:
function createlist(){
  const Creatli = document.createElement('li');
   Creatli.innerHTML = `${input.value} `;
   Creatli.appendChild(createButt(Creatli));
   list.appendChild(Creatli);
   input.value = "";
   }

   //by clicking a button:
  ButtonL.addEventListener('click', createlist);

  //by press 'enter':
  input.addEventListener('keypress', (k)=>
  { if(k.key === 'Enter') {createlist()} });