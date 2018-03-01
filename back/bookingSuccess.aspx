<%@ Page Language="C#" AutoEventWireup="true" CodeFile="bookingSuccess.aspx.cs" Inherits="bookingSuccess" %>
<%@ Import Namespace="Newtonsoft.Json.Linq" %>
<!DOCTYPE html>
<html>
<title>booking succeess</title>
<meta charset="utf-8">
<meta name="viewport" content="width=640" user-scalable="0">
<!-- hiding the Browser’s User Interface-->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<!-- meta start-->
<meta name="title" content="">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="copyright" content="">
<link rel="image_src" href="">
<!-- iOS 6-->
<meta name="apple-mobile-web-app-title" content="">
<!-- OG-->
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">
<meta property="og:type" content="website">
<meta property="og:image" content="">
<meta property="og:url" content="">
<meta property="fb:app_id" content="">
<!-- css start-->
<link rel="stylesheet" href="css/default.css">
<!-- js start-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/lib/TweenMax.min.js"></script>
<script type="text/javascript" src="js/lib/TimelineMax.min.js"></script>
<script type="text/javascript" src="js/lib/jquery.waitforimages.min.js"></script>
<!-- archung js-->
<script type="text/javascript" src="js/ChungTool.js">
</script>
<script>
if (!ChungTool.isOnline()) {
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
}
</script>

</html>

<body>
   <div id="header">
        <div class="menuBtnBox">
            <div class="menuBtn"> </div>
            <div class="menuTxt handTxt wTxt">Hello World, We're FENC</div>
            <div class="phoneShow mainIcon show"></div>
        </div>
        <div class="menuPop hide">
            <div class="clozBtn"></div>
            <div class="menuContainer">
                <a href="index.html" class="mBtn">
                    <div class="txt">Home</div>
                </a>
                <a href="exhibition.html" class="mBtn">
                    <div class="txt">Exhibition Information</div>
                </a>
                <a href="booking.aspx?exhibition=1" class="mBtn">
                    <div class="txt">Plan to Visit</div>
                </a>
                <a href="javascript:void(0)" data-videoId="NoqFj8AAH9Q" class="mBtn videoBtn">
                    <div class="txt">Exhibition Video</div>
                </a>
                <div class="mBtn"><a href="product.html" class="txt">Products at Exhibition</a>
                    <div class="subMenu">
                        <a href="product.html?page=0" class="mBtn">
                            <div class="txt">Sustainability Products</div>
                        </a>
                        <a href="product.html?page=1" class="mBtn">
                            <div class="txt">Innovation Products</div>
                        </a>
                        <a href="product.html?page=2" class="mBtn">
                            <div class="txt">Best Sellers Products</div>
                        </a>
                        <a href="product.html?page=3" class="mBtn">
                            <div class="txt">Classic Products</div>
                        </a>
                    </div>
                </div>
                <a href="beforeDownloadDM.html" class="mBtn">
                    <div class="txt">Download Exhibition DM</div>
                </a>
                <a href="contact.html" class="mBtn">
                    <div class="txt">Contact Us</div>
                </a>
            </div>
        </div>
    </div>
    <div class="videoPop popPage hide">
        <div class="videoBox">
            <div class="clozBtn popClozBtn"></div>
            <div class="container"></div>
        </div>
    </div>
    <div class="formPage page">
        <div class="bg"></div><% var join = (JObject) this.Items["Join"]; %>
        <div class="mainContainer thinContainer">
            <h1 class="pageTitle wTxt">Meeting Booking Submit Success</h1>
            <div class="whiteBox mb_b">
                <div class="f30">Happy to Meet You</div>
                <h1>Your Reservation Information</h1>
                <div class="visitInfo mt_b">
                    <h2 class="boldTxt">Exhibition to Go</h2>
                    <h1 class="blueTxt mb_s"><%= join.Value<string>("exhibition") %></h1>
                    <h2 class="boldTxt">Date</h2>
                    <h1 class="blueTxt mb_s"><%= join.Value<string>("date") %></h1>
                    <h2 class="boldTxt">Time</h2>
                    <h1 class="blueTxt mb_s"><%= join.Value<string>("time") %></h1>
                </div>
            </div>
            <h1 class="pageTitle wTxt">Read More  </h1>
            <div class="whiteBox">
                <a href="#" style="background-image: url(images/demoBg1.png)" class="picBgBox">
                    <div class="txt wTxt">
                        <div class="playIcon"></div>
                        <h2 class="mt_s">Watch the Story Video</h2>
                    </div>
                </a>
                <div style="background-image: url(images/demoBg2.png)" class="picBgBox">
                    <div class="txt wTxt">
                        <div class="f40 handTxt">PFC-Free</div>
                        <h2>Free from fluorocarbons</h2><a href="#" class="wBtn">TopDryZero serires </a><a href="#" class="wBtn">TopClean serires</a>
                    </div>
                </div>
                <div style="background-image: url(images/demoBg3.png)" class="picBgBox">
                    <div class="txt wTxt">
                        <div class="f40 handTxt">Smart Textile</div>
                        <h2>innovation , no limit</h2><a href="#" class="wBtn">See the DynaFeed </a>
                    </div>
                </div>
                <div style="background-image: url(images/demoBg4.png)" class="picBgBox">
                    <div class="txt wTxt">
                        <div class="f40 handTxt">Save the Ocean</div>
                        <h2>Solution to Protecting Our Oceans</h2><a href="#" class="wBtn">Ocean Recycled Yarn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
        <div class="f1"></div>
        <div class="f2"></div>
    </div>
    <script type="text/javascript" src="js/index.js"></script>
</body>