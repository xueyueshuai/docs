(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{302:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"部署到github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署到github-pages"}},[s._v("#")]),s._v(" 部署到GitHub Pages")]),s._v(" "),t("ol",[t("li",[s._v("将"),t("code",[s._v(".vuepress/config.js")]),s._v("中的"),t("code",[s._v("base")]),s._v("设置为你的仓库名称。")])]),s._v(" "),t("p",[s._v("例如，如果你的仓库是"),t("code",[s._v("https://github.com/xueyueshuai/vuepress-demo")]),s._v("，")]),s._v(" "),t("p",[s._v("则已部署的页面将在"),t("code",[s._v("https://xueyueshuai.github.io/vuepress-demo")]),s._v("上可用。")]),s._v(" "),t("p",[s._v("在这种情况下，你应该将"),t("code",[s._v("/.vuepress/config.js")]),s._v("中 "),t("code",[s._v("base:'/vuepress-demo/'")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("base")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/vuepress-demo/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hi Vuepress'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("在你的项目中，运行：")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 构建 在项目根目录执行")]),s._v("\nvuepress build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.1将构建好的目录/.vuepress/dist 移动到项目根目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.2并改名为docs(github的Pages页面关联的文件夹只能叫docs)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 push到github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" main\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推到你仓库的的 gh-page 分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <USERNAME>/<REPO> 替换为你的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git <本地分支名称>:<远程分支名称>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:xueyueshuai/vuepress-demo.git main:main\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);