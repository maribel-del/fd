let mySprite: Sprite = null
mySprite.x += 0
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.flyToCenter),
2000,
true
)
game.onUpdate(function () {
    scene.cameraFollowSprite(mySprite)
})
