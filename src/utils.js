export default {
  minLen: 3,
  timeout: null,

  isUpdateItems (text) {
    if (text.length >= this.minLen) {
      return true
    }
  },

  callUpdateItems (text, cb, wait) {
    clearTimeout(this.timeout)
    if (this.isUpdateItems(text)) {
      if (wait) {
        this.timeout = setTimeout(cb, wait)
      } else {
        cb()
      }
    }
  },

  findItem (items, text, autoSelectOneResult) {
    if (!text) return
    if (autoSelectOneResult && items.length == 1) {
      return items[0]
    }
  }

}
