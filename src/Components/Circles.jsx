
import React, { useState } from 'react'

const Taskcircle = () => {
const [backgroundcolor,setBackgroundColor]=useState("white")
const [circles,setcircles]=useState([])
    const handletheclick=(e)=>{
        if (circles.length>=2) {
            setcircles([])
            setBackgroundColor("white")
            return;
        }
        console.log(e);
        console.log(Math.floor(Math.random()*10),"done");
        
            const radius=Math.floor(Math.random()*(200-20+1))+20
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;// to genereate random color  "rgb(255, 0, 0)" this is how usually generate colors
            console.log(radius);
            const createdcircle={
                x:e.clientX,
                y:e.clientY,
                radius,
                color:randomColor
            }
            console.log(createdcircle.x,radius);
            console.log(createdcircle.y,radius);

            const intersects=circles.some((extractcircles)=>{
                    const dx=createdcircle.x-extractcircles.x
                    const dy=createdcircle.y-extractcircles.y
                    const dist=Math.sqrt(dx*dx+dy*dy)
                    return dist<(createdcircle.radius+extractcircles.radius)

            })
            if (intersects) {
                setBackgroundColor("red")
            }else{
                setBackgroundColor("white")
            }
            
            setcircles((prev)=>[...prev,createdcircle])
            console.log(circles,"circuted");
            
        
    }
  return (
  <>
    <div onClick={handletheclick} style={{
        backgroundColor:backgroundcolor,
        width:"100vw",
        height:"100vh",
        position:"relative",
        

    }}>{
        
            circles.length === 0 && "Click anywhere to create a circle" 
    }
        {
            circles.map((details,index)=>(
                  <div key={index} style={{
                    backgroundColor:details.color,//here i have utilised randome colors paryt
                    position:"absolute",
                    left:details.x-details.radius+"px",
                    top:details.y-details.radius+"px",
                    width:2*details.radius+"px",
                    height:2*details.radius+"px",
                    borderRadius:"50%",
                    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.35)", 
                    //here i want show when they are intersected we need to show its intersected
                  }}>

                  </div>
            ))
        }
       
       
    </div>
  
  </>
  )
}

export default Taskcircle
