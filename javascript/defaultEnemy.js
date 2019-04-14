function add_defaultEnemy(Q){
	Q.component('defaultEnemy',{
		added: function(){
			//console.log('##### 1');	
			this.entity.on('bump.left, bump.right, bump.bottom',this,'matarMario');
			this.entity.on('bump.top',this,'matarEnemigo');
		},
		// mario muere por los lados y abajo
		matarMario: function(collision){				
			if(collision.obj.isA("Mario")){	  
				//console.log('##### 2 lados-abajo');  
	        	collision.obj.trigger('muere');
	        }
		},
		// mario ataca desde arriba
		matarEnemigo: function(collision){			
			if(collision.obj.isA('Mario')){
				//console.log('##### 3 arriba');	
        		this.entity.trigger('die');
        		collision.obj.p.vy = -300;
        		collision.obj.p.vx = 0;
	        }
		}
	});
}