/**
 *  Created by daiwenjuan on 2017/10/16 上午11:48.
 */
export default class Plugin {

  constructor (pluginId) {
    this._id = pluginId
    this._reducer = null
    this._routers = []
  }

  get reducer () {
    return this._reducer
  }

  get routers () {
    return this._routers
  }

  get id () {
    return this._id
  }

  set reducer (reducer) {
    this._reducer = reducer
  }

  set router (router) {
    this._routers.push(router)
  }
}