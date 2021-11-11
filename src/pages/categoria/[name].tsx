import React from 'react';
import CategoryComponent from '../../components/categoria/category';

const CategoriaPage = (props: any) => {
    const { name } = props;
    return (
        <CategoryComponent categoryName={name} />
    );
};
export default CategoriaPage;
