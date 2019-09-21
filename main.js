// https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 82);
});