document.querySelector("#qr-generate").addEventListener("click", handleQRCode);

function handleQRCode() {
  const input = document.querySelector("#input").value;
  if (!input) {
    alert("Please enter a value to generate a QR code.");
    return;
  }
  const code = document.querySelector("#code");
  new QRious({
    element: code,
    value: input,
  });
  code.style.display = "block";
}

