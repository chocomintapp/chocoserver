import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

module.exports = functions.pubsub.schedule("every 1 minutes").onRun((context) => {
  console.log("sync");
});
