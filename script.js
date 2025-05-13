
//! För att divsen med om Ica och ostkaka ska ändra sin font
document.addEventListener('DOMContentLoaded', function() {
    // Elements we want to change opacity for
    const elementsToFade = document.querySelectorAll('.left, .right');
    
    // Function to update opacity based on position
    function updateOpacity() {
        // Get the viewport height
        const viewportHeight = window.innerHeight;
        
        // Calculate the "sweet spot" (center of the viewport)
        const viewportCenter = window.scrollY + (viewportHeight / 2);
        
        // Maximum distance an element can be from center before reaching minimum opacity
        const maxDistance = viewportHeight * 0.5; // Adjust this value to control how quickly opacity fades
        
        elementsToFade.forEach(element => {
            // Get element position data
            const rect = element.getBoundingClientRect();
            const elementCenter = window.scrollY + rect.top + (rect.height / 2);
            
            // Calculate distance from viewport center (as a value between 0 and 1)
            const distance = Math.abs(elementCenter - viewportCenter);
            const normalizedDistance = Math.min(distance / maxDistance, 1);
            
            // Calculate opacity (1 when at center, minimum 0.2 when far away)
            const opacity = 1 - (normalizedDistance * 0.8); // Min opacity will be 0.2
            
            // Apply the opacity
            if(screen.width < 800){
               element.style.opacity = 1;
            }

            else{
            element.style.opacity = opacity;
            }
        });

    }
    
    // Update opacity on page load
    updateOpacity();
    
    // Update opacity on scroll
    window.addEventListener('scroll', updateOpacity);
    
    // Update opacity on window resize
    window.addEventListener('resize', updateOpacity);
});



//! ska kolla om det funkar 

  const title = document.getElementById('storiestitel');

  window.addEventListener('scroll', () => {
    const rect = title.getBoundingClientRect();
    const titleCenterY = rect.top + rect.height / 2;
    const windowCenterY = window.innerHeight / 2;

    const distance = Math.abs(windowCenterY - titleCenterY);
   
    const maxDistance = window.innerHeight / 2; // You can tweak this
    const factor = 1 - Math.min(distance / maxDistance, 1);
  
    const minSpacing = 0; // normal
    const maxSpacing = 2; // more spread out when far
    const spacing = minSpacing + (1 - factor) * maxSpacing;

    title.style.letterSpacing = `${spacing}em`;
  });

