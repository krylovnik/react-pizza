import React from 'react';
import s from './Categories.module.css'

const Categories = () => {

    const categories = ["Все","Мясная","Вегетарианская","Гриль","Острые","Закрытые"]
    return (
        <div className={s.categories}>
            <div className={s.categoriesList}>
                {categories.map((category,index)=>
                    <div className={s.categoriesItem} key={index}>{category}</div>
                )}
            </div>
            <div className={s.sort}>
                Сортировать по:
            </div>
        </div>
    );
};

export default Categories;