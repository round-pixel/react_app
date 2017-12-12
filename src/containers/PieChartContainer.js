import { connect } from 'react-redux';
import PieChart from 'components/blog/containers/PieChart';

function likeStat(posts) {
  const likeArr = [];
  posts.map(
    (post) => (
      likeArr.push([
        post.message ? post.message : '',
        post.likes ? post.likes : 0
      ])
    )
  );
  return likeArr;
}

const stateToProps = (state) => ({
  columns: likeStat(state.posts.entries)
});

export default connect(stateToProps)(PieChart);
