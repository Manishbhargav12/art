const cartBtn = document.getElementById('cart-btn');
  const cartPanel = document.getElementById('cart-panel');
  const closeCart = document.getElementById('close-cart');

  cartBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('open');
  });

  closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
  });
  let selectedProduct = null;
  function openBookNow (button) {
    window.scrollTo({ top: 0, behavior: "smooth" });
     const image = button.getAttribute('data-image');
  const name = button.getAttribute('data-name');
  const original = button.getAttribute('data-original');
  const discounted = button.getAttribute('data-discounted');
  const booking=button.getAttribute('data-booking');

  selectedProduct = {
    image,
    name,
    original,
    discounted,
    booking
  };

  document.getElementById("productImg").src = image;
  document.getElementById("productTitle").textContent = name;
  document.querySelector(".discounted").textContent = "₹" + discounted;
  document.querySelector(".original").textContent = "₹" + original;
  document.querySelector(".book-container").style.display = "flex";
  document.querySelector("#book-booking").textContent=booking;
  document.querySelector("#cod").textContent=booking;
  document.querySelector("#pay_amount").textContent=discounted;
  
  
  // DocumentFragment.querySelector("#pay_amount").textContent=booking;
}

function closeBookNow() {
  document.querySelector('.book-container').style.display = 'none';
  // const booking=button.getAttribute('data-booking');
  
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

    // function bookNow() {
    //     const fileInput = document.getElementById('imageUpload');
    //     if (!fileInput.files.length) {
    //   alert("Please upload an image before confirming your order.");
    //   return;
    // }
    //     const name = document.getElementById("nameInput").value.trim();
    //   alert(`Your booking request for the ‘${name}’ pendant has been received. We’ll verify the details and confirm your order shortly.`);
    //   closeUpiPopup();
    // ;
//     function openBookNow(imageSrc, title, discounted, original) {
//   // document.getElementById("bookNowImage").src = imageSrc;
//   document.getElementById("productTitle").textContent = title;
//   document.querySelector(".discounted").textContent = "₹" + discounted;
//   document.querySelector(".original").textContent = "₹" + original;
//   document.querySelector(".book-container").style.display = "flex";
// }



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
  document.body.style.overflow = "hidden";
}

function closeUpiPopup() {
  document.getElementById("upiPopup").style.display = "none";
  document.body.style.overflow = "auto";
}


// const popup = document.getElementById("popupOverlay");
    // const errorMsg = document.getElementById("errorMsg");

    // function openaddress() {

    //   closeBookNow()
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    //   // popup.style.display = "flex";
    //   document.body.style.overflowX = "hidden";
    // };

    // function closePopup() {
    //   // popup.style.display = "none";
    //   errorMsg.textContent = "";
    // }

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
      
      // closePopup();
      // openUpiPopup();
    }

    const openBtn = document.getElementById('openPopupBtn');
    const overlay = document.getElementById('addressOverlay');
    const closeBtn = document.getElementById('closePopupBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    // const choosePhoto = document.getElementById('choosePhoto');
    // const photoInput = document.getElementById('photoInput');
    // const photoPreview = document.getElementById('photoPreview');
    // const photoName = document.getElementById('photoName');
    // const photoError = document.getElementById('photoError');
    const formError = document.getElementById('formError');
    const confirmBtn = document.getElementById('confirmBtn');
    // const amountSpan = document.getElementById('productAmount');
    // const confirmAmountSpan = document.getElementById('confirmAmount');

    // Sync amounts (example)
    // confirmAmountSpan.textContent = amountSpan.textContent;

    // Open popup (button)
    // openBtn.addEventListener('click', () => {
    //   openPopup();
    // });

    // Close handlers
    closeBtn.addEventListener('click', ship_closePopup);
    cancelBtn.addEventListener('click', ship_closePopup);

    // Prevent overlay click from closing accidentally; only close via buttons
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        // ignore clicks outside modal to avoid accidental close on mobile
        // closePopup(); // uncomment if you want outside click to close
      }
    });

    // open/close helpers with scroll lock
    function openPopup() {

      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden'; // lock background scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function ship_closePopup() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = ''; // restore scroll
      clearFormErrors();
    }

    // Photo selection
    // choosePhoto.addEventListener('click', () => photoInput.click());
    // photoInput.addEventListener('change', handlePhoto);

    // function handlePhoto() {
    //   const f = photoInput.files && photoInput.files[0];
    //   photoError.style.display = 'none';
    //   photoName.textContent = 'No file chosen';
    //   photoPreview.innerHTML = ''; // clear preview
    //   if (!f) return;
    //   // Basic checks
    //   const allowed = ['image/jpeg','image/png','image/webp'];
    //   if (!allowed.includes(f.type)) {
    //     showPhotoError('Only JPG, PNG or WEBP allowed.');
    //     photoInput.value = '';
    //     return;
    //   }
    //   if (f.size > 5 * 1024 * 1024) {
    //     showPhotoError('File too large — max 5MB.');
    //     photoInput.value = '';
    //     return;
    //   }
    //   // preview
    //   const img = document.createElement('img');
    //   img.alt = 'Preview';
    //   photoPreview.appendChild(img);
    //   const reader = new FileReader();
    //   reader.onload = (ev) => img.src = ev.target.result;
    //   reader.readAsDataURL(f);

    //   photoName.textContent = f.name;
    // }

    // function showPhotoError(msg){
    //   photoError.style.display = 'block';
    //   photoError.textContent = msg;
    // }
    function clearFormErrors(){
      // photoError.style.display = 'none';
      formError.style.display = 'none';
      formError.textContent = '';
    }

    // Validation and submit (client-side)
    confirmBtn.addEventListener('click', () => {
      clearFormErrors();
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const postal = document.getElementById('postal').value.trim();
      const address1 = document.getElementById('address1').value.trim();
      const city = document.getElementById('city').value.trim();
      const state = document.getElementById('state').value.trim();
      // const country = document.getElementById('country').value;
      // const photo = photoInput.files && photoInput.files[0];

      if (!fullName) return showFormError('Full name is required.');
      if (!phone || phone.replace(/\D/g,'').length < 6) return showFormError('Valid phone is required.');
      if (!postal) return showFormError('Postal code is required.');
      if (!address1) return showFormError('Address line 1 is required.');
      if (!city) return showFormError('City is required.');
      if (!state) return showFormError('State is required.');

      // // Build payload (example)
      // const payload = {
      //   fullName, phone, postal, address1, address2: document.getElementById('address2').value.trim(),
      //   city, state,
        
      //   photoName: photo.name,
      //   // In production, you'd upload the file to server via FormData
    });

      // Simulate next step: proceed to UPI intent OR send to server
      // For now we show success and close. Replace with your API/upload flow.
      // confirmBtn.disabled = true;
      // confirmBtn.textContent = 'Processing...';

      // Simulated delay (replace with real upload/verification)
    //   setTimeout(() => {
    //     confirmBtn.disabled = false;
    //     confirmBtn.textContent = 'Confirm';
    //     alert('Details saved. Proceeding to payment (implement UPI intent/upload next).');
    //     ship_closePopup();
    //   }, 900);
    // });

    function showFormError(msg){
      formError.style.display = 'block';
      formError.textContent = msg;
      // scroll modal to top so user sees the error
      overlay.scroll({ top: 0, behavior: 'smooth' });
    }

    // Accessibility: close with Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closePopup();
    });

    // Ensure overlay is hidden at start (safety if inline style was forced)
    window.addEventListener('DOMContentLoaded', () => {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });


    // const overlay = document.getElementById('addressOverlay');
