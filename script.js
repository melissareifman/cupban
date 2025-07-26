
document.addEventListener('DOMContentLoaded', () => {
  const rolesSelect = document.getElementById('roles');
  const otherInput = document.getElementById('otherRole');

  rolesSelect.addEventListener('change', () => {
    const selectedValues = Array.from(rolesSelect.selectedOptions).map(o => o.value);
    if (selectedValues.includes('other')) {
      otherInput.style.display = 'block';
      otherInput.required = true;
    } else {
      otherInput.style.display = 'none';
      otherInput.required = false;
      otherInput.value = ''; // clear field if hidden
    }
  });
});


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
      // Hide the loader
    overlay.style.display = "none";

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    // Replace the entire split-layout content with a thank-you message
    const layout = document.querySelector(".split-layout");
    
    layout.innerHTML = `
      <div class="thank-you">
        <h1>Got it!</h1>
        <h1>Stay tuned for an update soon...</h1>
      </div>
    `;
    })
    .catch((error) => {
      alert("Error", "Something went wrong. please try again!", "error");
    });
});
