import React from "react";
import {useState} from 'react';
import Card from "./Card";
const Cards=({courses,})=>{
    
    const[likedCourses, setLikedCourses]=useState([]);
    

    let allCourses=[]

    //returns a list of all course from api res
    const getCourses=()=>{
        Object.values(courses).forEach( (courseCategory)=>{
            courseCategory.forEach( (course)=>{
                allCourses.push(course);
            })
        })
        //console.log(allCourses);
        return allCourses;
    }


    return(
        // <div>
        //     {
        //     !courses?(<div><p>No data</p></div>):
        //         (
        //             getCourses().map((course)=>{
        //                 return(
        //                     <Card key={course.id} course={course}/>
        //                 )
        //             })
        //         )
        //     }
        // </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>{
                    return(
                        <Card key={course.id} 
                        course={course}
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses}/>
                    )
                })
            }
        </div>
    )
}
export default Cards;