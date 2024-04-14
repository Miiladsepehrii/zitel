! function() {
    const style =
        '<style>' +
        '.opaxha{display:none!important;}' +
        '.clientchat .box-header::before{content: url(https://zi-tel.com/assets/images/ztel2.png); float: right;margin: 0 0 0 10px;}' +
        '.textha, .clclose, .left > .dc-text{padding-top: 8px}' + '.box-header{padding: 8px 10px;}' +
        '.direct-chat .box-body::-webkit-scrollbar{width: 4px;}' +
        '.direct-chat .box-body::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgb(7, 19, 25);}' +
        '.direct-chat .box-body::-webkit-scrollbar-thumb {background-color: #000000;outline: 1px solid #061116;}' +
        '</style>';

    var goftinoScript = document.createElement("script"),
        s = "https://www.goftino.com/widget/IEpnq7",
        pageMainScript = document.getElementsByTagName("script")[0];
    goftinoScript.type = "text/javascript";
    goftinoScript.async = true;
    goftinoScript.defer = true;
    goftinoScript.src = localStorage.getItem("goftino") ? s + "?o=" + localStorage.getItem("goftino") : s;
    pageMainScript.parentNode.insertBefore(goftinoScript, pageMainScript);
    goftinoScript.onload = function() {
        $('#goftino_w').contents().find('head').append(style)
    };
}();