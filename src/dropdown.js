export function dropdown() {
  const dropdown_button = document.getElementsByClassName("dropdown");

  for (let n = 0; n < dropdown_button.length; n++) {
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
