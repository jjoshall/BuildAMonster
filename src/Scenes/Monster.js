class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftLegX = 250;
        this.leftLegY = 450;
        this.rightLegX = 350;
        this.rightLegY = 460;
        this.leftHandX = 215;
        this.leftHandY = 375;
        this.rightHandX = 370;
        this.rightHandY = 375;
        this.eye1X = 265;
        this.eyeY = 300;
        this.eye2X = 325;
        this.smileX = 300;
        this.smileY = 350;
        this.ant1X = 345;
        this.ant1Y = 255;
        this.earX = 250;
        this.earY = 240;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenB.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redE.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png");
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_yellowE.png");
        my.sprite.leftHand.flipX = true;
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_redE.png");
        my.sprite.eye1 = this.add.sprite(this.eye1X, this.eyeY, "monsterParts", "eye_angry_red.png");
        my.sprite.eye2 = this.add.sprite(this.eye2X, this.eyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthE.png");
        my.sprite.ant1 = this.add.sprite(this.ant1X, this.ant1Y, "monsterParts", "detail_green_horn_large.png");
        my.sprite.ear = this.add.sprite(this.earX, this.earY, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.ear.flipX = true;
        my.sprite.fang = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthB.png");
        my.sprite.fang.setVisible(false);

        // based on example from online at https://labs.phaser.io/edit.html?src=src\input\keyboard\add%20key.js
        my.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        my.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        my.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(my.keyS.isDown)
        {
            my.sprite.fang.setVisible(false);
            my.sprite.smile.setVisible(true);
        }
        else if (my.keyF.isDown)
        {
            my.sprite.fang.setVisible(true);
            my.sprite.smile.setVisible(false);
        }
    
        
            if (my.keyA.isDown) {
                for (const key in this.my.sprite) {
                    this.my.sprite[key].x -= 3;
                }
            }
            if (my.keyD.isDown) {
                for (const key in this.my.sprite) {
                    this.my.sprite[key].x += 3;
                }
        }
    }

}
