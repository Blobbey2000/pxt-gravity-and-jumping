//% blockGap="8"
namespace sprites {

    /**
    * Sets sprite gravity.
    */
    //% block="set $sprite=variables_get gravity to $gravity"
    //% group="Physics"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    export function setSpriteGravityTo(sprite: Sprite, gravity: number) {
        sprite.ay = gravity
    }

    /**
    * Makes sprite jump.
    */
    //% block="make $sprite=variables_get jump $jump"
    //% group="Physics"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    export function makeSpriteJump(sprite: Sprite, jump: number) {
        sprite.vy = jump * -1
    }

}


