# Noughts and Crosses

Noughts and crosses is a tic-tac-toe style game that allows a user to play against the computer to try and score three counters in a row. The user plays as an X and the compuer plays as an O. Once the game end, the score card displays if the user wins, loses, or if the game ends in a draw. 

The user can then reset the game and start again to obtain a better score, thus keeping them engaged.

![Am I responsive](/assets/images/noughts-and-crosses-responsive.png)

[View the live Noughts and Crosses game](https://norfolktate.github.io/noughts-and-crosses/)

## Contents

### [Features](#features-1)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
### [Design](#design-1)
### [Testing](#testing-1)
* [Validation](#validation)
* [Manual Testing](#manual-testing)
* [Fixed Bugs](#fixed-bugs)
* [Unfixed Bugs](#unfixed-bugs)
* [Lighthouse Report](#lighthouse-report)
### [Deployment](#deployment-1)
### [Credits](#credits-1)
* [Code](#code)
* [Content](#content)
* [Media](#media)

## Features

* Main objective is to provide an engaging and interactive platform for users to test their strategic game play
* Responsive design that is optimized for multiple devices
* A score card to display the outcome of the game

### Existing Features

* Logo and Heading
    * It is prominently displayed at the top of the page, ensuring that users can easily locate and identify the game.

![Logo and Heading](/assets/images/noughts-and-crosses-heading.png)

* Game Board
    * A seperate board for defining the game 
    * Contains the grid and boxes for making a move

![Game Board](/assets/images/noughts-and-crosses-game-board.png) 

* Grid
    * Individual boxes for making a move

![Grid](/assets/images/noughts-and-crosses-grid.png)

* Score Card
    * Displays the end result once the game finishes
    * Displays a win, lose, or draw result
    * Resets when the game is reset

![Score Card](/assets/images/noughts-and-crosses-win.png)

![Score Card](/assets/images/noughts-and-crosses-draw.png)

![score Card](/assets/images/noughts-and-crosses-lose.png)

* Reset Button 
    * Button to reset the game and start again
    * Clears the grid and the score card to start again

![Reset Button](/assets/images/noughts-and-crosses-reset.png)

* Footer
    * Information to show the name of the developer

![Footer]()

## Features Left to Implement

* Additional levels which are progressively harder
* A score card that keeps score and automatically resets the game, whilst keeping a running score
* A timer to put pressure on the user to take their go in a limited time
* Additional themes to choose from

## Design

 * Colour Scheme
    * The colour scheme is pink hues and the main colours used on the website:
        * rgb(251, 206, 219);
        * rgb(253, 241, 244);
        * #80114e;


 * Typography
    * Madimi was the main font used with sans-serif as the back up

 * Wireframes
    * Figma was used for creating a basic layout and colour scheme 

    ![Wire Frame](/assets/images/noughts-and-crosses-wire-frame.png)

## Testing 

The W3C Markup Validator, W3C CSS Validator and JSHint were used to validate to ensure there were no errors.

### Validation

* HTML (W3C) found no errors

![HTML](/assets/images/noughts-and-crosses-html.png)

* CSS Validator found no errors

![CSS](/assets/images/noughts-and-crosses-css.png)

* JSHint found no errors

![JavaScript](/assets/images/noughts-and-crosses-js.png)

### Manual Testing 

* The game was deigned for a mobile first, therefore a lot of the testing was done across a range of mobiles. These included Samsung, iPhone, and google pixels.
* The website was tested on Google Chrome and Microsoft edge 
* The website was viewed on a desktop computer, a widescreen monitor, a laptop and a tablet
* A large amount of testing was done to ensure the game works and responds to user's input
* Family and friends were asked to review the website for a better understanding of the user experience and provided helpful feedback
* Dev Tools was used to test how the site looks on various screen sizes
* Dev Tools Console was used to find any bugs that were not spotted
* JSHint was used to check quality of the code and any errors missed

### Fixed Bugs

* The score card would always respons with a draw
* Pressing the reset button would trigger the message "It's a draw"
* The computer wouldn't take a turn
* Couldn't make a move
* Reset button wouldn't clear previous score card message
* computer couldn't make a move after pressing the reset button

### Unfixed Bugs

* The game is very easy 
* Header distorts on a browser that isn't full size
* Colours were off on one Samsung Galaxy S7 (haven't been able to replicate this)

### Lighthouse Report

![Lighthouse Report](/assets/images/noughts-and-crosses-lighthouse-report.png)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 

* In the GitHub repository, navigate to the Settings tab
* Select pages from the side bar on the left
* Ensure source is set to 'deplot from branch'
* Select main branch and ensure folder is set to / (root).
* Click save
* Wait a moment and refresh

[The live link can be found here](https://norfolktate.github.io/noughts-and-crosses/)

## Credits 

### Code

* CSS-tricks provided a tutorial on making a game grid in css [link to css-tricks tutorial](https://css-tricks.com/snippets/css/complete-guide-grid/)
* Stack Overflow Questions on tic tac toe was used to understand some one the functions [link to stack overflow](https://stackoverflow.com/questions/tagged/tic-tac-toe)
* Code Brainer was used to help understand the specfics of the game [link to Code Brainer](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game) 
* W3 schools JavaScript tutorials for understanding the broader elements [link to W3 schools](https://www.w3schools.com/js/default.asp)
* The tutor service at Code Institute for troubleshooting some of the issues I encountered
* The README template was provided by Code Institute

### Content 

* All content was written by the developer
* [favicon.io](https://favicon.io/) provided the favicon
* Google fonts

### Media

* Google images for the logo
* Am I responsive for the README image

## Acknowledgements

* My mentor Mitko Bachvarov provided helpful feedback
* Slack community for troubleshooting and enouragement 
* Code Insitute tutor service for troubleshooting











