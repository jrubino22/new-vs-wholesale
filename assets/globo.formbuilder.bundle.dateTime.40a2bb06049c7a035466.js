"use strict";(self.webpackChunkgloboFormbuilder=self.webpackChunkgloboFormbuilder||[]).push([[848],{5293:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var i=a(8527),r=a(7908),l=a.n(r);const o={init:function(){document.querySelectorAll('.globo-form-app [data-type="datetime"]').forEach((t=>{let e,a,r,o,d={enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0,disableMobile:!0},s="H:i";e=t.getAttribute("data-format"),a=t.getAttribute("data-locale"),r=t.getAttribute("dataDateFormat")||"Y-m-d",o=t.getAttribute("dataTimeFormat");let u=t.getAttribute("limitDateType"),n=t.getAttribute("limitDateSpecificDates"),m=t.getAttribute("limitDateRangeDates"),b=t.getAttribute("limitDateDOWDates");"12h"==o&&(d.time_24hr=!1,s="h:i K"),"date-and-time"==e?d.dateFormat=r+" "+s:"date"==e?(d.enableTime=!1,d.dateFormat=r):"time"==e&&(d.noCalendar=!0,d.dateFormat=s),a&&(d.locale=l()[a]);let c=[];if(u){if(""!=n&&null!=n&&(c=c.concat(n.split(",").map((t=>new Date(t))))),""!=m&&null!=m){const t=m.split(",");c.push({from:new Date(t[0]),to:new Date(t[1])})}if(""!=b&&null!=b){let t=b.split(",").map((t=>{let e=0;switch(t){case"sunday":default:e=0;break;case"monday":e=1;break;case"tuesday":e=2;break;case"wednesday":e=3;break;case"thursday":e=4;break;case"friday":e=5;break;case"saturday":e=6}return e}));c.push((function(e){return t.indexOf(e.getDay())>-1}))}"disablingDates"==u?d.disable=c:d.enable=c}void 0!==Globo.FormBuilder.flatpickrCustomOptions&&(d={...d,...Globo.FormBuilder.flatpickrCustomOptions});(0,i.Z)(t,d)}))}}}}]);