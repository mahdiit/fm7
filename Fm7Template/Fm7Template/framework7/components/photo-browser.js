(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);document,window;var c=e.$,p=(e.Template7,e.utils),r=(e.device,e.support,e.Class),t=(e.Modal,e.ConstructorMethods),a=(e.ModalMethods,function(a){function e(e,o){void 0===o&&(o={}),a.call(this,o,[e]);var r=this;r.app=e;var t=p.extend({on:{}},e.params.photoBrowser);r.useModulesParams(t),r.params=p.extend(t,o),p.extend(r,{exposed:!1,opened:!1,activeIndex:r.params.swiper.initialSlide,url:r.params.url,view:r.params.view||e.views.main,swipeToClose:{allow:!0,isTouched:!1,diff:void 0,start:void 0,current:void 0,started:!1,activeSlide:void 0,timeStart:void 0}}),r.useModules(),r.init()}return a&&(e.__proto__=a),((e.prototype=Object.create(a&&a.prototype)).constructor=e).prototype.onSlideChange=function(e){var o=this;o.activeIndex=e.activeIndex;var r=e.activeIndex+1,t=o.params.virtualSlides?o.params.photos.length:e.slides.length;e.params.loop&&(t-=2,(r-=e.loopedSlides)<1&&(r=t+r),t<r&&(r-=t));var a=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.activeIndex+'"]'):e.slides.eq(e.activeIndex),n=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.previousIndex+'"]'):e.slides.eq(e.previousIndex),p=o.$el.find(".photo-browser-current"),s=o.$el.find(".photo-browser-total");if("page"===o.params.type&&o.params.navbar&&0===p.length&&"ios"===o.app.theme){var i=o.app.navbar.getElByPage(o.$el);i&&(p=c(i).find(".photo-browser-current"),s=c(i).find(".photo-browser-total"))}if(p.text(r),s.text(t),0<o.captions.length){var l=e.params.loop?a.attr("data-swiper-slide-index"):o.activeIndex;o.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"),o.$captionsContainerEl.find('[data-caption-index="'+l+'"]').addClass("photo-browser-caption-active")}var d=n.find("video");0<d.length&&"pause"in d[0]&&d[0].pause()},e.prototype.onTouchStart=function(){var e=this.swipeToClose;e.allow&&(e.isTouched=!0)},e.prototype.onTouchMove=function(e){var o=this,r=o.swipeToClose;if(r.isTouched){r.started||(r.started=!0,r.start="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,o.params.virtualSlides?r.activeSlide=o.swiper.$wrapperEl.children(".swiper-slide-active"):r.activeSlide=o.swiper.slides.eq(o.swiper.activeIndex),r.timeStart=p.now()),e.preventDefault(),r.current="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,r.diff=r.start-r.current;var t=1-Math.abs(r.diff)/300,a=o.exposed||"dark"===o.params.theme?0:255;r.activeSlide.transform("translate3d(0,"+-r.diff+"px,0)"),o.swiper.$el.css("background-color","rgba("+a+", "+a+", "+a+", "+t+")").transition(0)}},e.prototype.onTouchEnd=function(){var e=this,o=e.swipeToClose;if(o.isTouched=!1,o.started){o.started=!1,o.allow=!1;var r=Math.abs(o.diff),t=(new Date).getTime()-o.timeStart;t<300&&20<r||300<=t&&100<r?p.nextTick(function(){e.$el&&(o.diff<0?e.$el.addClass("swipe-close-to-bottom"):e.$el.addClass("swipe-close-to-top")),e.emit("local::swipeToClose",e),e.close(),o.allow=!0}):(0!==r?o.activeSlide.addClass("photo-browser-transitioning").transitionEnd(function(){o.allow=!0,o.activeSlide.removeClass("photo-browser-transitioning")}):o.allow=!0,e.swiper.$el.transition("").css("background-color",""),o.activeSlide.transform(""))}else o.started=!1},e.prototype.renderNavbar=function(){var e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);var o=e.params.iconsColor;e.params.iconsColor||"dark"!==e.params.theme||(o="white");var r="ios"===e.app.theme&&e.params.backLinkText?e.params.backLinkText:"",t="page"!==e.params.type;return('\n      <div class="navbar">\n        <div class="navbar-inner sliding">\n          <div class="left">\n            <a href="#" class="link '+(t?"popup-close":"")+" "+(r?"":"icon-only")+" "+(t?"":"back")+'" '+(t?'data-popup=".photo-browser-popup"':"")+'>\n              <i class="icon icon-back '+(o?"color-"+o:"")+'"></i>\n              '+(r?"<span>"+r+"</span>":"")+'\n            </a>\n          </div>\n          <div class="title">\n            <span class="photo-browser-current"></span>\n            <span class="photo-browser-of">'+e.params.navbarOfText+'</span>\n            <span class="photo-browser-total"></span>\n          </div>\n          <div class="right"></div>\n        </div>\n      </div>\n    ').trim()},e.prototype.renderToolbar=function(){var e=this;if(e.params.renderToolbar)return e.params.renderToolbar.call(e);var o=e.params.iconsColor;return e.params.iconsColor||"dark"!==e.params.theme||(o="white"),('\n      <div class="toolbar toolbar-bottom tabbar">\n        <div class="toolbar-inner">\n          <a href="#" class="link photo-browser-prev">\n            <i class="icon icon-back '+(o?"color-"+o:"")+'"></i>\n          </a>\n          <a href="#" class="link photo-browser-next">\n            <i class="icon icon-forward '+(o?"color-"+o:"")+'"></i>\n          </a>\n        </div>\n      </div>\n    ').trim()},e.prototype.renderCaption=function(e,o){return this.params.renderCaption?this.params.renderCaption.call(this,e,o):('\n      <div class="photo-browser-caption" data-caption-index="'+o+'">\n        '+e+"\n      </div>\n    ").trim()},e.prototype.renderObject=function(e,o){return this.params.renderObject?this.params.renderObject.call(this,e,o):'\n      <div class="photo-browser-slide photo-browser-object-slide swiper-slide" data-swiper-slide-index="'+o+'">'+(e.html?e.html:e)+"</div>\n    "},e.prototype.renderLazyPhoto=function(e,o){var r=this;return r.params.renderLazyPhoto?r.params.renderLazyPhoto.call(r,e,o):('\n      <div class="photo-browser-slide photo-browser-slide-lazy swiper-slide" data-swiper-slide-index="'+o+'">\n          <div class="preloader swiper-lazy-preloader '+("dark"===r.params.theme?"color-white":"")+'">'+(p[r.app.theme+"PreloaderContent"]||"")+'</div>\n          <span class="swiper-zoom-container">\n              <img data-src="'+(e.url?e.url:e)+'" class="swiper-lazy">\n          </span>\n      </div>\n    ').trim()},e.prototype.renderPhoto=function(e,o){return this.params.renderPhoto?this.params.renderPhoto.call(this,e,o):('\n      <div class="photo-browser-slide swiper-slide" data-swiper-slide-index="'+o+'">\n        <span class="swiper-zoom-container">\n          <img src="'+(e.url?e.url:e)+'">\n        </span>\n      </div>\n    ').trim()},e.prototype.render=function(){var r=this;return r.params.render?r.params.render.call(r,r.params):('\n      <div class="photo-browser photo-browser-'+r.params.theme+'">\n        <div class="view">\n          <div class="page photo-browser-page photo-browser-page-'+r.params.theme+" no-toolbar "+(r.params.navbar?"":"no-navbar")+'" data-name="photo-browser-page">\n            '+(r.params.navbar?r.renderNavbar():"")+"\n            "+(r.params.toolbar?r.renderToolbar():"")+'\n            <div class="photo-browser-captions photo-browser-captions-'+(r.params.captionsTheme||r.params.theme)+'">\n              '+r.params.photos.map(function(e,o){return e.caption?r.renderCaption(e.caption,o):""}).join(" ")+'\n            </div>\n            <div class="photo-browser-swiper-container swiper-container">\n              <div class="photo-browser-swiper-wrapper swiper-wrapper">\n                '+(r.params.virtualSlides?"":r.params.photos.map(function(e,o){return e.html||("string"==typeof e||e instanceof String)&&0<=e.indexOf("<")&&0<=e.indexOf(">")?r.renderObject(e,o):!0===r.params.swiper.lazy||r.params.swiper.lazy&&r.params.swiper.lazy.enabled?r.renderLazyPhoto(e,o):r.renderPhoto(e,o)}).join(" "))+"\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ").trim()},e.prototype.renderStandalone=function(){return this.params.renderStandalone?this.params.renderStandalone.call(this):'<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">'+this.render()+"</div>"},e.prototype.renderPage=function(){return this.params.renderPage?this.params.renderPage.call(this):this.render()},e.prototype.renderPopup=function(){return this.params.renderPopup?this.params.renderPopup.call(this):'<div class="popup photo-browser-popup">'+this.render()+"</div>"},e.prototype.onOpen=function(e,o){var t=this,r=t.app,a=c(o);(a[0].f7PhotoBrowser=t).$el=a,t.el=a[0],t.openedIn=e,t.opened=!0,t.$swiperContainerEl=t.$el.find(".photo-browser-swiper-container"),t.$swiperWrapperEl=t.$el.find(".photo-browser-swiper-wrapper"),t.slides=t.$el.find(".photo-browser-slide"),t.$captionsContainerEl=t.$el.find(".photo-browser-captions"),t.captions=t.$el.find(".photo-browser-caption");var n=p.extend({},t.params.swiper,{initialSlide:t.activeIndex,on:{tap:function(e){t.emit("local::tap",e)},click:function(e){t.params.exposition&&t.expositionToggle(),t.emit("local::click",e)},doubleTap:function(e){t.emit("local::doubleTap",e)},slideChange:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.onSlideChange(this),t.emit.apply(t,["local::slideChange"].concat(e))},transitionStart:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.emit.apply(t,["local::transitionStart"].concat(e))},transitionEnd:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.emit.apply(t,["local::transitionEnd"].concat(e))},slideChangeTransitionStart:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.emit.apply(t,["local::slideChangeTransitionStart"].concat(e))},slideChangeTransitionEnd:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.emit.apply(t,["local::slideChangeTransitionEnd"].concat(e))},lazyImageLoad:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];t.emit.apply(t,["local::lazyImageLoad"].concat(e))},lazyImageReady:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];var r=e[0];c(r).removeClass("photo-browser-slide-lazy"),t.emit.apply(t,["local::lazyImageReady"].concat(e))}}});t.params.swipeToClose&&"page"!==t.params.type&&p.extend(n.on,{touchStart:function(e){t.onTouchStart(e),t.emit("local::touchStart",e)},touchMoveOpposite:function(e){t.onTouchMove(e),t.emit("local::touchMoveOpposite",e)},touchEnd:function(e){t.onTouchEnd(e),t.emit("local::touchEnd",e)}}),t.params.virtualSlides&&p.extend(n,{virtual:{slides:t.params.photos,renderSlide:function(e,o){return e.html||("string"==typeof e||e instanceof String)&&0<=e.indexOf("<")&&0<=e.indexOf(">")?t.renderObject(e,o):!0===t.params.swiper.lazy||t.params.swiper.lazy&&t.params.swiper.lazy.enabled?t.renderLazyPhoto(e,o):t.renderPhoto(e,o)}}}),t.swiper=r.swiper.create(t.$swiperContainerEl,n),0===t.activeIndex&&t.onSlideChange(t.swiper),t.$el&&t.$el.trigger("photobrowser:open"),t.emit("local::open photoBrowserOpen",t)},e.prototype.onOpened=function(){this.$el&&this.$el.trigger("photobrowser:opened"),this.emit("local::opened photoBrowserOpened",this)},e.prototype.onClose=function(){var e=this;e.destroyed||(e.swiper&&e.swiper.destroy&&(e.swiper.destroy(!0,!1),e.swiper=null,delete e.swiper),e.$el&&e.$el.trigger("photobrowser:close"),e.emit("local::close photoBrowserClose",e))},e.prototype.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.$el&&e.$el.trigger("photobrowser:closed"),e.emit("local::closed photoBrowserClosed",e))},e.prototype.openPage=function(){var r=this;if(r.opened)return r;var e=r.renderPage();return r.view.router.navigate({url:r.url,route:{content:e,path:r.url,on:{pageBeforeIn:function(e,o){r.view.$el.addClass("with-photo-browser-page with-photo-browser-page-"+r.params.theme),r.onOpen("page",o.el)},pageAfterIn:function(e,o){r.onOpened("page",o.el)},pageBeforeOut:function(e,o){r.view.$el.removeClass("with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-"+r.params.theme),r.onClose("page",o.el)},pageAfterOut:function(e,o){r.onClosed("page",o.el)}}}}),r},e.prototype.openStandalone=function(){var o=this;if(o.opened)return o;var e={backdrop:!1,content:o.renderStandalone(),on:{popupOpen:function(e){o.onOpen("popup",e.el)},popupOpened:function(e){o.onOpened("popup",e.el)},popupClose:function(e){o.onClose("popup",e.el)},popupClosed:function(e){o.onClosed("popup",e.el)}}};return o.params.routableModals?o.view.router.navigate({url:o.url,route:{path:o.url,popup:e}}):o.modal=o.app.popup.create(e).open(),o},e.prototype.openPopup=function(){var o=this;if(o.opened)return o;var e={content:o.renderPopup(),on:{popupOpen:function(e){o.onOpen("popup",e.el)},popupOpened:function(e){o.onOpened("popup",e.el)},popupClose:function(e){o.onClose("popup",e.el)},popupClosed:function(e){o.onClosed("popup",e.el)}}};return o.params.routableModals?o.view.router.navigate({url:o.url,route:{path:o.url,popup:e}}):o.modal=o.app.popup.create(e).open(),o},e.prototype.expositionEnable=function(){var e=this;return"page"===e.params.type&&e.view.$el.addClass("with-photo-browser-page-exposed"),e.$el&&e.$el.addClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.addClass("photo-browser-captions-exposed"),e.exposed=!0,e},e.prototype.expositionDisable=function(){var e=this;return"page"===e.params.type&&e.view.$el.removeClass("with-photo-browser-page-exposed"),e.$el&&e.$el.removeClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"),e.exposed=!1,e},e.prototype.expositionToggle=function(){var e=this;return"page"===e.params.type&&e.view.$el.toggleClass("with-photo-browser-page-exposed"),e.$el&&e.$el.toggleClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"),e.exposed=!e.exposed,e},e.prototype.open=function(e){var o=this,r=o.params.type;return o.opened?o.swiper&&void 0!==e&&o.swiper.slideTo(parseInt(e,10)):(void 0!==e&&(o.activeIndex=e),"standalone"===r&&o.openStandalone(),"page"===r&&o.openPage(),"popup"===r&&o.openPopup()),o},e.prototype.close=function(){var e=this;return e.opened&&(e.params.routableModals||"page"===e.openedIn?e.view&&e.view.router.back():(e.modal.once("modalClosed",function(){p.nextTick(function(){e.modal.destroy(),delete e.modal})}),e.modal.close())),e},e.prototype.init=function(){},e.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy photoBrowserBeforeDestroy",e),e.$el&&(e.$el.trigger("photobrowser:beforedestroy"),e.$el[0].f7PhotoBrowser=null,delete e.$el[0].f7PhotoBrowser),p.deleteProps(e),e=null},e}(r)),n={name:"photoBrowser",params:{photoBrowser:{photos:[],exposition:!0,expositionHideCaptions:!1,type:"standalone",navbar:!0,toolbar:!0,theme:"light",captionsTheme:void 0,iconsColor:void 0,swipeToClose:!0,backLinkText:"Close",navbarOfText:"of",view:void 0,url:"photos/",routableModals:!0,virtualSlides:!0,renderNavbar:void 0,renderToolbar:void 0,renderCaption:void 0,renderObject:void 0,renderLazyPhoto:void 0,renderPhoto:void 0,renderPage:void 0,renderPopup:void 0,renderStandalone:void 0,swiper:{initialSlide:0,spaceBetween:20,speed:300,loop:!1,preloadImages:!0,navigation:{nextEl:".photo-browser-next",prevEl:".photo-browser-prev"},zoom:{enabled:!0,maxRatio:3,minRatio:1},lazy:{enabled:!0}}}},create:function(){this.photoBrowser=t({defaultSelector:".photo-browser",constructor:a,app:this,domProp:"f7PhotoBrowser"})},static:{PhotoBrowser:a}};if(o){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))