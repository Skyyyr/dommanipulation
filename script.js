/**
 * @summary: This function simply replaces all images from a html file to their alt text
 */
function replaceImages() {
    /**
     * We grab all our images from the html file that are <img>
     * @type {HTMLCollectionOf<HTMLElementTagNameMap[string]>}
     */
    const images = document.body.getElementsByTagName("img");

    //We print out our images to ensure it works.
    console.log(images);

    //Loop over all the images from reverse order since we are modifying the "array" of elements.
    for (let i = images.length - 1; i >= 0; i--) {
        //Alias for the image in the interation
        const image = images[i];

        //Alias for the alt text value
        const text = document.createTextNode(image.alt);

        //If there is text - we replace it.
        if (text) {
            //Replace the image with the alt text
            image.parentNode.replaceChild(text, image);
        }
    }
}