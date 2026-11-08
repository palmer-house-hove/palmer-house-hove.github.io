// Info tooltips: hover on desktop, tap to toggle on touch screens
document.querySelectorAll('.info').forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    var wrap = button.parentElement;
    var open = !wrap.classList.contains('open');
    closeAll();
    wrap.classList.toggle('open', open);
    button.setAttribute('aria-expanded', open);
  });
});

function closeAll() {
  document.querySelectorAll('.info-wrap.open').forEach(function (wrap) {
    wrap.classList.remove('open');
    wrap.querySelector('.info').setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', closeAll);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeAll();
});
