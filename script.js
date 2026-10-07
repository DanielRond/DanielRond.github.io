(function () {
  var root = document.documentElement;
  var btn = document.getElementById("lang-toggle");

  function apply(lang) {
    root.lang = lang === "en" ? "en" : "pt-BR";
    btn.textContent = lang === "en" ? "PT" : "EN";
    document.title = lang === "en"
      ? "Daniel Rond — Portfolio"
      : "Daniel Rond — Portfólio";
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en");
  apply(initial);

  btn.addEventListener("click", function () {
    var next = root.lang === "en" ? "pt" : "en";
    apply(next);
    try { localStorage.setItem("lang", next); } catch (e) {}
  });
})();
