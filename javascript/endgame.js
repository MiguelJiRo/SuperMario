function add_EndGame(Q)
{
    Q.scene('endGame', function(stage) {
            var box = stage.insert(new Q.UI.Container({
                x: Q.width / 2,
                y: Q.height / 2,
                fill: 'rgba(0,0,0,0.5)'
            }));

            var button = box.insert(new Q.UI.Button({
                x: 10,
                y: 10,
                fill: '#CCCCCC',
                label: 'Play Again'
            }));

            var label = box.insert(new Q.UI.Text({
                x: 10,
                y: -10 - button.p.h,
                label: stage.options.label
            }));
            
            button.on('click', function() {
                Q.audio.stop('music_die.mp3');
                Q.audio.stop('music_level_complete.mp3');
                Q.audio.play('music_main.mp3', {loop:true});
                Q.clearStages();
                Q.stageScene('level1');
            });

            box.fit(20);
        });
}