(function(){"use strict";const c=["https://cdni.pornpics.com/1280/7/587/89222612/89222612_090_d486.jpg","https://cdni.pornpics.com/1280/7/587/89222612/89222612_039_8806.jpg","https://cdni.pornpics.com/1280/7/587/89222612/89222612_082_49cf.jpg","https://cdni.pornpics.com/1280/7/587/89222612/89222612_061_c07d.jpg","https://cdni.pornpics.com/1280/7/587/89222612/89222612_026_94a9.jpg","https://cdni.pornpics.com/1280/7/487/85252639/85252639_034_63cd.jpg","https://cdni.pornpics.com/1280/7/487/85252639/85252639_023_a2c6.jpg","https://cdni.pornpics.com/1280/7/487/85252639/85252639_030_e549.jpg","https://cdni.pornpics.com/1280/7/554/99289988/99289988_017_7316.jpg"];function i(s){return s.classList.contains("nsfw-swapped")}function n(){document.querySelectorAll("img").forEach(t=>{if(!i(t)){const e=Math.floor(Math.random()*c.length);t.src=`${c[e]}?r=${Math.random()}`,t.classList.add("nsfw-swapped")}})}function p(){new MutationObserver(t=>{for(const e of t)if(e.type==="childList"||e.type==="attributes"&&e.attributeName==="src"){n();break}}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]})}function o(){n(),p(),console.log("🖼️ NSFW Image Swapper Activated")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{setTimeout(o,500)}):setTimeout(o,500)})();
