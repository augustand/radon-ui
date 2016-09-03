webpackJsonp([2,31],{2:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.Mark=void 0;var d=c(7),f=function(h){return h&&h.__esModule?h:{"default":h}}(d);b.Mark=f["default"]},3:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(d){var f=document.createElement("div");return f.innerHTML=d,f.innerText||f.textContent};b["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,".ex-mark-text{display:none}.marked p{max-width:40rem}.marked code{background:#f7f7f7;color:#ff5722}.marked pre code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked pre{line-height:1.5em;margin:1rem 0}.marked{font-size:.9rem;line-height:1.8;color:#666;max-width:40rem}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked h2,.marked h3{position:relative}.marked h3:before{content:\"#\";color:#00bcd4;font-size:1.2em;font-weight:700;margin-right:.5rem}.marked blockquote{position:relative;font-size:90%;color:#404040;border-left:4px solid #67cdfb;padding-left:.8em;margin:1em 0;background:#f8f8f8;padding:1rem}.marked blockquote p{margin:0}.marked blockquote:before{position:absolute;top:14px;left:-12px;background-color:#67cdfb;color:#fff;content:\"!\";width:20px;height:20px;border-radius:100%;text-align:center;line-height:20px;font-weight:700;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:14px}.marked ul,ol{padding:0 2rem;list-style:inherit}.marked table{width:100%;max-width:100%;text-align:left;border-radius:6px}.marked thead{background:#e0f5ff}.marked th{color:rgba(0,0,0,.870588);height:3rem;border-bottom:1px solid #e9e9e9}.marked tr>td:first-child,.marked tr>th:first-child{padding-left:.5rem}.marked tr>td:last-child,.marked tr>th:last-child{padding-right:.5rem}.marked tr>td{height:2rem;line-height:1rem;border-bottom:1px solid #ececec}@media screen and (max-width:768px){.ex-card{margin:0}}","",{version:3,sources:["/./docs/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,UACI,eAAiB,CACpB,AACD,aACI,mBAAoB,AACpB,aAAe,CAClB,AACD,iBACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,YACI,kBAAmB,AACnB,aAAe,CAClB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CACpB,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CAErB,AACD,sBAFI,iBAAmB,CAItB,AACD,kBACI,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gBAAkB,AAClB,kBAAoB,CACvB,AACD,mBACI,kBAAmB,AACnB,cAAe,AACf,cAAe,AACf,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,mBAAoB,AACpB,YAAc,CACjB,AACD,qBACI,QAAU,CACb,AACD,0BACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAkB,AAClB,kEAA6E,AAC7E,cAAgB,CACnB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,cACI,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,cACI,kBAAoB,CACvB,AACD,WACI,0BAA2B,AAC3B,YAAa,AACb,+BAAiC,CACpC,AACD,oDACI,kBAAmB,CACtB,AACD,kDACI,mBAAoB,CACvB,AACD,cACI,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: \"#\";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: \"!\";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:function(a,b,c){var d=c(4);"string"==typeof d&&(d=[[a.id,d,""]]),c(10)(d,{}),d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:function(a,b,c){var d,f;c(5),d=c(3),f=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports["default"]),f&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=f)},316:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(2),f=c(8);b["default"]={components:{rdCardGroup:f.rdCardGroup,rdCard:f.rdCard,rdTag:f.rdTag,Mark:d.Mark}}},386:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,".ex-card-content{background:#f5f5f5;padding:1rem}","",{version:3,sources:["/./docs/views/basic/card.vue"],names:[],mappings:"AACA,iBACI,mBAAoB,AACpB,YAAc,CACjB",file:"card.vue",sourcesContent:["\n.ex-card-content {\n    background: #f5f5f5;\n    padding: 1rem;\n}\n"],sourceRoot:"webpack://"}])},393:function(a,b,c){var d=c(386);"string"==typeof d&&(d=[[a.id,d,""]]),c(10)(d,{}),d.locals&&(a.exports=d.locals)},559:function(a,b){a.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Card 卡片\n\n简单的布局卡片\n\n### 示例\n        </textarea> </mark> <div class=ex-card-content> <rd-card title=普通卡片标题> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> <rd-card> <p>没有标题</p> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> <rd-card-group> <rd-card class=rd-col-sm-24 title=\"在 rd-card-group 中的卡片\"> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> <rd-card class=rd-col-sm-24 title=\"在 rd-card-group 中的卡片\"> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> </rd-card-group> <rd-card-group> <rd-card class=rd-col-sm-24 title=\"在 rd-card-group 中的卡片\" bg-color=#1ae5ff font-color=#fff> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> <rd-card class=rd-col-sm-24 title=\"在 rd-card-group 中的卡片\" bg-color=#FFC107 font-color=#fff> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> <rd-card class=rd-col-sm-24 title=\"在 rd-card-group 中的卡片\" bg-color=#CDDC39 font-color=#fff> <p> 当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。 </p> </rd-card> </rd-card-group> </div> <mark> <textarea class=ex-mark-text>\n### 代码\n```html\n<rd-card title=tag>\n    <p>\n        当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。\n    </p>\n</rd-card>\n```\n\n```html\n <rd-card-group>\n    <rd-card title=tag>\n        <p>\n            当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。\n        </p>\n    </rd-card>\n    <rd-card title=tag>\n        <p>\n            当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。\n        </p>\n    </rd-card>\n</rd-card-group>\n```\n\n### API\n\n`props`：\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| title          | String       | 卡片标题       |\n| bg-color       | String       | 卡片颜色       |\n| font-color     | String       | 卡片字体颜色    |\n\n        </textarea> </mark> </div> </div>"},593:function(a,b,c){var d,f;c(393),d=c(316),f=c(559),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports["default"]),f&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=f)}});