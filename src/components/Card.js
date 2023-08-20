import React from "react";
import {useState, useEffect} from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-toastify";
const Card=({course,likedCourses,setLikedCourses})=>{
    
    function clickHandler(){ 
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev)=>
                                prev.filter((cid)=> (cid!==course.id))
                            );
            toast.warning("like removed !");
        }else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses( (prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully !");
        }
    }

    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
            
                <div className="grid place-content-center absolute right-2 bottom-3 w-[40px] h-[40px] bg-white rounded-full ">
                    <button onClick={clickHandler}>
                        {
                        !likedCourses.includes(course.id)?
                        (<FcLikePlaceholder fontSize="1.75rem"/>):
                        (<FcLike fontSize="1.75rem"/> )
                        }    

                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                    course.description.length>100?
                    (course.description.substring(0,200)+"..."):(course.description)
                    }
                    </p>
            </div>
        </div>
    )
}
export default Card;