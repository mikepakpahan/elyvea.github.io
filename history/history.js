// Data dump untuk histori transaksi
const transactionHistory = [
  {
    date: "2024-12-01",
    item: "Irish Whisper",
    amount: "Rp 390.000",
    status: "Successful",
  },
  {
    date: "2024-11-28",
    item: "Rose Mirage",
    amount: "Rp 450.000",
    status: "Pending",
  },
  {
    date: "2024-11-25",
    item: "Iron Eclipse",
    amount: "Rp 299.000",
    status: "Successful",
  },
];

// Fungsi untuk menampilkan histori transaksi di HTML
function displayHistory() {
  const historyList = document.getElementById("historyList");
  transactionHistory.forEach((transaction) => {
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = `
        <p><strong>Date:</strong> ${transaction.date}</p>
        <p><strong>Item:</strong> ${transaction.item}</p>
        <p><strong>Amount:</strong> ${transaction.amount}</p>
        <p class="date"><strong>Status:</strong> ${transaction.status}</p>
      `;
    historyList.appendChild(historyItem);
  });
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayHistory);

// Fungsi untuk dropdown menu
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuItems = document.querySelectorAll(".dropdown-menu li a");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtn.classList.toggle("rotate", isOpen);
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropDownMenu.classList.remove("open");
  });
});
