function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

let isFullImageView = false;
let currentImageIndex = 0;
let images = [];

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
    } else if (project === 'project3') {
        images = [
            'images/screenshots/project3/image1.png',
            'images/screenshots/project3/image2.png'
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

function showFullImage(index) {
    currentImageIndex = index;
    const fullImageModal = document.getElementById('fullImageModal');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = images[currentImageIndex];
    fullImageModal.style.display = 'block';
    document.getElementById('galleryModal').style.display = 'none';
    isFullImageView = true;
}

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

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

function closeFullImage() {
    document.getElementById('fullImageModal').style.display = 'none';
    isFullImageView = false;
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showFullImage(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showFullImage(currentImageIndex);
}
