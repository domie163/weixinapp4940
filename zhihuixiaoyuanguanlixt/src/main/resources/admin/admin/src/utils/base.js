const base = {
    get() {
        return {
            url : "http://localhost:8080/zhihuixiaoyuanguanlixt/",
            name: "zhihuixiaoyuanguanlixt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhihuixiaoyuanguanlixt/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧校园管理系统"
        } 
    }
}
export default base
