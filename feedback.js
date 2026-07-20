// ===================================================
// Feedback & Program Directory page — page-specific JS
// Handles: live character counter, JS-enhanced validation,
// and submission confirmation for the feedback form.
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Programme directory sorting ----------
    const sortSelect = document.getElementById('sort-select');
    const scrollContainer = document.querySelector('.programs-scroll-container');

    function sortPrograms(criteria) {
        if (!scrollContainer) return;

        const cards = Array.from(scrollContainer.querySelectorAll('.program-card'));

        cards.sort((a, b) => {
            if (criteria === 'nearest') {
                return (parseFloat(a.dataset.distance) || 0) - (parseFloat(b.dataset.distance) || 0);
            }
            if (criteria === 'student-friendly') {
                return (parseFloat(b.dataset.studentFriendly) || 0) - (parseFloat(a.dataset.studentFriendly) || 0);
            }
            // Default: 'popular'
            return (parseFloat(b.dataset.popularity) || 0) - (parseFloat(a.dataset.popularity) || 0);
        });

        cards.forEach(card => scrollContainer.appendChild(card));
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (event) => {
            sortPrograms(event.target.value);
        });
    }

    const form = document.getElementById('feedback-form');
    const commentBox = document.getElementById('comment');
    const charCountEl = document.getElementById('char-count');
    const confirmationEl = document.getElementById('confirmation-message');
    const maxChars = commentBox ? parseInt(commentBox.getAttribute('maxlength'), 10) : 300;

    // ---------- Live character counter ----------
    function updateCharCount() {
        if (!commentBox || !charCountEl) return;
        const remaining = maxChars - commentBox.value.length;
        charCountEl.textContent = remaining;
    }

    if (commentBox) {
        updateCharCount();
        commentBox.addEventListener('input', updateCharCount);
    }

    // ---------- Helper: show / clear error messages ----------
    function setError(inputEl, errorEl, message) {
        if (!errorEl || !inputEl) return;
        errorEl.textContent = message;
        inputEl.closest('.form-row').classList.toggle('has-error', Boolean(message));
    }

    // ---------- Form validation on submit ----------
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            confirmationEl.classList.remove('is-visible');
            confirmationEl.textContent = '';

            let isValid = true;

            const fullName = document.getElementById('full-name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const address = document.getElementById('address');
            const programSelect = document.getElementById('program-select');
            const comment = document.getElementById('comment');

            // Full name
            if (fullName.value.trim().length < 2) {
                setError(fullName, document.getElementById('err-full-name'), 'Please enter your full name.');
                isValid = false;
            } else {
                setError(fullName, document.getElementById('err-full-name'), '');
            }

            // Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                setError(email, document.getElementById('err-email'), 'Please enter a valid email address.');
                isValid = false;
            } else {
                setError(email, document.getElementById('err-email'), '');
            }

            // Phone
            const phonePattern = /^[0-9+\-\s]{7,15}$/;
            if (!phonePattern.test(phone.value.trim())) {
                setError(phone, document.getElementById('err-phone'), 'Please enter a valid phone number.');
                isValid = false;
            } else {
                setError(phone, document.getElementById('err-phone'), '');
            }

            // Address
            if (address.value.trim().length < 5) {
                setError(address, document.getElementById('err-address'), 'Please enter your address.');
                isValid = false;
            } else {
                setError(address, document.getElementById('err-address'), '');
            }

            // Programme select
            if (!programSelect.value) {
                setError(programSelect, document.getElementById('err-program'), 'Please choose a programme.');
                isValid = false;
            } else {
                setError(programSelect, document.getElementById('err-program'), '');
            }

            // Comment
            if (comment.value.trim().length < 10) {
                setError(comment, document.getElementById('err-comment'), 'Please write at least 10 characters of feedback.');
                isValid = false;
            } else {
                setError(comment, document.getElementById('err-comment'), '');
            }

            if (isValid) {
                confirmationEl.textContent = 'Thank you for your feedback! We appreciate you taking the time to share your thoughts.';
                // FIXED: Resetting inline color to green on valid submission
                confirmationEl.style.color = '#1e824c';
                confirmationEl.classList.add('is-visible');
                form.reset();
                updateCharCount();
            } else {
                confirmationEl.textContent = 'Please fix the highlighted fields and try again.';
                confirmationEl.style.color = '#d92e5d';
                confirmationEl.classList.add('is-visible');
            }
        });
    }
});