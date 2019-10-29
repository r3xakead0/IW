import app from "./app";
import "@babel/polyfill";

// Starting
async function main() {
  await app.listen(app.get('port'));
  console.log('Server is in port', app.get('port'));
}

main();
