import React from 'react';
import IndividualPost from '../components/post/IndividualPost';

const PostRootPage = (props: any) => {
    const params: String[] =
        typeof window !== 'undefined' ? location.pathname.split('/') : '';
    const slug: String = params[1];

    return (
        <IndividualPost slug={slug} />
    );
};
export default PostRootPage;
