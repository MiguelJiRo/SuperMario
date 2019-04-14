function add_Coin(Q){
	Q.Sprite.extend('Coin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_coin',
				sheet: 'coin',
				existe: true,
				gravity: 0
	        });
	        this.add('2d,tween, animation');
	        this.on('bump.left, bump.right, bump.bottom, bump.top', function(collision){
	        	if(collision.obj.isA("Mario"))
	        	{    
	        		this.anim_delete_coin();   		
	        	}
	        });
		},
		step: function(dt)
		{
			this.play('moneda');			
		},
		anim_delete_coin: function(){	
			var deletemoneda = function(){
	        	this.destroy();
	        }		
	        this.animate({ y: this.p.y - 50 }, 0.2, { callback: deletemoneda });	    	
			// evitar que se sumen monedas extras por la animacion
			if(this.p.existe){
				this.p.existe = false;
				Q.audio.play('coin.mp3');				
				Q.state.inc('coins',1);		
			}			
		}
	});

	Q.animations('anim_coin',{
    	moneda:{frames:[0,1,2], rate: 1/3, flip: false, loop: true}
    });
}