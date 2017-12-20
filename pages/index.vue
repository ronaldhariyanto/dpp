<template>
  <section>
    <Slideshow/>
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
    <Banner/>
  </section>
</template>

<script>
import Slideshow from '~/components/slideshow.vue';
import Banner from '~/components/banner.vue';

export default {
  components: {
    Slideshow,
    Banner,
  },
};
</script>