(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{339:function(e,t,c){},341:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c(27),i=c.n(s),r=c(30),l=c(25),o=c(343),j=c(345),d=c(351),h=c(42),b=c(349),u=c(191),O=c(350),x=c(352),p=c(353),m=c(354),v=c(355),g=c(356),y=c.p+"static/media/cryptocurrency.1548aced.png",f=c(5),N=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(void 0),i=Object(h.a)(s,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(l<=800))}),[l]),Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)(b.a,{src:y,size:"large"}),Object(f.jsx)(j.a.Title,{level:2,className:"logo",children:Object(f.jsx)(r.b,{to:"/",children:"Cryptoverse"})}),Object(f.jsx)(u.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object(f.jsx)(x.a,{})})]}),c&&Object(f.jsxs)(O.a,{theme:"dark",children:[Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(p.a,{}),children:Object(f.jsx)(r.b,{to:"/",children:"Home"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(m.a,{}),children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(v.a,{}),children:Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(g.a,{}),children:Object(f.jsx)(r.b,{to:"/news",children:"News"})})]})]})},w=c(31),C=c.n(w),k=c(348),S=c(88),T=c(51),E=c(344),P=c(119),q=c(39),L={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"d51adb557amsh2aa5a154b3b9986p12feb3jsnb2f7bde10e48"},A=function(e){return{url:e,headers:L}},M=Object(P.a)({reducerPath:"cryptoApi",baseQuery:Object(q.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return A("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return A("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return A("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return A("coin/".concat(t,"/history/").concat(c))}})}}}),D=M.useGetCryptosQuery,I=M.useGetCryptoDetailsQuery,F=(M.useGetExchangesQuery,M.useGetCryptoHistoryQuery),U=function(e){var t=e.simplified,c=D(t?10:100),a=c.data,s=c.isFetching,i=Object(n.useState)([]),l=Object(h.a)(i,2),o=l[0],j=l[1],d=Object(n.useState)(""),b=Object(h.a)(d,2),u=b[0],O=b[1];return Object(n.useEffect)((function(){var e,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));j(t)}),[a,u]),console.log(o),s?"Loading...":Object(f.jsxs)(f.Fragment,{children:[!t&&Object(f.jsx)("div",{className:"search-crypto",children:Object(f.jsx)(k.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(f.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(f.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(f.jsx)(r.b,{to:"/crypto/".concat(e.id),children:Object(f.jsxs)(E.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(f.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(f.jsxs)("p",{children:["Price: ",C()(e.price)]}),Object(f.jsxs)("p",{children:["Market Cap: ",C()(e.marketCap)]}),Object(f.jsxs)("p",{children:["Daily Change: ",C()(e.change),"%"]})]})})},e.id)}))})]})},G=c(181),H=c(347),Q=c(357),$=c(358),V=c(359),z=c(360),J=c(122),R=c(361),W=c(194),_=c(188),B=j.a.Title,Z=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j;s.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var O={labels:i,datasets:[{label:"Price in USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{className:"chart-header",children:[Object(f.jsxs)(B,{level:2,className:"chart-title",children:[n," Price Chart"]}),Object(f.jsxs)(T.a,{className:"price-container",children:[Object(f.jsxs)(B,{level:5,className:"price-change",children:["Change ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(f.jsxs)(B,{level:5,className:"current-price",children:["Current ",n," Price: $",a]})]})]}),Object(f.jsx)(_.a,{data:O,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},K=j.a.Title,X=j.a.Text,Y=H.a.Option,ee=function e(){var t,c=Object(l.f)().coinId,a=Object(n.useState)("7d"),s=Object(h.a)(a,2),i=s[0],r=s[1],o=I(c),j=o.data,d=o.isFetching,b=F({coinId:c,timeperiod:i}).data;if(d)return"Loading...";console.log(j);var u=null===j||void 0===j||null===(t=j.data)||void 0===t?void 0:t.coin,O=[{title:"Price in USD",value:"$ ".concat(u.price&&C()(u.price)),icon:Object(f.jsx)(Q.a,{})},{title:"Rank",value:u.rank,icon:Object(f.jsx)($.a,{})},{title:"24h Volume",value:"$ ".concat(u.volume&&C()(u.volume)),icon:Object(f.jsx)(V.a,{})},{title:"MarketCap",value:"$ ".concat(u.marketCap&&C()(u.marketCap)),icon:Object(f.jsx)(Q.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(C()(u.allTimeHigh.price)),icon:Object(f.jsx)(z.a,{})}],x=[{title:"Number of Markets",value:u.numberOfMarkets,icon:Object(f.jsx)(m.a,{})},{title:"Number of Exchanges",value:u.numberOfExchanges,icon:Object(f.jsx)(v.a,{})},{title:"Approved Supply",value:u.approvedSupply?Object(f.jsx)(J.a,{}):Object(f.jsx)(R.a,{}),icon:Object(f.jsx)(W.a,{})},{title:"Total Supply",value:"$ ".concat(C()(u.totalSupply)),icon:Object(f.jsx)(W.a,{})},{title:"Circulating Supply",value:"$ ".concat(C()(u.circulatingSupply)),icon:Object(f.jsx)(W.a,{})}];return Object(f.jsxs)(T.a,{className:"coin-detail-container",children:[Object(f.jsxs)(T.a,{className:"coin-heading-container",children:[Object(f.jsxs)(K,{level:2,className:"coin-name",children:[u.name," ",u.slug," Price"]}),Object(f.jsxs)("p",{children:[u.name," live prince in US Dollars. View value statistics, market cap and supply."]})]}),Object(f.jsx)(H.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(f.jsx)(Y,{children:e},e)}))}),Object(f.jsx)(Z,{coinHistory:b,currentPrice:C()(u.price),coinName:u.name}),Object(f.jsxs)(T.a,{className:"stats-container",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsxs)(K,{level:3,className:"coin-details-heading",children:[u.name," Value Statistics"]}),Object(f.jsxs)("p",{children:["An overview showing the stats of ",e.name]})]}),O.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(X,{children:t}),Object(f.jsx)(X,{children:c})]}),Object(f.jsx)(X,{className:"stats",children:a})]})}))]}),Object(f.jsxs)(T.a,{className:"other-stats-info",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsx)(K,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object(f.jsx)("p",{children:"An overview showing the stats of all Cryptocurrencies."})]}),x.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(X,{children:t}),Object(f.jsx)(X,{children:c})]}),Object(f.jsx)(X,{className:"stats",children:a})]})}))]})]}),Object(f.jsxs)(T.a,{className:"coin-desc-link",children:[Object(f.jsx)(S.a,{className:"coin-desc",children:Object(f.jsxs)(K,{level:3,className:"coin-details-heading",children:["What is ",u.name,Object(G.a)(u.description)]})}),Object(f.jsxs)(T.a,{className:"coin-links",children:[Object(f.jsx)(K,{level:3,className:"coin-details-heading",children:u.name}),u.links.map((function(e){return Object(f.jsxs)(S.a,{className:"coin-link",children:[Object(f.jsx)(K,{level:5,className:"link-name",children:e.type}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},te=function(){return Object(f.jsx)("div",{children:"Exchanges"})},ce=c(185),ae=c.n(ce),ne={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"b1362c9901mshc2d39e104bbe13ap1560dfjsn450a61487a86"},se=Object(P.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(q.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return console.log(t),console.log(c),{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),method:"GET",headers:ne,count:c}}})}}}),ie=se.useGetCryptoNewsQuery,re=j.a.Text,le=j.a.Title,oe=H.a.Option,je="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",de=function(e){var t,c=e.simplified,a=Object(n.useState)("Cryptocurrency"),s=Object(h.a)(a,2),i=s[0],r=s[1],l=D(100).data,o=ie({newsCategory:i,count:c?6:12}).data;return console.log(o),(null===o||void 0===o?void 0:o.value)?Object(f.jsxs)(S.a,{gutter:[24,24],children:[!c&&Object(f.jsx)(T.a,{span:24,children:Object(f.jsx)(H.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,t){return e.toLowerCase()>=0},children:Object(f.jsx)(oe,{value:"Cryptocurrency",children:null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.coins.map((function(e){return Object(f.jsx)(oe,{value:e.name,children:e.name})}))})})}),o.value.map((function(e,t){var c,a,n,s,i,r;return Object(f.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(f.jsx)(E.a,{hoverable:!0,className:"news-card",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(f.jsxs)("div",{className:"news-image-container",children:[Object(f.jsx)(le,{className:"news-title",level:4,children:e.name}),Object(f.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||je,alt:"news"})]}),Object(f.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(f.jsxs)("div",{className:"provider-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||je,alt:""}),Object(f.jsx)(re,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(f.jsx)(re,{children:ae()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):"Loading.."},he=c(346),be=j.a.Title,ue=function(){var e,t=D(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return console.log("data below jhere"),console.log(c),a?"Loading...":Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(be,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(he.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(he.a,{title:"Total Exchanges",value:C()(n.totalExchanges)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(he.a,{title:"Total Market Cap",value:C()(n.totalMarketCap)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(he.a,{title:"Total 24h volume",value:C()(n.total24hVolume)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(he.a,{title:"Total Markets",value:C()(n.totalMarkets)})})]}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(be,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(f.jsx)(be,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(f.jsx)(U,{simplified:!0}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(be,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(f.jsx)(be,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/news",children:"Show More"})})]}),Object(f.jsx)(de,{simplified:!0})]})},Oe=(c(339),function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"navbar",children:Object(f.jsx)(N,{})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{className:"routes",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(ue,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(f.jsx)(te,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(f.jsx)(U,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/news",children:Object(f.jsx)(de,{})})]})})}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(f.jsx)("br",{}),"All rights reserved"]}),Object(f.jsxs)(d.b,{children:[Object(f.jsx)(r.b,{to:"/",children:"Home"}),Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(f.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})}),xe=c(36),pe=(c(340),c(28)),me=c(11),ve=Object(me.a)({reducer:(a={},Object(pe.a)(a,M.reducerPath,M.reducer),Object(pe.a)(a,se.reducerPath,se.reducer),a)});i.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(xe.a,{store:ve,children:Object(f.jsx)(Oe,{})})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.d15f62f5.chunk.js.map