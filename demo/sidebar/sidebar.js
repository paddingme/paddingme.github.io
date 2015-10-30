
/*
click closeBar sidebar 状态
*/

//全局污染？

//模块模式降低全局污染，立即执行函数

(function() {
	var　Menubar=function(){
		this.el=document.querySelector('#sidebar ul');
		console.log(this.el);
		this.state="allClosed";//hasOpened
		this.el.addEventListener('click',function(e){
			e.stopPropagation();//停止事件向上传播
		});

		var self=this;
		this.currentOpenMenuContent=null;
		this.menuList=document.querySelectorAll('#sidebar ul>li');//查	
		for(var i=0;i<this.menuList.length;i++){
			this.menuList[i].addEventListener('click',function(e){
				var menuContentEl=document.getElementById(e.currentTarget.id+'-content');
				if(self.state==='allClosed'){
					console.log('打开'+menuContentEl.id);
					menuContentEl.style.top='0';
					menuContentEl.style.left='-85px';
					menuContentEl.className='nav-content';
					menuContentEl.classList.add('menuContent-move-right');
					self.state='hasOpened';
					self.currentOpenMenuContent=menuContentEl;
				}else{
					console.log('关闭'+self.currentOpenMenuContent.id);
					self.currentOpenMenuContent.className="nav-content";
					self.currentOpenMenuContent.style.top='0';
					self.currentOpenMenuContent.style.left='35px';
					self.currentOpenMenuContent.classList.add('menuContent-move-left');

					console.log('打开'+menuContentEl.id);
					menuContentEl.className='nav-content';
					menuContentEl.style.top='250px';
					menuContentEl.style.left='35px';
					menuContentEl.classList.add('menuContent-move-up');

					self.state='hasOpened';
					self.currentOpenMenuContent=menuContentEl;
				}
			});
		}

		this.menuContentList=document.querySelectorAll('.nav-content > div.nav-con-close');
		for(i=0;i<this.menuContentList.length;i++){
			this.menuContentList[i].addEventListener('click',function(e){
			var menuContent=e.currentTarget.parentNode;
			menuContent.className="nav-content";
			menuContent.style.top='0';
			menuContent.style.left='35px';
			menuContent.classList.add('menuContent-move-left');
			that.state="allClosed";
			});
		}
	};

	var Sidebar = function(eID,closeBarId) {
		this.state = 'opened';
		// console.log(this);
		this.el=document.getElementById(eID||'sidebar');
		this.closeBarEl=document.getElementById(closeBarId||'closeBar');
		var self=this;
		this.menubar =new Menubar();
		this.el.addEventListener('click',function(event){
			if(event.target !==self.el){
				console.log(this);
				self.triggerSwitch();//注意这里的this指的是谁？（click发生之后系统自动执行，修改了上下文。这里运用闭包来解决）
			}
		})
	};
	Sidebar.prototype.close = function(){
		console.log("关闭 sidebar");
		this.el.className='sidebar-move-left';
		console.log("sidebar move left");
		this.closeBarEl.className='closeBar-move-right';
		console.log("closeBar 向右移动");
		this.state='closed';
	};
	Sidebar.prototype.open = function(){
		console.log("打开 sidebar");
		this.el.style.left='-120px';
		this.el.className='sidebar-move-right';
		this.closeBarEl.style.left='160px';
		this.closeBarEl.className='closeBar-move-left';
		this.state='opened';
	};
	Sidebar.prototype.triggerSwitch=function(){
		if(this.state==='opened'){
			this.close();
		}else{
			this.open();
		}
	};

	var sidebar=new Sidebar();

})();



//冒泡传播机制 向上冒泡传播