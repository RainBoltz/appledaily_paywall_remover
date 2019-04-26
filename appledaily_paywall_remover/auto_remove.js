
console.log( "Script properly injected into page" );


function updateIframe() {
  $('#hack_frame').contents().find("head").append($("<link/>", 
    { rel: "stylesheet", href: "https://github.com/RainBoltz/appledaily_paywall_remover/blob/master/appledaily_paywall_remover/appledaily_old_style.css", type: "text/css" }
  ));

  $('#hack_frame').contents().find("body").addClass('ndArticle_content').css("margin", "0px");

  setTimeout(function(){
    if($("#hack_frame").length > 0) {
      $("#hack_frame")[0].height = "";
      $("#hack_frame")[0].height = $("#hack_frame")[0].contentWindow.document.body.scrollHeight + "px";
    }   
  },50);
}

$.get(window.location.href, function(data) {
  var news_content = $(data).find(".ndArticle_margin")[0].innerHTML;

  $(".ndPaywall").remove();
  $('<iframe id="hack_frame" name="hack_frame" onload="updateIframe()" style="width: 100%">').appendTo("hgroup").ready(function(){
    setTimeout(function(){
        $("#hack_frame").contents().find("body").append(news_content);
        console.log( "100vh gogogo!" );
        $("#hack_frame").height("100vh");
    },50);
  });
});


console.log( "DONE!" );



