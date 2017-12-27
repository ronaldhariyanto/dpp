<template>
  <footer>
    <div class="dp-footer">
      <div class="uk-container uk-padding">
        <div class="" uk-grid>
          <div class="uk-width-1-6@m">
            <div class="dp-footer-logo">
              <img src="~/static/img/logo-dp-footer.png" alt="">
              <span class="uk-margin-small-top dp-footer-logo__title">Dana Pensiun</span>
              <span class="uk-margin-small-bottom dp-footer-logo__subtitle">Pertamina</span>
            </div>
          </div>
          <div class="uk-width-1-4@m">
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
          <div class="uk-width-1-6@m">
            <div class="">
              <h4>Informasi</h4>
              <ul class="uk-list">
                <li><a href="">Peraturan</a></li>
                <li><a href="">Prosedur</a></li>
                <li><a href="">Majalah Bina</a></li>
                <li><a href="">Links</a></li>
              </ul>
            </div>
          </div>
          <div class="uk-width-1-6@m">
            <div class="">
              <h4>Laporan</h4>
              <ul class="uk-list">
                <li><a href="">Laporan Keuangan</a></li>
                <li><a href="">Laporan Tahunan</a></li>
                <li><a href="">Cetak E-SPT</a></li>
                <li><a href="">Simulasi</a></li>
              </ul>
            </div>
          </div>
          <div class="uk-width-1-4@m">
            <h4>Follow us on:</h4>
            <div class="uk-flex">
              <a href="" class="uk-margin-small-right" >
                <span uk-icon="icon: twitter; ratio: 1.2"></span>
              </a>
              <a href="" class="uk-margin-small-right">
                <span uk-icon="icon: facebook; ratio: 1.2"></span>
              </a>
              <a href="" class="">
                <span uk-icon="icon: google-plus; ratio: 1.2"></span>
              </a>
            </div>
            <div class="uk-margin-medium-top">
              <a href="#" class="uk-display-block"><img src="~/static/img/logo-ojk.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dp-footer__copyright ">
      <div class="container uk-text-center uk-padding-small">
        Copyright &copy; 2017 Dana Pensiun Pertamina. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .dp-footer {
    background-color: #002042;
    color: #7ac8ff;

    h4 {
      color:  #2d79c4;
    }

    a {
      color:  #fff;
    }

    &-logo {
    text-align: center;

      &__title {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1;
        color: red;
        font-size: 14px;
      }

      &__subtitle {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1;
        color: #fff;
        font-size: 1.3em;
        line-height: 1.3;
      }
    }

    &__copyright {
      background: #002042;
      color: #7ac8ff;
      font-size: 90%;
      border-top: 1px dotted #024793;
    }
  }
</style>