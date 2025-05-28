import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';


function ResponsiveAppBar({language, myLable}) {
    return (
        <>
            <div className="navbar flex flex-row justify-start gap-4 items-center">
                <h3 className="text-md font-semibold">{myLable}</h3>
                <h2 className='text-lg font-bold '>{language}</h2>
            </div>
            <Divider />
        </>
    );
}
export default ResponsiveAppBar;
