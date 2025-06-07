import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import exampapertopic from '@/views/modules/exampapertopic/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import forum from '@/views/modules/forum/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kecheng from '@/views/modules/kecheng/list'
    import kechengCollection from '@/views/modules/kechengCollection/list'
    import kechengLiuyan from '@/views/modules/kechengLiuyan/list'
    import news from '@/views/modules/news/list'
    import tongxunlu from '@/views/modules/tongxunlu/list'
    import tongzhi from '@/views/modules/tongzhi/list'
    import xuexiaojianjie from '@/views/modules/xuexiaojianjie/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yonghuKaoqin from '@/views/modules/yonghuKaoqin/list'
    import yonghuKaoqinList from '@/views/modules/yonghuKaoqinList/list'
    import yonghuqingjia from '@/views/modules/yonghuqingjia/list'
    import zuoye from '@/views/modules/zuoye/list'
    import config from '@/views/modules/config/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJiaoshi from '@/views/modules/dictionaryJiaoshi/list'
    import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
    import dictionaryKechengCollection from '@/views/modules/dictionaryKechengCollection/list'
    import dictionaryKemu from '@/views/modules/dictionaryKemu/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryTongzhi from '@/views/modules/dictionaryTongzhi/list'
    import dictionaryXuexiaojianjie from '@/views/modules/dictionaryXuexiaojianjie/list'
    import dictionaryYonghuKaoqinList from '@/views/modules/dictionaryYonghuKaoqinList/list'
    import dictionaryYonghuqingjia from '@/views/modules/dictionaryYonghuqingjia/list'
    import dictionaryYonghuqingjiaYesno from '@/views/modules/dictionaryYonghuqingjiaYesno/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZujuan from '@/views/modules/dictionaryZujuan/list'
    import dictionaryZuoye from '@/views/modules/dictionaryZuoye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBanji',
        name: '星期',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiaoshi',
        name: '教师类型',
        component: dictionaryJiaoshi
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程类型',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionaryKechengCollection',
        name: '收藏表类型',
        component: dictionaryKechengCollection
    }
    ,{
        path: '/dictionaryKemu',
        name: '科目',
        component: dictionaryKemu
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTongzhi',
        name: '通知类型',
        component: dictionaryTongzhi
    }
    ,{
        path: '/dictionaryXuexiaojianjie',
        name: '简介类型',
        component: dictionaryXuexiaojianjie
    }
    ,{
        path: '/dictionaryYonghuKaoqinList',
        name: '打卡状态',
        component: dictionaryYonghuKaoqinList
    }
    ,{
        path: '/dictionaryYonghuqingjia',
        name: '请假类型',
        component: dictionaryYonghuqingjia
    }
    ,{
        path: '/dictionaryYonghuqingjiaYesno',
        name: '申请状态',
        component: dictionaryYonghuqingjiaYesno
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZujuan',
        name: '组卷方式',
        component: dictionaryZujuan
    }
    ,{
        path: '/dictionaryZuoye',
        name: '作业类型',
        component: dictionaryZuoye
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '意见反馈',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷表',
        component: exampaper
      }
    ,{
        path: '/exampapertopic',
        name: '试卷选题',
        component: exampapertopic
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jiaoshi',
        name: '教师信息',
        component: jiaoshi
      }
    ,{
        path: '/kecheng',
        name: '课程信息',
        component: kecheng
      }
    ,{
        path: '/kechengCollection',
        name: '课程收藏',
        component: kechengCollection
      }
    ,{
        path: '/kechengLiuyan',
        name: '课程留言',
        component: kechengLiuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/tongxunlu',
        name: '通讯录',
        component: tongxunlu
      }
    ,{
        path: '/tongzhi',
        name: '通知信息',
        component: tongzhi
      }
    ,{
        path: '/xuexiaojianjie',
        name: '学校简介',
        component: xuexiaojianjie
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/yonghuKaoqin',
        name: '学生考勤',
        component: yonghuKaoqin
      }
    ,{
        path: '/yonghuKaoqinList',
        name: '学生考勤详情',
        component: yonghuKaoqinList
      }
    ,{
        path: '/yonghuqingjia',
        name: '学生请假',
        component: yonghuqingjia
      }
    ,{
        path: '/zuoye',
        name: '作业',
        component: zuoye
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
