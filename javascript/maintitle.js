function add_MainTitle(Q)
{
     Q.scene('mainTitle', function(stage) {
        var box = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: 5,
            fill: 'rgba(0,0,0,0.5)'
        }));

        var button = box.insert(new Q.UI.Button({
            asset: 'mainTitle.png',
            x: 0,
            y: (Q.height / 2) - 5
        }));
        // al realizar un click para a la escena del level1
        button.on('click', function() {
            Q.clearStages();
            Q.stageScene('level1');
        });

        var label = box.insert(new Q.UI.Text({
            x: 0,
            y: 10,
            label: 'Press Enter or click to start',
            size: 18,
            color: '#000000'
        }));
        Q.state.set('play', false);
        Q.state.reset({ coins: 0 });
        Q.audio.stop('music_die.mp3');
        Q.audio.stop('music_level_complete.mp3');
        Q.audio.play('music_main.mp3', {loop:true});
        box.fit(20);

    });
}