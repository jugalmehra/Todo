import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';


function Checktasks({ showall, showcompleted, showactive, todos}) {
    return(
        <div>
        <ButtonGroup>
        <Button onClick={showall(todos)} >All</Button>
        <Button onClick={showcompleted(todos)} >Completed</Button>
        <Button onClick={showactive(todos)} >Active</Button>
        </ButtonGroup>


        
        
        
        </div>
    );
}

export default Checktasks;