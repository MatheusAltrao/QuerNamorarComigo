function btnYes() {
  const buttonNo = document.getElementById('no')
  const message = document.getElementById('message')
  message.innerHTML = 'Diliça 💖😍😘🥰'

  buttonNo.classList.add('invisible')
}



function ramdomLocationButton() {
  const buttonNo = document.getElementById('no')
  const totalNumber = 300
  const numberRandom = Math.floor(Math.random() * totalNumber)


  buttonNo.style.position = 'absolute';
  buttonNo.style.top = '100px';
  buttonNo.style.left = '0px';


  var leftAtual = parseInt(buttonNo.style.left);
  var topAtual = parseInt(buttonNo.style.top);

  buttonNo.style.top = (topAtual + numberRandom) + 'px';
  buttonNo.style.left = (leftAtual + numberRandom) + 'px';


  console.log(numberRandom)
}







