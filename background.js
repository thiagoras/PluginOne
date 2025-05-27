// background.js

// Ouve cliques no botão da extensão na barra de ferramentas
browser.browserAction.onClicked.addListener(() => {
    // Envia uma mensagem para o content script da aba ativa
    // Apenas a aba ativa é afetada devido à permissão "activeTab"
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        action: "changeBackgroundColor"
      });
    });
  });