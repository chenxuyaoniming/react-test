const local = window.localStorage;
const session = window.sessionStorage;

export default {
    async setLocal(data){
        var str = JSON.stringify(data);
        local.setItem('songList',str)
    },
    async getLocal(id){
        var str = local.getItem(id);
        return str
    },
    async delLocal(id){
        local.removeItem(id);
    }
}