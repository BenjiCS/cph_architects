$.get("./assets/model/Navbar/navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get(".assets/model/Footer/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$('head').append('<link rel="stylesheet" href="./assets/css/style.css" type="text/css" />');
