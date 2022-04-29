(async () => {
  function app() {
    window.addEventListener("DOMContentLoaded", (e) => {
      const result = document.querySelector("#results");
      const numOne = document.querySelector("#numOne");
      const numTwo = document.querySelector("#numTwo");
      const numThree = document.querySelector("#numThree");
      const submit = document.querySelector("#submit");
      const resultFromNodeAndC = document.querySelector("#resultFromNodeAndC");

      numOne.addEventListener("input", (_) => {
        result.textContent = values();
      });

      numTwo.addEventListener("input", (_) => {
        result.textContent = values();
      });

      numThree.addEventListener("input", (_) => {
        result.textContent = values();
      });

      submit.addEventListener("click", (_) => {
        const payload = currentResults();

        fetch("http://localhost:3000/api/add", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resultFromNodeAndC.textContent = data.result;
          })
          .catch((err) => {
            console.log(err);
            throw new Error(err);
          });
      });

      function values() {
        return `${inputValue(1)}, ${inputValue(2)}, ${inputValue(3)}`;
      }

      function currentResults() {
        return result.textContent.split(", ");
      }

      function inputValue(num) {
        if (num == 1) {
          return numOne.value;
        } else if (num == 2) {
          return numTwo.value;
        } else if (num == 3) {
          return numThree.value;
        } else {
          throw new Error("invalid input number");
        }
      }
    });
  }

  function runApp() {
    app();
  }

  runApp();
})();
