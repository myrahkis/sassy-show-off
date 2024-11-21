const bgTarget = document.querySelector(".section-features");

// bgTarget.classList.add("visible");

// bgTarget.addEventListener("load", function () {
//   bgTarget.classList.remove("u-lazy-bg");
// });

const loadBg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  console.log(entry);

  entry.target.classList.add("visible");

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadBg, {
  root: null,
  threshold: 0,
});

imgObserver.observe(bgTarget);
