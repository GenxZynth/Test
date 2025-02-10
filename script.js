document.getElementById("clickbait-btn").addEventListener("click", function() {
    alert("There are no official announcements from PAGASA. This is for research purposes only.");
    
    // Click tracking with Google Analytics
    gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': 'Fake News Read More',
        'value': 1
    });

    // Local click tracking
    let clickCount = localStorage.getItem("clickbaitClicks") || 0;
    clickCount++;
    localStorage.setItem("clickbaitClicks", clickCount);
    
    document.getElementById("click-count").textContent = "Times clicked: " + clickCount;
});
