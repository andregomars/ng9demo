(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BFmI:function(t,c,i){"use strict";i.r(c);var r=i("ofXK"),o=i("vxfF"),e=i("Wp6s"),a=i("SYYg"),s=i("tyNb"),l=i("fXoL"),n=i("A1CT"),d=i("EnSQ");function b(t,c){if(1&t&&(l.Ob(0,"mat-card"),l.Mb(1,"img",6),l.Nb()),2&t){const t=c.$implicit;l.Bb(1),l.fc("src",t.logo,l.kc)("alt",t.name)}}function m(t,c){if(1&t&&(l.Ob(0,"div",9),l.Ob(1,"mat-card"),l.Mb(2,"img",6),l.Nb(),l.Nb()),2&t){const t=c.$implicit;l.Bb(2),l.fc("src",t.logo,l.kc)("alt",t.name)}}function u(t,c){if(1&t&&(l.Ob(0,"div",7),l.oc(1,m,3,2,"div",8),l.Nb()),2&t){const t=c.$implicit;l.Bb(1),l.fc("ngForOf",t)}}const f=[{path:"",component:(()=>{class t{constructor(t,c){this.utility=t,this.dataService=c}ngOnInit(){this.utility.setHeaderTagsByPath(),this.teams=this.dataService.getTeams();const t=this.dataService.getTeams(),c=this.dataService.isMobile()?1:4;this.teamRows=this.dataService.getScrollableList(t,c)}}return t.\u0275fac=function(c){return new(c||t)(l.Lb(n.a),l.Lb(d.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-cdkscroll"]],decls:9,vars:2,consts:[[1,"container"],[1,"mt-4"],["itemSize","100",1,"viewer"],[4,"cdkVirtualFor","cdkVirtualForOf"],["itemSize","300",1,"viewer"],["class","row",4,"cdkVirtualFor","cdkVirtualForOf"],["mat-card-lg-image","",3,"src","alt"],[1,"row"],["class","col-12 col-md-6 col-lg-3 my-2",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-lg-3","my-2"]],template:function(t,c){1&t&&(l.Ob(0,"div",0),l.Ob(1,"p",1),l.pc(2,"simple cdk virtual scroll"),l.Nb(),l.Ob(3,"cdk-virtual-scroll-viewport",2),l.oc(4,b,2,2,"mat-card",3),l.Nb(),l.Ob(5,"p",1),l.pc(6,"cdk virtual scroll plus bootstrap grid"),l.Nb(),l.Ob(7,"cdk-virtual-scroll-viewport",4),l.oc(8,u,2,1,"div",5),l.Nb(),l.Nb()),2&t&&(l.Bb(4),l.fc("cdkVirtualForOf",c.teams),l.Bb(4),l.fc("cdkVirtualForOf",c.teamRows))},directives:[o.c,o.a,o.b,e.a,e.c,r.i],styles:[".viewer[_ngcontent-%COMP%]{height:300px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(c){return new(c||t)},imports:[[s.e.forChild(f)],s.e]}),t})();i.d(c,"CdkScrollModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(c){return new(c||t)},imports:[[r.c,e.d,o.d,a.b,p]]}),t})()}}]);