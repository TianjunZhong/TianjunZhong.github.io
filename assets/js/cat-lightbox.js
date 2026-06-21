(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  };

  ready(() => {
    const gallery = document.querySelector("[data-cat-gallery]");
    const lightbox = document.querySelector("[data-cat-lightbox]");

    if (!gallery || !lightbox) return;

    const mediaContainer = lightbox.querySelector("[data-cat-lightbox-media]");
    const caption = lightbox.querySelector("[data-cat-lightbox-caption]");
    const closeButton = lightbox.querySelector(".cat-lightbox__close");
    const triggers = [...gallery.querySelectorAll("[data-cat-media-trigger]")];
    let activeTrigger = null;
    let activeIndex = -1;

    const clearMedia = () => {
      const video = mediaContainer.querySelector("video");
      if (video) video.pause();
      mediaContainer.replaceChildren();
      caption.textContent = "";
    };

    const closeLightbox = () => {
      clearMedia();
      lightbox.hidden = true;
      document.body.classList.remove("cat-lightbox-open");
      document.removeEventListener("keydown", onKeyDown);

      if (activeTrigger) {
        activeTrigger.focus({ preventScroll: true });
        activeTrigger = null;
      }

      activeIndex = -1;
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    const showMedia = (index) => {
      const nextIndex = (index + triggers.length) % triggers.length;
      const trigger = triggers[nextIndex];
      const type = trigger.dataset.catType;
      const src = trigger.dataset.catSrc;
      const poster = trigger.dataset.catPoster;
      const alt = trigger.dataset.catAlt || "";
      const captionText = trigger.dataset.catCaption || "";

      if (!src) return;

      activeTrigger = trigger;
      activeIndex = nextIndex;
      clearMedia();

      if (type === "video") {
        const video = document.createElement("video");
        const source = document.createElement("source");
        video.autoplay = true;
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        if (poster) video.poster = poster;
        source.src = src;
        source.type = "video/mp4";
        video.append(source);
        mediaContainer.append(video);
        video.play().catch(() => {});
      } else {
        const image = document.createElement("img");
        image.src = src;
        image.alt = alt;
        mediaContainer.append(image);
      }

      caption.textContent = captionText;
    };

    const showPrevious = () => {
      if (activeIndex >= 0) showMedia(activeIndex - 1);
    };

    const showNext = () => {
      if (activeIndex >= 0) showMedia(activeIndex + 1);
    };

    const openLightbox = (trigger) => {
      const index = triggers.indexOf(trigger);
      if (index < 0) return;

      lightbox.hidden = false;
      document.body.classList.add("cat-lightbox-open");
      document.addEventListener("keydown", onKeyDown);
      showMedia(index);
      closeButton.focus({ preventScroll: true });
    };

    gallery.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-cat-media-trigger]");
      if (trigger) openLightbox(trigger);
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target.closest("[data-cat-lightbox-close]")) closeLightbox();
      if (event.target.closest("[data-cat-lightbox-previous]")) showPrevious();
      if (event.target.closest("[data-cat-lightbox-next]")) showNext();
    });
  });
})();
