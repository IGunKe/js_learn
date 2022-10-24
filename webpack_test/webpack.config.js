const path = require('path');
module.exports = {
    //入口
    entry: './src/main.js',
    //输出:要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。
    output: {
        //绝对路径
        //__dirname当前文件夹目录---webpack_test
        //resolve输出绝对路径
        //path所有文件的目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        //自动清空上次打包的文件
        clear: true
    },
    //加载器:  loader 有两个属性
    //test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件
    //use 表示进行转换时，应该使用哪个 loader。
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },

                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/,
                use: 'sass-loader'
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
                parser: {
                    //小于4kb的图片转base64
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
                //控制文件输出目录
                generator: {
                    filename: 'static/[hash:10][ext][query]'
                }
            }
        ]
    },
    //插件
    plugins: [],
    //模式, production
    mode: 'development'
};
