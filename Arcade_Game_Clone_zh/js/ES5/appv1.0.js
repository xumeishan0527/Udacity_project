// 这是我们的玩家要躲避的敌人 
const Enemy = function (x, y, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function (dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    if (this.x > 520) {
        this.x = -120;
    }
    this.x += dt * this.speed;
    this.isConflicted(player);
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.isConflicted = function (player) {
    if (this.y === player.y && Math.abs(this.x - player.x) < 60) {
        player.x = 202;
        player.y = 304;
        player.render();
    }
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
const Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
    if (this.y === -13) {
        allEnemies.map(function (enemy) {
            enemy.x < 505 ? enemy.x += 0.2 * enemy.speed : enemy.x = 505;
        });
        setTimeout(function () {
            player.x = 202;
            player.y = 304;
        }, 1000)
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (move) {
    switch (move) {
        case 'left':
            if (this.x > 0) {
                this.x = this.x - 101;
            }
            break;
        case 'right':
            if (this.x < 404) {
                this.x += 101;
            }
            break;
        case 'up':
            if (this.y > 55) {
                this.y -= 83;
                break;
            }
            if (this.y === 55) {
                this.y -= 68;
            }
            break;
        case 'down':
            if (this.y === -13) {
                this.y += 68;
                break;
            }
            if (this.y < 387) {
                this.y += 83;
            }
            break;
    }
    // console.log(this.x,this.y);
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
let allEnemies = [
    new Enemy(22, 55, 50), new Enemy(0, 83 * 2 + 55, 60),
    new Enemy(30, 83 + 55, 80), new Enemy(100, 55, 70)
];
let player = new Player(202, 83 * 3 + 55);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function (e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    
    player.handleInput(allowedKeys[e.keyCode]);
    
});



