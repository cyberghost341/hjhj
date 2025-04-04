document.addEventListener('DOMContentLoaded', function() {
    // Button hover effects
    const buttons = document.querySelectorAll('.game-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2)';
            this.querySelector('i').style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
        
        // Click tracking for analytics
        button.addEventListener('click', function() {
            const platform = this.querySelector('span').textContent;
            console.log(`Navigating to ${platform} profile`);
            // You can add Google Analytics or other tracking here
        });
    });

    // Cookie preferences
    const cookiePref = document.querySelector('.cookie-pref');
    if(cookiePref) {
        cookiePref.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cookie preferences will be implemented here');
            // Implement cookie consent management
        });
    }
});
