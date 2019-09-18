$.fn.arCustSelect = function (arg) {
    var element = $(this);
    var jsnonAr = [];
    element.each(function (index) {
        var defaultText = $(this).find('option:selected').text();
        $(this).after('<div class="selectWrap"><div class="ar_searchWrap"><input type="text" class="arSerchInput"> <ul class="instedSelectOption"><\/ul></div><div class="selectedItem">' + defaultText + '</div></div>');
         
    });
    var iconInDropdrawn = arg.parentIcon;
    var cb = "";
    var labelStart = "";
    var labelEnd = "";
    //creating crosponding ul li
    element.find("option").not(":selected").each(function (index) {
        var liText = $(this).text();
        // jsnonAr.push(liText);
        var val = $(this).val();
        $(this).parent().siblings('.selectWrap').find('.instedSelectOption').append('<li value="' + val + '">' + cb + labelStart + liText + labelEnd + "</li>");
    });
    $('.selectedItem').after("<span class='listIcon'>" + iconInDropdrawn + "</span>");


    // console.log(jsnonAr); 

    // click events 
    $('.selectedItem').on('click', function () {
        $(this).siblings('.ar_searchWrap').slideToggle(400);
        $(this).siblings('.listIcon').toggleClass('rotate');
    });
    $('.instedSelectOption li').on('click', function () {
        $(this).closest('.ar_searchWrap').siblings('.selectedItem').text($(this).text());
        $(this).closest('.ar_searchWrap').slideUp(400);
        $('.listIcon').removeClass('rotate');
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
        var index = $(this).index();
        $(this).closest('.selectWrap').siblings('.ariConverter').val($(this).attr("value")).trigger('change');
    });

    $('.arSerchInput').on('keyup', function(){
        var arConsole = $(this).val();
        $(this).siblings('.instedSelectOption').find('li').each(function(){
           var tempText = $(this).text().toLowerCase().match('^'+arConsole);
           if(tempText ==null){
            $(this).css("display", 'none');
            
           }else{
            $(this).css("display", 'block');
           }
           console.log(tempText);                   
        });
        
    });
}    