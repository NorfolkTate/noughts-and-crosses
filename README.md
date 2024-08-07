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
* [Errors found in testing](#errors-found-in-testing)
* [Unfixed Bugs](#unfixed-bugs)
* [Lighthouse Report](#lighthouse-report)
### [Deployment](#deployment-1)
* [GitHub Pages](#github-pages)
* [Forking the GitHub Repository](#forking-the-github-repository)
* [Cloning the Repository Locally](#cloning-the-repository-locally)
### [Credits](#credits-1)
* [General understanding of code](#general-understanding-of-code)
* [References from comments in code](#references-from-comments-in-code)
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

## Features Left to Implement

* Additional levels which are progressively harder
* A score card that keeps score and automatically resets the game, whilst keeping a running score
* A timer to put pressure on the user to take their go in a limited time
* Additional themes to choose from

## Design

 * Colour Scheme
    * The colour scheme is pink hues and the main colours used on the website:
        * rgb(251, 206, 219);
        ![Gameboard](assets/images/colour-1.png)
        * rgb(253, 241, 244);
        ![Background](assets/images/colour-2.png)
        * #80114e;
        ![Grid](assets/images/colour-3.png)

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

![JavaScript](assets/images/jshint.png)

### Manual Testing 

* The game was deigned for a mobile first, therefore a lot of the testing was done across a range of mobiles. These included Samsung, iPhone, and google pixels.
* The website was tested on Google Chrome and Microsoft edge 
* The website was viewed on a desktop computer, a widescreen monitor, a laptop and a tablet
* A large amount of testing was done to ensure the game works and responds to user's input
* Family and friends were asked to review the website for a better understanding of the user experience and provided helpful feedback
* Dev Tools was used to test how the site looks on various screen sizes
* Dev Tools Console was used to find any bugs that were not spotted
* JSHint was used to check quality of the code and any errors missed

The aim of the game is to beat the computer by getting 3 Xs in a row. Once a winner is determined a message should be displayed stating the outcome and then the option to reset and restart the game. I followed these steps during testing and have logged the expected outcomes and actual outcomes below.



| Stage of Game | Expected Outcome | Actual Outcome | 
| ------- | -------------- | ----------- |  
| Main Page   | Displays the game and awaits a player respone | As Expected |
| Start game | Player starts by selecting any square, and "X" will show | As Expected |
| Board is disabled  | Player cannot click on another square until the computer's turn is finished | As Expected |
| A brief pause | The board will wait for a moment before computer's turn to simulate human gameplay | As expected
| Computer turn | A "O" will appear in the most strategic place, either the middle or a corner | As Expected | 
| Reverts to player turn | Player takes another turn, followed by board being diabled again and the pause again | As Expected |
| Computer's turn | Computer should take a strategic move, either to block a winning move by the player or aim for a winning move  | As Expected |
| Turns continue  | Player takes turn, computer takes turn until the game finishes| As Expected |
| Player wins | A message is displayed below the board stating "You win!" | As Expected |
| Computer wins | A message is displayed below the board stating "You lose!" | As Expected |
| No winner  | A message is displayed below the board stating "It's a draw!"| As Expected |
| Reset button  | Player presses, "X"s and "O"s and winner message disappears. Game restarts and player can take a turn | As Expected | 

### Fixed Bugs

* Fix computer turn not displaying
    * To fix this, I added an inner text update and esured that it was reflecting the current player - in this case the computer
* Fix issue of game not reseting
    * The game would not reset after the first try, I had not updated it to reflect all the new variables of the game I had added in. I ensured all the enable and disable boards were correct and that the gane was enabled after a reset 
* Fix issue of pointer events not being defined
    * I had incorrect syntax and the pointer event was not defined as none. By setting the boxes to not react to a pointer event the player can now no longer take a turn that's not their own
* Fix logo styling
    * A lot of trial and error on what should have been quite simple. It was fixed in the end with help by adjusting the margin and aligning the image on the baseline. I had help from stack overflow, slack community and team treehouse for this (see credits)
* Fix favicon bug and add in image
    * Classic turn it off and on again, just reimported the file
* Fix bugs with favicons and fix make move bug
    * I mistakenly believed that you needed an event listener is the JavaScript code and also the HTML it related to. I removed the event listeners from the HTML. This solution came from Code Institute tutor support
* Fix bug for reset button position
    * Added css styling 
* Add css styling to fix box size on ipad screen
    * The game board grid was distorting on certain screens, added css styling to media query to fix this issue
* Fix reset button bug by adding in an empty string to clear text content
    * Mostly explained during the commit message, I used text Content fix this with help from java t point (see credits)
* Fix make move bug by moving winner variable and else if statement into make move function
    * I had planned the check winner variable in the display winner function. It made more sense to put it into the make move function as that handles all the game logic and the display winner only handles the display logic
* Fix bug in reset button 
    * Ensured isGameActive was called correctly
* Fix make move bug so computer takes a turn
    * Ensured isGameActive was called correctly 
* Fix computer move function
    * This was fixed by adding in math.random, which was learned from progress telerik (see credits). This allowed the computer to select any random square during its move
* Fix make move bug
    * The game did not handle the transition between moves or check for a winner. I used isGameActive to check if the next move was necessary before running the make move function again and ensure that checkWinner function was called immediately after the make move function
* Fix spelling error in make move function
    * I had defined checkWinner, but accidentally written it elsewhere in the code as checkForWinner
* Fix error by defining win pattern 
    * A player was unable to win the game until I had defined the winning criteria 

### Errors found in testing

* Game is very easy and had no defensive design 
    * I added another function to determine the most strategic move and take that
* User can click multiple boxes before the computer takes a turn
    * I added a disable and enable board variables to make the board inaccesable unless it's the user's turn
* Unexpected feedback when user plays quickly
    * Disable and enable board variables also fixed this issue
* Users can also take turns for the computer / press the boxes when it is the computer's turn and affect the placement of the next move.
    * Disable and enable board variables also fixed this issue

### Unfixed Bugs

* Header distorts on a browser that isn't full size


### Lighthouse Report

![Lighthouse Report](/assets/images/noughts-and-crosses-lighthouse-report.png)

## Deployment

### GitHub Pages
Deploying the Website Using GitHub Pages
* Log in to GitHub and navigate to the GitHub repository [Noughts and Crosses](https://github.com/NorfolkTate/noughts-and-crosses)
* In the repository menu (not the main navigation), find and click on the "Settings" button.
* Scroll down the Settings page until you see the "GitHub Pages" section.
* Under "Source," open the dropdown menu that says "None," select "Main," and click "Save."
* The page will refresh automatically.
* Scroll down to the "GitHub Pages" section to find the link to the now-published site [here](https://github.com/NorfolkTate/noughts-and-crosses)

### Forking the GitHub Repository
Forking the repository allows you to create a copy of the original repository in your GitHub account, enabling you to view and modify it without altering the original. Follow these steps:
* Log in to GitHub and go to the GitHub repository [Noughts and Crosses](https://github.com/NorfolkTate/noughts-and-crosses)
* In the repository menu (below the main navigation), click on the "Fork" button.
* You will now have a copy of the original repository in your GitHub account.

### Cloning the Repository Locally
* Log in to GitHub and visit the GitHub repository [Noughts and Crosses](https://github.com/NorfolkTate/noughts-and-crosses)
* Under the repository name, click the "Clone or download" button.
* Click the "Code" button, select your preferred method (HTTPS, SSH, or GitHub CLI), and copy the link provided.
* Open Git Bash.
* Navigate to the directory where you want to create the cloned repository.
* Type git clone, paste the URL copied earlier, and press Enter.
* Your local clone of the repository will be created.

## Credits 

### General understanding of code

* CSS-tricks provided a tutorial on making a game grid in css [css-tricks tutorial](https://css-tricks.com/snippets/css/complete-guide-grid/)
* Stack Overflow Questions on tic tac toe was used to understand some one the functions [link to stack overflow](https://stackoverflow.com/questions/tagged/tic-tac-toe)
* Code Brainer was used to help understand the specfics of the game [Code Brainer](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game) 
* W3 schools JavaScript tutorials for understanding the broader elements [W3 schools](https://www.w3schools.com/js/default.asp)
* The tutor service at Code Institute for troubleshooting some of the issues I encountered
* The README template was provided by Code Institute

### References from comments in code

* CSS
    * Logo positioning [Treehouse](https://teamtreehouse.com/community/logo-image-in-header-positioning)

* JavaScript 
    * Win pattern [Stack overflow](https://stackoverflow.com/questions/75845091/trouble-displaying-tic-tac-toe-game-board-in-javascript-html-css-project)
    * Pointer Events [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent)
    * General Tic Tac Toe game [Study Group](https://studygroup.moralis.io/t/assignment-dom-tic-tac-toe-assignment/43942)
    * Timeout [Stack overflow](https://stackoverflow.com/questions/6232383/little-help-with-javascript-code-involving-settimeout-method)
    * Defensive design [Stack overflow](https://stackoverflow.com/questions/75845091/trouble-displaying-tic-tac-toe-game-board-in-javascript-html-css-project)
    * Array reduce [Pregress Telerik](https://www.telerik.com/blogs/understanding-javascript-array-reduce)
    * Math.random [W3 Schools](https://www.w3schools.com/js/js_random.asp)
    * Dollar identifier [Thought co](https://www.thoughtco.com/and-in-javascript-2037515)
    * Text Content [Java t point](https://www.javatpoint.com/textcontent-in-javascript)

### Content 

* All content was written by the developer
* [favicon.io](https://favicon.io/) provided the favicon
* Google fonts

### Media

* Google images for the logo
* Am I responsive for the README image
* Google colour picker for a visual representation of the colour scheme

## Acknowledgements

* My mentor Mitko Bachvarov provided helpful feedback
* Slack community for troubleshooting and enouragement 
* Code Insitute tutor service for troubleshooting











