function add_Princess(Q)
{
Q.Sprite.extend('Princess', {
        init: function(p) {
            this._super(p, {
                asset: 'princess.png',
                x: 2000,
                y: 400,
            });
            this.add('2d');

            this.on('bump.top, bump.left, bump.right, bump.bottom', function(collision){
	        	if(collision.obj.isA("Mario")){
	        		collision.obj.victoria();
	        	}
	        });
        }
    });
}