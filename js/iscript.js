const iframe = document.querySelector('iframe');
iframe.width = window.innerWidth;
iframe.height = window.innerHeight;
iframe.setAttribute('src', 'https://ipfs.io/ipfs/QmTWsXeaoZ13WJY8psA2on9YQRhgPbNjWbi6VPYeu2xRFU/index.html');

iframe.addEventListener('mouseenter', activateIframe);
iframe.addEventListener('mouseleave', deactivateIframe);
iframe.addEventListener('click', redirectToPage);

function activateIframe() {
  // Code to activate the iframe on hover
  // For example, you can add a CSS class to apply a visual effect
  iframe.classList.add('active');
}

function deactivateIframe() {
  // Code to deactivate the iframe when the mouse leaves
  // Remove the CSS class or any other desired action
  iframe.classList.remove('active');
}

function redirectToPage() {
  // Code to redirect the page when the iframe is clicked
  window.location.href = 'https://example.com'; // Replace with the desired URL
}
