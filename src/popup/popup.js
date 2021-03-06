document.addEventListener("click", e => {
  function handleResponse(message) {
    console.debug(`Message from the privileged script: ${message.response}`);
  }

  function handleError(error) {
    console.error(error);
  }

  function tellBackground(message) {
    const sending = browser.runtime.sendMessage(message);
    sending.then(handleResponse, handleError);
  }

  if (e.target.id === "browse-addons-button") {
    tellBackground({ "clicked-disco-button": true });
    // Ensure that the popup closes only after button click
    window.close();
  } else if (e.target.id === "close-button") {
    tellBackground({ "clicked-close-button": true });
    // Ensure that the popup closes only after button click
    window.close();
  }
});
