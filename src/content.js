setInterval(() => {

  const data = {
    date: new Date()
  };

  chrome.runtime.sendMessage(data);

}, 1000);
