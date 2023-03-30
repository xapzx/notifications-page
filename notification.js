const mark = document.querySelector('.mark-read');
const unread = document.querySelectorAll(".unread");

function markAsRead() {
    unread.forEach(element => {
        element.classList.remove('unread');
        element.querySelector('.unread-dot').remove();
    })
}

mark.addEventListener('click', markAsRead);