const previewName = document.getElementById('nameInput'); // name input before shipping

openBtn.addEventListener('click', () => {
  const nameValue = previewName.value.trim();

  if (!nameValue) {
    // visually show error or alert
    alert('Please enter your name in the pendant preview before continuing.');
    previewName.focus();
    previewName.style.border = '1px solid #e11d48'; // red border for feedback
    return; // stop popup
  }

  // if filled, reset any red border and open popup
  else{
  previewName.style.border = '';
  openPopup();}
});
const overlay1 = document.getElementById("overlay");
    const paymentbtn = document.getElementById("confirmBtn");
    const upiList = document.getElementById("upiList");
    const codNotice = document.getElementById("codNotice");

    paymentbtn.addEventListener("click", () => {
      overlay1.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    function pay_closePopup() {
      overlay1.classList.remove("open");
      document.body.style.overflow = "";
    }

    // upiList.addEventListener("click", (e) => {
    //   const target = e.target.closest(".upi-option");
    //   if (!target) return;
    //   document.querySelectorAll(".upi-option").forEach(opt => opt.classList.remove("selected"));
    //   target.classList.add("selected");
    // });
    

let fullamount = null; // global variable

document.querySelectorAll('.design-button').forEach(button => {
  button.addEventListener('click', () => {
    fullamount = button.getAttribute('data-discounted');
    console.log("Selected Price:", fullamount);
  });
});

let bookingamount = null; // global variable
document.querySelectorAll('.design-button').forEach(button => {
  button.addEventListener('click', () => {
    bookingamount = button.getAttribute('data-booking');
    console.log("Selected Price:", bookingamount);
  });
});

document.querySelectorAll("input[name='payType']").forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const confirm_amount=document.querySelector("#pay_amount")
    confirm_amount.textContent=selectedProduct.discounted
        // console.log("Selected payment type:", e.target.value);
        if (e.target.value === "cod") {
          codNotice.style.display = "block";
          confirm_amount.textContent=selectedProduct.booking

        } else {
          confirm_amount.textContent=selectedProduct.discounted
          codNotice.style.display = "none";
        }
      });
    });

    function confirmPayment() {
      // const selectedUPI = document.querySelector(".upi-option.selected");
      const paymentType = document.querySelector("input[name='payType']:checked").value;
      const payeeVPA = "BHARATPE.8002960419@fbpe"; // Replace with actual UPI ID
      const payeeName = "customized_artists"
      // amount=100
      // const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;
      
      if (paymentType === "cod") {
        amount=selectedProduct.booking
        const upiUrl = `upi://pay?pa=${encodeURIComponent(payeeVPA)}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(amount)}&cu=INR`;
        const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;
        document.getElementById("qrImg").src = qrApi;
        // document.getElementById("qrAmount").textContent = amount;
        // document.getElementById("bookPopup").style.display = "none";
        document.querySelector(".qr-popup").style.display = "flex";
        
      } else {
        amount=selectedProduct.discounted
        const upiUrl = `upi://pay?pa=${encodeURIComponent(payeeVPA)}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(amount)}&cu=INR`;
        const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;
        document.getElementById("qrImg").src = qrApi;
        // document.getElementById("qrAmount").textContent = amount;
        // document.getElementById("bookPopup").style.display = "none";
        document.querySelector(".qr-popup").style.display = "flex";
        alert(amount);
      }
      // pay_closePopup();
    }
  // const amount = 
  
    document.querySelector(".close-btn-qr").addEventListener("click", () => {
      document.querySelector(".qr-popup").style.display = "none";
    })
// Close popup
// function closePopup(id) {
//   document.getElementById(id).style.display = "none";
// }
