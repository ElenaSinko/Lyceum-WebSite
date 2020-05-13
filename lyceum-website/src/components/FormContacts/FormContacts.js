import React from "react";
import classes from "./FormContacts.module.scss";
import Button from "../UI/Button/Button";
import WOW from 'wowjs';
import Input from "../UI/Input/Input";
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import axios from 'axios';

function validateEmail(email) {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const initialState = {
    modalWindowIsNotFilled: false,
    modalWindowSentSuccessfully: false,
    modalWindowError: false,
    isFormValid: false,
    formControls: {
        name: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                minLength: 2,
            },
            errorMessage: 'Le nom n’est pas valide'
        },
        email: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                email: true,
            },
            errorMessage: 'Email n’est pas valide'
        },
        phone: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                minLength: 5
            }
        },
        messageTitle: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                minLength: 2,
            },
        },
        message: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                minLength: 2,
                maxLength: 100,
            },
        }
    },

};


export default class FormContacts extends React.Component {
    state = {
        message: {},
        modalWindowIsNotFilled: false,
        modalWindowSentSuccessfully: false,
        modalWindowError: false,
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 2,
                },
                errorMessage: 'Le nom n’est pas valide'
            },
            email: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    email: true,
                },
                errorMessage: 'Email n’est pas valide'
            },
            phone: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 5
                }
            },
            messageTitle: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 2,
                },
            },
            message: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 100,
                },
            }
        },

    };

    validateControl(controlValue, validation) {
      if(!validation) {
          return true
      }

      let isValid = true;

      if(validation.required) {
          isValid = controlValue.trim() !== '' && isValid
      }

      if(validation.minLength) {
          isValid = controlValue.trim().length > 1 && isValid
      }

      if(validation.maxLength) {
            isValid = controlValue.trim().length < 100 && isValid
      }

      if(validation.email) {
          isValid = validateEmail(controlValue)
      }

      return isValid
    }

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    submitHandler = (evt) => {
        evt.preventDefault()

    };

    sendMessageHandler = () => {
        if(this.state.isFormValid === false) {
            this.setState({ modalWindowIsNotFilled: true});
            return
        }

        const message = {
            name: this.state.formControls.name.value,
            email: this.state.formControls.email.value,
            phone: this.state.formControls.phone.value,
            messageTitle: this.state.formControls.messageTitle.value,
            message: this.state.formControls.message.value,
        };
        this.setState({message});

        axios.post('https://lycee-575b7.firebaseio.com/form.json', this.state.message)
            .then(() => {
                this.setState({modalWindowSentSuccessfully: true});
                this.setState({formControls: initialState.formControls})
                this.setState({isFormValid: false})

            })
            .catch(() => this.setState({modalWindowError: true}))
    };

    onChangeHandler = (evt) => {
        const nameOfActiveControl = Object.keys(this.state.formControls).filter((control) => {
            return control === evt.target.name
        })[0];
        const formControls = {...this.state.formControls};
        const activeControl = {...formControls[nameOfActiveControl]};
        activeControl.value = evt.target.value;
        activeControl.valid = this.validateControl(activeControl.value, activeControl.validation);
        activeControl.touched = true;
        formControls[nameOfActiveControl] = activeControl;

        let isFormValid = true;
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({formControls, isFormValid})
    };

    render() {
        const cls = [classes.FormContacts, 'wow', 'zoomIn'];
        return (
            <div className={cls.join(' ')}>
                <h2>Formulaire de contact</h2>
                {this.state.modalWindowIsNotFilled && <ModalWindow onCloseModalWindow={() => this.setState({modalWindowIsNotFilled: false})}>Veuillez d'abord remplir le formulaire</ModalWindow>}
                {this.state.modalWindowSentSuccessfully && <ModalWindow onCloseModalWindow={() => this.setState({modalWindowSentSuccessfully: false})}>Message envoyé avec succès</ModalWindow>}
                {this.state.modalWindowError && <ModalWindow onCloseModalWindow={() => this.setState({modalWindowError: false})}>Une erreur s'est produite. Veuillez réessayer</ModalWindow>}
                <form onSubmit={this.submitHandler}>
                    <Input
                        label='Votre nom'
                        name='name'
                        type='text'
                        value={this.state.formControls.name.value}
                        shouldValidate={!!this.state.formControls.name.validation}
                        valid={this.state.formControls.name.valid}
                        touched={this.state.formControls.name.touched}
                        onChange={evt => this.onChangeHandler(evt)}
                        errorMessage={this.state.formControls.name.errorMessage}
                    />
                    <div className={classes.Flex}>
                        <Input
                            label='Email'
                            name='email'
                            type='email'
                            value={this.state.formControls.email.value}
                            shouldValidate={!!this.state.formControls.email.validation}
                            valid={this.state.formControls.email.valid}
                            touched={this.state.formControls.email.touched}
                            onChange={evt => this.onChangeHandler(evt)}
                            errorMessage={this.state.formControls.email.errorMessage}
                        />
                        <Input
                            label='Téléphone'
                            name='phone'
                            type='tel'
                            value={this.state.formControls.phone.value}
                            valid={this.state.formControls.phone.valid}
                            shouldValidate={!!this.state.formControls.phone.validation}
                            touched={this.state.formControls.phone.touched}
                            onChange={evt => this.onChangeHandler(evt)}
                        />
                    </div>
                    <Input
                        label='Objet du message'
                        name='messageTitle'
                        type='text'
                        value={this.state.formControls.messageTitle.value}
                        touched={this.state.formControls.messageTitle.touched}
                        valid={this.state.formControls.messageTitle.valid}
                        shouldValidate={!!this.state.formControls.messageTitle.validation}
                        onChange={evt => this.onChangeHandler(evt)}
                    />
                    <Input
                        label='Message'
                        name='message'
                        type='text'
                        value={this.state.formControls.message.value}
                        touched={this.state.formControls.message.touched}
                        valid={this.state.formControls.message.valid}
                        shouldValidate={!!this.state.formControls.message.validation}
                        onChange={evt => this.onChangeHandler(evt)}
                    />
                    <Button onClick={this.sendMessageHandler}>Envoyer</Button>
                </form>
            </div>
        )
    }
}

