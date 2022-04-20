if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://mayur3145.github.io/PWA_Application/serviceworker.js')
  .then((registration) => {
  console.log("service worker registered")
  })
  .catch((err) => {
  console.log("sw registraration "+ err)
  });
  } 
