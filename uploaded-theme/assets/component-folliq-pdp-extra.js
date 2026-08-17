document.addEventListener('DOMContentLoaded', function () {
  // Ingredients carousel
  document.querySelectorAll('.folliq-ing').forEach(function (root) {
    var items = root.querySelectorAll('.folliq-ing__list-item');
    var cards = root.querySelectorAll('.folliq-ing__card');
    var fill = root.querySelector('.folliq-ing__progress-fill');
    var prevBtn = root.querySelector('[data-ing-prev]');
    var nextBtn = root.querySelector('[data-ing-next]');
    var current = 0;

    function show(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      current = index;
      items.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      cards.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      if (fill) fill.style.width = ((index + 1) / items.length) * 100 + '%';
    }

    items.forEach(function (item, i) {
      item.addEventListener('click', function () {
        show(i);
      });
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });

    if (items.length) show(0);
  });

  // Before/after carousel
  document.querySelectorAll('.folliq-ba2').forEach(function (root) {
    var slides = root.querySelectorAll('.folliq-ba2__slide');
    var fill = root.querySelector('.folliq-ba2__progress-fill');
    var prevBtn = root.querySelector('[data-ba2-prev]');
    var nextBtn = root.querySelector('[data-ba2-next]');
    var current = 0;

    function show(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      slides.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      if (fill) fill.style.width = ((index + 1) / slides.length) * 100 + '%';
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });

    if (slides.length) show(0);
  });

  // Trustpilot carousel
  document.querySelectorAll('.folliq-tp').forEach(function (root) {
    var slides = root.querySelectorAll('.folliq-tp__slide');
    var fill = root.querySelector('.folliq-tp__progress-fill');
    var prevBtn = root.querySelector('[data-tp-prev]');
    var nextBtn = root.querySelector('[data-tp-next]');
    var current = 0;

    function show(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      slides.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      if (fill) fill.style.width = ((index + 1) / slides.length) * 100 + '%';
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });

    if (slides.length) show(0);
  });
});
