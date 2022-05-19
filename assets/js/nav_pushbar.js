nav_pusherbar ='<aside data-pushbar-id="left" class="pushbar from_left p-3 pb-5">\
    <a href="categories.html">\
        <img class="nav-logo my-3" src="assets/img/demo-logo.png" alt="">\
    </a>\
    <ul class="navbar-nav product-category">\
        <li class="nav-item">\
            <!-- 以下為未登入時僅顯示會員專區，無法展開 -->\
            <!-- <a class="nav-link active" aria-current="page" href="login.html"><span class="material-icons nav-icons">person</span>會員專區</a> -->\
\
            <!-- 以下為登入後，可展開 start-->\
            <a class="nav-link" href="#member" data-bs-toggle="collapse" role="button"><span class="material-icons nav-icons">person</span>會員專區</a>\
            <div class="collapse" id="member">\
                <ul class="pushbar-nav">\
                    <li>\
                        <a href="order_list.html">訂單查詢</a>\
                    </li>\
                    <li>\
                        <a href="member_info.html">修改會員資料</a>\
                    </li>\
                    <li>\
                        <a href="change_password.html">修改密碼</a>\
                    </li>\
                </ul>\
            </div>\
            <!-- 以下為登入後，可展開 end-->\
        </li>\
        <li class="nav-item">\
            <a class="nav-link pushbar-btn" data-pushbar-target="right" href="#"><span class="material-icons nav-icons">shopping_cart</span>\
                <!--  購物車內商品數量 -->\
                <span class="cart-badge lblCartCount"> 2 </span>購物車</a>\
        </li>\
        <li class="nav-item">\
            <a class="nav-link" href="#product" data-bs-toggle="collapse" role="button"><span class="material-icons nav-icons">format_list_bulleted</span>商品分類</a>\
            <div class="collapse" id="product">\
                <ul class="pushbar-nav">\
                <li>\
            <a href="">所有商品</a>\
            <span class="count">33</span>\
        </li>\
        <li>\
            <!-- 展開點擊區塊 start -->\
            <a href="#books" data-bs-toggle="collapse" role="button">書籍</a>\
            <span class="count">3</span>\
            <!-- 展開點擊區塊 end -->\
            <!-- 展開後區塊 start -->\
            <div class="collapse" id="books">\
                <ul class="categories-collapse-box">\
                    <li>\
                        <a href="">教師專用系列</a>\
                        <span class="count">1</span>\
                    </li>\
                    <li>\
                        <a href="">學習系列</a>\
                        <span class="count">2</span>\
                    </li>\
                </ul>\
            </div>\
            <!-- 展開後區塊 end -->\
        </li>\
        <li>\
            <!-- 展開點擊區塊 start -->\
            <a href="#diy" data-bs-toggle="collapse" role="button">DIY套件</a>\
            <span class="count">7</span>\
            <!-- 展開點擊區塊 end -->\
            <!-- 展開後區塊 start -->\
            <div class="collapse" id="diy">\
                <ul class="categories-collapse-box">\
                    <li>\
                        <a href="">動力系列</a>\
                        <span class="count">1</span>\
                    </li>\
                    <li>\
                        <a href="">監控系列</a>\
                        <span class="count">2</span>\
                    </li>\
                    <li>\
                        <a href="">特約校園專區</a>\
                        <span class="count">2</span>\
                    </li>\
                </ul>\
            </div>\
            <!-- 展開後區塊 end -->\
        </li>\
        <li>\
            <!-- 展開點擊區塊 start -->\
            <a href="#robot" data-bs-toggle="collapse" role="button">機器人</a>\
            <span class="count">4</span>\
            <!-- 展開點擊區塊 end -->\
            <!-- 展開後區塊 start -->\
            <div class="collapse" id="robot">\
                <ul class="categories-collapse-box">\
                    <li>\
                        <a href="">X系列</a>\
                        <span class="count">3</span>\
                    </li>\
                    <li>\
                        <a href="">Y系列</a>\
                        <span class="count">1</span>\
                    </li>\
                </ul>\
            </div>\
            <!-- 展開後區塊 end -->\
        </li>\
        <li>\
            <!-- 展開點擊區塊 start -->\
            <a href="#component" data-bs-toggle="collapse" role="button">元件</a>\
            <span class="count">19</span>\
            <!-- 展開點擊區塊 end -->\
            <!-- 展開後區塊 start -->\
            <div class="collapse" id="component">\
                <ul class="categories-collapse-box">\
                    <li>\
                        <a href="">控制器</a>\
                        <span class="count">6</span>\
                    </li>\
                    <li>\
                        <a href="">顯示器</a>\
                        <span class="count">3</span>\
                    </li>\
                    <li>\
                        <a href="">開關</a>\
                        <span class="count">3</span>\
                    </li>\
                    <li>\
                        <a href="">LED</a>\
                        <span class="count">4</span>\
                    </li>\
                </ul>\
            </div>\
            <!-- 展開後區塊 end -->\
        </li>\
        <li>\
            <!-- 展開點擊區塊 start -->\
            <a href="#board" data-bs-toggle="collapse" role="button">開發版</a>\
            <span class="count">3</span>\
            <!-- 展開點擊區塊 end -->\
            <!-- 展開後區塊 start -->\
            <div class="collapse" id="board">\
                <ul class="categories-collapse-box">\
                    <li>\
                        <a href="">A系列</a>\
                        <span class="count">2</span>\
                    </li>\
                    <li>\
                        <a href="">B系列</a>\
                        <span class="count">1</span>\
                    </li>\
                </ul>\
            </div>\
            <!-- 展開後區塊 end -->\
        </li>\
                </ul>\
            </div>\
        </li>\
    </ul>\
    <form class="d-flex search-box">\
        <input class="form-control me-2" type="search" placeholder="關鍵字" aria-label="Search">\
        <button class="btn" type="submit"><span class="material-icons">search</span></button>\
    </form>\
</aside>';
document.write(nav_pusherbar);