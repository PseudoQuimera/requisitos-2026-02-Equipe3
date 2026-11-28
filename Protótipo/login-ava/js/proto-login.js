(function () {
  var form = document.querySelector('form');
  var user = document.getElementById('username');
  var pass = document.getElementById('password');
  var err = document.getElementById('login-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.textContent = '';
    window.parent.postMessage({ type: 'sc-login', u: user.value, p: pass.value }, '*');
  });

  window.addEventListener('message', function (e) {
    var d = e.data || {};
    if (d.type === 'sc-fill') {            // atalho "Carregar" do protótipo
      user.value = d.u; pass.value = d.p; err.textContent = ''; pass.focus();
    } else if (d.type === 'sc-error') {
      err.textContent = d.msg;
    }
  });
})();
