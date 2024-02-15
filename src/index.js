function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault ();
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "130f33ffoc5t4fdc244afb86281fdf02";
    let prompt = `User's instructions: Generate a poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and seperate each line with a <br />. Make sure you follow the user's instructions. No title to the poem. Have a complimentary close at the end of the poem with a <strong> element 'SheCodes AI'.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
}    

    let poemFormElement = document.querySelector("#poem-generator-form");
    poemFormElement.addEventListener("submit", generatePoem);