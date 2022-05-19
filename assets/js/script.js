// pushbar
var pushbar = new Pushbar({
    blur: true,
    overlay: true,
});

// count number
$(".increment").click(function () {
    //得到當前兄弟文字框的值
    var n = $(this).siblings(".itxt").val();
    n++;
    $(this).siblings(".itxt").val(n);

})
$(".decrement").click(function () {
    //得到當前兄弟文字框的值
    var n = $(this).siblings(".itxt").val();
    //當文字框的值減到1時就不再執行n--及後面的程式碼
    if (n == 1) {
        return false;
    }
    n--;
    $(this).siblings(".itxt").val(n);
})

// rating star
$(".review").rating({
    "value": 0,
    "color": "#ffd541",
    "click": function (e) {
        console.log(e);
        $("#starsInput").val(e.stars);
    }
});