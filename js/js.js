//轮播图
(function () {
    var $Nav2=$('.nav-2');
    var $Btn=$Nav2.find('a');
    $Btn.hide();
    $Nav2.find('h2').hide();
    $Nav2.find('h3').hide();
    $Nav2.hover(function () {
        $Btn.show('fast');
        $Nav2.find('h2').show();
        $Nav2.find('h3').show();
    },function () {
        $Btn.hide();
        $Nav2.find('h2').hide();
        $Nav2.find('h3').hide();
    })
})();

//导航响应室
(function () {
    var $Btn=$('.nav-1 dl a');
    var $dtUl=$('.nav-1 dt ul');
    $Btn.click(function () {
        $('.nav-1  dt ul').show();
        $('.nav-1  dt').show();
    })
    $dtUl.mouseleave(function () {
        $dtUl.hide('normal')
    })
})();
