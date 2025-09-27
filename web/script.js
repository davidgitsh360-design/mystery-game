// script.js
// Change '3486' to your secret 4-digit code
const CODE_HASH = btoa('3486'); // light obfuscation

function checkCode(inputId, feedbackId) {
  const val = (document.getElementById(inputId).value || '').trim();
  const expected = atob(CODE_HASH);
  const fb = document.getElementById(feedbackId);

  if (val === expected) {
    fb.textContent = "Correct! Unlocking your reward…";
    fb.className = "feedback ok";
    setTimeout(() => {
      window.location.href = "page6.html";
    }, 800);
  } else {
    fb.textContent = "Not quite. Try again!";
    fb.className = "feedback err";
  }
}
