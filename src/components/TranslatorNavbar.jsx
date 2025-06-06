import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';


function TranslatorNavbar({language, myLable}) {
    return (
        <>
            <div className="navbar flex flex-row justify-start gap-4 items-center">
                <h3 className="text-lg ">{myLable}</h3>
                <h2 className='text-2xl font-bold '>{language}</h2>
            </div>
            <Divider />
        </>
    );
}

TranslatorNavbar.propTypes = {
    language: PropTypes.string,
    myLable: PropTypes.string
};

export default TranslatorNavbar;
