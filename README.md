# Dog Party 2.0 Project (Duration: 1 week)


## HTML-DOM
This was the week 1 solo project for Turing School of Software and Design's 1908 Front End Engineering cohort. We were tasked with replicating a provided comp, and providing
some additional functionality and responsiveness. Utilizing semantic html elements I divided the web page into a header, main, first and second
half sections, with divs breaking those sections into further pieces, and finally a footer.

Originally I sped through this without giving much thought about the layout, more so about being able to replicate the comp provided. I ended
up going back and replacing the divs I used with sections. I was surprised to find how much I was able to remove while still executing the
desired result.

Here is the comp that was provided:

![compfirsthalf](https://user-images.githubusercontent.com/27719824/63233995-5f7f4980-c1f0-11e9-9c6e-72036e3f3323.png)

![compsecondhalf](https://user-images.githubusercontent.com/27719824/63234080-e7fdea00-c1f0-11e9-8f1a-6d76d469fddc.png)




---
## CSS

The task for this project was to replicate the stylings according to the comp provided. There were multiple images, some svg icons, and color hex values provided. With those in hand I went about recreating the web page.

For the stylesheet we were not allowed to utilize some of the new CSS features available (grid/flexbox), so I created div containers for
the columns with the what, how, and facts dogs. I originally used divs for a background image and an overlay, but when I went back and refactored I was able to have the same effect with no divs at all. Though my entire css exploded, it was good practice refactoring. This time around my elements were arranged according the their stacking order. I am sure I could go back and combine properties under a single class and apply them through the DOM, and thereby edit out some of the lengthiness of my css file. But the end is never the end.

---
## JS

The Javascript may have been the least difficult part about this whole project. The task was to change the "Some Dogs" portion of the H1 element to whatever had been typed into the input form. I initially ran into some issues in trying to figure out how to grab the input value once it was typed in, but fortunately found there was a built in js method (.value) that does all the work for you. Once that was figured out I just tried to walk through what I was trying to do logically. I set variables for the elements I wanted to manipulate with my javascript (the span element, the input element, and the button element). Once I set those as global variables writing out the function was pretty straight forward. The javascript should read: this button, when clicked, take the value from the input text box and assign it to this variable, then take that variable and assign it to the innerHTML of the span variable. Finally, clear the input by resetting its value to ' '.

The second of the javascript was for the buttons of the three columns. When clicked these buttons were to collaps the text fields of their respective columns. Before I begin I had a notion that I would need to use the display property. After playing around with that and not having any success I opted for the visibility property. Then it came to replicating the javascript from before but assigning some new variables. This time it was : button when clicked, add the class to this specific p element. In order, to undo the effect I discovered that there was a .toggle method available that did exactly that. I then replicated the code two more times for the other columns changing the class names to their respective elements.
