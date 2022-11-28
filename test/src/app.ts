import LOTR from "lotr-sdk";
const client = new LOTR({
  apiKey: "JSuIoci7ekZ7Os6fxGlY",
});

client
  .getAllChaptersOfSingleBook("6091b6d6d58360f988133bc8")
  .then((res) => {
    console.log("All Books are: ", res);
  })
  .catch((err) => {
    console.log("Encountered error: ", err);
  });
