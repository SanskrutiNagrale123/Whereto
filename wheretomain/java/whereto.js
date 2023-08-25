

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".horizontal-scroll-container");
  container.addEventListener("scroll", () => {
    container.scrollLeft = Math.round(container.scrollLeft / container.clientWidth) * container.clientWidth;
  });
});



const locations = [
  "Paris, France",
  "Tokyo, Japan",
  "New York, USA",
  "Sydney, Australia",
  "London, UK"
  // Add more location suggestions here
];

const locationInput = document.getElementById("locationInput");
const suggestionsList = document.getElementById("suggestions");

locationInput.addEventListener("input", function() {
  const inputText = this.value.toLowerCase();
  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(inputText)
  );

  suggestionsList.innerHTML = "";

  filteredLocations.forEach(location => {
    const listItem = document.createElement("li");
    listItem.textContent = location;
    listItem.addEventListener("click", function() {
      locationInput.value = location;
      suggestionsList.innerHTML = "";
    });
    suggestionsList.appendChild(listItem);
  });
});

document.addEventListener("click", function(event) {
  if (!locationInput.contains(event.target) && !suggestionsList.contains(event.target)) {
    suggestionsList.innerHTML = "";
  }
});