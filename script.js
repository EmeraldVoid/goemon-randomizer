document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.letterSpacing = "1px";
        });

        button.addEventListener("mouseout", () => {
            button.style.letterSpacing = "normal";
        });
    });
});
