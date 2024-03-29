# Web Development Project 3 - Flashcards

Submitted by: HJ Kim

This web app provides a Harry Potter themed flashcard game that allows users to test knowledge and learn new facts.

Time spent: 2.5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

- [x] A user can get one random card from the selected deck by clicking Get Random Card button
- [x] Flip card wehn user enters correct answer
- [x] A user can toggle between text-only mode and image-only mode

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/h42codes/project-flashcards/raw/main/cap2.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with LICEcap

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright 2023 HJ Kim

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Web Development Project 2 - Flashcards

Submitted by: HJ Kim

This web app provides a Harry Potter themed flashcard game that allows users to test knowledge and learn new facts. Cards are presented in a randomized order to reinforce learning.

Time spent: 4 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] Cards change color based on their difficulty category (easy, hard, and medium).

The following **additional** features are implemented:

- Option to toggle between text-only mode and image-only mode

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/h42codes/project-flashcards/raw/main/cap.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with LICEcap

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I am currently using two data source, but it would be better two combine them and then filter questions based on the isImage property.
Also, I would like to implement a feature where users can mark cards as important or already memorized.

<!-- // used image data from harrypotter.fandom.com/wiki/ -->

## License

    Copyright 2023 HJ Kim

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
