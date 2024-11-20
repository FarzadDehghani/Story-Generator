// Arrays for characters, places, and events
const characters = ["Ali", "Sara", "John", "Mina", "Jack"];
const places = ["forest", "castle", "beach", "mountain", "desert"];
const events = [
  "found a mysterious map",
  "met a talking animal",
  "discovered a hidden treasure",
  "got lost",
  "had an unexpected adventure"
];

// Function to generate a story
function generateStory() {
  const character = characters[Math.floor(Math.random() * characters.length)];
  const place = places[Math.floor(Math.random() * places.length)];
  const event = events[Math.floor(Math.random() * events.length)];

  // Final story
  return `${character} went to the ${place} and ${event}.`;
}

// Select HTML elements
const storyElement = document.getElementById("story");
const generateBtn = document.getElementById("generate-btn");

// Set click event on button to generate a new story
generateBtn.addEventListener("click", () => {
  storyElement.textContent = generateStory();
});
