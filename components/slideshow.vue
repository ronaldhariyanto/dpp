<template>
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
</template>