document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");

  counters.forEach(function (counter) {
    const fullText = counter.innerHTML.trim(); // Örn: "75%"
    const numberMatch = fullText.match(/^(\d+)/); // Başındaki sayıyı al
    const unitMatch = fullText.match(/\D+$/); // Sonundaki harf/birimi al
    if (!numberMatch) return;
    const target = parseInt(numberMatch[0]);
    const unit = unitMatch ? unitMatch[0] : ""; // Birim varsa al, yoksa boş
    let current = 0;
    const increment = Math.ceil(target / 100);

    const interval = setInterval(function () {
      current += increment;
      if (current >= target) {
        counter.innerHTML = target + unit;
        clearInterval(interval);
      } else {
        counter.innerHTML = current + unit;
      }
    }, 30);
  });
});
