(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  };

  const script = document.currentScript || document.querySelector('script[src*="nav-meow.js"]');
  const meowUrl = script ? new URL("../audio/cat/meow.mp3", script.src).toString() : "/assets/audio/cat/meow.mp3";
  const meowRequestKey = "playNavMeow";
  const meowDurationMs = 1260;
  let activeAudio = null;

  const playMeow = () => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }

    const audio = new Audio(meowUrl);
    activeAudio = audio;
    audio.preload = "auto";

    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
      if (activeAudio === audio) activeAudio = null;
    };

    audio.addEventListener("ended", () => {
      if (activeAudio === audio) activeAudio = null;
    });

    window.setTimeout(stop, meowDurationMs);
    audio.play().catch(stop);
  };

  ready(() => {
    if (window.sessionStorage.getItem(meowRequestKey)) {
      window.sessionStorage.removeItem(meowRequestKey);
      playMeow();
    }

    document.querySelectorAll("[data-nav-meow]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const href = link.href;
        if (!href) return;

        if (href !== window.location.href) {
          window.sessionStorage.setItem(meowRequestKey, "true");
        } else {
          playMeow();
        }
      });
    });
  });
})();
