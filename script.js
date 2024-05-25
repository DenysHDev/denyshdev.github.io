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
    } else if (project === 'cars-viewer') {
        images = [
            'images/screenshots/cars-viewer/cars-viewer1.png',
            'images/screenshots/cars-viewer/cars-viewer2.png',
            'images/screenshots/cars-viewer/cars-viewer3.png',
            'images/screenshots/cars-viewer/cars-viewer4.png',
            'images/screenshots/cars-viewer/cars-viewer5.png',
            'images/screenshots/cars-viewer/cars-viewer6.png',
            'images/screenshots/cars-viewer/cars-viewer7.png'
        ];
    } else if (project === 'stations-pathfinder') {
        images = [
            'images/screenshots/stations-pathfinder/stations-pathfinder1.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder2.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder3.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder4.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder5.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder6.png',
            'images/screenshots/stations-pathfinder/stations-pathfinder7.png'
        ];
    }   else if (project === 'literary-lions-forum') {
        images = [
            'images/screenshots/literary-lions-forum/literary-lions-forum1.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum2.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum3.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum4.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum5.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum6.png',
            'images/screenshots/literary-lions-forum/literary-lions-forum7.png'
        ];
    }


    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('gallery-image');
        img.onclick = (event) => {
            event.stopPropagation();
            showFullImage(index);
        };
        galleryContent.appendChild(img);
    });

    galleryModal.style.display = 'block';
    isFullImageView = false;

    // Add event listener to close gallery on background click
    galleryModal.addEventListener('click', closeGalleryOnBackgroundClick);
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

    // Add event listener to close full image on background click
    fullImageModal.addEventListener('click', returnToGalleryOnBackgroundClick);
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

// Close gallery on background click
function closeGalleryOnBackgroundClick(event) {
    if (!event.target.classList.contains('gallery-image')) {
        closeGallery();
    }
}

// Return to gallery preview on background click
function returnToGalleryOnBackgroundClick(event) {
    if (event.target.id === 'fullImageModal') {
        closeFullImage();
        document.getElementById('galleryModal').style.display = 'block';
    }
}

function filterProjects(language) {
    const projects = document.querySelectorAll('#project-list li');
    projects.forEach(project => {
        const dataLanguage = project.getAttribute('data-language');
        if (language === 'all' || (dataLanguage && dataLanguage.split(',').includes(language))) {
            project.style.display = 'list-item';
        } else {
            project.style.display = 'none';
        }
    });
}
