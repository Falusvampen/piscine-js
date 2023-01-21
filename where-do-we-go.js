// Instructions
// Where will you go on your next holiday?

// Let's make a page to index your options, so that next time you ask yourself that question, you'll be ready with some ideas.

// Create a function named explore, which creates a page displaying the list of places provided in the data file below.

// Sort the places from north to south, so that the northern-most place is first.
// Display a fullscreen-size <section> for each place. Use the pics hosted
// in the ./where-do-we-go_images folder below. Set the background attribute with the corresponding image URL.
// The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg.
// Display a location indicator as an <a> tag in the middle of the screen. It should:
// have the class location
// display the name and coordinates of the current place, as text strings separated by \n
// set the text color as color
// update the name, coordinates and color on scroll, at the point when the next image reaches the middle of the screen height
// make the href attribute open a new tab redirecting to a Google Maps URL with the coordinates of the place currently displayed
// Display a compass as a div tag, indicating the latitude direction which:
// has the class direction
// displays N for North if the user is scrolling up
// displays S for South if he's scrolling down
// Files
// You only need to create & submit the JS file where-do-we-go.js; we're providing you the following files to download and test test locally:

// the HTML file where-do-we-go.html to open in the browser, which includes:

// the JS script which will enable you to run your code
// some CSS pre-styled classes: feel free to use those as they are, or modify them
// the data file where-do-we-go.data.js from which you can import places

// the images to use, in this compressed folder
// https://assets.01-edu.org/where-do-we-go_images.zip

// Expected result
// You can see an example of the expected result here
// https://www.youtube.com/watch?v=BLxNi1WH6_0&feature=youtu.be

// Notions
// Scroll event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event
// window
// https://developer.mozilla.org/en-US/docs/Web/API/Window
// innerHeight
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
// scrollY
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// pageYOffset
// https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
// Take a look at the DMS coordinates system
// https://en.wikipedia.org/wiki/Decimal_degrees

import { places } from "./where-do-we-go.data.js"

export function explore() {
    let orderedPlaces = places.sort((a, b) => {
        let aCoord = a.coordinates
        let bCoord = b.coordinates

        //convert a to a decimal coordinate
        let aDeg = +(aCoord.slice(0, aCoord.indexOf('°')))
        let bDeg = +(bCoord.slice(0, bCoord.indexOf('°')))
        //find the mins
        let aMin = +(aCoord.slice(aCoord.indexOf('°') + 1, aCoord.indexOf('\'')))
        let bMin = +(bCoord.slice(bCoord.indexOf('°') + 1, bCoord.indexOf('\'')))

        // console.log(aNum, bNum)

        //find the secs
        let aSec = +(aCoord.slice(aCoord.indexOf('\'') + 1, aCoord.indexOf('\"')))
        let bSec = +(bCoord.slice(bCoord.indexOf('\'') + 1, bCoord.indexOf('\"')))

        // console.log(aNum, bNum)

        let aDir = aCoord.split(" ")[0].slice(-1)
        let bDir = bCoord.split(" ")[0].slice(-1)

        if (aDir === 'S') {
            aDeg *= -1
            aMin *= -1
            aSec *= -1
        }
        if (bDir === 'S') {
            bDeg *= -1
            bMin *= -1
            bSec *= -1
        }
        if (aDir != bDir) {
            return aDir.charCodeAt(0) - bDir.charCodeAt(0)
        }
        if (aDeg != bDeg) {
            return bDeg - aDeg
        }
        if (aMin != bMin) {
            return bMin - aMin
        }
        return bSec - aSec

    })

    //create the compass div
    const compass = document.createElement('div')
    compass.className = 'direction'
    compass.innerHTML = 'N'
    document.body.append(compass)

    let oldValue = 0
    let newValue = 0

    //Track when to change the text in the anchor
    let scrolled = false
    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        scrolled = true
        if (oldValue < newValue) {
            compass.innerHTML = 'S'
        } else {
            compass.innerHTML = 'N'
        }
        oldValue = newValue;
    });

    //Create the anchortag
    const newA = document.createElement('a')
    newA.className = 'location'
    newA.innerHTML = `${orderedPlaces[0].name}\n${orderedPlaces[0].coordinates}`
    newA.style.color = orderedPlaces[0].color
    newA.href = `https://www.google.com/maps/place/${orderedPlaces[0].coordinates}`
    newA.target = '_blank'
    document.body.append(newA)


    //create the section tags
    for (let i = 0; i < orderedPlaces.length; i++) {

        const newSect = document.createElement('section')
        newSect.id = i.toString()
        let imageLoc = orderedPlaces[i].name.toLowerCase().split(',')[0].split(' ').join('-')
        newSect.style.background = `URL('./where-do-we-go_images/${imageLoc}.jpg')`
        document.body.append(newSect)
    }

    let observer = new IntersectionObserver(valChanger => {
        valChanger.forEach(
            entry => {
                if (entry.isIntersecting === true) {
                    let val = (Math.round(window.scrollY / window.innerHeight))
                    newA.innerHTML = `${orderedPlaces[val].name}\n${orderedPlaces[val].coordinates}`
                    newA.style.color = orderedPlaces[val].color
                    newA.href = `https://www.google.com/maps/place/${orderedPlaces[val].coordinates}`
                    console.log(newA.href);
                    console.log('TEST',newA.href.split('%C2%B0')
                        .join('°')
                        .split('%22')
                        .join('"')
                        .split('%20')
                        .join(' '));
                }
            }
        )
    }, { threshold: [0.5] });

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))
}
