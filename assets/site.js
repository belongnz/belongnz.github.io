// BelongNZ — shared behaviour
(function () {
  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  // Scroll reveal (skipped for reduced motion)
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  // Countdown to the 24 August 2026 changes
  var cd = document.querySelector(".countdown");
  if (cd) {
    var deadline = new Date(cd.getAttribute("data-deadline")).getTime();
    var boxes = {
      d: cd.querySelector('[data-unit="d"] b'),
      h: cd.querySelector('[data-unit="h"] b'),
      m: cd.querySelector('[data-unit="m"] b'),
      s: cd.querySelector('[data-unit="s"] b')
    };
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function tick() {
      var diff = deadline - Date.now();
      if (diff <= 0) {
        cd.innerHTML = '<p class="cd-done">' + cd.getAttribute("data-done") + "</p>";
        clearInterval(timer);
        return;
      }
      boxes.d.textContent = Math.floor(diff / 86400000);
      boxes.h.textContent = pad(Math.floor(diff / 3600000) % 24);
      boxes.m.textContent = pad(Math.floor(diff / 60000) % 60);
      boxes.s.textContent = pad(Math.floor(diff / 1000) % 60);
    }
    tick();
    var timer = setInterval(tick, 1000);
  }

  // Inquiry form — AJAX submit via FormSubmit, with normal POST fallback
  var form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = btn.getAttribute("data-sending") || "Sending…";
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      fetch("https://formsubmit.co/ajax/info@cleardesk.co.nz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      }).then(function () {
        form.style.display = "none";
        var ok = document.querySelector(".form-success");
        if (ok) ok.style.display = "block";
      }).catch(function () {
        // Fallback: plain POST (FormSubmit hosted flow)
        btn.disabled = false;
        btn.textContent = original;
        form.removeEventListener("submit", arguments.callee);
        form.submit();
      });
    });
  }
})();
