// content.js

// Ouve mensagens vindas do background script
browser.runtime.onMessage.addListener((message) => {
    if (message.action === "changeBackgroundColor") {
      // Gera uma cor aleatória
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
      // Muda a cor de fundo do <body> da página
      document.body.style.backgroundColor = randomColor;
  
      console.log("Cor de fundo alterada para: " + randomColor);
    }
  });