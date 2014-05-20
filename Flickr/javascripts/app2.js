
var evntHandler = function(){

    var prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    var suffixURL = "&format=json&jsoncallback=?";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").html("");

    $.getJSON(requestURL, function(flickrResponse) {
        console.log(flickrResponse);
        flickrResponse.items.forEach(function (item) {
            var $img = $("<img>").hide();
            $img.attr("src", item.media.m);
            $("main .photos").append($img);
            $img.fadeIn();
        });
    });
};


$("button").on("click", evntHandler);

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        evntHandler.send();


    }
});



























