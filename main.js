!function(){"use strict";var i=(e,t)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),e=(t,e,o,a)=>{let s=i(e,a);s&&(a?s.forEach(e=>e.addEventListener(t,o)):s.addEventListener(t,o))},t=(e,t)=>{e.addEventListener("scroll",t)};let a=i("#nav-bar .scrollto",!0);var o=()=>{var o=window.scrollY+200;a.forEach(e=>{var t;!e.hash||(t=i(e.hash))&&(o>=t.offsetTop&&o<=t.offsetTop+t.offsetHeight?e.classList.add("active"):e.classList.remove("active"))})};window.addEventListener("load",o),t(document,o);var s,l=e=>{var t=i("#header").offsetHeight,e=i(e).offsetTop;window.scrollTo({top:e-t,behavior:"smooth"})};let n=i("#header");n&&(s=()=>{100<window.scrollY?n.classList.add("header-scrolled"):n.classList.remove("header-scrolled")},window.addEventListener("load",s),t(document,s));let r=i(".back-to-top");r&&(s=()=>{100<window.scrollY?r.classList.add("active"):r.classList.remove("active")},window.addEventListener("load",s),t(document,s)),e("click",".mobile-nav-toggle",function(e){i("#nav-bar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),e("click",".navbar .dropdown > a",function(e){i("#nav-bar").classList.contains("navbar-mobile")&&(e.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),e("click",".scrollto",function(e){if(i(this.hash)){e.preventDefault();let t=i("#nav-bar");if(t.classList.contains("navbar-mobile")){t.classList.remove("navbar-mobile");let e=i(".mobile-nav-toggle");e.classList.toggle("bi-list"),e.classList.toggle("bi-x")}l(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&i(window.location.hash)&&l(window.location.hash)}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})}();