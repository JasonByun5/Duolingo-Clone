"use-server";

import { auth, currentUser } from "@clerk/nextjs/server";

import { getCourseById } from "@/db/queries";

export const upsertUserProgress = async (courseId: number) => {
    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user){
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);

    if(!course) {
        throw new Error("Course not found");
    }
    
    //TODO: Enable once units and lessons are added
    //if(!course.units.length || !course.units[0].lessons.length){
    //    throw new Error("Course is empty");
    //}
}