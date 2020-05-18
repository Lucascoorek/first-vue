import Main from './components/main.vue'
import ShowScores from './components/show-scores.vue'
import TabList from './components/tab-component/tab-list.vue'

export default [
  { path: '/', component: Main },
  { path: '/scores', component: ShowScores },
  { path: '/tab-list', component: TabList },
]