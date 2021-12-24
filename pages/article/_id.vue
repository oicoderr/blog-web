<template>
  <section>
    <!-- md 文章详情 -->
    <div class="markdown articleDetailBox">
      <div class="title">
        <h1>{{ article.post.title }}</h1>
      </div>
      <div v-html="article.post.htmlBody"></div>
    </div>

    <!-- 文章简要 -->
    <div class="info articleDetailBox">
      <p>
        本文于
        {{ article.post.update_at.substring(0, 10) || article.post.create_at.substring(0, 10) }} 发布，当前已被围观
        {{ article.post.reading }} 次<span v-if="article.post.likeView">，喜欢了{{article.post.likeView}}次</span>
      </p>
      <p>
        类目：<nuxt-link
          to="/article"
          class="tagLink"
          >{{ article.category.name }}</nuxt-link
        >
      </p>
      <p>作者：pydw</p>
      <p>链接：https://stealfood.com/article/{{ article.post.id }}</p>
      <p>
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      </p>
    </div>

    <!-- 平台链接 -->
    <transition name="fade">
      <div
        class="shearBox articleDetailBox"
        v-show="isShowShear"
        style="background: transparent"
      >
        <shear
          :title="article.title"
          :url="`https://stealfood.com/article/${article.post.id}`"
        ></shear>
      </div>
    </transition>

    <div class="arcMata articleDetailBox" style="background: transparent">
      <div class="arcMataInfo">
        <div class="like" @click="toLike">
          <i class="iconfont" v-if="isLike" style="color: #51ce23">&#xe63b;</i>
          <i class="iconfont" v-else>&#xe65c;</i>
          <span>{{ article.post.likeView }}</span
          >人喜欢
        </div>
        <div class="view">
          <span>{{ article.comment.length }}</span
          >条评论
        </div>
      </div>
      <div class="arcMataShear">
        <span class="pay iconfont" title="打赏一下">&#xe614;</span>
        <span class="shear iconfont" @click="showShear" title="分享呀"
          >&#xe6a5;</span
        >
      </div>
    </div>

    <!-- 评论组件 -->
    <div class="comment articleDetailBox">
      <comment v-on:pushComment="putComment"></comment>
      <div class="arcCommentList">
        <div
          class="arcCommentItem"
          v-for="(comment, index) in article.comment"
          :key="index"
        >
          <div class="userAverter">
            <img
              :src="
                comment.gravatar
                  ? avarterArr[comment.gravatar]
                  : avarterArr[0]
              "
              alt=""
            />
          </div>
          <div class="userComment">

            <div class="userInfo">
              <div class="userInfoMata">
                <a class="name" :href="comment.home_page" target="_blank">{{comment.nickname}}
                </a>
              </div>
            </div>

            <div class="itemContent">{{ comment.content }}</div>
<!--
            <div class="replyBox">
              <div class="replyTitle">
                <div
                  class="toTop"
                  :class="comment.isLike ? 'active' : ''"
                  @click="toLikeComment(comment.isLike, comment.id, index)"
                >
                  <i class="iconfont">&#xe6b4;</i>{{ comment.likes }}
                </div>
                <div class="showReply" @click="toShowReply(index)">
                  <i class="iconfont">&#xe65d;</i>
                  <span>评论 + </span>
                </div>
                <div class="time">
                  {{ getDateDiff(comment.create_at || comment.update_at) }}
                </div>
              </div>
              <div class="replyConten" v-if="comment.isShow">
                <div
                  class="replayItem"
                  v-for="(replys, j) in comment.replyList"
                  :key="j"
                >
                  <div class="replyAverter">
                    <img
                      :src="
                        replys.from_.gravatar
                          ? avarterArr[replys.from_.gravatar]
                          : avarterArr[0]
                      "
                      alt=""
                    />
                  </div>
                  <div class="replayItemContet">
                    <div class="userInfoMata">
                      <a
                        class="name"
                        :href="replys.site"
                        target="_blank"
                        >{{ replys.nickname }}</a
                      >
                      <span>
                        <i class="iconfont">
                          {{
                            currentSystem(replys.agent) === "Mac"
                              ? "&#xe64b;"
                              : "&#xec83;"
                          }}
                        </i>
                        {{ currentSystem(replys.agent) }}
                      </span>
                      <span
                        ><i class="iconfont">&#xe68f;</i
                        >{{ getBrowser(comment.agent) }}</span
                      >
                      <span>
                        <i class="iconfont">&#xe662;</i>
                        {{ replys.province }} - {{ replys.city }}
                      </span>
                    </div>
                    <div class="replyPepole" v-if="replys.to_.name">
                      回复
                      <a :href="replys.to_.site" target="_blank"
                        >{{ replys.to_.name }}：</a
                      >
                    </div>
                    <div class="rContent">{{ replys.content }}</div>
                    <div class="rTime">
                      <span>{{
                        getDateDiff(comment.create_at || comment.update_at)
                      }}</span>
                      <span
                        class="toShowReply"
                        @click="toReplyComment(replys.from_, index)"
                        >回复</span
                      >
                    </div>
                  </div>
                </div>
                <div class="rInput">
                  <comment
                    reply="true"
                    :cid="comment.id"
                    :at="comment.at"
                    v-on:pushComment="putReply"
                    @concleReply="toConcleReply(index)"
                  ></comment>
                </div>
              </div>
            </div>
           -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Shear from "../../components/shear";
