function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{P1np:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),r=i("vxfF"),a=i("Wp6s"),c=i("SYYg"),o=i("tyNb"),l=i("fXoL"),s=i("A1CT"),u=i("EnSQ");function f(t,e){if(1&t&&(l.Qb(0,"mat-card",5),l.Mb(1,"img",6),l.Pb()),2&t){var i=e.$implicit;l.Bb(1),l.hc("src",i.logo,l.mc)("alt",i.name)}}var p,m,b=[{path:"",component:(p=function(){function t(e,i){_classCallCheck(this,t),this.utility=e,this.dataService=i}return _createClass(t,[{key:"ngOnInit",value:function(){this.utility.setHeaderTagsByPath(),this.teams=this.dataService.getTeams()}}]),t}(),p.\u0275fac=function(t){return new(t||p)(l.Lb(s.a),l.Lb(u.a))},p.\u0275cmp=l.Fb({type:p,selectors:[["app-virtualscroll"]],decls:6,vars:2,consts:[[1,"container"],[1,"mt-4"],[3,"items"],["scroll",""],["class","teams-multi-col",4,"ngFor","ngForOf"],[1,"teams-multi-col"],["mat-card-lg-image","",1,"item",3,"src","alt"]],template:function(t,e){if(1&t&&(l.Qb(0,"div",0),l.Qb(1,"p",1),l.rc(2,"3rd party virtual scroll"),l.Pb(),l.Qb(3,"virtual-scroller",2,3),l.qc(5,f,2,2,"mat-card",4),l.Pb(),l.Pb()),2&t){var i=l.kc(4);l.Bb(3),l.hc("items",e.teams),l.Bb(2),l.hc("ngForOf",i.viewPortItems)}},directives:[c.a,n.i,a.a,a.c],styles:["virtual-scroller[_ngcontent-%COMP%]{width:100%;height:480px}.teams-single-col[_ngcontent-%COMP%]{display:block;width:100%;height:30px}.teams-multi-col[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;vertical-align:top;height:200px;border:0;margin:20px;width:25%}"]}),p)}],d=((m=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:m}),m.\u0275inj=l.Ib({factory:function(t){return new(t||m)},imports:[[o.e.forChild(b)],o.e]}),m);i.d(e,"VirtualScrollModule",(function(){return g}));var h,g=((h=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:h}),h.\u0275inj=l.Ib({factory:function(t){return new(t||h)},imports:[[n.c,a.d,r.d,c.b,d]]}),h)}}]);