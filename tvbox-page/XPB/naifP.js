{
    "author":"20220522",
    "ua": "",
    "homeUrl": "https://www.naifei.org/",
    "dcPlayUrl": "true",
    "cateManual": {"电影": "dy","剧集": "juji","综艺": "zongyi","动漫": "dongman","纪录片": "jilupian"},
    "homeVodNode": "//div[contains(@class, 'module-items')]/div[contains(@class, 'module-item')]",
    "homeVodName": "/div[contains(@class, 'module-item-titlebox')]/a/@title",
    "homeVodId": "/div[contains(@class, 'module-item-titlebox')]/a/@href",
    "homeVodIdR": "/voddetail/(\\w+).html",
    "homeVodImg": "/div[contains(@class, 'module-item-cover')]/div[contains(@class, 'module-item-pic')]/img/@src",
    "homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "/div[contains(@class,'module-item-text')]/text()",
    
    "cateUrl": "https://www.naifei.org/vodshow/area/{area}/by/{by}/class/{class}/id/{cateId}/lang/{lang}/year/{year}/page/{catePg}.html",
    "cateVodNode": "//div[contains(@class, 'module-items')]/div[contains(@class, 'module-item')]",
    "cateVodName": "/div[contains(@class, 'module-item-titlebox')]/a/@title",
    "cateVodId": "/div[contains(@class, 'module-item-titlebox')]/a/@href",
    "cateVodIdR": "/voddetail/(\\w+).html",
    "cateVodImg": "/div[contains(@class, 'module-item-cover')]/div[contains(@class, 'module-item-pic')]/img/@src",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "/div[contains(@class,'module-item-text')]/text()",
  
    "dtUrl": "https://www.naifei.org/voddetail/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[contains(@class,'video-info-header')]/h1[@class='page-title']/a/text()",
    "dtNameR": "",
    "dtImg": "//div[@class=('module-item-pic')]/img/@src",
    "dtImgR": "(http\\S+)",
    "dtCate": "//div[contains(@class,'tag-link')]/a/text()",
    "dtCateR": "",
    "dtYear": "//a[@class='tag-link'][2]/text()",
    "dtArea": "//a[@class='tag-link'][3]/text()",
    "dtAreaR": "",
    "dtDesc": "//span[contains(text(), '剧情')]/parent::*/div/span/text()",
    "dtDescR": "",
    "dtActor": "concat(//span[contains(text(), '主演')]/parent::*/div/a/text())",
    "dtActorR": "",
    "dtDirector": "concat(//span[contains(text(), '导演')]/parent::*/div/a/text())",
    "dtDirectorR": "",
    
    "dtFromNode": "//div[contains(@class,'module-tab-items')]/div[2]/div/span",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//div[contains(@class,'module-tab-content')]//div[contains(@class,'sort-item')]",
    "dtUrlSubNode": "/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.naifei.org/vodplay/{playUrl}.html",
    "playUa": "",
    
    "searchUrl": "https://www.naifei.org/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": "",
  
    "filter":{
      "dy":[
        {
          "key": "cateId",
          "name": "类型",
          "value": [
            {"n": "全部类型","v": "1"},
            {"n": "动作片","v": "dongzuopian"},
            {"n": "喜剧片","v": "xijupian"},
            {"n": "爱情片","v": "aiqingpian"},
            {"n": "犯罪片","v": "fanzuipian"},
            {"n": "恐怖片","v": "kongbupian"},
            {"n": "惊悚片","v": "jingsongpian"},
            {"n": "悬疑片","v": "xuanyipian"},
            {"n": "奇幻片","v": "qihuanpian"},
            {"n": "魔幻片","v": "mehuanpian"},
            {"n": "剧情片","v": "juqingpian"},
            {"n": "动画片","v": "donghuapian"},
            {"n": "战争片","v": "zhanzhengpian"},
            {"n": "科幻片","v": "kehuanpian"}
          ]},
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "喜剧","v": "喜剧"},
            {"n": "爱情","v": "爱情"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "动作","v": "动作"},
            {"n": "科幻","v": "科幻"},
            {"n": "剧情","v": "剧情"},
            {"n": "战争","v": "战争"},
            {"n": "警匪","v": "警匪"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "动画","v": "动画"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "武侠","v": "武侠"},
            {"n": "冒险","v": "冒险"},
            {"n": "枪战","v": "枪战"},
            {"n": "恐怖","v": "恐怖"},
            {"n": "悬疑","v": "悬疑"},
            {"n": "惊悚","v": "惊悚"},
            {"n": "经典","v": "经典"},
            {"n": "青春","v": "青春"},
            {"n": "文艺","v": "文艺"},
            {"n": "微电影","v": "微电影"},
            {"n": "古装","v": "古装"},
            {"n": "历史","v": "历史"},
            {"n": "运动","v": "运动"},
            {"n": "农村","v": "农村"},
            {"n": "儿童","v": "儿童"},
            {"n": "网络电影","v": "网络电影"}
          ]},
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},
            {"n": "美国","v": "美国"},
            {"n": "韩国","v": "韩国"},
            {"n": "法国","v": "法国"},
            {"n": "英国","v": "英国"},
            {"n": "日本","v": "日本"},
            {"n": "德国","v": "德国"},
            {"n": "泰国","v": "泰国"},
            {"n": "印度","v": "印度"},
            {"n": "意大利","v": "意大利"},
            {"n": "西班牙","v": "西班牙"},
            {"n": "加拿大","v": "加拿大"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "lang",
          "name": "语言",
          "value": [
            {"n": "全部","v": ""},
            {"n": "普通话","v": "普通话"},
            {"n": "英语","v": "英语"},
            {"n": "粤语","v": "粤语"},
            {"n": "闽南语","v": "闽南语"},
            {"n": "韩语","v": "韩语"},
            {"n": "日语","v": "日语"},
            {"n": "法语","v": "法语"},
            {"n": "德语","v": "德语"},
            {"n": "其它","v": "其它"}
          ]},
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"}
          ]},
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "全部","v": ""},
            {"n": "时间排序","v": "time"},
            {"n": "人气排序","v": "hits"},
            {"n": "评分排序","v": "score"}
          ]}
      ],
  
      "juji":[
        {
          "key": "cateId",
          "name": "类型",
          "value": [
            {"n": "全部类型","v": ""},
            {"n": "国产剧","v": "guochanju"},
            {"n": "香港剧","v": "xianggangju"},
            {"n": "台湾剧","v": "taiwanju"},
            {"n": "欧美剧","v": "oumeiju"},
            {"n": "英伦剧","v": "yinglunju"},
            {"n": "日本剧","v": "ribenju"},
            {"n": "韩国剧","v": "hanguoju"},
            {"n": "东南亚","v": "dongnanya"},
            {"n": "其他剧","v": "qitaju"}
          ]},
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "爱情","v": "爱情"},
            {"n": "古装","v": "古装"},
            {"n": "战争","v": "战争"},
            {"n": "青春","v": "青春"},
            {"n": "偶像","v": "偶像"},
            {"n": "喜剧","v": "喜剧"},
            {"n": "家庭","v": "家庭"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "动作","v": "动作"},
            {"n": "奇幻","v": "奇幻"},
            {"n": "剧情","v": "剧情"},
            {"n": "历史","v": "历史"},
            {"n": "经典","v": "经典"},
            {"n": "乡村","v": "乡村"},
            {"n": "情景","v": "情景"},
            {"n": "商战","v": "商战"},
            {"n": "犯罪","v": "犯罪"},
            {"n": "网剧","v": "网剧"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "韩国","v": "韩国"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},
            {"n": "日本","v": "日本"},
            {"n": "美国","v": "美国"},
            {"n": "泰国","v": "泰国"},
            {"n": "英国","v": "英国"},
            {"n": "新加坡","v": "新加坡"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "lang",
          "name": "语言",
          "value": [
            {"n": "全部","v": ""},
            {"n": "国语","v": "国语"},
            {"n": "英语","v": "英语"},
            {"n": "粤语","v": "粤语"},
            {"n": "闽南语","v": "闽南语"},
            {"n": "韩语","v": "韩语"},
            {"n": "日语","v": "日语"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"}
          ]},
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "全部","v": ""},
            {"n": "时间排序","v": "time"},
            {"n": "人气排序","v": "hits"},
            {"n": "评分排序","v": "score"}
          ]}
      ],
      "zongyi":[
        {
          "key": "cateId",
          "name": "类型",
          "value": [
            {"n": "全部类型","v": ""},
            {"n": "大陆综艺","v": "daluzongyi"},
            {"n": "港台综艺","v": "gangtaizongyi"},
            {"n": "日韩综艺","v": "rihanzongyi"},
            {"n": "欧美综艺","v": "oumeizongyi"},
            {"n": "其他综艺","v": "qitazongyi"}
          ]},
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "选秀","v": "选秀"},
            {"n": "情感","v": "情感"},
            {"n": "访谈","v": "访谈"},
            {"n": "播报","v": "播报"},
            {"n": "旅游","v": "旅游"},
            {"n": "音乐","v": "音乐"},
            {"n": "美食","v": "美食"},
            {"n": "纪实","v": "奇幻"},
            {"n": "曲艺","v": "曲艺"},
            {"n": "生活","v": "生活"},
            {"n": "游戏互动","v": "游戏互动"},
            {"n": "财经","v": "财经"},
            {"n": "求职","v": "求职"}
          ]},
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "香港","v": "香港"},
            {"n": "港台","v": "港台"},
            {"n": "台湾","v": "台湾"},
            {"n": "日本","v": "日本"},
            {"n": "韩国","v": "韩国"},
            {"n": "欧美","v": "欧美"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "lang",
          "name": "语言",
          "value": [
            {"n": "全部","v": ""},
            {"n": "普通话","v": "普通话"},
            {"n": "英语","v": "英语"},
            {"n": "粤语","v": "粤语"},
            {"n": "闽南语","v": "闽南语"},
            {"n": "韩语","v": "韩语"},
            {"n": "日语","v": "日语"},
            {"n": "其它","v": "其它"}
          ]},
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"}
          ]},
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "全部","v": ""},
            {"n": "时间排序","v": "time"},
            {"n": "人气排序","v": "hits"},
            {"n": "评分排序","v": "score"}
          ]}
      ],
      "dongman":[
        {
          "key": "cateId",
          "name": "类型",
          "value": [
            {"n": "全部类型","v": ""},
            {"n": "国产动漫","v": "guochandongman"},
            {"n": "日韩动漫","v": "rihandongman"},
            {"n": "欧美动漫","v": "oumeidongman"},
            {"n": "其他动漫","v": "qitadongman"}
          ]},
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "情感","v": "情感"},
            {"n": "科幻","v": "科幻"},
            {"n": "热血","v": "热血"},
            {"n": "推理","v": "推理"},
            {"n": "搞笑","v": "搞笑"},
            {"n": "冒险","v": "冒险"},
            {"n": "萝莉","v": "萝莉"},
            {"n": "校园","v": "校园"},
            {"n": "动作","v": "动作"},
            {"n": "机战","v": "机战"},
            {"n": "运动","v": "运动"},
            {"n": "战争","v": "战争"},
            {"n": "少年","v": "少年"},
            {"n": "少女","v": "少女"},
            {"n": "社会","v": "社会"},
            {"n": "原创","v": "原创"},
            {"n": "亲子","v": "亲子"},
            {"n": "益智","v": "益智"},
            {"n": "励志","v": "励志"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "日本","v": "日本"},
            {"n": "欧美","v": "欧美"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "lang",
          "name": "语言",
          "value": [
            {"n": "全部","v": ""},
            {"n": "国语","v": "国语"},
            {"n": "英语","v": "英语"},
            {"n": "粤语","v": "粤语"},
            {"n": "闽南语","v": "闽南语"},
            {"n": "韩语","v": "韩语"},
            {"n": "日语","v": "日语"},
            {"n": "其它","v": "其它"}
          ]},
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"}
          ]},
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "全部","v": ""},
            {"n": "时间排序","v": "time"},
            {"n": "人气排序","v": "hits"},
            {"n": "评分排序","v": "score"}
          ]}
      ],
      "jilupian":[
        {
          "key": "class",
          "name": "剧情",
          "value": [
            {"n": "全部剧情","v": ""},
            {"n": "人物","v": "人物"},
            {"n": "军事","v": "军事"},
            {"n": "历史","v": "历史"},
            {"n": "文化","v": "文化"},
            {"n": "探索","v": "探索"},
            {"n": "科技","v": "科技"},
            {"n": "自然","v": "自然"},
            {"n": "解密","v": "解密"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "内地","v": "内地"},
            {"n": "香港","v": "香港"},
            {"n": "台湾","v": "台湾"},
            {"n": "美国","v": "美国"},
            {"n": "韩国","v": "韩国"},
            {"n": "法国","v": "法国"},
            {"n": "英国","v": "英国"},
            {"n": "日本","v": "日本"},
            {"n": "德国","v": "德国"},
            {"n": "泰国","v": "泰国"},
            {"n": "印度","v": "印度"},
            {"n": "意大利","v": "意大利"},
            {"n": "西班牙","v": "西班牙"},
            {"n": "加拿大","v": "加拿大"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "lang",
          "name": "语言",
          "value": [
            {"n": "全部","v": ""},
            {"n": "普通话","v": "普通话"},
            {"n": "英语","v": "英语"},
            {"n": "粤语","v": "粤语"},
            {"n": "闽南语","v": "闽南语"},
            {"n": "韩语","v": "韩语"},
            {"n": "日语","v": "日语"},
            {"n": "法语","v": "法语"},
            {"n": "德语","v": "德语"},
            {"n": "其他","v": "其他"}
          ]},
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "2022"},
            {"n": "2021","v": "2021"},
            {"n": "2020","v": "2020"},
            {"n": "2019","v": "2019"},
            {"n": "2018","v": "2018"},
            {"n": "2017","v": "2017"},
            {"n": "2016","v": "2016"},
            {"n": "2015","v": "2015"},
            {"n": "2014","v": "2014"},
            {"n": "2013","v": "2013"},
            {"n": "2012","v": "2012"},
            {"n": "2011","v": "2011"},
            {"n": "2010","v": "2010"},
            {"n": "2009","v": "2009"},
            {"n": "2008","v": "2008"}
          ]},
        {
          "key": "by",
          "name": "排序",
          "value": [
            {"n": "全部","v": ""},
            {"n": "时间排序","v": "time"},
            {"n": "人气排序","v": "hits"},
            {"n": "评分排序","v": "score"}
          ]}
      ]
    }
  }