import Comment from "../../components/comment";
import FooterMixin from "../../utils/footer-mixin";
import TimeMixin from "../../utils/time-mixin";
import {
  getArticleDetails,
  addReply,
  getReply,
  addComment,
  articleLike,
  commentLike
} from "../../api";
import { avarterArr } from "../../utils/blowser";

export default {
  layout: "layout",
  head() {
    return {
      title: this.article.title || `Pydw | 文章详情`
    };
  },
  validate({ params }) {
    return params.id;
  },
  mixins: [FooterMixin, TimeMixin],
  components: {
    Shear,
    Comment
  },
  data() {
    return {
      isShowShear: true,
      isLike: false,
      article: {
        post: {
          body: "",
          category_id: 26,
          create_at: "",
          characterization: "",
          htmlBody: "",
          id: 1,
          likeView: 0,
          reading: 0,
          status: 1,
          title: "",
          update_at: "",
        },
        category:{
          create_at: "",
          characterization: "",
          id: 1,
          name: "",
          update_at: "",
        },
        comment: [
          {
            content: "",
            create_at: "",
            email: "",
            gravatar: 1,
            home_page: "",
            id: 1,
            ip: "",
            nickname: "",
            post_id: 1,
            replied_id: null,
            state: 1,
            update_at: "",
          }
        ]
      },
      conmentsPage: 0,
      avarterArr,
      isCommentLike: true
    };
  },
  methods: {
    showShear() {
      this.isShowShear = !this.isShowShear;
    },
    codehl() {
      this.$nextTick(() => {
        $("pre code").each((i, block) => {
          hljs.highlightBlock(block);
        });
        this.footer();
      });
    },
    getBrowser(agent) {
      let Browser = "";
      //IE
      if (agent.indexOf("msie") > 0) {
        let regStr_ie = /msie [\d.]+;/gi;
        Browser = "Ie";
      }
      //firefox
      else if (agent.indexOf("firefox") > 0) {
        let regStr_ff = /firefox\/[\d.]+/gi;
        Browser = "Firefox";
      }
      //Chrome
      else if (agent.indexOf("chrome") > 0) {
        let regStr_chrome = /chrome\/[\d.]+/gi;
        Browser = "Chrome";
      }
      // Safari
      else if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        let regStr_saf = /version\/[\d.]+/gi;
        Browser = "Safari";
      } else {
        Browser = "Chrome";
      }
      return Browser;
    },
    currentSystem(str) {
      const reg = /mac/gi;
      return reg.test(str) ? "Mac" : "Window";
    },
    getDateTimeStamp(dateStr) {
      return Date.parse(dateStr.replace(/-/gi, "/"));
    },

    getDateDiff(str) {
      let minute = 1000 * 60;
      let hour = minute * 60;
      let day = hour * 24;
      let halfamonth = day * 15;
      let month = day * 30;
      let now = new Date().getTime();
      let diffValue = now - new Date(str).getTime();
      if (diffValue < 0) {
        return;
      }
      let monthC = diffValue / month;
      let weekC = diffValue / (7 * day);
      let dayC = diffValue / day;
      let hourC = diffValue / hour;
      let minC = diffValue / minute;
      let result = "";
      if (monthC >= 1) {
        result = `${parseInt(monthC)}月前`;
      } else if (weekC >= 1) {
        result = `${parseInt(weekC)}周前`;
      } else if (dayC >= 1) {
        result = `${parseInt(dayC)}天前`;
      } else if (hourC >= 1) {
        result = `${parseInt(hourC)}小时前`;
      } else if (minC >= 1) {
        result = `${parseInt(minC)}分钟前`;
      } else result = "刚刚";
      return result;
    },

    async toShowReply(index) {
      const { id, target } = this.article.comment[index];
      // console.log('comment: ')
      // console.info(this.article.comment[index])
      if (!this.article.comment[index].isShow) {
        const res = await getReply({ articleId: target.id, commentId: id });
        this.article.comment[index].replyList = res.result.list;
      }
      this.article.comment[index].isShow = !this.article.comment[index].isShow;
    },

    async putComment(user) {
      let params = {
        post_id: this.$route.params.id,
        ...user
      };
      const res = await addComment(params);
      if (res.code === 200) {
        this.article.likeView += 1;
      }
    },

    toConcleReply(index) {
      this.article.comment[index].at = {};
    },

    toReplyComment(from, index) {
      // console.log('from :')
      // console.info(from)
      this.article.comment[index].at = from;
      // console.log('at :')
      // console.info(this.article.comment[index].at)
    },

    async putReply(user) {
      const { cid } = user;
      // console.log('user')
      // console.info(user)
      let params = {
        post_id: this.$route.params.id,
        ...user
      };
      const res = await addReply(params);
      if (res.code === 200) {
        const reply = await getReply({
          articleId: this.$route.params.id,
          commentId: cid
        });
        for (let i = 0, len = this.article.comment.length; i < len; i++) {
          if (this.article.comment[i].id == cid) {
            this.article.comment[i].replyList = reply.result.list;
            this.article.comment[i].reply += 1;
            break;
          }
        }
      }
    },

    async toLike() {
      if (this.isLike) {
        return false;
      }
      const res = await articleLike(this.$route.params.id);
      if (res.code === 200) {
        const likeArr = JSON.parse(localStorage.getItem("linkArr") || "[]");
        likeArr.push(this.$route.params.id);
        localStorage.setItem("linkArr", JSON.stringify(likeArr));
        this.isLike = true;
        this.article.likeView += 1;
      }
    },

    async toLikeComment(isLike, id, index) {
      if (isLike) {
        return false;
      }
      const res = await commentLike(id);
      if (res.code === 200) {
        const commentLikeArr = JSON.parse(
          localStorage.getItem("likeComment") || "[]"
        );
        commentLikeArr.push(id);
        this.article.comment[index].isLike = true;
        this.article.comment[index].likes += 1;
        localStorage.setItem("likeComment", JSON.stringify(commentLikeArr));
      }
    },
    ...mapMutations({
      changeScroll: "changeScroll"
    })
  },
  async created() {
    this.changeScroll(0);
    // this.article = this.$store.state.article.selectArticle
    const postId = this.$route.params.id
    const res = await getArticleDetails(postId);
    this.article = res.result
  },
  mounted() {
    this.codehl();
  }
};
</script>

