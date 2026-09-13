(function () {
  [
    ['a11y', 'a11y'],
    ['privacy', 'privacy'],
    ['terms', 'terms']
  ].forEach(function (pair) {
    var modal = document.getElementById(pair[0] + '-modal');
    var openBtn = document.getElementById(pair[1] + '-open');
    var closeBtn = document.getElementById(pair[0] + '-close');
    if (!modal || !openBtn || !closeBtn) return;
    openBtn.addEventListener('click', function () { modal.showModal(); });
    closeBtn.addEventListener('click', function () { modal.close(); });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.close();
    });
  });
})();
