import React from 'react';


const AddProductForm = ({ category, setCategoryId, setCategoryName }) => {
    const { category_id, category_name } = category;

    return (
        <div>

            <button
                onClick={() => { setCategoryId(category_id); setCategoryName(category_name) }}
                className='btn  btn-info hover:bg-blue-300'>{category_name}</button>

        </div>
    );
};

export default AddProductForm;