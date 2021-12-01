// import Profile from '../Profile/Profile';
// import userInfo from '../../user.json';
import data from '../../data.json';

import Statistics from '../Statistics/Statistics';

function App() {
  return <Statistics title="Upload stats" stats={data} />;

  // <Profile
  //   username={userInfo.username}
  //   tag={userInfo.tag}
  //   location={userInfo.location}
  //   avatar={userInfo.avatar}
  //   stats={userInfo.stats}
  //   followers={userInfo.stats.followers}
  //   views={userInfo.stats.views}
  //   likes={userInfo.stats.likes}
  // />
}

export default App;
