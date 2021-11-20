import CryptoBlock from "./src/CryptoBlock.js";
import CryptoBlockchain from "./src/CryptoBlockchain.js";

let bgdshkaCoin = new CryptoBlockchain();

bgdshkaCoin.addNewBlock(
  new CryptoBlock(1, "01/01/2022", {
    sender: "Dedushka Moroz",
    recipient: "Kirill Ateev",
    quantity: 99999999999999,
  }),
);
bgdshkaCoin.addNewBlock(
  new CryptoBlock(2, "02/01/2022", {
    sender: "Kirill Ateev",
    recipient: "Dedushka Moroz",
    quantity: 100,
    text: "Thank you!",
  }),
);
bgdshkaCoin.addNewBlock(
    new CryptoBlock(3, "02/01/2022", {
      sender: "Kirill Ateev",
      recipient: "Alexander Karsakov",
      quantity: 100000,
    }),
  );
console.log(JSON.stringify(bgdshkaCoin, null, 4));
