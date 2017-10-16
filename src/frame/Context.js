/**
 *  Created by daiwenjuan on 2017/10/16 上午11:43.
 */
export default  class Context {
  constructor () {
    this._plugins = []
  }

  mount (plugin) {
    this._plugins.push(plugin)
  }

  getPlugins () {
    return this._plugins
  }

}