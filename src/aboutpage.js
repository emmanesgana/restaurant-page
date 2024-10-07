export default function aboutpage() {
    const content = document.querySelector("#content");
    const about = document.createElement("div");
    about.className = "about";
    content.appendChild(about);

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us"
    aboutTitle.className = "about-title";
    about.appendChild(aboutTitle)

    const aboutUs = document.createElement("p");
    aboutUs.className = "about-title";
    aboutUs.textContent = "Welcome to Niji Restaurant, where passion meets flavor! We specialize in crafting delicious, authentic dishes that blend traditional recipes with a modern twist. Our commitment to using fresh, locally sourced ingredients ensures that every meal is an unforgettable experience!";
    about.appendChild(aboutUs);

    const operatingTitle = document.createElement("h1");
    operatingTitle.textContent = "Operating Hours";
    operatingTitle.className = "operation-title";
    about.appendChild(operatingTitle);

    const operatingHours = document.createElement("p");
    operatingHours.textContent = "Monday to Friday: 12 nn - 12 mn";
    about.appendChild(operatingHours);

    const locationTitle = document.createElement("h1");
    locationTitle.textContent = "Location";
    locationTitle.className = "location-title";
    about.appendChild(locationTitle);

    const location = document.createElement("p");
    location.textContent = "At the nearest corner!";
    about.appendChild(location);
}