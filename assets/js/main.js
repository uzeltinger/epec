var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

var links = document.getElementsByClassName('btn-ripple');
Array.prototype.forEach.call(links, function (b) {
    console.log("aca");
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    var rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';
    console.log(this);
    circle.classList.add('ripple');
}
var button_registrate = document.getElementsByClassName('button-registrate');
console.log(button_registrate);
button_registrate.addEventListener('click', function(){window.location.assign("oficina-virtual.html")});
