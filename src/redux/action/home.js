import Axios from 'axios';
import {Rest} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const getContact = () => dispatch => {
  Axios.get(`${Rest.url}`)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'SET_CONTACT', value: res.data.data});
    })
    .catch(err => {
      showMessage(err?.message || 'Terjadi Kesalahan');
      dispatch(setLoading(false));
    });
};

export const getById = id => dispatch => {
  Axios.get(`${Rest.url}/${id}`)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'SET_ID', value: res.data.data});
    })
    .catch(err => {
      showMessage(err?.message || 'Terjadi Kesalahan');
      dispatch(setLoading(false));
    });
};

export const deleteById = id => dispatch => {
  Axios.delete(`${Rest.url}/${id}`)
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      // dispatch({type: 'SET_CONTACT', value: res.data.data});
      showMessage(res.data.message, 'success');
    })
    .catch(err => {
      showMessage(err?.message || 'Terjadi Kesalahan');
      dispatch(setLoading(false));
    });
};
