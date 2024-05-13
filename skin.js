// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ?? ????? A??.ggsk
// Generated 2024-05-13T11:43:38

function pano2vrSkin(player,base) {
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footprint', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_footprint_no', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 0, defaultValue: false } });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sound', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__59=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__59.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.right='0px';
					me.__59.style.bottom='0%';
				}
				else {
					me.__59.style.right='0px';
					me.__59.style.bottom='-100%';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__62.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__62.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__62.style.transition='left 0s, top 0s';
				if (me.__62.ggCurrentLogicStatePosition == 0) {
					me.__62.style.left='0px';
					me.__62.style.top='-52%';
				}
				else {
					me.__62.style.left='0px';
					me.__62.style.top='-55%';
				}
			}
		}
		me.__62.logicBlock_position();
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me.__62);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 607px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 608px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 608px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.left='calc(50% - ((95% + 0px) / 2) + 0%)';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a4.ggUpdating == true) return;
			me.__18a4.ggUpdating = true;
			var el=me.__18a4;
			var curNumRows = 0;
			curNumRows = me.__18a4.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a4.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a4.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a4.getFilteredNodes(tourNodes, filter);
			me.__18a4.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a4.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a4.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a4.ggWidth) + 'px';
				parameter.width=me.__18a4.ggWidth + 'px';
				parameter.height=me.__18a4.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a4_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a4.ggNodeCount = me.__18a4.ggNumFilterPassed;
			me.__18a4.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a4.parentNode && me.__18a4.parentNode.classList.contains('ggskin_subelement') && me.__18a4.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a4.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "1층";
		el.ggId="\uac00\uad6c\uc788\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a4.style.transition='width 0s, height 0s';
				if (me.__18a4.ggCurrentLogicStateSize == 0) {
					me.__18a4.ggWidth=100;
					me.__18a4.ggHeight=150;
					me.__18a4.ggUpdate();
					skin.updateSize(me.__18a4);
				}
				else {
					me.__18a4.ggWidth=150;
					me.__18a4.ggHeight=180;
					me.__18a4.ggUpdate();
					skin.updateSize(me.__18a4);
				}
			}
		}
		me.__18a4.logicBlock_size();
		me.__18a4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a4.style.transition='width 0s, height 0s';
				if (me.__18a4.ggCurrentLogicStateVisible == 0) {
					me.__18a4.style.visibility=(Number(me.__18a4.style.opacity)>0||!me.__18a4.style.opacity)?'inherit':'hidden';
					me.__18a4.ggVisible=true;
				}
				else {
					me.__18a4.style.visibility="hidden";
					me.__18a4.ggVisible=false;
				}
			}
		}
		me.__18a4.logicBlock_visible();
		me.__18a4.ggCurrentLogicStateSize = -1;
		me.__18a4.ggCurrentLogicStateVisible = -1;
		me.__18a4.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a4.childNodes.length; i++) {
				var child=me.__18a4.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a4.ggUpdatePosition=function (useTransition) {
			me.__18a4.ggUpdate();
		}
		me.__18a.appendChild(me.__18a4);
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a2.ggUpdating == true) return;
			me.__18a2.ggUpdating = true;
			var el=me.__18a2;
			var curNumRows = 0;
			curNumRows = me.__18a2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a2.getFilteredNodes(tourNodes, filter);
			me.__18a2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a2.ggWidth) + 'px';
				parameter.width=me.__18a2.ggWidth + 'px';
				parameter.height=me.__18a2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a2.ggNodeCount = me.__18a2.ggNumFilterPassed;
			me.__18a2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a2.parentNode && me.__18a2.parentNode.classList.contains('ggskin_subelement') && me.__18a2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "2층";
		el.ggId="\uac00\uad6c\uc5c6\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateSize == 0) {
					me.__18a2.ggWidth=100;
					me.__18a2.ggHeight=150;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
				else {
					me.__18a2.ggWidth=150;
					me.__18a2.ggHeight=200;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
			}
		}
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateVisible == 0) {
					me.__18a2.style.visibility=(Number(me.__18a2.style.opacity)>0||!me.__18a2.style.opacity)?'inherit':'hidden';
					me.__18a2.ggVisible=true;
				}
				else {
					me.__18a2.style.visibility="hidden";
					me.__18a2.ggVisible=false;
				}
			}
		}
		me.__18a2.logicBlock_visible();
		me.__18a2.ggCurrentLogicStateSize = -1;
		me.__18a2.ggCurrentLogicStateVisible = -1;
		me.__18a2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a2.childNodes.length; i++) {
				var child=me.__18a2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
			me.__18a2.ggUpdate();
		}
		me.__18a.appendChild(me.__18a2);
		el=me.__61=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__61;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__61.ggUpdating == true) return;
			me.__61.ggUpdating = true;
			var el=me.__61;
			var curNumRows = 0;
			curNumRows = me.__61.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__61.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__61.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__61.getFilteredNodes(tourNodes, filter);
			me.__61.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__61.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__61.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__61.ggWidth) + 'px';
				parameter.width=me.__61.ggWidth + 'px';
				parameter.height=me.__61.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__61_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__61.ggNodeCount = me.__61.ggNumFilterPassed;
			me.__61.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__61.parentNode && me.__61.parentNode.classList.contains('ggskin_subelement') && me.__61.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__61.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "지하";
		el.ggFilter[2] = "정원";
		el.ggId="\uc9c0\ud558\uce35-\uc815\uc6d0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__61.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__61.ggCurrentLogicStateSize = newLogicStateSize;
				me.__61.style.transition='width 0s, height 0s';
				if (me.__61.ggCurrentLogicStateSize == 0) {
					me.__61.ggWidth=100;
					me.__61.ggHeight=150;
					me.__61.ggUpdate();
					skin.updateSize(me.__61);
				}
				else {
					me.__61.ggWidth=150;
					me.__61.ggHeight=200;
					me.__61.ggUpdate();
					skin.updateSize(me.__61);
				}
			}
		}
		me.__61.logicBlock_size();
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc815\uc6d0") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='width 0s, height 0s';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
				else {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.ggCurrentLogicStateSize = -1;
		me.__61.ggCurrentLogicStateVisible = -1;
		me.__61.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__61.childNodes.length; i++) {
				var child=me.__61.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__61.ggUpdatePosition=function (useTransition) {
			me.__61.ggUpdate();
		}
		me.__18a.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__60;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__60.ggUpdating == true) return;
			me.__60.ggUpdating = true;
			var el=me.__60;
			var curNumRows = 0;
			curNumRows = me.__60.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__60.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__60.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__60.getFilteredNodes(tourNodes, filter);
			me.__60.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__60.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__60.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__60.ggWidth) + 'px';
				parameter.width=me.__60.ggWidth + 'px';
				parameter.height=me.__60.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__60_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__60.ggNodeCount = me.__60.ggNumFilterPassed;
			me.__60.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__60.parentNode && me.__60.parentNode.classList.contains('ggskin_subelement') && me.__60.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__60.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "지하";
		el.ggFilter[2] = "수영장";
		el.ggId="\uc9c0\ud558\uce35-\uc218\uc601\uc7a5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__60.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__60.ggCurrentLogicStateSize = newLogicStateSize;
				me.__60.style.transition='width 0s, height 0s';
				if (me.__60.ggCurrentLogicStateSize == 0) {
					me.__60.ggWidth=100;
					me.__60.ggHeight=150;
					me.__60.ggUpdate();
					skin.updateSize(me.__60);
				}
				else {
					me.__60.ggWidth=150;
					me.__60.ggHeight=200;
					me.__60.ggUpdate();
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_size();
		me.__60.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc218\uc601\uc7a5") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60.style.transition='width 0s, height 0s';
				if (me.__60.ggCurrentLogicStateVisible == 0) {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
				else {
					me.__60.style.visibility="hidden";
					me.__60.ggVisible=false;
				}
			}
		}
		me.__60.logicBlock_visible();
		me.__60.ggCurrentLogicStateSize = -1;
		me.__60.ggCurrentLogicStateVisible = -1;
		me.__60.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__60.childNodes.length; i++) {
				var child=me.__60.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__60.ggUpdatePosition=function (useTransition) {
			me.__60.ggUpdate();
		}
		me.__18a.appendChild(me.__60);
		me._scrollarea_1__content.appendChild(me.__18a);
		me.__59.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__59);
		el=me.__26=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 380px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((380px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='right 0s, top 0s, transform 0s';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.right='2px';
					me.__26.style.top = 'calc(50% - (380px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__26.style.right='15px';
					me.__26.style.top='calc(50% - ((380px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__26.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__26.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__26.style.transition='right 0s, top 0s, transform 0s';
				if (me.__26.ggCurrentLogicStateScaling == 0) {
					me.__26.ggParameter.sx = 0.75;
					me.__26.ggParameter.sy = 0.7;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
				else {
					me.__26.ggParameter.sx = 1;
					me.__26.ggParameter.sy = 1;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
			}
		}
		me.__26.logicBlock_scaling();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
				else if (me.__56.ggCurrentLogicStateVisible == 1) {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
				else {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__8.style.transition='none';
				me.__8.style.visibility='hidden';
				me.__8.ggVisible=false;
			}
		}
		me.__56.onmouseover=function (e) {
			me.elementMouseOver['_56']=true;
		}
		me.__56.onmousemove=function (e) {
			me.__57.style.transition='none';
			me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
			me.__57.ggVisible=true;
		}
		me.__56.onmouseout=function (e) {
			me.elementMouseOver['_56']=false;
		}
		me.__56.ggCurrentLogicStateVisible = -1;
		me.__56.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_56']) {
				me.__57.style.transition='none';
				me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
				me.__57.ggVisible=true;
			}
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__210.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__210.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateBackgroundColor == 0) {
					me.__210.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__210.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__210.logicBlock_backgroundcolor();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__210);
		el=me.__58=document.createElement('div');
		els=me.__58__img=document.createElement('img');
		els.className='ggskin ggskin__58';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__58);
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
				else {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__57);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__57.style.transition='none';
			me.__57.style.visibility='hidden';
			me.__57.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me._timer_1);
		me.__29.appendChild(me.__56);
		el=me.__52=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__52.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__52.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__52.style.transition='';
				if (me.__52.ggCurrentLogicStateVisible == 0) {
					me.__52.style.visibility="hidden";
					me.__52.ggVisible=false;
				}
				else if (me.__52.ggCurrentLogicStateVisible == 1) {
					me.__52.style.visibility="hidden";
					me.__52.ggVisible=false;
				}
				else {
					me.__52.style.visibility=(Number(me.__52.style.opacity)>0||!me.__52.style.opacity)?'inherit':'hidden';
					me.__52.ggVisible=true;
				}
			}
		}
		me.__52.logicBlock_visible();
		me.__52.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me.__11.ggVisible = !me.__11.ggVisible;
				var flag=me.__11.ggVisible;
				me.__11.style.transition='none';
				me.__11.style.visibility=((flag)&&(Number(me.__11.style.opacity)>0||!me.__11.style.opacity))?'inherit':'hidden';
			}
			me.__55.ggVisible = !me.__55.ggVisible;
			var flag=me.__55.ggVisible;
			me.__55.style.transition='none';
			me.__55.style.visibility=((flag)&&(Number(me.__55.style.opacity)>0||!me.__55.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__3.style.transition='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__8.ggVisible = !me.__8.ggVisible;
				var flag=me.__8.ggVisible;
				me.__8.style.transition='none';
				me.__8.style.visibility=((flag)&&(Number(me.__8.style.opacity)>0||!me.__8.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__52.onmouseover=function (e) {
			me.elementMouseOver['_52']=true;
		}
		me.__52.onmousemove=function (e) {
			me.__53.style.transition='none';
			me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
			me.__53.ggVisible=true;
		}
		me.__52.onmouseout=function (e) {
			me.elementMouseOver['_52']=false;
		}
		me.__52.ggCurrentLogicStateVisible = -1;
		me.__52.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_52']) {
				me.__53.style.transition='none';
				me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
				me.__53.ggVisible=true;
			}
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		els=me.__54__img=document.createElement('img');
		els.className='ggskin ggskin__54';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaUlEQVR4nO3dwUrEMBRA0VdxreL/f6MM/kBcuFJ0IaZ6Kefsmxm4pClNp3OstYaOu//+AnwkSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzv2ug4zhsPc7MWuv4zfFmSIwgMYLECBKzbVH/xq8WuB/66qLi7M/ffiFjhsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzNn7IX/pL/deTmOGxAgSI0iMIDGCxAgSI0iMIDGCxAgSc6VbJ5f4fYoZEiNIjCAxV1pDPlszcztx/Kc54Zb/lYO8zszziePfZuZx96BOWTGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMID'+
			'GCxAgSI0iMIDGCxFz5MaCHmXk5efztjl1/3+1l/O+8jP9iBIkRJEaQmG2LOnuYITGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgS8wZ7mBnYotOjNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__53);
		me.__29.appendChild(me.__52);
		el=me.__51=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			return (me.__51.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__51.ggTimestamp) / me.__51.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__51.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
				else {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.ggActivate=function () {
			me.__53.style.transition='none';
			me.__53.style.visibility='hidden';
			me.__53.ggVisible=false;
		}
		me.__51.ggCurrentLogicStateVisible = -1;
		me.__51.ggUpdateConditionTimer=function () {
			me.__51.logicBlock_visible();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__51);
		el=me.__47=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 1) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.onclick=function (e) {
			me.__21.style.transition='none';
			me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
			me.__21.ggVisible=true;
			me.__27.style.transition='none';
			me.__27.style.visibility='hidden';
			me.__27.ggVisible=false;
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__11.style.transition='none';
				me.__11.style.visibility='hidden';
				me.__11.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__59.style.transition='none';
			me.__59.style.visibility='hidden';
			me.__59.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__8.style.transition='none';
				me.__8.style.visibility='hidden';
				me.__8.ggVisible=false;
			}
		}
		me.__47.onmouseover=function (e) {
			me.elementMouseOver['_47']=true;
		}
		me.__47.onmousemove=function (e) {
			me.__48.style.transition='none';
			me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
			me.__48.ggVisible=true;
		}
		me.__47.onmouseout=function (e) {
			me.elementMouseOver['_47']=false;
		}
		me.__47.ggCurrentLogicStateVisible = -1;
		me.__47.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_47']) {
				me.__48.style.transition='none';
				me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
				me.__48.ggVisible=true;
			}
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		els=me.__49__img=document.createElement('img');
		els.className='ggskin ggskin__49';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAIFklEQVR4nO2cWawfUxzHP6fL1dbSStW+lapbUoqiCLUkuiCpLR54QYmX2olEYhdC8CQh1gceLIncetAi0UpDxVIaiVaV22jRVqvtbdFqHQ+/89d/xzkzc/6znRvnm0zuMjO/8zvnM2f/zSitNVHhaEDTDkTtqggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRiKeUUmOVUvOUUtuUUnOVUgeVaj9GneSXUqob+ADYv+3f72qtp5SWRgSSTw4YAJu01sPLSic2WTmUAgNgYalpxRqSrgwYvcCZWuuVZaU3qCxDVUspNQo4Fug2x1HAKGA/YE'+
			'9gN2AYsA3YDGwA+szvPwNLgW/Mz6Va674caWbBOKdMGBBwDTGFMRWYDJwO7Fui+b+BL4H3zbFAa/2HJf0sGL0l+iTSWgdzAMcBjwLLAV3j8QfwFnAZUtO6kVplu/YH4PCqyqDxGqKU6gKuAm4ATm7UGdE6YAiwu+VcL1XVDKPGgCilhgDXAncBBzfihJ9WAGdXCQMaAKKUGgDMBO4FDvS4tdVcLAaWmd9/An4FNgK/J64fCoxE+p4xwFhgHHA0sLen278BJ2utl3ve56+a+4gJwEfkb9sXA48BFwAjSsqyAsYDNwNvIyOxPL4sAiZWXkY1gRgMPAL8lSPjy4EHgCNLApClCcgQOQ+Uv4xvA/stEOBw4OOMjO4AepAhrspZkN3AHea+b9sKdQPSpPWY890ZNlyjqbRjHjCq3wEBpiPtb1rm3kAmfHmkgBnIcoVPAS40'+
			'97XDToOxEngNeVBcNr8Hju43QIBZwPaUDH2FjFpa12dpDPJk+j7NySd7TAaMXsw8AzgD+DrF3mrgxOCBAPenZGIbcDcwKHFPmi4HNhWE0Tq24K61/8Jo86sLeAh3bdkInBosEKTTcxXGctcTlaKZKYVR5vEfGAn/piCTRtu964DxwQEB7knJ8HvAiJR7bbqU9GbvC+A2YBIyp+kyPyeZ/3/hAwPSywOZw/Q6bPwIHBwMEOBKZNHO5uyLwOCM+5Mai7uZ+g4ZMOTRdGSW7YKxqgUjC4jx8xBk1dhm61NgaONAkOHqVoeTT+a00S6FuwPvAfbKCQOkA/8lBchC2kZfOX09ABla2+y91CgQ45wrw0952GnXDIe9ucBATxh55hkzfIAYf8cAa1z2GgGCbAF/4HDqFcxaWQdAbMsr3wHDK4ChTXpeQIzPZ2BvGVYBezcB5B'+
			'ZHBj8EujxttRekzea0kmCsdvy/2xeI8XuWw95LtQIBRiMrrElH1gGHdGCvpTssNheVBKMX6cA/t5y7s0MgCnjHkd65dQJ50+HEpR3aa6nHYvP2EmGADImT53s6AWJ8PxCZICZtflwLEOAcR6afLwC4pW8tdieVCANgouWaZZ0CMf7f5Ej7wjqA2CZcfaRM/DyA2J60rI0sHxggG1TJ6zYWBNKFvX/62sdOmYFyg5AAgaKyzTFWp1yfFh2yAjgbgdKu33Km66Md5iimkpus1yuqIa4tV9+a0ZKthmzqtDyM/zMdflxUeZNlHHB16tcUBGLrQ2zRKJ3CgJL7EGAfZG+/mU7dOOEa9vYBRxUAkmeUVQQGwK2W+4qMslwP53m1ATGO2DKmkXH+sA6BZM1DisKAcuchVzt86aj5LgokbemkB49ggESB2+xNKwnGVMf93jN1'+
			'4CTsrcR64KDagRin0hYXXyDnelZCtj3z3pR08sLYA3sf5b2WhQT3/ejw56qOy7MoEOPcZNzL78/lgZLQDIetIjAGYu+fNJ6rvUjU/RKHrZcLlWUZQIyTaRtUrwFDPIAoYH6JMEYAcxw25uOxH4LMd75y2PoMz76zMiDG2bQt3A+BkTmBgOwYbkmxtwYZ6aVJAZfgjqbvQ7Zl/1VG/o5AtgFstsLawm1zOi3IYQVwWk4g3WTHdC1CRnoT2RlqOsL8fas577p3O3BFMtGUfE0G1jpsrSfEIIecUFrhmEMT9yRhdBJRmPfYAVxnewoseRmEBIa7gi3CDgNqy0hWoNwyYKoFSNUw+pA4L6sSeTgFd3+h6S+Bcm0ZyhNK2oO8OZUFYxXwSUEY80n0GTYgSGTJM6THg/1AfwolbYMymuxg67+RCaYrEK0XGU21Ynt9wXzCf2'+
			'N7bToUeBr3EL51zKM/Blu3QRmMvDuY53UEF4ykupHljtlI89eK4dpk/p5tzqdFv4NsGVyM1NS0Jlab8w+SCIPtd0DawJyAX+T6NuBZ5IWd4RkF66NjgRsNhLwxw19Swws7Tb7Sdh+y7JJXGnkFYDEyF/iena+0bQD+RJ7gAeZovdI2EjgMeQFoHPKCzkiPdPuAh4EntNbbPe7rSE2+9Hk8MlksulNXlTYj/cnjWut1dSXayJcczEv5cwgTxlrgeSTqcm3didcOJOMLCT8jnfH5ZC+LlKk/kTDVV4HZWuutNaa9i2oFkgFjl/fAlVLjkD2Qs5BPa4wq0ZXMT2s0pdr6EB8Yjvv3Z+eHZ45Bgp33NcceSCc+xFy+BRmhrUc6/ZXs/PjMEnJ+fKYJ1QKkKIz/kyr/gFmE4adKa4hS6khgARFGblVdQ54jwvBS1TWkD+lw'+
			'2xVhpKjqGrIg8XeEkaGqgVyPzMjXmJ8RRoYa/6Jc1K6K3+0NTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpj+AeF2nLPgYqQEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__49);
		el=me.__48=document.createElement('div');
		els=me.__48__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__48.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__48.ggUpdateText();
		el.appendChild(els);
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__48);
		me.__29.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			return (me.__46.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__46.ggTimestamp) / me.__46.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__46.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__46.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__46.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__46.style.transition='';
				if (me.__46.ggCurrentLogicStateVisible == 0) {
					me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
					me.__46.ggVisible=true;
				}
				else {
					me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
					me.__46.ggVisible=true;
				}
			}
		}
		me.__46.logicBlock_visible();
		me.__46.ggActivate=function () {
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
		}
		me.__46.ggCurrentLogicStateVisible = -1;
		me.__46.ggUpdateConditionTimer=function () {
			me.__46.logicBlock_visible();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__46);
		el=me.__42=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__42.style.transition='';
				if (me.__42.ggCurrentLogicStateVisible == 0) {
					me.__42.style.visibility="hidden";
					me.__42.ggVisible=false;
				}
				else if (me.__42.ggCurrentLogicStateVisible == 1) {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
				else {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
			}
		}
		me.__42.logicBlock_visible();
		me.__42.onclick=function (e) {
			player.toggleAutorotate();
			me.__45.ggVisible = !me.__45.ggVisible;
			var flag=me.__45.ggVisible;
			me.__45.style.transition='none';
			me.__45.style.visibility=((flag)&&(Number(me.__45.style.opacity)>0||!me.__45.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__42.onmouseover=function (e) {
			me.elementMouseOver['_42']=true;
		}
		me.__42.onmousemove=function (e) {
			me.__43.style.transition='none';
			me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
			me.__43.ggVisible=true;
		}
		me.__42.onmouseout=function (e) {
			me.elementMouseOver['_42']=false;
		}
		me.__42.ggCurrentLogicStateVisible = -1;
		me.__42.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_42']) {
				me.__43.style.transition='none';
				me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
				me.__43.ggVisible=true;
			}
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		els=me.__44__img=document.createElement('img');
		els.className='ggskin ggskin__44';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__44);
		el=me.__43=document.createElement('div');
		els=me.__43__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__43.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__43.ggUpdateText();
		el.appendChild(els);
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__43);
		me.__29.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			return (me.__41.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__41.ggTimestamp) / me.__41.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__41.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
				else {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.ggActivate=function () {
			me.__43.style.transition='none';
			me.__43.style.visibility='hidden';
			me.__43.ggVisible=false;
		}
		me.__41.ggCurrentLogicStateVisible = -1;
		me.__41.ggUpdateConditionTimer=function () {
			me.__41.logicBlock_visible();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__41);
		el=me.__36=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
				else if (me.__36.ggCurrentLogicStateVisible == 1) {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
				else {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__40.ggVisible = !me.__40.ggVisible;
			var flag=me.__40.ggVisible;
			me.__40.style.transition='none';
			me.__40.style.visibility=((flag)&&(Number(me.__40.style.opacity)>0||!me.__40.style.opacity))?'inherit':'hidden';
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
		}
		me.__36.onmouseover=function (e) {
			me.elementMouseOver['_36']=true;
		}
		me.__36.onmousemove=function (e) {
			me.__39.style.transition='none';
			me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
			me.__39.ggVisible=true;
		}
		me.__36.onmouseout=function (e) {
			me.elementMouseOver['_36']=false;
		}
		me.__36.ggCurrentLogicStateVisible = -1;
		me.__36.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_36']) {
				me.__39.style.transition='none';
				me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
				me.__39.ggVisible=true;
			}
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__40);
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__39);
		el=me.__38=document.createElement('div');
		els=me.__38__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__38.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38.ggUpdateText();
		el.appendChild(els);
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__img=document.createElement('img');
		els.className='ggskin ggskin__37';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.onclick=function (e) {
			me.__39.style.transition='none';
			me.__39.style.visibility='hidden';
			me.__39.ggVisible=false;
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__37);
		me.__29.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			return (me.__35.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__35.ggTimestamp) / me.__35.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__35.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
				else {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.ggActivate=function () {
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			me.__39.style.transition='none';
			me.__39.style.visibility='hidden';
			me.__39.ggVisible=false;
		}
		me.__35.ggCurrentLogicStateVisible = -1;
		me.__35.ggUpdateConditionTimer=function () {
			me.__35.logicBlock_visible();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__35);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__31.style.transition='';
				if (me.__31.ggCurrentLogicStateVisible == 0) {
					me.__31.style.visibility="hidden";
					me.__31.ggVisible=false;
				}
				else if (me.__31.ggCurrentLogicStateVisible == 1) {
					me.__31.style.visibility="hidden";
					me.__31.ggVisible=false;
				}
				else {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
			}
		}
		me.__31.logicBlock_visible();
		me.__31.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__31.onmouseover=function (e) {
			me.elementMouseOver['_31']=true;
		}
		me.__31.onmousemove=function (e) {
			me.__32.style.transition='none';
			me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
			me.__32.ggVisible=true;
		}
		me.__31.onmouseout=function (e) {
			me.elementMouseOver['_31']=false;
		}
		me.__31.ggCurrentLogicStateVisible = -1;
		me.__31.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_31']) {
				me.__32.style.transition='none';
				me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
				me.__32.ggVisible=true;
			}
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD0UlEQVR4nO2c207VQBSGv228NxAwHjAQI2o8QDwlRG+88M4n4BF8Ax/MCzzENyBR4yFEAU9BEIm+Qb0YagBn9t6ddqZ/m/UlvdmdWdOuj9J275k1KIoCQ4djbR+AcRgTIoYJEcOEiGFCxDAhYpgQMUyIGCZEDBMihgkRw4SoURRF5Q0oEm8Pc50/8CTheRRAUSW3doWIYULEMCFimBA1Et3UPwCnWzqlXCwAP2n4pp7yKWsNOJszQxkZWwZCQgrgI3AuX56yMEyG9/O2hOwFPl8HZnNlKzGjZCz69rUl5AbwK7BvE5jLkrJ0jCMD3/62hLB/UKGD/gycT5qydIwrA1+bNoUAXAN2Am2+AhfS5CwZo2QsHGkvJw'+
			'TgCrAdaPcduNhszpJRVQa+tgpCAC4DW4G2W/v7lYmRga+9ihCAS7grwtf+B+5KUiRWBr4+SkIA5nH3Dl+fHeBqXM6SUUcGvn5qQsA9XX0ZcpKL4a5ZqSsDX19FIeDeQzYDfXdx7zFt0oQMfP1VhYB7Y98I9N8Dbo4Zp2makoEvhrIQcN9tfQrE+A3crhCrCZqUgS+OuhBw3wKvBeL8AZYqxoulaRn4YnVBCMAZ3O8mISl3I2JWIYUMfPG6IgTgFPA+EO9FZMxxeRoYt44MfDGr5PZ45KCPaxzwQbaB+8BLDr+PrAHLDY0RYhkn/eDT3S7wAHhTI2693EReIU0zDbzG/UV9A2ZSDOJhElilmSsjSI5/WSmYAp7hvm7JySSwAlxPNUCV3A5iEjwYDBIcdn+pkmObBiSGCRHDhIhhQsQwIWKYEDFMiBgmRAwTIoYJEcOE'+
			'iGFCxDAhYpgQMUyIGCZEDBMihgkRw4SIYULEMCFimBAxTIgYSkIWcBPWJjKPO4+b5zuVeVw/IjMXD85EXyWflBnc1NUCeIWb0lqXiaNbjqmk654tFt+ygBxSpvl/5v1b4GTNuJ1ejjBsjcZKnayMwfPAuO9wyyRi6ayQKvVDUnAPtzDIN36dAmydFNK2jJIlwlJiC7B1ToiKjJI7uMWmvuOJKcDWKSFqMkpu0VwBts4IUZVR0lQBtk4IUZdRskj9AmzyQlItP05F3QJs0kK6JqOkTgE2WSFdlVESW4BNUkjXZZTEFGCTE9IXGSVVC7BJCembjJIqBdhkhPRVRskc4xVgkxHSZxkls4wuwCYjpO8ySkYVYJMV0kcZJcMKsEkK6bOMkmEF2OSE1N0epc3lP05kOJdKQpRmnRhoTQMyMCFymBAxoirKGemwK0QMEyKGCR'+
			'HDhIhhQsQwIWKYEDFMiBgmRAwTIsZfnQGwNRLcyH4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__32);
		me.__29.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			return (me.__30.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__30.ggTimestamp) / me.__30.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__30.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
				else {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.ggActivate=function () {
			me.__32.style.transition='none';
			me.__32.style.visibility='hidden';
			me.__32.ggVisible=false;
		}
		me.__30.ggCurrentLogicStateVisible = -1;
		me.__30.ggUpdateConditionTimer=function () {
			me.__30.logicBlock_visible();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__30);
		me._rectangle_2.appendChild(me.__29);
		me.__26.appendChild(me._rectangle_2);
		el=me.__27=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me._up);
		el=me.__28=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_28'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__28.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__28.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__28.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__28.ggCurrentLogicStatePosition == 0) {
					me.__28.style.left='-10px';
					me.__28.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__28.ggCurrentLogicStatePosition == 1) {
					me.__28.style.left='20px';
					me.__28.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__28.style.left='0px';
					me.__28.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__28.logicBlock_position();
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else if (me.__28.ggCurrentLogicStateVisible == 1) {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
				else {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__28.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__28.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__28.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__28.ggCurrentLogicStateAlpha == 0) {
					me.__28.style.visibility=me.__28.ggVisible?'inherit':'hidden';
					me.__28.style.opacity=1;
				}
				else if (me.__28.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__28.style.opacity == 0.0) { me.__28.style.visibility="hidden"; } }, 505);
					me.__28.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__28.style.opacity == 0.0) { me.__28.style.visibility="hidden"; } }, 505);
					me.__28.style.opacity=0;
				}
			}
		}
		me.__28.logicBlock_alpha();
		me.__28.onmouseover=function (e) {
			me.elementMouseOver['_28']=true;
			me.__28.logicBlock_position();
		}
		me.__28.onmouseout=function (e) {
			me.elementMouseOver['_28']=false;
			me.__28.logicBlock_position();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__28.appendChild(me._rectangle_3);
		me.__27.appendChild(me.__28);
		me.__26.appendChild(me.__27);
		me.divSkin.appendChild(me.__26);
		el=me.__21=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__21.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__11.style.transition='none';
				me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
				me.__11.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__59.style.transition='none';
			me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
			me.__59.ggVisible=true;
			me.__27.style.transition='none';
			me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
			me.__27.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__21.style.transition='none';
			me.__21.style.visibility='hidden';
			me.__21.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__8.style.transition='none';
				me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
				me.__8.ggVisible=true;
			}
		}
		me.__21.onmouseover=function (e) {
			me.elementMouseOver['_21']=true;
		}
		me.__21.onmousemove=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
			me.__23.ggVisible=true;
		}
		me.__21.onmouseout=function (e) {
			me.elementMouseOver['_21']=false;
		}
		me.__21.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_21']) {
				me.__23.style.transition='none';
				me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
				me.__23.ggVisible=true;
			}
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__img=document.createElement('img');
		els.className='ggskin ggskin__24';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__23);
		el=me.__22=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return (me.__22.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__22.ggTimestamp) / me.__22.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__22.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
				else {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggActivate=function () {
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
		}
		me.__22.ggCurrentLogicStateVisible = -1;
		me.__22.ggUpdateConditionTimer=function () {
			me.__22.logicBlock_visible();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__22);
		me.divSkin.appendChild(me.__21);
		el=me.__11=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__11.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__11.ggCurrentLogicStatePosition == 0) {
					me.__11.style.left='10px';
					me.__11.style.top='45px';
				}
				else {
					me.__11.style.left='15px';
					me.__11.style.top='80px';
				}
			}
		}
		me.__11.logicBlock_position();
		me.__11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__11.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__11.ggCurrentLogicStateSize = newLogicStateSize;
				me.__11.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__11.ggCurrentLogicStateSize == 0) {
					me.__11.style.width='110px';
					me.__11.style.height='100px';
					skin.updateSize(me.__11);
				}
				else if (me.__11.ggCurrentLogicStateSize == 1) {
					me.__11.style.width='200px';
					me.__11.style.height='200px';
					skin.updateSize(me.__11);
				}
				else {
					me.__11.style.width='200px';
					me.__11.style.height='200px';
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_size();
		me.__11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__11.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__11.ggCurrentLogicStateScaling == 0) {
					me.__11.ggParameter.sx = 0.85;
					me.__11.ggParameter.sy = 0.8;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
				else {
					me.__11.ggParameter.sx = 1;
					me.__11.ggParameter.sy = 1;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_scaling();
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
				else if (me.__11.ggCurrentLogicStateVisible == 1) {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
				else if (me.__11.ggCurrentLogicStateVisible == 2) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else if (me.__11.ggCurrentLogicStateVisible == 3) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.onclick=function (e) {
			me.__3.style.transition='none';
			me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
			me.__3.ggVisible=true;
			me.__11.style.transition='none';
			me.__11.style.visibility='hidden';
			me.__11.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style.transition='width 0s, height 0s';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='65px';
					me._rectangle_41.style.height='30px';
					me._rectangle_41.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='100px';
					me._rectangle_41.style.height='40px';
					me._rectangle_41.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_41);
				}
			}
		}
		me._rectangle_41.logicBlock_size();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__19.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__19.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__19.style.transition='transform 0s';
				if (me.__19.ggCurrentLogicStateScaling == 0) {
					me.__19.ggParameter.sx = 0.7;
					me.__19.ggParameter.sy = 0.7;
					me.__19.style.transform=parameterToTransform(me.__19.ggParameter);
					skin.updateSize(me.__19);
				}
				else {
					me.__19.ggParameter.sx = 1;
					me.__19.ggParameter.sy = 1;
					me.__19.style.transform=parameterToTransform(me.__19.ggParameter);
					skin.updateSize(me.__19);
				}
			}
		}
		me.__19.logicBlock_scaling();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__19);
		me.__17.appendChild(me._rectangle_41);
		el=me._map_11=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_11.style.transition='';
				if (me._map_11.ggCurrentLogicStateVisible == 0) {
					me._map_11.style.visibility=(Number(me._map_11.style.opacity)>0||!me._map_11.style.opacity)?'inherit':'hidden';
					if (me._map_11.ggMapNotLoaded && me._map_11.ggInitMap) {
						me._map_11.ggInitMap(false);
						me._map_11.ggInitMapMarkers(true);
					}
					me._map_11.ggVisible=true;
				}
				else {
					me._map_11.style.visibility="hidden";
					if (me._map_11.ggClearMap) me._map_11.ggClearMap();
					me._map_11.ggVisible=false;
				}
			}
		}
		me._map_11.logicBlock_visible();
		me._map_11.ggCurrentLogicStateVisible = -1;
		me._map_11.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
		}
		me._map_11.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_11.ggUpdateConditionResize();
		}
		me.__17.appendChild(me._map_11);
		el=me._map_21=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_21.style.transition='';
				if (me._map_21.ggCurrentLogicStateVisible == 0) {
					me._map_21.style.visibility=(Number(me._map_21.style.opacity)>0||!me._map_21.style.opacity)?'inherit':'hidden';
					if (me._map_21.ggMapNotLoaded && me._map_21.ggInitMap) {
						me._map_21.ggInitMap(false);
						me._map_21.ggInitMapMarkers(true);
					}
					me._map_21.ggVisible=true;
				}
				else {
					me._map_21.style.visibility="hidden";
					if (me._map_21.ggClearMap) me._map_21.ggClearMap();
					me._map_21.ggVisible=false;
				}
			}
		}
		me._map_21.logicBlock_visible();
		me._map_21.ggCurrentLogicStateVisible = -1;
		me._map_21.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
		}
		me._map_21.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_21.ggUpdateConditionResize();
		}
		me.__17.appendChild(me._map_21);
		el=me._map_31=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 3";
		el.ggDx=0;
		el.ggDy=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 11px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_31.style.transition='';
				if (me._map_31.ggCurrentLogicStateVisible == 0) {
					me._map_31.style.visibility=(Number(me._map_31.style.opacity)>0||!me._map_31.style.opacity)?'inherit':'hidden';
					if (me._map_31.ggMapNotLoaded && me._map_31.ggInitMap) {
						me._map_31.ggInitMap(false);
						me._map_31.ggInitMapMarkers(true);
					}
					me._map_31.ggVisible=true;
				}
				else {
					me._map_31.style.visibility="hidden";
					if (me._map_31.ggClearMap) me._map_31.ggClearMap();
					me._map_31.ggVisible=false;
				}
			}
		}
		me._map_31.logicBlock_visible();
		me._map_31.ggCurrentLogicStateVisible = -1;
		me._map_31.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_31.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_31.ggCalculateFloorplanSize(mapDetails);
				me._map_31.ggShowSimpleFloorplan(mapDetails);
				me._map_31.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_31.ggRadar) me._map_31.ggRadar.update();
		}
		me._map_31.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_31.ggMarkerInstances.length; i++) {
				me._map_31.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_31.ggUpdateConditionResize();
		}
		me.__17.appendChild(me._map_31);
		el=me.__18=document.createElement('div');
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 20px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__18);
		me.__11.appendChild(me.__17);
		el=me.__15=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
				else {
					me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
					me.__15.ggVisible=true;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__16.ggCurrentLogicStateText != newLogicStateText) {
				me.__16.ggCurrentLogicStateText = newLogicStateText;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateText == 0) {
					if (me.__16.ggUpdateText) {
					me.__16.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__16.ggUpdateText();
					} else {
						if (me.__16.ggUpdatePosition) me.__16.ggUpdatePosition();
					}
				}
				else if (me.__16.ggCurrentLogicStateText == 1) {
					if (me.__16.ggUpdateText) {
					me.__16.ggUpdateText=function() {
						var params = [];
						var hs = player._("3\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__16.ggUpdateText();
					} else {
						if (me.__16.ggUpdatePosition) me.__16.ggUpdatePosition();
					}
				}
				else if (me.__16.ggCurrentLogicStateText == 2) {
					if (me.__16.ggUpdateText) {
					me.__16.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__16.ggUpdateText();
					} else {
						if (me.__16.ggUpdatePosition) me.__16.ggUpdatePosition();
					}
				}
				else {
					if (me.__16.ggUpdateText) {
					me.__16.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__16.ggUpdateText();
					} else {
						if (me.__16.ggUpdatePosition) me.__16.ggUpdatePosition();
					}
				}
			}
		}
		me.__16.logicBlock_text();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_60=document.createElement('div');
		els=me._image_60__img=document.createElement('img');
		els.className='ggskin ggskin_image_60';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_60.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_60.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_60.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_60.style.transition='transform 0s';
				if (me._image_60.ggCurrentLogicStateAngle == 0) {
					me._image_60.ggParameter.a = 0;
					me._image_60.style.transform=parameterToTransform(me._image_60.ggParameter);
				}
				else {
					me._image_60.ggParameter.a = 180;
					me._image_60.style.transform=parameterToTransform(me._image_60.ggParameter);
				}
			}
		}
		me._image_60.logicBlock_angle();
		me._image_60.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_60);
		me.__15.appendChild(me.__16);
		me.__11.appendChild(me.__15);
		el=me.__12=document.createElement('div');
		el.ggId="\uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc9c0\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.onclick=function (e) {
			player.openNext("{node14}","");
			player.setVariableValue('vis_onefloor', true);
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 1px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__13.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__13.ggUpdateText();
		el.appendChild(els);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node4}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__13);
		el=me.__20=document.createElement('div');
		els=me.__20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__20.ggUpdateText=function() {
			var params = [];
			var hs = player._("3\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20.ggUpdateText();
		el.appendChild(els);
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node8}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__20);
		me.__11.appendChild(me.__12);
		me.divSkin.appendChild(me.__11);
		el=me.__8=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 125px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__8.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__8.ggCurrentLogicStatePosition == 0) {
					me.__8.style.left='5px';
					me.__8.style.bottom='-120px';
				}
				else {
					me.__8.style.left='5px';
					me.__8.style.bottom='0px';
				}
			}
		}
		me.__8.logicBlock_position();
		me.__8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__8.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__8.ggCurrentLogicStateVisible == 0) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 1) {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 2) {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 3) {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
				else {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
			}
		}
		me.__8.logicBlock_visible();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.onclick=function (e) {
			me.__3.style.transition='none';
			me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
			me.__3.ggVisible=true;
			me.__8.style.transition='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_10.style.transition='';
				if (me._map_10.ggCurrentLogicStateVisible == 0) {
					me._map_10.style.visibility=(Number(me._map_10.style.opacity)>0||!me._map_10.style.opacity)?'inherit':'hidden';
					if (me._map_10.ggMapNotLoaded && me._map_10.ggInitMap) {
						me._map_10.ggInitMap(false);
						me._map_10.ggInitMapMarkers(true);
					}
					me._map_10.ggVisible=true;
				}
				else {
					me._map_10.style.visibility="hidden";
					if (me._map_10.ggClearMap) me._map_10.ggClearMap();
					me._map_10.ggVisible=false;
				}
			}
		}
		me._map_10.logicBlock_visible();
		me._map_10.ggCurrentLogicStateVisible = -1;
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__10.appendChild(me._map_10);
		el=me._map_20=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_20.style.transition='';
				if (me._map_20.ggCurrentLogicStateVisible == 0) {
					me._map_20.style.visibility=(Number(me._map_20.style.opacity)>0||!me._map_20.style.opacity)?'inherit':'hidden';
					if (me._map_20.ggMapNotLoaded && me._map_20.ggInitMap) {
						me._map_20.ggInitMap(false);
						me._map_20.ggInitMapMarkers(true);
					}
					me._map_20.ggVisible=true;
				}
				else {
					me._map_20.style.visibility="hidden";
					if (me._map_20.ggClearMap) me._map_20.ggClearMap();
					me._map_20.ggVisible=false;
				}
			}
		}
		me._map_20.logicBlock_visible();
		me._map_20.ggCurrentLogicStateVisible = -1;
		me._map_20.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
		}
		me._map_20.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_20.ggUpdateConditionResize();
		}
		me.__10.appendChild(me._map_20);
		el=me._map_30=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0.01;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0.01%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_30.style.transition='';
				if (me._map_30.ggCurrentLogicStateVisible == 0) {
					me._map_30.style.visibility=(Number(me._map_30.style.opacity)>0||!me._map_30.style.opacity)?'inherit':'hidden';
					if (me._map_30.ggMapNotLoaded && me._map_30.ggInitMap) {
						me._map_30.ggInitMap(false);
						me._map_30.ggInitMapMarkers(true);
					}
					me._map_30.ggVisible=true;
				}
				else {
					me._map_30.style.visibility="hidden";
					if (me._map_30.ggClearMap) me._map_30.ggClearMap();
					me._map_30.ggVisible=false;
				}
			}
		}
		me._map_30.logicBlock_visible();
		me._map_30.ggCurrentLogicStateVisible = -1;
		me._map_30.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_30.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_30.ggCalculateFloorplanSize(mapDetails);
				me._map_30.ggShowSimpleFloorplan(mapDetails);
				me._map_30.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_30.ggRadar) me._map_30.ggRadar.update();
		}
		me._map_30.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_30.ggMarkerInstances.length; i++) {
				me._map_30.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_30.ggUpdateConditionResize();
		}
		me.__10.appendChild(me._map_30);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._text_4);
		me.__8.appendChild(me.__10);
		el=me._m3=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m3.style.transition='';
				if (me._m3.ggCurrentLogicStateVisible == 0) {
					me._m3.style.visibility="hidden";
					me._m3.ggVisible=false;
				}
				else {
					me._m3.style.visibility=(Number(me._m3.style.opacity)>0||!me._m3.style.opacity)?'inherit':'hidden';
					me._m3.ggVisible=true;
				}
			}
		}
		me._m3.logicBlock_visible();
		me._m3.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		el=me._m4=document.createElement('div');
		els=me._m4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m4.ggUpdateText();
		el.appendChild(els);
		me._m4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m4.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._m4.ggCurrentLogicStateText != newLogicStateText) {
				me._m4.ggCurrentLogicStateText = newLogicStateText;
				me._m4.style.transition='';
				if (me._m4.ggCurrentLogicStateText == 0) {
					if (me._m4.ggUpdateText) {
					me._m4.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m4.ggUpdateText();
					} else {
						if (me._m4.ggUpdatePosition) me._m4.ggUpdatePosition();
					}
				}
				else if (me._m4.ggCurrentLogicStateText == 1) {
					if (me._m4.ggUpdateText) {
					me._m4.ggUpdateText=function() {
						var params = [];
						var hs = player._("3\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m4.ggUpdateText();
					} else {
						if (me._m4.ggUpdatePosition) me._m4.ggUpdatePosition();
					}
				}
				else if (me._m4.ggCurrentLogicStateText == 2) {
					if (me._m4.ggUpdateText) {
					me._m4.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m4.ggUpdateText();
					} else {
						if (me._m4.ggUpdatePosition) me._m4.ggUpdatePosition();
					}
				}
				else {
					if (me._m4.ggUpdateText) {
					me._m4.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m4.ggUpdateText();
					} else {
						if (me._m4.ggUpdatePosition) me._m4.ggUpdatePosition();
					}
				}
			}
		}
		me._m4.logicBlock_text();
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6m=document.createElement('div');
		els=me._image_6m__img=document.createElement('img');
		els.className='ggskin ggskin_image_6m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_6m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_6m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_6m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_6m.style.transition='transform 0s';
				if (me._image_6m.ggCurrentLogicStateAngle == 0) {
					me._image_6m.ggParameter.a = 0;
					me._image_6m.style.transform=parameterToTransform(me._image_6m.ggParameter);
				}
				else {
					me._image_6m.ggParameter.a = 180;
					me._image_6m.style.transform=parameterToTransform(me._image_6m.ggParameter);
				}
			}
		}
		me._image_6m.logicBlock_angle();
		me._image_6m.ggUpdatePosition=function (useTransition) {
		}
		me._m4.appendChild(me._image_6m);
		me._m3.appendChild(me._m4);
		me.__8.appendChild(me._m3);
		el=me._m1=document.createElement('div');
		el.ggId="\uce35\uc218-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 99px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m1.style.transition='';
				if (me._m1.ggCurrentLogicStateVisible == 0) {
					me._m1.style.visibility=(Number(me._m1.style.opacity)>0||!me._m1.style.opacity)?'inherit':'hidden';
					me._m1.ggVisible=true;
				}
				else {
					me._m1.style.visibility="hidden";
					me._m1.ggVisible=false;
				}
			}
		}
		me._m1.logicBlock_visible();
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m0=document.createElement('div');
		els=me.__1m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m0.ggUpdateText();
		el.appendChild(els);
		me.__1m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1m0.onclick=function (e) {
			player.openNext("{node4}","");
			player.setVariableValue('vis_onefloor', true);
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__1m0.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me.__1m0);
		el=me.__2m0=document.createElement('div');
		els=me.__2m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("3\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m0.ggUpdateText();
		el.appendChild(els);
		me.__2m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m0.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node8}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__2m0.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me.__2m0);
		el=me._m2=document.createElement('div');
		els=me._m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc9c0\ud558-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m2.ggUpdateText();
		el.appendChild(els);
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node14}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me._m2);
		me.__8.appendChild(me._m1);
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style.transition='width 0s, height 0s';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='80px';
					me._rectangle_40.style.height='32px';
					me._rectangle_40.style.left = 'calc(50% - (80px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='100px';
					me._rectangle_40.style.height='40px';
					me._rectangle_40.style.left = 'calc(50% - (100px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me._rectangle_40);
				}
			}
		}
		me._rectangle_40.logicBlock_size();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		els=me.__9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__9.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__9.ggUpdateText();
		el.appendChild(els);
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__9.style.transition='transform 0s';
				if (me.__9.ggCurrentLogicStateScaling == 0) {
					me.__9.ggParameter.sx = 0.8;
					me.__9.ggParameter.sy = 0.8;
					me.__9.style.transform=parameterToTransform(me.__9.ggParameter);
					skin.updateSize(me.__9);
				}
				else {
					me.__9.ggParameter.sx = 1;
					me.__9.ggParameter.sy = 1;
					me.__9.style.transform=parameterToTransform(me.__9.ggParameter);
					skin.updateSize(me.__9);
				}
			}
		}
		me.__9.logicBlock_scaling();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__9);
		me.__8.appendChild(me._rectangle_40);
		me.divSkin.appendChild(me.__8);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__3=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 5px)';
					me.__3.style.top = 'calc(50% - (70% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__3.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__3.style.top='calc(50% - ((70% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__3.ggCurrentLogicStateSize == 0) {
					me.__3.style.width='100%';
					me.__3.style.height='100%';
					me.__3.style.left = 'calc(50% - (100% / 2))';
					me.__3.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__3);
				}
				else {
					me.__3.style.width='100%';
					me.__3.style.height='70%';
					me.__3.style.left = 'calc(50% - (100% / 2))';
					me.__3.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_size();
		me.__3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__3.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__3.ggCurrentLogicStateScaling == 0) {
					me.__3.ggParameter.sx = 1;
					me.__3.ggParameter.sy = 0.8;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
				else {
					me.__3.ggParameter.sx = 1;
					me.__3.ggParameter.sy = 1;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_scaling();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6.style.transition='width 0s, height 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6.style.width='100%';
					me.__6.style.height='100%';
					me.__6.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__6);
				}
				else {
					me.__6.style.width='90%';
					me.__6.style.height='100%';
					me.__6.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.onclick=function (e) {
			me.__3.style.transition='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 960))
				)
			) {
				me.__8.style.transition='none';
				me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
				me.__8.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 960))
				)
			) {
				me.__11.style.transition='none';
				me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
				me.__11.ggVisible=true;
			}
			player.setVariableValue('vis_mapangle', false);
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__7.style.transition='width 0s, height 0s';
				if (me.__7.ggCurrentLogicStateSize == 0) {
					me.__7.style.width='90%';
					me.__7.style.height='100%';
					me.__7.style.left = 'calc(50% - (90% / 2))';
					me.__7.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__7);
				}
				else {
					me.__7.style.width='100%';
					me.__7.style.height='100%';
					me.__7.style.left = 'calc(50% - (100% / 2))';
					me.__7.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_size();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__7);
		me.__6.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 84.2262%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((84.2262% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility="hidden";
					if (me._map_1.ggClearMap) me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__6.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 84.23%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((84.23% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__6.appendChild(me._map_2);
		el=me._map_3=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 3-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 84.23%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((84.23% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_3.style.transition='';
				if (me._map_3.ggCurrentLogicStateVisible == 0) {
					me._map_3.style.visibility=(Number(me._map_3.style.opacity)>0||!me._map_3.style.opacity)?'inherit':'hidden';
					if (me._map_3.ggMapNotLoaded && me._map_3.ggInitMap) {
						me._map_3.ggInitMap(false);
						me._map_3.ggInitMapMarkers(true);
					}
					me._map_3.ggVisible=true;
				}
				else {
					me._map_3.style.visibility="hidden";
					if (me._map_3.ggClearMap) me._map_3.ggClearMap();
					me._map_3.ggVisible=false;
				}
			}
		}
		me._map_3.logicBlock_visible();
		me._map_3.ggCurrentLogicStateVisible = -1;
		me._map_3.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_3.ggCalculateFloorplanSize(mapDetails);
				me._map_3.ggShowSimpleFloorplan(mapDetails);
				me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_3.ggRadar) me._map_3.ggRadar.update();
		}
		me._map_3.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_3.ggMarkerInstances.length; i++) {
				me._map_3.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_3.ggUpdateConditionResize();
		}
		me.__6.appendChild(me._map_3);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2.style.transition='right 0s, top 0s';
				if (me._image_2.ggCurrentLogicStatePosition == 0) {
					me._image_2.style.right='15px';
					me._image_2.style.top='15px';
				}
				else {
					me._image_2.style.right='100px';
					me._image_2.style.top='50px';
				}
			}
		}
		me._image_2.logicBlock_position();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._image_2);
		me.__3.appendChild(me.__6);
		el=me.__4=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (65px / 2))';
					me.__4.style.bottom='40px';
				}
				else {
					me.__4.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__4.style.bottom='20px';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='left 0s, bottom 0s';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85-\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((me.ggUserdata.tags.indexOf("\uc9c0\ud558") != -1))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__5.ggCurrentLogicStateText != newLogicStateText) {
				me.__5.ggCurrentLogicStateText = newLogicStateText;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateText == 0) {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
				else if (me.__5.ggCurrentLogicStateText == 1) {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("3\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
				else if (me.__5.ggCurrentLogicStateText == 2) {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
				else {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
			}
		}
		me.__5.logicBlock_text();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6-\ud655\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_6.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_6.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_6.style.transition='transform 0s';
				if (me._image_6.ggCurrentLogicStateAngle == 0) {
					me._image_6.ggParameter.a = 0;
					me._image_6.style.transform=parameterToTransform(me._image_6.ggParameter);
				}
				else {
					me._image_6.ggParameter.a = 180;
					me._image_6.style.transform=parameterToTransform(me._image_6.ggParameter);
				}
			}
		}
		me._image_6.logicBlock_angle();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._image_6);
		me.__4.appendChild(me.__5);
		me.__3.appendChild(me.__4);
		el=me._m=document.createElement('div');
		el.ggId="\uce35\uc218-\ud655\ub300-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m.style.transition='left 0s, bottom 0s';
				if (me._m.ggCurrentLogicStatePosition == 0) {
					me._m.style.left = 'calc(50% - (60px / 2))';
					me._m.style.bottom='40px';
				}
				else {
					me._m.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me._m.style.bottom='20px';
				}
			}
		}
		me._m.logicBlock_position();
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='left 0s, bottom 0s';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m=document.createElement('div');
		els=me.__1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35-\ud655\ub300-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 1px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1m.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m.ggUpdateText();
		el.appendChild(els);
		me.__1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1m.onclick=function (e) {
			player.openNext("{node4}","");
			player.setVariableValue('vis_onefloor', true);
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__1m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me.__1m);
		el=me.__2m=document.createElement('div');
		els=me.__2m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35-\ud655\ub300-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2m.ggUpdateText=function() {
			var params = [];
			var hs = player._("3\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m.ggUpdateText();
		el.appendChild(els);
		me.__2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node8}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__2m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me.__2m);
		el=me._m0=document.createElement('div');
		els=me._m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc9c0\ud558-\ud655\ub300-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 33.3%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m0.ggUpdateText();
		el.appendChild(els);
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node14}","");
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me._m0);
		me.__3.appendChild(me._m);
		me.divSkin.appendChild(me.__3);
		el=me.__=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 25px 25px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 66.59%;';
		hs+='left : calc(50% - ((89.4118% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((66.59% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89.4118%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("BLISS HILL", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_1);
		me._container_2.appendChild(me._container_1);
		me.__0.appendChild(me._container_2);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__59.logicBlock_position();
		me.__62.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__18a4.logicBlock_size();
		me.__18a4.logicBlock_visible();
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible();
		me.__61.logicBlock_size();
		me.__61.logicBlock_visible();
		me.__60.logicBlock_size();
		me.__60.logicBlock_visible();
		me.__26.logicBlock_position();
		me.__26.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__56.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor();
		me.__57.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__52.logicBlock_visible();
		me.__51.logicBlock_visible();
		me.__47.logicBlock_visible();
		me.__46.logicBlock_visible();
		me.__42.logicBlock_visible();
		me.__41.logicBlock_visible();
		me.__36.logicBlock_visible();
		me.__35.logicBlock_visible();
		me.__31.logicBlock_visible();
		me.__34.logicBlock_visible();
		me.__30.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__28.logicBlock_position();
		me.__28.logicBlock_visible();
		me.__28.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__22.logicBlock_visible();
		me.__11.logicBlock_position();
		me.__11.logicBlock_size();
		me.__11.logicBlock_scaling();
		me.__11.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__19.logicBlock_scaling();
		me._map_11.ggMarkerInstances=[];
		me._map_11.ggLastNodeId=null;
		me._map_11.ggSimpleFloorplanMarkerArray=[];
		me._map_11.ggFloorplanWidth=0;
		me._map_11.ggFloorplanHeight=0;
		me._map_11__mapdiv=document.createElement('div');
		me._map_11__mapdiv.className='ggskin ggskin_map';
		me._map_11.appendChild(me._map_11__mapdiv);
		me._map_11__img=document.createElement('img');
		me._map_11__img.className='ggskin ggskin_map';
		me._map_11__mapdiv.appendChild(me._map_11__img);
		me._map_11.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_11.ggRadar.update=function() {
			var radar=me._map_11.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_11.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_11.ggFilteredIds.length > 0 && me._map_11.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_11.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_11__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_11__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_11.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_11__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_11.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_11.clientWidth;
			var mapHeight = me._map_11.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_11.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_11__img.setAttribute('src', imageFilename);
		me._map_11__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_11.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_11.ggFloorplanHeight / 2 + 'px;width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_11__img.setAttribute('style','width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_11.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_11.clientWidth / me._map_11.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_11.ggFloorplanHeight = me._map_11.clientHeight;
				me._map_11.ggFloorplanWidth = me._map_11.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_11.ggFloorplanWidth = me._map_11.clientWidth;
				me._map_11.ggFloorplanHeight = me._map_11.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_11.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_11.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_11.ggPermeableMap = true;
			} else {
				me._map_11.ggPermeableMap = false;
			}
			me._map_11.ggCalculateFloorplanSize(mapDetails);
			me._map_11.ggShowSimpleFloorplan(mapDetails);
			me._map_11.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_11.ggMapNotLoaded = false;
		}
		me._map_11.ggClearMap=function() {
			me._map_11.ggClearMapMarkers();
			me._map_11.ggMapNotLoaded = true;
		}
		me._map_11.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_11.ggMapId = mapId;
			if (!me._map_11.ggMapNotLoaded) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap();
				me._map_11.ggInitMapMarkers();
			}
		}
		me._map_11.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_11.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
					var xPos = (me._map_11.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_11.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_11.ggHMarkerAnchorOffset;
					yPos -= me._map_11.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_11.style['z-index'] + 2;
				}
			}
		}
		me._map_11.ggInitMapMarkers=function() {
			me._map_11.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_11.ggFilteredIds = [];
			if (me._map_11.ggFilter != '') {
				var filter = me._map_11.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_11.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_11.ggFilteredIds.length > 0) ids = me._map_11.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
				if (coords.length>=2) {
					me._map_11.ggHMarkerAnchorOffset = 12;
					me._map_11.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_11.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_11.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_11__mapdiv.appendChild(marker);
				}
			}
			me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_11);
		}
		me._map_11.ggClearMapMarkers=function() {
			for (id in me._map_11.ggSimpleFloorplanMarkerArray) {
				if (me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_11__mapdiv.removeChild(me._map_11.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_11.ggMarkerInstances=[];
			me._map_11.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_11.logicBlock_visible();
		me._map_21.ggMarkerInstances=[];
		me._map_21.ggLastNodeId=null;
		me._map_21.ggSimpleFloorplanMarkerArray=[];
		me._map_21.ggFloorplanWidth=0;
		me._map_21.ggFloorplanHeight=0;
		me._map_21__mapdiv=document.createElement('div');
		me._map_21__mapdiv.className='ggskin ggskin_map';
		me._map_21.appendChild(me._map_21__mapdiv);
		me._map_21__img=document.createElement('img');
		me._map_21__img.className='ggskin ggskin_map';
		me._map_21__mapdiv.appendChild(me._map_21__img);
		me._map_21.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_21.ggRadar.update=function() {
			var radar=me._map_21.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_21.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_21.ggFilteredIds.length > 0 && me._map_21.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_21.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_21__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_21__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_21.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_21__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_21.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_21.clientWidth;
			var mapHeight = me._map_21.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_21.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_21__img.setAttribute('src', imageFilename);
		me._map_21__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_21.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_21.ggFloorplanHeight / 2 + 'px;width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_21__img.setAttribute('style','width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_21.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_21.clientWidth / me._map_21.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_21.ggFloorplanHeight = me._map_21.clientHeight;
				me._map_21.ggFloorplanWidth = me._map_21.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_21.ggFloorplanWidth = me._map_21.clientWidth;
				me._map_21.ggFloorplanHeight = me._map_21.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_21.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_21.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_21.ggPermeableMap = true;
			} else {
				me._map_21.ggPermeableMap = false;
			}
			me._map_21.ggCalculateFloorplanSize(mapDetails);
			me._map_21.ggShowSimpleFloorplan(mapDetails);
			me._map_21.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_21.ggMapNotLoaded = false;
		}
		me._map_21.ggClearMap=function() {
			me._map_21.ggClearMapMarkers();
			me._map_21.ggMapNotLoaded = true;
		}
		me._map_21.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_21.ggMapId = mapId;
			if (!me._map_21.ggMapNotLoaded) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap();
				me._map_21.ggInitMapMarkers();
			}
		}
		me._map_21.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_21.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
					var xPos = (me._map_21.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_21.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_21.ggHMarkerAnchorOffset;
					yPos -= me._map_21.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_21.style['z-index'] + 2;
				}
			}
		}
		me._map_21.ggInitMapMarkers=function() {
			me._map_21.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_21.ggFilteredIds = [];
			if (me._map_21.ggFilter != '') {
				var filter = me._map_21.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_21.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_21.ggFilteredIds.length > 0) ids = me._map_21.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
				if (coords.length>=2) {
					me._map_21.ggHMarkerAnchorOffset = 12;
					me._map_21.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_21.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_21.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_21__mapdiv.appendChild(marker);
				}
			}
			me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_21);
		}
		me._map_21.ggClearMapMarkers=function() {
			for (id in me._map_21.ggSimpleFloorplanMarkerArray) {
				if (me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_21__mapdiv.removeChild(me._map_21.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_21.ggMarkerInstances=[];
			me._map_21.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_21.logicBlock_visible();
		me._map_31.ggMarkerInstances=[];
		me._map_31.ggLastNodeId=null;
		me._map_31.ggSimpleFloorplanMarkerArray=[];
		me._map_31.ggFloorplanWidth=0;
		me._map_31.ggFloorplanHeight=0;
		me._map_31__mapdiv=document.createElement('div');
		me._map_31__mapdiv.className='ggskin ggskin_map';
		me._map_31.appendChild(me._map_31__mapdiv);
		me._map_31__img=document.createElement('img');
		me._map_31__img.className='ggskin ggskin_map';
		me._map_31__mapdiv.appendChild(me._map_31__img);
		me._map_31.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_31.ggRadar.update=function() {
			var radar=me._map_31.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_31.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_31.ggFilteredIds.length > 0 && me._map_31.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_31.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_31.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_31__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_31__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_31.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_31__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_31.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_31.clientWidth;
			var mapHeight = me._map_31.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_31.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_31__img.setAttribute('src', imageFilename);
		me._map_31__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_31.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_31.ggFloorplanHeight / 2 + 'px;width:' + me._map_31.ggFloorplanWidth + 'px;height:' + me._map_31.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_31__img.setAttribute('style','width:' + me._map_31.ggFloorplanWidth + 'px;height:' + me._map_31.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_31.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_31.clientWidth / me._map_31.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_31.ggFloorplanHeight = me._map_31.clientHeight;
				me._map_31.ggFloorplanWidth = me._map_31.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_31.ggFloorplanWidth = me._map_31.clientWidth;
				me._map_31.ggFloorplanHeight = me._map_31.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_31.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_31.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_31.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_31.ggPermeableMap = true;
			} else {
				me._map_31.ggPermeableMap = false;
			}
			me._map_31.ggCalculateFloorplanSize(mapDetails);
			me._map_31.ggShowSimpleFloorplan(mapDetails);
			me._map_31.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_31.ggMapNotLoaded = false;
		}
		me._map_31.ggClearMap=function() {
			me._map_31.ggClearMapMarkers();
			me._map_31.ggMapNotLoaded = true;
		}
		me._map_31.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_31.ggMapId = mapId;
			if (!me._map_31.ggMapNotLoaded) {
				me._map_31.ggClearMap();
				me._map_31.ggInitMap();
				me._map_31.ggInitMapMarkers();
			}
		}
		me._map_31.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_31.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_31.ggMapId);
					var xPos = (me._map_31.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_31.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_31.ggHMarkerAnchorOffset;
					yPos -= me._map_31.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_31.style['z-index'] + 2;
				}
			}
		}
		me._map_31.ggInitMapMarkers=function() {
			me._map_31.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_31.ggFilteredIds = [];
			if (me._map_31.ggFilter != '') {
				var filter = me._map_31.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_31.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_31.ggFilteredIds.length > 0) ids = me._map_31.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_31.ggMapId);
				if (coords.length>=2) {
					me._map_31.ggHMarkerAnchorOffset = 12;
					me._map_31.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_31.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_31.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_31__mapdiv.appendChild(marker);
				}
			}
			me._map_31.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_31);
		}
		me._map_31.ggClearMapMarkers=function() {
			for (id in me._map_31.ggSimpleFloorplanMarkerArray) {
				if (me._map_31.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_31__mapdiv.removeChild(me._map_31.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_31.ggMarkerInstances=[];
			me._map_31.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_31.logicBlock_visible();
		me.__15.logicBlock_visible();
		me.__16.logicBlock_text();
		me._image_60.logicBlock_angle();
		me.__12.logicBlock_visible();
		me.__8.logicBlock_position();
		me.__8.logicBlock_visible();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_10.logicBlock_visible();
		me._map_20.ggMarkerInstances=[];
		me._map_20.ggLastNodeId=null;
		me._map_20.ggSimpleFloorplanMarkerArray=[];
		me._map_20.ggFloorplanWidth=0;
		me._map_20.ggFloorplanHeight=0;
		me._map_20__mapdiv=document.createElement('div');
		me._map_20__mapdiv.className='ggskin ggskin_map';
		me._map_20.appendChild(me._map_20__mapdiv);
		me._map_20__img=document.createElement('img');
		me._map_20__img.className='ggskin ggskin_map';
		me._map_20__mapdiv.appendChild(me._map_20__img);
		me._map_20.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_20.ggRadar.update=function() {
			var radar=me._map_20.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_20.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_20.ggFilteredIds.length > 0 && me._map_20.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_20.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_20__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_20__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_20.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_20__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_20.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_20.clientWidth;
			var mapHeight = me._map_20.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_20.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_20__img.setAttribute('src', imageFilename);
		me._map_20__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_20.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_20.ggFloorplanHeight / 2 + 'px;width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_20__img.setAttribute('style','width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_20.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_20.clientWidth / me._map_20.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_20.ggFloorplanHeight = me._map_20.clientHeight;
				me._map_20.ggFloorplanWidth = me._map_20.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_20.ggFloorplanWidth = me._map_20.clientWidth;
				me._map_20.ggFloorplanHeight = me._map_20.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_20.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_20.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_20.ggPermeableMap = true;
			} else {
				me._map_20.ggPermeableMap = false;
			}
			me._map_20.ggCalculateFloorplanSize(mapDetails);
			me._map_20.ggShowSimpleFloorplan(mapDetails);
			me._map_20.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_20.ggMapNotLoaded = false;
		}
		me._map_20.ggClearMap=function() {
			me._map_20.ggClearMapMarkers();
			me._map_20.ggMapNotLoaded = true;
		}
		me._map_20.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_20.ggMapId = mapId;
			if (!me._map_20.ggMapNotLoaded) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap();
				me._map_20.ggInitMapMarkers();
			}
		}
		me._map_20.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_20.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
					var xPos = (me._map_20.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_20.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_20.ggHMarkerAnchorOffset;
					yPos -= me._map_20.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_20.style['z-index'] + 2;
				}
			}
		}
		me._map_20.ggInitMapMarkers=function() {
			me._map_20.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_20.ggFilteredIds = [];
			if (me._map_20.ggFilter != '') {
				var filter = me._map_20.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_20.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_20.ggFilteredIds.length > 0) ids = me._map_20.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
				if (coords.length>=2) {
					me._map_20.ggHMarkerAnchorOffset = 12;
					me._map_20.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_20.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_20.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_20__mapdiv.appendChild(marker);
				}
			}
			me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_20);
		}
		me._map_20.ggClearMapMarkers=function() {
			for (id in me._map_20.ggSimpleFloorplanMarkerArray) {
				if (me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_20__mapdiv.removeChild(me._map_20.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_20.ggMarkerInstances=[];
			me._map_20.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_20.logicBlock_visible();
		me._map_30.ggMarkerInstances=[];
		me._map_30.ggLastNodeId=null;
		me._map_30.ggSimpleFloorplanMarkerArray=[];
		me._map_30.ggFloorplanWidth=0;
		me._map_30.ggFloorplanHeight=0;
		me._map_30__mapdiv=document.createElement('div');
		me._map_30__mapdiv.className='ggskin ggskin_map';
		me._map_30.appendChild(me._map_30__mapdiv);
		me._map_30__img=document.createElement('img');
		me._map_30__img.className='ggskin ggskin_map';
		me._map_30__mapdiv.appendChild(me._map_30__img);
		me._map_30.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_30.ggRadar.update=function() {
			var radar=me._map_30.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_30.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_30.ggFilteredIds.length > 0 && me._map_30.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_30.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_30.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_30__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_30__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_30.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_30__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_30.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_30.clientWidth;
			var mapHeight = me._map_30.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_30.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_30__img.setAttribute('src', imageFilename);
		me._map_30__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_30.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_30.ggFloorplanHeight / 2 + 'px;width:' + me._map_30.ggFloorplanWidth + 'px;height:' + me._map_30.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_30__img.setAttribute('style','width:' + me._map_30.ggFloorplanWidth + 'px;height:' + me._map_30.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_30.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_30.clientWidth / me._map_30.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_30.ggFloorplanHeight = me._map_30.clientHeight;
				me._map_30.ggFloorplanWidth = me._map_30.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_30.ggFloorplanWidth = me._map_30.clientWidth;
				me._map_30.ggFloorplanHeight = me._map_30.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_30.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_30.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_30.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_30.ggPermeableMap = true;
			} else {
				me._map_30.ggPermeableMap = false;
			}
			me._map_30.ggCalculateFloorplanSize(mapDetails);
			me._map_30.ggShowSimpleFloorplan(mapDetails);
			me._map_30.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_30.ggMapNotLoaded = false;
		}
		me._map_30.ggClearMap=function() {
			me._map_30.ggClearMapMarkers();
			me._map_30.ggMapNotLoaded = true;
		}
		me._map_30.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_30.ggMapId = mapId;
			if (!me._map_30.ggMapNotLoaded) {
				me._map_30.ggClearMap();
				me._map_30.ggInitMap();
				me._map_30.ggInitMapMarkers();
			}
		}
		me._map_30.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_30.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_30.ggMapId);
					var xPos = (me._map_30.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_30.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_30.ggHMarkerAnchorOffset;
					yPos -= me._map_30.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_30.style['z-index'] + 2;
				}
			}
		}
		me._map_30.ggInitMapMarkers=function() {
			me._map_30.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_30.ggFilteredIds = [];
			if (me._map_30.ggFilter != '') {
				var filter = me._map_30.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_30.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_30.ggFilteredIds.length > 0) ids = me._map_30.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_30.ggMapId);
				if (coords.length>=2) {
					me._map_30.ggHMarkerAnchorOffset = 12;
					me._map_30.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_30.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_30.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_30__mapdiv.appendChild(marker);
				}
			}
			me._map_30.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_30);
		}
		me._map_30.ggClearMapMarkers=function() {
			for (id in me._map_30.ggSimpleFloorplanMarkerArray) {
				if (me._map_30.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_30__mapdiv.removeChild(me._map_30.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_30.ggMarkerInstances=[];
			me._map_30.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_30.logicBlock_visible();
		me._m3.logicBlock_visible();
		me._m4.logicBlock_text();
		me._image_6m.logicBlock_angle();
		me._m1.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__9.logicBlock_scaling();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__3.logicBlock_position();
		me.__3.logicBlock_size();
		me.__3.logicBlock_scaling();
		me.__6.logicBlock_size();
		me.__7.logicBlock_size();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me._map_3.ggMarkerInstances=[];
		me._map_3.ggLastNodeId=null;
		me._map_3.ggSimpleFloorplanMarkerArray=[];
		me._map_3.ggFloorplanWidth=0;
		me._map_3.ggFloorplanHeight=0;
		me._map_3__mapdiv=document.createElement('div');
		me._map_3__mapdiv.className='ggskin ggskin_map';
		me._map_3.appendChild(me._map_3__mapdiv);
		me._map_3__img=document.createElement('img');
		me._map_3__img.className='ggskin ggskin_map';
		me._map_3__mapdiv.appendChild(me._map_3__img);
		me._map_3.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_3.ggRadar.update=function() {
			var radar=me._map_3.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_3.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_3.ggFilteredIds.length > 0 && me._map_3.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_3.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_3.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_3__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_3__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_3.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_3__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_3.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_3.clientWidth;
			var mapHeight = me._map_3.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_3.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_3__img.setAttribute('src', imageFilename);
		me._map_3__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_3.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_3.ggFloorplanHeight / 2 + 'px;width:' + me._map_3.ggFloorplanWidth + 'px;height:' + me._map_3.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_3__img.setAttribute('style','width:' + me._map_3.ggFloorplanWidth + 'px;height:' + me._map_3.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_3.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_3.clientWidth / me._map_3.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_3.ggFloorplanHeight = me._map_3.clientHeight;
				me._map_3.ggFloorplanWidth = me._map_3.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_3.ggFloorplanWidth = me._map_3.clientWidth;
				me._map_3.ggFloorplanHeight = me._map_3.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_3.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_3.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_3.ggPermeableMap = true;
			} else {
				me._map_3.ggPermeableMap = false;
			}
			me._map_3.ggCalculateFloorplanSize(mapDetails);
			me._map_3.ggShowSimpleFloorplan(mapDetails);
			me._map_3.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_3.ggMapNotLoaded = false;
		}
		me._map_3.ggClearMap=function() {
			me._map_3.ggClearMapMarkers();
			me._map_3.ggMapNotLoaded = true;
		}
		me._map_3.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_3.ggMapId = mapId;
			if (!me._map_3.ggMapNotLoaded) {
				me._map_3.ggClearMap();
				me._map_3.ggInitMap();
				me._map_3.ggInitMapMarkers();
			}
		}
		me._map_3.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_3.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_3.ggMapId);
					var xPos = (me._map_3.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_3.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_3.ggHMarkerAnchorOffset;
					yPos -= me._map_3.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_3.style['z-index'] + 2;
				}
			}
		}
		me._map_3.ggInitMapMarkers=function() {
			me._map_3.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_3.ggFilteredIds = [];
			if (me._map_3.ggFilter != '') {
				var filter = me._map_3.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_3.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_3.ggFilteredIds.length > 0) ids = me._map_3.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_3.ggMapId);
				if (coords.length>=2) {
					me._map_3.ggHMarkerAnchorOffset = 12;
					me._map_3.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_3.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_3.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_3__mapdiv.appendChild(marker);
				}
			}
			me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_3);
		}
		me._map_3.ggClearMapMarkers=function() {
			for (id in me._map_3.ggSimpleFloorplanMarkerArray) {
				if (me._map_3.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_3__mapdiv.removeChild(me._map_3.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_3.ggMarkerInstances=[];
			me._map_3.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_3.logicBlock_visible();
		me._image_2.logicBlock_position();
		me.__4.logicBlock_position();
		me.__4.logicBlock_visible();
		me.__5.logicBlock_text();
		me._image_6.logicBlock_angle();
		me._m.logicBlock_position();
		me._m.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Button')) {
				for(var i = 0; i < hotspotTemplates['Button'].length; i++) {
					hotspotTemplates['Button'][i].ggEvent_changenode();
				}
			}
			me.__59.logicBlock_position();
			me.__18a4.logicBlock_visible();
			me.__18a4.ggUpdateConditionNodeChange();
			me.__18a2.logicBlock_visible();
			me.__18a2.ggUpdateConditionNodeChange();
			me.__61.logicBlock_visible();
			me.__61.ggUpdateConditionNodeChange();
			me.__60.logicBlock_visible();
			me.__60.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__56.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__57.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__52.logicBlock_visible();
			me.__51.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__46.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__41.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__35.logicBlock_visible();
			me.__31.logicBlock_visible();
			me.__30.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__28.logicBlock_position();
			me.__28.logicBlock_visible();
			me.__28.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__22.logicBlock_visible();
			me._map_11.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
			if (me._map_11.ggLastNodeId) {
				var lastActiveMarker = me._map_11.ggSimpleFloorplanMarkerArray[me._map_11.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_11.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_11.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_11.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_11.ggChangeMap(mapId);
					}
				}
			}
			me._map_11.ggLastNodeId = id;
			me._map_11.ggRadar.update();
			me._map_21.logicBlock_visible();
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
			if (me._map_21.ggLastNodeId) {
				var lastActiveMarker = me._map_21.ggSimpleFloorplanMarkerArray[me._map_21.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_21.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_21.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_21.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_21.ggChangeMap(mapId);
					}
				}
			}
			me._map_21.ggLastNodeId = id;
			me._map_21.ggRadar.update();
			me._map_31.logicBlock_visible();
			for (var i=0; i < me._map_31.ggMarkerInstances.length; i++) {
				me._map_31.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_31.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_31.ggCalculateFloorplanSize(mapDetails);
				me._map_31.ggShowSimpleFloorplan(mapDetails);
				me._map_31.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_31.ggRadar) me._map_31.ggRadar.update();
			if (me._map_31.ggLastNodeId) {
				var lastActiveMarker = me._map_31.ggSimpleFloorplanMarkerArray[me._map_31.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_31.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_31.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_31.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_31.ggChangeMap(mapId);
					}
				}
			}
			me._map_31.ggLastNodeId = id;
			me._map_31.ggRadar.update();
			me.__15.logicBlock_visible();
			me.__16.logicBlock_text();
			me._image_60.logicBlock_angle();
			me.__12.logicBlock_visible();
			me.__8.logicBlock_position();
			me._map_10.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._map_20.logicBlock_visible();
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
			if (me._map_20.ggLastNodeId) {
				var lastActiveMarker = me._map_20.ggSimpleFloorplanMarkerArray[me._map_20.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_20.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_20.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_20.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_20.ggChangeMap(mapId);
					}
				}
			}
			me._map_20.ggLastNodeId = id;
			me._map_20.ggRadar.update();
			me._map_30.logicBlock_visible();
			for (var i=0; i < me._map_30.ggMarkerInstances.length; i++) {
				me._map_30.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_30.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_30.ggCalculateFloorplanSize(mapDetails);
				me._map_30.ggShowSimpleFloorplan(mapDetails);
				me._map_30.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_30.ggRadar) me._map_30.ggRadar.update();
			if (me._map_30.ggLastNodeId) {
				var lastActiveMarker = me._map_30.ggSimpleFloorplanMarkerArray[me._map_30.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_30.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_30.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_30.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_30.ggChangeMap(mapId);
					}
				}
			}
			me._map_30.ggLastNodeId = id;
			me._map_30.ggRadar.update();
			me._m3.logicBlock_visible();
			me._m4.logicBlock_text();
			me._image_6m.logicBlock_angle();
			me._m1.logicBlock_visible();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__3.logicBlock_position();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me._map_3.logicBlock_visible();
			for (var i=0; i < me._map_3.ggMarkerInstances.length; i++) {
				me._map_3.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_3.ggCalculateFloorplanSize(mapDetails);
				me._map_3.ggShowSimpleFloorplan(mapDetails);
				me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_3.ggRadar) me._map_3.ggRadar.update();
			if (me._map_3.ggLastNodeId) {
				var lastActiveMarker = me._map_3.ggSimpleFloorplanMarkerArray[me._map_3.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_3.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_3.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_3.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_3.ggChangeMap(mapId);
					}
				}
			}
			me._map_3.ggLastNodeId = id;
			me._map_3.ggRadar.update();
			me.__4.logicBlock_visible();
			me.__5.logicBlock_text();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__59.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__56.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__57.logicBlock_visible();
			me.__52.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__31.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__28.logicBlock_position();
			me.__28.logicBlock_visible();
			me.__28.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__11.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_11.ggVisible) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap(false);
				me._map_11.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_21.ggVisible) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap(false);
				me._map_21.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_31.ggMarkerInstances.length; i++) {
				me._map_31.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_31.ggVisible) {
				me._map_31.ggClearMap();
				me._map_31.ggInitMap(false);
				me._map_31.ggInitMapMarkers(true);
			}
			me.__15.logicBlock_visible();
			me._image_60.logicBlock_angle();
			me.__12.logicBlock_visible();
			me.__8.logicBlock_position();
			me.__8.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_10.ggVisible) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap(false);
				me._map_10.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_20.ggVisible) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap(false);
				me._map_20.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_30.ggMarkerInstances.length; i++) {
				me._map_30.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_30.ggVisible) {
				me._map_30.ggClearMap();
				me._map_30.ggInitMap(false);
				me._map_30.ggInitMapMarkers(true);
			}
			me._m3.logicBlock_visible();
			me._image_6m.logicBlock_angle();
			me._m1.logicBlock_visible();
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__3.logicBlock_position();
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			if (me._map_3.ggVisible) {
				me._map_3.ggClearMap();
				me._map_3.ggInitMap(false);
				me._map_3.ggInitMapMarkers(true);
			}
			me.__4.logicBlock_visible();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__34.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__34.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_11.ggRadar.update();
			me._map_21.ggRadar.update();
			me._map_31.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_30.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
			me._map_3.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__60.ggInstances.length; i++) {
				me.__60.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__61.ggInstances.length; i++) {
				me.__61.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__18a2.ggInstances.length; i++) {
				me.__18a2.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__18a4.ggInstances.length; i++) {
				me.__18a4.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__62.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__18a4.logicBlock_size();
			me.__18a2.logicBlock_size();
			me.__61.logicBlock_size();
			me.__60.logicBlock_size();
			me.__26.logicBlock_position();
			me.__26.logicBlock_scaling();
			me.__11.logicBlock_position();
			me.__11.logicBlock_size();
			me.__11.logicBlock_scaling();
			me.__11.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__19.logicBlock_scaling();
			me.__8.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__9.logicBlock_scaling();
			me.__3.logicBlock_size();
			me.__3.logicBlock_scaling();
			me.__6.logicBlock_size();
			me.__7.logicBlock_size();
			me._image_2.logicBlock_position();
			me.__4.logicBlock_position();
			me._m.logicBlock_position();
		});
		player.addListener('varchanged_vis_floor', function(event) {
			me.__15.logicBlock_visible();
			me._image_60.logicBlock_angle();
			me.__12.logicBlock_visible();
			me._m3.logicBlock_visible();
			me._image_6m.logicBlock_angle();
			me._m1.logicBlock_visible();
			me.__4.logicBlock_visible();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__28.logicBlock_visible();
			me.__28.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__8.logicBlock_position();
			me.__3.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__59.logicBlock_position();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__57.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__56.logicBlock_visible();
			me.__52.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__31.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__28.logicBlock_position();
			me.__28.logicBlock_visible();
			me.__28.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__56.logicBlock_visible();
			me.__52.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__31.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__18a4.ggUpdate();
			me.__18a2.ggUpdate();
			me.__61.ggUpdate();
			me.__60.ggUpdate();
		});
	};
	function SkinCloner__60_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a.style.width='95px';
					me._nodeimage_118a.style.height='95px';
					skin.updateSize(me._nodeimage_118a);
				}
				else {
					me._nodeimage_118a.style.width='115px';
					me._nodeimage_118a.style.height='115px';
					skin.updateSize(me._nodeimage_118a);
				}
			}
		}
		me._nodeimage_118a.logicBlock_size();
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__8.style.transition='none';
				skin.__8.style.visibility=(Number(skin.__8.style.opacity)>0||!skin.__8.style.opacity)?'inherit':'hidden';
				skin.__8.ggVisible=true;
			}
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a0.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a0);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
		me._nodeimage_118a.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a.logicBlock_size();
			};
	};
	function SkinCloner__61_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a0.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a0.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a0.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a0.style.width='95px';
					me._nodeimage_118a0.style.height='95px';
					skin.updateSize(me._nodeimage_118a0);
				}
				else {
					me._nodeimage_118a0.style.width='115px';
					me._nodeimage_118a0.style.height='115px';
					skin.updateSize(me._nodeimage_118a0);
				}
			}
		}
		me._nodeimage_118a0.logicBlock_size();
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__8.style.transition='none';
				skin.__8.style.visibility=(Number(skin.__8.style.opacity)>0||!skin.__8.style.opacity)?'inherit':'hidden';
				skin.__8.ggVisible=true;
			}
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a1);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
		me._nodeimage_118a0.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a0.logicBlock_size();
			};
	};
	function SkinCloner__18a2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a1.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a1.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a1.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a1.style.width='95px';
					me._nodeimage_118a1.style.height='95px';
					skin.updateSize(me._nodeimage_118a1);
				}
				else {
					me._nodeimage_118a1.style.width='115px';
					me._nodeimage_118a1.style.height='115px';
					skin.updateSize(me._nodeimage_118a1);
				}
			}
		}
		me._nodeimage_118a1.logicBlock_size();
		me._nodeimage_118a1.onclick=function (e) {
			if (me._nodeimage_118a1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__8.style.transition='none';
				skin.__8.style.visibility=(Number(skin.__8.style.opacity)>0||!skin.__8.style.opacity)?'inherit':'hidden';
				skin.__8.ggVisible=true;
			}
		}
		me._nodeimage_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a1.appendChild(me.__18a3);
		me._nodeimage_118a1.appendChild(me._rectangle_118a1);
		me.__div.appendChild(me._nodeimage_118a1);
		me._nodeimage_118a1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a1.logicBlock_size();
			};
	};
	function SkinCloner__18a4_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a2.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a2.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a2.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a2.style.width='95px';
					me._nodeimage_118a2.style.height='95px';
					skin.updateSize(me._nodeimage_118a2);
				}
				else {
					me._nodeimage_118a2.style.width='115px';
					me._nodeimage_118a2.style.height='115px';
					skin.updateSize(me._nodeimage_118a2);
				}
			}
		}
		me._nodeimage_118a2.logicBlock_size();
		me._nodeimage_118a2.onclick=function (e) {
			if (me._nodeimage_118a2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__8.style.transition='none';
				skin.__8.style.visibility=(Number(skin.__8.style.opacity)>0||!skin.__8.style.opacity)?'inherit':'hidden';
				skin.__8.ggVisible=true;
			}
		}
		me._nodeimage_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a5.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a2.appendChild(me.__18a5);
		me._nodeimage_118a2.appendChild(me._rectangle_118a2);
		me.__div.appendChild(me._nodeimage_118a2);
		me._nodeimage_118a2.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a2.logicBlock_size();
			};
	};
	function SkinHotspotClass_button(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._button=document.createElement('div');
		el.ggId="Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 291px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._button.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['button']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['button']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		el=me._button0=document.createElement('div');
		el.ggId="button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._button0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._garden=document.createElement('div');
		els=me._garden__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Garden";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((93% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 93%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px 3px 3px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._garden.ggUpdateText=function() {
			var params = [];
			var hs = player._("Garden", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._garden.ggUpdateText();
		el.appendChild(els);
		me._garden.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._garden.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc815\uc6d0") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._garden.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._garden.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._garden.style.transition='background-color 0s';
				if (me._garden.ggCurrentLogicStateBackgroundColor == 0) {
					me._garden.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._garden.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._garden.logicBlock_backgroundcolor();
		me._garden.onclick=function (e) {
			player.openNext("{node17}","$(cur)");
		}
		me._garden.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._garden);
		el=me._swim=document.createElement('div');
		els=me._swim__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Swim";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((93% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 93%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px 3px 3px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._swim.ggUpdateText=function() {
			var params = [];
			var hs = player._("Pool", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._swim.ggUpdateText();
		el.appendChild(els);
		me._swim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._swim.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc218\uc601\uc7a5") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._swim.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._swim.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._swim.style.transition='background-color 0s';
				if (me._swim.ggCurrentLogicStateBackgroundColor == 0) {
					me._swim.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._swim.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._swim.logicBlock_backgroundcolor();
		me._swim.onclick=function (e) {
			player.openNext("{node33}","$(cur)");
		}
		me._swim.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._swim);
		me._button0.appendChild(me._rectangle_1);
		me._button.appendChild(me._button0);
		me._garden.logicBlock_backgroundcolor();
		me._swim.logicBlock_backgroundcolor();
			me.ggEvent_changenode=function() {
				me._garden.logicBlock_backgroundcolor();
				me._swim.logicBlock_backgroundcolor();
			};
			me.__div = me._button;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -25px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='0px';
				}
				else {
					me._lottie_2.style.left='-25px';
					me._lottie_2.style.top='-40px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px; line-height:12px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__2.ggUpdateText();
		});
		el.appendChild(els);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStatePosition == 0) {
					me.__2.style.left = 'calc(50% - (65px / 2))';
					me.__2.style.bottom='0px';
				}
				else {
					me.__2.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__2.style.bottom='-28px';
				}
			}
		}
		me.__2.logicBlock_position();
		me.__2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateSize == 0) {
					me.__2.style.width='100px';
					me.__2.style.height='25px';
					me.__2.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__2);
				}
				else {
					me.__2.style.width='65px';
					me.__2.style.height='25px';
					me.__2.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				else if (me.__2.ggCurrentLogicStateVisible == 1) {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				else {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__2.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__2.logicBlock_backgroundcolor();
		me.__2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__2.ggCurrentLogicStateText != newLogicStateText) {
				me.__2.ggCurrentLogicStateText = newLogicStateText;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateText == 0) {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
				else {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
			}
		}
		me.__2.logicBlock_text();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1.ggUpdateText();
		});
		el.appendChild(els);
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__1.ggCurrentLogicStatePosition == 0) {
					me.__1.style.left = 'calc(50% - (65px / 2))';
					me.__1.style.bottom='0px';
				}
				else if (me.__1.ggCurrentLogicStatePosition == 1) {
					me.__1.style.left = 'calc(50% - (65px / 2) + (0px / 2) + -5px)';
					me.__1.style.bottom='40px';
				}
				else {
					me.__1.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__1.style.bottom='-40px';
				}
			}
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='50px';
					me.__1.style.height='25px';
					me.__1.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__1);
				}
				else if (me.__1.ggCurrentLogicStateSize == 1) {
					me.__1.style.width='50px';
					me.__1.style.height='25px';
					me.__1.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__1);
				}
				else if (me.__1.ggCurrentLogicStateSize == 2) {
					me.__1.style.width='100px';
					me.__1.style.height='30px';
					me.__1.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='65px';
					me.__1.style.height='30px';
					me.__1.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else if (me.__1.ggCurrentLogicStateVisible == 1) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__1.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__1.logicBlock_backgroundcolor();
		me.__1.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__1.ggCurrentLogicStateText != newLogicStateText) {
				me.__1.ggCurrentLogicStateText = newLogicStateText;
				me.__1.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__1.ggCurrentLogicStateText == 0) {
					if (me.__1.ggUpdateText) {
					me.__1.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__1.ggUpdateText();
					} else {
						if (me.__1.ggUpdatePosition) me.__1.ggUpdatePosition();
					}
				}
				else {
					if (me.__1.ggUpdateText) {
					me.__1.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__1.ggUpdateText();
					} else {
						if (me.__1.ggUpdatePosition) me.__1.ggUpdatePosition();
					}
				}
			}
		}
		me.__1.logicBlock_text();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__1);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__2.logicBlock_position();
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible();
		me.__2.logicBlock_backgroundcolor();
		me.__2.logicBlock_text();
		me.__1.logicBlock_position();
		me.__1.logicBlock_size();
		me.__1.logicBlock_visible();
		me.__1.logicBlock_backgroundcolor();
		me.__1.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__2.logicBlock_size();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
				me.__1.logicBlock_size();
				me.__1.logicBlock_backgroundcolor();
				me.__1.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__2.logicBlock_size();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
				me.__1.logicBlock_size();
				me.__1.logicBlock_backgroundcolor();
				me.__1.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__2.logicBlock_size();
				me.__2.logicBlock_visible();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
				me.__1.logicBlock_position();
				me.__1.logicBlock_size();
				me.__1.logicBlock_visible();
				me.__1.logicBlock_backgroundcolor();
				me.__1.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__2.logicBlock_position();
				me.__1.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_size();
				me.__2.logicBlock_visible();
				me.__1.logicBlock_size();
				me.__1.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='18px';
					me._map_pin_active2.style.height='18px';
					me._map_pin_active2.style.left = 'calc(50% - (18px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (18px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='22px';
					me._map_pin_active2.style.height='22px';
					me._map_pin_active2.style.left = 'calc(50% - (22px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal2";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='16px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (16px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='38px';
					me._map_pin_normal2.style.height='44px';
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.2;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'Button';
				hsinst = new SkinHotspotClass_button(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__56.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__57.style.transition='none';
				me.__57.style.visibility='hidden';
				me.__57.ggVisible=false;
			} else {
			}
		}
		me.__52.ggUpdateConditionTimer();
		me.__51.ggUpdateConditionTimer();
		if (me.__51.ggLastIsActive!=me.__51.ggIsActive()) {
			me.__51.ggLastIsActive=me.__51.ggIsActive();
			if (me.__51.ggLastIsActive) {
				me.__53.style.transition='none';
				me.__53.style.visibility='hidden';
				me.__53.ggVisible=false;
			} else {
			}
		}
		me.__47.ggUpdateConditionTimer();
		me.__46.ggUpdateConditionTimer();
		if (me.__46.ggLastIsActive!=me.__46.ggIsActive()) {
			me.__46.ggLastIsActive=me.__46.ggIsActive();
			if (me.__46.ggLastIsActive) {
				me.__48.style.transition='none';
				me.__48.style.visibility='hidden';
				me.__48.ggVisible=false;
			} else {
			}
		}
		me.__42.ggUpdateConditionTimer();
		me.__41.ggUpdateConditionTimer();
		if (me.__41.ggLastIsActive!=me.__41.ggIsActive()) {
			me.__41.ggLastIsActive=me.__41.ggIsActive();
			if (me.__41.ggLastIsActive) {
				me.__43.style.transition='none';
				me.__43.style.visibility='hidden';
				me.__43.ggVisible=false;
			} else {
			}
		}
		me.__36.ggUpdateConditionTimer();
		me.__35.ggUpdateConditionTimer();
		if (me.__35.ggLastIsActive!=me.__35.ggIsActive()) {
			me.__35.ggLastIsActive=me.__35.ggIsActive();
			if (me.__35.ggLastIsActive) {
				me.__38.style.transition='none';
				me.__38.style.visibility='hidden';
				me.__38.ggVisible=false;
				me.__39.style.transition='none';
				me.__39.style.visibility='hidden';
				me.__39.ggVisible=false;
			} else {
			}
		}
		me.__31.ggUpdateConditionTimer();
		me.__30.ggUpdateConditionTimer();
		if (me.__30.ggLastIsActive!=me.__30.ggIsActive()) {
			me.__30.ggLastIsActive=me.__30.ggIsActive();
			if (me.__30.ggLastIsActive) {
				me.__32.style.transition='none';
				me.__32.style.visibility='hidden';
				me.__32.ggVisible=false;
			} else {
			}
		}
		me.__21.ggUpdateConditionTimer();
		me.__22.ggUpdateConditionTimer();
		if (me.__22.ggLastIsActive!=me.__22.ggIsActive()) {
			me.__22.ggLastIsActive=me.__22.ggIsActive();
			if (me.__22.ggLastIsActive) {
				me.__23.style.transition='none';
				me.__23.style.visibility='hidden';
				me.__23.ggVisible=false;
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};