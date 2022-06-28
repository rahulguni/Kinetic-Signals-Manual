function updateUrls() {
  const links = document.querySelectorAll(
    'a[href*="q-free-asa-kinetic-documentation.readthedocs-hosted.com"]'
  );

  links.forEach((link) => {
    const href = link.href;
    link.href = '/docs' + href.substring(href.indexOf('.com') + 4);
  });
}

setInterval(() => {
  updateUrls();
}, 1000);
updateUrls();
