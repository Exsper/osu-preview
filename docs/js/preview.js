var bgblob;function Preview(t){this.container=t,this.screen=document.createElement("canvas"),this.screen.width=Beatmap.WIDTH,this.screen.height=Beatmap.HEIGHT,this.ctx=this.screen.getContext("2d"),this.container.appendChild(this.screen);var i=this;this.background=new Image,this.background.setAttribute("crossOrigin","anonymous");this.background.addEventListener("load",function(){var t=document.createElement("canvas"),e=(t.id="bgcanvas",t.width=i.screen.width,t.height=i.screen.height,t.getContext("2d")),a=this.height*(i.screen.width/i.screen.height);e.drawImage(this,(this.width-a)/2,0,a,this.height,0,0,i.screen.width,i.screen.height),e.fillStyle="rgba(0, 0, 0, .4)",e.fillRect(0,0,i.screen.width,i.screen.height),void 0!==i.beatmap.processBG&&i.beatmap.processBG(e),t.toBlob(function(t){t=URL.createObjectURL(t);i.background.src=t,i.container.style.backgroundImage="url("+t+")"})},{once:!0}),this.background.addEventListener("error",function(){i.container.style.backgroundImage="none"})}Preview.prototype.load=function(t,e,a,i){void 0!==this.xhr&&this.xhr.abort();var n=this;try{n.beatmap=Beatmap.parse(e),t&&(n.background.src=t),n.ctx.restore(),n.ctx.save(),n.beatmap.update(n.ctx),n.at(0),"function"==typeof a&&a.call(n)}catch(t){"function"==typeof i&&i.call(n,t)}},Preview.prototype.at=function(t){this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,Beatmap.WIDTH,Beatmap.HEIGHT),this.ctx.restore(),this.beatmap.draw(t,this.ctx)};