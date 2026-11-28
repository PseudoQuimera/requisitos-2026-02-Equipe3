(function () {
  function initialize() {
    document.querySelectorAll('[data-password-toggle-target]').forEach(function (button) {
      const input = document.getElementById(button.dataset.passwordToggleTarget);
      if (!input) return;

      button.addEventListener('click', function () {
        const visible = input.type === 'password';
        input.type = visible ? 'text' : 'password';
        button.setAttribute('aria-pressed', String(visible));
        button.setAttribute('aria-label', visible ? button.dataset.labelHide : button.dataset.labelShow);
        const image = button.querySelector('img');
        if (image) image.src = visible ? button.dataset.iconHide : button.dataset.iconShow;
        const icon = button.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-eye', !visible);
          icon.classList.toggle('fa-eye-slash', visible);
        }
      });
    });

    const password = document.getElementById('password-new');
    const confirmation = document.getElementById('password-confirm');
    const submit = document.getElementById('submit-btn');
    const feedback = document.getElementById('password-feedback');
    if (password && confirmation && submit && feedback) {
      function validate() {
        submit.disabled = true;
        feedback.dataset.state = 'hint';
        if (!password.value && !confirmation.value) {
          feedback.textContent = '';
        } else if (!/^[0-9]{8}$/.test(password.value)) {
          feedback.textContent = feedback.dataset.lengthMessage;
        } else if (confirmation.value && password.value !== confirmation.value) {
          feedback.textContent = feedback.dataset.mismatchMessage;
          feedback.dataset.state = 'error';
        } else if (password.value === confirmation.value) {
          feedback.textContent = feedback.dataset.matchMessage;
          feedback.dataset.state = 'success';
          submit.disabled = false;
        } else {
          feedback.textContent = feedback.dataset.confirmMessage;
        }
      }
      password.addEventListener('input', validate);
      confirmation.addEventListener('input', validate);
      window.addEventListener('pageshow', validate);
      validate();
    }

    const deviceName = document.querySelector('[data-default-prefix]');
    if (deviceName && !deviceName.value) {
      const suffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      deviceName.value = deviceName.dataset.defaultPrefix + '-' + suffix;
    }

    const method = document.querySelector('.totp-method');
    if (method) {
      const options = method.querySelectorAll('[data-totp-method]');
      const manualPanel = document.getElementById('totp-manual-panel');
      const qrPanel = document.getElementById('totp-qr-panel');
      const methodHint = document.getElementById('totp-method-hint');
      const form = document.getElementById('kc-totp-settings-form');
      const submit = document.getElementById('saveTOTPBtn');

      function selectMethod(selected, updateForm) {
        manualPanel.hidden = selected !== 'manual';
        qrPanel.hidden = selected !== 'qr';
        if (methodHint) methodHint.hidden = Boolean(selected);
        if (submit) submit.disabled = !selected;
        options.forEach((option) => {
          if (option.dataset.totpMethod === selected) option.setAttribute('aria-current', 'true');
          else option.removeAttribute('aria-current');
        });

        if (updateForm && form) {
          let modeInput = document.getElementById('mode');
          if (!modeInput) {
            modeInput = document.createElement('input');
            modeInput.type = 'hidden';
            modeInput.id = 'mode';
            modeInput.name = 'mode';
            form.appendChild(modeInput);
          }
          modeInput.value = selected;
          (selected === 'manual' ? manualPanel : qrPanel).focus();
        }
      }

      const initial = method.dataset.initialMethod;
      selectMethod(initial === 'manual' ? 'manual' : initial ? 'qr' : '', false);
      options.forEach((option) => option.addEventListener('click', (event) => {
        event.preventDefault();
        selectMethod(option.dataset.totpMethod, true);
      }));
    }

    const copyButton = document.getElementById('totp-copy-key');
    const secretKey = document.getElementById('kc-totp-secret-key');
    const copyStatus = document.getElementById('totp-copy-status');
    if (copyButton && secretKey && copyStatus) {
      copyButton.addEventListener('click', async () => {
        try {
          if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(secretKey.textContent.trim());
          copyStatus.textContent = copyStatus.dataset.copied;
        } catch {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(secretKey);
          selection.removeAllRanges();
          selection.addRange(range);
          copyStatus.textContent = copyStatus.dataset.failed;
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
}());
