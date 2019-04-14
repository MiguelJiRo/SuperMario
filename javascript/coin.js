function add_Coin(Q){
	Q.Sprite.extend('Coin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_coin',
				sheet: 'coin',
				/*
		        SENSOR:
		        Set sensor to true so that it gets notified when it's hit,
		        but doesn't trigger collisions itself that cause the player 
		        to stop or change direction
		        */
				sensor:true,
				get:false
				
	        });
	        this.add('tween,animation');
	        /*this.on('bump.left, bump.right, bump.bottom, bump.top', function(collision){
	        	if(collision.obj.isA("Mario"))
	        	{    
	        		this.anim_delete_coin();   		
	        	}
	        });*/
	        this.on('sensor');

		},
		sensor: function()
		{	
			console.log("##### monedas");
			var get = function(){
	        	this.destroy();
	        }		
	        this.animate({ y: this.p.y - 50 }, 0.2, { callback: get });	    	
			// evitar que se sumen monedas extras por la animacion
			if(!this.p.get){
				this.p.get = true;

				Q.state.inc('coins',1);	
				Q.audio.play('coin.mp3');	
			}			
		},
		step: function(dt)
		{
			this.play('moneda');			
		}
	});

	Q.animations('anim_coin',{
    	moneda:{frames:[0,1,2], rate: 1/3,loop: true}
    });
}