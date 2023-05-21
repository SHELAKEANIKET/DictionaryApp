const getMeaning = (inputWord) => {
  let word = inputWord;
  let url = " https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
  let segements = url.split("/");
  segements[segements.length - 1] = "" + word;
  let newurl = segements.join("/");

  fetch(newurl)
    .then((apidata) => {
      // console.log(apidata)
      return apidata.json();
    })
    .then((actualdata) => {
      console.log(actualdata[0].meanings[0].definitions[0].definition);
      document.getElementById("meaning").innerHTML =
        actualdata[0].meanings[0].definitions[0].definition;
    })
    .catch((error) => {
      console.log("The Error is: " + error);
    });
};
search_button.addEventListener("click", (e) => {
  e.preventDefault();
  getMeaning(search_input.value);
});
