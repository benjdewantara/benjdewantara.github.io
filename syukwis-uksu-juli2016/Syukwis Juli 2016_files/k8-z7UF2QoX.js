if (self.CavalryLogger) { CavalryLogger.start_js(["gyISq"]); }

__d("ActorSelectorNuxTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};},null);
__d("MActorListPayloadTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_ACTOR_LIST:"composer_actor_list",REQUEST_COMPOSER_ACTOR_LIST:"request_composer_actor_list",REQUEST_UFI_ACTOR_LIST:"request_ufi_actor_list",UFI_ACTOR_LIST:"ufi_actor_list"};},null);
__d("MActorSelectorNuxPayloadTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_NUX_STATUS:"composer_nux_status",COMPOSER_NUX_SEEN:"composer_nux_seen",REQUEST_COMPOSER_NUX_STATUS:"request_composer_nux_status",REQUEST_UFI_NUX_STATUS:"request_ufi_nux_status",UFI_NUX_SEEN:"ufi_nux_seen",UFI_NUX_STATUS:"ufi_nux_status"};},null);
__d("MFeedLocation",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BIRTHDAYS:"birthdays",BOOSTED_POST_PREVIEW:"boosted_post_preview",BUY_AND_SELL:"buy_and_sell",CRISIS_FEED:"crisis_feed",DRAFT_POSTS:"draft_posts",FUNDRAISER_PAGE:"fundraiser_page",GOODWILL_THROWBACK_PERMALINK:"goodwill_throwback_permalink",GOODWILL_THROWBACK_PROMOTION:"goodwill_throwback_promotion",GROUP:"group",GROUP_PENDING_QUEUE:"groups_pending",GROUP_PINNED_QUEUE:"groups_pinned",GROUP_REPORTED_QUEUE:"groups_reported",GROUPS_DISCOVER_FEED:"groups_discover_feed",EVENT:"event",HASHTAG:"hashtag",LIVE:"live",MESSAGE_THREAD:"message_thread",NEWSFEED:"feed",NOTES:"notes",NOTIFICATIONS:"notifications",NO_UFI_NEWSFEED:"no_ufi_newsfeed",PAGE_ACTIVITY_FEED:"page_activity_feed",PAGES:"pages",PAGES_CONTENT_TAB_PREVIEW:"pages_content_tab_preview",PAGES_INSIGHTS_PREVIEW:"pages_insights_preview",PAGES_TAB:"pages_tab",PAGES_TIMELINE:"pages_timeline",PAGES_VISITOR_POSTS:"pages_visitor_posts",PERMALINK:"permalink",PERMALINK_PIVOT:"permalink_pivot",PHOTO_PAGE_POSTS_FEED:"photo_page_posts_feed",PLUGIN:"plugin",PSYM:"psym",SEARCH:"search",SEARCH_EYEWITNESSES:"search_eyewitnesses",SEARCH_KEY_VOICES:"search_key_voices",SEARCH_SOCIAL:"search_social",SEARCH_PUBLISHERS:"search_publishers",SCHEDULED_POSTS:"scheduled_posts",SPACES_FEED:"spaces_feed",SUPPORT_INBOX:"support_inbox",TIMELINE:"timeline",TIMELINE_BREAKUP:"timeline_breakup",TIMELINE_FEED:"timeline_feed",TIMELINE_FRIENDSHIP:"timeline_friendship",TIMELINE_REVIEW:"timeline_review",VIDEO_CHANNEL:"video_channel",YEAR_IN_REVIEW:"year_in_review",WORLDCUP:"worldcup",EVENT_PENDING_QUEUE:"event_pending",OFFERS_WALLET:"offers_wallet",REDSPACE:"redspace",SOCIAL_BALLOT:"social_ballot",SOCIAL_BALLOT_PERMALINK:"social_ballot_permalink"};},null);
__d('Dispatcher_DEPRECATED',['invariant','monitorCodeUse'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j='ID_';function k(){this.$Dispatcher_DEPRECATED1={};this.$Dispatcher_DEPRECATED2=false;this.$Dispatcher_DEPRECATED3={};this.$Dispatcher_DEPRECATED4={};this.$Dispatcher_DEPRECATED5=1;}k.prototype.register=function(l,m){m=this.__genID(m);this.$Dispatcher_DEPRECATED1[m]=l;return m;};k.prototype.unregister=function(l){!this.$Dispatcher_DEPRECATED1[l]?h(0):void 0;delete this.$Dispatcher_DEPRECATED1[l];};k.prototype.waitFor=function(l){!this.$Dispatcher_DEPRECATED2?h(0):void 0;for(var m=0;m<l.length;m++){var n=l[m];if(this.$Dispatcher_DEPRECATED4[n]){!this.$Dispatcher_DEPRECATED3[n]?h(0):void 0;continue;}!this.$Dispatcher_DEPRECATED1[n]?h(0):void 0;this.$Dispatcher_DEPRECATED7(n);}};k.prototype.dispatch=function(l){!!this.$Dispatcher_DEPRECATED2?h(0):void 0;this.$Dispatcher_DEPRECATED8(l);try{for(var m in this.$Dispatcher_DEPRECATED1){if(this.$Dispatcher_DEPRECATED4[m])continue;this.$Dispatcher_DEPRECATED7(m);}}finally{this.$Dispatcher_DEPRECATED9();}};k.prototype.isDispatching=function(){return this.$Dispatcher_DEPRECATED2;};k.prototype.$Dispatcher_DEPRECATED7=function(l){this.$Dispatcher_DEPRECATED4[l]=true;this.__invokeCallback(l,this.$Dispatcher_DEPRECATED1[l],this.$Dispatcher_DEPRECATED6);this.$Dispatcher_DEPRECATED3[l]=true;};k.prototype.__invokeCallback=function(l,m,n){m(n);};k.prototype.$Dispatcher_DEPRECATED8=function(l){for(var m in this.$Dispatcher_DEPRECATED1){this.$Dispatcher_DEPRECATED4[m]=false;this.$Dispatcher_DEPRECATED3[m]=false;}this.$Dispatcher_DEPRECATED6=l;this.$Dispatcher_DEPRECATED2=true;};k.prototype.$Dispatcher_DEPRECATED9=function(){delete this.$Dispatcher_DEPRECATED6;this.$Dispatcher_DEPRECATED2=false;};k.prototype.__genID=function(l){l=l||j+this.$Dispatcher_DEPRECATED5++;while(this.$Dispatcher_DEPRECATED1[l])l+=this.$Dispatcher_DEPRECATED5++;return l;};f.exports=k;},null);
__d('ReactDispatcher_DEPRECATED',['Dispatcher_DEPRECATED','ReactDOM'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,h);k=j&&j.prototype;l.prototype.dispatch=function(m){i.unstable_batchedUpdates(function(){k.dispatch.call(this,m);}.bind(this));};function l(){j.apply(this,arguments);}f.exports=l;},null);
__d('MActorListDispatcher',['ReactDispatcher_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=new h();},null);
__d("XActorListController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_list\/",{actor_list_id:{type:"Int",required:true},payload_type:{type:"Enum",required:true,enumType:1}});},null);
__d('MActorListStore',['EventEmitter','MActorListDispatcher','MActorListPayloadTypes','MRequest','XActorListController'],function a(b,c,d,e,f,g,h,i,j,k,l){var m,n;if(c.__markCompiled)c.__markCompiled();var o={},p={};m=babelHelpers.inherits(q,h);n=m&&m.prototype;function q(){'use strict';n.constructor.call(this);this.dispatchToken=i.register(function(r){switch(r.type){case j.REQUEST_COMPOSER_ACTOR_LIST:case j.REQUEST_UFI_ACTOR_LIST:this.$MActorListStore1(r.data.id,r.type);break;case j.COMPOSER_ACTOR_LIST:case j.UFI_ACTOR_LIST:Object.assign(o,r.data.actors);p[r.data.id]=Object.keys(r.data.actors);this.emit('change');break;}}.bind(this));}q.prototype.$MActorListStore1=function(r,s){'use strict';var t=l.getURIBuilder().setInt('actor_list_id',r).setEnum('payload_type',s).getURI();new k(t).send();};q.prototype.getActorData=function(r){'use strict';var s=o[r];return s?s:null;};q.prototype.getActorList=function(r){'use strict';var s=p[r];return s?s.slice():null;};f.exports=new q();},null);
__d('Layout.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();k=babelHelpers.inherits(m,h.Component);l=k&&k.prototype;m.prototype.render=function(){'use strict';var n=[],o=[],p=null;h.Children.forEach(this.props.children,function(r,s){if(!r)return;var t=p!==null,u=h.cloneElement(r,{className:j(r.props.className,t?"_4bl8":''),key:s});if(p===null){if(r.type===m.FillColumn){p=u;}else n.push(u);}else o.push(u);});o.reverse();var q=n.concat(o);if(p)q.push(p);return (h.createElement('div',babelHelpers['extends']({},this.props,{className:j(this.props.className,'clearfix')}),q));};function m(){'use strict';k.apply(this,arguments);}m.Column=function(){var n,o;n=babelHelpers.inherits(p,h.Component);o=n&&n.prototype;p.prototype.render=function(){'use strict';return (h.createElement('div',babelHelpers['extends']({},this.props,{className:j(this.props.className,"_4bl7")})));};function p(){'use strict';n.apply(this,arguments);}return p;}();m.FillColumn=function(){var n,o;n=babelHelpers.inherits(p,h.Component);o=n&&n.prototype;p.prototype.render=function(){'use strict';return (h.createElement('div',babelHelpers['extends']({},this.props,{className:j(this.props.className,"_4bl9")})));};function p(){'use strict';n.apply(this,arguments);}return p;}();f.exports=m;},null);
__d('MActorSelectorFlyout.react',['MFlyout','MLayerDestroyOnHide','MLayerHideOnBlur','ReactDOM','ReactLayer'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=l.createClass({createLayer:function(n){var o=this.props,p=o.shown,q=o.className,r=o.contextRef,s=o.isNux,t=babelHelpers.objectWithoutProperties(o,['shown','className','contextRef','isNux']),u=q?q.split(' '):[];u.push('accelerate');var v=s?[i]:[i,j],w=new h(babelHelpers['extends']({},t,{addedBehaviors:v,classNames:u,context:k.findDOMNode(r()),margin:'none',nubalign:'center',offsetY:0,width:'100%'}),n);w.conditionShow(p);return w;},receiveProps:function(n,o){this.updateBehaviors(o.behaviors,n.behaviors);if(this.layer)this.layer.conditionShow(n.shown);}});f.exports=m;},null);
__d('MActorSelector.react',['CurrentUser','Image.react','Layout.react','MActorListDispatcher','MActorListStore','MActorSelectorFlyout.react','MXUISpinner.react','React','ReactLayeredComponentMixin_DEPRECATED','Stratcom','SubscriptionsHandler','cx','fbglyph','fbt','invariant','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=j.Column,y=j.FillColumn,z=o.PropTypes,aa=20,ba=32,ca=o.createClass({displayName:'MActorSelector',mixins:[p],propTypes:{actorListID:z.string.isRequired,actorListRequestPayloadType:z.string.isRequired,coverEnabled:z.bool.isRequired,flyoutTitle:z.node,nuxBody:z.node,onChange:z.func.isRequired,onCompleteNux:z.func,selectedActorID:z.string.isRequired,selectedActorProfilePicURI:z.string.isRequired,showLoadingIndicator:z.bool.isRequired,showNux:z.bool.isRequired},getInitialState:function(){var da=l.getActorList(this.props.actorListID);return {actorListLoaded:da!=null,hasBeenClicked:false,showFlyout:false};},render:function(){var da=null,ea=null;if(this._isCovered()){ea=w('/images/pages/voice/flag.png');}else{da=o.createElement(i,{className:"_jvo _3-99",src:w("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/triangle-down_16_bluegray-40.png")});ea=this.props.selectedActorProfilePicURI;}var fa=null;if(this.props.showLoadingIndicator)fa=o.createElement(n,{className:"_1-gi"});return (o.createElement('div',{className:"_2g0e",'data-sigil':'touchable',onMouseDown:function(){this._ignoreNextClick=false;}.bind(this),onTouchStart:function(){this._ignoreNextClick=false;}.bind(this),onClick:function(){if(this._ignoreNextClick){this._ignoreNextClick=false;return;}if(this.props.showNux)this.props.onCompleteNux&&this.props.onCompleteNux();this.setState({hasBeenClicked:true,showFlyout:!this.state.showFlyout});}.bind(this)},fa,o.createElement(i,{className:"_1e_c",height:aa,ref:'profilePic',src:ea,width:aa}),da));},renderLayers:function(){if(!this.state.showFlyout){if(this.props.showNux)return (o.createElement(m,{isNux:true,contextRef:function(){return this.refs.profilePic;}.bind(this),position:'above',shown:this.props.showNux},o.createElement('div',{className:"_3nv2",'data-sigil':'touchable',onClick:function(){this.props.onCompleteNux&&this.props.onCompleteNux();}.bind(this)},o.createElement(i,{src:w("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/cross_16_bluegray-10.png")})),o.createElement('div',{className:"_2ph_"},this.props.nuxBody,o.createElement('div',{className:"_2pie"},o.createElement('a',{href:this.props.settingsURI},u._("Post Attribution Settings"))))));return null;}var da=null;if(this.state.actorListLoaded){var ea=l.getActorList(this.props.actorListID);!Array.isArray(ea)?v(0):void 0;var fa=[];ea.map(function(ha){var ia=l.getActorData(ha);!ia?v(0):void 0;var ja=null;if(ha===this.props.selectedActorID)ja=o.createElement(x,null,o.createElement('div',{className:"_2pi3"},o.createElement(i,{src:w("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/checkmark_16_accent-blue.png")})));fa.push(o.createElement('li',{className:"_ru0",'data-sigil':'touchable',key:ha,onClick:function(){if(ha!==this.props.selectedActorID)this.props.onChange(ha);}.bind(this)},o.createElement(j,null,o.createElement(x,null,o.createElement(i,{className:"_1e_c",height:ba,src:ia.profilePicURI,width:ba})),o.createElement(y,null,o.createElement('div',{className:"_3-9a _52jh"},ia.name)),ja)));}.bind(this));var ga=null;if(this.props.flyoutTitle)ga=o.createElement('li',{className:"_ru0 _52j9",key:'title'},this.props.flyoutTitle);da=o.createElement('ul',null,ga,fa);}else da=o.createElement('div',{className:"_ru1"},o.createElement(n,{size:'large'}));return (o.createElement(m,{contextRef:function(){return this.refs.profilePic;}.bind(this),key:'mActorSelectorFlyout_'+this.props.actorListID+'_'+this.props.selectedActorID,onToggle:function(ha){if(!ha){this._ignoreNextClick=true;this.setState({showFlyout:ha});}}.bind(this),position:'below',shown:true},da));},_subscriptionsHandler:new r(),_ignoreNextClick:false,componentDidMount:function(){this._subscriptionsHandler.addSubscriptions(l.addListener('change',function(){var da=l.getActorList(this.props.actorListID);if(da&&!this.state.actorListLoaded)this.setState({actorListLoaded:true});}.bind(this)),q.listen('MActorSelector-close',null,function(){this.setState({showFlyout:false});}.bind(this)));},componentDidUpdate:function(da){if(this.state.showFlyout){var ea=l.getActorList(this.props.actorListID);if(ea===null)k.dispatch({data:{id:this.props.actorListID},type:this.props.actorListRequestPayloadType});}if(this.props.selectedActorProfilePicURI!==da.selectedActorProfilePicURI)this.setState({showFlyout:false});},componentWillUnmount:function(){this._subscriptionsHandler.release();},_isCovered:function(){return (this.props.coverEnabled&&this.props.selectedActorID===h.getID()&&!this.state.hasBeenClicked);}});f.exports=ca;},null);
__d('MActorSelectorNuxDispatcher',['ReactDispatcher_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=new h();},null);
__d("XActorSelectorNuxSeenWriteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});},null);
__d("XActorSelectorNuxStatusController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_selector\/nux\/status\/",{actor_selector_id:{type:"String",required:true},payload_type:{type:"Enum",required:true,enumType:1}});},null);
__d('MActorSelectorNuxStore',['ActorSelectorNuxTypes','EventEmitter','MActorSelectorNuxDispatcher','MActorSelectorNuxPayloadTypes','MRequest','XActorSelectorNuxStatusController','XActorSelectorNuxSeenWriteController','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p,q;if(c.__markCompiled)c.__markCompiled();var r={},s={},t=null,u=false,v=false;p=babelHelpers.inherits(w,i);q=p&&p.prototype;function w(){'use strict';q.constructor.call(this);this.dispatchToken=j.register(function(x){switch(x.type){case k.COMPOSER_NUX_SEEN:this.$MActorSelectorNuxStore1(x.type);u=true;this.emit('change');break;case k.UFI_NUX_SEEN:this.$MActorSelectorNuxStore1(x.type);v=true;this.emit('change');break;case k.COMPOSER_NUX_STATUS:r[x.data.actorSelectorID]=x.data.isEnabled;this.emit('change');break;case k.UFI_NUX_STATUS:s[x.data.actorSelectorID]=x.data.isEnabled;this.emit('change');break;case k.REQUEST_COMPOSER_NUX_STATUS:this.$MActorSelectorNuxStore2(x.type,x.data.actorSelectorID);break;case k.REQUEST_UFI_NUX_STATUS:if(t===null)t=x.data.actorSelectorID;this.$MActorSelectorNuxStore2(x.type,x.data.actorSelectorID);break;}}.bind(this));}w.prototype.canShowComposerNux=function(x){'use strict';if(u)return false;return r[x]||false;};w.prototype.canShowUFINux=function(x){'use strict';if(v)return false;if(x!==t)return false;return s[x]||false;};w.prototype.getUFIActorSelectorIDToShowNux=function(){'use strict';return t;};w.prototype.$MActorSelectorNuxStore1=function(x){'use strict';var y=null;switch(x){case k.COMPOSER_NUX_SEEN:y=h.M_COMPOSER;break;case k.UFI_NUX_SEEN:y=h.M_UFI;break;default:o(0);}var z=n.getURIBuilder().setEnum('nux_type',y).getURI();new l(z).send();};w.prototype.$MActorSelectorNuxStore2=function(x,y){'use strict';var z=m.getURIBuilder().setString('actor_selector_id',y).setEnum('payload_type',x).getURI();new l(z).send();};f.exports=new w();},null);
__d("XFeedUFICommentHistoryController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/ufi\/{comment_token}\/history\/",{comment_token:{type:"String",required:true},replace_id:{type:"String",required:true}});},null);
__d("XFeedUFICommentsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/ufi\/",{fs:{type:"Int"},feedback_target:{type:"String",required:true},focus_composer:{type:"Bool",defaultValue:false},replace_id:{type:"String",required:true},share_id:{type:"String"},link_data:{type:"String"},action_source:{type:"Int"},comment_id:{type:"Int"},reply_comment_id:{type:"Int"}});},null);
__d("XFeedUFILikesController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/ufi\/likes\/",{feedback_target:{type:"String",required:true},replace_id:{type:"String",required:true},link_data:{type:"String"}});},null);
__d("XFeedUFIReactionsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/ufi\/reactions\/",{feedback_target:{type:"String",required:true},replace_id:{type:"String",required:true},link_data:{type:"String"}});},null);
__d('MFeedUFI',['$','ActorURI','CSS','MLegacyDataStore','DOM','MParent','MJSEnvironment','MRequest','MViewport','Stratcom','Vector','XFeedUFICommentsController','XFeedUFICommentHistoryController','XFeedUFILikesController','XFeedUFIReactionsController','cx','ge','getActiveElement','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa='feed-ufi',ba='replies-see-more',ca='m-inline-reply-composer',da={COMMENTS:'comments',LIKES:'likes',REACTIONS:'reactions',HISTORY:'history',NONE:''},ea="_1vcf",fa="_53xw",ga='preview_rid',ha='comment_id',ia,ja,ka,la,ma,na,oa,pa,qa,ra=null,sa=null,ta=null;function ua(){if(ta){j.removeClass(ta,ea);ta=null;}}function va(nc){ua();if(nc){j.addClass(nc,ea);ta=nc;}}var wa=null;function xa(){if(wa){j.removeClass(wa,fa);wa=null;}}function ya(nc){xa();if(nc){j.addClass(nc,fa);wa=nc;}}function za(){if(na)return;oa=[q.listen('click',[aa,'composer-submit'],bc),q.listen('click','like',yb),q.listen('focus',[aa,'textarea'],vb),q.listen('multi-photos-change',null,cc),q.listen('MCommentEdit:showcomposer',null,dc),q.listen('MUFICommentReplyLink:show-inline-composer',null,ec),q.listen('MStickerSelector:show-sticker-selector',null,fc),q.listen('m:page:unload',null,gb)];if(n.IS_APPLE_WEBKIT_IOS)oa.push(q.listen('focus',[aa,'editCommentTextArea'],xb));na=true;}function ab(){if(!ma)return;l.find(ma,'*','textarea').blur();}function bb(){if(!ma)return;l.find(ma,'*','textarea').focus();}function cb(){if(!ma)return;var nc=l.find(ma,'*','textarea');if(y()===nc)p.scrollTo(0,r.getPos(nc).y+nc.offsetHeight-p.getScreenHeight());}function db(nc){if(!nc)return;var oc=eb(),pc=nc.offsetTop,qc=nc.offsetHeight,rc=pc+qc,sc=oc.getScrollTop(),tc=oc.getScrollHeight(),uc=sc+tc;if(pc<sc||rc>uc)if(pc<sc||qc>tc){ic(Math.max(0,pc));}else ic(Math.max(0,sc+(rc-uc)));}function eb(){return k.get(la).scrollArea;}function fb(){if(!qa)qa=l.scry(document,'div',aa)[0];return qa;}function gb(){while(oa.length)oa.pop().remove();hb();mb();ua();ia=null;ja=null;ka=null;qa=null;na=false;}function hb(){if(!ra)return;while(ra.length)ra.pop().remove();ra=null;}function ib(nc,oc,pc,qc){var rc=qc||{},sc=rc.parent_id,tc=rc.preload_reply_composer_uri_val,uc=rc.highlighted_preload_composer_input_id;ua();xa();lb(pc,sc,uc);var vc=lc(nc);jc(false);if(vc===ia){if(oc)bb();kc(da.COMMENTS);q.invoke('m:feed-ufi-flyout:comments-displayed');return;}ia=vc;kc(da.NONE);var wc=l.find(fb(),'div','feed-ufi-comments').id,xc=s.getURIBuilder().setString('feedback_target',vc).setString('replace_id',wc).setBool('focus_composer',!!oc),yc=k.get(nc).feedback_source;if(yc)xc.setInt('fs',yc);var zc=k.get(nc).share_id;if(zc)xc.setString('share_id',zc.toString());var ad=k.get(nc).action_source;if(ad===undefined)ad=20;var bd=mc(nc);if(bd)xc.setString('link_data',bd);xc=xc.getURI();if(tc)xc.addQueryData(ga,tc);if(uc)xc.addQueryData(ha,sc||pc);var cd=k.get(nc).actor_id;if(cd)xc=i.create(xc,cd);pa=new o(xc.toString());pa.listen('finally',function(){pa=null;});pa.send();}function jb(nc){var oc=x(nc+'');if(oc&&la&&la.contains(oc)){ic(oc.offsetTop);return oc;}return null;}function kb(nc){var oc=nc?x(nc+''):null;if(oc&&la&&la.contains(oc)){var pc=m.bySigil(oc,ca);if(pc)return pc;}return null;}function lb(nc,oc,pc){mb();if(nc)sa=q.listen('m:feed-ufi-flyout:comments-displayed',null,function(){setTimeout(function(){var qc=!!jb(nc);if(!qc&&oc){var rc=jb(oc),sc=rc&&l.scry(rc,'*',ba)[0];if(sc)va(sc);}var tc=kb(pc);if(tc)ya(tc);});mb();});}function mb(){if(sa){sa.remove();sa=null;}}function nb(nc){var oc=lc(nc);jc(true);if(oc===ja){kc(da.LIKES);return;}ja=oc;kc(da.NONE);var pc=l.find(fb(),'div','feed-ufi-likes').id,qc=u.getURIBuilder().setString('feedback_target',oc).setString('replace_id',pc).getURI();pa=new o(qc.toString());pa.listen('finally',function(){pa=null;});pa.send();}function ob(nc,oc,pc){var qc=lc(nc);jc(!oc);q.invoke('m:feed-ufi-flyout:reactions-displayed');if(qc===ka&&!pc){kc(da.REACTIONS);return;}ka=qc;kc(da.NONE);q.invoke('m:feed-ufi-flyout:cache-reset');var rc=l.find(fb(),'div','feed-ufi-reactions').id,sc=v.getURIBuilder().setString('feedback_target',qc).setString('replace_id',rc).getURI();pa=new o(sc.toString());pa.listen('finally',function(){pa=null;});pa.send();}function pb(nc){jc(true);kc(da.NONE);var oc=l.find(fb(),'div','feed-ufi-comment-history').id,pc=t.getURIBuilder().setString('comment_token',nc).setString('replace_id',oc).getURI();pa=new o(pc.toString());pa.listen('finally',function(){pa=null;});pa.send();}function qb(){kc(da.HISTORY);}function rb(){if(!pa)return;ia=null;ja=null;ka=null;pa.abort();pa=null;}function sb(){ia=null;ja=null;ka=null;}function tb(nc){var oc=lc(nc),pc=oc!==ia&&oc!==ka;kc(pc?da.NONE:da.COMMENTS);if(pc)q.invoke('m:feed-ufi-flyout:reset',null,{target_id:oc});}function ub(nc,oc){kc(da.COMMENTS);la=nc;ma=oc;q.invoke('m:feed-ufi-flyout:comments-displayed');}function vb(){wb();}function wb(){q.invoke('click','edit-link');}function xb(nc){if(ra)return;var oc=nc.getTarget();ra=[q.listen('MScrollArea:scrollend',null,function(){var pc=oc.selectionStart,qc=oc.selectionEnd;oc.setSelectionRange(Math.abs(pc-1),Math.abs(qc-1));oc.setSelectionRange(pc,qc);}),q.listen('blur',[aa,'editCommentTextArea'],function(){hb();})];}function yb(){ja=null;}function zb(nc){kc(da.LIKES);}function ac(nc){kc(da.REACTIONS);}function bc(event){var nc=event.getNode(ca);if(nc)return;var oc=fb();z(function(){var pc=l.find(oc,'div','feed-ufi-composer-placeholder');ic(pc.offsetTop);},0);j.conditionClass(l.find(oc,'div','feed-ufi-comments'),"_5jc2",true);}function cc(){if(!ma)return;var nc=fb();if(nc)j.conditionClass(fb(),"_5rpd",l.scry(ma,'input','m-multi-photos-photo').length);}function dc(nc){ic(nc.getData().composer.offsetTop);}function ec(nc){wb();var oc=nc.getData(),pc=oc.composerRoot;if(pc){db(pc);xa();setTimeout(function(){ya(pc);},0);}}function fc(nc){var oc=nc.getData(),pc=oc.selectorNode;db(pc);}function gc(nc){q.invoke('m:feed-ufi-flyout:comment-change');ic(h(nc).offsetTop);}function hc(){q.invoke('m:feed-ufi-flyout:comment-change');var nc=fb();if(l.scry(nc,'div','comment').length){eb().reflow();}else j.conditionClass(l.find(nc,'div','feed-ufi-comments'),"_5jc2",false);}function ic(nc){if(!la)return;var oc=eb();oc.reflow();z(function(){var pc=oc.getMaxScrollTop();if(nc!==undefined)pc=Math.min(nc,pc);oc.scrollTo(0,pc);},100);}function jc(nc){var oc=fb();if(oc)j.conditionClass(oc,"_5sd3",nc);}function kc(nc){var oc=fb();if(oc){j.conditionClass(oc,"_5m_y",nc==da.COMMENTS);j.conditionClass(oc,"_5m_z",nc==da.LIKES);j.conditionClass(oc,"_3b5-",nc==da.REACTIONS);j.conditionClass(oc,"_5ugy",nc==da.HISTORY);}}function lc(nc){return k.get(nc).feedback_target.toString();}function mc(nc){var oc=m.bySigil(nc,'story-div');if(!oc)return;var pc=k.get(oc).linkdata;if(pc)return pc.toString();return null;}g.blur=ab;g.cancel=rb;g.clearCache=sb;g.focus=bb;g.getRoot=fb;g.init=za;g.loadComments=ib;g.loadLikes=nb;g.loadReactions=ob;g.loadCommentHistory=pb;g.onCommentHistoryLoad=qb;g.onCommentAdded=gc;g.onCommentRemoved=hc;g.onCommentsLoad=ub;g.onLikesLoad=zb;g.onReactionsLoad=ac;g.reset=tb;g.scrollTo=cb;},null);
__d('onViewportChanged',['EventListener','emptyFunction','getViewportDimensions','requestAnimationFrame'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=[],m=false,n=null,o=void 0,p=void 0;function q(){var ba=j.withoutScrollbars();return {top:0,bottom:ba.height,left:0,right:ba.width};}function r(ba,ca){var da={transform:ca||i.thatReturnsArgument,callback:ba,needsUpdate:true};l.push(da);y();t();return {remove:s.bind(null,da),scheduleCheck:w.bind(null,da)};}function s(ba){var ca=l.indexOf(ba);if(ca!==-1){l.splice(ca,1);if(l.length===0){u();n=null;}}}function t(){if(!p){p=h.listen(window,'scroll',x);o=h.listen(window,'resize',v);}}function u(){if(p){p.remove();o.remove();p=o=null;}}function v(){n=null;x();}function w(ba){ba.needsUpdate=true;y();}function x(){l.map(function(ba){return ba.needsUpdate=true;});y();}function y(){if(!m){m=true;k(function(){m=false;aa();});}}function z(ba){if(ba.needsUpdate){ba.needsUpdate=false;return true;}return false;}function aa(){if(!n)n=q();var ba=l.filter(z),ca=ba.map(function(da){return da.transform.call(null,n);});ba.forEach(function(da,ea){return da.callback.call(null,ca[ea]);});}f.exports=r;},null);
__d('onRectIsWithinViewport',['onViewportChanged'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){return !(k.bottom<l.top||k.top>l.bottom||k.right<l.left||k.left>l.right);}function j(k,l){var m=void 0;function n(p){var q=k();return !!q&&i(q,p);}function o(p){if(m!==p){m=p;l(p);}}return h(o,n);}f.exports=j;},null);
__d('OnVisible.react',['React','ReactDOM','getElementRect','onRectIsWithinViewport'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'OnVisible',propTypes:{onVisible:l.func,onHidden:l.func,buffer:l.number},componentDidMount:function(){this._createListener();},componentDidUpdate:function(){this._createListener();},componentWillUnmount:function(){this._removeListener();},reset:function(){this._removeListener();this._createListener();},check:function(){if(this._listener)this._listener.scheduleCheck();},_measureElementRect:function(){if(!this.isMounted())return null;var n=this.props.buffer||0,o=j(i.findDOMNode(this));o.left-=n;o.right+=n;o.top-=n;o.bottom+=n;return o;},_createListener:function(){var n=i.findDOMNode(this);if(this._listener&&n!==this._element)this._removeListener();if(!this._listener){this._element=n;this._listener=k(this._measureElementRect,function(o){var p=o?this.props.onVisible:this.props.onHidden;p&&p();}.bind(this));}},_removeListener:function(){if(this._listener){this._listener.remove();this._listener=null;}},render:function(){return h.Children.only(this.props.children);}});f.exports=m;},null);
__d("XPagesManagerPostAttributionSettingsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{page_token}\/settings\/post_attribution\/",{page_token:{type:"String",required:true},business_id:{type:"Int"}});},null);
__d("XUFIActorChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ufi\/actor\/change\/",{});},null);
__d('MUFIActorSelector.react',['ActorURI','MLegacyDataStore','MActorListPayloadTypes','MActorListStore','MActorSelector.react','MActorSelectorNuxDispatcher','MActorSelectorNuxPayloadTypes','MActorSelectorNuxStore','MFeedLocation','MFeedUFI','MParent','MRequest','OnVisible.react','React','ReactDOM','ReactComponentWithPureRenderMixin','SubscriptionsHandler','XPagesManagerPostAttributionSettingsController','XUFIActorChangeController','fbt','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();var ca=u.PropTypes,da=u.createClass({displayName:'MUFIActorSelector',mixins:[w],propTypes:{feedbackTargetID:ca.string.isRequired,location:ca.string.isRequired,initialSelectedActorID:ca.string.isRequired,initialSelectedActorProfilePicURI:ca.string.isRequired,settingsURI:ca.string},getInitialState:function(){return {isVisible:false,selectedActorID:this.props.initialSelectedActorID,selectedActorProfilePicURI:this.props.initialSelectedActorProfilePicURI,showLoadingIndicator:false,showNux:false};},render:function(){return (u.createElement(t,{onVisible:function(){return this.setState({isVisible:true});}.bind(this),onHidden:function(){return this.setState({isVisible:false});}.bind(this)},u.createElement(l,{actorListID:this.props.feedbackTargetID,actorListRequestPayloadType:j.REQUEST_UFI_ACTOR_LIST,coverEnabled:false,flyoutTitle:this._getFlyoutTitle(),nuxBody:this._getNuxBody(),onChange:this._onChange,onCompleteNux:this._onCompleteNux,selectedActorID:this.state.selectedActorID,selectedActorProfilePicURI:this.state.selectedActorProfilePicURI,settingsURI:this._getSettingsURI(),showLoadingIndicator:this.state.showLoadingIndicator,showNux:this.state.isVisible&&this.state.showNux})));},_subscriptionsHandler:new x(),componentDidMount:function(){this._subscriptionsHandler.addSubscriptions(o.addListener('change',function(){var ea=o.canShowUFINux(this.props.feedbackTargetID);if(!this.state.showNux&&ea){this.setState({showNux:true});}else if(this.state.showNux&&!ea)this.setState({showNux:false});}.bind(this)));if(this.props.location===p.PAGES_TIMELINE)m.dispatch({data:{actorSelectorID:this.props.feedbackTargetID},type:n.REQUEST_UFI_NUX_STATUS});},componentWillUnmount:function(){this._subscriptionsHandler.release();},_getFlyoutTitle:function(){return aa._("Liking and commenting as:");},_onChange:function(ea){this.setState({selectedActorID:ea,showLoadingIndicator:true});var fa=h.create(z.getURIBuilder().getURI(),ea),ga=new s(fa).setMethod('POST'),ha={from_actor_id:this.state.selectedActorID,ft_ent_identifier:this.props.feedbackTargetID,location:this.props.location};ga.setData(ha);ga.listen('done',this._createActorChangeSuccessHandler(ea));ga.listen('error',this._createActorChangeErrorHandler());ga.send();var ia=r.bySigil(v.findDOMNode(this),'feed-ufi-metadata');if(ia){var ja=k.getActorData(ea);!ja?ba(0):void 0;i.set(ia,{actor_id:ea,actor_name:ja.name});}q.clearCache();},_createActorChangeSuccessHandler:function(ea){return function(){var fa=k.getActorData(ea);!fa?ba(0):void 0;this.setState({selectedActorID:ea,selectedActorProfilePicURI:fa.profilePicURI,showLoadingIndicator:false});}.bind(this);},_createActorChangeErrorHandler:function(){var ea=this.state.selectedActorID,fa=this.state.selectedActorProfilePicURI;return function(){this.setState({selectedActorID:ea,selectedActorProfilePicURI:fa,showLoadingIndicator:false});}.bind(this);},_getNuxBody:function(){return aa._("Like, comment or share as yourself or as one of the Pages you manage.");},_getSettingsURI:function(){return y.getURIBuilder().setString('page_token',this.props.feedbackTargetOwnerID).getURI();},_onCompleteNux:function(){m.dispatch({type:n.UFI_NUX_SEEN});}});f.exports=da;},null);