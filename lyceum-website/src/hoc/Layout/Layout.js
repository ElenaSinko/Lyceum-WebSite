import React from "react";
import classes from "./Layout.module.scss"
import Footer from "../../components/Footer/Footer";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import Header from "../../components/Header/Header";

class Layout extends React.Component {
    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    menuCloseHandler = () => {
       this.setState({
           menu: false
       })
    };

    render() {
        return (
            <div className={classes.Layout}>
                <Header onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
                <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler}/>
                <main>
                    { this.props.children }
                </main>
                <Footer/>
            </div>
        )
    }
}


export default Layout
