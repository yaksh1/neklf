(function(){const i="https://chromewebstore.google.com/detail/kortex/hdapplggdhndkblofffknpmnnnnbncbn";function d(){return window.location.pathname.split("/").pop()||"landing.html"}function m(t){const e=o=>t===o?"text-emerald-600":"text-slate-500 hover:text-slate-900",r=t==="landing.html"&&window.location.hash==="#pricing"?"text-emerald-600":"text-slate-500 hover:text-slate-900",n=o=>typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?o:o==="landing.html"?"/":"/"+o.replace(".html",""),l=typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("icons/icon128.png"):"/icons/icon128.png";return`
      <header id="navbar" class="fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-2xl border border-slate-200/60 flex items-center justify-between px-6 bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/50 py-2 top-4">
        <nav class="flex items-center justify-between w-full">
          <a href="${n("landing.html")}" class="flex items-center gap-2 font-black text-xl tracking-tighter group cursor-pointer">
            <img id="navbar-logo" src="${l}" alt="Kortex" class="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-emerald-600">KORTEX</span>
          </a>
          <div class="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/40 text-xs font-bold">
            <a href="${n("features.html")}" class="px-5 py-2 ${e("features.html")} hover:bg-white rounded-full transition-all">Features</a>
            <a href="${n("customer-love.html")}" class="px-5 py-2 ${e("customer-love.html")} hover:bg-white rounded-full transition-all">Customer Love</a>
            <a href="${n("landing.html")}#pricing" class="px-5 py-2 ${r} hover:bg-white rounded-full transition-all">Pricing</a>
            <a href="${n("support.html")}" class="px-5 py-2 ${e("support.html")} hover:bg-white rounded-full transition-all">Help & Support</a>
          </div>
          <div class="flex items-center gap-4">
            <button class="hidden sm:block text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors" id="login-btn">Login</button>
            <button class="bg-emerald-600 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200/50 active:scale-95" id="try-free-btn">
              Try it for free →
            </button>
          </div>
        </nav>
      </header>
    `}function s(){const t=typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL,e=document.getElementById("navbar-logo");e&&t&&(e.src=chrome.runtime.getURL("icons/icon128.png"));const a=()=>{typeof chrome<"u"&&chrome.tabs?chrome.tabs.create({url:i,active:!0}):window.open(i,"_blank")},r=()=>{if(t&&chrome.tabs){const o=chrome.runtime.getURL("src/welcome/welcome.html");chrome.tabs.create({url:o,active:!0})}else window.open(i,"_blank")},n=document.getElementById("try-free-btn"),l=document.getElementById("login-btn");n&&n.addEventListener("click",a),l&&l.addEventListener("click",r)}function c(){const t=d(),e=m(t),a=document.getElementById("navbar"),r=document.getElementById("navbar-placeholder");if(a)a.outerHTML=e;else if(r)r.outerHTML=e;else if(document.body)document.body.insertAdjacentHTML("afterbegin",e);else{document.addEventListener("DOMContentLoaded",function(){document.body.insertAdjacentHTML("afterbegin",e),s()});return}s()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})();
