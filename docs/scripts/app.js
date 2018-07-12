(function() {
  'use strict';

  window.onload = function() {
    updateMessage();
  }

  function updateMessage() {
    let agent_email = localStorage.getItem("agent_email") || 'unknown';
    let agent_phone = localStorage.getItem("agent_phone") || 'unknown';
    let message = "Agent: " + agent_email + "/" + agent_phone;
    $('#message').html(message);
    $('#display').html(message);
  }

  $('#button').click(() => {
    console.log('click');
    let agent_phone = $('#agent_phone').val();
    let agent_email = $('#agent_email').val();
    console.log(agent_email);
    console.log(agent_phone);
    localStorage.setItem("agent_phone", agent_phone);
    localStorage.setItem("agent_email", agent_email);
    updateMessage();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
