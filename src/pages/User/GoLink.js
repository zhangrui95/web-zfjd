import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import bg from '../../assets/bg.jpg';
import styles from './goLink.less';

@connect(({ login }) => ({
  login,
}))
export default class GoLink extends PureComponent {
  state = {
    name:JSON.parse(sessionStorage.getItem('user')).name,
    token:sessionStorage.getItem('userToken'),
    group:JSON.parse(sessionStorage.getItem('user')).group.name,
    menu: JSON.parse(sessionStorage.getItem('authoMenuList'))
  }
  componentDidMount() {

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
  goOut = () =>{
    this.props.dispatch({
      type: 'login/logout',
    });
  }
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.name}>{this.state.group} {this.state.name},您好 <span className={styles.goOut} onClick={this.goOut}>退出</span></div>
        <div className={styles.boxUrl+' '+styles.zhag} onClick={()=>this.goLink('zhagUrl')}>执法管理</div>
        <div className={styles.boxUrl+' '+styles.sacw} onClick={()=>this.goLink('sacwUrl')}>涉案财物管理</div>
        <div className={styles.boxUrl+' '+styles.baq} onClick={()=>this.goLink('baqUrl')}>办案区管理</div>
        <div className={styles.boxUrl+' '+styles.zhjz}>智慧卷宗管理</div>
      </div>
    );
  }
}
