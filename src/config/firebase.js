const admin = require("firebase-admin");
const serviceAccount = require("./firebase-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "TU_BUCKET_NAME.appspot.com", // Reemplaza por tu bucket real
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
