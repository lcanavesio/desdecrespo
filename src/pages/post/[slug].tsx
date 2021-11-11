import React from 'react';
import IndividualPost from '../../components/post/IndividualPost';

const PostPage = (props: any) => {
    const params: String[] =
        typeof window !== 'undefined' ? location.pathname.split('/') : '';
    const slug: String = params[2];

    return (
        <IndividualPost slug={slug} />
    );
};
export default PostPage;
