(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{204:function(t,e,i){"use strict";i.r(e);var r=i(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("浏览器缓存主要是指http请求的缓存，作用是不言而喻的，能够减少资源请求，极大的改善网页性能，提高用户体验。浏览器第一次获取到资源后，然后根据返回的信息来告诉如何缓存资源，可能采用的是强缓存，也可能告诉客户端浏览器是协商缓存，这都需要根据响应的header内容来决定的。同时当相应header里没返回cache-control和expires的时候，浏览器可以根据LM-Factor算法计算出一个试探性最大使用期。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("对比分析")]),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("从上面分类很容易看出缓存分为强缓存和协商缓存")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("如果cache-control与expires同时存在的话，cache-control的优先级高于expires")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),i("p",[t._v("用Etag能够更加准确的控制缓存，因为Etag是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符。Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。")]),t._v(" "),t._m(15),t._v(" "),i("p",[t._v('如果响应中没有"Cache-Control: max-age"首部，也没有Expires首部，缓存可以计算出一个试探性最大使用期。LM-Factor算法是一种很常用的试探性过期算法，如果文档中包含了最后修改日期，就可以使用这种算法。LM-Factor算法将最后修改日期作为依据，来估计文档有多么易变。实际的LM-Factor算法会计算缓存与服务器对话的时间跟服务器声明文档最后被修改的时间之间的差值，取这个间隔时间的一部分，将其作为缓存中的新鲜度持续时间。缓存通常会为没有任何新鲜周期线索的文档分配一个默认的新鲜周期(通常是一个小时或一天)。有时，比较保守的缓存会将这种试探性新鲜生存期设置为0，强制缓存在每次将其提供给客户端之前，都去验证一下这些数据仍然是新鲜的。与试探性新鲜计算有关的最后一点是——它们可能比你想象的要常见得多。很多原始服务器仍然不会产生Expires和max-age首部。选择缓存过期的默认时间时要特别小心！')]),t._v(" "),i("p",[t._v("LM-Factor算法的逻辑：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),i("p",[t._v("上面说到，使用强缓存时，浏览器不会发送请求到服务端，根据设置的缓存时间浏览器一直从缓存中获取资源，在这期间若资源产生了变化，浏览器就在缓存期内就一直得不到最新的资源，那么如何防止这种事情发生呢？")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),i("ul",[i("li",[t._v("配置超长时间的本地缓存")]),t._v(" "),i("li",[t._v("内容摘要命名资源")]),t._v(" "),i("li",[t._v("静态资源CDN部署")]),t._v(" "),i("li",[i("a",{attrs:{href:"https://www.zhihu.com/question/20790576",target:"_blank",rel:"noopener noreferrer"}},[t._v("非覆盖|增量式发布策略"),i("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"浏览器的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存"}},[this._v("#")]),this._v(" 浏览器的缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解"}},[this._v("#")]),this._v(" 图解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器第一次请求时"),e("br"),this._v(" "),e("img",{attrs:{src:"/study/cache/first.png",alt:"first"}})]),this._v(" "),e("li",[this._v("浏览器在后续请求时"),e("br"),this._v(" "),e("img",{attrs:{src:"/study/cache/cache.png",alt:"cache"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"资源请求分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源请求分类"}},[this._v("#")]),this._v(" 资源请求分类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("审查network里面的资源请求结果\n"),e("img",{attrs:{src:"/study/cache/network.png",alt:"netword"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("http状态码")]),t._v(" "),i("th",[t._v("size")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("分类")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("200")]),t._v(" "),i("td",[t._v("from memory cache")]),t._v(" "),i("td",[t._v("不请求网络资源，资源缓存在内存中，一般是图片等较小资源，浏览器关闭后，数据也将不存在")]),t._v(" "),i("td",[t._v("强缓存或试探缓存")])]),t._v(" "),i("tr",[i("td",[t._v("200")]),t._v(" "),i("td",[t._v("from disk cache")]),t._v(" "),i("td",[t._v("不请求网络资源，资源缓存在硬盘中，一般是js、css等较大资源")]),t._v(" "),i("td",[t._v("强缓存或试探缓存")])]),t._v(" "),i("tr",[i("td",[t._v("200")]),t._v(" "),i("td",[t._v("资源大小")]),t._v(" "),i("td",[t._v("从服务器下载最新资源")]),t._v(" "),i("td",[t._v("不缓存")])]),t._v(" "),i("tr",[i("td",[t._v("304")]),t._v(" "),i("td",[t._v("资源大小")]),t._v(" "),i("td",[t._v("请求服务端发现资源没更新，使用本地资源")]),t._v(" "),i("td",[t._v("协商缓存")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("强缓存"),e("br"),this._v("\n浏览器在请求某一资源时，会先获取该资源缓存的header信息，判断是否命中强缓存（cache-control和expires信息），若命中直接从缓存中获取资源信息，包括缓存header信息；本次请求根本就不会与服务器进行通信")]),this._v(" "),e("li",[this._v("协商缓存"),e("br"),this._v("\n如果没有命中强缓存，浏览器会发送请求到服务器，请求会携带第一次请求返回的有关缓存的header字段信息（Last-Modified/If-Modified-Since和Etag/If-None-Match），由服务器根据请求中的相关header信息来比对结果是否协商缓存命中；若命中，则服务器返回新的响应header信息更新缓存中的对应header信息，但是并不返回资源内容，它会告知浏览器可以直接从缓存获取,否则返回最新的资源内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("没有命中缓存的情况\n"),e("img",{attrs:{src:"/study/cache/nocache.png",alt:"nocache"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"强缓存相关的header字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存相关的header字段"}},[this._v("#")]),this._v(" 强缓存相关的header字段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/study/cache/cache_control.png",alt:"cache_control"}}),this._v("\n强缓存上面已经介绍了，直接从缓存中获取资源而不经过服务器；与强缓存相关的header字段有两个：")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("expires，这是http1.0时的规范；它的值为一个绝对时间的GMT格式的时间字符串，如Mon, 10 Jun 2015 21:31:12 GMT，如果发送请求的时间在expires之前，那么本地缓存始终有效，否则就会发送请求到服务器来获取资源")]),t._v(" "),i("li",[t._v("cache-control：max-age=number，这是http1.1时出现的header信息，主要是利用该字段的max-age值来进行判断，它是一个相对值；资源第一次的请求时间和Cache-Control设定的有效期，计算出一个资源过期时间，再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行；cache-control除了该字段外，还有下面几个比较常用的设置值：\n"),i("ul",[i("li",[t._v("no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。")]),t._v(" "),i("li",[t._v("no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。")]),t._v(" "),i("li",[t._v("public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。")]),t._v(" "),i("li",[t._v("private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"协商缓存相关的header字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存相关的header字段"}},[this._v("#")]),this._v(" 协商缓存相关的header字段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/study/cache/etag.png",alt:"etag"}}),this._v("\n协商缓存是由服务器来确定缓存资源是否可用的，所以客户端与服务器端要通过某种标识来进行通信，从而让服务器判断请求资源是否可以缓存访问，这主要涉及到下面两组header字段，这两组搭档都是成对出现的，即第一次请求的响应头带上某个字段（Last-Modified或者Etag），则后续请求则会带上对应的请求字段（If-Modified-Since或者If-None-Match），若响应头没有Last-Modified或者Etag字段，则请求头也不会有对应的字段。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("Last-Modified/If-Modified-Since二者的值都是GMT格式的时间字符串，具体过程：")]),t._v(" "),i("ul",[i("li",[t._v("浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在respone的header加上Last-Modified的header，这个header表示这个资源在服务器上的最后修改时间")]),t._v(" "),i("li",[t._v("浏览器再次跟服务器请求这个资源时，在request的header上加上If-Modified-Since的header，这个header的值就是上一次请求时返回的Last-Modified的值")]),t._v(" "),i("li",[t._v("服务器再次收到资源请求时，根据浏览器传过来If-Modified-Since和资源在服务器上的最后修改时间判断资源是否有变化，如果没有变化则返回304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。当服务器返回304 Not Modified的响应时，response header中不会再添加Last-Modified的header，因为既然资源没有变化，那么Last-Modified也就不会改变，这是服务器返回304时的response header")]),t._v(" "),i("li",[t._v("浏览器收到304的响应后，就会从缓存中加载资源")]),t._v(" "),i("li",[t._v("如果协商缓存没有命中，浏览器直接从服务器加载资源时，Last-Modified的Header在重新加载的时候会被更新，下次请求时，If-Modified-Since会启用上次返回的Last-Modified值")])])]),t._v(" "),i("li",[i("p",[t._v("Etag/If-None-Match这两个值是由服务器生成的每个资源的唯一标识字符串，只要资源有变化就这个值就会改变；其判断过程与Last-Modified/If-Modified-Since类似，与Last-Modified不一样的是，当服务器返回304 Not Modified的响应时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化。")])]),t._v(" "),i("li",[i("p",[t._v("HTTP1.1中Etag的出现主要是为了解决几个Last-Modified比较难解决的问题")]),t._v(" "),i("ul",[i("li",[t._v("一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET")]),t._v(" "),i("li",[t._v("某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)")]),t._v(" "),i("li",[t._v("某些服务器不能精确的得到文件的最后修改时间")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"试探缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#试探缓存"}},[this._v("#")]),this._v(" 试探缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("如果已缓存文档最后一次修改发生在很久以前，它可能会是一份稳定的文档，不太会突然发生变化，因此将其继续保存在缓存中会比较安全。")]),this._v(" "),e("li",[this._v("如果已缓存文挡最近被修改过，就说明它很可能会频繁地发生变化，因此在与服务器进行再验证之前，只应该将其缓存很短一段时间。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"强缓存如何重新加载缓存过的资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存如何重新加载缓存过的资源"}},[this._v("#")]),this._v(" 强缓存如何重新加载缓存过的资源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("内容摘要命名资源，每次文件修改后就会重新命名资源")]),this._v(" "),e("li",[this._v("通过更新页面中引用的资源路径，让浏览器主动放弃缓存，加载新资源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"缓存的存在如何部署和更新前端代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存的存在如何部署和更新前端代码"}},[this._v("#")]),this._v(" 缓存的存在如何部署和更新前端代码")])}],!1,null,null,null);e.default=a.exports}}]);