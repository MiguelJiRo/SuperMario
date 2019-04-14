function add_Hud(Q){
	Q.UI.Text.extend('Score',{
		init: function(p){
			this._super(p,{
				x:-50,
				y:50,
				label: p.label
		});
		Q.state.on('change.coins', this, 'addCoins');
	},
		addCoins: function(coins) {
	      	this.p.label = 'Coins: ' + coins;
		}
	});

	Q.scene('hud', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 3,
            y: 0,
            fill: 'rgba(255,255,0,0.0)'
        }));
        var label = container.insert(
        	new Q.Score({
        		label: 'Coins:0'
        	}));
	});
}