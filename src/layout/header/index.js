import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import {authConfig} from "./config";

export const Header = ({classes, auth}) => {
    const navigate = useNavigate();

    const onLogOut = () => {
        auth.logOut();
        navigate("/login");
    };

    const {unAuthorisated, authorisated, home} = authConfig(auth)

    const authRender = () => {
        if (auth.user) {
            return (
                <>
                    <Button
                        color="inherit"
                        component={Link}
                        to={authorisated.profile.path}
                    >
                        {authorisated.profile.content}
                    </Button>
                    <Button
                        color="inherit"
                        onClick={onLogOut}
                    >
                        {authorisated.logOut.content}
                    </Button>
                </>
            )
        }
        return (
            <>
                <Button
                    color="inherit"
                    component={Link}
                    to={unAuthorisated.login.path}
                >
                    {unAuthorisated.login.content}
                </Button>
                <Button
                    color="inherit" component={Link}
                    to={unAuthorisated.register.path}
                >
                    {unAuthorisated.register.content}
                </Button>
            </>
        )
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.rightToolbar}>
                    <Button color="inherit" component={Link} to={home.path}>
                        {home.content}
                    </Button>
                </div>
                {auth.isLoaded && authRender()}
            </Toolbar>
        </AppBar>
    )
}
