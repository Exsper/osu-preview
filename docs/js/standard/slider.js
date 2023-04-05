function Slider(t,i){HitCircle.call(this,t,i);var e=t[5].split("|"),i=e[0];e[0]=this.position;for(var s=1;s<e.length;s++)e[s]=new Point(e[s].split(":"));this.repeat=0|t[6],this.pixelLength=+t[7];t=this.beatmap.timingPointAt(this.time).beatLength*(this.pixelLength/this.beatmap.SliderMultiplier)/100;this.endTime+=t*this.repeat,this.duration=this.endTime-this.time,this.curve=Curve.parse(i,e,this.pixelLength),this.endPosition=this.curve.pointAt(1)}Slider.prototype=Object.create(HitCircle.prototype),(Slider.prototype.constructor=Slider).ID=2,(Standard.prototype.hitObjectTypes[Slider.ID]=Slider).FADE_IN_TIME=375,Slider.FADE_OUT_TIME=200,Slider.REVERSE_ARROW=String.fromCharCode(10132),Slider.OPACITY=.66,Slider.prototype.draw=function(t,i){var e=this.time-t,s=1,s=(0<=e?s=(this.beatmap.approachTime-e)/Slider.FADE_IN_TIME:t>this.endTime&&(s=1-(t-this.endTime)/Slider.FADE_OUT_TIME),i.globalAlpha=Math.max(0,Math.min(s,1)),this.drawPath(i),this.drawCircle(this.endPosition,i),this.drawCircle(this.position,i),-e*this.repeat/this.duration);1<this.repeat&&1+s<=(-2&this.repeat)&&this.drawText(this.endPosition,Slider.REVERSE_ARROW,this.curve.endAngle,i),0<s&&1+s<=this.repeat-!(1&this.repeat)?this.drawText(this.position,Slider.REVERSE_ARROW,this.curve.startAngle,i):0<=e&&this.drawText(this.position,this.combo,0,i),0<=e?this.drawApproach(e,i):t<this.endTime&&this.drawFollowCircle(s,i)},Slider.prototype.drawPath=function(t){t.save(),t.globalAlpha*=Slider.OPACITY,t.beginPath(),t.moveTo(this.position.x-this.stack*this.beatmap.stackOffset,this.position.y-this.stack*this.beatmap.stackOffset);for(var i=1;i<this.curve.path.length;i++)t.lineTo(this.curve.path[i].x-this.stack*this.beatmap.stackOffset,this.curve.path[i].y-this.stack*this.beatmap.stackOffset);t.shadowBlur=0,t.strokeStyle=this.color,t.lineWidth=2*(this.beatmap.circleRadius-this.beatmap.circleBorder),t.stroke(),t.globalCompositeOperation="destination-over",t.shadowBlur=0,t.strokeStyle="#fff",t.lineWidth=2*this.beatmap.circleRadius,t.stroke(),t.restore()},Slider.prototype.drawFollowCircle=function(t,i){t=this.curve.pointAt(t=1<(t%=2)?2-t:t);i.beginPath(),i.arc(t.x-this.stack*this.beatmap.stackOffset,t.y-this.stack*this.beatmap.stackOffset,this.beatmap.circleRadius-this.beatmap.circleBorder/2,-Math.PI,Math.PI),i.shadowBlur=this.beatmap.shadowBlur,i.strokeStyle="#fff",i.lineWidth=this.beatmap.circleBorder,i.stroke()};