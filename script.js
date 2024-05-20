let isFullImageView = false;
let currentImageIndex = 0;
let images = [];

// Show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show a single preview image
function showSingleImage(imageSrc) {
    const singleImageModal = document.getElementById('singleImageModal');
    const singleImage = document.getElementById('singleImage');
    singleImage.src = imageSrc;
    singleImageModal.style.display = 'block';
}

// Close the single image modal
function closeSingleImage() {
    const singleImageModal = document.getElementById('singleImageModal');
    singleImageModal.style.display = 'none';
}

// Show the gallery for a specific project
function showGallery(project) {
    const galleryModal = document.getElementById('galleryModal');
    const galleryContent = document.getElementById('galleryContent');
    galleryContent.innerHTML = '';

    // Define images based on project
    if (project === 'itinerary-prettifier') {
        images = [
            'images/screenshots/itinerary-prettifier/itinerary1.png',
            'images/screenshots/itinerary-prettifier/itinerary2.png'
        ];
    } else if (project === 'firstprojects') {
        images = [
            'images/screenshots/firstprojects/encryptiontool1.png',
            'images/screenshots/firstprojects/entryorganizer1.png',
            'images/screenshots/firstprojects/entryorganizer2.png'
        ];
    } else if (project === 'art-decoder') {
        images = [
            'images/screenshots/art-decoder/artdecoder1.png',
            'images/screenshots/art-decoder/artdecoder2.png',
            'images/screenshots/art-decoder/artdecoder3.png'
        ];
    } else if (project === 'art-interface') {
        images = [
            'images/screenshots/art-interface/artinterface1.png',
            'images/screenshots/art-interface/artinterface2.png',
            'images/screenshots/art-interface/artinterface3.png',
            'images/screenshots/art-interface/artinterface4.png',
            'images/screenshots/art-interface/artinterface5.png',
            'images/screenshots/art-interface/artinterface6.png',
            'images/screenshots/art-interface/artinterface7.png'
        ];
    }

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('gallery-image');
        img.onclick = () => showFullImage(index);
        galleryContent.appendChild(img);
    });

    galleryModal.style.display = 'block';
    isFullImageView = false;
}

// Show the full image in the gallery
function showFullImage(index) {
    currentImageIndex = index;
    const fullImageModal = document.getElementById('fullImageModal');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = images[currentImageIndex];
    fullImageModal.style.display = 'block';
    document.getElementById('galleryModal').style.display = 'none';
    isFullImageView = true;
}

// Toggle the full image modal
function toggleFullImage() {
    const fullImageModal = document.getElementById('fullImageModal');
    if (isFullImageView) {
        fullImageModal.style.display = 'none';
        document.getElementById('galleryModal').style.display = 'block';
    } else {
        fullImageModal.style.display = 'block';
        document.getElementById('galleryModal').style.display = 'none';
    }
    isFullImageView = !isFullImageView;
}

// Close the gallery modal
function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close the full image modal
function closeFullImage() {
    document.getElementById('fullImageModal').style.display = 'none';
    isFullImageView = false;
}

// Show the previous image in the gallery
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showFullImage(currentImageIndex);
}

// Show the next image in the gallery
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showFullImage(currentImageIndex);
}
