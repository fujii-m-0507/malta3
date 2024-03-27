$(function(){
    // 変数navPosに、nav要素の初期位置を代入
    let navPos = $("nav").offset().top;

    // ブラウザをスクロール
    $(window).scroll(function(){
        // スクロール量とnav要素の初期位置を比較
        if($(window).scrollTop() > navPos){
            // 条件を満たした場合：nav要素をブラウザ上部に固定
            $("nav").css("position", "fixed");
        }else{
            // 満たさない場合：nav要素を通常の配置にする
            $("nav").css("position", "static");
        }
    });
});
