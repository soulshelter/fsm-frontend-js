
import * as React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
//import useLogin from "../../hooks/useLogin";

const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;

    //const { loginState } = useLogin();
    //console.log(loginState);

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                //loginState === "SUCCESS" ? (
                //    <Component {...routeProps} />
                //) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        //state: { from: routeProps.location }
                    }}
                />
                //    )
            }
        />
    );
};

export default PrivateRoute;