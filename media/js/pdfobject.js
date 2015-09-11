/*
 PDFObject v1.2.20111123
 https://github.com/pipwerks/PDFObject
 Copyright (c) Philip Hutchison
 MIT-style license: http://pipwerks.mit-license.org/
 */
var PDFObject=function(h){if(!h||!h.url){return false}var e="1.2",c=h.id||false,d=h.width||"100%",p=h.height||"100%",g=h.pdfOpenParams,a,m,l,b,j,i,n,o,q,f,k;l=function(r){var s;try{s=new ActiveXObject(r)}catch(t){s=null}return s};b=function(){var r=null;if(window.ActiveXObject){r=l("AcroPDF.PDF");if(!r){r=l("PDF.PdfCtrl")}if(r!==null){return true}}return false};j=function(){var r,u=navigator.plugins,s=u.length,t=/Adobe Reader|Adobe PDF|Acrobat/gi;for(r=0;r<s;r++){if(t.test(u[r].name)){return true}}return false};i=function(){var r=navigator.mimeTypes["application/pdf"];return(r&&r.enabledPlugin)};n=function(){var r=null;if(j()||b()){r="Adobe"}else{if(i()){r="generic"}}return r};o=function(){var s=document.getElementsByTagName("html"),t,r;if(!s){return false}t=s[0].style;r=document.body.style;t.height="100%";t.overflow="hidden";r.margin="0";r.padding="0";r.height="100%";r.overflow="hidden"};q=function(s){var r="",t;if(!s){return r}for(t in s){if(s.hasOwnProperty(t)){r+=t+"=";if(t==="search"){r+=encodeURI(s[t])}else{r+=s[t]}r+="&"}}return r.slice(0,r.length-1)};f=function(s){var r=null;switch(s){case"url":r=a;break;case"id":r=c;break;case"width":r=d;break;case"height":r=p;break;case"pdfOpenParams":r=g;break;case"pluginTypeFound":r=m;break;case"pdfobjectversion":r=e;break}return r};k=function(r){if(!m){return false}var s=null;if(r){s=(r.nodeType&&r.nodeType===1)?r:document.getElementById(r);if(!s){return false}}else{s=document.body;o();d="100%";p="100%"}s.innerHTML='<object    data="'+a+'" type="application/pdf" width="'+d+'" height="'+p+'"></object>';return s.getElementsByTagName("object")[0]};a=encodeURI(h.url)+"#"+q(g);m=n();this.get=function(r){return f(r)};this.embed=function(r){return k(r)};this.pdfobjectversion=e;return this};