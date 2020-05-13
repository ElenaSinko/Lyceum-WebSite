import React from "react";
import classes from './DirectorItem.module.scss'
import WOW from 'wowjs';

export default class DirectorItem extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    const cls = [classes.DirectorItem, `wow`, 'slideInLeft'];
    return (
    <div className={cls.join(' ')}>
      <div className={classes.PortraitContainer}><img src={this.props.src} alt={this.props.name} className={classes.Portrait}/></div>
      <div className={classes.DirectorAbout}>
        <div className={classes.Flex}>
          <h3>{this.props.name}</h3>
          <div >
            <h4>{this.props.title}</h4>
            {this.props.cite && <span>{this.props.cite}</span>}
          </div>
        </div>
        <div>
          <p><span style={{textDecoration: 'outline'}}>Téléphone:</span> {this.props.telephone}</p>
          <p><span>Courriel:</span> {this.props.email}</p>
        </div>
      </div>
    </div>
    )
  }
}
