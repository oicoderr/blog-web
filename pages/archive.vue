<template>
  <section class="archiveBox">
	  <div class="getCategories">
		  <nuxt-link
		  	:to="`/article?tag=${item.id}`"
		  	v-for="(item, index) in getCategories"
			:key="index">{{item.name}}</nuxt-link>
	  </div>
	  <div class="articleList" v-if="articleList.length">
		  <div class="item" v-for="(item, index) in articleList" :key="index">
        <h2>{{item.create_at}}</h2>
        <div class="itemLink">
          <nuxt-link :to="`/article/${a.id}`" v-for="(a,i) in item.child" :key="i">{{a.title}}</nuxt-link>
			  </div>
		  </div>
	  </div>
  </section>
</template>

<script>
import FooterMixin from '../utils/footer-mixin'
import { getArticles, getCategory } from '../api'

export default {
	head: {
		title: 'Pydw | 归档'
	},
	layout: 'layout',
	mixins: [FooterMixin],

  async asyncData () {
    const art = await getArticles({limit: 999, pape: 1})
    const article = art.result.post || []
    let sameDateArticles = {}
    article.forEach((item) => {
      let { create_at } = item;
      if (!sameDateArticles[create_at.substring(0, 10)]) {
        sameDateArticles[create_at.substring(0, 10)] = {
          create_at: create_at.substring(0, 10),
          child: []
        }
      }
      sameDateArticles[create_at.substring(0, 10)].child.push(item);
    });
    let articleList = Object.values(sameDateArticles); // list 转换成功的数据
    return { articleList }
  },

	data() {
		return {
			getCategories: []
		}
	},

	created () {
    getCategory().then(res => {
			this.getCategories = res.result.category
		})

		this.$nextTick(() => {
			this.footer()
		})
	}
}
</script>

<style scoped>
.archiveBox{
	margin: 0 auto;
	width: 900px;
	overflow: hidden;
}
.getCategories{
	width: 100%;
	overflow: hidden;
	border: 1px solid #f1f1f1;
	padding: 20px;
}
.getCategories a{
	display: inline-block;
	padding: 5px 10px;
}
.articleList{
	border: 1px solid #f1f1f1;
	padding: 20px;
	margin-top: 20px;
}
.item{
	margin-bottom: 20px;
}
.itemLink{
	box-sizing: border-box;
	width: 100%;
	padding-top: 5px;
}
.itemLink a{
	display: block;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 32px;
	line-height: 32px;
	padding-left: 20px;
}
.itemLink a::before{
	content: "•";
	display: inline-block;
	padding-right: 5px;
}
</style>
