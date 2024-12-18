# slide_gallery

# ![Theme Setting](./Screen%20Recording.gif)


## only one main ``<img>`` for the display area and two buttons (``<`` and ``>``).

###  images loop back to the first or last image when you reach the end

```js
    prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back
  updateImage();
});

```
* ``prevButton.addEventListener("click", ...):``
it attaches an event-listener to the ``prevButton.`` When the button is clicked, the arrow function runs.

* ``currentIndex``:
This variable keeps track of the current image index (position in the array).

* I added ``images.length`` to ensure the result is never negative

### simplifying this in another logic

```js
 if (currentIndex === 0) {
  currentIndex = images.length - 1;
 } else {
 currentIndex--;
 }

```


```js
// // 1st image index
let currentIndex = 0;

// // update the main display image
 const updateImageDisplay = (index) => {
   displaySelectedImage.src = images[index].src;
  displaySelectedImage.alt = images[index].alt;
 };

// // Show 1st img
 updateImageDisplay(currentIndex);

 previousArrow.addEventListener("click", () => {
   if (currentIndex > 0) { 
     currentIndex--; // Move to the previous image
    updateImageDisplay(currentIndex);
   }
 });

 nextArrow.addEventListener("click", () => {
   if (currentIndex < images.length - 1) { 
    currentIndex++; // Move to the next image
    updateImageDisplay(currentIndex);
  }
 });
```
___________________________________________
# !!! Another way for sliding
```js

  previewButton.addEventListener('click', () => {
     currentIndex = index;  // Set the index to the clicked image
   updateImage(currentIndex);  // Update the main image  });

   document.body.appendChild(previewButton);
 });

// // Event listener for previous button
 prev_Button.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
   updateImage(currentIndex);
 });

// // next button
 next_Button.addEventListener("click", () => {   currentIndex = (currentIndex + 1) % images.length; // Loop forward if needed
  updateImage(currentIndex);
 });
```