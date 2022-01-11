import React, {Component} from 'react';
import classes from "./Settings.module.scss";
import logo from './pics/logo.svg'

class Settings extends Component{

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeApi = this.onChangeApi.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            name: '',
            surname: '',
            api: '',
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeSurname(e) {
        this.setState({ surname: e.target.value })
    }

    onChangeApi(e) {
        this.setState({ api: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.userData = {
            name: this.state.name,
            surname: this.state.surname,
            api: this.state.api
        }

        localStorage.setItem(this.state.api, JSON.stringify(this.userData));

        this.setState({
                name: '',
                surname: '',
                api: ''
        }) 
    }

    render(){
        return(
            <>
                <div className={classes['Login-page']}>
                    <div className={classes['Login-window']}>
                            <a href="/" className={classes['Login-home1']}>
                                <img src={logo} alt="Disaster" className={classes['Login-logo-pic']}/>
                            </a>
                        <div>
                            <a href="/" className={classes['Login-home2']}>
                                <span className={classes['Login-home-text']}>Dashboard Kit</span>
                            </a>
                        </div>

                        <h2 className={classes['Login-header']}>Log In to Dashboard Kit</h2>
                        <h3 className={classes['Login-description']}>Enter your email and password below</h3>

                        <form onSubmit={this.onSubmit}>
                            
                            <div className={classes['Login-name']}>
                                <h4 className={classes['Login-input-name-text']}>Name</h4>
                                <input 
                                    className={classes['Login-input-name']} 
                                    placeholder="User name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className={classes['Login-name']}>
                                <h4 className={classes[ 'Login-input-name-text']}>Surname</h4>
                                <input 
                                    className={classes['Login-input-name']} 
                                    placeholder="User surname" 
                                    type="text"
                                    value={this.state.surname}
                                    onChange={this.onChangeSurname}
                                />
                            </div>

                            <div className={classes['Login-name']}>
                                <h4 className={classes['Login-input-name-text']}>Api</h4>
                                <input 
                                    className={classes['Login-input-name']} 
                                    placeholder="Api key" 
                                    type="text"
                                    value={this.state.api}
                                    onChange={this.onChangeApi}
                                />
                            </div>

                            <button type="submit" className={classes['Login-button']}>Log In</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Settings