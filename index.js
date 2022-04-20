if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://github.com/Mayur3145/PWA_Application/serviceworker.js')
  .then((registration) => {
  console.log("service worker registered")
  })
  .catch((err) => {
  console.log("sw registraration "+ err)
  });
  } 
