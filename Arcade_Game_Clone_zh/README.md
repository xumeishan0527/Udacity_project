 Arcade_Game_Clone_zh
 =====
 **This is a game written using the ES6 standard.**
 In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.
# Installation
Clone the Github repository and use Bundler to install the gem dependencies
```
git clone https://github.com/xumeishan0527/Udacity_project.git
cd Arcade_Game_Clone_zh
```
# File structure
```
├── js
│   ├── app.js         Game object packaging and creation
│   ├── engine.js      Game main loop engine
│   └── resources.js   Game material loading tool
├── images             Game material
├── css                Stage style
├── index.html         Game entry file
└── README.md
```
# TodoList
- create Player class based on the Enemy class
- complete the prototype methods of Enemy class, including update(dt) and render()
- complete the prototype methods of Player class, including update(), render() and handleInput()
- create instance of Player, and fill the position
- create many Enemy instances, and fill the line position
- complete the prototype method of Enemy class: isConflicted()
- complete the “README.md”
# Contributing
If you would like you can add additional functionality to the game. You can add more code to the app.js file and to the Enemy and Player classes to accomplish that.
# License
The content of this repository is licensed under here a Creative Commons Attribution License.