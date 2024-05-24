import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function CarouselDemo() {
     interface MyObject {
        [index: number]: string; // Specify the numeric index signature
    }
    
    // Now you can use MyObject as the index type
    const myArray: MyObject = {
        0: "https://content.instructables.com/FTP/WJHU/LD5YNRGB/FTPWJHULD5YNRGB.jpg?auto=webp",
        1: "https://helios-i.mashable.com/imagery/articles/02EOVUJMng43z3sAjSeCkfR/hero-image.fill.size_1200x1200.v1628527512.png",
        2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWqA3kLjrJlX0G5eGS2zJ0mTmNCDk4ug5rD2tUI56aw&s",
        3: "https://media.istockphoto.com/id/1354828354/photo/white-industrial-robot-arm.jpg?s=612x612&w=0&k=20&c=-CrLoxKBmzNmjzxwsu1HJAMs006otgJ-13nFRTQXsSc="
    };
    const myArray2: MyObject={
        0:"GYROBOT: SELF-BALANCING ROBOT",
        1:"SPACE STATION: CONTROLS AND COMMUNICATION",
        2:"AUTONOMOUS NAVIGATION OF MARS ROVER",
        3:"ROBOTIC ARM"
    };
    const myArray3: MyObject={
        0:"A two-wheeled self-balancing robot that achieves perfect equilibrium, using technology and precision engineering.",
        1:"To develop and validate the communication and control system for remotely operating the rover over extensive distances with precise movement and efficient data transfer.",
        2:"To design and simulate the system of autonomous navigation for the mars rover, which mainly covers up obstacle detection and classification, obstacle avoidance and path planning.",
        3:"Controlling motors with microcontrollers. Then use inverse kinematics for arm movement and finally use the arm to pick and place objects autonomously."
    };
    return (
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xl"
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/1">
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex items-start justify-start p-6">
                      
                      <img src={myArray[index]} className="mr-4 h-[200px]" alt="Your Image" /> 
                      
                      <span className="text-x2 font-semibold">{myArray2[index]}
                      <br/><br/>
                      {myArray3[index]}</span> 
                      
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
}