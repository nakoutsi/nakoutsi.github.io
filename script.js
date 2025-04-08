function toggleContent(id) {
    // Hide all content sections
    const contents = document.getElementsByClassName('content');
    for (let content of contents) {
        content.style.display = 'none';
    }
    // Show the selected content
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
