// ==UserScript==
// @name         VK-TheBeautifulMessage
// @version      0.1
// @description  Sends beautiful message
// @author       NikitaPolar
// @include      /^https://vk\.com/im
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var message = '500 рублей';
    var classedit = '.im_editable.im-chat-input--text._im_text';
    var language = $('html')[0].lang;
    var caption = '';
    switch(language) {
        case 'ru':
            caption = 'Прекрасное сообщение';
            break;
        case 'ua':
            caption = 'Гарне сполучення';
            break;
        default:
            caption = 'Send beautiful message';
            break;
    }
    $("#ui_rmenu_fav:first").after('<a id="ui_rmenu_sndBeatiful" class="ui_rmenu_item"> <span>'+caption+'</span> </a>');
    $("#ui_rmenu_sndBeatiful").click(function() {
        $(classedit).text(message);
        $(classedit).trigger("click");
        $('.im-send-btn_audio').trigger("click");
    });
})();
