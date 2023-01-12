const init = () => {
  const inputForm = document.querySelector("form"); //We want to make sure the JavaScript we write executes when the DOM is fully loaded. Any code related to DOM manipulation should either go in init or in a function called within init. In our case, we want to add an event listener to the form element. We would first target the DOM element we want:

  inputForm.addEventListener("submit", (event) => {
    const input = document.querySelector("#searchByID");
    event.preventDefault();

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
