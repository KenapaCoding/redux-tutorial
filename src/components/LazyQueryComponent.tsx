/** @format */

import { useLazyGetPostQuery } from '../slices/apiSlice';

const LazyQueryComponent = () => {
	const [fetchPost, { data, isLoading, isError }] = useLazyGetPostQuery();

	const handleFetchPost = () => {
		fetchPost(2);
	};

	return (
		<div className='margin-top'>
			<button disabled={isLoading} onClick={handleFetchPost}>{isLoading ? 'Loading ...' : 'Fetch Post'}</button>
			{isError && <p>Error Fetching Data</p>}
			{data && (
				<div>
					<h3>{data.title}</h3>
					<p>{data.views}</p>
				</div>
			)}
		</div>
	);
};

export default LazyQueryComponent;
