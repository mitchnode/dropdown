export function dropdown() {
  const dropdown_button = document.getElementsByClassName("dropdown");

  // Initialize dropdown
  const all_dropdown_content =
    document.getElementsByClassName("dropdown_content");
  for (let c = 0; c < all_dropdown_content.length; c++) {
    all_dropdown_content.item(c).style.display = "none";
  }

  // Set up Event listeners for hover function
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
