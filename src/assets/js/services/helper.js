import axios from 'axios';
import { get, debounce } from 'lodash';

export const debouncer = (cb, delay = 500) => {
  return debounce((...args) => cb(...args), delay);
};

// format numbers
export const formatterNumber = (num) => {
  if (!num) return "0"; // Handle null/undefined

  // Format based on the number size
  if (num >= 1_000_000_000) {
    // Billions (B)
    let formatted = (num / 1_000_000_000).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatted.endsWith(".00") ? `${formatted.slice(0, -2)}B` : `${formatted}B`;
  } else if (num >= 1_000_000) {
    // Millions (M)
    let formatted = (num / 1_000_000).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatted.endsWith(".00") ? `${formatted.slice(0, -3)}M` : `${formatted}M`;
  }

  // Regular formatting (no M or B)
  let formatted = num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // If whole number, remove ".00"
  return formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted;
};

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