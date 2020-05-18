export default {
  computed: {
    filterdTitles(){
      return this.scores.filter(score => {
        return score.title.toLowerCase().match(this.search.toLowerCase());
      })
    }
  }
}