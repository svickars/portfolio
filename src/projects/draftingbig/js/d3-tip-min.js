!function(t,e){if("function"==typeof define&&define.amd)define(["d3-collection","d3-selection"],e);else if("object"==typeof module&&module.exports){var n=require("d3-collection"),o=require("d3-selection");module.exports=e(n,o)}else{var f=t.d3;t.d3.tip=e(f,f)}}(this,function(t,e){return function(){function n(t){(b=h(t))&&(C=b.createSVGPoint(),H.appendChild(T))}function o(){return"n"}function f(){return[0,0]}function i(){return" "}function r(){var t=m(),e=document.body.getBoundingClientRect();return t.n.x+T.offsetWidth/2>e.width?(diff=t.n.x+T.offsetWidth/2-e.width,{top:t.n.y-T.offsetHeight,left:t.n.x-T.offsetWidth/2-diff}):t.n.x-T.offsetWidth/2<0?(diff=T.offsetWidth/2-t.n.x,{top:t.n.y-T.offsetHeight,left:t.n.x-T.offsetWidth/2+diff}):{top:t.n.y-T.offsetHeight,left:t.n.x-T.offsetWidth/2}}function s(){var t=m(),e=document.body.getBoundingClientRect();return t.s.x+T.offsetWidth/2>e.width&&t.s.y+250<window.innerHeight?(diff=t.s.x+T.offsetWidth/2-e.width,{top:t.s.y,left:t.s.x-T.offsetWidth/2-diff-10}):t.s.x-T.offsetWidth/2<0&&t.s.y+250<window.innerHeight?(diff=T.offsetWidth/2-t.s.x,{top:t.s.y,left:t.s.x-T.offsetWidth/2+diff+10}):t.s.x-T.offsetWidth/2<0&&t.s.y+250>window.innerHeight?(diff=T.offsetWidth/2-t.s.x,{top:t.s.y-300,left:t.s.x-T.offsetWidth/2+diff+10}):t.s.x-T.offsetWidth/2>0&&t.s.y+250>window.innerHeight?(diff=T.offsetWidth/2-t.s.x,{top:t.s.y-300,left:t.s.x-T.offsetWidth/2}):t.s.x+T.offsetWidth/2>e.width&&t.s.y+250<window.innerHeight?(diff=T.offsetWidth/2-t.s.x,{top:t.s.y-300,left:t.s.x-T.offsetWidth/2-diff-10}):{top:t.s.y,left:t.s.x-T.offsetWidth/2}}function l(){var t=m();return{top:t.e.y-T.offsetHeight/2,left:t.e.x}}function d(){var t=m();return{top:t.w.y-T.offsetHeight/2,left:t.w.x-T.offsetWidth}}function u(){var t=m();return{top:t.nw.y-T.offsetHeight,left:t.nw.x-T.offsetWidth}}function c(){var t=m();return{top:t.ne.y-T.offsetHeight,left:t.ne.x}}function a(){var t=m();return{top:t.sw.y,left:t.sw.x-T.offsetWidth}}function p(){var t=m();return{top:t.se.y,left:t.se.x}}function y(){var t=e.select(document.createElement("div"));return t.style("position","absolute").style("top",0).style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),t.node()}function h(t){var e=t.node();return e?"svg"===e.tagName.toLowerCase()?e:e.ownerSVGElement:null}function x(){return null==T&&(T=y(),H.appendChild(T)),e.select(T)}function m(){for(var t=E||e.event.target;null==t.getScreenCTM&&null==t.parentNode;)t=t.parentNode;var n={},o=t.getScreenCTM(),f=t.getBBox(),i=f.width,r=f.height,s=f.x,l=f.y;return C.x=s,C.y=l,n.nw=C.matrixTransform(o),C.x+=i,n.ne=C.matrixTransform(o),C.y+=r,n.se=C.matrixTransform(o),C.x-=i,n.sw=C.matrixTransform(o),C.y-=r/2,n.w=C.matrixTransform(o),C.x+=i,n.e=C.matrixTransform(o),C.x-=i/2,C.y-=r/2,n.n=C.matrixTransform(o),C.y+=r,n.s=C.matrixTransform(o),n}function g(t){return"function"==typeof t?t:function(){return t}}var w=o,v=f,W=i,H=document.body,T=y(),b=null,C=null,E=null;n.show=function(){var t=Array.prototype.slice.call(arguments);t[t.length-1]instanceof SVGElement&&(E=t.pop());var e=W.apply(this,t),o=v.apply(this,t),f=w.apply(this,t),i=x(),r=B.length,s,l=document.documentElement.scrollTop||H.scrollTop,d=document.documentElement.scrollLeft||H.scrollLeft;for(i.html(e).style("opacity",1).style("pointer-events","all");r--;)i.classed(B[r],!1);return s=S.get(f).apply(this),i.classed(f,!0).style("top",s.top+o[0]+l+"px").style("left",s.left+o[1]+d+"px"),n},n.hide=function(){return x().style("opacity",0).style("pointer-events","none"),n},n.attr=function(t,o){if(arguments.length<2&&"string"==typeof t)return x().attr(t);var f=Array.prototype.slice.call(arguments);return e.selection.prototype.attr.apply(x(),f),n},n.style=function(t,o){if(arguments.length<2&&"string"==typeof t)return x().style(t);var f=Array.prototype.slice.call(arguments);return e.selection.prototype.style.apply(x(),f),n},n.direction=function(t){return arguments.length?(w=null==t?t:g(t),n):w},n.offset=function(t){return arguments.length?(v=null==t?t:g(t),n):v},n.html=function(t){return arguments.length?(W=null==t?t:g(t),n):W},n.rootElement=function(t){return arguments.length?(H=null==t?t:g(t),n):H},n.destroy=function(){return T&&(x().remove(),T=null),n};var S=t.map({n:r,s:s,e:l,w:d,nw:u,ne:c,sw:a,se:p}),B=S.keys();return n}});