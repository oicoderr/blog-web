<template>
  <section class="allArticleBox">
	  <div class="tags">
		  <nuxt-link 
		  	:to="`/article?tag=${item.id}`"
		  	v-for="(item, index) in tags" 
			:key="index">{{item.name}}<span>({{item.meta.count}})</span></nuxt-link>
	  </div>
	  <div class="articleList" v-if="article.length">
		  <div class="item" v-for="(item, index) in article" :key="index">
        <!-- <h2>{{item.year}}/{{article.month}}</h2> -->
        <h2>{{item.date.replace('-', '/')}}</h2>
        <div class="itemLink">
          <nuxt-link :to="`/article/${a.id}`" v-for="(a,i) in item.article_list" :key="i">{{a.title}}</nuxt-link>
			  </div>
		  </div>
	  </div>
  </section>
</template>

<script>
import FooterMixin from '../utils/footer-mixin'
import {getArticle, getTag} from '../api'

export default {
	head: {
		title: 'Pydw | 归档'
	},
	layout: 'layout',
	mixins: [FooterMixin],

  async asyncData ({ params }) {
    const art = await getArticle({archive: true})
    const article = art.result.list || []
    return {article}
  },

	data() {
		return {
			tags: []
		}
	},

	created () {
    getTag().then(res => {
			this.tags = res.result.list
		})
    
		this.$nextTick(() => {
			this.footer()
		})
	}
}
</script>

<style scoped>
.allArticleBox{
	margin: 0 auto;
	width: 900px;
	overflow: hidden;
}
.tags{
	width: 100%;
	overflow: hidden;
	border: 1px solid #f1f1f1;
	padding: 20px;
}
.tags a{
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
