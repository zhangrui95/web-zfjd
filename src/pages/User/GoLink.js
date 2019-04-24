import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './goLink.less';

@connect(({ login }) => ({
  login,
}))
export default class GoLink extends PureComponent {
  state = {
    name:JSON.parse(sessionStorage.getItem('user')).name,
    token:sessionStorage.getItem('userToken'),
    group:JSON.parse(sessionStorage.getItem('user')).group.name,
    menu: JSON.parse(sessionStorage.getItem('authoMenuList')),
    list:[],
    page:1,
    leftBtn: styles.none,
    rightBtn: styles.none,
    allList:[],
  }
  componentDidMount() {
    let list = [];
    window.configUrl.goLinkList.map((event)=>{
      this.state.menu.map((item)=>{
        if(item.resourceCode === event.resourceCode){
          list.push(event);
        }
      })
    })
    this.setState({
      list:list.slice(0,4),
      allList:list,
    })
    if(list.length > 4){
      this.setState({
        rightBtn: styles.rightBtn,
      })
    }
  }
  goLink = (xtType) =>{
    if(xtType && window.configUrl[xtType]&&window.configUrl[xtType]!==''){
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
  getNext = () =>{
    let page = this.state.page + 1;
    this.setState({
      list:this.state.allList.slice(this.state.page*4,page*4 < this.state.allList.length ? page*4 : this.state.allList.length),
      leftBtn: styles.leftBtn,
      rightBtn: page*4 < this.state.allList.length ? styles.rightBtn : styles.none,
      page:page,
    });
  }
  getPrev = () =>{
    let page = this.state.page - 1;
    this.setState({
      list:this.state.allList.slice((page-1)*4,page*4 < this.state.allList.length ? page*4 : this.state.allList.length),
      leftBtn: page===1 ? styles.none : styles.leftBtn,
      rightBtn: styles.rightBtn,
      page:page,
    });
  }
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.name}>{this.state.group} {this.state.name},您好 <span className={styles.goOut} onClick={this.goOut}>退出</span></div>
        <Icon type="left" className={this.state.leftBtn} onClick={this.getPrev}/>
        <div className={styles.boxLink}>
            {
              this.state.list.map((item)=>{
                return <div className={styles.boxUrl} style={{background: "url('../../image/"+item.resourceCode+".jpg') no-repeat",color:window.configUrl[item.resourceCode]&&window.configUrl[item.resourceCode]!=='' ? '#4876ff' : '#ccc'}} onClick={()=>this.goLink(item.resourceCode)}>{item.name}</div>
              })
            }
        </div>
        <Icon type="right" className={this.state.rightBtn} onClick={this.getNext}/>
      </div>
    );
  }
}
