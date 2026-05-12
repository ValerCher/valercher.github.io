document.addEventListener('DOMContentLoaded', function ()
{
    let body = document.querySelector('body');

    document.querySelector('#green').addEventListener('click',
         function(){body.style.backgroundColor='green';}
        );

    document.querySelector('#aqua').addEventListener('click',
         function(){body.style.backgroundColor='aqua';}
        );
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('index').onclick = function() {
        window.location.href = 'index.html';
    }

    document.getElementById('page2').onclick=function() {
        window.location.href = 'page2.html';
    }

    document.getElementById('page3').onclick=function() {
        window.location.href = 'page3.html';
    }

    document.getElementById('page4').onclick=function() {
        window.location.href = 'page4.html';
    }
});
