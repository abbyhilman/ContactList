/* eslint-disable no-shadow */
import Axios from 'axios';
import {Rest} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const postContact = dataContact => dispatch => {
  Axios.post(`${Rest.url}`, dataContact)
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      dispatch({type: 'SET_NEWCONTACT', value: res.data.data});
      showMessage(res.data.message, 'success');
    })
    .catch(err => {
      console.log(err);
      showMessage(err?.message || 'Terjadi Kesalahan');
      dispatch(setLoading(false));
    });
};

export const editContact = (id, editContact) => dispatch => {
  Axios.put(`${Rest.url}/${id}`, editContact)
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      dispatch({type: 'SET_EDITCONTACT', value: res.data.data});
      showMessage(res.data.message, 'success');
    })
    .catch(err => {
      showMessage(err?.message || 'Terjadi Kesalahan');
      dispatch(setLoading(false));
    });
};
