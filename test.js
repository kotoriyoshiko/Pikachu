let string = `
    .skin *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.skin *::before{box-sizing: border-box;}
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid black;
    border-color: black transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes kuku {
    0%{
        transform: rotate(0);
    }
    33%{
        transform: rotate(10deg);
    }
    66%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: kuku 300ms infinite linear
}
.yuan{
    position: absolute;
    background: black;
    width: 20px;
    height: 6px;
    top: -16px;
    margin-left: -10px;
    border-radius: 10px 10px 0 0 ;
}
.eye{
    border: 2px #000 solid;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background: #2e2e2e;
}
.eye::before{
    content: '';
    border: 3px #000 solid;
    display: block;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    /* border: 1px red solid; */
    position: absolute;
    left: 50%;
    top: 170px;
    width: 200px;
    height: 200px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -18px;
}
.mouth .up .lip{
    border: 5px solid black;
    position: relative;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-top-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
    z-index: 8;
}
.mouth .up .left.lip{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);

}
.mouth .up .right.lip{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    position: absolute;
    width: 7px;
    height: 30px;
    bottom: 0;
    background:#ffe600 ;
}
.mouth .up .left.lip::before{
    right: -6px;
}
.mouth .up .right.lip::before{
    left: -6px;
}
.mouth .down{
    /* border: 1px solid red; */
    position: absolute;
    height: 180px;
    width: 100%;
    top: 5px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    /* border: 1px solid red; */
    position: absolute;
    width: 200px;
    height: 300px;
    background:#ff485f ;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    border: 1px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top: 200px;
    z-index: 5;
    margin-left: -44px;
    border-radius: 44px;
    background: #ff000f;
}
.left.face{
    transform: translateX(-180px);
}
.left.face>img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
    position: absolute;
    margin-left: 88px;
}
.right.face{
    transform: translateX(180px);
}
.you{
    /* border: 1px solid red; */
    position: absolute;
    width: 100px;
    height: 10px;
    left: 50%;
    top: 160px;
    margin-left: -50px;
    background: #ffe600;
    z-index:  9;
}
.one{
    transform: translateX(-50px) rotate(-15deg);
}
.two{
    transform: translateX(50px) rotate(15deg);
}
`

let player = {
    n: 1,
    time: 100,
    id: undefined,
    init: () => {
        demo2.innerHTML = string.substr(0, player.n)
        demo.innerText = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                let vaule = player.events[key]
                document.querySelector(key).onclick = player[vaule]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        demo2.innerHTML = string.substr(0, player.n)
        demo.innerText = string.substr(0, player.n)
        demo.scrollTop = demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }

}

player.init()

