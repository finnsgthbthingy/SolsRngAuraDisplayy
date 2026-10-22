
function randomCaseText(str) {
    return str.split("").map(char => {
        if (/[a-z]/i.test(char)) {
            return Math.random() > 0.5
                ? char.toUpperCase()
                : char.toLowerCase();
        }
        return char;
    }).join("");
}

function initializeSwitchingCases() {
    document.querySelectorAll(".SwitchingCases").forEach(el => {
        if (el.dataset.switchingInitialized) return;

        el.dataset.switchingInitialized = "true";
        const originalText = el.textContent;

        setInterval(() => {
            el.textContent = randomCaseText(originalText);
        }, 100);
    });
}

const observer = new MutationObserver(() => {
    initializeSwitchingCases();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

initializeSwitchingCases();
