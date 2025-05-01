import React from 'react';
// import data from '../../assets/product';
import styles from './FilterView.module.scss';
import { LineIcon } from '../../icones/FilterIcons/LineIcon';
import { LIne2Icon } from '../../icones/FilterIcons/LIne2Icon';
import { Line3Icon } from '../../icones/FilterIcons/Line3Icon';
import { Line4Icon } from '../../icones/FilterIcons/Line4Icon';
import { Line5Icon } from '../../icones/FilterIcons/Line5Icon';
import { FilterIcon } from '../../icones/FilterIcons/FilterIcon';

export const FilterView = ({ handleGridChange }) => {
  
    return (
        <div className={`contianer ${styles.filter}`}>
            {/* <div className={styles.length}>
                <p>
                    Showing 1 - 8 of {data.length} results
                </p>
            </div> */}
            <div className={styles.line_list}>
                <h4>Filter</h4>
                <button><FilterIcon /></button>
                <select className={styles.select_price} defaultValue="" >
                    <option value="" disabled hidden>Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
                <button className={styles.search}> </button>
                <button className={styles.line} onClick={() => handleGridChange(1)}> <LineIcon /></button>
                <button className={styles.line_2} onClick={() => handleGridChange(2)}> <LIne2Icon /></button>
                <button className={styles.line_3} onClick={() => handleGridChange(3)}><Line3Icon /></button>
                <button className={styles.line_4} onClick={() => handleGridChange(4)}> <Line4Icon /></button>
                <button className={styles.line_5} onClick={() => handleGridChange(5)}> <Line5Icon /></button>
            </div>
        </div>
    );
};

export default FilterView;

