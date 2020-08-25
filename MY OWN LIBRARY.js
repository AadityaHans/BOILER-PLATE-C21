function isTouching(sprite1, object2){
    if(sprite1.x-object2.x < sprite1.width/2+object2.width/2 &&
      object2.x-sprite1.x <sprite1.width/2+object2.width/2 &&
      object2.y-sprite1.y <sprite1.height/2+object2.height/2&&
      sprite1.y-object2.y <sprite1.height/2+object2.height/2
      ) {
  
  return true
  
     }
  
     else{
  
      return false
      }
  }
  
  function bounceOff(sprite6, object4){
  
    if(sprite6.x-object4.x < sprite6.width/2+object4.width/2 &&
      object4.x-sprite6.x <sprite6.width/2+object4.width/2 )
      {
        sprite6.velocityX=sprite6.velocityX*(-1)
        object4.velocityX=object4.velocityX*(-1)
      }
    
      if(object4.y-sprite6.y <sprite6.height/2+object4.height/2 &&
        sprite6.y-object4.y <sprite6.height/2+object4.height/2)
        
        {
        sprite6.velocityY=sprite6.velocityY*(-1)
        object4.velocityY=object4.velocityY*(-1)
        }
    
  
    
  }