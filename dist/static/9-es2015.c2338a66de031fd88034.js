(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XWda:function(t,e,i){"use strict";i.r(e);var a=i("ofXK"),r=i("fXoL"),s=i("FKr1"),n=i("8LU1"),l=i("FtGj");i("HDdC"),i("DH7j"),i("lJxs"),i("XoHu"),i("Cfvw");const o=new r.q("NgValueAccessor");var h=i("R1ws"),c=i("nLfN"),d=i("quSY"),m=i("u47x"),b=i("cH1L");const u=["sliderWrapper"],p=Object(c.d)({passive:!1}),g={provide:o,useExisting:Object(r.T)(()=>w),multi:!0};class v{}class f{constructor(t){this._elementRef=t}}const _=Object(s.d)(Object(s.b)(Object(s.c)(f),"accent"));let w=(()=>{class t extends _{constructor(t,e,i,a,s,n,l,o){super(t),this._focusMonitor=e,this._changeDetectorRef=i,this._dir=a,this._animationMode=n,this._ngZone=l,this._invert=!1,this._max=100,this._min=0,this._step=1,this._thumbLabel=!1,this._tickInterval=0,this._value=null,this._vertical=!1,this.change=new r.n,this.input=new r.n,this.valueChange=new r.n,this.onTouched=()=>{},this._percent=0,this._isSliding=!1,this._isActive=!1,this._tickIntervalPercent=0,this._sliderDimensions=null,this._controlValueAccessorChangeFn=()=>{},this._dirChangeSubscription=d.a.EMPTY,this._pointerDown=t=>{this.disabled||this._isSliding||!k(t)&&0!==t.button||this._runInsideZone(()=>{const e=this.value,i=x(t);this._isSliding=!0,this._lastPointerEvent=t,t.preventDefault(),this._focusHostElement(),this._onMouseenter(),this._bindGlobalEvents(t),this._focusHostElement(),this._updateValueFromPosition(i),this._valueOnSlideStart=this.value,this._pointerPositionOnStart=i,e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent())})},this._pointerMove=t=>{if(this._isSliding){t.preventDefault();const e=this.value;this._lastPointerEvent=t,this._updateValueFromPosition(x(t)),e!=this.value&&this._emitInputEvent()}},this._pointerUp=t=>{if(this._isSliding){const e=this._pointerPositionOnStart,i=x(t);t.preventDefault(),this._removeGlobalEvents(),this._valueOnSlideStart=this._pointerPositionOnStart=this._lastPointerEvent=null,this._isSliding=!1,this._valueOnSlideStart==this.value||this.disabled||!e||e.x===i.x&&e.y===i.y||this._emitChangeEvent()}},this._windowBlur=()=>{this._lastPointerEvent&&this._pointerUp(this._lastPointerEvent)},this._document=o,this.tabIndex=parseInt(s)||0,this._runOutsizeZone(()=>{const e=t.nativeElement;e.addEventListener("mousedown",this._pointerDown,p),e.addEventListener("touchstart",this._pointerDown,p)})}get invert(){return this._invert}set invert(t){this._invert=Object(n.a)(t)}get max(){return this._max}set max(t){this._max=Object(n.c)(t,this._max),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get min(){return this._min}set min(t){this._min=Object(n.c)(t,this._min),null===this._value&&(this.value=this._min),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get step(){return this._step}set step(t){this._step=Object(n.c)(t,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set thumbLabel(t){this._thumbLabel=Object(n.a)(t)}get tickInterval(){return this._tickInterval}set tickInterval(t){this._tickInterval="auto"===t?"auto":"number"==typeof t||"string"==typeof t?Object(n.c)(t,this._tickInterval):0}get value(){return null===this._value&&(this.value=this._min),this._value}set value(t){if(t!==this._value){let e=Object(n.c)(t);this._roundToDecimal&&(e=parseFloat(e.toFixed(this._roundToDecimal))),this._value=e,this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(n.a)(t)}get displayValue(){return this.displayWith?this.displayWith(this.value):this._roundToDecimal&&this.value&&this.value%1!=0?this.value.toFixed(this._roundToDecimal):this.value||0}focus(t){this._focusHostElement(t)}blur(){this._blurHostElement()}get percent(){return this._clamp(this._percent)}get _invertAxis(){return this.vertical?!this.invert:this.invert}get _isMinValue(){return 0===this.percent}get _thumbGap(){return this.disabled?7:this._isMinValue&&!this.thumbLabel?this._isActive?10:7:0}get _trackBackgroundStyles(){const t=this.vertical?`1, ${1-this.percent}, 1`:`${1-this.percent}, 1, 1`;return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"-":""}${this._thumbGap}px) scale3d(${t})`}}get _trackFillStyles(){const t=this.percent,e=this.vertical?`1, ${t}, 1`:`${t}, 1, 1`;return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"":"-"}${this._thumbGap}px) scale3d(${e})`,display:0===t?"none":""}}get _ticksContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"-":""}${this._tickIntervalPercent/2*100}%)`}}get _ticksStyles(){let t=100*this._tickIntervalPercent,e={backgroundSize:this.vertical?`2px ${t}%`:`${t}% 2px`,transform:`translateZ(0) translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"":"-"}${t/2}%)${this.vertical||"rtl"!=this._getDirection()?"":" rotate(180deg)"}`};if(this._isMinValue&&this._thumbGap){let t;t=this.vertical?this._invertAxis?"Bottom":"Top":this._invertAxis?"Right":"Left",e[`padding${t}`]=`${this._thumbGap}px`}return e}get _thumbContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(-${100*(("rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis)?this.percent:1-this.percent)}%)`}}_shouldInvertMouseCoords(){return"rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis}_getDirection(){return this._dir&&"rtl"==this._dir.value?"rtl":"ltr"}ngOnInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{this._isActive=!!t&&"keyboard"!==t,this._changeDetectorRef.detectChanges()}),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngOnDestroy(){const t=this._elementRef.nativeElement;t.removeEventListener("mousedown",this._pointerDown,p),t.removeEventListener("touchstart",this._pointerDown,p),this._lastPointerEvent=null,this._removeGlobalEvents(),this._focusMonitor.stopMonitoring(this._elementRef),this._dirChangeSubscription.unsubscribe()}_onMouseenter(){this.disabled||(this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent())}_onFocus(){this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent()}_onBlur(){this.onTouched()}_onKeydown(t){if(this.disabled||Object(l.p)(t))return;const e=this.value;switch(t.keyCode){case l.i:this._increment(10);break;case l.h:this._increment(-10);break;case l.c:this.value=this.max;break;case l.e:this.value=this.min;break;case l.f:this._increment("rtl"==this._getDirection()?1:-1);break;case l.m:this._increment(1);break;case l.j:this._increment("rtl"==this._getDirection()?-1:1);break;case l.b:this._increment(-1);break;default:return}e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent()),this._isSliding=!0,t.preventDefault()}_onKeyup(){this._isSliding=!1}_bindGlobalEvents(t){if(void 0!==this._document&&this._document){const e=this._document.body,i=k(t),a=i?"touchend":"mouseup";e.addEventListener(i?"touchmove":"mousemove",this._pointerMove,p),e.addEventListener(a,this._pointerUp,p),i&&e.addEventListener("touchcancel",this._pointerUp,p)}"undefined"!=typeof window&&window&&window.addEventListener("blur",this._windowBlur)}_removeGlobalEvents(){if(void 0!==this._document&&this._document){const t=this._document.body;t.removeEventListener("mousemove",this._pointerMove,p),t.removeEventListener("mouseup",this._pointerUp,p),t.removeEventListener("touchmove",this._pointerMove,p),t.removeEventListener("touchend",this._pointerUp,p),t.removeEventListener("touchcancel",this._pointerUp,p)}"undefined"!=typeof window&&window&&window.removeEventListener("blur",this._windowBlur)}_increment(t){this.value=this._clamp((this.value||0)+this.step*t,this.min,this.max)}_updateValueFromPosition(t){if(!this._sliderDimensions)return;let e=this._clamp(((this.vertical?t.y:t.x)-(this.vertical?this._sliderDimensions.top:this._sliderDimensions.left))/(this.vertical?this._sliderDimensions.height:this._sliderDimensions.width));if(this._shouldInvertMouseCoords()&&(e=1-e),0===e)this.value=this.min;else if(1===e)this.value=this.max;else{const t=this._calculateValue(e),i=Math.round((t-this.min)/this.step)*this.step+this.min;this.value=this._clamp(i,this.min,this.max)}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.value),this.valueChange.emit(this.value),this.change.emit(this._createChangeEvent())}_emitInputEvent(){this.input.emit(this._createChangeEvent())}_updateTickIntervalPercent(){if(this.tickInterval&&this._sliderDimensions)if("auto"==this.tickInterval){let t=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,e=Math.ceil(30/(t*this.step/(this.max-this.min)));this._tickIntervalPercent=e*this.step/t}else this._tickIntervalPercent=this.tickInterval*this.step/(this.max-this.min)}_createChangeEvent(t=this.value){let e=new v;return e.source=this,e.value=t,e}_calculatePercentage(t){return((t||0)-this.min)/(this.max-this.min)}_calculateValue(t){return this.min+t*(this.max-this.min)}_clamp(t,e=0,i=1){return Math.max(e,Math.min(t,i))}_getSliderDimensions(){return this._sliderWrapper?this._sliderWrapper.nativeElement.getBoundingClientRect():null}_focusHostElement(t){this._elementRef.nativeElement.focus(t)}_blurHostElement(){this._elementRef.nativeElement.blur()}_runInsideZone(t){this._ngZone?this._ngZone.run(t):t()}_runOutsizeZone(t){this._ngZone?this._ngZone.runOutsideAngular(t):t()}writeValue(t){this.value=t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(r.l),r.Lb(m.a),r.Lb(r.h),r.Lb(b.b,8),r.Vb("tabindex"),r.Lb(h.a,8),r.Lb(r.z),r.Lb(a.d,8))},t.\u0275cmp=r.Fb({type:t,selectors:[["mat-slider"]],viewQuery:function(t,e){var i;1&t&&r.uc(u,!0),2&t&&r.jc(i=r.Zb())&&(e._sliderWrapper=i.first)},hostAttrs:["role","slider",1,"mat-slider","mat-focus-indicator"],hostVars:28,hostBindings:function(t,e){1&t&&r.Yb("focus",(function(){return e._onFocus()}))("blur",(function(){return e._onBlur()}))("keydown",(function(t){return e._onKeydown(t)}))("keyup",(function(){return e._onKeyup()}))("mouseenter",(function(){return e._onMouseenter()}))("selectstart",(function(t){return t.preventDefault()})),2&t&&(r.Tb("tabIndex",e.tabIndex),r.Cb("aria-disabled",e.disabled)("aria-valuemax",e.max)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-orientation",e.vertical?"vertical":"horizontal"),r.Db("mat-slider-disabled",e.disabled)("mat-slider-has-ticks",e.tickInterval)("mat-slider-horizontal",!e.vertical)("mat-slider-axis-inverted",e._invertAxis)("mat-slider-invert-mouse-coords",e._shouldInvertMouseCoords())("mat-slider-sliding",e._isSliding)("mat-slider-thumb-label-showing",e.thumbLabel)("mat-slider-vertical",e.vertical)("mat-slider-min-value",e._isMinValue)("mat-slider-hide-last-tick",e.disabled||e._isMinValue&&e._thumbGap&&e._invertAxis)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",color:"color",tabIndex:"tabIndex",invert:"invert",max:"max",min:"min",value:"value",step:"step",thumbLabel:"thumbLabel",tickInterval:"tickInterval",vertical:"vertical",displayWith:"displayWith"},outputs:{change:"change",input:"input",valueChange:"valueChange"},exportAs:["matSlider"],features:[r.Ab([g]),r.yb],decls:13,vars:6,consts:[[1,"mat-slider-wrapper"],["sliderWrapper",""],[1,"mat-slider-track-wrapper"],[1,"mat-slider-track-background",3,"ngStyle"],[1,"mat-slider-track-fill",3,"ngStyle"],[1,"mat-slider-ticks-container",3,"ngStyle"],[1,"mat-slider-ticks",3,"ngStyle"],[1,"mat-slider-thumb-container",3,"ngStyle"],[1,"mat-slider-focus-ring"],[1,"mat-slider-thumb"],[1,"mat-slider-thumb-label"],[1,"mat-slider-thumb-label-text"]],template:function(t,e){1&t&&(r.Qb(0,"div",0,1),r.Qb(2,"div",2),r.Mb(3,"div",3),r.Mb(4,"div",4),r.Pb(),r.Qb(5,"div",5),r.Mb(6,"div",6),r.Pb(),r.Qb(7,"div",7),r.Mb(8,"div",8),r.Mb(9,"div",9),r.Qb(10,"div",10),r.Qb(11,"span",11),r.rc(12),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.Bb(3),r.hc("ngStyle",e._trackBackgroundStyles),r.Bb(1),r.hc("ngStyle",e._trackFillStyles),r.Bb(1),r.hc("ngStyle",e._ticksContainerStyles),r.Bb(1),r.hc("ngStyle",e._ticksStyles),r.Bb(1),r.hc("ngStyle",e._thumbContainerStyles),r.Bb(5),r.sc(e.displayValue))},directives:[a.k],styles:['.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n'],encapsulation:2,changeDetection:0}),t})();function k(t){return"t"===t.type[0]}function x(t){const e=k(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.clientX,y:e.clientY}}let P=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[a.c,s.a],s.a]}),t})();var M=i("tyNb"),y=i("2Vo4"),Q=i("AytR");function S(t,e){1&t&&(r.Qb(0,"pre"),r.rc(1,"ng generate component xyz"),r.Pb())}function L(t,e){1&t&&(r.Qb(0,"pre"),r.rc(1,"ng add @angular/material"),r.Pb())}function z(t,e){1&t&&(r.Qb(0,"pre"),r.rc(1,"ng add _____"),r.Pb())}function C(t,e){1&t&&(r.Qb(0,"pre"),r.rc(1,"ng test"),r.Pb())}function A(t,e){1&t&&(r.Qb(0,"pre"),r.rc(1,"ng build --prod"),r.Pb())}function D(t,e){if(1&t){const t=r.Rb();r.bc(),r.ac(),r.Ob(0),r.Qb(1,"h2"),r.rc(2,"Resources"),r.Pb(),r.Qb(3,"p"),r.rc(4,"Here are some links to help you get started:"),r.Pb(),r.Qb(5,"div",12),r.Qb(6,"a",13),r.bc(),r.Qb(7,"svg",14),r.Mb(8,"path",15),r.Pb(),r.ac(),r.Qb(9,"span"),r.rc(10,"Learn Angular"),r.Pb(),r.bc(),r.Qb(11,"svg",14),r.Mb(12,"path",16),r.Pb(),r.Pb(),r.ac(),r.Qb(13,"a",17),r.bc(),r.Qb(14,"svg",14),r.Mb(15,"path",18),r.Pb(),r.ac(),r.Qb(16,"span"),r.rc(17,"CLI Documentation"),r.Pb(),r.bc(),r.Qb(18,"svg",14),r.Mb(19,"path",16),r.Pb(),r.Pb(),r.ac(),r.Qb(20,"a",19),r.bc(),r.Qb(21,"svg",14),r.Mb(22,"path",20),r.Pb(),r.ac(),r.Qb(23,"span"),r.rc(24,"Angular Blog"),r.Pb(),r.bc(),r.Qb(25,"svg",14),r.Mb(26,"path",16),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(27,"h2"),r.rc(28,"Next Steps"),r.Pb(),r.Qb(29,"p"),r.rc(30,"What do you want to do next with your app?"),r.Pb(),r.Mb(31,"input",21,22),r.Qb(33,"div",12),r.Qb(34,"div",23),r.Yb("click",(function(){return r.lc(t),r.kc(32).value="component"})),r.bc(),r.Qb(35,"svg",14),r.Mb(36,"path",24),r.Pb(),r.ac(),r.Qb(37,"span"),r.rc(38,"New Component"),r.Pb(),r.Pb(),r.Qb(39,"div",23),r.Yb("click",(function(){return r.lc(t),r.kc(32).value="material"})),r.bc(),r.Qb(40,"svg",14),r.Mb(41,"path",24),r.Pb(),r.ac(),r.Qb(42,"span"),r.rc(43,"Angular Material"),r.Pb(),r.Pb(),r.Qb(44,"div",23),r.Yb("click",(function(){return r.lc(t),r.kc(32).value="dependency"})),r.bc(),r.Qb(45,"svg",14),r.Mb(46,"path",24),r.Pb(),r.ac(),r.Qb(47,"span"),r.rc(48,"Add Dependency"),r.Pb(),r.Pb(),r.Qb(49,"div",23),r.Yb("click",(function(){return r.lc(t),r.kc(32).value="test"})),r.bc(),r.Qb(50,"svg",14),r.Mb(51,"path",24),r.Pb(),r.ac(),r.Qb(52,"span"),r.rc(53,"Run and Watch Tests"),r.Pb(),r.Pb(),r.Qb(54,"div",23),r.Yb("click",(function(){return r.lc(t),r.kc(32).value="build"})),r.bc(),r.Qb(55,"svg",14),r.Mb(56,"path",24),r.Pb(),r.ac(),r.Qb(57,"span"),r.rc(58,"Build for Production"),r.Pb(),r.Pb(),r.Pb(),r.Qb(59,"div",25),r.qc(60,S,2,0,"pre",26),r.qc(61,L,2,0,"pre",27),r.qc(62,z,2,0,"pre",27),r.qc(63,C,2,0,"pre",27),r.qc(64,A,2,0,"pre",27),r.Pb(),r.Qb(65,"div",12),r.Qb(66,"a",28),r.bc(),r.Qb(67,"svg",29),r.Mb(68,"path",30),r.Mb(69,"path",31),r.Mb(70,"path",32),r.Mb(71,"path",33),r.Mb(72,"path",34),r.Pb(),r.Pb(),r.ac(),r.Qb(73,"a",35),r.bc(),r.Qb(74,"svg",36),r.Qb(75,"g",37),r.Mb(76,"path",38),r.Mb(77,"path",39),r.Mb(78,"path",40),r.Mb(79,"path",41),r.Mb(80,"rect",42),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(81,"a",43),r.bc(),r.Qb(82,"svg",44),r.Qb(83,"defs"),r.Qb(84,"clipPath",45),r.Mb(85,"rect",46),r.Pb(),r.Pb(),r.Qb(86,"g",47),r.Mb(87,"path",48),r.Mb(88,"path",49),r.Qb(89,"g",50),r.Qb(90,"g",51),r.Qb(91,"g",52),r.Mb(92,"path",53),r.Pb(),r.Pb(),r.Pb(),r.Mb(93,"path",54),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(94,"a",55),r.bc(),r.Qb(95,"svg",56),r.Qb(96,"g",57),r.Mb(97,"path",58),r.Mb(98,"path",59),r.Mb(99,"path",60),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(100,"a",61),r.bc(),r.Qb(101,"svg",62),r.Mb(102,"path",63),r.Pb(),r.Pb(),r.ac(),r.Qb(103,"a",64),r.bc(),r.Qb(104,"svg",65),r.Qb(105,"g",66),r.Mb(106,"rect",67),r.Qb(107,"g",68),r.Qb(108,"g",69),r.Mb(109,"rect",70),r.Mb(110,"rect",71),r.Mb(111,"rect",72),r.Mb(112,"rect",73),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(113,"footer"),r.rc(114," Love Angular?\xa0 "),r.Qb(115,"a",74),r.rc(116," Give our repo a star. "),r.Qb(117,"div",75),r.bc(),r.Qb(118,"svg",14),r.Mb(119,"path",76),r.Mb(120,"path",77),r.Pb(),r.rc(121," Star "),r.Pb(),r.Pb(),r.ac(),r.Qb(122,"a",74),r.bc(),r.Qb(123,"svg",14),r.Mb(124,"path",78),r.Mb(125,"path",76),r.Pb(),r.Pb(),r.Pb(),r.Qb(126,"svg",79),r.Mb(127,"path",80),r.Pb(),r.Nb()}if(2&t){const t=r.kc(32);r.Bb(59),r.hc("ngSwitch",t.value),r.Bb(2),r.hc("ngSwitchCase","material"),r.Bb(1),r.hc("ngSwitchCase","dependency"),r.Bb(1),r.hc("ngSwitchCase","test"),r.Bb(1),r.hc("ngSwitchCase","build")}}const E=[{path:"",component:(()=>{class t{constructor(){this.title="Static Ng9",this.show$=new y.a(!1)}ngOnInit(){this.asyncLoad()}asyncLoad(){setTimeout(()=>{console.log("async"),this.loadContent()},Q.a.delay)}syncLoad(){const t=Date.now()+Q.a.delay;for(;Date.now()<t;)continue;this.loadContent()}loadContent(){this.title=`Static Ng9 delays ${Q.a.delay}ms`,this.show$.next(!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-home"]],decls:15,vars:4,consts:[["role","main",1,"content"],["min","1","max","100","step","1","value","1"],[1,"card","highlight-card","card-small"],["id","rocket","alt","Rocket Ship","xmlns","http://www.w3.org/2000/svg","width","101.678","height","101.678","viewBox","0 0 101.678 101.678"],["id","Group_83","data-name","Group 83","transform","translate(-141 -696)"],["id","Ellipse_8","data-name","Ellipse 8","cx","50.839","cy","50.839","r","50.839","transform","translate(141 696)","fill","#dd0031"],["id","Group_47","data-name","Group 47","transform","translate(165.185 720.185)"],["id","Path_33","data-name","Path 33","d","M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z","transform","translate(0.371 3.363)","fill","#fff"],["id","Path_34","data-name","Path 34","d","M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z","transform","translate(0 0.005)","fill","#fff"],["id","rocket-smoke","alt","Rocket Ship Smoke","xmlns","http://www.w3.org/2000/svg","width","516.119","height","1083.632","viewBox","0 0 516.119 1083.632"],["id","Path_40","data-name","Path 40","d","M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z","transform","translate(-147.025 -140.939)","fill","#f5f5f5"],[4,"ngIf"],[1,"card-container"],["target","_blank","rel","noopener","href","https://angular.io/tutorial",1,"card"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"material-icons"],["d","M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["target","_blank","rel","noopener","href","https://angular.io/cli",1,"card"],["d","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"],["target","_blank","rel","noopener","href","https://blog.angular.io/",1,"card"],["d","M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"],["type","hidden"],["selection",""],["tabindex","0",1,"card","card-small",3,"click"],["d","M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],[1,"terminal",3,"ngSwitch"],[4,"ngSwitchDefault"],[4,"ngSwitchCase"],["title","Animations","href","https://angular.io/guide/animations","target","_blank","rel","noopener",1,"circle-link"],["id","Group_20","data-name","Group 20","xmlns","http://www.w3.org/2000/svg","width","21.813","height","23.453","viewBox","0 0 21.813 23.453"],["id","Path_15","data-name","Path 15","d","M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z","transform","translate(-4088.702 -972.736)","fill","#ffa726"],["id","Path_16","data-name","Path 16","d","M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z","transform","translate(-4170.633 -972.736)","fill","#fb8c00"],["id","Path_17","data-name","Path 17","d","M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z","transform","translate(-4125.003 -1058.315)","fill","#ffe0b2"],["id","Path_18","data-name","Path 18","d","M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z","transform","translate(-4125.003 -1036.757)","fill","#fff3e0"],["id","Path_19","data-name","Path 19","d","M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z","transform","translate(-4125.003 -1015.199)","fill","#fff"],["title","CLI","href","https://cli.angular.io/","target","_blank","rel","noopener",1,"circle-link"],["alt","Angular CLI Logo","xmlns","http://www.w3.org/2000/svg","width","21.762","height","23.447","viewBox","0 0 21.762 23.447"],["id","Group_21","data-name","Group 21","transform","translate(0)"],["id","Path_20","data-name","Path 20","d","M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z","transform","translate(-2649.48 -313.618)","fill","#37474f"],["id","Path_21","data-name","Path 21","d","M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z","transform","translate(-2731.05 -313.618)","fill","#263238"],["id","Path_22","data-name","Path 22","d","M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z","transform","translate(-2687.274 -362.17)","fill","#fff"],["id","Path_23","data-name","Path 23","d","M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z","transform","translate(-2702.289 -380.631)","fill","#fff"],["id","Rectangle_12","data-name","Rectangle 12","width","3.517","height","0.469","transform","translate(9.709 13.744)","fill","#fff"],["title","Augury","href","https://augury.rangle.io/","target","_blank","rel","noopener",1,"circle-link"],["alt","Angular Augury Logo","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","21.81","height","23.447","viewBox","0 0 21.81 23.447"],["id","clip-path"],["id","Rectangle_13","data-name","Rectangle 13","width","10.338","height","10.27","fill","none"],["id","Group_25","data-name","Group 25","transform","translate(0)"],["id","Path_24","data-name","Path 24","d","M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z","transform","translate(-3769.274 -311.417)","fill","#4a3493"],["id","Path_25","data-name","Path 25","d","M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z","transform","translate(-3851.207 -311.417)","fill","#311b92"],["id","Group_24","data-name","Group 24","transform","translate(6.194 6.73)","opacity","0.5"],["id","Group_23","data-name","Group 23","transform","translate(0 0)"],["id","Group_22","data-name","Group 22","clip-path","url(#clip-path)"],["id","Path_26","data-name","Path 26","d","M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z","transform","translate(-3822.107 -368.821)","fill","#fff"],["id","Path_27","data-name","Path 27","d","M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z","transform","translate(-3814.311 -359.969)","fill","#fff"],["title","Protractor","href","https://www.protractortest.org/","target","_blank","rel","noopener",1,"circle-link"],["alt","Angular Protractor Logo","xmlns","http://www.w3.org/2000/svg","width","21.81","height","23.447","viewBox","0 0 21.81 23.447"],["id","Group_26","data-name","Group 26","transform","translate(0)"],["id","Path_28","data-name","Path 28","d","M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z","transform","translate(-4609.274 -311.417)","fill","#e13439"],["id","Path_29","data-name","Path 29","d","M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z","transform","translate(-4691.207 -311.417)","fill","#b52f32"],["id","Path_30","data-name","Path 30","d","M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z","transform","translate(-4634.008 -355.852)","fill","#fff"],["title","Find a Local Meetup","href","https://www.meetup.com/find/?keywords=angular","target","_blank","rel","noopener",1,"circle-link"],["alt","Meetup Logo","xmlns","http://www.w3.org/2000/svg","width","24.607","height","23.447","viewBox","0 0 24.607 23.447"],["id","logo--mSwarm","d","M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z","transform","translate(0 0.123)","fill","#f64060"],["title","Join the Conversation on Gitter","href","https://gitter.im/angular/angular","target","_blank","rel","noopener",1,"circle-link"],["alt","Gitter Logo","xmlns","http://www.w3.org/2000/svg","width","19.447","height","19.447","viewBox","0 0 19.447 19.447"],["id","Group_40","data-name","Group 40","transform","translate(-1612 -405)"],["id","Rectangle_19","data-name","Rectangle 19","width","19.447","height","19.447","transform","translate(1612 405)","fill","#e60257"],["id","gitter","transform","translate(1617.795 408.636)"],["id","Group_33","data-name","Group 33","transform","translate(0 0)"],["id","Rectangle_15","data-name","Rectangle 15","width","1.04","height","9.601","transform","translate(2.304 2.324)","fill","#fff"],["id","Rectangle_16","data-name","Rectangle 16","width","1.04","height","9.601","transform","translate(4.607 2.324)","fill","#fff"],["id","Rectangle_17","data-name","Rectangle 17","width","1.04","height","4.648","transform","translate(6.91 2.324)","fill","#fff"],["id","Rectangle_18","data-name","Rectangle 18","width","1.04","height","6.971","transform","translate(0 0)","fill","#fff"],["href","https://github.com/angular/angular","target","_blank","rel","noopener"],[1,"github-star-badge"],["d","M0 0h24v24H0z","fill","none"],["d","M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z","fill","#1976d2"],["id","clouds","alt","Gray Clouds Background","xmlns","http://www.w3.org/2000/svg","width","2611.084","height","485.677","viewBox","0 0 2611.084 485.677"],["id","Path_39","data-name","Path 39","d","M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z","transform","translate(142.69 -634.312)","fill","#eee"]],template:function(t,e){1&t&&(r.Qb(0,"div",0),r.Mb(1,"mat-slider",1),r.Qb(2,"div",2),r.bc(),r.Qb(3,"svg",3),r.Qb(4,"g",4),r.Mb(5,"circle",5),r.Qb(6,"g",6),r.Mb(7,"path",7),r.Mb(8,"path",8),r.Pb(),r.Pb(),r.Pb(),r.ac(),r.Qb(9,"span"),r.rc(10),r.Pb(),r.bc(),r.Qb(11,"svg",9),r.Mb(12,"path",10),r.Pb(),r.Pb(),r.qc(13,D,128,5,"ng-container",11),r.dc(14,"async"),r.Pb()),2&t&&(r.Bb(10),r.tc("",e.title," app is running!"),r.Bb(3),r.hc("ngIf",r.ec(14,2,e.show$)))},directives:[w,a.j,a.l,a.n,a.m],pipes:[a.b],styles:[""]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[M.e.forChild(E)],M.e]}),t})();i.d(e,"HomeModule",(function(){return Z}));let Z=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[a.c,P,I]]}),t})()}}]);