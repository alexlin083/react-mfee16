import React,{useEffect} from 'react'
import $ from 'jquery'

function MyButtonUseId(props){

    const {title,message}=props

    useEffect(()=>{
        $("one").on('click',()=>{
            alert('message')
        })
    },[])

    return (
        <>
      <button id="one">{title}</button>
    </>
    )

}

export default MyButtonUseId;