Component({
  options: {
    addGlobalClass: true,
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  properties: {
    tabId: {type: String, value: ''},
    activeTab: {type: String, value: ''},
  },
  data: {
    
  },
  lifetimes: {
    
  },
  methods: {
  }
})
  
