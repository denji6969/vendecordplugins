(function(A,t,f,E,se,y,_,s,I,C,N,oe,ue,T){"use strict";const le=s.findByStoreName("ThemeStore"),de=s.findByProps("colors","meta");s.findByProps("triggerHaptic");const fe=s.findByProps("TextStyleSheet").TextStyleSheet,{View:Ze,Text:z,Pressable:Ke}=E.General;s.findByProps("TableRow");const ge=s.findByProps("ActionSheet")?.ActionSheet??s.find(function(e){return e.render?.name==="ActionSheet"}),he=s.findByProps("openLazy","hideActionSheet"),{openLazy:Re,hideActionSheet:pe}=he,{ActionSheetTitleHeader:ye,ActionSheetCloseButton:Se,ActionSheetContentContainer:Ee}=s.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");s.findByProps("ActionSheetRow")?.ActionSheetRow,s.findByName("Navigator")??s.findByProps("Navigator")?.Navigator,s.findByProps("getRenderCloseButton")?.getRenderCloseButton??s.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,s.findByProps("popModal","pushModal");const Z=s.findByProps("useSearchControls"),G=s.findByProps("useSettingSearchQuery"),Ne=s.findByName("SettingSearchBar");s.findByProps("SvgXml"),s.findByProps("useInMainTabsExperiment","isInMainTabsExperiment"),s.find(function(e){return e?.WebView&&!e.default}).WebView;function Ie(e){return de.meta.resolveSemanticColor(le.theme,e)}function ve(e,n){try{Re(new Promise(function(r){return r({default:e})}),"ActionSheet",n)}catch(r){_.logger.error(r.stack),y.showToast("Got error when opening ActionSheet! Please check debug logs",f.getAssetIDByName("Smal"))}}Object.assign(function(e){let{searchContext:n,controls:r}=e;return t.React.createElement(t.ReactNative.ScrollView,{scrollEnabled:!1},t.React.createElement(Z.default,{searchContext:n,controls:r},t.React.createElement(Ne,null)))},{useAdvancedSearch:function(e){const n=G.useSettingSearchQuery(),r=Z.useSearchControls(e,!1,function(){});return t.React.useEffect(function(){return function(){G.setSettingSearchQuery(""),G.setIsSettingSearchActive(!1)}},[]),[n,r]}});var K;(function(e){function n(i){let{children:c,onPress:a}=i;return t.React.createElement(B,{variant:"text-md/bold",onPress:a},c)}e.Bold=n;function r(i){let{children:c,onPress:a}=i;return t.React.createElement(z,{style:{textDecorationLine:"underline"},onPress:a},c)}e.Underline=r})(K||(K={}));function B(e){let{variant:n,lineClamp:r,color:i,align:c,style:a,onPress:g,getChildren:h,children:R,liveUpdate:p}=e;const[o,u]=t.React.useReducer(function(l){return~l},0);return t.React.useEffect(function(){if(!p)return;const l=new Date().setMilliseconds(1e3);let d,S;return S=setTimeout(function(){u(),d=setInterval(u,1e3)},l-Date.now()),function(){clearTimeout(S),clearInterval(d)}},[]),t.React.createElement(z,{style:[n?fe[n]:{},i?{color:Ie(I.semanticColors[i])}:{},c?{textAlign:c}:{},a??{}],numberOfLines:r,onPress:g},h?.()??R)}function x(e){let{onPress:n,onLongPress:r,icon:i,style:c,destructive:a,color:g}=e;const h=t.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:I.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:I.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:I.semanticColors.TEXT_DANGER}});return t.React.createElement(t.ReactNative.TouchableOpacity,{onPress:n,onLongPress:r},t.React.createElement(t.ReactNative.Image,{style:[typeof c=="string"?c==="header"?h.headerStyleIcon:h.cardStyleIcon:c,a&&h.destructiveIcon,g&&{tintColor:g}].filter(function(R){return!!R}),source:i}))}let L={};function O(){return!Object.keys(L)[0]||!m.pluginCache?.[0]?[]:Object.entries(L).map(function(e){let[n,r]=e;return m.pluginCache?.includes(n)?_.plugins.plugins[n]&&_.plugins.plugins[n].manifest.hash!==r?[n,"update"]:void 0:[n,"new"]}).filter(function(e){return!!e})}function Pe(){m.pluginCache=Object.keys(L)}async function W(){const e=await(await C.safeFetch(H,{cache:"no-store"})).json();L=Object.fromEntries(e.map(function(n){return[`https://vd-plugins.github.io/proxy/${n.vendetta.original}`,n.hash]}))}function Te(){const e=setInterval(W,6e5);return W(),function(){return clearInterval(e)}}const{FormRow:$}=E.Forms,F=t.stylesheet.createThemedStyleSheet({card:{backgroundColor:I.semanticColors.BACKGROUND_SECONDARY,borderRadius:5},header:{padding:0,backgroundColor:I.semanticColors.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"}});function be(e){return t.React.createElement(t.ReactNative.View,{style:[F.card,{marginBottom:10}]},t.React.createElement($,{style:F.header,label:e.headerLabel,leading:e.headerIcon&&t.React.createElement($.Icon,{source:e.headerIcon})}),t.React.createElement($,{label:e.descriptionLabel,trailing:t.React.createElement(t.ReactNative.View,{style:F.actions},e.actions?.map(function(n){let{icon:r,onPress:i,onLongPress:c,destructive:a}=n;return t.React.createElement(x,{icon:r,onPress:i,onLongPress:c,style:"card",destructive:a??!1})}),e.loading&&t.React.createElement(t.ReactNative.ActivityIndicator,{size:"small",style:{height:22,width:22}}))}))}const{View:X}=E.General,Q=t.stylesheet.createThemedStyleSheet({main:{marginRight:16,flexGrow:0},content:{backgroundColor:I.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND,borderRadius:16,marginLeft:8,paddingHorizontal:8}});function q(e){let{text:n,marginLeft:r}=e;return React.createElement(X,{style:[Q.main,r?{marginLeft:16,marginRight:0}:{}]},React.createElement(X,{style:Q.content},React.createElement(B,{variant:"eyebrow",color:"TEXT_NORMAL"},n)))}const{showUserProfile:J}=s.findByProps("showUserProfile"),{fetchProfile:ee}=s.findByProps("fetchProfile"),U=s.findByStoreName("UserStore");function Ae(e){let{userId:n,color:r,loadUsername:i,children:c}=e;const[a,g]=t.React.useState(null);return t.React.useEffect(function(){return!a&&i&&(U.getUser(n)?g(U.getUser(n).username):ee(n).then(function(h){return g(h.user.username)}))},[i]),t.React.createElement(B,{variant:"text-md/bold",color:r??"TEXT_NORMAL",onPress:function(){return U.getUser(n)?J({userId:n}):ee(n).then(function(){return J({userId:n})})}},i?`@${a??"..."}`:c)}function Ce(e){return e.endsWith("/")?e:e+"/"}const D={origin:/^([^/]+)\/(.*)/,multiplePluginGitio:/^(.*?)(?=\.)\.github\.io\/(.*?)(?=\/)\/(.*)/,singlePluginGitio:/^(.*?)(?=\.)\.github\.io\/(.*)/,githubReleases:/^github\.com\/(.*?)(?=\/)\/(.*?)(?=\/)\/releases/},te={"vendetta.nexpid.xyz":function(e){return`https://github.com/nexpid/VendettaPlugins/tree/master/plugins/${e.join("/")}`},"vendetta.sdh.gay":function(e){return`https://github.com/sdhhhhh/vd-repo/tree/master/plugins/${e.join("/")}`},"plugins.obamabot.me":function(e){return`https://github.com/WolfPlugs/${e[0]}/tree/master/${e.slice(1).join("/")}`},"mugman.catvibers.me":function(e){return`https://github.com/mugman174/${e[0]}/tree/master/plugins/${e.slice(1).join("/")}`}};function Be(e){const n=e.match(D.multiplePluginGitio);if(n?.[0])return`https://github.com/${n[1]}/${n[2]}/tree/master/plugins/${n[3]}`;const r=e.match(D.singlePluginGitio)??e.match(D.githubReleases);if(r?.[0])return`https://github.com/${r[1]}/${r[2]}`;const[i,c,a]=e.match(D.origin);if(te[c])return te[c](a.split("/"))}async function we(e){const n=e.enabled;for(let r=0;r<2;r++)n&&N.stopPlugin(e.id,!1),await N.fetchPlugin(e.id),n&&await N.startPlugin(e.id)}const k=Symbol.for("vendetta.storage.emitter"),_e=!!N.plugins[k]&&!!oe.themes[k];function Le(e){const[n,r]=t.React.useState(!!N.plugins[e]),i=N.plugins[k],c=function(){return r(!!N.plugins[e])};return t.React.useEffect(function(){return r(!!N.plugins[e]),i.on("SET",c),i.on("DEL",c),function(){i.off("SET",c),i.off("DEL",c)}}),n}const{View:De}=E.General;function me(e){let{item:n,changes:r}=e;const i=Ce(`https://vd-plugins.github.io/proxy/${n.vendetta.original}`),[c,a]=t.React.useState(!1),g=Le(i),h=r.find(function(o){return o[0]===i}),R=Be(n.vendetta.original),p=[];return R&&p.push({icon:f.getAssetIDByName("img_account_sync_github_white"),onPress:function(){return t.url.openURL(R)},onLongPress:function(){t.clipboard.setString(R),y.showToast("Copied GitHub link",f.getAssetIDByName("toast_copy_link"))}}),t.React.createElement(be,{headerLabel:t.React.createElement(De,{style:{flexDirection:"row"}},h&&t.React.createElement(q,{text:h[1]==="new"?"New":"Upd"}),t.React.createElement(B,{variant:"text-md/semibold",color:"HEADER_PRIMARY"},n.name,n.authors[0]&&" by ",...n.authors.map(function(o,u,l){return t.React.createElement(t.React.Fragment,null,t.React.createElement(Ae,{userId:o.id,color:"TEXT_LINK"},o.name),u!==l.length-1&&", ")}))),headerIcon:f.getAssetIDByName(n.vendetta.icon),descriptionLabel:n.description,actions:c?[]:i.includes("plugin-browser")?p:g?[N.plugins[i]?.manifest.hash!==n.hash&&{icon:f.getAssetIDByName("ic_sync_24px"),onPress:function(){a(!0),we(i).then(function(){return y.showToast(`Successfully updated ${n.name}`,f.getAssetIDByName("ic_sync_24px"))}).catch(function(){return y.showToast(`Failed to update ${n.name}!`,f.getAssetIDByName("Small"))}).finally(function(){return a(!1)})}},{icon:f.getAssetIDByName("ic_message_delete"),destructive:!0,onPress:async function(){a(!0);try{N.removePlugin(i),y.showToast(`Successfully deleted ${n.name}`,f.getAssetIDByName("ic_message_delete"))}catch{y.showToast(`Failed to delete ${n.name}!`,f.getAssetIDByName("Small"))}a(!1)},onLongPress:function(){t.clipboard.setString(n.vendetta.original),y.showToast("Copied unproxied link",f.getAssetIDByName("toast_copy_link"))}},...p].filter(function(o){return!!o}):[{icon:f.getAssetIDByName("ic_download_24px"),onPress:async function(){a(!0),N.installPlugin(i,!0).then(function(){y.showToast(`Successfully installed ${n.name}`,f.getAssetIDByName("toast_image_saved"))}).catch(function(o){return y.showToast(o?.message??`Failed to install ${n.name}!`,f.getAssetIDByName("Small"))}).finally(function(){return a(!1)})},onLongPress:function(){t.clipboard.setString(n.vendetta.original),y.showToast("Copied unproxied link",f.getAssetIDByName("toast_copy_link"))}},...p],loading:c})}const{FormRadioRow:Ge}=E.Forms;function xe(e){let{label:n,value:r,choices:i,update:c}=e;const[a,g]=t.React.useState(r);return c(a),t.React.createElement(ge,null,t.React.createElement(Ee,null,t.React.createElement(ye,{title:n,trailing:t.React.createElement(Se,{onPress:function(){return pe()}})}),i.map(function(h){return t.React.createElement(Ge,{label:h,onPress:function(){return g(h)},selected:a===h})})))}const{View:Oe}=E.General;var M;(function(e){e.DateNewest="Creation date (new to old)",e.DateOldest="Creation date (old to new)",e.NameAZ="Name (A-Z)",e.NameZA="Name (Z-A)"})(M||(M={}));let ne,re;function ie(){const e=t.NavigationNative.useNavigation();if(!_e)return ue.showConfirmationAlert({title:"Can't use",content:"You must reinstall Vendetta first in order for Plugin Browser to function properly",confirmText:"Dismiss",confirmColor:"brand",onConfirm:function(){},isDismissable:!0}),e.goBack(),null;const n=t.React.useRef(O()).current,[r,i]=t.React.useState("Creation date (new to old)"),[c,a]=t.React.useState(null),[g,h]=t.React.useState(""),R=t.React.useRef(i);R.current=i;const p=t.React.useMemo(function(){if(!c)return;let o=c.filter(function(u){return u.name?.toLowerCase().includes(g)||u.authors?.some(function(l){return l.name?.toLowerCase().includes(g)})||u.description?.toLowerCase().includes(g)}).slice();return["Name (A-Z)","Name (Z-A)"].includes(r)&&(o=o.sort(function(u,l){return u.name<l.name?-1:u.name>l.name?1:0})),["Name (Z-A)","Creation date (new to old)"].includes(r)&&o.reverse(),o},[r,c,g]);return t.React.useEffect(Pe,[]),t.React.useEffect(function(){c||C.safeFetch(H,{cache:"no-store"}).then(function(o){return o.json().then(function(u){return a(u)}).catch(function(){return y.showToast("Failed to parse plugins",f.getAssetIDByName("Small"))})}).catch(function(){return y.showToast("Failed to fetch plugins",f.getAssetIDByName("Small"))})},[c]),ne=function(){return c&&a(null)},re=function(){return c&&ve(xe,{label:"Filter",value:r,choices:Object.values(M),update:function(o){return R.current(o)}})},e.addListener("focus",function(){e.setOptions({title:"Plugin Browser",headerRight:function(){return t.React.createElement(Oe,{style:{flexDirection:"row-reverse"}},t.React.createElement(x,{onPress:function(){return ne?.()},icon:f.getAssetIDByName("ic_sync_24px"),style:"header"}),t.React.createElement(x,{onPress:function(){return re?.()},icon:f.getAssetIDByName("ic_filter"),style:"header"}))}})}),c?t.React.createElement(t.ReactNative.FlatList,{ListHeaderComponent:t.React.createElement(E.Search,{style:{marginBottom:10},onChangeText:function(o){return h(o.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:p,renderItem:function(o){let{item:u}=o;return t.React.createElement(me,{item:u,changes:n})},removeClippedSubviews:!0}):t.React.createElement(t.ReactNative.ActivityIndicator,{size:"large",style:{flex:1}})}const{FormRow:V}=E.Forms;function $e(e){let{changes:n}=e;const r=t.NavigationNative.useNavigation();return React.createElement(E.ErrorBoundary,null,React.createElement(V,{label:React.createElement(B,{variant:"text-md/semibold",color:"HEADER_PRIMARY"},"Plugin Browser",n?React.createElement(q,{text:n.toString(),marginLeft:!0}):React.createElement(React.Fragment,null)),leading:React.createElement(V.Icon,{source:f.getAssetIDByName("ic_search_items_24px")}),trailing:V.Arrow,onPress:function(){return r.push("VendettaCustomPage",{render:ie})}}))}const{FormSection:Fe}=E.Forms,Ue=s.findByName("getScreens"),ke=s.findByName("UserSettingsOverviewWrapper",!1),Me=t.stylesheet.createThemedStyleSheet({container:{flex:1,backgroundColor:I.semanticColors.BACKGROUND_MOBILE_PRIMARY}});function Ve(e,n,r){const i=[],c=T.after("default",ke,function(a,g){c();const h=C.findInReactTree(g.props.children,function(R){return R.type&&R.type.name==="UserSettingsOverview"});i.push(T.after("render",h.type.prototype,function(R,p){let{props:{children:o}}=p;const u=[t.i18n.Messages.BILLING_SETTINGS,t.i18n.Messages.PREMIUM_SETTINGS];o=C.findInReactTree(o,function(d){return d.children[1].type===Fe}).children;const l=o.findIndex(function(d){return u.includes(d?.props.label)});e()&&o.splice(l===-1?4:l,0,n({}))}))},!0);if(i.push(c),Ue&&r){const a=`VENDETTA_PLUGIN_${t.lodash.snakeCase(r.key).toUpperCase()}`,g=r.page.render,h=t.React.memo(function(u){let{navigation:l}=u;const d=l.addListener("focus",function(){d(),l.setOptions(C.without(r.page,"noErrorBoundary","render"))});return t.React.createElement(t.ReactNative.View,{style:Me.container},r.page.noErrorBoundary?t.React.createElement(g,null):t.React.createElement(E.ErrorBoundary,null,t.React.createElement(g,null)))}),R={[a]:{type:"route",title:function(){return r.title},icon:r.icon,parent:null,screen:{route:`VendettaPlugin${t.lodash.chain(r.key).camelCase().upperFirst().value()}`,getComponent:function(){return h}}}},p=function(u,l){const d=[...u],S=l?d?.[0]?.sections:d;if(!Array.isArray(S))return S;const v="Vendetta",P=S.find(function(b){return b?.title===v||b?.label===v});return P&&!P?.settings?.includes(a)&&P.settings.push(a),d},o=function(){const u=s.findByProps("useOverviewSettings"),l=s.findByProps("getSettingTitleConfig"),d=s.findByProps("SETTING_RELATIONSHIPS","SETTING_RENDERER_CONFIGS"),S="getSettingSearchListItems",v="getSettingListItems",P=s.findByProps(S),b=P?S:v,ce=P??s.findByProps(v);if(!ce||!u)return!1;i.push(T.after("useOverviewSettings",u,function(Y,w){return p(w)})),i.push(T.after("getSettingTitleConfig",l,function(Y,w){return{...w,[a]:r.title}})),i.push(T.after(b,ce,function(Y,w){let[ze]=Y;return[...ze.includes(a)?[{type:"setting_search_result",ancestorRendererData:R[a],setting:a,title:function(){return r.title},breadcrumbs:["Vendetta"],icon:R[a].icon}]:[],...w]}));const j=d.SETTING_RELATIONSHIPS,Ye=d.SETTING_RENDERER_CONFIGS;return d.SETTING_RELATIONSHIPS={...j,[a]:null},d.SETTING_RENDERER_CONFIGS={...Ye,...R},i.push(function(){d.SETTING_RELATIONSHIPS=j,d.SETTING_RENDERER_CONFIGS=j}),!0};(function(){const u=s.findByProps("SearchableSettingsList"),l=s.findByProps("SETTING_RENDERER_CONFIG"),d=s.findByProps("getSettingListItems");if(!d||!u||!l)return!1;i.push(T.before("type",u.SearchableSettingsList,function(v){return p(v,!0)})),i.push(T.after("getSettingListSearchResultItems",d,function(v,P){for(const b of P)b.setting===a&&(b.breadcrumbs=["Vendetta"])}));const S=l.SETTING_RENDERER_CONFIG;return l.SETTING_RENDERER_CONFIG={...S,...R},i.push(function(){l.SETTING_RENDERER_CONFIG=S}),!0})()||o()}return function(){return i.forEach(function(a){return a()})}}function He(){let e=[];return e.push(Ve(function(){return!0},function(){return React.createElement($e,{changes:O().filter(function(n){return n[1]==="new"}).length})},{key:_.plugin.manifest.name,icon:f.getAssetIDByName("ic_search_items_24px"),get title(){const n=O().filter(function(r){return r[1]==="new"}).length;return`Plugin Browser${n?` (+${n})`:""}`},page:{render:ie}})),e.push(Te()),function(){return e.forEach(function(n){return n()})}}const H="https://vd-plugins.github.io/proxy/plugins-full.json",m=se.storage;let ae;var je={onLoad:function(){return ae=He()},onUnload:function(){return ae?.()}};return A.default=je,A.pluginsURL=H,A.vstorage=m,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components,vendetta.plugin,vendetta.ui.toasts,vendetta,vendetta.metro,vendetta.ui,vendetta.utils,vendetta.plugins,vendetta.themes,vendetta.ui.alerts,vendetta.patcher);
