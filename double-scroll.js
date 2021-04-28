  var div = $('.ig-posts');
    setInterval(function(){
        var pos = div.scrollLeft();
        div.scrollLeft(pos + 2);
    }, 200)
