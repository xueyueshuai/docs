# i18n
 

`/main.js`
```
import i18n from "@/lang";

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

```

`/src/lang/index.js`
```
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// 引入各个语言配置文件
import zh from './zh'
import en from './en'

Vue.use(VueI18n)

// 创建vue-i18n实例i18n
const i18n = new VueI18n({
  // 设置默认语言
  locale: localStorage.getItem('locale') || 'zh', // 语言标识
  // 添加多语言（每一个语言标示对应一个语言文件）
  messages: {
    zh: {
      ...zh,
      ...zhLocale
    },
    en: {
      ...en,
      ...enLocale
    }
  }
})

Vue.prototype.$ts = function(...keys) {
  return keys.map(key => i18n.t(key)).join('')
}

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})


export default i18n
```

`/src/lang/en.js`
```
module.exports = {
  button: {
    add: '新增',
    edit: '编辑',
    delete: '删除',
    refresh: '刷新',
    ...
```


`/components/ChangeLang/Change.vue`
```
<template>
  <el-dropdown @command="handleLocalChange" placement="bottom">
    <i class="el-icon-_language" style="font-size: 18px"/>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh">{{$t('language.zh')}}</el-dropdown-item>
      <el-dropdown-item command="en">{{$t('language.en')}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {
  name: 'ChangeLang',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods:{
    handleLocalChange(locale){
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/var";

.el-dropdown-link {
  color: $--color-primary;
  cursor: pointer;
}
</style>
```