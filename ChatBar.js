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
			var
			el=this.el,
			input=el.querySelector('input'),
			svg=el.querySelector('svg')

			if (input.disabled || !input.value) return

			input.disabled=true
			svg.classList.add('disabled')

			this.sendMsg(input.value, function(err){
				input.disabled=false
				svg.classList.remove('disabled')
				if (err) return __.dialogs.alert(err,'Server error')
				input.value=''
			})
        }
    },
	sendMsg:function(msg, cb){
		cb()
	}
}
