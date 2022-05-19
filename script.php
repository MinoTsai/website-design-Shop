<!--引用jQuery-->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

<!-- boostrap5 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

<!-- pushbar -->
<script type="text/javascript" src="assets/pushbar/pushbar.js"></script>
<script type="text/javascript">
    var pushbar = new Pushbar({
        blur: true,
        overlay: true,
    });
</script>

<!-- count number -->
<script>
    $(".increment").click(function() {
        //得到當前兄弟文字框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);

    })
    $(".decrement").click(function() {
        //得到當前兄弟文字框的值
        var n = $(this).siblings(".itxt").val();
        //當文字框的值減到1時就不再執行n--及後面的程式碼
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
    })
</script>

<!-- rating-stars -->
<script src="assets/js/rating.js"></script>
    <script>
        $(".review").rating({
            "value": 0,
            "color": "#ffd541",  
            "click": function(e) {
                console.log(e);
                $("#starsInput").val(e.stars);
            }
        });
    </script>