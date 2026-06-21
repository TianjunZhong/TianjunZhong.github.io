---
layout: page
permalink: /cat/
title: Buding 🐾
description:
nav: true
nav_title: cat 🐾
nav_meow: true
nav_order: 6
cat_lightbox: true
cat_media:
  - type: image
    path: assets/img/cat/cat-01.jpg
    alt: Cat photo 01
    caption: Graduation day, with a Columbia cap 🎓!
  - type: image
    path: assets/img/cat/cat-02.jpg
    alt: Cat photo 02
    caption: A relaxed cuddle in mom's arms.
  - type: image
    path: assets/img/cat/cat-03.jpg
    alt: Cat photo 03
    caption: Stretching out on the bed.
  - type: image
    path: assets/img/cat/cat-04.jpg
    alt: Cat photo 04
    caption: Tucked into the cat tree for a quiet nap.
  - type: image
    path: assets/img/cat/cat-05.jpg
    alt: Cat photo 05
    caption: Sniffing a red rose very closely.
  - type: image
    path: assets/img/cat/cat-06.jpg
    alt: Cat photo 06
    caption: Sniffing a bit more...
  - type: image
    path: assets/img/cat/cat-07.jpg
    alt: Cat photo 07
    caption: 🐈🌹
  - type: image
    path: assets/img/cat/cat-08.jpg
    alt: Cat photo 08
    caption: Happy Chinese New Year!
  - type: image
    path: assets/img/cat/cat-09.jpg
    alt: Cat photo 09
    caption: Sharing the favorite cushion with Xiaomi.
  - type: image
    path: assets/img/cat/cat-10.jpg
    alt: Cat photo 10
    caption: Stop eating my food!!!
  - type: image
    path: assets/img/cat/cat-11.jpg
    alt: Cat photo 11
    caption: Perched neatly.
  - type: image
    path: assets/img/cat/cat-12.jpg
    alt: Cat photo 12
    caption: Leave me alone!!!
  - type: image
    path: assets/img/cat/cat-13.jpg
    alt: Cat photo 13
    caption: Chilling, man.
  - type: image
    path: assets/img/cat/cat-14.jpg
    alt: Cat photo 14
    caption: Preying.
  - type: image
    path: assets/img/cat/cat-15.jpg
    alt: Cat photo 15
    caption: A very serious lounging pose.
  - type: image
    path: assets/img/cat/cat-16.jpg
    alt: Cat photo 16
    caption: Peeking.
  - type: image
    path: assets/img/cat/cat-17.jpg
    alt: Cat photo 17
    caption: A selfie.
  - type: image
    path: assets/img/cat/cat-18.jpg
    alt: Cat photo 18
    caption: Rolling over.
  - type: video
    path: assets/video/cat/cat-video-01.mp4
    poster: assets/img/cat/cat-video-01-poster.jpg
    caption: A quiet video moment.
  - type: video
    path: assets/video/cat/cat-video-02.mp4
    poster: assets/img/cat/cat-video-02-poster.jpg
    caption: Gotcha!
---

<div class="cat-page">
  <p class="cat-intro">Buding, whose name means pudding in Chinese, is a 7-year-old little lady ruling her New York apartment with soft paws and serious opinions.</p>

  {% if page.cat_media and page.cat_media.size > 0 %}
    <div class="cat-media-grid" data-cat-gallery>
      {% for item in page.cat_media %}
        <figure class="cat-media">
          {% if item.type == 'video' %}
            <button
              class="cat-media-button"
              type="button"
              data-cat-media-trigger
              data-cat-type="video"
              data-cat-src="{{ item.path | relative_url }}"
              data-cat-poster="{{ item.poster | relative_url }}"
              data-cat-caption="{{ item.caption | escape }}"
              data-cat-alt="{{ item.alt | default: item.caption | default: 'Cat video' | escape }}"
              aria-label="Open video: {{ item.caption | default: 'Cat video' | escape }}"
            >
              <img src="{{ item.poster | relative_url }}" alt="{{ item.alt | default: item.caption | default: 'Cat video' }}">
              <span class="cat-media-play" aria-hidden="true"><i class="ti ti-player-play-filled"></i></span>
            </button>
          {% else %}
            <button
              class="cat-media-button"
              type="button"
              data-cat-media-trigger
              data-cat-type="image"
              data-cat-src="{{ item.path | relative_url }}"
              data-cat-caption="{{ item.caption | escape }}"
              data-cat-alt="{{ item.alt | default: item.caption | default: 'Cat photo' | escape }}"
              aria-label="Open photo: {{ item.caption | default: item.alt | default: 'Cat photo' | escape }}"
            >
              <img src="{{ item.path | relative_url }}" alt="{{ item.alt | default: item.caption | default: 'Cat photo' }}">
            </button>
          {% endif %}
        </figure>
      {% endfor %}
    </div>
    <div class="cat-lightbox" data-cat-lightbox hidden>
      <div class="cat-lightbox__backdrop" data-cat-lightbox-close></div>
      <div class="cat-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Cat media viewer">
        <button class="cat-lightbox__close" type="button" data-cat-lightbox-close aria-label="Close">
          <i class="ti ti-x"></i>
        </button>
        <button class="cat-lightbox__nav cat-lightbox__nav--previous" type="button" data-cat-lightbox-previous aria-label="Previous media">
          <i class="ti ti-chevron-left"></i>
        </button>
        <button class="cat-lightbox__nav cat-lightbox__nav--next" type="button" data-cat-lightbox-next aria-label="Next media">
          <i class="ti ti-chevron-right"></i>
        </button>
        <div class="cat-lightbox__media" data-cat-lightbox-media></div>
        <p class="cat-lightbox__caption" data-cat-lightbox-caption></p>
      </div>
    </div>
  {% else %}
    <p class="cat-empty">Photos and videos coming soon.</p>
  {% endif %}
</div>
