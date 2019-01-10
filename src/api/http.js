import http from 'axios';

export default {
    songList(){
        return http.get('/api/plist/index',{
            params:{
                json:true
            }
        }).then((res)=>{
            return res
        }).catch(err=>{
            console.log(err,'歌单获取失败')
        })
    },
    banner(){
        return http.get('/api',{
            params:{
                json:true
            }
        }).then(res=>{
            return res
            
        })
    },
    redSong(id){
        return http.get(`/api/plist/list/${id}`,{
            params:{
                json:true
            }
        }).then(res=>{
            console.log('==获取歌单成功==')
            return res
        }).catch(err=>{
            console.log(err,'==获取歌单列表失败==')
        })
    },
    getSong(id){
        return http.get('/api/app/i/getSongInfo.php',{
            params:{
                cmd:'playInfo',
                hash:id
            }
        }).then(res=>{
            console.log(res,'==歌曲获取成功==')
            return res
        }).catch(err=>{
            console.log(err,'==歌曲获取失败==')
        })
    }
}