<template>
    <footer class="footer-area bg-gray pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-4">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <n-link to="/">
                                <img src="/img/logo/logo.png" alt="logo">
                            </n-link>
                        </div>
                        <p>© 2023 <a href="#" target="_blank">Dalvita</a>.<br> All Rights Reserved</p>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-30">
                        <div class="footer-title">
                            <h3>ABOUT US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><n-link to="/about">About Us</n-link></li>
                                <li><n-link to="/shop">Shop</n-link></li>
                                <li><n-link to="/contact">Contact</n-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-50">
                        <div class="footer-title">
                            <h3>USEFUL LINKS</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><n-link to="/blog">Blog</n-link></li>
                                <li><n-link to="/terms-conditions">Terms of Conditions</n-link></li>
                                <li><n-link to="/about">FAQs</n-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-widget mb-30 ml-75">
                        <div class="footer-title">
                            <h3>FOLLOW US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="footer-widget mb-30 ml-70">
                        <div class="footer-title">
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div class="subscribe-style">
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div class="subscribe-form">
                                <form class="mc-form">
                                    <input class="email" type="email" required="" placeholder="Enter your email here.." name="email" >
                                    <button class="button" name="subscribe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>
