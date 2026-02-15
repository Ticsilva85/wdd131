
const KEY = "reviewCount";

let count = Number(localStorage.getItem(KEY));

if (Number.isNaN(count)) {
  count = 0;
}

count += 1;

localStorage.setItem(KEY, String(count));

const span = document.getElementById("reviewCount");

if (span) {
  span.textContent = count; 
}


// Footer content (if using the common footer pattern)

// Update the current year
const year = document.getElementById("currentyear");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Display the document's last modified date
const last = document.getElementById("lastModified");
if (last) {
  last.textContent = `Last Modified: ${document.lastModified}`;
}
