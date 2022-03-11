import React, { useState } from 'react';


let BoxGenerator = (props) =>{
    const [color, setcolor] = useState("")
    const[boxWidth, setboxWidth] = useState("")
    const[boxHeight,setboxHeight] = useState("")
    let [colorList, setcolorList] = useState([])

    const handleSubmit = (e) => {//prevent the form from loading the page
        e.preventDefault();
        let colorObj = {color,boxWidth,boxHeight} // crate an object
        
        setcolorList([...colorList,colorObj]) //append on the array
        console.log(colorList)
        setcolor("")
        setboxWidth("")
        setboxHeight("")
    };
    return<>
<form onSubmit={handleSubmit}>
    <div className='form-group' >
        <label>Color: </label>
        <input type="text" className='form-group' value={color} onChange={(e) =>setcolor(e.target.value)} />
        <label>width: </label>
        <input type="number"  className='form-group' value={boxWidth} onChange={(e) =>setboxWidth(e.target.value)}/>
        <label>height: </label>
        <input type="number"  className='form-group' value={boxHeight} onChange={(e) =>setboxHeight(e.target.value)}/>
        <input type="submit" value="Add"/>
    </div>
</form>
{
colorList.map((color,i) =>{//for loop
    return <div key = {i} style={{backgroundColor: color.color, width: color.boxWidth +"px", height:color.boxHeight + "px", display:"inline-block"}}>
        </div>
})
}
</>
}

export default BoxGenerator