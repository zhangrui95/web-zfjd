import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import bg from '../../assets/bg.jpg';
import styles from './goLink.less';


export default class GoLink extends PureComponent {
  state = {
    name:JSON.parse(sessionStorage.getItem('user')).name,
    token:sessionStorage.getItem('userToken'),
    group:JSON.parse(sessionStorage.getItem('user')).group.name,
  }
  componentDidMount() {
    console.log(sessionStorage.getItem('user'))
  }
  goLink = (xtType) =>{
    if(xtType){
      if(xtType === 'sacwUrl'){
        window.open(window.configUrl[xtType]+this.state.name);
      }else{
        window.open(window.configUrl[xtType]+this.state.token);
      }
    }
  }
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.name}>{this.state.group} {this.state.name},您好</div>
        <div className={styles.boxUrl+' '+styles.zhag} onClick={()=>this.goLink('zhagUrl')}></div>
        <div className={styles.boxUrl+' '+styles.sacw} onClick={()=>this.goLink('sacwUrl')}></div>
        <div className={styles.boxUrl+' '+styles.baq} onClick={()=>this.goLink('baqUrl')}></div>
        <div className={styles.boxUrl+' '+styles.zhjz}></div>
      </div>
    );
  }
}
