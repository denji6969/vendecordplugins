(function(e,s,i,n,o,u){"use strict";const{ScrollView:p,Text:f,TextInput:g,Platform:m}=o.ReactNative,{OS:h}=m,y=n.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default;function R(){const t=JSON.stringify(e.message,null,4);return React.createElement(React.Fragment,null,React.createElement(p,{style:{flex:1,marginHorizontal:13,marginVertical:10}},React.createElement(y,{text:"Copy Raw Data",color:"brand",size:"small",onPress:function(){o.clipboard.setString(t),u.showToast("Copied data to clipboard",i.getAssetIDByName("toast_copy_link"))}}),h=="ios"?React.createElement(g,{style:{fontFamily:o.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:"#282b30",color:"white",marginTop:10,borderRadius:3,padding:10},onChange:function(){},multiline:!0,value:t}):React.createElement(f,{selectable:!0,style:{fontFamily:o.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:"#282b30",color:"white",marginTop:10,borderRadius:3,padding:10}},t)))}e.message=void 0;const r=n.findByProps("hideActionSheet"),c=n.findByProps("push","pushLazy","pop"),B=n.findByProps("getRenderCloseButton"),{default:b,getRenderCloseButton:S}=B,w=s.before("openLazy",r,function(t){const[E,P,k]=t;P=="MessageLongPressActionSheet"&&E.then(function(v){const L=s.after("default",v,function(A,l){const[d,a]=l.props?.children?.props?.children?.props?.children;if(d?e.message=d.props.message:e.message=k.message,a){const z=a.findIndex(function(_){return _.props.message=="Copy Message Link"}),D=a[z].type,O=function(){return React.createElement(b,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:S(function(){return c.pop()}),render:R}}})};l.props.children.props.children.props.children[1]=[...a,React.createElement(D,{key:-1,message:"View Raw",iconSource:i.getAssetIDByName("ic_chat_bubble_16px"),onPressRow:function(){r.hideActionSheet(),c.push(O)}})]}L()})})}),C=function(){return w()};return e.onUnload=C,e})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.toasts);
