import MessageBox from '@/components/MessageBox'
const MessagePlugin = {}

MessagePlugin.install = function (Vue, options) {
  // Vue.component('MessageBox', MessageBox)
  console.log('options', options)
  let uid = 0
  const queue = []
  const MessageBoxConstructor = Vue.extend(MessageBox)

  Vue.prototype.$message = (msg, duration = 2000) => {
    console.log(duration)

    const instance = new MessageBoxConstructor()
    instance.uid = uid++
    queue.push(instance)
    instance.msg = `消息信息id：${uid}, 消息内容：${msg}, 消息类型：${duration}`
    instance.index = queue.length - 1
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    instance.showState = true
    const timer = setTimeout(() => {
      instance.showState = false
      const oldIdx = queue.findIndex(e => e.uid === instance.uid)
      queue.splice(oldIdx, 1)
      queue.forEach((e, i) => e.index = i)
      clearTimeout(timer)
    }, duration)
  }
}

export default MessagePlugin