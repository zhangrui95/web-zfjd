import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import {message} from 'antd';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({payload, callback}, {call, put}) {
      const response = yield call(fakeAccountLogin, payload);
      if (response && response.data && response.data.token) {
        let authoMenuList = response.data.menu;
        let haveAutho = false;
        for (let i = 0; i < authoMenuList.length; i++) {
          let menu = authoMenuList[i];
          if (menu.resourceCode === 'yyd_sys' || menu.resourceCode === 'jgd_sys') {
            haveAutho = true;
            break;
          }
        }
        sessionStorage.setItem('userToken', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        sessionStorage.setItem('authoMenuList', JSON.stringify(response.data.menu));
        message.success('提示：登录成功');
        yield put(routerRedux.push('/user/goLink'));
        if (callback) {
          callback(response.data);
        }
      }
      else {
        message.warn('提示：登录失败，请重试');
        return false;
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      // redirect
      if (window.location.pathname !== '/user/login') {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
          })
        );
        sessionStorage.clear();
        message.success('提示：退出成功');
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
