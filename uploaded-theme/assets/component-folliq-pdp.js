document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.folliq-pdp').forEach(function (pdp) {
    var tiers = pdp.querySelectorAll('.folliq-pdp__tier');
    var gifts = pdp.querySelectorAll('.folliq-pdp__gift');
    var qtyInput = pdp.querySelector('.folliq-pdp__qty-input');
    var priceEl = pdp.querySelector('.folliq-pdp__price');
    var compareEl = pdp.querySelector('.folliq-pdp__price-compare');
    var saveEl = pdp.querySelector('.folliq-pdp__price-save');
    var stickyInfo = pdp.querySelector('.folliq-pdp__sticky-info');
    var atcPriceEl = pdp.querySelector('.folliq-pdp__atc-price');

    function selectTier(tier) {
      tiers.forEach(function (t) {
        t.classList.remove('is-selected');
      });
      tier.classList.add('is-selected');

      var qty = tier.getAttribute('data-quantity') || '1';
      var giftsUnlocked = parseInt(tier.getAttribute('data-gifts') || '0', 10);
      var price = tier.getAttribute('data-price');
      var compare = tier.getAttribute('data-compare');
      var save = tier.getAttribute('data-save');

      if (qtyInput) qtyInput.value = qty;
      if (priceEl && price) priceEl.textContent = price;
      if (compareEl) {
        if (compare) {
          compareEl.textContent = compare;
          compareEl.hidden = false;
        } else {
          compareEl.hidden = true;
        }
      }
      if (saveEl) {
        if (save) {
          saveEl.textContent = save;
          saveEl.hidden = false;
        } else {
          saveEl.hidden = true;
        }
      }
      if (stickyInfo && price) stickyInfo.textContent = price;
      if (atcPriceEl && price) {
        var compareHtml = compare ? '<s>' + compare + '</s>' : '';
        atcPriceEl.innerHTML = price + ' ' + compareHtml;
      }
    }

    tiers.forEach(function (tier) {
      tier.addEventListener('click', function () {
        selectTier(tier);
      });
    });

    // Gallery thumbnails
    var mainImg = pdp.querySelector('.folliq-pdp__main-img');
    var thumbs = pdp.querySelectorAll('.folliq-pdp__thumb');
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) {
          t.classList.remove('is-active');
        });
        thumb.classList.add('is-active');
        var fullSrc = thumb.getAttribute('data-full-src');
        if (mainImg && fullSrc) mainImg.src = fullSrc;
      });
    });

    // Sticky mobile bar
    var stickyBar = pdp.querySelector('.folliq-pdp__sticky-bar');
    var atcBtn = pdp.querySelector('.folliq-pdp__atc');
    var stickyBtn = pdp.querySelector('.folliq-pdp__sticky-btn');

    if (stickyBar && atcBtn && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            stickyBar.classList.toggle('is-visible', !entry.isIntersecting);
          });
        },
        { rootMargin: '0px' }
      );
      observer.observe(atcBtn);
    }

    if (stickyBtn && atcBtn) {
      stickyBtn.addEventListener('click', function () {
        atcBtn.click();
      });
    }
  });
});
