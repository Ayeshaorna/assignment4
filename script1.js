// Array of available category short names
const categoryShortNames = ['Lunch', 'Dinner', 'Sushi', 'Breakfast', 'Desserts'];

// Randomly select a category
function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categoryShortNames.length);
    return categoryShortNames[randomIndex];
}

// Update the Specials link with a random category short name
function updateSpecialsLink() {
    const randomCategory = getRandomCategory();
    const specialsLink = document.querySelector("#specials-link");
    specialsLink.setAttribute('onclick', `$dc.loadMenuItems('${randomCategory}');`);
}

// Call the update function after the page loads
window.addEventListener("DOMContentLoaded", function () {
    updateSpecialsLink();
});
