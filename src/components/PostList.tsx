/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { fetchPost } from '../slices/postSlice';

const PostList = () => {
	const dispatch = useDispatch<AppDispatch>();

	const items = useSelector((state: RootState) => state.post.items);

	const status = useSelector((state: RootState) => state.post.status);

	useEffect(() => {
		if (status == 'idle') {
			dispatch(fetchPost());
		}
	}, []);

	if (status == 'loading') {
		return <div>Loading fetching Post ...</div>;
	}
	if (status == 'failed') {
		return <div>Failed fetching Post ...</div>;
	}

	return (
		<div>
			<ul>
				{items.map((item: { id: number; title: string }) => (
					<div key={item.id}>{item.title}</div>
				))}
			</ul>
		</div>
	);
};

export default PostList;
