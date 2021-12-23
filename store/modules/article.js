
export default {
	state: {
		data: [],
		selectArticle: { }
	},
	mutations: {
		getArticles (state, data) {
			state.data = data || []
		},
		selectArticle (state, data) {
			state.selectArticle = data || {}
		}
	}
}
