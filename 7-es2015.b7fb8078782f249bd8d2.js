(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{A1CT:function(t,n,e){"use strict";var l=e("8Y7J"),i=e("cUpR"),s=e("SVse");let o=(()=>{class t{constructor(t,n){this.rendererFactory=t,this.document=n}addTag(t,n){try{const n=this.rendererFactory.createRenderer(this.document,{id:"-1",encapsulation:l.O.None,styles:[],data:{}}),i=n.createElement("link"),s=this.document.head;if(this._parseSelector(t),null===s)throw new Error("<head> not found within DOCUMENT.");Object.keys(t).forEach(e=>n.setAttribute(i,e,t[e])),n.appendChild(s,i)}catch(e){console.error("Error within linkService : ",e)}}updateTag(t){const n=this._parseSelector(t),e=this.document.head.querySelector(n)||this.document.head.appendChild(this.document.createElement("link"));e&&Object.keys(t).forEach(n=>{e[n]=t[n]})}removeTag(t){const n=this._parseSelector(t),e=this.document.head.querySelector(n);e&&this.document.head.removeChild(e)}getTag(t){const n=this._parseSelector(t);return this.document.head.querySelector(n)}getTags(){return this.document.head.querySelectorAll("link")}_parseSelector(t){const n=t.rel?"rel":"hreflang";return`link[${n}="${t[n]}"]`}}return t.ngInjectableDef=l.Ob({factory:function(){return new t(l.Pb(l.D),l.Pb(s.d))},token:t,providedIn:"root"}),t})();e.d(n,"a",function(){return a});let a=(()=>{class t{constructor(t,n,e){this.meta=t,this.title=n,this.link=e}setHeaderTagsByPath(){this.setHeaderTags(location.pathname.replace("/",""))}setHeaderTags(t){this.title.setTitle(this.buildTitle(t)),this.buildMetas(t).map(t=>{this.meta.updateTag(t)}),this.link.updateTag(this.buildCanonical(t))}buildTitle(t){return`${t} demo`}buildCanonical(t){return{rel:"canonical",href:`${location.origin}/${t}`}}buildMetas(t){return[{name:"description",content:`demo for ${t}`},{httpEquiv:"ROBOTS",name:"ROBOTS",content:"INDEX, FOLLOW"}]}}return t.ngInjectableDef=l.Ob({factory:function(){return new t(l.Pb(i.h),l.Pb(i.i),l.Pb(o))},token:t,providedIn:"root"}),t})()},EnSQ:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var l=e("lJxs"),i=e("8Y7J"),s=e("IheW");let o=(()=>{class t{constructor(t){this.http=t}getTeams(){return[{name:"Patriots",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NE.svg"},{name:"Bills",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BUF.svg"},{name:"Jets",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYJ.svg"},{name:"Dolphins",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIA.svg"},{name:"Ravens",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BAL.svg"},{name:"Steelers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PIT.svg"},{name:"Browns",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CLE.svg"},{name:"Bengals",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CIN.svg"},{name:"Texans",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg"},{name:"Titans",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TEN.svg"},{name:"Colts",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/IND.svg"},{name:"Jaguars",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/JAX.svg"},{name:"Chiefs",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/KC.svg"},{name:"Broncos",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DEN.svg"},{name:"Raiders",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/OAK.svg"},{name:"Chargers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LAC.svg"},{name:"Eagles",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PHI.svg"},{name:"Cowboys",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DAL.svg"},{name:"Giants",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYG.svg"},{name:"Redskins",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/WAS.svg"},{name:"Packers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/GB.svg"},{name:"Vikings",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIN.svg"},{name:"Bears",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CHI.svg"},{name:"Lions",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DET.svg"},{name:"Saints",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NO.svg"},{name:"Falcons",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ATL.svg"},{name:"Buccaneers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TB.svg"},{name:"Panthers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CAR.svg"},{name:"49ers",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SF.svg"},{name:"Seahawks",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SEA.svg"},{name:"Rams",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LA.svg"},{name:"Cardinal",logo:"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ARI.svg"}]}getScrollableList(t,n){const e=[];for(;t.length>0&&n>0;)e.push(t.splice(0,n));return e}mobile(){const t=navigator.userAgent;return/\b(iPhone|iP[ao]d)/.test(t)||/\b(iP[ao]d)/.test(t)||/Android/i.test(t)||/Mobile/i.test(t)||window.innerWidth<=768}getIpsum(){return this.http.get("//www.mocky.io/v2/5e4394cf310000383f3affcb").pipe(Object(l.a)(t=>t.text))}}return t.ngInjectableDef=i.Ob({factory:function(){return new t(i.Pb(s.c))},token:t,providedIn:"root"}),t})()},FSD6:function(t,n,e){"use strict";e.r(n);var l=e("8Y7J");class i{}var s=e("pMnS"),o=e("lzlj"),a=e("igqZ"),c=e("omvX"),r=e("SVse"),u=e("LRne"),d=e("xgIS"),m=e("5+tZ"),h=e("lJxs"),g=e("vkgz"),p=e("pLZG"),f=e("7o/Q"),b=e("D0XW");class w{constructor(t,n){this.period=t,this.scheduler=n}call(t,n){return n.subscribe(new v(t,this.period,this.scheduler))}}class v extends f.a{constructor(t,n,e){super(t),this.period=n,this.scheduler=e,this.hasValue=!1,this.add(e.schedule(S,n,{subscriber:this,period:n}))}_next(t){this.lastValue=t,this.hasValue=!0}notifyNext(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))}}function S(t){let{subscriber:n,period:e}=t;n.notifyNext(),this.schedule(t,e)}function x(t,n,e,l){const i=window&&!!window.document&&window.document.documentElement;let s=i&&n?window:e;if(t&&!(s=t&&i&&"string"==typeof t?function(t,n,l){return(l?window.document:e.nativeElement).querySelector(t)}(t,0,l):t))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function y(t){return t&&!t.firstChange}const T={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},O={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class C{constructor(t=!0){this.vertical=t,this.propsMap=t?T:O}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function D(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function E(t,n){return t?n.document.documentElement:null}function k(t,n){const e=function({container:t,isWindow:n,axis:e}){const{offsetHeightKey:l,clientHeightKey:i}=P(e);return I(t,n,l,i)}(n);return n.isWindow?function(t,n,e){const{axis:l,container:i,isWindow:s}=e,{offsetHeightKey:o,clientHeightKey:a}=P(l),c=t+A(E(s,i),l,s),r=I(n.nativeElement,s,o,a);return{height:t,scrolled:c,totalToScroll:function(t,n,e){const l=n.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[l]+A(t,n,e)}(n.nativeElement,l,s)+r,isWindow:s}}(e,t,n):function(t,n,e){const{axis:l,container:i}=e;return{height:t,scrolled:i[l.scrollTopKey()],totalToScroll:i[l.scrollHeightKey()],isWindow:!1}}(e,0,n)}function P(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function I(t,n,e,l){if(isNaN(t[e])){const e=E(n,t);return e?e[l]:0}return t[e]}function A(t,n,e){const l=n.pageYOffsetKey(),i=n.scrollTopKey(),s=n.offsetTopKey();return isNaN(window[l])?E(e,t)[i]:t.ownerDocument?t.ownerDocument.defaultView[l]:t[s]}function H(t,n,e){let l,i;if(t.totalToScroll<=0)return!1;const s=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(l=(t.totalToScroll-s)/t.totalToScroll,i=n.down/10):(l=t.scrolled/(t.scrolled+(t.totalToScroll-s)),i=n.up/10),l<=i}class j{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,n){this.updateScrollPosition(t),this.updateTotalToScroll(n)}updateTriggeredFlag(t,n){n?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,n){return n?this.triggered.down===t:this.triggered.up===t}}const K={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function N(t){const{scrollDown:n,stats:{scrolled:e}}=t;return{type:n?K.DOWN:K.UP,payload:{currentScrollPosition:e}}}class M{constructor(t,n){this.element=t,this.zone=n,this.scrolled=new l.m,this.scrolledUp=new l.m,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:n,infiniteScrollDistance:e}){const l=y(t),i=y(n),s=y(e),o=!i&&!this.infiniteScrollDisabled||i&&!n.currentValue||s;(l||i||s)&&(this.destroyScroller(),o&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:n,scrollWindow:e,element:l,fromRoot:i}=t,s=function({windowElement:t,axis:n}){return function(t,n){return Object.assign({},t,{container:t.isWindow||n&&!n.nativeElement?n:n.nativeElement})}({axis:n,isWindow:D(t)},t)}({axis:new C(!t.horizontal),windowElement:x(n,e,l,i)}),o=new j({totalToScroll:k(l,s)}),a={up:t.upDistance,down:t.downDistance};return function(t){let n=Object(d.a)(t.container,"scroll");return t.throttle&&(n=n.pipe(function(t,n=b.a){return e=>e.lift(new w(t,n))}(t.throttle))),n}({container:s.container,throttle:t.throttle}).pipe(Object(m.a)(()=>Object(u.a)(k(l,s))),Object(h.a)(t=>(function(t,n,e){const{scrollDown:l,fire:i}=function(t,n,e){const l=function(t,n){return t<n.scrolled}(t,n);return{fire:H(n,e,l),scrollDown:l}}(t,n,e);return{scrollDown:l,fire:i,stats:n}})(o.lastScrollPosition,t,a)),Object(g.a)(({stats:t})=>o.updateScroll(t.scrolled,t.totalToScroll)),Object(p.a)(({fire:n,scrollDown:e,stats:{totalToScroll:l}})=>(function(t,n,e){return!(!t||!n)||!(e||!n)})(t.alwaysCallback,n,o.isTriggeredScroll(l,e))),Object(g.a)(({scrollDown:t,stats:{totalToScroll:n}})=>{o.updateTriggeredFlag(n,t)}),Object(h.a)(N))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:n}){switch(t){case K.DOWN:return this.scrolled.emit(n);case K.UP:return this.scrolledUp.emit(n);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}class L{}class W{constructor(t,n){this.utility=t,this.dataService=n,this.items=[],this.batchSize=4,this.batchStart=0,this.isTeamsScrollFinished=!1}ngOnInit(){this.utility.setHeaderTagsByPath(),this.teams=this.dataService.getTeams(),this.verbose$=this.dataService.getIpsum(),this.onScroll()}onScroll(){const t=this.teams.slice(this.batchStart,this.batchStart+this.batchSize);this.batchStart+=this.batchSize,this.items=this.items.concat(t),this.batchStart>this.teams.length&&(this.isTeamsScrollFinished=!0)}}var z=e("A1CT"),_=e("EnSQ"),R=l.pb({encapsulation:0,styles:[[".main-panel[_ngcontent-%COMP%]{height:500px;overflow-y:scroll}.list-panel[_ngcontent-%COMP%]{height:20rem;overflow-y:scroll}.teams-multi-col-div[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;vertical-align:top;height:200px;border:0;margin:20px}.item[_ngcontent-%COMP%]{width:50vw}@media (min-width:576px){.item[_ngcontent-%COMP%]{width:27vw}}@media (min-width:768px){.item[_ngcontent-%COMP%]{width:30vw}}@media (min-width:992px){.item[_ngcontent-%COMP%]{width:35vw}}@media (min-width:1200px){.item[_ngcontent-%COMP%]{width:30vw}}"]],data:{}});function q(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,8,"mat-card",[["class","text-center m-4 mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,o.b,o.a)),l.qb(1,49152,null,0,a.a,[[2,c.a]],null,null),(t()(),l.rb(2,0,null,0,1,"img",[["class","item m-4 mat-card-lg-image"],["mat-card-lg-image",""]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),l.qb(3,16384,null,0,a.d,[],null,null),(t()(),l.rb(4,0,null,1,4,"mat-card-footer",[["class","px-2 mat-card-footer"]],null,null,null,null,null)),l.qb(5,16384,null,0,a.b,[],null,null),(t()(),l.rb(6,0,null,null,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),l.qb(7,16384,null,0,a.f,[],null,null),(t()(),l.Ib(8,null,["",""]))],null,function(t,n){t(n,0,0,"NoopAnimations"===l.Cb(n,1)._animationMode),t(n,2,0,n.context.$implicit.logo,n.context.$implicit.name),t(n,8,0,n.context.$implicit.name)})}function B(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(t()(),l.rb(1,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),l.Ib(2,null,["",""])),l.Eb(131072,r.b,[l.h]),(t()(),l.rb(4,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),l.Ib(5,null,["",""])),l.Eb(131072,r.b,[l.h]),(t()(),l.rb(7,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),l.Ib(8,null,["",""])),l.Eb(131072,r.b,[l.h]),(t()(),l.rb(10,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),l.Ib(11,null,["",""])),l.Eb(131072,r.b,[l.h])],null,function(t,n){var e=n.component;t(n,2,0,l.Jb(n,2,0,l.Cb(n,3).transform(e.verbose$))),t(n,5,0,l.Jb(n,5,0,l.Cb(n,6).transform(e.verbose$))),t(n,8,0,l.Jb(n,8,0,l.Cb(n,9).transform(e.verbose$))),t(n,11,0,l.Jb(n,11,0,l.Cb(n,12).transform(e.verbose$)))})}function J(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(t()(),l.rb(1,0,null,null,2,"div",[["class","row text-center"]],null,null,null,null,null)),(t()(),l.rb(2,0,null,null,1,"div",[["class","text-center mt-2"]],null,null,null,null,null)),(t()(),l.rb(3,0,null,null,0,"img",[["alt","banner"],["height","500"],["src","http://static.nfl.com/static/content/public/static/html/labs/cfb247/jordan-love/static/img/Love-1800x760.jpg"]],null,null,null,null,null)),(t()(),l.rb(4,0,null,null,2,"div",[["class","row text-center w-100"]],null,null,null,null,null)),(t()(),l.gb(16777216,null,null,1,null,q)),l.qb(6,278528,null,0,r.i,[l.N,l.K,l.q],{ngForOf:[0,"ngForOf"]},null),(t()(),l.gb(16777216,null,null,1,null,B)),l.qb(8,16384,null,0,r.j,[l.N,l.K],{ngIf:[0,"ngIf"]},null),(t()(),l.rb(9,0,null,null,1,"div",[["infiniteScroll",""]],null,[[null,"scrolled"]],function(t,n,e){var l=!0;return"scrolled"===n&&(l=!1!==t.component.onScroll()&&l),l},null,null)),l.qb(10,4866048,null,0,M,[l.k,l.x],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"]},{scrolled:"scrolled"})],function(t,n){var e=n.component;t(n,6,0,e.items),t(n,8,0,e.isTeamsScrollFinished),t(n,10,0,2,300)},null)}function F(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,1,"app-about",[],null,null,null,J,R)),l.qb(1,114688,null,0,W,[z.a,_.a],null,null)],function(t,n){t(n,1,0)},null)}var U=l.nb("app-about",W,F,{},{},[]),$=e("IP0z"),V=e("Xd0L"),Y=e("cUpR"),X=e("iInd");class G{}e.d(n,"AboutModuleNgFactory",function(){return Z});var Z=l.ob(i,[],function(t){return l.zb([l.Ab(512,l.j,l.Z,[[8,[s.a,U]],[3,l.j],l.v]),l.Ab(4608,r.l,r.k,[l.s,[2,r.y]]),l.Ab(1073742336,r.c,r.c,[]),l.Ab(1073742336,$.a,$.a,[]),l.Ab(1073742336,V.d,V.d,[[2,V.b],[2,Y.f]]),l.Ab(1073742336,a.e,a.e,[]),l.Ab(1073742336,L,L,[]),l.Ab(1073742336,X.m,X.m,[[2,X.r],[2,X.k]]),l.Ab(1073742336,G,G,[]),l.Ab(1073742336,i,i,[]),l.Ab(1024,X.i,function(){return[[{path:"",component:W}]]},[])])})},igqZ:function(t,n,e){"use strict";e.d(n,"f",function(){return l}),e.d(n,"b",function(){return i}),e.d(n,"d",function(){return s}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"g",function(){return c}),e.d(n,"e",function(){return r});class l{}class i{}class s{}class o{constructor(t){this._animationMode=t}}class a{}class c{}class r{}},lzlj:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s});var l=e("8Y7J"),i=(e("igqZ"),e("IP0z"),e("Xd0L"),e("cUpR"),e("omvX"),l.pb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function s(t){return l.Kb(2,[l.Bb(null,0),l.Bb(null,1)],null,null)}},xgIS:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var l=e("HDdC"),i=e("DH7j"),s=e("n6bG"),o=e("lJxs");function a(t,n,e,c){return Object(s.a)(e)&&(c=e,e=void 0),c?a(t,n,e).pipe(Object(o.a)(t=>Object(i.a)(t)?c(...t):c(t))):new l.a(l=>{!function t(n,e,l,i,s){let o;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(n)){const t=n;n.addEventListener(e,l,s),o=()=>t.removeEventListener(e,l,s)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(n)){const t=n;n.on(e,l),o=()=>t.off(e,l)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(n)){const t=n;n.addListener(e,l),o=()=>t.removeListener(e,l)}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(let o=0,a=n.length;o<a;o++)t(n[o],e,l,i,s)}i.add(o)}(t,n,function(t){l.next(arguments.length>1?Array.prototype.slice.call(arguments):t)},l,e)})}}}]);