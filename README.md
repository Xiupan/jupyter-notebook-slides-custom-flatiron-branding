## Purpose
So the point of this project is to brand our Flatiron Data Science slideshows that are automatically generated by `nbconvert`-ing a Jupyter Notebook to `slides.html`

What this project contains for you to use is a custom CSS file and a custom JavaScript script.

The script generates some elements and adds them to the HTML file. The CSS stylizes the document with the appropriate brand colors and adds some other styles to the document.

## Usage
1. `nbconvert` your Jupyter Notebook first OR you can also click on File -> Download as -> Reveal.js slides (.html)
2. Find your new slideshow html document (it might be named `NOTEBOOK_NAME.slides.html`).
3. Copy over the `custom.css` file and the `flatironBranding.js` file over to where your new `NOTEBOOK_NAME.slides.html` is and place them all in the same folder.
4. Open the html document in your favorite code editor (VS Code or Atom).
5. At the top of the document somewhere, add this line:
```
<script src="flatironBranding.js"></script>
```
6. Open up the html document in your favorite browser.
7. If everything is good, you should see the slideshow in your browser with the Flatiron branding colors and logo in the top left hand corner! Yay! :ultrafastparrot:

## Warning
This is a very rough release so please provide feedback and I will improve it when I can! :)
