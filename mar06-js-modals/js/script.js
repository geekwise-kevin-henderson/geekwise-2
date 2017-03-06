var modal = document.getElementById('modal');

function createModal(modalType, modalMsg){
    modal.classList.add('active');
    var modalForm = document.createElement('form');
    var modalMessage = document.createElement('p');
    var modalInput = document.createElement('input');
    var modalDiv = document.createElement('div');
    var modalConfirm = document.createElement('input');
    var modalCancel = document.createElement('input');

    modalMessage.textContent = modalMsg;

    modal.appendChild(modalForm);

    modalInput.type = 'text';
    modalInput.placeholder = 'Your Response';
    modalConfirm.type = 'submit';
    modalConfirm.value = 'Confirm';
    modalCancel.type = 'button';
    modalCancel.value = 'Cancel';

    modalForm.appendChild(modalMessage);
    if(modalType === 'prompt'){
        modalConfirm.addEventListener('click', function(evt){
          var userInput = modalInput.value;
          console.log(userInput);
        });
        modalForm.appendChild(modalInput);
        modalDiv.appendChild(modalCancel);
    }else if(modalType === 'confirm'){
        modalDiv.appendChild(modalCancel);
    }
    modalCancel.addEventListener('click', function(){
      console.log(false);
      modal.removeChild(modalForm);
      modal.classList.remove('active');
    });
    modalConfirm.addEventListener('click', function(evt){
      modal.removeChild(modalForm);
      modal.classList.remove('active');
      console.log(true);
      evt.preventDefault();
    });
    modalDiv.appendChild(modalConfirm);
    modalForm.appendChild(modalDiv);

    modalCancel.addEventListener('click', function(){
        console.log('user clicked cancel');
        modal.removeChild(modalForm);
        modal.classList.remove('active');
    });
    modalConfirm.addEventListener('click', function(evt){
        evt.preventDefault();
        var userInput = modalInput.value;
        console.log(userInput);
    });
}
