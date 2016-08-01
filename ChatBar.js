return {
    deps:{
        paneId:'int',
		tpl:'file',	
		icon:'text'
    },
    create: function(deps){
        this.el.innerHTML=deps.tpl({icon:deps.icon})
    },
	slots:{
	},
    events: {
		'click svg':function(e){
			var input=this.el.querySelector('input')
			if (!input.value) return
			this.sendMsg(input.value)
			input.value=''
        }
    },
	sendMsg:function(msg){
	}
}
