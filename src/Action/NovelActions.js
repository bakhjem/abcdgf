import * as api from '../Networks/ApiService';

/*------------------------------RETURN----------------------------------------*/
export const fetchMangeHomeSuccess = (mangalist) => {
  return {
    type: 'FETCH_MANGA_HOME',
    mangalist
  };
};

export const fetchHotnovelSuccess = (hotnovel) => {
  return {
    type: 'FETCH_HOT_NOVEL',
    hotnovel
  };
};

export const fetchGenresSuccess = (genres) => {
  return {
    type: 'FETCH_GENRES',
    genres
  };
};

export const fetchNovelDetailSuccess = (noveldetail) => {
  return {
    type: "FETCH_NOVEL_DETAIL",
    noveldetail
  };
};
export const fetchNovelChapterSuccess = (novelchapter) => {
  return {
    type: "FETCH_NOVEL_CHAPTER",
    novelchapter
  };
};
export const fetchNewupdateSuccess = (newupdate) => {
  return {
    type: "FETCH_NOVEL_NEW_UPDATE",
    newupdate
  };
};
export const fetchGenresDetailSuccess = (genresdetail) => {
  return {
    type: "FETCH_GENRES_DETAIL",
    genresdetail
  };
};
export const fetchNewNovelSuccess = (newnovel) => {
  return {
    type: "FETCH_NEW_NOVEL",
    newnovel
  };
};
export const fetchCompleteNovelSuccess = (completenovel) => {
  return {
    type: "FETCH_COMPLETED_NOVEL",
    completenovel
  };
};
export const fetchSearchSuccess = (search) => {
  return {
    type: "FETCH_SEARCH_NOVEL",
    search
  };
};


/*------------------------------FETCH----------------------------------------*/
export const fetchHome = (params) => {
  return (dispatch) => {
    api.getAll('update', params, function(response) {
      // console.log(response[0);
      dispatch(fetchMangeHomeSuccess(response[0].data))
    });
  };
};
export const fetchNewupdate = (params) => {
  return (dispatch) => {
    api.getAll('update', params, function(response) {
      dispatch(fetchNewupdateSuccess(response[0]))
    });
  };
};
export const fetchHotnovel = (params) => {
  return (dispatch) => {
    api.getAll('truyenhot', params, function(response) {
      // console.log(response);
      dispatch(fetchHotnovelSuccess(response[0]))
    });
  };
};
export const fetchGenres = (params) => {
  return (dispatch) => {
    api.getAll('theloai', params, function(response) {
      // console.log(response)
      dispatch(fetchGenresSuccess(response))
    });
  };
};
export const fetchNovelDetail = (params) => {
  return (dispatch) => {
    api.getAll('truyen', params, function(response) {
      console.log(response)
      dispatch(fetchNovelDetailSuccess(response))
    });
  };
};
export const fetchNovelChapter = (params) => {
  return (dispatch) => {
    api.getAll('chuong', params, function(response) {
      dispatch(fetchNovelChapterSuccess(response))
    });
  };
};
export const fetchGenresDetail = (params) => {
  return (dispatch) => {
    api.getAll('gettheloai', params, function(response) {
      dispatch(fetchGenresDetailSuccess(response[0]))
    });
  };
};
export const fetchNewNovel = (params) => {
  return (dispatch) => {
    api.getAll('moidang', params, function(response) {
      dispatch(fetchNewNovelSuccess(response[0]))
    });
  };
};
export const fetchCompleteNovel = (params) => {
  return (dispatch) => {
    api.getAll('truyenfull', params, function(response) {
      dispatch(fetchCompleteNovelSuccess(response[0]))
    });
  };
};

export const fetchSearch = (params) => {
  return (dispatch) => {
    api.getAll('timkiem', params, function(response) {
      dispatch(fetchSearchSuccess(response))
    });
  };
};

