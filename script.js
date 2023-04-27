const inputBox = document.querySelector("input");
const resultDiv = document.querySelector("#output-container");
const addTaskButton = document.querySelector("button");
const invalidMessageCont = document.querySelector("#invalid-message");
const DeleteTaskButton = document.querySelectorAll(".delete-task-btn");
const checkButton = document.querySelectorAll(".check-btn");

function removeTask(element) {
  element.parentNode.style.display = "none";
}
function markButtonCheck(element) {
  element.classList.toggle("bg-gradient-to-r");
  element.classList.toggle("from-[#57ddff]");
  element.classList.toggle("to-[#c058f3]");
}

function displayTask() {
  if (inputBox.value.length > 0) {
    const enteredText = inputBox.value;
    resultDiv.innerHTML += `      <div
    class="block bg-slate-50 p-2 min-w-[100%] max-w-fit flex items-center rounded-b-md border-b-[2.5px]"
  >
    <button
      class="bg-slate-100 flex items-center justify-between rounded-full flex-grow-0 flex-shrink-0 check-btn drop-shadow-sm"
      onclick="markButtonCheck(this)"
    >
      <img
        src="../images/icon-check.svg"
        class="m-3 flex justify-center items-center"
        alt=""
      />
    </button>
    <p class="hyphens-auto p-3 pr-[30px] text-justify">
    ${enteredText}
    </p>
    <button
      class="p-1 absolute right-[5px] delete-task-btn bg-slate-100 rounded-full drop-shadow-sm focus:drop-shadow-lg active:scale-75"
      onclick="removeTask(this)"
    >
      <img class="w-4 block m-2" src="../images/icon-cross.svg" alt="" />
    </button>
  </div>`;
    inputBox.value = "";
  } else {
    // TODO
    invalidMessageCont.classList.remove("hidden");
    invalidMessageCont.innerHTML = "Please enter valid input";
    inputBox.focus();
    setTimeout(() => {
      invalidMessageCont.classList.add("hidden");
    }, 2000);
  }
}

addTaskButton.addEventListener("click", displayTask);
window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    displayTask();
  }
});
