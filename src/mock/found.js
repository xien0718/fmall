//模拟服务端响应：发现页数据
/**
 * @desc 返回发现页列表数据
 */
const resFoundList = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": {
            "feed_info_list": [{
                "feed_detail": {
                    "image_list": [{
                        "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/70dfadbd79359a99811c2c2b6f592e4c.jpeg",
                        "width": 750,
                        "height": 1334
                    }],
                    "description": "你喜欢的样子我都有",
                    "title": null,
                    "content_tag_list": null
                },
                "feed_base_info": {
                    "feed_id": 1001544,
                    "collect_status": 0,
                    "feed_status": 1,
                    "feed_status_name": null,
                    "feed_status_img": null,
                    "feed_type": 1,
                    "template_type": 1,
                    "detail_url": null,
                    "view_num": 336,
                    "view_num_str": "336",
                    "publish_time_str": "7个月前",
                    "publish_timestamp": 1608471051
                },
                "author_info": {
                    "user_id": 1,
                    "user_type": 1,
                    "nick_name": "小编精选",
                    "avatar": "https:\/\/ipxcdn.jfshare.com\/image\/6c8e4245a5e2abe65d668f1300a41873.jpeg",
                    "user_medal_list": []
                },
                "interactive_info": null,
                "decoration_info": null,
                "advertising_info": null
            }, {
                "feed_detail": {
                    "image_list": [{
                        "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7507b039396eedb486ffbca4d1958956.jpeg",
                        "width": 1920,
                        "height": 2560
                    }],
                    "description": "阳光很暖，花很美，我很想你",
                    "title": null,
                    "content_tag_list": null
                },
                "feed_base_info": {
                    "feed_id": 1001543,
                    "collect_status": 0,
                    "feed_status": 1,
                    "feed_status_name": null,
                    "feed_status_img": null,
                    "feed_type": 1,
                    "template_type": 1,
                    "detail_url": null,
                    "view_num": 331,
                    "view_num_str": "331",
                    "publish_time_str": "7个月前",
                    "publish_timestamp": 1608471004
                },
                "author_info": {
                    "user_id": 1,
                    "user_type": 1,
                    "nick_name": "小编精选",
                    "avatar": "https:\/\/ipxcdn.jfshare.com\/image\/6c8e4245a5e2abe65d668f1300a41873.jpeg",
                    "user_medal_list": []
                },
                "interactive_info": null,
                "decoration_info": null,
                "advertising_info": null
            }, {
                "feed_detail": {
                    "image_list": [{
                        "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/e4e3f5740918f03cece283b0a5769738.jpeg",
                        "width": 1920,
                        "height": 2560
                    }],
                    "description": "我就是想成为那个例外啊",
                    "title": null,
                    "content_tag_list": null
                },
                "feed_base_info": {
                    "feed_id": 1001541,
                    "collect_status": 0,
                    "feed_status": 1,
                    "feed_status_name": null,
                    "feed_status_img": null,
                    "feed_type": 1,
                    "template_type": 1,
                    "detail_url": null,
                    "view_num": 294,
                    "view_num_str": "294",
                    "publish_time_str": "7个月前",
                    "publish_timestamp": 1608470958
                },
                "author_info": {
                    "user_id": 1,
                    "user_type": 1,
                    "nick_name": "小编精选",
                    "avatar": "https:\/\/ipxcdn.jfshare.com\/image\/6c8e4245a5e2abe65d668f1300a41873.jpeg",
                    "user_medal_list": []
                },
                "interactive_info": null,
                "decoration_info": null,
                "advertising_info": null
            }, {
                "feed_detail": {
                    "image_list": [{
                        "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/5305363cd6e49d9cf136d59f206fac1f.jpeg",
                        "width": 1920,
                        "height": 2560
                    }],
                    "description": "女孩想要的是玫瑰吗？是被重视的感觉",
                    "title": null,
                    "content_tag_list": null
                },
                "feed_base_info": {
                    "feed_id": 1001542,
                    "collect_status": 0,
                    "feed_status": 1,
                    "feed_status_name": null,
                    "feed_status_img": null,
                    "feed_type": 1,
                    "template_type": 1,
                    "detail_url": null,
                    "view_num": 242,
                    "view_num_str": "242",
                    "publish_time_str": "7个月前",
                    "publish_timestamp": 1608470920
                },
                "author_info": {
                    "user_id": 1,
                    "user_type": 1,
                    "nick_name": "小编精选",
                    "avatar": "https:\/\/ipxcdn.jfshare.com\/image\/6c8e4245a5e2abe65d668f1300a41873.jpeg",
                    "user_medal_list": []
                },
                "interactive_info": null,
                "decoration_info": null,
                "advertising_info": null
            }],
            "page_info": {
                "page_size": 10,
                "index": 2,
                "has_more": true,
                "count": 6
            }
        },
        "success": true
    }
    response.json(result)
}

/**
 * @desc 返回点击发现页商品后，进入发现详情的数据
 */
const resFoundDetail = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": {
            "feed_detail": {
                "image_list": [{
                    "image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/b77d1bfb872925b89ff50506ce417125.jpeg",
                    "width": 1920,
                    "height": 2560
                }],
                "description": "每次都让专车来取花的客户。。。",
                "title": '韩式系列/初心不负',
                "content_tag_list": [{
                        type: 'title',
                        content: '花语'
                    },
                    {
                        type: 'img',
                        src: "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/b77d1bfb872925b89ff50506ce417125.jpeg",
                    },
                    {
                        type: 'text',
                        content: '以热烈主题的红玫瑰及红色包装，搭配象征白色无暇的桔梗为设计主题，打造全新韩式系列。将这一簇美景包裹在一片雪白中，一条满载希望的丝带扎紧了无限的惊喜，只为将全世界的风景奉献于你怀里'
                    },
                    {
                        type: 'title',
                        content: '韩式花束系列'
                    },

                    {
                        type: 'text',
                        content: '卡罗拉玫瑰11枝、3头或以上白底粉边洋桔梗5枝（如白底粉边桔梗缺货，可用白色桔梗代替）、大叶尤加利10枝、4枝红豆（红豆属于季节性花材，如缺货用相思梅等类似花材代替）'
                    }
                ]
            },
            "feed_base_info": {
                "feed_id": 1001546,
                "collect_status": 0,
                "feed_status": 1,
                "feed_status_name": null,
                "feed_status_img": null,
                "feed_type": 1,
                "template_type": 1,
                "detail_url": null,
                "view_num": 336,
                "view_num_str": "336",
                "publish_time_str": "7个月前",
                "publish_timestamp": 1608471248
            },
            "author_info": {
                "user_id": 1,
                "user_type": 1,
                "nick_name": "小编精选",
                "avatar": "https:\/\/ipxcdn.jfshare.com\/image\/6c8e4245a5e2abe65d668f1300a41873.jpeg",
                "user_medal_list": []
            },
            "interactive_info": null,
            "decoration_info": null,
            "advertising_info": null
        },
        "success": true
    }

    response.json(result)
}
module.exports = {
    resFoundList,
    resFoundDetail
}