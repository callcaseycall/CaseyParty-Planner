const eventDetails = async () => {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-FTB-CT-WEB-PT/events"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const eventDetail = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-FTB-CT-WEB-PT/events/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const showEventDetails = (event) => {
  const $detailsBox = document.querySelector("#details");
  $detailsBox.innerHTML = `
  <h3>${event.name}</h3>
  <p><strong>ID:</strong> ${event.id}</p>
  <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
  <p><strong>Description:</strong> ${event.description}</p>
  <p><strong>Location:</strong> ${event.location}</p>
  `;
};

const displayResults = async () => {
  const events = await eventDetails();
  const $app = document.querySelector("#app");
  $app.innerHTML = "";

  const $h2 = document.createElement("h2");
  $h2.textContent = "Upcoming Events";
  $app.append($h2);

  const $detailsBox = document.createElement("div");
  $detailsBox.id = "details";
  $app.append($detailsBox);

  for (let i = 0; i < events.data.length; i++) {
    $button = document.createElement("button");
    const eventData = events.data[i];

    $button.addEventListener("click", async () => {
      const result = await eventDetail(eventData.id);
      if (result.data) {
        showEventDetails(result.data);
      }
    });

    $button.textContent = `Event ${i + 1} ${eventData.name}`;
    $app.append($button);
  }
};

displayResults();
