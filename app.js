//Toggle Profile Section
$(document).ready(function(){
    $('#openCloseProfile').click(function(){
        if($(this).text() == "open"){
            $(this).text("close");
            $('.profile-toggle').fadeIn();
        } else {
            $(this).text("open");
            $('.profile-toggle').fadeOut();
        }
    });
});


//Toggle Additional Content 
$(document).ready(function(){
    $('#toggleButton').click(function(){
        if($(this).text() == "Read More"){
            $(this).text("Read Less");
            $('.additional-content-section').fadeIn();
        } else {
            $(this).text("Read More");
            $('.additional-content-section').fadeOut();
        }
    });
});


//News Section
$(document).ready(function(){
    $('#openCloseNews').click(function(){
        if($(this).text() == "open"){
            $(this).text("close");
            $('.news-toggle').fadeIn();
        } else {
            $(this).text("open");
            $('.news-toggle').fadeOut();
        }
    });
});

//Entertainment Section
$(document).ready(function(){
    $('#openCloseEntertainment').click(function(){
        if($(this).text() == "open"){
            $(this).text("close");
            $('.entertainment-toggle').fadeIn();
        } else {
            $(this).text("open");
            $('.entertainment-toggle').fadeOut();
        }
    });
});

//Sports Section
$(document).ready(function(){
    $('#openCloseSports').click(function(){
        if($(this).text() == "open"){
            $(this).text("close");
            $('.sports-toggle').fadeIn();
        } else {
            $(this).text("open");
            $('.sports-toggle').fadeOut();
        }
    });
});

//Finance Section
$(document).ready(function(){
    $('#openCloseFinance').click(function(){
        if($(this).text() == "open"){
            $(this).text("close");
            $('.finance-toggle').fadeIn();
        } else {
            $(this).text("open");
            $('.finance-toggle').fadeOut();
        }
    });
});