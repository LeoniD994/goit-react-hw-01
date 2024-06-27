import Profile  from './profile/Profile';
import user from './profile/user.json';
import  FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import  TransactionHistory  from './transactionHistory/TrasactionHistory';
import transactions from './transactionHistory/transactions.json';
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
 export default App;