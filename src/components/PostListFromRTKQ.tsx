/** @format */

import { useGetPostsQuery } from '../slices/apiSlice';

const PostListFromRTKQ = () => {
	const { data, isLoading, isError } = useGetPostsQuery();

	if (isLoading) return <h1>Loading fetching data ...</h1>;
	if (isError) return <h1>Error fetching data ...</h1>;

	return (
		<div>
			<ul>
				{data?.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default PostListFromRTKQ;
