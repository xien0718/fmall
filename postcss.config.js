const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = ({
    file
}) => {
    let remUnit
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        remUnit = 37.5
    } else {
        remUnit = 75
    }
    return {
        plugins: [
            autoprefixer(),
            pxtorem({
                rootValue: remUnit,
                propList: ['*'],
                selectorBlackList: ['van-circle__layer']
            })
        ]
    }
}

// 注：动态设置rootValue的大小，即对于vant-ui框架的组件 将rootValue设置成37.5，对于我们自己的750宽度的设计稿的将rootValue设置成75