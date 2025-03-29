"use strict";

console.log("Hello, world from popup!");

function setBadgeText(enabled) {
    const text = enabled ? "ON" : "OFF";
    chrome.action.setBadgeText({ text: text });
}

// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled");
chrome.storage.sync.get("enabled", (data) => {
    checkbox.checked = !!data.enabled;
    setBadgeText(data.enabled);
});

checkbox.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        chrome.storage.sync.set({ "enabled": event.target.checked }, () => {
            startIntervalIfEnabled(); // Restart interval if enabled
        });
        setBadgeText(event.target.checked);
    }
});

// Handle the Speed switches
const fastCheckbox = document.getElementById("fast");
const normalCheckbox = document.getElementById("normal");
const slowCheckbox = document.getElementById("slow");

// Function to update and store speed mode
function updateSpeedMode(mode) {
    chrome.storage.sync.set({ "speedMode": mode }, () => {
        console.log(`Speed mode set to: ${mode}`);
        startIntervalIfEnabled(); // Restart with the new speed mode
    });
}

// Load speed settings
chrome.storage.sync.get("speedMode", (data) => {
    const speedMode = data.speedMode || "normal"; // Default to normal

    fastCheckbox.checked = speedMode === "fast";
    normalCheckbox.checked = speedMode === "normal";
    slowCheckbox.checked = speedMode === "slow";
});

// Event listeners for speed switches
fastCheckbox.addEventListener("change", () => {
    if (fastCheckbox.checked) {
        normalCheckbox.checked = false;
        slowCheckbox.checked = false;
        updateSpeedMode("fast");
    }
});

normalCheckbox.addEventListener("change", () => {
    if (normalCheckbox.checked) {
        fastCheckbox.checked = false;
        slowCheckbox.checked = false;
        updateSpeedMode("normal");
    }
});

slowCheckbox.addEventListener("change", () => {
    if (slowCheckbox.checked) {
        fastCheckbox.checked = false;
        normalCheckbox.checked = false;
        updateSpeedMode("slow");
    }
});
