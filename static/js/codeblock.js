const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M13.485 1.85a.5.5 0 0 1 1.065.02.75.75 0 0 1-.02 1.065L5.82 12.78a.75.75 0 0 1-1.106.02L1.476 9.346a.75.75 0 1 1 1.05-1.07l2.74 2.742L12.44 2.92a.75.75 0 0 1 1.045-.07z"/>
        </svg>`;
const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.293 2.293a1 1 0 0 1 1.414 0L8 6.586l4.293-4.293a1 1 0 0 1 1.414 1.414L9.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 8 2.293 3.707a1 1 0 0 1 0-1.414z"/>
        </svg>`;
const copyIcon = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>`

// Function to change icons after copying
const changeIcon = (button, isSuccess) => {
  button.innerHTML = isSuccess ? successIcon : errorIcon;
  setTimeout(() => {
    button.innerHTML = copyIcon; // Reset to copy icon
  }, 2000);
};

// Function to get text from code blocks
const getCode = (codeBlock) => {
  return codeBlock.textContent.trim();
};

document.addEventListener('DOMContentLoaded', function() {
  // Select all `pre` elements containing `code`
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const pre = codeBlock.parentNode;

    // Create and append the copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'clipboard-button';
    copyBtn.innerHTML = copyIcon;
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    const buttonDiv = document.createElement('span');
    buttonDiv.className = 'clipboard-button-div';
    buttonDiv.appendChild(copyBtn);
    pre.appendChild(buttonDiv);

    // Attach event listener to copy button
    copyBtn.addEventListener('click', async () => {
      const codeToCopy = getCode(codeBlock);
      try {
        await navigator.clipboard.writeText(codeToCopy);
        changeIcon(copyBtn, true); // Show success icon
      } catch (error) {
        console.error('Failed to copy text: ', error);
        changeIcon(copyBtn, false); // Show error icon
      }
    });
  });
});
