// PULPO
function add_Bloopa(Q){
	Q.Sprite.extend('Bloopa',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_bloopa',
				sheet: 'bloopa', 
                vy: -400,
                hamuerto:false
	        });
	        this.add('2d, animation, defaultEnemy');
	        this.on('die');
		},
		step: function(dt)
		{		
			if(!this.p.hamuerto){
				this.play('jump1');
	    		if(this.p.vy >= 200)
	    			this.play('jump2');
	    		if(this.p.vy == 0)
    				this.p.vy = -500;
			}	
			else{
				this.play('die');
			}
						   
		},
		die: function(dt)
		{
			//console.log('##### muerteeeee del pulpo');	
       		this.p.hamuerto = true;
       		setTimeout(function() {
                Q('Bloopa').destroy();
			}, 200);
       	}
	});

	Q.animations('anim_bloopa',{
    	jump1:{frames:[0], rate: 1/3, flip: false},
    	jump2:{frames:[1], rate: 1/3, flip: false},
    	die:{frames:[2],loop: false}
    });
}