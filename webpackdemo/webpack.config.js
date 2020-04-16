/*
 * @Author: vigorzhang
 * @Date: 2020-02-09 22:43:11
 * @LastEditors  : vigorzhang
 * @LastEditTime : 2020-02-10 00:29:35
 * @Description: 
 */
var path=require('path')
const MinCssExreactPlugin=require('mini-css-extract-plugin')//将css分离到css文件中
const webpack=require('webpack')
module.exports={
    entry:{//入口文件
        // home:'./home.js',
        main:'./index.js'

    },
    output:{
        path:path.resolve(__dirname,'dist'),//导出文件路径
        filename:'[name].bundle.js'//导出文件名称
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //name为entry入口文件名
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new webpack.DefinePlugin({
            'SERVICE_URL':JSON.stringify('http://www.baidu.com')//在文件中科院直接使用 SERVICE_URL
        })
    ],
    mode:'development',//开发模式配置
    module:{
        rules:[
            //loader的规则在此处配置
            {
                test:/\.(png|jpg|gif)$/i,//其实就是正则判断要使用的文件名
                use:[{//对应要使用到的loader
                    loader:'url-loader',
                    options:{
                        limit:1024*1024//文件大小限制
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,    
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}