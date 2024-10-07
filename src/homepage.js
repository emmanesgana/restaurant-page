import bgImage from "./assets/images/emma-houghton-XgCI2ExTr9I-unsplash.jpg"

export default function homepage() {

    // containers
    const content = document.querySelector("#content");

    const welcome = document.createElement("div");
    welcome.className = "welcome";
    content.appendChild(welcome);

    // background image
    const image = document.createElement("img");
    image.className = "hero-img";
    image.src = bgImage;
    content.appendChild(image);

    // welcome message
    const welcomeTitle = document.createElement("h1")
    const description = document.createElement("p");

    welcomeTitle.className = "welcome-title";
    description.className = "description"

    welcomeTitle.textContent = "Fresh and delicious";
    description.textContent = "Experience a cozy atmosphere with a menu crafted from fresh, locally sourced ingredients."

    welcome.appendChild(welcomeTitle);
    welcome.appendChild(description);
}



