const stackContainer = document.getElementById("stack-container");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");

block1.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "block1");
});

block2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "block2");
});

stackContainer.addEventListener("dragover", (e) => {
  e.preventDefault(); // ต้องป้องกันการเกิดเหตุการณ์นี้เพื่อให้สามารถวางได้
});

stackContainer.addEventListener("drop", (e) => {
  e.preventDefault(); // ป้องกันการเกิดเหตุการณ์ปกติของการวาง
  const data = e.dataTransfer.getData("text/plain");
  if (data === "block1") {
    const newBlock = block1.cloneNode(true); // สร้างโคลนของบล็อก
    stackContainer.appendChild(newBlock); // วางบล็อกลงในสแต็ก
  }
});

stackContainer.addEventListener("drop", (e) => {
  e.preventDefault(); // ป้องกันการเกิดเหตุการณ์ปกติของการวาง
  const data = e.dataTransfer.getData("text/plain");
  if (data === "block2") {
    const newBlock = block2.cloneNode(true); // สร้างโคลนของบล็อก
    stackContainer.appendChild(newBlock); // วางบล็อกลงในสแต็ก
  }
});

// เพิ่ม Event Listener สำหรับการลบด้วยการดับเบิลคลิก ในกรณีที่ต้องการลบบล็อกที่มีอยู่แล้วใน stackContainer
stackContainer.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("block")) {
    stackContainer.removeChild(e.target);
  }
});

