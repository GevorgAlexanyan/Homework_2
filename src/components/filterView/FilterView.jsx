import React from 'react';
// import data from '../../assets/product';
import styles from './FilterView.module.scss';
import { LineIcon } from '../../icones/FilterIcons/LineIcon';
import { LIne2Icon } from '../../icones/FilterIcons/LIne2Icon';
import { Line3Icon } from '../../icones/FilterIcons/Line3Icon';
import { Line4Icon } from '../../icones/FilterIcons/Line4Icon';
import { Line5Icon } from '../../icones/FilterIcons/Line5Icon';
import { FilterIcon } from '../../icones/FilterIcons/FilterIcon';

export const FilterView = ({onClick2,onClick3,onClick4,onClick5,onClick1}) => {
    return (
        <div className={`contianer ${styles.filter}`}>
            {/* <div className={styles.length}>
                <p>
                    Showing 1 - 8 of {data.length} results
                </p>
            </div> */}
            <div className={styles.line_list}>
                <h4>Filter</h4>
                <button><FilterIcon/></button>
                <select className={styles.select_price} defaultValue="" >
                    <option value="" disabled hidden>Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
                <button className={styles.search}> </button>
                <button className={styles.line}> <LineIcon /></button>
                <button className={styles.line_2} onClick={onClick2}> <LIne2Icon/></button>
                <button className={styles.line_3} onClick={onClick3}><Line3Icon /></button>
                <button className={styles.line_4} onClick={onClick4}> <Line4Icon /></button>
                <button className={styles.line_5} onClick={onClick5}> <Line5Icon /></button>
            </div>
        </div>
    );
};

export default FilterView;

