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

export function getNewsAPI(url, page, dispatch) {

  if (page >= 2) {
    dispatch({
      type: types.GET_NEWS_LOADING_FOR_NEXT,
    });

    var data = {
      records: [{
        newsid: 10,
        date: '29-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 11,
        date: '29-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 12,
        date: '29-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }],
      next: 1

    };
  }else {
    dispatch({
      type: types.GET_NEWS_LOADING,
    });

    var data = {
      records: [{
        newsid: 1,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 2,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 3,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 4,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 5,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 6,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 7,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 8,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        newsid: 9,
        date: '30-03-2016',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }],
      next: 2

    };
  }
 
  setTimeout( () => {

    dispatch({
        type: types.GET_NEWS_DONE,
        news: data.records,
        page: page,
        next: data.next
      });

    /*
    get(url, (data) => {
      dispatch({
        type: types.GET_NEWS_DONE,
        news: data.records,
        page: data.page,
        next: data.next
      });
    });
    */

  }, 1000)
  
}


export function getRewardsAPI(url, page, dispatch) {

  if (page >= 2) {
    dispatch({
      type: types.GET_REWARDS_LOADING_FOR_NEXT,
    });

    var data = {
      records: [{
        rewardsid: 7,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 8,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 9,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }],
      next: 1

    };
  }else {
    dispatch({
      type: types.GET_REWARDS_LOADING,
    });

     var data = {
      records: [{
        rewardsid: 1,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 2,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 3,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 4,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 5,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        rewardsid: 6,
        name: 'fujitsu',
        poin: 300,
        image: 'http://www.fujitsu.com/id/Images/s904-gallery-en1_tcm114-1518729.jpg',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }],
      next: 1

    };
  }
 
  setTimeout( () => {

    dispatch({
        type: types.GET_REWARDS_DONE,
        rewards: data.records,
        page: page,
        next: data.next
      });
    /*
    get(url, (data) => {
      dispatch({
        type: types.GET_REWARDS_DONE,
        rewards: data.records,
        page: data.page,
        next: data.next
      });
    });
    */

  }, 1000)
  
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



//NEWS

export function getNewsNextPage() {
  return (dispatch, getState) => {

    if( getState().psm.next === 1)
    {
      return
    }

    const page = getState().psm.page + 1;
    
    const url = appTypes.server+'/api/toko/index.php/getNews?page='+page;
    getNewsAPI(url, page, dispatch);
  };
}


export function getNews(page = 1) {
  return (dispatch, getState) => {
    
    const url = appTypes.server+'/api/toko/index.php/getNews?page='+page;
    getNewsAPI(url, page, dispatch);
  };
}



//REWARDS

export function getRewardsNextPage() {
  return (dispatch, getState) => {

    if( getState().psm.next === 1)
    {
      return
    }

    const page = getState().psm.page + 1;
    
    const url = appTypes.server+'/api/toko/index.php/getRewards?page='+page;
    getRewardsAPI(url, page, dispatch);
  };
}


export function getRewards(page = 1) {
  return (dispatch, getState) => {
    
    const url = appTypes.server+'/api/toko/index.php/getRewards?page='+page;
    getRewardsAPI(url, page, dispatch);
  };
}






