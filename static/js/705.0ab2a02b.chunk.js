"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[705],{7705:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var n,a,A,c,u,i=t(9439),o=t(2791),s=t(7689),f=t(168),v=t(4193),x=v.Z.div(n||(n=(0,f.Z)(["\nwidth:150px;\noverflow:hidden;\nborder-radius:8px;\n"]))),h=v.Z.div(a||(a=(0,f.Z)(["\n  width: 150px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 8px;\n"]))),p=v.Z.ul(A||(A=(0,f.Z)(["\n  list-style:none;\n  display: flex;\n  flex-wrap: wrap;\n  gap:16px;\n"]))),g=v.Z.p(c||(c=(0,f.Z)(["\n  margin-top: 8px;\n  font-size: 18px;\n  font-weight: bold;\n"]))),d=v.Z.p(u||(u=(0,f.Z)(["\n  margin-top: 4px;\n  font-size: 16px;\n"]))),m=t(184),w=function(e){var r=e.actors;return(0,m.jsx)(p,{children:r.map((function(e){var r=e.name,t=e.character,n=e.actorPhotoPath;return(0,m.jsx)("li",{children:(0,m.jsxs)("article",{children:[(0,m.jsx)(h,{children:(0,m.jsx)("img",{src:n,alt:r,width:"150"})}),(0,m.jsxs)(x,{children:[(0,m.jsx)(g,{children:r}),(0,m.jsxs)(d,{children:["Character: ",t]})]})]})},r)}))})},l=new(t(5058).Z),Z=function(){var e=(0,s.UO)().movieId,r=(0,o.useState)([]),t=(0,i.Z)(r,2),n=t[0],a=t[1];return(0,o.useEffect)((function(){l.getActors(e).then((function(e){0!==e.length&&a(e)}))}),[e]),(0,m.jsx)(m.Fragment,{children:n.length>0?(0,m.jsx)(w,{actors:n}):(0,m.jsx)("div",{children:"No actors found for this movie."})})}},5058:function(e,r,t){var n=t(5861),a=t(3144),A=t(5671),c=t(4687),u=t.n(c),i=t(3263),o=t(9821),s="api_key=9790c9e061754f8ee983e30effe6feec",f="https://image.tmdb.org/t/p/w500";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var v=(0,a.Z)((function e(){(0,A.Z)(this,e),this.getTrendingMovies=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat("trending/movie/day?").concat(s));case 2:return r=e.sent,e.next=5,r.data.results;case 5:return t=e.sent,e.next=8,t;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),this.searchMovie=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?".concat(s,"&language=en-US&query=").concat(r));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.getReviews=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/reviews?").concat(s));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.getMovie=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a,A,c,v,x,h,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"?").concat(s));case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,a=n.genres,A=n.id,c=n.title,v=n.poster_path,x=n.vote_average,h=n.overview,e.next=14,v;case 14:if(!e.sent){e.next=18;break}e.t0="".concat(f+v),e.next=19;break;case 18:e.t0=o;case 19:return p=e.t0,e.abrupt("return",{genres:a,id:A,title:c,posterPath:p,vote_average:x,overview:h});case 21:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.getActors=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/credits?").concat(s,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data.cast;case 5:return n=e.sent,e.next=8,n.map((function(e){var r=e.name,t=e.character,n=e.profile_path;return{name:r,character:t,actorPhotoPath:n?"".concat(f+n):o}}));case 8:return a=e.sent,e.next=11,a;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}));r.Z=v},9821:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=705.0ab2a02b.chunk.js.map