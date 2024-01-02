const stackContainer = document.getElementById("stack-container");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const maxStackSize = 5;
const statusMessage = document.getElementById("status-message");
const countMessage = document.getElementById("count-message");

block1.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "block1");
});

block2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "block2");
});

stackContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

stackContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");

  // Check if the stack is not full before adding a new block
  if (stackContainer.childElementCount < maxStackSize) {
    if (data === "block1") {
      const newBlock = block1.cloneNode(true);
      stackContainer.appendChild(newBlock);
    } else if (data === "block2") {
      const newBlock = block2.cloneNode(true);
      stackContainer.appendChild(newBlock);
    }
  }

  updateStatus();
});

stackContainer.addEventListener("dblclick", (e) => {
  if (
    e.target.classList.contains("block1") ||
    e.target.classList.contains("block2")
  ) {
    stackContainer.removeChild(e.target);
    updateStatus();
  }
});

// Function to get the current stack size
function getStackSize() {
  return stackContainer.childElementCount;
}

// Function to update the status (count and message) based on the stack size
function updateStatus() {
  const currentStackSize = getStackSize();
  countMessage.textContent = `Count: ${currentStackSize}`;

  if (currentStackSize === 0) {
    statusMessage.textContent = "Stack is empty.";
  } else if (currentStackSize === maxStackSize) {
    statusMessage.textContent = "Stack is full.";
  } else {
    statusMessage.textContent = "";
  }
}

// Initial update of status
updateStatus();
