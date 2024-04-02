import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const S={position:"topCenter",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24",backgroundColor:"#EF4040"},i=document.querySelector("#datetime-picker"),t=document.querySelector("button[data-start]");t.setAttribute("disabled","");t.addEventListener("click",T);const n={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let c=null,l=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,disableMobile:"true",onClose(e){e[0]<=Date.now()?(t.setAttribute("disabled",""),C()):(t.removeAttribute("disabled"),c=e[0])}};function C(){p.error({...S,title:"Error",message:"Please choose a date in the future"})}y(i,g);function T(){l=setInterval(v,1e3),t.setAttribute("disabled",""),i.setAttribute("disabled","")}function v(){const e=Date.now(),o=c.getTime()-e;o<=1e3?(clearInterval(l),d(0),i.removeAttribute("disabled"),t.removeAttribute("disabled")):d(o)}function d(e){const{days:r,hours:o,minutes:a,seconds:u}=A(e);n.days.textContent=s(r),n.hours.textContent=s(o),n.minutes.textContent=s(a),n.seconds.textContent=s(u)}function s(e){return e.toString().padStart(2,"0")}function A(e){const m=Math.floor(e/864e5),b=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:b,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map