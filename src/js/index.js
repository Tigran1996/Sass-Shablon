$(document).ready(function () {

    $(".burger-span").click(function () {
        $(".burger-height").toggleClass("burger-none");
        $(".burger-item").toggleClass("burger-item-none");
    })
    $(".dropdown_arrow").click(function () {
        $(this).siblings("ul").toggleClass("drop-none");
    })
    $("#dropdownMenuButtonS").click(function () {
        $(this).siblings(".dropdown-menu").toggleClass("show");
    })
});