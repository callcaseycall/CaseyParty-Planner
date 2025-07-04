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

const showEventDetails = (event) => {};

const displayResults = async () => {
  const events = await eventDetails();
  $app = document.querySelector("#app");
  $h2 = document.createElement("h2");
  $h2.textContent = "Upcoming Events";
  $app.append($h2);

  for (let i = 0; i < events.data.length; i++) {
    $button = document.createElement("button");
    const eventData = events.data[i];

    $button.addEventListener("click", () => eventDetail(eventData.id));

    $button.textContent = `Event ${i + 1} ${eventData.name}`;

    $app.append($button);
  }
};

displayResults();
