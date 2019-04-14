window.addEventListener('load',function()
{
	var Q = Quintus({audioSupported:['mp3','ogg']})
			.include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
		    .setup({ 
		    	width: 320, 
		    	height: 480 
		    })
		    .controls()
		    .touch()
		    .enableSound();	
	
	add_MainTitle(Q);
	add_Mario(Q);
	add_defaultEnemy(Q);
	add_Goomba(Q);
	add_Bloopa(Q);
	add_EndGame(Q);
	add_Princess(Q);
	add_Coin(Q);
	add_Hud(Q);
	add_Level(Q);
	
	
	Q.loadTMX('level.tmx, coin.png, coin.json, mario_small.png, mario_small.json, goomba.png, goomba.json, bloopa.png, bloopa.json, princess.png, mainTitle.png, music_main.mp3, music_main.ogg, music_die.mp3, music_die.ogg, music_level_complete.mp3, music_level_complete.ogg, coin.mp3, coin.ogg', function()
	{
		Q.compileSheets('mario_small.png', 'mario_small.json');
		Q.compileSheets('goomba.png' ,'goomba.json');
		Q.compileSheets('bloopa.png' ,'bloopa.json');
		Q.compileSheets('coin.png' ,'coin.json');
		Q.stageScene('mainTitle');
	});
});
