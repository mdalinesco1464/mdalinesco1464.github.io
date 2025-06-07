document.addEventListener('DOMContentLoaded', () => {
  window.copyCode = function (btn) {
    const code = btn.closest('.code-box').querySelector('code').innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = '✅ Copied!';
    setTimeout(() => btn.innerText = '📋 Copy', 1500);
  };

  window.editCode = function (btn) {
    const code = btn.closest('.code-box').querySelector('code');
    const editable = code.getAttribute('contenteditable') === 'true';
    code.setAttribute('contenteditable', !editable);
    btn.innerText = !editable ? '🔒 Lock' : '✏️ Edit';
  };
});
