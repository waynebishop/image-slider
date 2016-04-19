// Get the link of the images
var allImages = document.querySelectorAll('#gallery img');

var imageSources = [];

for( var i=0; i<allImages.length; i++ ) {
	imageSources.push( allImages[i].src ); 
} 

// Delete all the images on the page
var galleryContainer = document.querySelector('#gallery');

galleryContainer.innerHTML = '';

// Create the slider container

var slider = document.createElement('div');

// Attach an ID to the slider
slider.id = 'slider';

// Add the slider to the browser
galleryContainer.appendChild( slider );

// Create some buttons
var next = document.createElement('button');
var prev = document.createElement('button');

// Add some IDs to the buttons
next.id = 'next';
prev.id = 'prev';
next.innerHTML = 'Next';
prev.innerHTML = 'Previous';

// Add the buttons to the slider
slider.appendChild(prev);
slider.appendChild(next);

// Show the first image to the visitor
slider.style.backgroundImage = 'url('+ imageSources[0] +')';

















