!function(){function e(){function e(){M=!0}function t(){M=!1}function n(){return M}function i(){F=!0}function r(){F=!1}function o(){return F}function a(){T.save()}function c(){var e=T.load();return B(),e}function v(){return T.isSaved()}function u(){return T.deleteSave()}function s(){return T["export"]()}function f(e){var t=T["import"](e);return B(),t}function l(e){k(e);var t=T.add(e);return F&&a(),t}function d(e){var t=T.remove(e);return t&&L(e),F&&a(),t}function m(){return T}function E(e){if(e===A)return R.mesh;var t=R.mesh;return R.mesh=e,t}function k(e){e.addEventListener("VoxelClick",C),e.addEventListener("TopClick",g),e.addEventListener("BottomClick",h),e.addEventListener("FrontClick",p),e.addEventListener("BackClick",x),e.addEventListener("LeftClick",S),e.addEventListener("RightClick",b)}function L(e){e.removeEventListener("VoxelClick",C),e.removeEventListener("TopClick",g),e.removeEventListener("BottomClick",h),e.removeEventListener("FrontClick",p),e.removeEventListener("BackClick",x),e.removeEventListener("LeftClick",S),e.removeEventListener("RightClick",b)}function C(e){if(M){var t=e.target;d(t)}}function g(e){if(M){var t=e.target;w(t,0,1,0)}}function h(e){if(M){var t=e.target;w(t,0,-1,0)}}function p(e){if(M){var t=e.target;w(t,0,0,1)}}function x(e){if(M){var t=e.target;w(t,0,0,-1)}}function S(e){if(M){var t=e.target;w(t,-1,0,0)}}function b(e){if(M){var t=e.target;w(t,1,0,0)}}function w(e,t,n,i){var r=e.clone(),o=r.getDimension();r.setMesh(R.mesh),r.translate(t*o,n*o,i*o),l(r)}function B(){for(var e,t=0;e=T.getVoxels()[t++];)k(e)}var A,T,V=this,F=!1,M=!0,R={mesh:{}};V.enable=e,V.disable=t,V.isEnabled=n,V.enableAutoSave=i,V.disableAutoSave=r,V.canAutoSave=o,V.save=a,V.load=c,V.isSaved=v,V.deleteSave=u,V["export"]=s,V["import"]=f,V.add=l,V.remove=d,V.getWorld=m,V.setToolMesh=E,function(e,t){if(e===A)throw"Editor requires World instance for initialization";T=e,t!==A&&t.autosave===!0&&i(),B()}.apply(V,arguments)}window.voxelcss||(window.voxelcss={}),voxelcss.Editor=e}();
!function(){function t(){function t(t,o,i){return{x:n(t),y:e(o),z:r(i)}}function n(t){if(t===$||"number"!=typeof t)return it.x;var n=it.x;return it.x+=t,V(),n}function e(t){if(t===$||"number"!=typeof t)return it.y;var n=it.y;return it.y+=t,V(),n}function r(t){if(t===$||"number"!=typeof t)return it.z;var n=it.z;return it.z+=t,V(),n}function o(t,n,e){var r={x:i(t),y:u(n),z:a(e)};return V(),r}function i(t){if(t===$||"number"!=typeof t)return it.x;var n=it.x;return it.x=t,V(),n}function u(t){if(t===$||"number"!=typeof t)return it.y;var n=it.y;return it.y=t,V(),n}function a(t){if(t===$||"number"!=typeof t)return it.z;var n=it.z;return it.z=t,V(),n}function c(){return{x:it.x,y:it.y,z:it.z}}function f(){return it.x}function s(){return it.y}function d(){return it.z}function y(t,n,e){return{x:l(t),y:m(n),z:v(e)}}function l(t){if(t===$||"number"!=typeof t)return ut.x;var n=ut.x;return ut.x+=t,V(),n}function m(t){if(t===$||"number"!=typeof t)return ut.y;var n=ut.y;return ut.y+=t,V(),n}function v(t){if(t===$||"number"!=typeof t)return ut.z;var n=ut.z;return ut.z+=t,V(),n}function x(t,n,e){var r={x:p(t),y:w(n),z:z(e)};return V(),r}function p(t){if(t===$||"number"!=typeof t)return ut.x;var n=ut.x;return ut.x=t,V(),n}function w(t){if(t===$||"number"!=typeof t)return ut.y;var n=ut.y;return ut.y=t,V(),n}function z(t){if(t===$||"number"!=typeof t)return ut.z;var n=ut.z;return ut.z=t,V(),n}function h(){return{x:ut.x,y:ut.y,z:ut.z}}function b(){return ut.x}function g(){return ut.y}function E(){return ut.z}function P(t){if(t===$||"number"!=typeof t)return at;var n=at;return at+=t,V(),n}function Y(t){if(t===$||"number"!=typeof t)return at;return at=t,V(),at}function Z(){return at}function X(t){if(ot)throw"Cannot attach currently attached scene";_=t,t.appendChild(tt),ot=!0}function C(){if(!ot)throw"Cannot detach currently detached scene";ot=!1,tt.parentElement.removeChild(tt)}function L(){return ot}function M(){return _}function R(){ft||(ft=!0)}function D(){ft&&(ft=!1)}function k(){return ft}function A(){st||(st=!0)}function O(){st&&(st=!1)}function I(){return st}function H(){dt||(dt=!0)}function S(){dt&&(dt=!1)}function W(){return dt}function j(t){et.appendChild(t.getDomElement())}function q(t){et.removeChild(t.getDomElement())}function B(){tt=document.createElement("div"),tt.setAttribute("class","scene"),nt=document.createElement("div"),nt.setAttribute("class","zoom"),et=document.createElement("div"),et.setAttribute("class","camera"),tt.appendChild(nt),nt.appendChild(et)}function F(){tt.addEventListener("mousedown",G),tt.addEventListener("mousewheel",N),tt.addEventListener("wheel",N)}function G(t){ct.start.x=t.x||t.clientX,ct.start.y=t.y||t.clientY,ct.current.x=t.x||t.clientX,ct.current.y=t.y||t.clientY,window.addEventListener("mousemove",K),window.addEventListener("mouseup",J)}function J(t){window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",J)}function K(t){if(ct.lastMove.dx=(t.x||t.clientX)-ct.current.x,ct.lastMove.dy=(t.y||t.clientY)-ct.current.y,ct.current.x=t.x||t.clientX,ct.current.y=t.y||t.clientY,st&&ct.shiftDown)y(ct.lastMove.dx,ct.lastMove.dy),V(),rt.triggerEvent("pan",{rotation:c(),pan:h(),zoom:Z(),target:rt});else if(ft){var n=2;it.y+=ct.lastMove.dx/window.innerWidth*Math.PI*2*n,it.x-=ct.lastMove.dy/window.innerHeight*Math.PI*2*n,V(),rt.triggerEvent("orbit",{rotation:c(),pan:h(),zoom:Z(),target:rt})}}function N(t){return dt?(at+=t.deltaY/5e3,V(),t.preventDefault(),rt.triggerEvent("zoom",{rotation:c(),pan:h(),zoom:Z(),target:rt}),!1):void 0}function Q(){window.addEventListener("keydown",T),window.addEventListener("keyup",U)}function T(t){(16===t.keyCode||16===t.which)&&(ct.shiftDown=!0)}function U(t){(16===t.keyCode||16===t.which)&&(ct.shiftDown=!1)}function V(){et.style.transform="rotateX("+it.x+"rad) rotateY("+it.y+"rad) rotateZ("+it.z+"rad)",nt.style.transform="scale("+at+", "+at+")",nt.style.transform+=" translateX("+ut.x+"px) translateY("+ut.y+"px) translateZ("+ut.z+"px)"}var $,_,tt,nt,et,rt=this,ot=!1,it={x:0,y:0,z:0},ut={x:0,y:0,z:0},at=1,ct={start:{x:0,y:0},current:{x:0,y:0},lastMove:{x:0,y:0},shiftDown:!1},ft=!0,st=!0,dt=!0;rt.rotate=t,rt.rotateX=n,rt.rotateY=e,rt.rotateZ=r,rt.setRotation=o,rt.setRotationX=i,rt.setRotationY=u,rt.setRotationZ=a,rt.getRotation=c,rt.getRotationX=f,rt.getRotationY=s,rt.getRotationZ=d,rt.pan=y,rt.panX=l,rt.panY=m,rt.panZ=v,rt.setPan=x,rt.setPanX=p,rt.setPanY=w,rt.setPanZ=z,rt.getPan=h,rt.getPanX=b,rt.getPanY=g,rt.getPanZ=E,rt.zoom=P,rt.setZoom=Y,rt.getZoom=Z,rt.attach=X,rt.detach=C,rt.isAttached=L,rt.getParentElement=M,rt.enableOrbit=R,rt.disableOrbit=D,rt.canOrbit=k,rt.enablePan=A,rt.disablePan=O,rt.canPan=I,rt.enableZoom=H,rt.disableZoom=S,rt.canZoom=W,rt.add=j,rt.remove=q,function(){voxelcss.interfaces.EventListener(rt),B(),F(),Q()}.apply(rt,arguments)}window.voxelcss||(window.voxelcss={}),voxelcss.Scene=t}();
!function(){function n(){function n(){v=!0,s()}function t(){v=!1}function o(){return v}function i(){var n=new Image;return n.src=f[l],p.push(p),n}function e(n){p.push(n),n.src=f[l]}function u(n){var t=p.indexOf(n);-1!==t&&p.splice(t,1)}function c(){return a}function r(n){v=!0,l=Math.floor(n),setTimeout(s,(l+1-n)*g)}function s(){if(v){l+=1,l%=f.length;for(var n,t=0;n=p[t++];)n.src=f[l];setTimeout(s,g)}}var f,a,g,h=this,l=0,v=!1,p=[];h.run=n,h.stop=t,h.isRunning=o,h.getImage=i,h.attach=e,h.detach=u,h.getDuration=c,function(n,t){f=n,a=t,g=a/f.length;var o=Date.now()%a/g;r(o)}.apply(h,arguments)}window.voxelcss||(window.voxelcss={}),voxelcss.SyncedGif=n}();
!function(){function t(){function t(t){if(t!==E)for(var e in P){var n=t[e];if(n!==E)if(Z[e]=n,P[e]!==E&&P[e].SyncedGif!==E&&P[e].SyncedGif.detach(P[e]),n instanceof Array){var i=new voxelcss.SyncedGif(n,320);i.attach(P[e]),P[e].SyncedGif=i}else P[e].src=n}}function e(){return Z}function n(t){if(t===E)throw"Scene required to add voxel to scene";L=t,w.setAttribute("class","anim up"),v()}function i(t){if(t===E)throw"Scene required to add voxel to scene";L=t,w.setAttribute("class","anim down"),v()}function r(t){if(t===E)throw"Scene required to add voxel to scene";L=t,w.setAttribute("class","anim"),v()}function o(){L!==E&&L.removeChild(b)}function a(t){if(t===E||"number"!=typeof t)return B;var e=B;return B=t,e}function s(){return B}function c(){return b}function l(){return new voxelcss.Voxel(C.getPositionX(),C.getPositionY(),C.getPositionZ(),B,{mesh:Z})}function f(){b=u("div","cube"),w=u("div","anim"),d("top"),d("bottom"),d("front"),d("back"),d("left"),d("right"),b.appendChild(w)}function d(t){var e=u("div","face "+t);switch(e.style.width=B+"px",e.style.height=B+"px",e.style.marginLeft=-B/2+"px",e.style.marginTop=-B/2+"px",t){case"top":e.style.transform="rotateX(90deg) translateZ("+B/2+"px)",e.addEventListener("click",A);break;case"bottom":e.style.transform="rotateX(90deg) translateZ(-"+B/2+"px)",e.addEventListener("click",p);break;case"left":e.style.transform="rotateY(90deg) translateZ(-"+B/2+"px)",e.addEventListener("click",x);break;case"right":e.style.transform="rotateY(90deg) translateZ("+B/2+"px)",e.addEventListener("click",h);break;case"front":e.style.transform="translateZ("+B/2+"px)",e.addEventListener("click",k);break;case"back":e.style.transform="translateZ(-"+B/2+"px)",e.addEventListener("click",y)}e.addEventListener("contextmenu",m);var n=u("img","");P[t]=n,e.appendChild(n),w.appendChild(e)}function u(t,e){var n=document.createElement(t);return n.setAttribute("class",e),n}function g(){var t=C.getPosition();b.style.transform="translate3d("+t.x+"px, "+-t.y+"px, "+t.z+"px)"}function v(){L.add(C)}function m(t){return t.preventDefault(),C.triggerEvent("VoxelClick",{target:C}),!1}function A(){C.triggerEvent("TopClick",{target:C})}function p(){C.triggerEvent("BottomClick",{target:C})}function x(){C.triggerEvent("LeftClick",{target:C})}function h(){C.triggerEvent("RightClick",{target:C})}function k(){C.triggerEvent("FrontClick",{target:C})}function y(){C.triggerEvent("BackClick",{target:C})}var E,b,w,L,C=this,S="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",P={},Z={},B=0;C.setMesh=t,C.getMesh=e,C.animUp=n,C.animDown=i,C.addToScene=r,C.removeFromScene=o,C.setDimension=a,C.getDimension=s,C.getDomElement=c,C.clone=l,function(e,n,i,r,o){voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(C)),C.addEventListener("move",g),a(r),f(),C.setPosition(e,n,i),t({top:S,bottom:S,front:S,back:S,left:S,right:S}),o!==E&&o.mesh!==E&&t(o.mesh)}.apply(C,arguments)}window.voxelcss||(window.voxelcss={}),voxelcss.Voxel=t}();
!function(){function n(){function n(n){return p.push(n),v.add(n)}function e(n){var e=p.indexOf(n);return-1==e?!1:(v.remove(n),p.splice(e,1),!0)}function t(){for(var n,e=[],t=0;n=p[t++];)e.push({position:n.getPosition(),dimension:n.getDimension(),mesh:n.getMesh()});return JSON.stringify(e)}function o(e){l();for(var t,o=JSON.parse(e+""),i=0;t=o[i++];){var r=new voxelcss.Voxel(t.position.x,t.position.y,t.position.z,t.dimension);r.setMesh(t.mesh),n(r)}}function i(){localStorage.setItem(f(),t())}function r(){o(localStorage.getItem(f())||"[]")}function s(){return!!localStorage.getItem(f())}function c(){localStorage.setItem(f(),"")}function a(){return v}function u(){return p.concat([])}function l(){for(;p.length>0;)e(p[0])}function f(){return"savedWorld<"+m+">"}var d,v,g=this,m="*",p=[];g.add=n,g.remove=e,g["export"]=t,g["import"]=o,g.save=i,g.load=r,g.isSaved=s,g.deleteSave=c,g.getScene=a,g.getVoxels=u,function(n,e){if(n===d)throw"World cannot be instantiated without a Scene instance";v=n,e!==d&&(m=e)}.apply(g,arguments)}window.voxelcss||(window.voxelcss={}),voxelcss.World=n}();
!function(){function n(n){function e(n,e){n="on"+n,"function"==typeof e&&(s[n]||(s[n]=[]),s[n].indexOf(e)>-1||s[n].push(e))}function i(n,e){n="on"+n,s[n]&&s[n].splice(s[n].indexOf(e),1)}function o(n,e){n="on"+n;var i=s[n];if(i)for(var o,t=0;o=i[t++];)o(e)}var t=n||new Function,s={};return t.addEventListener=e,t.removeEventListener=i,t.triggerEvent=o,t}window.voxelcss||(window.voxelcss={}),window.voxelcss.interfaces||(window.voxelcss.interfaces={}),voxelcss.interfaces.EventListener=n}();
!function(){function n(n){function t(n,t,i){d=!1;var u={x:e(n),y:r(t),z:o(i)};return d=!0,x.triggerEvent("move"),u}function e(n){if(void 0===n||"number"!=typeof n)return g.x;var t=g.x;return g.x=n,d&&x.triggerEvent("move"),t}function r(n){if(void 0===n||"number"!=typeof n)return g.y;var t=g.y;return g.y=n,d&&x.triggerEvent("move"),t}function o(n){if(void 0===n||"number"!=typeof n)return g.z;var t=g.z;return g.z=n,d&&x.triggerEvent("move"),t}function i(n,t,e){d=!1;var r={x:u(n),y:s(t),z:v(e)};return d=!0,x.triggerEvent("move"),r}function u(n){return void 0===n||"number"!=typeof n?g.x:e(n+g.x)}function s(n){return void 0===n||"number"!=typeof n?g.y:r(n+g.y)}function v(n){return void 0===n||"number"!=typeof n?g.z:o(n+g.z)}function f(){return{x:g.x,y:g.y,z:g.z}}function c(){return g.x}function a(){return g.y}function y(){return g.z}var x=n||new Function,g={x:0,y:0,z:0},d=!0;return x.setPosition=t,x.setPositionX=e,x.setPositionY=r,x.setPositionZ=o,x.translate=i,x.translateX=u,x.translateY=s,x.translateZ=v,x.getPosition=f,x.getPositionX=c,x.getPositionY=a,x.getPositionZ=y,x}window.voxelcss||(window.voxelcss={}),window.voxelcss.interfaces||(window.voxelcss.interfaces={}),voxelcss.interfaces.Positioned=n}();