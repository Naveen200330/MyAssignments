function launchBrowser(BrowserName){

    if (BrowserName==='Chrome'){
        console.log("BrowserName:",BrowserName," is applicable")
    }
    else{
        console.log(BrowserName, "BrowserName is not applicable")
    } 

}

function runTests(testType){
     
    switch (testType){

        case 'smoke':{
            console.log("Smoke Testing")
          break
        }

         case 'sanity':{
            console.log("Sanity Testing")
          break
        }

          case 'regression':{
            console.log("Regression Testing")
          break
        }

        default:{
            console.log("smoke Testing")
        }    }

}


launchBrowser("firefox");
runTests("regression");
