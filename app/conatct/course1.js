function setCarouslDesc() {
    let a = localStorage.getItem("lang")
      , n = $(".coworkingSpaceSliderContent.active").attr("data-desc");
    $("#picsDescription").text(coworkingSpaceImagesDesc[n][a])
}
function SendLinkByMail(a) {
    $("#contactNameWarning").html(""),
    $("#contactEmailAddressWarning").html(""),
    $("#contactEmailBodyWarning").html("");
    let n = $("#floatingNameInput").val()
      , t = $("#floatingEmailInput").val()
      , e = $("#emailBodyTextarea").val();
    if ("" == n && "" == t && "" == e)
        $("#contactNameWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactNameWarning">Please enter your name.</span>'),
        $("#contactEmailAddressWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactEmailWarning">Please enter a valid email address.</span>'),
        $("#contactEmailBodyWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactMessageWarning">Please enter your message.</span>'),
        translate("#contactNameWarning", indexTrans),
        translate("#contactEmailAddressWarning", indexTrans),
        translate("#contactEmailBodyWarning", indexTrans);
    else if ("" != t && validateEmail(t))
        if ("" == n)
            $("#contactNameWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactNameWarning">Please enter your name.</span>'),
            translate("#contactNameWarning", indexTrans);
        else if ("" == e)
            $("#contactEmailBodyWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactMessageWarning">Please enter your message.</span>'),
            translate("#contactEmailBodyWarning", indexTrans);
        else {
            var l = "Hello, this is " + n + ", " + e + ", My email is " + t
              , s = "mailto:Info@cascotec.com?subject=";
            s += encodeURIComponent("Contact From " + n),
            s += "&body=",
            s += encodeURIComponent(l),
            window.open(s)
        }
    else
        $("#contactEmailAddressWarning").html('<i class="fas fa-info-circle"></i> <span data-trans="contactEmailWarning">Please enter a valid email address.</span>'),
        translate("#contactEmailAddressWarning", indexTrans)
}
$(document).ready(function() {
    $(".preloader").delay(500).fadeOut(500);
    let a = localStorage.getItem("lang");
    console.log(a),
    null != a && null != a && "" != a || (a = "en",
    localStorage.setItem("lang", "en"),
    $("#langSelect").val(a)),
    "en" != a && (translate("html", indexTrans),
    $("#langSelect").val(a)),
    setCarouslDesc(),
    $("#carouselCowrkingSpace").on("slid.bs.carousel", function() {
        setCarouslDesc()
    })
}),
$("#langSelect").change(function() {
    localStorage.setItem("lang", $(this).val()),
    translate("html", indexTrans),
    setCarouslDesc()
}),
$(".cardshover").click(function() {
    $(this).toggleClass("flipped"),
    $(this).find(".front").toggleClass("d-none"),
    $(this).find(".back").toggleClass("d-none")
}),
$(window).on("load", function() {
    $(window).scroll(function() {
        $(".hideme").each(function(a) {
            var n = $(this).offset().top;
            $(window).scrollTop() + $(window).height() > n && $(this).addClass("showme")
        })
    })
}),
$(window).on("scroll", function() {
    document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 ? $(".backToTopBtn").css("display", "block") : $(".backToTopBtn").css("display", "none")
}),
$(".backToTopBtn").click(function() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}),
$(".galleryImg").click(function() {
    let a = $(this).attr("src");
    $(".modal").find("img").attr("src", a)
}),
validateEmail = (a=>a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
var languagesDir = {
    en: "ltr",
    ar: "rtl"
};
let objContainer = {};
function translate(a, n) {
    let t = localStorage.getItem("lang");
    null != languagesDir[t] && null != languagesDir[t] && ($("body").attr("dir", languagesDir[t]),
    $(a + " [data-trans]").each(function() {
        let a = $(this).attr("data-trans");
        null != $(this).attr("data-trans-target") ? $(this).attr($(this).attr("data-trans-target"), n[a][t]) : $(this).text(n[a][t])
    }))
}