<template>
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push">
    <ul class="uk-slideshow-items">
      <li>
        <img src="~/static/img/slide-01.jpg" alt="" uk-cover>
        <div class="uk-position-center-left uk-position-large">
          <div class="dp-slide-box uk-padding uk-width-5-6">
            <h2 uk-slideshow-parallax="x: 100,-100">Temu Pendiri &amp; Mitra Pendiri 2015</h2>
            <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="" class="uk-button uk-button-primary uk-margin-medium-top">view more</a>
          </div>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-02.jpg" alt="" uk-cover>
        <div class="uk-position-center-left uk-position-large">
          <div class="dp-slide-box uk-padding uk-width-5-6">
            <h2 uk-slideshow-parallax="x: 100,-100">Temu Pendiri &amp; Mitra Pendiri 2016</h2>
            <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="" class="uk-button uk-button-primary uk-margin-medium-top">view more</a>
          </div>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-03.jpg" alt="" uk-cover>
        <div class="uk-position-center-left uk-position-large">
          <div class="dp-slide-box uk-padding uk-width-5-6">
            <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Temu Pendiri &amp; Mitra Pendiri 2017</h2>
            <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="" class="uk-button uk-button-primary uk-margin-medium-top">view more</a>
          </div>
        </div>
      </li>
      <li>
        <img src="~/static/img/slide-04.jpg" alt="" uk-cover>
        <div class="uk-position-center-left uk-position-large">
          <div class="dp-slide-box uk-padding uk-width-5-6">
            <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Temu Pendiri &amp; Mitra Pendiri 2018</h2>
            <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="" class="uk-button uk-button-primary uk-margin-medium-top">view more</a>
          </div>
        </div>
      </li>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
</template>

<style>
  .dp-slide-box {
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  .dp-slide-box h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
  }

  .dp-slide-box p {
    font-size: 16px;
  }

  .dp-slide-box .uk-button {
    background-color: #ffae00;
    color: #0a0a0a;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    border-radius: 5px;
  }

  .dp-slide-box .uk-button:hover {
    background-color: #cc8b00;
    color: #0a0a0a;
  }
</style>