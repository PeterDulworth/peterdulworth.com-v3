import React from 'react';
import PropTypes from 'prop-types';

const CenterAlignedTable = ({ items }) => {
    return (
        <div className="CenterAlignedTable">
            {items.map((item) => 
                <div className="CenterAlignedTable__item">
                    <div className="CenterAlignedTable__item-left">
                        {item.left}
                    </div>
                    <div className="CenterAlignedTable__item-center">
                        &nbsp;@&nbsp;
                    </div>
                    <div className="CenterAlignedTable__item-right">
                        {item.right}
                    </div>
                </div>
            )}
        </div>
    );
};

CenterAlignedTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        left: PropTypes.string.isRequired,
        right: PropTypes.string.isRequired
    })),
};

export default CenterAlignedTable;