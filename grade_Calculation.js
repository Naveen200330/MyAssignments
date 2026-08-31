function studentGrade(mark){

    let studentname='Navsway'

    switch(true){

        case (mark<=100 && mark>80):{
            console.log(studentname,"is O Grade")
            break
        }

         case (mark<=80 && mark>75):{
            console.log(studentname,"is A Grade")
            break
                    }

          case (mark<=75 && mark>60):{
            console.log(studentname,"is B Grade")
            break
        }

           case (mark<=60 && mark>40):{
            console.log(studentname,"is D Grade")
            break
        }

        case (mark==40):{
            console.log(studentname,"is Just pass D Grade")
            break
        }

         case (mark>100):{
            console.log("Invalid Mark")
            break
        }
        default:{
            console.log(studentname,"is Fail")
        }

    }
}


studentGrade(81);
