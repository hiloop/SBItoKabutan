

function setLink() {
    $('.middleAreaM2').find('td').find('a').each(function(index) {
        const href = $(this).attr('href');
        if (!href.includes('i_stock_sec')) {
            return true;
        }
        if ($(this).find('img').length >= 1) {
            return true;
        }
        var parent = $(this).parent();
        var code = parent.text().slice(0,4);
        var link = 'https://kabutan.jp/stock/?code=' + code;
        var kabutan = $('<a>', {
            'href':link,
            'class':'extend-kabutan',
            'text':'株探',
            'target':'_blank',
            'rel': 'noopener noreferrer'
        });
        $(this).parent().append(kabutan);
        console.log(code);
    });
}
setLink();
