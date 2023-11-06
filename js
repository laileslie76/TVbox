{

"spider":"http://xutv.alwaysdata.net/jar/xu230316.jpg",
"lives": [{"group": "redirect","channels": [{"name": "redirect","urls": ["proxy://do=live&type=txt&ext=aHR0cDovL3h1dHYuaHouY3ovemIvMzE5emIudHh0"]}]}],
"flags": ["youku","qq","iqiyi","qiyi", "letv","sohu","tudou","pptv","mgtv", "wasu","bilibili","miaoparty2","longteng","renrenmi","优酷","芒果","腾讯","爱奇艺","奇艺","ltnb","rx","xueren",
"miaoparty","ziqie","m1905","ddzy","xigua","1920l","muxm3u8","duoduozy","xfyun","dengta","tudou"],


"rules": [{"name":"量子廣告","hosts":["vip.lz","hd.lz"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
          {"name":"非凡廣告","hosts":["vip.ffzy","hd.ffzy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
         {"name": "火山嗅探","hosts": [ "huoshan.com"],"regex": ["item_id="]},
         {"name": "抖音嗅探","hosts": ["douyin.com"],"regex": ["is_play_url="]}],



"sites": [

{
    "key":"csp_XBPQ_lezhu",
    "name":"🍹乐猪影视(老徐推荐:有广告)",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"简介\":\"简介：&&</p>\",
    \"主演\":\"主演：&&</p>\",
    \"副标题\":\"<span>&&</span>\",
    \"线路数组\":\"icon-pin&&</h3>[替换:在线视频 (支持手机)>>播放列表<序号>]\",
    \"线路标题\":\"</i>&&<\",
    \"播放数组\":\"class=\\\"list_block show&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#综艺$3#动漫$4#美剧$15\",
    \"分类url\":\"http://www.lezhutv.com/type/{cateId}-{catePg}.html\"}"},


{   "key":"csp_XBPQ_zhengbnongmys",
    "name":"🍹正版农民影视(老徐推荐:无广告)",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"倒序\":\"1\",
    \"主演\":\"主演:&&</div>\",
    \"副标题\":\"<span>&&<em>\",
    \"播放数组\":\"class=\\\"numList&&</div>\",
    \"简介\":\"简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介：&&</p>\",
    \"线路数组\":\"javascript:;&&/a>\",
    \"线路标题\":\">&&<\",
    \"分类\":\"电影$1#电视剧$2#国产剧$12#港剧$13#美剧$15#动漫$4#综艺$3\",
    \"分类url\":\"https://m.xiangdao.me/vod-list-id-{cateId}-pg-{catePg}-order--by-time-class-0-year-0-letter--area--lang-.html\"}"},


 

 {
    "key":"csp_XBPQ_达达龟",
    "name":"🍹达达龟影视(老徐推荐)",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"0\",
    \"主演\":\"主演:&&</div>\",
    \"播放数组\":\"class=\\\"stui-content__playlist clearfix&&</ul>\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"stui-vodlist__head&&/div>\",
    \"线路标题\":\"<h3>&&</h3>\",
    \"分类\":\"电影$1#电视剧$2#综艺$3#动漫$4\",
    \"分类url\":\"https://www.dadagui.me/vodshow/{cateId}--------{catePg}---.html\"}"},


{    
    "key":"csp_XBPQ_花猫",
    "name":"🍹花猫(老徐推荐)",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"简介\":\"简介：&&</p>\",
    \"主演\":\"主演：&&</p>\",
    \"线路数组\":\"class=\\\"stui-pannel__head clearfix\\\"&&/h3>\",
    \"线路标题\":\"title\\\">&&<\",
    \"副标题\":\"class=\\\"pic-text\\\">&&</span>\",
    \"数组\":\"stui-vodlist__item&&</li>\",
    \"播放数组\":\"class=\\\"stui-content__playlist clearfix&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$12#港剧$13#综艺$3#动漫$4\",
    \"分类url\":\"http://www.huamaotv.com/list/{cateId}_{catePg}_desc__0_0___.html\"}"},

{
    "key":"csp_XBPQ_fant",
    "name":"🍹假饭团影视（以下作备用）",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"简介\":\"简介：&&</p>\",
    \"主演\":\"主演：&&</p>\",
    \"副标题\":\"class=\\\"vtitle text-right\\\">&&</span>\",
    \"线路数组\":\"javascript:void(0);&&</li>\",
    \"线路标题\":\">&&</a>\",
    \"播放数组\":\"id=\\\"con_playlist&&</ul>\",
    \"分类\":\"电影$dianying#电视剧$dianshiju#国产剧$guocanju#综艺$zongyi#动漫$dongman#美剧$oumeiju\",
    \"分类url\":\"https://www.cnmudu.com/{cateId}/index-{catePg}.html\"}"},

{
    "key":"csp_XBPQ_aikan",
    "name":"🍹爱看影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"主演\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content show-desc\\\"*<p>&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$42#港剧$49#综艺$3#动漫$4\",
    \"分类url\":\"https://www.3wyy.com/vodshow/{cateId}--------{catePg}---.html\"}"},


{
    "key":"csp_XBPQ_duoju",
    "name":"🍹多剧影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content show-desc\\\"*<p>&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$13#港剧$34#综艺$3#动漫$4\",
    \"分类url\":\"https://duoju.vip/vodshow/{cateId}--------{catePg}---.html\"}"},
    //


{
	"key": "saohuo",
	"name": "🍹骚火影视",
	"type": 3,
	"searchable": 1,
	"quickSearch": 1,
	"playerType": "2",
	"api": "csp_XBPQ",
	"ext": {
         "倒序":"1",
	"分类url": "https://shdy3.com/list/{cateId}-{catePg}.html;;r1da",
	"分类": "电影$1#电视剧$2#港剧$21#美剧$23#动漫$4",
	"ocr": "https://api.xhofe.top/ocr/b64/text",
	"数组二次截取": "class=\"v_list\">&&</ul>",
	"数组": "\"v_img\"&&/div>",
	"标题": "title=\"&&\"",
	"副标题": "v_note\"&&</div",
	"跳转播放链接": "<iframe*src=\"&&\"",
	"二次跳转播放链接": "https://hkjx.hhplayer.com/api.php;post;url=+var url*\"&&\"+&t=+var t*\"&&\"+&key=+var key*\"&&\"+&act=0+&play=1",
	"三次跳转播放链接": "\"url\"*\"&&\""}},

{
    "key":"csp_XBPQ_dyxz",
    "name":"🍹电影小镇",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"data-toggle&&</li>\",
    \"线路标题\":\">&&</a>\",
    \"播放数组\":\"class=\\\"stui-content__playlist&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#综艺$4#动漫$3\",
    \"分类url\":\"http://dyxz.tv/list/{cateId}_{catePg}.html\"}"},

{
    "key":"csp_XBPQ_heihu",
    "name":"🍹黑狐影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"data-toggle&&</li>\",
    \"线路标题\":\">&&</a>\",
    \"播放数组\":\"class=\\\"stui-content__playlist&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#综艺$4#动漫$3\",
    \"分类url\":\"http://fagmn.com/list/{cateId}_{catePg}.html\"}"},

  {
    "key":"csp_XBPQ_panghu",
    "name":"🍹胖虎影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content show-desc\\\"*<p>&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#综艺$3#动漫$4\",
    \"分类url\":\"https://www.panghuys.com/vodshow/{cateId}/page/{catePg}.html\"}"},
    //
   


 {
    "key":"csp_XBPQ_aifeng",
    "name":"🍹秋霞影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"主演\":\"主演：&&</span>\",
    \"简介\":\"class=\\\"left text-muted&&</span>\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"class=\\\"stui-pannel_hd&&</div>\",
    \"线路标题\":\"title\\\">&&</h3>\",
    \"播放数组\":\"class=\\\"stui-content__playlist clearfix&&</ul>\",
    \"分类\":\"电影$dianying#电视剧$lianxuju#国产剧$guochanju#港剧$gangtaiju#综艺$zongyi#动漫$dongman\",
    \"分类url\":\"https://www.aifengys.cc/show/{cateId}--------{catePg}---/\"}"},



 {
    "key":"csp_XBPQ_pingguo",
    "name":"🍹青苹果影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$22#港剧$26#美剧$23#综艺$3#动漫$4\",
    \"分类url\":\"https://www.miushuo.com/vodshow/{cateId}--------{catePg}---.html\"}"},
    //



  {
    "key":"csp_XBPQ_六度",
    "name":"🍹六度影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"data-toggle&&</li>\",
    \"线路标题\":\">&&/a>\",
    \"播放链接\":\"href=\\\'&&\\\'\",
    \"播放标题\":\">&&\",
    \"播放数组\":\"class=\\\"stui-content__playlist clearfix&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#综艺$4#动漫$3\",
    \"分类url\":\"https://6d.zzdacou.com/whole/{cateId}_______0_addtime_{catePg}.html\"}"},
    //




 

{
    "key":"csp_XBPQ_91蚂蚁影视",
    "name":"🍹91蚂蚁影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"简介\":\"detail-sketch&&</span>\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"iconfont icon-iconfontplay2&&/a>\",
    \"线路标题\":\"</em>&&<\",
    \"播放数组\":\"stui-content__playlist&&</ul>\",
    \"分类\":\"电影$1#电视剧$2#综艺$3#动漫$4\",
    \"分类url\":\"https://www.91mayi.tv/vodshow/{cateId}--------{catePg}---.html\"}"},
    //

{
    "key":"csp_XBPQ_600dy",
    "name":"🍹600影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"video-info-item video-info-content\\\"&&</div>\",
    \"副标题\":\"class=\\\"module-item-text\\\">&&</div>\",
    \"数组\":\"class=\\\"module-item-pic&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",   
    \"播放数组\": \"class=\\\"scroll-content&&</div>\",
    \"分类\":\"电影$264#电视剧$265#国产剧$278#港剧$279#综艺$266#动漫$267\",
    \"分类url\":\"https://600dy.com/index.php/vod/show/id/{cateId}/page/{catePg}.html\"}"},
    //

{
    "key":"csp_XBPQ_dianying100",
    "name":"🍹电影100影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"简介\":\"sketch content&&</span>\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"线路数组\":\"data-toggle&&/li>\",
    \"线路标题\":\">&&</a>\",
    \"播放数组\":\"myui-content__list playlist&&</ul>\",
    \"分类\":\"电影$28#电视剧$2#国产剧$24#港剧$23#综艺$31#动漫$26\",
    \"分类url\":\"https://dianying100.xyz/index.php/vod/type/id/{cateId}/page/{catePg}.html\"}"},
    //

{
    "key":"csp_XBPQ_dudu30",
    "name":"🍹嘟嘟影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"请求头\":\"手机\",
    \"简介\":\"介绍：&&</span>\",
    \"副标题\":\"class=\\\"other\\\">&&</p>\",
    \"线路数组\":\"playerico ico-Azhan&&/li>\",
    \"线路标题\":\"</i>&&<\",
   
    \"分类\":\"电影$1#电视剧$2#国产剧$12#港剧$21#综艺$31#动漫$26\",
    \"分类url\":\"http://www.dudu30.com/?m=vod-type-id-{cateId}-pg-{catePg}.html\"}"},
    //


{
    "key":"csp_XBPQ_xiaolu",
    "name":"🍹小鹿影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content show-desc\\\"*<p>&&</div>\",
    \"副标题\":\"class=\\\"module-info-item-content\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$31#综艺$3#动漫$4\",
    \"分类url\":\"https://www.xiaoluys.me/vodshow/{cateId}--------{catePg}---.html\"}"},





{"key": "干饭", "name": "🍹  干饭采集", "type": 1,"api": "http://124.220.183.81:83/api.php/provide/vod/","playUrl": "https://jx.bozrc.com:4433/player/?url=","searchable": 1,
 "quickSearch": 1,"filterable": 1,"categories": [ "电影", "剧集", "综艺","动漫"]},


{"key": "爱迪","name": "🍹  爱迪影视","type": 3,"api": "csp_AppYsV2","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://aidiapp.xyz/xgapp.php/v2/"},
{"key":"8K电影","name":"🍹  8K电影","type":1,"api":"http://tvappjsonapi.8kvod.com/8kvodapilgxcsssss.php/provide/vod/","playUrl":"json:http://47.119.122.235:5566/json/free.php?url="},
{"key":"暴风资源","name":"🍹  暴风资源","type":1,"api":"https://bfzyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"categories":["国产剧","韩国剧","香港剧","台湾剧","欧美剧","动作片","科幻片","战争片","奇幻片","喜剧片","爱情片","恐怖片","犯罪片","悬疑片","惊悚片","剧情片","冒险片","记录片","综艺","动漫"]},


{
      "key": "MV_vod",
      "name": "🎧KTV",
      "type": 1,
      "api": "https://mv.wogg.link/mv/vod",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },

{
    "key":"csp_XBPQ_cokemv",
    "name":"🍹COKEMV",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"演员\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content show-desc\\\"*<p>&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$13#港剧$16#综艺$29#动漫$3\",
    \"分类url\":\"https://cokemv.co/vodshow/{cateId}--------{catePg}---.html\"}"},




{
    "key":"csp_XBPQ_8号影视",
    "name":"🍹8号影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"播放数组\":\"class=\\\"stui-content__playlist playlink clearfix&&</ul>\",
    \"播放链接\":\"href=\\\'&&\\\'\",
    \"简介\":\"detail-sketch&&</span>\",
    \"副标题\":\"class=\\\"pic-text text-right\\\">&&</span>\",
    \"分类\":\"电影$1#国产电视剧$13#电视剧$2#动漫$4#综艺$3\",
    \"分类url\":\"http://www.8hysw.com/frim/{cateId}-{catePg}.html\"}"},
    //




 {
    "key":"csp_XBPQ_xinshijue",
    "name":"🍹新视觉影视网",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"主演\":\"主演：&&</div>\",
    \"简介\":\"class=\\\"video-info-item video-info-content vod_content\\\"&&</div>\",
    \"数组\":\"class=\\\"module-item-pic&&</div>\",
    \"副标题\":\"class=\\\"module-item-text\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"scroll-content&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$42#港台剧$49#综艺$3#动漫$4\",
    \"分类url\":\"https://www.6080yy3.com/vodshow/{cateId}--------{catePg}---.html\"}"},
    //


{
			"key": "快看资源",
			"name": "快看资源",
			"type": 1,
			"api": "https://kuaikan-api.com/api.php/provide/vod/from/kuaikan/",
			"searchable": 1,
			"quickSearch": 1,
			"categories": [
				"国产剧",
				"韩国剧",
				"香港剧",
				"台湾剧",
				"欧美剧",
				"动作片",
				"科幻片",
				"战争片",
				"奇幻片",
				"喜剧片",
				"爱情片",
				"恐怖片",
				"犯罪片",
				"悬疑片",
				"惊悚片",
				"剧情片",
				"冒险片",
				"记录片",
				"综艺",
				"动漫"
			]
		},

		
{"key": "天堂资源","name": "天堂资源(官)","type": 1,"api": "http://vipmv.cc/api.php/provide/vod/","searchable": 1,"quickSearch": 1,			"filterable": 0	},				
{"key": "菠萝资源","name": "菠萝资源(官)","type": 1,"api": "http://819171.com/api.php/provide/vod/","searchable": 1,"quickSearch": 1,			"filterable": 0	},		
{"key": "淘片资源","name": "淘片资源","type": 0,"api": "https://taopianapi.com/cjapi/mc10/vod/xml.html","searchable": 1,"quickSearch": 1,		"filterable": 0	},
{"key": "zy_新浪资源","name": "新浪资源","type": 0,"api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8/at/xml/",			"searchable": 1,"quickSearch": 1,"filterable": 0,"categories": ["动漫","综艺","纪录片","动作片","爱情片","科幻片","战争片","剧情片","恐怖片","喜剧片",		"大陆剧","港澳剧","台湾剧","欧美剧","动漫电影","韩剧","日剧","泰剧","体育"]},
    
    
  

    {
    "key":"csp_XBPQ_nbys",
    "name":"🍹泥巴影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"主演\":\"主演：&&</div>\",
    \"标题\":\"class=\\\"module-poster-item-title\\\">&&</div>\",
    \"简介\":\"class=\\\"video-info-itemvideo-info-contentvod_content\\\"&&</div>\",
    \"数组\":\"class=\\\"module-item-pic&&</div>\",
    \"副标题\":\"class=\\\"module-item-text\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-itemtab-item&&</div>\",
    \"线路标题\":\"<span>&&</span>\",
    \"播放数组\":\"class=\\\"scroll-content&&</div>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$13#港剧$14#综艺$3#动漫$4\",
    \"分类url\":\"https://nbys.top/index.php/vod/show/id/{cateId}/page/{catePg}.html\"
    }"},
   
    {
    "key":"csp_XBPQ_xiongmao",
    "name":"🍹熊猫影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"主演\":\"主演：&&</div>\",
    \"标题\":\"class=\\\"module-poster-item-title\\\">&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-content\\\"&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-itemtab-item&&</div>\",
    \"线路标题\":\"<span>&&</span>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$52#电视剧$69#国产剧$70#港剧$71#综艺$77#动漫$75\",
    \"分类url\":\"https://xmvod520.com/index.php/vod/show/id/{cateId}/page/{catePg}.html\"
    }"},
    
    
 
    
    {
    "key":"csp_XBPQ_cddys",
    "name":"🍹臭蛋蛋影视网",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"1\",
    \"主演\":\"主演:&&</div>\",
    \"简介\":\"class=\\\"module-info-introduction-contentshow-desc\\\"&&</div>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"分类\":\"电影$1#电视剧$2#综艺$3#动漫$4\",
    \"分类url\":\"https://cddys.me/vodshow/{cateId}--------{catePg}---.html\"}"},
    //
   
   
   
    
    {
    "key":"csp_XBPQ_subai",
    "name":"🍹素白白影视",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
    \"免嗅\":\"0\",
     \"主演\":\"主演:&&</div>\",
    \"播放数组\":\"class=\\\"paly_list_btn&&</div>\",
    \"副标题\":\"class=\\\"jidi\\\">&&</span>\",
    \"简介\":\"class=\\\"yp_context\\\"*<p>&&</div>\",
    \"分类\":\"电影$new-movie#电视剧$tv-drama#国产剧$domestic-drama#香港经典电影$hongkong-movie\",
    \"分类url\":\"https://www.subaibaiys.com/{cateId}/page/{catePg}\"}"},
    //
   
  
 
    
   
    //
   
   
   
    {
    "key":"csp_XBPQ_大师兄影院",
    "name":"🍹大师兄影院",
    "type":3,
    "api":"csp_XBPQ",
    "searchable":1,
    "quickSearch":1,
    "filterable":0,
    "ext":"{
     \"主演\":\"主演:&&</div>\",
    \"播放数组\":\"class=\\\"module-play-list&&</div>\",
    \"简介\":\"module-blocklist scroll-boxscroll-box-ymodule-player-list\\\"&&</span>\",
    \"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",
    \"线路数组\":\"class=\\\"module-tab-item tab-item&&</div>\",
    \"线路标题\":\"<span>&&</small>\",
    \"分类\":\"电影$1#电视剧$2#国产剧$13#港剧$14#综艺$3#动漫$4\",
    \"分类url\":\"https://dsxys.pro/vodshow/{cateId}--------{catePg}---.html\"}"},
    //
   
    
  
    
  

//


{"key":"csp_xml_影图资源","name":"🐝影图资源","type":1,"api":"https://cj.vodimg.top/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1}
],

"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},

{"name":"小米","type":1,"url":"http://wuzei.hz.cz/jx2/jiexi5.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua","nongmin","CL4K","xfyun","ffm3u8","lzm3u8","netease","pgyer","TD","qzone","FY","ppayun","Feiyun","zhibo"]}},
{ "name": "七七", "type": 1,"url": "https://api.tyun77.cn/api.php/provide/parseDicturl?url=","ext":{"flag": [ "爱奇艺","奇艺","qq","腾讯", 					"youku", "优酷", "pptv", "PPTV","letv","乐视","leshi","bilibili","哔哩哔哩","哔哩","mgtv","芒果", "芒果" ],"header": {"User-Agent": "okhttp/3.12.0"}}},



{"name":"测试12","type":1,"url":"https://jxjson.cf/json1.php?url="},
{"name":"测试13","type":1,"url":"http://api.8kvod.com:5566/api/?type=ys&key=nD30Uc4sOUcyyuNpcP&url="},
{"name":"测试14","type":1,"url":"https://bfq.ygpvp.com/ygbfq1/API.php?url="},
{"name":"测试15","type":1,"url":"http://42.157.128.109:2323/CH/app/tv.php?url="},


{"name":"测试1","type":1,"url":"https://bfq2.cddys.vip/nimasile2/API.php?url=","header":{"User-Agent":"Dart/2.18(dart:io)"},"ext":{"flag":["qq","腾讯","youku","hulihuli","hulihuli-","优酷"]}},{"name":"测试2","type":1,"url":"https://vip.ckllk.com/API.php?url="},
{"name":"测试3","type":1,"url":"http://api.8kvod.com:5566/api/?type=ys&key=nD30Uc4sOUcyyuNpcP&url="},
{"name":"测试4","type":1,"url":"https://bfq.ygpvp.com/ygbfq1/API.php?url="},
{"name":"嗅探1","type":0,"url":"http://wuzei.hz.cz/jx/test1.php?url="},
{"name":"嗅探2","type":0,"url":"http://wuzei.hz.cz/8090/?url="}],



"ijk":[
{"group":"软解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"0"},
{"category":4,"name":"mediacodec-auto-rotate","value":"0"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},
{"category":4,"name":"mediacodec-hevc","value":"0"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},
{"group":"硬解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"1"},
{"category":4,"name":"mediacodec-auto-rotate","value":"1"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},
{"category":4,"name":"mediacodec-hevc","value":"1"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}]}],
"ads":["mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn",
"mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com",
"www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com",
"img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn",
"sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com",
"wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com",
"cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com",
"z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn",
"z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com",
"z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn",
"k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]
}
