import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

module.exports = functions.region("asia-northeast1").https.onCall(async (data, context) => {
  console.log("update");
});
