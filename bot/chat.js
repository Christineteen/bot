const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-message');
const chatHistory = document.querySelector('.chat-history');

chatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = chatInput.value;
  addMessage('You', message);
  chatInput.value = '';
  getBotResponse(message);
});

function addMessage(sender, message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.textContent = `${sender}: ${message}`;
  chatHistory.appendChild(chatMessage);
}


function getBotResponse(message) {
  let botMessage = '';
  if (message.includes('sasa') || message.includes('hey') || message.includes('niaje')) {
      botMessage = 'poa...uko fiti?naweza kuhelp aje?';
  } else if (message.includes('niko bie nimekuwa na issues za adolescent') || message.includes('uko fiti')) {
      botMessage = 'manze izzah jooh! ni nini specifically?';
  } else if (message.includes('offlate nimekuwa nikiumwa na jegi alafu kwa uso nakaa kaa chapo')) {
      botMessage = 'umetry kuenda hosi?.';
  }  else if (message.includes('zii...hadi hakuna msee yeyote nimeshow')) {
      botMessage = 'okay....sijui utachukulia hii aje.But there is this stage inaitwa teenstage na hapa ndio waseee huchange kimwili meaning unatransform from childhood to adulthood';
  }  else if (message.includes('like what do you mean by being a teenstage?')) {
      botMessage = 'hiyo ni kutoka 14-18 years.';
  }  else if (message.includes('ooh..sikuwa najua at least nimelearn something.So unaweza niadvice aje?')) {
      botMessage = 'itabidii umekubali umekuwa grown up.Jegi itauma for a while but usikubali kuguzwa na msee na uchunge usiumie.Alafu about the pimples,normaliza kuosha uso kila siku na kupaka mafuta';
  }  else if (message.includes('manze umenihelp sana.Sir God akubless')) {
      botMessage = 'karibu.And you casn tell your friends wakidai kitu niko hapa.';
  } 
else {
      botMessage = 'manze sikuradi.';
  }
  addMessage('Bot', botMessage);
}




  

