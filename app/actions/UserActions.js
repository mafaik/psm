import * as types from '../constants/UserActionTypes';
import * as appTypes from '../constants/AppTypes';
import get from '../api/UserApi';

/* USER */
export function setUserProfile(user) {
  return (dispatch) => {
    dispatch({
      type: types.SET_USER_PROFILE,
      user: user
    });
  };
}


export function getUserProfile() {
  dispatch({
    type: types.USER_PROFILE_LOADING,
  });

  get(url, (data) => {
    dispatch({
      type: types.USER_PROFILE_DONE,
      user: user.records
    });
  });
}

export function updateUserData(user) {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_USER_DATA,
      user: user
    });
  };
}

export function resetUserData() {
  return (dispatch) => {
    dispatch({
      type: types.RESET_USER_DATA,
      user: {}
    });
  };
}

export function setPembayaran(pembayaran) {
  return (dispatch) => {
    dispatch({
      type: types.SET_PEMBAYARAN,
      pembayaran: pembayaran
    });
  };
}


export function resetBelanja() {
  return (dispatch) => {
    dispatch({
      type: types.RESET_BELANJA,
    });
  };
}


//TRANSAKSI

export function searchTransaksiNextPage() {
  return (dispatch, getState) => {

    if( getState().toko.next === 1)
    {
      return
    }

    const page = getState().toko.page + 1;
    const customerid = getState().toko.user.customer_id;
    //const customerid = 1;
    const url = appTypes.server+'/api/toko/index.php/getTransaksi?customerid='+customerid+'&page='+page;
    searchTransaksiAPI(url, page, dispatch);
  };
}


export function searchTransaksi(page = 1) {
  return (dispatch, getState) => {
    const customerid = getState().toko.user.customer_id;
    //const customerid = 1;
    const url = appTypes.server+'/api/toko/index.php/getTransaksi?customerid='+customerid+'&page='+page;
    searchTransaksiAPI(url, page, dispatch);
  };
}


export function searchTransaksiDetail(transaksiid) {
  return (dispatch, getState) => {
    const url = appTypes.server+'/api/toko/index.php/getTransaksiDetail?transaksiid='+transaksiid;
    searchTransaksiDetailAPI(url, dispatch);
  };
}



