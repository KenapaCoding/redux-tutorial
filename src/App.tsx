import './App.css';
import AddPost from './components/AddPost';
import Counter from './components/Counter';
import LazyQueryComponent from './components/LazyQueryComponent';
import PostList from './components/PostList';
import PostListFromRTKQ from './components/PostListFromRTKQ';

function App() {
	return (
		<>
			{/* <PostList /> */}
			<PostListFromRTKQ/>
			<AddPost/>
			<LazyQueryComponent/>
		</>
	);
}

export default App;
