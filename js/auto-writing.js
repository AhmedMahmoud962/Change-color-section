// setInterval vs clearInterval
// let i="Courses4Arab";
// const testfun=()=>{
//     website.innerText=i.length
//     i++
// }

// const stop =setInterval(testfun,1000)

// sec.addEventListener("click",(eo) => {
    
//     clearInterval(stop)
// })

// project js auto-writing

let counter=1;
const autoWriting=() => {
    const title ="Courses4Arab"
    website.innerText=title.slice(0,counter)
    counter++;

    if (title.length < counter) {

        counter=1;
        // clearInterval(stopfun) //to stop the fun
    }
}

 const stopfun= setInterval(autoWriting,300);