<template>
  <footer>
    <div class="dp-footer">
      <div class="uk-container uk-padding">
        <div class="" uk-grid>
          <div class="uk-width-1-6">
            <div class="dp-footer-logo">
              <img src="~/static/img/logo-dp-footer.png" alt="">
              <span class="uk-margin-small-top dp-footer-logo__title">Dana Pensiun</span>
              <span class="uk-margin-small-bottom dp-footer-logo__subtitle">Pertamina</span>
            </div>
            <ul class="uk-list">
              <li>
                <a href="" class="uk-margin-small-right" >
                  <span uk-icon="icon: twitter; ratio: 0.8"></span> Twitter
                </a>
              </li>
              <li>
                <a href="" class="uk-margin-small-right">
                  <span uk-icon="icon: facebook; ratio: 0.8"></span> Facebook
                </a>
              </li>
              <li>
                <a href="" class="">
                  <span uk-icon="icon: google-plus; ratio: 0.8"></span> Google Plus
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-width-1-4">
            <div class="">
              <h4>Contact Us</h4>
              <p>Jl. M.I Ridwan Rais No.7A
              Jakarta Pusat
              Indonesia
              10110
              </p>
              <ul class="uk-list">
                <li>Phone: <br>(021) 3802280 – (021) 3802281 <br>Ext. 150, 391</li>
                <li>Fax: <br>(021) 3804623 – (021) 3804593</li>
              </ul>
            </div>
          </div>
          <div class="uk-width-1-6">
            <div class="">
              <h4>Quick Link</h4>
              <ul class="uk-list">
                <li><a href="">Quick Link #1</a></li>
                <li><a href="">Quick Link #2</a></li>
                <li><a href="">Quick Link #3</a></li>
                <li><a href="">Quick Link #4</a></li>
              </ul>
            </div>
          </div>
          <div class="uk-width-1-6">
            <div class="">
              <h4>Quick Link</h4>
              <ul class="uk-list">
                <li><a href="">Quick Link #1</a></li>
                <li><a href="">Quick Link #2</a></li>
                <li><a href="">Quick Link #3</a></li>
                <li><a href="">Quick Link #4</a></li>
              </ul>
            </div>
          </div>
          <div class="uk-width-1-4">
            <div class="">
              <h4>Di bawah pengawasan</h4>
              <a href="#" class="uk-display-block"><img src="~/static/img/logo-ojk.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dp-footer__copyright ">
      <div class="container uk-text-center uk-padding-small">
        Copyright &copy; 2017 Dana Pensiun Pertamina. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style>
  .dp-footer {
    background-color: #d8d8d8;
    color: #808080;
  }

  .dp-footer-logo {
    text-align: center;
}

span.dp-footer-logo__title {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    color: red;
    font-size: 14px;
}

span.dp-footer-logo__subtitle {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    color: #000;
}

.dp-footer__copyright {
  background: #252525;
    color: #c3c3c3;
    font-size: 85%;
}
</style>