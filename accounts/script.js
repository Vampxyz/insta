const openEye = document.getElementById("open");
const closeEye = document.getElementById("close");
const passwordInput = document.getElementById("password");
const logIn = document.getElementById("log-in");
const google = document.getElementById("google");
const facebook = document.getElementById("facebook");

// Password
passwordInput.addEventListener("input", () => {
  // Se a senha digitada tiver 4 ou mais caracteres, habilita o botão
  if (passwordInput.value.length >= 4) {
    logIn.disabled = false;
  } else {
    logIn.disabled = true;
  }
});

// Eyes
openEye.addEventListener("click", () => {
  password.type = "password";
  openEye.style.display = "none";
  closeEye.style.display = "block";
});

closeEye.addEventListener("click", () => {
  password.type = "text";
  openEye.style.display = "block";
  closeEye.style.display = "none";
});

// Log In
logIn.addEventListener("click", () => {
  window.location.href = "https://vampxyz.github.io/insta/profile/profile.html";
});

// Donwload
google.addEventListener("click", () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DED926A92-2CA1-43EB-B99A-A8C836AE32CE%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.instagram.com%2F";
});
microsoft.addEventListener("click", () => {
  window.location.href =
    "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C0%2C0";
});
