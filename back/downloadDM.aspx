<%@ Page Language="C#" AutoEventWireup="true" CodeFile="downloadDM.aspx.cs" Inherits="downloadDM" %>
<!DOCTYPE html>
<html>
<title>downloadDM</title>
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
        <div class="bg"></div>
        <div class="mainContainer thinContainer">
            <h1 class="pageTitle wTxt">Download DM</h1>
            <form>
                <div class="whiteBox">
                    <h2 class="mb_b">Download DM will be start after 3 seconds, if download not start, please click the botton</h2><a href="download.aspx?email=<%= Request.QueryString["email"] %>" class="blackBtn">DOWNLOAD DM</a>
                    <h3 class="ta_c mt_s">(File: <%= HttpUtility.UrlDecode(Request.QueryString["fn"]) %>/<%= HttpUtility.UrlDecode(Request.QueryString["size"]) %>)</h3>
                </div>
            </form>
        </div>
        <iframe width="1" height="1" frameborder="0" src="download.aspx?email=<%= Request.QueryString["email"] %>"></iframe>
    </div>
    <div id="footer">
        <div class="f1"></div>
        <div class="f2"></div>
    </div>
    <script type="text/javascript" src="js/index.js"></script>
</body>