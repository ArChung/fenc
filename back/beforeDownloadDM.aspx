<%@ Page Language="C#" AutoEventWireup="true" CodeFile="beforeDownloadDM.aspx.cs" Inherits="beforeDownloadDM" %>
<%@ Import Namespace="Newtonsoft.Json.Linq" %>
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
            <form runat="server" method="post" id="frmContent" onsubmit="javascript:return checkForm(this);">
                <div class="whiteBox">
                    <h1 class="mb_b">Before Download<br>Let Us Know aAbout You</h1>
                    <h2 class="mt_s">Name*</h2>
                    <input type="text" name="name" maxlength="100" />
                    <h2>Company*</h2>
                    <input type="text" name="companyme" maxlength="200" />
                    <h2>Job Title</h2>
                    <input type="text" name="job_title" maxlength="100" />
                    <h2>Phone Number</h2>
                    <input type="tel" name="phone" maxlength="30">
                    <h2>Email*</h2>
                    <input type="email" name="email" maxlength="100" />
                    <h2>Best way to contact</h2>
                    <div class="btnBox difBox mt_s threeRowBox">
                        <div class="pBtn">
                            <input type="radio" name="contactWay" value="P" id="byPhone" />
                            <label for="byPhone">
                                <h2>phone</h2>
                            </label>
                        </div>
                        <div class="pBtn">
                            <input type="radio" name="contactWay" value="E" id="byMail" />
                            <label for="byMail">
                                <h2>email</h2>
                            </label>
                        </div>
                    </div>
                    <h2>Area of Interest*</h2>
                    <div class="btnBox difBox mt_s threeRowBox">
<%
    var interests = ((JObject) this.Items["Data"]).Value<JArray>("interests");
    foreach (var interest in interests)
    {
%>
                        <div class="pBtn">
                            <input type="radio" name="interest" value="<%= interest.Value<string>() %>" id="<%= interest.Value<string>().Replace(" ", "_") %>">
                            <label for="<%= interest.Value<string>().Replace(" ", "_") %>">
                                <h2><%= interest.Value<string>() %></h2>
                            </label>
                        </div>
<%
    }
%>
                    </div>
                    <h2>Additional Comments</h2>
                    <textarea name="additional_comments"></textarea>
                    <h4>By click submit , you confirm that you accept the<a data-target="rulePop" href="javascript: void(0)" target="_blank" class="underline popBtn">Terms of Use</a></h4>
                    <input type="submit" value="SUBMIT" class="blackBtn">
                </div>
            </form>
        </div>
        <div class="rulePop hide popPage">
            <div class="popBg"></div>
            <div class="popContainer">
                <div class="clozBtn popClozBtn"></div>
                <h1>Terms of Use</h1>
                <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the http://www.fenc.com website (the "Service") operated by FENC Exhibition ("us", "we", or "our").</p>
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. This Terms of Service is licensed by TermsFeed Generator to FENC Exhibition.</p>
                <h2>Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by FENC Exhibition.</p>
                <p>FENC Exhibition has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that FENC Exhibition shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                <h2>Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of Taiwan, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
                <h2>Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
                <div class="blackBtn popClozBtn">CLOSE</div>
            </div>
        </div>
    </div>
    <div id="footer">
        <div class="f1"></div>
        <div class="f2"></div>
    </div>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript">
        function checkForm(form) {
            if (check_null_or_empty_or_space(form.elements['name'].value)) {
                alert('Name is required');
                return false;
            }
            if (check_null_or_empty_or_space(form.elements['companyme'].value)) {
                alert('Company is required');
                return false;
            }
            if (check_null_or_empty_or_space(form.elements['email'].value)) {
                alert('Email is required');
                return false;
            }
            if (check_no_checked(form.elements['interest'])) {
                alert('Interest is required');
                return false;
            }
            return true;
        }

        function check_null_or_empty_or_space(value) {
            return value == null || value.length == 0 || value.trim().length == 0;
        }

        function check_no_checked(field) {
            var isChecked = false;
            for (var i = 0; i < field.length; i++)
                isChecked |= field[i].checked;
            return isChecked == false;
        }

    </script>
</body>