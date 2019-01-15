var audio = null;

export default {
    play(obj,url){
        obj.play()
    },
    progress(obj,cb){
        obj.timer = setInterval(()=>{
            var t = Math.floor((obj.currentTime/obj.duration)*100) ;
            cb(t)
            if(obj.currentTime === obj.duration){
                clearInterval(obj.timer)
            }
        },100)
    }
}