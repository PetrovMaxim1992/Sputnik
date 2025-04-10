document.getElementById('firstButton').classList.add('on');
document.getElementById('firstButton').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('secondButton').classList.remove('on');
    document.getElementById('thirdButton').classList.remove('on');
});

document.getElementById('secondButton').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('firstButton').classList.remove('on');
    document.getElementById('thirdButton').classList.remove('on');
});

document.getElementById('thirdButton').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('firstButton').classList.remove('on');
    document.getElementById('secondButton').classList.remove('on');
});

