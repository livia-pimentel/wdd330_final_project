function pad(valor) { // complete with leading zeros, if necessary
  return valor.toString().padStart(2, '0');
}

function formata(data) {
  return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
}

const reservationDate = document.querySelector('#rdate');

window.addEventListener('DOMContentLoaded', function() {
  var data = new Date(); // today
  reservationDate.min = formata(data);
  // 1 years ahead
  data.setFullYear(data.getFullYear() + 1);
  reservationDate.max = formata(data);
});


