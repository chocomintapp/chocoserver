import * as admin from "firebase-admin";
admin.initializeApp();

interface FunctionNames {
  [key: string]: string;
}

const functionNames: FunctionNames = {
  updateMetadata: "./functions/updateMetadata",
};

for (const functionName in functionNames) {
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(functionNames[functionName]);
  }
}
