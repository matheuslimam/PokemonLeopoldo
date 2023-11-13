const focusableElements = document.querySelectorAll('img');
let currentFocus = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();

        if (e.shiftKey) {
            currentFocus = (currentFocus - 1 + focusableElements.length) % focusableElements.length;
        } else {
            currentFocus = (currentFocus + 1) % focusableElements.length;
        }

        focusableElements[currentFocus].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentFocus > 2) {
            currentFocus -= 3;
        }
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentFocus < focusableElements.length - 3) {
            currentFocus += 3;
        }
    } else if (e.key === 'Enter') {
        e.preventDefault();
        focusableElements[currentFocus].click();
    }
});