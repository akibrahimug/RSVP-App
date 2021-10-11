const form = document.getElementById('registrar');
const list = document.getElementById('invitedList');


form.addEventListener('submit', e => {
  // stop default refresh and sending 
  e.preventDefault()
  // creating list item
  const listItem = document.createElement('li'); 
  const input = document.querySelector('input').value;
  listItem.textContent = input;

  // confirmed
  const label = document.createElement('label');
  label.textContent = 'Confirmed'
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
//  confirmed click handler
  checkbox.addEventListener('change', e => {
    const checked = checkbox.checked
    if(checked){
      listItem.className = 'responded'
    }else{
      listItem.className = ''
    }
  })

  // Remove button
  const remove = document.createElement('button')
  remove.textContent = 'Remove'
  // remove click handler
  remove.addEventListener('click', e => {
    listItem.remove()
  })
  // Edit button
  const edit = document.createElement('button')
  edit.textContent = 'Edit'
  // edit click handler
  edit.addEventListener('click', e => {
    const textarea = document.createElement('textarea');
    console.log(textarea)
  })
  // appending items to their parents
  listItem.appendChild(label)
  listItem.appendChild(edit)
  listItem.appendChild(remove);
  list.appendChild(listItem);
})


  
  
  
  
  
  