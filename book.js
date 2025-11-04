const cartBtn = document.getElementById('cart-btn');
  const cartPanel = document.getElementById('cart-panel');
  const closeCart = document.getElementById('close-cart');

  cartBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('open');
  });

  closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
  });

  function openBookNow (button) {
     const image = button.getAttribute('data-image');
  const name = button.getAttribute('data-name');
  const original = button.getAttribute('data-original');
  const discounted = button.getAttribute('data-discounted');

  document.getElementById("productImg").src = image;
  document.getElementById("productTitle").textContent = name;
  document.querySelector(".discounted").textContent = "₹" + discounted;
  document.querySelector(".original").textContent = "₹" + original;
  document.querySelector(".book-container").style.display = "flex";
}

function closeBookNow() {
  document.querySelector('.book-container').style.display = 'none';
}

// function updatePreview() {
//   let text = document.getElementById("nameInput").value.trim();
//   document.getElementById("fontPreview").textContent = text || "Your Name";
// }
//  function updatePreview() {
//       const name = document.getElementById("nameInput").value.trim();
//       document.getElementById("fontPreview").textContent = name || "Your Name";
//     }
function updateFontPreview() {
  const input = document.getElementById('nameInput').value || "Your Name";
  const selectedFont = document.getElementById('fontSelect').value;
  const preview = document.querySelector('.font-preview');
  preview.style.fontFamily = selectedFont;
  preview.textContent = input;
}

document.getElementById('nameInput').addEventListener('input', updateFontPreview);

    function addToCart() {
      const name = document.getElementById("nameInput").value.trim();
      if (!name) {
        alert("Please enter a name before adding to cart!");
        return;
      }
      alert(`✅ "${name}" pendant added to your cart!`);
    }

    function bookNow() {
        const fileInput = document.getElementById('imageUpload');
        if (!fileInput.files.length) {
      alert("Please upload an image before confirming your order.");
      return;
    }
        const name = document.getElementById("nameInput").value.trim();
      alert(`Your booking request for the ‘${name}’ pendant has been received. We’ll verify the details and confirm your order shortly.`);
      closeUpiPopup()
    }
//     function openBookNow(imageSrc, title, discounted, original) {
//   // document.getElementById("bookNowImage").src = imageSrc;
//   document.getElementById("productTitle").textContent = title;
//   document.querySelector(".discounted").textContent = "₹" + discounted;
//   document.querySelector(".original").textContent = "₹" + original;
//   document.querySelector(".book-container").style.display = "flex";
// }

function closeBookNow() {
  document.querySelector(".book-container").style.display = "none";
}

function updatePreview() {
  let text = document.getElementById("nameInput").value.trim();
  document.getElementById("fontPreview").textContent = text || "Your Name";
}
function openUpiPopup() {
    const name = document.getElementById("nameInput").value.trim();
      if (!name) {
        alert("Please enter a name before booking!");
        return;
      }
  document.getElementById("upiPopup").style.display = "flex";
}

function closeUpiPopup() {
  document.getElementById("upiPopup").style.display = "none";
}


const popup = document.getElementById("popupOverlay");
    const errorMsg = document.getElementById("errorMsg");

    function openaddress() {
      popup.style.display = "flex";
    });

    function closePopup() {
      popup.style.display = "none";
      errorMsg.textContent = "";
    }

    function submitForm() {
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address1 = document.getElementById("address1").value.trim();
      const city = document.getElementById("city").value.trim();
      const state = document.getElementById("state").value.trim();
      const zip = document.getElementById("zip").value.trim();

      if (!name || !phone || !address1 || !city || !state || !zip) {
        errorMsg.textContent = "Please fill all required fields.";
        return;
      }

      errorMsg.textContent = "";
      alert("Shipping details submitted successfully!");
      
      closePopup();
      openUpiPopup();
    }
