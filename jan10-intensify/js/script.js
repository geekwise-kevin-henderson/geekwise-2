var snOpen = document.getElementById('sn-open');
var snClose = document.getElementById('sn-Close');
var sn = document.getElementById('sn');

snOpen.addEventListener('click', snAnimOpen);

function snAnimOpen(){
  sn.classList.add('open');
}

snClose.addEventListener('click', snAnimClose);

function snAnimClose(){
  sn.classList.remove('open');
}
