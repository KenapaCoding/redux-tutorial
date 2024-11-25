/** @format */

import { useState } from 'react';
import { useCreatePostMutation } from '../slices/apiSlice';

const AddPost = () => {
	const [createPost, { isLoading }] = useCreatePostMutation();
	const [title, setTitle] = useState<string>('');

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
           const post  = {title: title}
           createPost(post)
            setTitle('')
        } catch (error) {
            console.error(error)
        }
    }
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
            <button type='submit'>{isLoading ? 'Loading Create' : 'Create Post'}</button>
		</form>
	);
};

export default AddPost;