<style>
.articleDetailBox {
  width: 900px;
  margin: 10px auto 0 auto;
  box-sizing: border-box;
  background: #ffffff;
  color: #333333;
  border: 1px solid #f6f6f6;
}
.tagLink {
  padding: 0 5px;
}
.markdown {
  margin: 0 auto;
  padding: 20px;
  font-size: 16px;
  line-height: 32px;
}

.markdown p {
  font-size: 16px;
  line-height: 32px;
  margin: 16px 0;
}

.markdown li {
  margin-left: 24px;
}

.markdown ol li {
  list-style: decimal;
}

.markdown ul li {
  list-style: disc;
}

.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  margin: 20px 0;
  padding-top: 24px;
  border-top: 1px dotted #d5d5d5;
}

.markdown .title h1 {
  border-top: 0;
}

.markdown h1 {
  margin-top: 0;
  padding-bottom: 24px;
  border-bottom: 1px dotted #cccccc;
  text-align: center;
  font-size: 26px;
  color: #333333;
}

.markdown h2 {
  font-size: 24px;
}

.markdown h3 {
  font-size: 20px;
}

.markdown h4 {
  font-size: 18px;
}

.markdown a {
  color: #4682b4;
  text-decoration: none;
}

.markdown a:hover {
  color: #0081ff;
}

.markdown p pre {
  background-color: rgba(0, 0, 0, 0.05);
  color: #555;
  border-radius: 3px;
  padding: 10px;
  overflow: auto;
  border: none;
  font-size: 0.9em;
  line-height: 1.33;
}
.markdown li {
  margin-left: 24px;
}
.markdown li:hover {
  background: #f1f1f1;
}
.markdown li p {
  text-indent: 0;
}

.markdown p pre code {
  font-size: inherit;
  color: inherit;
  padding: 0;
  background-color: transparent;
  font-style: normal;
}

.markdown p code {
  color: #d82451;
  background-color: #f6f6f6;
  font-size: 0.9em;
  padding: 2px 4px;
  margin: 0 2px;
}

