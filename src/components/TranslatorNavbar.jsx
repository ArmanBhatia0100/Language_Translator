import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';


function ResponsiveAppBar() {

    return (
        <>
            <div className="navbar flex flex-row justify-evenly items-center">
                <h3 className="text-md font-bold">Detect Language</h3>
                <Button variant="text">English</Button>
                <Button variant="text">French</Button>
            </div>
            <Divider />
        </>
    );
}
export default ResponsiveAppBar;
