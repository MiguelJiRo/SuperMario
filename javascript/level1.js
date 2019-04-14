// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level.tmx',stage);	
		// insertar jugador
		var player = stage.insert(new Q.Mario());	
		// insertar enemigos
		//stage.insert(new Q.Goomba({x: 1550,y: 500}));
		stage.insert(new Q.Goomba({x: 350,y: 500}));
		//stage.insert(new Q.Bloopa({x: 1200,y: 500}));
		//stage.insert(new Q.Bloopa({x: 900,y: 500}));
		stage.insert(new Q.Bloopa({x: 150,y: 500}));
		// otros objetos
		stage.insert(new Q.Princess());
		stage.insert(new Q.Coin({ x: 600, y: 470 }));
        stage.insert(new Q.Coin({ x: 640, y: 470 }));
		stage.insert(new Q.Coin({ x: 680, y: 470 }));
		stage.insert(new Q.Coin({ x: 720, y: 470 }));
        stage.insert(new Q.Coin({ x: 760, y: 470 }));
		stage.insert(new Q.Coin({ x: 800, y: 470 }));
		stage.insert(new Q.Coin({ x: 1000, y: 470 }));
        stage.insert(new Q.Coin({ x: 1040, y: 470 }));
		stage.insert(new Q.Coin({ x: 1080, y: 470 }));

		stage.add('viewport')
			.follow(player, 
				{
					x: true, 
					y: true
				},
				{
					minY: 125, 
					maxY: 500
				});
		Q.stageScene('hud',1);
	});
}
