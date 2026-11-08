// Info tooltips: hover on desktop, tap to toggle on touch screens
document.querySelectorAll('.info').forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    var wrap = button.parentElement;
    var open = !wrap.classList.contains('open');
    closeAll();
    wrap.classList.toggle('open', open);
    button.setAttribute('aria-expanded', open);
    if (open) placeTip(wrap, button);
  });
});

// On phones the tooltip spans the table, so place it just below the icon
function placeTip(wrap, button) {
  var table = wrap.closest('.cost-table');
  if (!table) return;
  var top = button.getBoundingClientRect().bottom - table.getBoundingClientRect().top + 8;
  wrap.querySelector('.tip').style.setProperty('--tip-top', top + 'px');
}

function closeAll() {
  document.querySelectorAll('.info-wrap.open').forEach(function (wrap) {
    wrap.classList.remove('open');
    wrap.querySelector('.info').setAttribute('aria-expanded', 'false');
  });
}

// Tapping anywhere else closes tooltips. iOS Safari doesn't send clicks from
// plain page areas, so listen for pointerdown instead.
document.addEventListener('pointerdown', function (e) {
  if (!e.target.closest('.info-wrap')) closeAll();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeAll();
});
