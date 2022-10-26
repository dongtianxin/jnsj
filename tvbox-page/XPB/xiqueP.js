{
  "ua": "",
  "homeUrl": "https://www.ak1080.me/",
  "dcPlayUrl": "true",
  "cateManual": {"电影": "1","电视剧": "2","综艺": "3","动漫": "4"},
  "homeVodNode": "//div[@class='myui-vodlist__box']/a[contains(@class,'myui-vodlist__thumb')]",
  "homeVodName": "/@title",
  "homeVodNameR": "",
  "homeVodId": "/@href",
  "homeVodIdR": "/voddetail/(\\w+).html",
  "homeVodImg": "//@data-original",
  "homeVodImgR": "",
  "homeVodMark":  "//div[contains(@class,'pic-text text-left')]/text()",
  "homeVodMarkR": "",
  "cateUrl": "https://www.ak1080.me/vodshow/{cateId}--------{catePg}---.html",
  "cateVodNode": "//div[@class='myui-vodlist__box']/a[contains(@class,'myui-vodlist__thumb')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/voddetail/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "",
  "cateVodMark": "//span[contains(@class,'pic-text text-left')]/text()",
  "dtUrl": "https://www.ak1080.me/voddetail/{vid}.html",
  "dtNode": "//div[@class='module module-info']",
  "dtName": "//div[@class='module-info-main']/div[@class='module-info-heading']/h1/text()",
  "dtNameR": "",
  "dtImg": "//div[@class='module-info-poster']//div[@class='module-item-pic']/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][3]/following-sibling::*/text()",
  "dtYear": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][1]/following-sibling::a/text()",
  "dtArea": "//div[@class='module-info-tag']//div[@class='module-info-tag-link'][2]/following-sibling::a/text()",
  "dtActor": "//div[@class='module-info-items']//span[contains(@class,'module-info-item-title') and contains(text(), '主演：')]/following-sibling::div/a/text()",
  "dtDirector": "//div[@class='module-info-items']//span[contains(@class,'module-info-item-title') and contains(text(), '导演：')]/following-sibling::div/a/text()",
  "dtDesc": "//div[@class='module-info-introduction-content']/p/text()",
  "dtFromNode": "//div[contains(@class, 'module-tab-items-box')]/div[contains(@class, 'module-tab-item')]/span",
  "dtFromName": "/text()",
  "dtUrlNode": "//div[contains(@class, 'module-play-list')]",
  "dtUrlSubNode": "/div/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/vodplay/(\\S+).html",
  "dtUrlName": "/span/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.ak1080.me/vodplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://www.ak1080.me/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": ""
}