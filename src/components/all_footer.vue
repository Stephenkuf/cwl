<template>

    <!--start of footer area -->
           
        <footer>
            <div class="container footer-top text-center">
                <div class="row">
                    <div class="col-md-3">
                        <a href="#" class="footer-logo mb-4">Content Writing Lounge.</a>
                    </div>

                    <div class="col-md-3 offset-md-1">
                        <ul id="no-bg" class="list-group footer-menu text-left">
                            <li class="list-group-item">
                                <a href="#">Home.</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#about">About.</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#service">Services.</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#contact">Contact.</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-5 text-right">
                        <div class="copyright-text">
                            Copyright &copy; <a href="#">Content Writing Lounge</a> <br>All right reserved.
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer {
  background: #f4f4f4;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Oswald', san-serif;
}

.list-group-item {
    border: none;
    background: transparent;
    padding: .10rem 1rem;
}

footer .footer-logo {
    color: rgba(0, 0, 0, 0.7);
    display: block;
}

.list-group-item a {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}

footer .copyright-text {
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
}

footer p.copyright-text a {
   color: rgba(0, 0, 0, 0.7);
}

footer p.copyright-text a:hover {
  text-decoration: none;
}

.footer-top {
    padding-top: 6rem;
    padding-bottom: 5rem;
}


</style>
