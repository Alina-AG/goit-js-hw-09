const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=0;function n(){t.removeEventListener("click",n),t.setAttribute("disabled","true"),e.addEventListener("click",d),e.removeAttribute("disabled"),r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.querySelector("body").style.backgroundColor=t}),1e3)}function d(){clearInterval(r),t.addEventListener("click",n),t.removeAttribute("disabled"),e.removeEventListener("click",d),e.setAttribute("disabled","true")}t.addEventListener("click",n),e.setAttribute("disabled","true");
//# sourceMappingURL=01-color-switcher.6099a91c.js.map