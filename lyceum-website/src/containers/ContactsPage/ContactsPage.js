import React from "react";
import classes from "./ContactsPage.module.scss";
import {connect} from "react-redux"
import DirectorsSection from "../../components/DirectorsSection/DirectorsSection";
import FormContacts from "../../components/FormContacts/FormContacts";
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import ModalWindow from "../../components/UI/ModalWindow/ModalWindow";

class ContactsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.modalWindowIsShown && <ModalWindow>{this.props.message}</ModalWindow>}
                    <BlockTitle>Contacts</BlockTitle>
                    <div className={classes.ContactsPage}>
                        <FormContacts />
                        <DirectorsSection directors={this.props.directors}/>
                    </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
  return {
    directors: state.lycee.directors,
    modalWindowIsShown: state.lycee.modalWindowIsShown,
    message: state.lycee.message,
  }
}
export default connect(mapStateToProps)(ContactsPage)
