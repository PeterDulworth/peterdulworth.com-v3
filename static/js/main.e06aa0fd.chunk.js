(window["webpackJsonppeterdulworth.com-v3"]=window["webpackJsonppeterdulworth.com-v3"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/rice.fbe3d442.png"},26:function(e,t,a){e.exports=a.p+"static/media/dogstickers.a62c75d3.png"},27:function(e,t,a){e.exports=a.p+"static/media/indeed.dd146035.png"},28:function(e,t,a){e.exports=a.p+"static/media/moodsic.551be2cf.png"},29:function(e,t,a){e.exports=a.p+"static/media/companyinsights.458cce93.png"},30:function(e,t,a){e.exports=a.p+"static/media/sketches.eb27462f.png"},31:function(e,t,a){e.exports=a.p+"static/media/other2.770f5b70.png"},32:function(e,t,a){e.exports=a.p+"static/media/blackhole.7d8251e7.png"},33:function(e,t,a){e.exports=a.p+"static/media/franz.1f12c539.png"},34:function(e,t,a){e.exports=a.p+"static/media/josie_ball.99c5e4bb.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/josie_basket.6bd5a0e5.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/josie_box.45d7d73e.jpg"},37:function(e,t,a){e.exports=a(51)},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=a(9),i=a(12),s=a(6),m=r.a.createContext({isDarkMode:!0,toggleDarkMode:function(){},getThemeClass:function(){}}),u=(a(42),a(17)),d=function(){var e=Object(n.useContext)(m),t=e.isDarkMode?"ThemeToggle__moon--active":"ThemeToggle__moon--inactive",a=e.isDarkMode?"ThemeToggle__sun--inactive":"ThemeToggle__sun--active";return r.a.createElement("div",{className:"ThemeToggle",onClick:e.toggleDarkMode},r.a.createElement(u.a,{className:"ThemeToggle__moon ".concat(t)}),r.a.createElement(u.b,{className:"ThemeToggle__sun ".concat(a)}))},h=function(){return r.a.createElement("nav",{className:"Nav"},r.a.createElement(d,null))},p=function(e){var t=e.items;return r.a.createElement("div",{className:"CenterAlignedTable"},t.map(function(e,t){return r.a.createElement("div",{className:"CenterAlignedTable__item",key:t},r.a.createElement("div",{className:"CenterAlignedTable__item-left"},e.left),r.a.createElement("div",{className:"CenterAlignedTable__item-center"},"\xa0@\xa0"),r.a.createElement("div",{className:"CenterAlignedTable__item-right"},e.right))}))},g=a(13),f=a(21),b=a(10),E=function(){return r.a.createElement("div",{className:"SocialLinks"},r.a.createElement("a",{className:"SocialLinks__link",href:"https://github.com/PeterDulworth",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:g.a})),r.a.createElement("a",{className:"SocialLinks__link",href:"https://www.linkedin.com/in/peter-dulworth/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:g.b})),r.a.createElement("a",{className:"SocialLinks__link",href:"http://www.peterdulworth.com/resume/",target:"_blank",rel:"noopener noreferrer",id:"SocialLinks__resume"},r.a.createElement(b.a,{icon:f.a})))},k=function(e){var t=e.text,a=e.className;return r.a.createElement("div",{className:"RainbowText ".concat(a)},t.split("").map(function(e,t){return r.a.createElement("span",{key:t},e)}))},w=a(22),_=a.n(w),v=function(e){var t;e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.background(t),e.strokeWeight(0)},e.myCustomRedrawAccordingToNewPropsHandler=function(a){if(a.background){t=a.background,console.log("update");try{e.clear(),e.background(t)}catch(n){}}};var a=1,n=0,r=60;e.drawRect=function(){for(var t=60;t<e.windowWidth-60;t+=10)e.fill(e.random(150,220)),e.rect(t,r,e.random(4),e.random(4));(r+=10)>=e.windowHeight-60&&e.noLoop()},e.drawCircle=function(){e.translate(e.width/2,e.height/2);for(var t=0;t<e.TWO_PI;t+=a){var r=n*e.cos(t),l=n*e.sin(t);e.fill(e.random(150,220)),e.circle(r,l,e.random(4))}a-=.01,((n+=4)>500||a<.004)&&e.noLoop()},e.draw=function(){e.drawCircle()}},C=function(e){var t=e.title,a=e.subtitle,l=e.logo,o=e.href,i=r.a.createElement("img",{src:l,loading:"lazy",alt:"logo"}),u=Object(n.useContext)(m).getThemeClass("Card"),d=Object(n.useState)(i),h=Object(c.a)(d,2),p=h[0],g=h[1],f=Object(n.useState)(null),b=Object(c.a)(f,2),E=b[0],k=b[1];return r.a.createElement("a",{className:"Card ".concat(u),href:o,target:"_blank",rel:"noreferrer noopener",onClick:function(){k(r.a.createElement(s.a,{to:o}))},onMouseEnter:function(){var e=r.a.createElement("div",{className:"Card__description"},r.a.createElement("div",{className:"Card__title"},t),r.a.createElement("div",{className:"Card__subtitle"},a));g(e)},onMouseLeave:function(){g(i)}},p,E)},N=a(25),T=a.n(N),j=a(26),x=a.n(j),D=a(27),S=a.n(D),y=a(28),L=a.n(y),P=a(29),M=a.n(P),O=a(30),A=a.n(O),W=a(31),I=a.n(W),R=function(e){var t=e.children;return r.a.createElement("div",{className:"Content"},t)},H=function(){var e=Object(n.useContext)(m),t=e.getThemeClass("LandingPage__subtitle"),a=e.getThemeClass("LandingPage__title");return r.a.createElement("div",null,r.a.createElement("div",{className:"LandingPage"},r.a.createElement(_.a,{sketch:v,className:"test123",background:e.isDarkMode?22:255}),r.a.createElement("div",null,r.a.createElement(k,{text:"Peter Dulworth",className:"LandingPage__title ".concat(a)}),r.a.createElement("div",{className:"LandingPage__subtitle ".concat(t)},r.a.createElement(p,{items:[{left:"SWE intern",right:r.a.createElement("span",{className:"LandingPage__indeed"},"indeed.com")},{left:"CS",right:"rice university"}]}),r.a.createElement("br",null),r.a.createElement(E,null)))),r.a.createElement(R,null,r.a.createElement(C,{title:"Rice University",subtitle:"b.s. computer science - 2020",logo:T.a,href:"/rice"}),r.a.createElement(C,{title:"Doggo Stickers",subtitle:"imessages sticker pack - 2018",logo:x.a,href:"https://github.com/PeterDulworth/Doggo-Stickers"}),r.a.createElement(C,{title:"Indeed.com",subtitle:"swe intern - 2019",logo:S.a,href:"/indeed"}),r.a.createElement(C,{title:"Moodsic",subtitle:"tamu hacks - 2018",logo:L.a,href:"https://github.com/SophiaJefferson/moodsic"}),r.a.createElement(C,{title:"Company Insights",subtitle:"react, python - 2019",logo:M.a,href:"https://github.com/PeterDulworth/company-insights-webapp"}),r.a.createElement(C,{title:"Sketches",subtitle:"p5js sketches - 2019",logo:A.a,href:"https://peterdulworth.github.io/sketches/index.html"}),r.a.createElement(C,{title:"Other Work...",subtitle:"",logo:I.a,href:"http://splash.peterdulworth.com/"})))},z=a(32),G=a.n(z),J=a(33),F=a.n(J),B=a(34),U=a.n(B),X=a(35),q=a.n(X),K=a(36),Q=a.n(K),V=function(){return r.a.createElement("div",{className:"Gallery"},r.a.createElement(h,null),r.a.createElement("h1",null,"Gallery"),r.a.createElement(R,null,r.a.createElement(C,{title:"sketches",subtitle:"asdf",logo:G.a,href:"https://peterdulworth.github.io/sketches/projects.html"}),r.a.createElement(C,{title:"franz",subtitle:"asdf",logo:F.a,href:"https://peterdulworth.github.io/sketches/projects.html"}),r.a.createElement(C,{title:"josie",subtitle:"asdf",logo:U.a,href:"https://peterdulworth.github.io/sketches/projects.html"}),r.a.createElement(C,{title:"josie",subtitle:"asdf",logo:q.a,href:"https://peterdulworth.github.io/sketches/projects.html"}),r.a.createElement(C,{title:"josie",subtitle:"asdf",logo:Q.a,href:"https://peterdulworth.github.io/sketches/projects.html"})))},Y=function(){var e=Object(n.useContext)(m).getThemeClass("Footer");return r.a.createElement("div",{className:"Footer ".concat(e)},r.a.createElement("div",null,"\xa9 Peter Dulworth 2019"),r.a.createElement("div",null,"psd2@rice.edu | 6330 Main Street, Houston, TX 77005 | (832) 567-5653"),r.a.createElement("div",null,r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://www.linkedin.com/in/peter-dulworth/"},"LinkedIn"),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://github.com/PeterDulworth"},"Github"),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"http://splash.peterdulworth.com/"},"Splash"),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"http://www.peterdulworth.com/resume/"},"Resume")))};var Z=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=a?"App--dark":"App--light";return r.a.createElement(m.Provider,{value:{isDarkMode:a,toggleDarkMode:function(){l(function(e){return!e})},getThemeClass:function(e){return"".concat(e,a?"--dark":"--light")}}},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App ".concat(o)},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/gallery"},r.a.createElement(V,null)),r.a.createElement(s.b,{path:"/"},r.a.createElement(h,null),r.a.createElement(H,null))),r.a.createElement(Y,null))))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e06aa0fd.chunk.js.map