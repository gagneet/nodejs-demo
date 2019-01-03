// import the path package, as we are using babel, 'require' is changed to 'import from'
import path from 'path';

// Webpack is configured by 'export'ing an object
export default {
    // Setting the debuging to TRUE, enables debugging information as we run our build
    debug: true,
    // DEVTOOL has been set to inline-source-map, there are a couple of them to consider, and source-map ones are for higher quality
    devtool: 'inline-source-map',
    // Setting 'noInfo' to false means that Webpack will display the list of all the files that it is bundling
    // Best to set this to TRUE during PROD, as it adds a lot of noise
    noInfo: false,

    // This is the entry point of the Webpack
    entry: [
        // Not doing a hot-reloading at this point and just keeping it simple to the SRC/Index
        // using __dirname, which is part of node.js, which will give the full path here.
        //Also using the 'path' package, which also comes with node.js and has been imported above
        path.resolve(__dirname, 'src/index')
    ],

    // the target of the Webpack bundle for our current purpose is the web. It could also be 'node', or 'elektron' for desktop apps
    target: 'web',

    // This informs Webpack, where it should create the DEV bundle
    // Webpack in the current code does not actually create the physical files, but will serve the build from memory.
    // But while definig the output, the path and file names are specified to Webpack
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
    plugins: [],

    // This informs Webpack about the file types that we wish to handle
    module: {
        // Webpack calls the file type defination as 'loaders'
        // 'loaders' informs Webpack how to handle different file types
        loaders: [
            // we are asking it to handle .JS files
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            // also, it is handling the .CSS files for us.
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}
