import axios from 'axios';
import { get } from 'lodash';

export async function handleRequest(axiosOptions) {
    let response = null;
    let errorMessage = null;
    let validationError = null;
    let status = null;
  
    // Create a new CancelToken source if not provided
    const source = axiosOptions.cancelToken ? null : axios.CancelToken.source();
  
    try {
      // Add the cancelToken to the options if we created one
      const options = {
        ...axiosOptions,
        cancelToken: axiosOptions.cancelToken || source?.token,
      };
  
      response = await axios(options);
    } catch (err) {
      // Don't treat cancellation as an error
      if (axios.isCancel(err)) {
        return [null, null, null, 'cancelled', source];
      }
  
      console.log({ err });
      status = get(err, 'response.status');
      if (status === 422) {
        validationError = get(err, 'response.data.errors');
      } else {
        errorMessage = get(err, 'response.data.message') || get(err, 'message');
      }
    }
  
    // Return the source along with other data so it can be used to cancel the request
    return [response, errorMessage, validationError, status, source];
  }