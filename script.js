const skyFacts = [
    "The sky appears blue due to a phenomenon called Rayleigh scattering.",
    "Lightning strikes the Earth about 100 times every second!",
    "The highest cloud ever photographed was 50 miles above Earth's surface.",
    "Rainbows are actually complete circles, but we usually only see half from the ground.",
    "A sunset on Mars appears blue!",
    "The atmosphere contains about 78% nitrogen and 21% oxygen.",
    "Cloud formations can help predict weather patterns.",
    "The ozone layer is located in the stratosphere, about 15-35 km above Earth.",
    "Aurora borealis (Northern Lights) occur when solar particles interact with Earth's atmosphere.",
    "A typical cumulus cloud weighs around 1.1 million pounds!",
    "The sky doesn't actually have any color - it's an optical illusion.",
    "Stars twinkle because of the way light passes through Earth's atmosphere."
];

function getRandomFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * skyFacts.length);
    factElement.textContent = skyFacts[randomIndex];
}

// Display initial fact when page loads
getRandomFact();
