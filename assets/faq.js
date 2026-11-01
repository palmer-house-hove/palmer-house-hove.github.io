// Open the question a link points to, e.g. faq.html#bins
function openFromHash() {
  var el = location.hash && document.getElementById(location.hash.slice(1));
  if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
}
openFromHash();
window.addEventListener('hashchange', openFromHash);
