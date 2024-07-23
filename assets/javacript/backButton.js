document.getElementById("back-home").onclick = function() {
    // Replace the current history entry with index.html
    history.replaceState(null, null, 'index.html');
    
    // Navigate to index.html
    window.location.href = "index.html";
};