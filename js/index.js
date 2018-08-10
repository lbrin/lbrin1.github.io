window.onload = function () {
    // 1. 求出屏幕的尺寸
    var screenW = document.documentElement.clientWidth;
    var screenH = document.documentElement.clientHeight;

// 2. 动态创建星星
for(var i=0; i<150; i++){
    // 2.1 创建星星
    var span = document.createElement('span');
    document.body.appendChild(span);

    // 2.2 随机的坐标
    var x = parseInt(Math.random() * screenW);
    var y = parseInt(Math.random() * screenH);
    span.style.left = x + 'px';
    span.style.top = y + 'px';

    // 2.3 随机缩放
    var scale = Math.random() * 1.5;
    span.style.transform = 'scale('+ scale + ', ' + scale + ')';

    // 2.4 频率
    var rate = Math.random() * 1.5;
    span.style.animationDelay = rate + 's';
    }
}