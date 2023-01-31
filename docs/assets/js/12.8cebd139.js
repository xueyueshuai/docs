(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{297:function(n,e,t){"use strict";t.r(e);var a=t(14),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"i18n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i18n"}},[n._v("#")]),n._v(" i18n")]),n._v(" "),t("p",[t("code",[n._v("/main.js")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import i18n from \"@/lang\";\n\nnew Vue({\n  router,\n  store,\n  i18n,\n  render: h => h(App)\n}).$mount('#app')\n\n")])])]),t("p",[t("code",[n._v("/src/lang/index.js")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import Vue from 'vue'\nimport VueI18n from 'vue-i18n'\nimport ElementUI from 'element-ui';\nimport enLocale from 'element-ui/lib/locale/lang/en'\nimport zhLocale from 'element-ui/lib/locale/lang/zh-CN'\n\n// 引入各个语言配置文件\nimport zh from './zh'\nimport en from './en'\n\nVue.use(VueI18n)\n\n// 创建vue-i18n实例i18n\nconst i18n = new VueI18n({\n  // 设置默认语言\n  locale: localStorage.getItem('locale') || 'zh', // 语言标识\n  // 添加多语言（每一个语言标示对应一个语言文件）\n  messages: {\n    zh: {\n      ...zh,\n      ...zhLocale\n    },\n    en: {\n      ...en,\n      ...enLocale\n    }\n  }\n})\n\nVue.prototype.$ts = function(...keys) {\n  return keys.map(key => i18n.t(key)).join('')\n}\n\nVue.use(ElementUI, {\n  i18n: (key, value) => i18n.t(key, value)\n})\n\n\nexport default i18n\n")])])]),t("p",[t("code",[n._v("/src/lang/en.js")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("module.exports = {\n  button: {\n    add: '新增',\n    edit: '编辑',\n    delete: '删除',\n    refresh: '刷新',\n    ...\n")])])]),t("p",[t("code",[n._v("/components/ChangeLang/Change.vue")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<template>\n  <el-dropdown @command="handleLocalChange" placement="bottom">\n    <i class="el-icon-_language" style="font-size: 18px"/>\n    <el-dropdown-menu slot="dropdown">\n      <el-dropdown-item command="zh">{{$t(\'language.zh\')}}</el-dropdown-item>\n      <el-dropdown-item command="en">{{$t(\'language.en\')}}</el-dropdown-item>\n    </el-dropdown-menu>\n  </el-dropdown>\n</template>\n\n<script>\n\nexport default {\n  name: \'ChangeLang\',\n  data() {\n    return {\n    }\n  },\n  mounted() {\n  },\n  methods:{\n    handleLocalChange(locale){\n      this.$i18n.locale = locale\n      localStorage.setItem(\'locale\', locale)\n    },\n  }\n}\n<\/script>\n\n<style lang="scss" scoped>\n@import "src/assets/style/var";\n\n.el-dropdown-link {\n  color: $--color-primary;\n  cursor: pointer;\n}\n</style>\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);