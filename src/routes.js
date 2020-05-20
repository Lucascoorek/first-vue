import Main from './components/main.vue'
import ShowScores from './components/show-scores.vue'
import TabList from './components/tab-component/tab-list.vue'
import SinglePost from './components/single-post.vue'
import ListOne from './components/list-one/list-one.vue';

export default [
  { path: '/', component: Main },
  { path: '/scores', component: ShowScores },
  { path: '/tab-list', component: TabList },
  { path: '/list-one', component: ListOne },
  { path: '/single-post/:id', component: SinglePost },
]