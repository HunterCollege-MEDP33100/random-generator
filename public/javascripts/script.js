// Add click event to refresh button
document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.getElementById('refreshBtn');
    
    if (refreshBtn) {
      refreshBtn.addEventListener('click', function() {
        // Reload the page to get a new random fortune
        location.reload();
      });
    }
  });