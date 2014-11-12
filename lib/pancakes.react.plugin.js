/**
 * Author: Jeff Whelpley
 * Date: 11/15/14
 *
 * This will be the main interface for the React plugin to Pancakes
 */



/**
 * Constructor for the pancakes angular plugin
 * @param opts
 * @constructor
 */
function PancakesAngularPlugin(opts) {
    this.templateDir    = __dirname + '/transformers';
    this.pancakes       = opts.pluginOptions.pancakes;
}

// export the class
module.exports = PancakesAngularPlugin;