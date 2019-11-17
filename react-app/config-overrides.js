/**
 * Hot reloader plugin
 * @type {rewireHotLoader}
 */
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

/**
 * Custom CRA methods
 * @see https://github.com/arackaf/customize-cra/blob/master/api.md
 */
const { override, overrideDevServer, disableChunk } = require('customize-cra');

/**
 * Path
 * @type {module:path}
 */
const path = require('path');

const configOverride = (config, env) => {
    if(env === 'development') {
        config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
        config.entry = [
            `webpack-dev-server/client?http://localhost:${process.env.PORT}/`,
            'webpack/hot/only-dev-server',
            './src',
        ];
    }
    const newConfig = {
        ...config,
        output : {
            filename: 'app.js',
            hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/hot-update.json',
            path: path.resolve(__dirname, 'build'),
            publicPath:
                process.env.NODE_ENV === 'production'
                    ? '/content/mu-plugins/my-gsv/my-app/build/'
                    : `http://localhost:${process.env.PORT}/`,
        }
    };
    return rewireReactHotLoader(newConfig, env)
};

/* config-overrides.js */
module.exports = {
    webpack: override(
        (config, env) => {
            return configOverride(config, env)
        },
        disableChunk()
    ),
    devServer: overrideDevServer(config => {
        return {
            ...config,
            writeToDisk: true,
            hot: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            disableHostCheck: true,
        }
    }),
};