export function dropdown() {
  const dropdown_button = document.getElementsByClassName("dropdown");
  const dropdown_content = document.getElementsByClassName("dropdown_content");
  const dropdown_contents = document.getElementById("dropdown_content");
  console.log(dropdown_button.length);
  for (let n = 0; n < dropdown_button.length; n++) {
    console.log(`Adding event listener to item ${n}`);
    dropdown_button.item(n).addEventListener("mouseover", (e) => {
      e.currentTarget
        .getElementsByClassName("dropdown_content")
        .item(0).style.display = "block";
    });
    dropdown_button.item(n).addEventListener("mouseout", (e) => {
      e.currentTarget
        .getElementsByClassName("dropdown_content")
        .item(0).style.display = "none";
    });
  }
}
