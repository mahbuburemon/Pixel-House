import React from 'react';
import { ListGroup } from 'react-bootstrap';
import useAuth from '../../../../../hooks/useAuth';

const SingleAdmin = (props) => {
    const { user, admin } = useAuth();
    const { role, email } = props.singleAdmin
    return (
        <div>
            <ListGroup as="ul" className="m-2">
                <ListGroup.Item as="li" active>
                    {role}
                </ListGroup.Item>
                {role && <ListGroup.Item as="li" active>
                    {email}
                </ListGroup.Item>}

            </ListGroup>
        </div>
    );
};

export default SingleAdmin;