
var getUL=document.getElementById('deck'),
    list=document.getElementsByClassName('card'),
    restart=document.getElementById('restart'),
    clickList_two=[],indexContainer=[];

/*
* Create a list that holds all of your cards
*/
function getLiList() {
    var tmpList=[];
    for(var i=0;i<list.length;i++){
        var liList_item={};
        liList_item=list[i];
        tmpList.push(liList_item);
    }
    var randomList=shuffle(tmpList);
    render__liList(randomList);
}

/*
* 渲染每个list
*/

function render__liList(array) {
    getUL.innerHTML='';
    for(var i=0;i<array.length;i++){
        getUL.appendChild(array[i]);
    }
    listening__click();
}

/*
*   重置按钮
*/
restart.addEventListener('click',function () {
    for(var i=0;i<list.length;i++){
        list[i].style.cssText ='transform:rotateY(0)';
    }
    getLiList();
});


/*
*监听点击事件
*/
function listening__click() {
    for(var i=0;i<list.length;i++){
        list[i].count=i;
        list[i].onclick=function () {
            judgeResult(this.count);
        };
    }
}


/*
*判断结果函数
*/
function judgeResult(index) {
    indexContainer.push(index);
    console.log(indexContainer);
    var clickList={};
    clickList.i_className=list[index].lastElementChild.firstElementChild.getAttribute('class');
    clickList_two.push(clickList);

    if(clickList_two.length===2){
        if (clickList_two[0].i_className===clickList_two[1].i_className){
            for (var j=0 ;j<indexContainer.length;j++){

                list[indexContainer[j]].style.cssText =
                    'animation:changeScale 0.6s ease';
                list[indexContainer[j]].lastElementChild.style.background='#02ccba';
                list[indexContainer[j]].addEventListener('webkitAnimationEnd',function () {
                    this.style.webkitAnimation='';
                });
            }
        }
        else {
            for (var j=0 ;j<indexContainer.length;j++){
                list[indexContainer[j]].style.cssText =
                        'animation:changeSkew 0.6s ease;transform-origin:50% 150%';
                list[indexContainer[j]].lastElementChild.style.background='#de3f40';
                list[indexContainer[j]].addEventListener('webkitAnimationEnd',function () {
                    this.style.cssText ='animation:changeRotate 0.6s ease reverse forwards;';
                });
            }
        }
        clickList_two=[];
        indexContainer=[];
    }
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function init() {
    getLiList();

    setTimeout(function () {
        for(var i=0;i<list.length;i++){
            list[i].style.cssText =
                'animation:changeRotate 0.6s ease reverse forwards;' +
                'transform:rotateY(0)';
        }
    },1000);
    listening__click();
}

init();
