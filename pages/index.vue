<template>
<div class="uk-offcanvas-content">
  <!-- The whole page content goes here -->
  <nav class="uk-navbar-container uk-navbar uk-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active"><a href="">Home</a></li>
        <li class="uk-parent"><a href="">Tentang Kami</a></li>
        <li><a href="">Informasi</a></li>
        <li>
          <a href="#">Laporan</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active"><a href="#">Laporan 01</a></li>
              <li><a href="#">Laporan 02</a></li>
              <li><a href="#">Laporan 03</a></li>
            </ul>
          </div>
        </li>
        <li><a href="">Berita &amp; Foto</a></li>
        <li><a href="">Hubungi</a></li>
        <li><a href="">Himapa</a></li>
        <li><a href="">Forum</a></li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <form class="uk-search uk-search-default">
          <span uk-search-icon></span>
          <input class="uk-search-input" type="search" placeholder="Search...">
        </form>
      </div>
    </div>
  </nav>
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push">
    <ul class="uk-slideshow-items">
      <li>
        <img src="~/static/img/slide-01.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-02.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-03.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading</h2>
          <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-04.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading</h2>
          <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
  <div class="uk-container">
    <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div class="uk-background-muted uk-padding">Penting</div>
      </div>
      <div>
        <div class="uk-background-primary uk-padding uk-light">Daftar Ulang</div>
      </div>
      <div>
        <div class="uk-background-secondary uk-padding uk-light">Forum</div>
      </div>
      <div>
        <div class="uk-background-primary uk-padding uk-light">Berita &amp; Foto</div>
      </div>
      <div>
        <div class="uk-background-secondary uk-padding uk-light">Tanya Jawab</div>
      </div>
    </div>
    <h3 class="uk-heading-line uk-text-center"><span>Pengumuman Terbaru</span></h3>
    <div class="uk-grid-match uk-grid-divider uk-child-width-expand@s uk-text-center" uk-grid>
      <div class="">
        <span class="uk-display-block">Penipuan yang atas nama DP Pertamina</span>
        <button class="uk-button uk-button-primary">Primary</button>
      </div>
      <div>
        <span class="uk-display-block">Pengalihan alamat pembayaran manfaat pensiun</span>
        <button class="uk-button uk-button-primary">Primary</button>
      </div>
      <div>
        <span class="uk-display-block">Pengumuman penyesuaian MP Tahun 2017</span>
        <button class="uk-button uk-button-primary">Primary</button>
      </div>
      <div>
        <span class="uk-display-block">Pengumuman kenaikan manfaat pensiun tahun 2017</span>
        <button class="uk-button uk-button-primary">Primary</button>
      </div>
    </div>
    <h3 class="uk-heading-line uk-text-center"><span>Berita Dana Pensiun Pertamina</span></h3>
    <div class="uk-child-width-1-2 uk-text-center" uk-grid>
      <div class="uk-grid-item-match">
        <div class="uk-card uk-card-default uk-card-body">Item</div>
      </div>
      <div>
        <div class="uk-child-width-1-2 uk-text-center" uk-grid>
          <div>
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
          <div>
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
          <div>
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
          <div>
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="uk-heading-line uk-text-center"><span>Galeri Kegiatan</span></h3>
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-text-center" uk-grid-parallax="translate:200">
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
      <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Headline</h1>
      <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <footer>
    <div class="uk-container">
      <div class="uk-text-center" uk-grid>
        <div class="uk-width-1-4">
          <div class="uk-card uk-card-default uk-card-body">1-4</div>
        </div>
        <div class="uk-width-3-4">
          <div class="uk-card uk-card-default uk-card-body">
            <div class="uk-text-center" uk-grid>
              <div class="uk-width-1-3">
                <div class="uk-card uk-card-default uk-card-body">1-3</div>
              </div>
              <div class="uk-width-1-3">
                <div class="uk-card uk-card-default uk-card-body">1-3</div>
              </div>
              <div class="uk-width-1-3">
                <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="icon: twitter"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="icon: facebook"></a>
                <a href="" class="uk-icon-button" uk-icon="icon: google-plus"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- This is a button toggling the off-canvas -->
  <button uk-toggle="target: #my-id" type="button"></button>
  <!-- This is an anchor toggling the off-canvas -->
  <a href="#my-id" uk-toggle></a>
  <!-- This is the off-canvas -->
  <div id="my-id" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
    </div>
  </div>
</div>
</template>