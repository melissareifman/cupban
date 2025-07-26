googleScript = "https://script.google.com/macros/s/AKfycbwupMVsVaUJeEGDSMuDjBEX_PTVWyuC7KNV_v8vojBB4idSPLDhE8-vih_BaSNZWHLWaw/exec"

const form = document.getElementById("signupForm");

const overlay = document.createElement("div");
overlay.id = "loadingOverlay";
overlay.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
overlay.innerHTML = `
  <div style="
    width: 60px;
    height: 60px;
    border: 6px solid #ddd;
    border-top: 6px solid #6a0dad;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  "></div>
  <style>
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  </style>
`;
document.body.appendChild(overlay);


form.addEventListener("submit", (e) => {
  e.preventDefault();


  overlay.style.display = "flex";

  
  var formData = new FormData(form);

  fetch(googleScript, { method: "POST", body: formData })
    .then((response) => {
      // alert("Done", "Submitted Successfully.", "success");
      window.location.href = "thanks.html";
    })
    .catch((error) => {
      alert("Error", "Something went wrong. please try again!", "error");
    });
});