.markdown blockquote {
  margin: 0;
  border-left: 5px solid #4682b4;
  background-color: #f5f5f5;
  margin: 10px 0;
}
.markdown blockquote p {
  padding: 5px 0 5px 10px;
  text-indent: 0;
}
.markdown table {
  border: 1px solid #cccccc;
}

.markdown table thead tr {
  background-color: #eee;
}

.markdown table tbody tr {
  border-top: 1px solid #cccccc;
  background-color: #fff;
}

.markdown table th,
.markdown table td {
  padding: 8px;
  border-left: 1px solid #cccccc;
}

.markdown hr {
  border-style: solid;
  border-color: #ccc;
}

.markdown img {
  max-width: 100%;
  margin: 20px auto;
  display: block;
}
.arcMata {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.arcMataInfo {
  display: flex;
}
.arcMataInfo .view {
  background: #eeeeee;
  padding: 0px 10px;
  height: 30px;
  line-height: 30px;
  color: #666666;
}
.arcMataInfo .like {
  background: #eeeeee;
  padding: 0px 10px;
  margin-right: 20px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  color: #666666;
}
.arcMataShear span {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 20px;
  background: #eeeeee;
  line-height: 30px;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
}
.arcMataShear span:nth-of-type(2):hover {
  background: #8ed53c;
  color: #ffffff;
}
.comment {
  padding: 20px;
  margin-bottom: 20px;
}
.arcMataShear span:nth-of-type(1) {
  color: #ffffff;
  animation: colorAnimation 2s infinite alternate;
}
.info {
  padding: 10px 20px;
  font-size: 14px;
}
.info p {
  line-height: 32px;
}
@keyframes colorAnimation {
  from {
    background: #00bcd4;
  }
  to {
    background: #ff5722;
  }
}
.arcCommentList {
  box-sizing: border-box;
  margin-top: 30px;
}
.arcCommentItem {
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  border-bottom: 1px dashed #f1f1f1;
}
.userInfo {
  display: flex;
  height: 40px;
  align-items: center;
}
.userAverter {
  width: 50px;
}
.userComment {
  flex: 1;
}
.userAverter img {
  width: 40px;
  height: 40px;
  border-radius: 30px;
}
.userInfoMata {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 30px;
}
.userInfoMata .name {
  font-weight: bold;
  color: #333333;
}
.userInfoMata span {
  padding-right: 10px;
}
.userInfoMata span i {
  font-size: 14px;
}
.itemContent {
  font-size: 14px;
  color: #333333;
  box-sizing: border-box;
  padding: 5px 0;
  line-height: 26px;
}
.replyTitle {
  display: flex;
  height: 30px;
  align-items: center;
  color: #666666;
}
.replyTitle .toTop {
  background: hsla(0, 0%, 95%, 0.8);
  color: #909090;
  padding: 0 5px;
  margin-right: 10px;
  cursor: pointer;
}
.replyTitle .toTop.active {
  background: rgba(81, 206, 35, 0.4);
  color: #028679;
}
.replyTitle .showReply {
  margin-right: 10px;
  line-height: 30px;
  cursor: pointer;
}
.replyTitle .showReply i {
  font-size: 14px;
}
.replyTitle .time {
  height: 30px;
  font-size: 12px;
  line-height: 30px;
}
.replyConten {
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  padding: 20px;
  margin-top: 10px;
  position: relative;
}
.replyConten::after {
  content: "";
  position: absolute;
  top: -8px;
  left: 46px;
  border-width: 0 8px 8px;
  border-style: solid;
  border-color: transparent transparent #fff;
}
.replyConten::before {
  content: "";
  position: absolute;
  left: 45px;
  border-width: 0 9px 10px;
  border-style: solid;
  border-color: transparent transparent #f1f1f1;
  top: -10px;
}
.replayItem {
  display: flex;
  margin-bottom: 10px;
}
.replyAverter {
  width: 40px;
}
.replyAverter img {
  width: 30px;
  height: 30px;
  border-radius: 6px;
}
.replayItemContet {
  flex: 1;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 20px;
}
.rContent {
  font-size: 14px;
  padding: 5px 0;
  line-height: 26px;
}
.rTime {
  font-size: 12px;
  color: #666666;
  padding-top: 10px;
}
.rTime span:nth-of-type(1) {
  padding-right: 20px;
}
.rTime span:nth-of-type(2) {
  cursor: pointer;
}
.rInput {
  margin-top: 10px;
}
.replyPepole a {
  color: rgb(3, 144, 226);
}
.toShowReply {
  display: none;
}
.replayItem:hover .toShowReply {
  display: inline-block;
}
</style>
