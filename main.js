const container = document.getElementById("user-container");
for(let person of data.results){
    const card = document.createElement("div");

    card.classList.add("user-card");

    card.innerHTML = `

        <img src="${person.picture.large}">
        <h2>${person.name.first} ${person.name.last}</h2>
        <p>Email: ${person.email}</p>
        <p>Phone: ${person.phone}</p>
        <p>City: ${person.location.city}</p>

    `;

    container.appendChild(card);

}