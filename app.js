const form = document.getElementById('registrar');
const list = document.getElementById('invitedList');
form.addEventListener('submit', e => {
  // stop default refresh and sending 
  e.preventDefault()
  // creating list item
  const listItem = document.createElement('li'); 
  const span = document.createElement('span');
  const input = document.querySelector('input').value;
  span.textContent = input;
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
    const textField = document.createElement('input');
    textField.type = 'text'
    
    if(e.target.textContent === 'Edit'){
      const span = listItem.firstElementChild
    textField.value = span.textContent;
    listItem.insertBefore(textField, span);
    listItem.removeChild(span)
    // save button
    edit.textContent = 'Save'
    }else if(e.target.textContent === 'Save'){
     const textField = listItem.firstElementChild;
     span.textContent = textField.value;
     listItem.insertBefore(span, textField);
     listItem.removeChild(textField)
     edit.textContent = 'Edit'
    }
  })
  // appending items to their parents
  listItem.appendChild(span)
  listItem.appendChild(label)
  listItem.appendChild(edit)
  listItem.appendChild(remove);
  list.appendChild(listItem);
})


  
  
  
  
  
  