(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(t,e,o){"use strict";e.a={methods:{footer:function(){$("#mailContent").height()<$(window).height()?this.$store.commit("changeFooterFixed",!0):this.$store.commit("changeFooterFixed",!1)}}}},157:function(t,e,o){"use strict";var n=o(11),r=o(159),c=o.n(r);c.a.interceptors.response.use(function(t){return t.data?t.data:{}},function(t){return Promise.reject(t)});var l=c.a;o.d(e,"f",function(){return f}),o.d(e,"g",function(){return v}),o.d(e,"d",function(){return h}),o.d(e,"m",function(){return m}),o.d(e,"h",function(){return x}),o.d(e,"a",function(){return _}),o.d(e,"e",function(){return w}),o.d(e,"c",function(){return k}),o.d(e,"l",function(){return C}),o.d(e,"i",function(){return y}),o.d(e,"b",function(){return j}),o.d(e,"k",function(){return T}),o.d(e,"j",function(){return D});var d="production api",f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.get("".concat(d,"article/get"),{params:t})},v=function(){return l.get("".concat(d,"article/getAll"))},h=function(t){return l.post("".concat(d,"article/like/").concat(t))},m=function(){return l.get("".concat(d,"tag/get"))},x=function(t){return l.get("".concat(d,"comment/get"),{params:t})},_=function(t){return l.put("".concat(d,"comment/add"),Object(n.a)({},t))},w=function(t){return l.post("".concat(d,"comment/like/").concat(t))},k=function(t){return l.put("".concat(d,"reply/add"),Object(n.a)({},t))},C=function(t){return l.get("".concat(d,"reply/get/").concat(t))},y=function(t){return l.get("".concat(d,"hero/get"),{params:t})},j=function(t){return l.put("".concat(d,"hero/add"),Object(n.a)({},t))},T=function(t){return l.get("".concat(d,"project/get"),{params:t})},D=function(t){return l.get("".concat(d,"music/get"),{params:t})}},160:function(t,e,o){"use strict";e.a={methods:{toZero:function(t){return t>9?t:"0".concat(t)},toTime:function(t,e){var o=new Date(t);return"".concat(o.getFullYear()).concat(e).concat(this.toZero(o.getMonth()+1)).concat(e).concat(this.toZero(o.getDate()))}}}},167:function(t,e,o){var content=o(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("17ccfcd0",content,!0,{sourceMap:!1})},168:function(t,e,o){var content=o(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("1ac9d816",content,!0,{sourceMap:!1})},213:function(t,e,o){"use strict";var n=o(167);o.n(n).a},214:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,".sideIcon[data-v-629c211d]{position:fixed;width:42px;height:126px;background:hsla(0,0%,77%,.4);bottom:100px;left:50%;margin-left:500px}.sideIcon i[data-v-629c211d]{display:block;height:42px;text-align:center;line-height:42px;cursor:pointer;box-sizing:border-box;font-size:20px}.sideIcon i[data-v-629c211d]:first-of-type,.sideIcon i[data-v-629c211d]:nth-of-type(2){border-bottom:1px solid #f1f1f1}.sideIcon i[data-v-629c211d]:hover{background:#8ed53c;color:#fff}",""])},215:function(t,e,o){"use strict";var n=o(168);o.n(n).a},216:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,'.main[data-v-077ee209]{clear:both;overflow:hidden}.article[data-v-077ee209]{width:620px;float:left;box-sizing:border-box;background:transparent}.item[data-v-077ee209]{padding:24px 18px;overflow:hidden;position:relative}.item[data-v-077ee209]:last-child:after{width:0}.item[data-v-077ee209]:after{content:"";display:block;position:absolute;height:1px;background-color:#f1f1f1;bottom:0;left:0;width:150px}.item .article-title[data-v-077ee209]{margin-bottom:15px;font-size:16px;display:block}.item .article-title h2[data-v-077ee209]{font-weight:400;font-size:20px;display:inline-block;position:relative}.item .article-title h2[data-v-077ee209]:after{content:"";display:block;position:absolute;height:1px;background-color:#555;bottom:0;left:0;width:100%;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scaleX(0);transform:scaleX(0);transition:.3s}.item .article-title:hover h2[data-v-077ee209]:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.item .article-desc[data-v-077ee209]{line-height:24px;color:#777}.item .article-info[data-v-077ee209]{margin-top:20px;color:#8c8c8c;font-size:12px}.item .article-info i[data-v-077ee209],.item .article-info strong[data-v-077ee209]{font-size:12px}.side[data-v-077ee209]{float:right}.side[data-v-077ee209],.tagSide[data-v-077ee209]{width:250px;box-sizing:border-box;padding-top:24px}.tagSide[data-v-077ee209]{position:fixed;left:50%;margin-left:200px;top:24px}.hot-title[data-v-077ee209]{font-size:16px}.hot-article[data-v-077ee209],.tag-list[data-v-077ee209]{margin-top:10px;width:100%;box-sizing:border-box;padding-left:6px}.hot-article h3[data-v-077ee209]{font-weight:400;line-height:40px;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tags[data-v-077ee209]{margin-top:24px}.tag-list a[data-v-077ee209]{display:inline-block;padding:10px}.loadmore[data-v-077ee209]{text-align:center;padding:12px 0;cursor:pointer;color:#ccc}.smallNav[data-v-077ee209]{margin-top:20px;width:100%;position:relative;color:#797979}.flag[data-v-077ee209]{width:35%;height:1px;background:#f1f1f1;margin-bottom:20px}.smallNav a[data-v-077ee209]{padding:0 5px;color:#797979}.fixedTag[data-v-077ee209]{position:fixed;width:250px;top:60px}',""])},237:function(t,e,o){"use strict";o.r(e);var n=o(11),r=(o(46),o(5)),c=o(157),l={data:function(){return{scrollDom:null,scrollNum:0}},computed:{scrollTop:function(){return this.$store.state.scrollTop}},methods:{scroll:function(t){1===t?this.scrollNum+=400:this.scrollNum=0,$("html,body").animate({scrollTop:"".concat(this.scrollNum,"px")},300)},mail:function(){window.open("http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=uYGNgI_Mj4uAifnIyJfa1tQ","_blank")}},watch:{scrollTop:function(t){this.scrollNum=t}}},d=(o(213),o(8)),f=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sideIcon"},[o("i",{staticClass:"iconfont",on:{click:t.mail}},[t._v("")]),t._v(" "),o("i",{staticClass:"iconfont",on:{click:function(e){return t.scroll(1)}}},[t._v("")]),t._v(" "),o("i",{staticClass:"iconfont",on:{click:function(e){return t.scroll(0)}}},[t._v("")])])},[],!1,null,"629c211d",null).exports,v=o(155),h=o(160),m=Object(c.m)(),x=Object(c.f)({top:!0}),_=Object(c.f)({current_page:1}),w={head:function(){return{title:"Pydw | 文章"}},layout:"layout",mixins:[v.a,h.a],components:{ToTop:f},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,t.next=3,m;case 3:return o=t.sent,t.next=6,_;case 6:return n=t.sent,t.next=9,x;case 9:return r=t.sent,t.abrupt("return",{tags:o,article:n.result.list,hotArticle:r.result.list});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{showFixedTag:!1,sideHot:null,isLoadingData:!1,hasMore:!0,page:1}},computed:{scrollTop:function(){return this.$store.state.scrollTop}},methods:{loadMore:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoadingData=!0,this.page+=1;var o=Object(n.a)({current_page:this.page},e);Object(c.f)(o).then(function(o){t.isLoadingData=!1;var n=o.result;t.page>=n.pagination.total_page&&(t.hasMore=!1);var r=[];r=e.tag||e.keyword||e.isNew?n.list:t.article.concat(n.list),t.article=r,t.$nextTick(function(){t.footer()})}).catch(function(e){t.isLoadingData=!1})},goDetail:function(t,data){var e=data.filter(function(e){return e.id==t});console.log("id: "+t,e),this.$store.commit("selectArticle",e[0]),this.$router.push("/article/"+t)}},mounted:function(){var t=this;this.$nextTick(function(){t.sideHot=document.querySelector("#sideHot"),t.mailContentDom=document.querySelector("#mailContent"),t.windowHeight=document.documentElement.clientHeight,t.footer(),window.addEventListener("scroll",function(e){var o=$(document).scrollTop(),n=t.mailContentDom.offsetHeight;t.showFixedTag=o>=t.sideHot.offsetHeight+80,t.windowHeight+o>n-50&&!t.isLoadingData&&t.hasMore&&t.loadMore()})})},beforeRouteEnter:function(t,e,o){o(function(e){(t.query.tag||t.query.keyword)&&e.loadMore(t.query)})},beforeRouteUpdate:function(t,e,o){this.page=0,this.hasMore=!0,t.query.tag||t.query.keyword?this.loadMore(t.query):this.loadMore({isNew:!0}),o()}},k=(o(215),Object(d.a)(w,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"articleBox"},[o("main",{staticClass:"box main"},[o("section",{staticClass:"article"},[t._l(t.article,function(e,n){return o("div",{key:n,staticClass:"item"},[o("a",{staticClass:"article-title",attrs:{href:"javascript:void(0)"},on:{click:function(o){return t.goDetail(e.id,t.article)}}},[o("h2",[t._v(t._s(e.title))])]),t._v(" "),o("p",{staticClass:"article-desc"},[t._v(t._s(e.desc))]),t._v(" "),o("div",{staticClass:"article-info"},[o("span",{staticClass:"time"},[t._v(t._s(e.update_time||e.create_time))]),t._v(" "),o("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),o("span",{staticClass:"time"},[o("strong",[t._v(t._s(e.viewCount))]),t._v("次阅读")]),t._v(" "),o("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),o("span",{staticClass:"time"},[o("strong",[t._v(t._s(e.comments))]),t._v("条评论")]),t._v(" "),o("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),o("span",{staticClass:"time"},[o("strong",[t._v(t._s(e.likeCount))]),t._v("人喜欢")])])])}),t._v(" "),t.hasMore?o("div",{staticClass:"loadmore"},[t.isLoadingData?o("span",[t._v("数据加载中...")]):t._e()]):o("div",{staticClass:"loadmore"},[t._v("没有更多数据了")])],2),t._v(" "),o("section",{staticClass:"side"},[o("div",{staticClass:"hot",attrs:{id:"sideHot"}},[o("div",{staticClass:"hot-title"},[t._v("热门文章")]),t._v(" "),o("div",{staticClass:"hot-article"},t._l(t.hotArticle,function(e,n){return o("h3",{key:n,on:{click:function(o){return t.goDetail(e.id,t.hotArticle)}}},[o("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),o("div",{class:t.showFixedTag?"fixedTag":""},[o("div",{staticClass:"tags",attrs:{id:"tags"}},[o("div",{staticClass:"hot-title"},[t._v("标签")]),t._v(" "),o("div",{staticClass:"tag-list"},t._l(t.tags.result.list,function(e,n){return o("nuxt-link",{key:n,attrs:{to:"/article?tag="+e._id}},[t._v(t._s(e.name)),o("span",[t._v("("+t._s(e.count)+")")])])}),1)]),t._v(" "),o("div",{staticClass:"smallNav"},[o("div",{staticClass:"flag"}),t._v(" "),o("div",[o("nuxt-link",{attrs:{to:"/about"}},[t._v("我")]),t._v(" "),o("i",[t._v("•")]),t._v(" "),o("nuxt-link",{attrs:{to:"/hero"}},[t._v("留言墙")]),t._v(" "),o("i",[t._v("•")]),t._v(" "),o("nuxt-link",{attrs:{to:"/allarticle"}},[t._v("归档")])],1)])])])]),t._v(" "),o("to-top")],1)},[],!1,null,"077ee209",null));e.default=k.exports}}]);