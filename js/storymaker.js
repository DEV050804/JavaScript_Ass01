// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher","The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a smily", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Functions

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to handle click on noun1 button
function noun1_on_click() {
    const randomNoun1 = getRandomWord(nouns1);
    choosenNoun1.textContent = randomNoun1;
}

// Function to handle click on verb button
function verb_on_click() {
    const randomVerb = getRandomWord(verbs);
    choosenVerb.textContent = randomVerb;
}

// Function to handle click on adjective button
function adjective_on_click() {
    const randomAdjective = getRandomWord(adjectives);
    choosenAdjective.textContent = randomAdjective;
}

// Function to handle click on noun2 button
function noun2_on_click() {
    const randomNoun2 = getRandomWord(nouns2);
    choosenNoun2.textContent = randomNoun2;
}

// Function to handle click on setting button
function setting_on_click() {
    const randomSetting = getRandomWord(settings);
    choosenSetting.textContent = randomSetting;
}

// Function to concatenate the user story and display
function concatenateStory() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    storyDisplay.textContent = story;
}

// Function to grab random element from arrays, concatenate, and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    concatenateStory();
}

// Function to add student ID/name dynamically
function addStudentInfo() {
    const studentId = "200552715"; 
    const studentIdParagraph = document.getElementById("studentId");
    studentIdParagraph.textContent = `Student ID: ${studentId}`;
}

// Call the function to add student info when the page loads
document.addEventListener("DOMContentLoaded", addStudentInfo);


// Event Listeners

// Event listener for noun1 button
noun1Button.addEventListener("click", noun1_on_click);

// Event listener for verb button
verbButton.addEventListener("click", verb_on_click);

// Event listener for adjective button
adjectiveButton.addEventListener("click", adjective_on_click);

// Event listener for noun2 button
noun2Button.addEventListener("click", noun2_on_click);

// Event listener for setting button
settingButton.addEventListener("click", setting_on_click);

// Event listener for playback button
playbackButton.addEventListener("click", concatenateStory);

// Event listener for random button
randomButton.addEventListener("click", random_on_click);
