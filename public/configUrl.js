const ips = {
    //运维中心
    mc: 'http://192.168.3.99:7400',  //莫晨
    ryl: 'http://192.168.3.23:7400', //ruyali
    fm: 'http://172.19.12.115:7400', //范敏

    // 执法管理系统
    ag_mc: 'http://192.168.3.99:7700',  //莫晨
    ag_ryl: 'http://192.168.3.17:7700',  //汝亚莉
    ag_fm: 'http://192.168.3.159:7700',//范敏
    ag_wyx: 'http://192.168.3.17:7700',
    ag_zyz: 'http://192.168.3.11:7700', // 张雅致

    // 安全中心
    zx: 'http://172.19.12.165:8080', // 张旭
}

window.configUrl = {
    sysName: '执法管理系统',
    headName: '海邻科执法管理系统', // 左侧导航顶部显示名称
    footName: '哈尔滨海邻科信息技术有限公司',
    version: 'V 1.2.9.2',
    sid: "zhag",// 系统资源ID
    showDataTitle: '鹤壁市', // 大屏展示标题
    mapCityName: 'hebi', // 大屏展示地图名称（可配置项： mudanjiang/ hulunbeier/baishan/hebi/erduosi）
    mapAreaChangeTime: 5, // 大屏地图轮换间隔时间（秒）
    refreshNoticeTime: 20, // 自动获取消息时间（秒）

    // 首页配置
    isShowBaqsstj: true, // 是否显示办案区实时统计数据（false则显示案件状态统计）

    // 是否与后台进行通信
    isSyncBaq: true, // 办案区
    isSyncCaseOnTime: true, // 案件实时数据
    isSyncCaseCount: true, // 案件统计
    isSyncCaseItems: true, // 涉案物品
    testUrl: 'http://192.168.3.201:7200', // 卷宗子系统
    jzUrl:'http://192.168.3.23:7200',// 蠕哑狸卷宗子系统

    /*------------------------------开发测试地址 start-----------------------------------------------*/
    serverUrl: ips.ag_ryl,
    // serverUrl: ips.ag_fm,
    // maintainCenterUrl: ips.mc,

    securityCenterUrl: 'http://192.168.3.222:8100',
    baqServerUrl: 'http://192.168.3.202:7500',
    maintainCenterUrl: 'http://192.168.3.202:7400',
    // maintainCenterUrl: 'http://192.168.3.249:7400',
    generalQueryUrl: 'http://192.168.3.201:9200/',
    // securityCenterUrl: 'http://172.168.3.201:8100',//安全中心地址
    personQueryIndex: 'index_saryxx_hb', // 人员索引
    itemsQueryIndex: 'index_wpxx_hb', // 物品索引
    caseQueryIndex: 'index_ajxx_hb', // 案件索引
    baqQueryIndex: 'index_rqxx_hb', // 办案区索引
    dossierQueryIndex: 'index_jzxx_hb', // 卷宗索引
    /*------------------------------------开发测试地址 end-----------------------------------------*/

    /*------------------------------------线上部署地址-----------------------------------------*/
    // serverUrl: 'http://192.168.3.201:7700', // 案管服务
    // baqServerUrl: 'http://192.168.3.201:7500', // 办案区服务地址
    // maintainCenterUrl: 'http://192.168.3.201:7400', //软件服务
    // securityCenterUrl: 'http://192.168.3.201:8100',// 安全中心地址
    // caseServer: '172.19.12.225:8085', // 案件子系统地址
    // policeSituationServer: '172.19.12.225:8082', // 警情子系统地址
    // generalQueryUrl: 'http://172.19.12.249:9200/',// 综合查询es服务地址
    // personQueryIndex: 'index_saryxx_001', // 人员索引
    // itemsQueryIndex: 'index_wpxx_001', // 物品索引
    // caseQueryIndex: 'index_ajxx_002', // 案件索引
    // baqQueryIndex: 'index_rqxx_001', // 办案区索引
    // dossierQueryIndex: 'index_jzxx_hb', // 卷宗索引
    smartlinKeyUrl: 'http://127.0.0.1:1234', // smartlinkey登录地址
    isSmartLinKey: true,// 是否登录smartlinkey客户端
    mainlineMenu:false,//是否为主线菜单（控制跳转路径）
    zhagUrl:'http://192.168.3.201:97/#/loginByToken?type=0&token=',//智慧案管跳转接口
    sacwUrl:'http://192.168.3.159:8083/HCRFID/smartlinkey/smartlinkeyLoign.do?type=0&userCodeMD=',//涉案财物跳转接口
    baqUrl:'http://192.168.41.249/#/user/loginBytoken?token='//办案区跳转接口

}
