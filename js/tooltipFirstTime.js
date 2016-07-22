tooltip = $("#content");

function hideTooltip() {
    tooltip.css('display', 'none');
}

$("#content").append('boogers');
$("#content").click(hideTooltip);
Cookies.set('test', 5);
console.log(Cookies.get('test'));
console.log(11);