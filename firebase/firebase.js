import app from 'firebase/app'
import firebaseConfig from './config'

import 'firebase/firestore'

const firebase = app.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.settings({ experimentalForceLongPolling: true })

export { db }