import "./styles.css";
import homepage from "./homepage";
import menupage from "./menupage";
import aboutpage from "./aboutpage";

homepage();

const navButtons = document.querySelectorAll("#nav button");

function clear() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

navButtons.forEach(page => {
    page.addEventListener("click", () => {
        const linkId = page.id;
        clear();

        navButtons.forEach(l => l.classList.toggle("active", l === page))

        if (linkId === "home") {
            homepage();
        } else if (linkId === "menu") {
            menupage();
        } else {
            aboutpage();
        }
    })
})