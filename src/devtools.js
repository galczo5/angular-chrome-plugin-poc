function createPanel(url) {
  chrome.devtools.panels.create(
    'DevTools', 'favicon.ico', url, function() {}
  );
}

createPanel('index.html');
