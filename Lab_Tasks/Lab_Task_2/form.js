function validateForm() {
  let fname = document.getElementById('fullname');
  let ema = document.getElementById('email');
  let phn = document.getElementById('phone');
  let add = document.getElementById('address');
  let cred = document.getElementById('ccn');
  let exp = document.getElementById('expirydate');
  let cv = document.getElementById('cvv');

  let fname_val = fname.value.trim();
  let ema_val = ema.value.trim();
  let phn_val = phn.value.trim();
  let add_val = add.value.trim();
  let cred_val = cred.value.trim();
  let exp_val = exp.value.trim();
  let cv_val = cv.value.trim();

  let fname_error = document.getElementById('fullnameError');
  let ema_error = document.getElementById('emailError');
  let phn_error = document.getElementById('phoneError');
  let add_error = document.getElementById('addressError');
  let cred_error = document.getElementById('ccnError');
  let exp_error = document.getElementById('expirydateError');
  let cv_error = document.getElementById('cvvError');

  let ans = true;

  if (!fname_val.match(/^[A-Za-z\s]+$/)) {
    fname_error.textContent = "Enter a Valid Name, Only alphabets allowed!";
    fname.style.borderColor = "red";
    ans = false;
  } else {
    fname_error.textContent = "";
    fname.style.borderColor = "";
  }

  if (!ema_val.includes('.')) {
    ema_error.textContent = "Enter a Valid Email";
    ema.style.borderColor = "red";
    ans = false;
  } else {
    ema_error.textContent = "";
    ema.style.borderColor = "";
  }

  if (isNaN(phn_val)) {
    phn_error.textContent = "Enter a valid phone number.";
    phn.style.borderColor = "red";
    ans = false;
  } else {
    phn_error.textContent = "";
    phn.style.borderColor = "";
  }

  if (add_val === "") {
    add_error.textContent = "Address is required.";
    add.style.borderColor = "red";
    ans = false;
  } else {
    add_error.textContent = "";
    add.style.borderColor = "";
  }

  if (isNaN(cred_val)) {
    cred_error.textContent = "Credit card must be numeric.";
    cred.style.borderColor = "red";
    ans = false;
  } else {
    cred_error.textContent = "";
    cred.style.borderColor = "";
  }

  let currentDate = new Date();
  let expDate = new Date(exp_val);

  if (expDate < currentDate) {
    exp_error.textContent = "Expiry date cannot be in the past.";
    exp.style.borderColor = "red";
    ans = false;
  } else {
    exp_error.textContent = "";
    exp.style.borderColor = "";
  }

  if (isNaN(cv_val)) {
    cv_error.textContent = "CVV must be numeric.";
    cv.style.borderColor = "red";
    ans = false;
  } else {
    cv_error.textContent = "";
    cv.style.borderColor = "";
  }

  if (ans) {
    document.getElementById("successModal").style.display = "block";
    document.querySelector('form').reset(); 
    return false; 
  }

  return false; 
}

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("successModal").style.display = "none";
});


  function clearErrors() {
    document.getElementById('fullnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('ccnError').textContent = '';
    document.getElementById('expirydateError').textContent = '';
    document.getElementById('cvvError').textContent = '';
  
    document.getElementById('fullname').style.borderColor = '';
    document.getElementById('email').style.borderColor = '';
    document.getElementById('phone').style.borderColor = '';
    document.getElementById('address').style.borderColor = '';
    document.getElementById('ccn').style.borderColor = '';
    document.getElementById('expirydate').style.borderColor = '';
    document.getElementById('cvv').style.borderColor = '';
  }