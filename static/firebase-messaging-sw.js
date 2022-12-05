
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyCdqblQrtkdPyPojGHit140gfzqCwciibk","authDomain":"green-fuzz.firebaseapp.com","projectId":"green-fuzz","storageBucket":"green-fuzz.appspot.com","messagingSenderId":"978523991386","appId":"1:978523991386:web:f87eda3261d6d63096d763","measurementId":"G-T91D6XSG6N","databaseURL":"https:\u002F\u002Fgreen-fuzz-default-rtdb.europe-west1.firebasedatabase.app"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"Test","url":"Test"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
