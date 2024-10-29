function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Copied to clipboard:', text);

            // Create or update the notification bar at the top
            let notification = document.getElementById('clipboard-notification');
            if (!notification) {
                notification = document.createElement('div');
                notification.id = 'clipboard-notification';
                document.body.prepend(notification); // Insert at the top of the body
            }

            // Set notification text and styling
            notification.innerText = `Copied: ${text}`;
            notification.classList.add('show');

            // Fade out and remove the notification after 2 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}
