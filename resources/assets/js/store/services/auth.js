import Http from '../../utils/Http';
import { authActions } from '../actions';

import Transformer from '../../utils/Transformer';
//import {Toast} from 'react-toastr-basic';
///import {ToastDanger} from 'react-toastr-basic'
import { toast } from 'react-toastify';


/**
 * login user
 *
 * @param credentials
 * @returns {function(*)}
 */
export function login(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/login', credentials).then(res => {
                const data = Transformer.fetch(res.data);
                dispatch(authActions.authLogin(data.data.token));
                toast.success("Login success");
                return resolve();
            }).catch((err) => {
                const statusCode = err.response.status;
                const data = {
                    error: null,
                    statusCode,
                };

                if (statusCode === 422) {
                    const resetErrors = {
                        errors: err.response.data,
                        replace: false,
                        searchStr: '',
                        replaceStr: '',
                    };
                    data.error = Transformer.resetValidationFields(resetErrors);
                } else if (statusCode === 401) {
                    toast.error(err.response.data.message);
                    data.error = err.response.data.message;
                }

                return reject(data);
            });
        })
    );
}

export function register(credentials) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/register', Transformer.send(credentials)).then(res => {
                const data = Transformer.fetch(res.data)
                dispatch(authActions.authLogin(data.accessToken))
                return resolve()
            }).catch((err) => {
                const statusCode = err.response.status;
                const data = {
                    error: null,
                    statusCode,
                };

                if (statusCode === 422) {
                    const resetErrors = {
                        errors: err.response.data,
                        replace: false,
                        searchStr: '',
                        replaceStr: '',
                    };

                    toast.error(err.response.data);

                    data.error = Transformer.resetValidationFields(resetErrors);
                } else if (statusCode === 401) {
                    data.error = err.response.data.message;
                }
                return reject(data);
            });
        })
    );
}

/**
 * logout user
 *
 * @returns {function(*)}
 */
export function logout() {
    return dispatch => {
        return Http.get('auth/logout')
            .then(res => {
                dispatch(authActions.authLogout())
                console.log(res.data.message);
                toast.info(res.data.message);
            }).catch(err => {
                toast.error(err.response.data.message);
            })
    }
}
