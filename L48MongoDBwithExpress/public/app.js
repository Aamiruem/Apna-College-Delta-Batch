// Simple Delete Confirmation Popup
function confirmDelete(event) {
    const userConfirmed = confirm("Are you sure you want to delete this chat?");
    
    if (!userConfirmed) {
        event.preventDefault(); // Stop form submission
    }
}

// Attach event listener to all delete forms
document.querySelectorAll(".delete-form").forEach(form => {
    form.addEventListener("submit", confirmDelete);
});
