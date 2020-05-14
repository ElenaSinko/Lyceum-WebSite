import React from "react";
import classes from "./Layout.module.scss"
import Footer from "../../components/Footer/Footer";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import Header from "../../components/Header/Header";

class Layout extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header/>
                <Drawer/>
                <main>
                    { this.props.children }
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Layout
