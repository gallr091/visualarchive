const continents = document.querySelectorAll('.continent');

continents.forEach(continent => {
    const img = continent.querySelector('.continentpic'); // Query for image within the continent
    const caption = continent.querySelector('.caption');

    // Store the original image and caption
    const originalSrc = img.src;
    const originalCaption = caption.textContent;

    continent.addEventListener('mouseenter', () => {
        // Change image and caption on hover
        if (img.src === originalSrc) {
            // Replace with new image and caption
            switch (img.alt) {
                case 'image-1':
                    img.src = 'images/north-america/canada.jpg';
                    caption.textContent = 'North America';
                    break;
                case 'image-2':
                    img.src = 'images/europe/russia.jpg';
                    caption.textContent = 'Europe';
                    break;
                case 'image-3':
                    img.src = 'images/africa/zimbabwe.webp';
                    caption.textContent = 'Africa';
                    break;
                case 'image-4':
                    img.src = 'images/asia/india.jpeg';
                    caption.textContent = 'Asia';
                    break;
                case 'image-5':
                    img.src = 'images/oceania/australia.jpg';
                    caption.textContent = 'Oceania';
                    break;
                case 'image-6':
                    img.src = 'images/south-america/brazil.jpg';
                    caption.textContent = 'South America';
                    break;
                default:
                    break;
            }
        }
    });

    continent.addEventListener('mouseleave', () => {
        // Reset image and caption on mouse leave
        img.src = originalSrc;
        caption.textContent = originalCaption;
    });
});
