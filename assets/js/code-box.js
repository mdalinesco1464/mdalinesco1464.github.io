<script>
function copyCode(btn) {
  const code = btn.closest('.code-box').querySelector('code').innerText;
  navigator.clipboard.writeText(code);
  btn.innerText = '✅ Copied!';
  setTimeout(() => btn.innerText = '📋 Copy', 1500);
}

function editCode(btn) {
  const code = btn.closest('.code-box').querySelector('code');
  code.setAttribute('contenteditable', code.isContentEditable ? 'false' : 'true');
  btn.innerText = code.isContentEditable ? '✏️ Edit' : '🔒 Lock';
}
</script>
