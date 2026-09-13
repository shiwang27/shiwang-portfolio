const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduced) {
  document.body.classList.add("motion-enabled");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
const picture = document.querySelector("#slide-image"),
  carousel = document.querySelector(".hero-stage");
document.querySelector("#copy-email").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("shiwangsolanki27@gmail.com");
    status.textContent = "Copied!";
    setTimeout(() => (status.textContent = ""), 3000);
  } catch {
    status.textContent = "Select the email address to copy it.";
  }
});
if (!reduced && matchMedia("(pointer:fine)").matches) {
  carousel.addEventListener("pointermove", (e) => {
    const r = carousel.getBoundingClientRect();
    picture.style.translate = `${(e.clientX - r.left - r.width / 2) / 80}px ${(e.clientY - r.top - r.height / 2) / 80}px`;
  });
  carousel.addEventListener("pointerleave", () => (picture.style.translate = "0 0"));
}
