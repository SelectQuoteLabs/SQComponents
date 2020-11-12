import {useQuery} from 'react-query';
import {useSnackbarDispatch} from '../../src';

const APIKEY = 'de7d069c'; // registered to lucas.homer@selectquote.com

export function useQueryMovies(title) {
  const {snackbar} = useSnackbarDispatch();
  return useQuery(
    ['movies', title],
    async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${title}&apikey=${APIKEY}`
      );
      const json = await response.json();
      return json;
    },
    {
      enabled: title.length > 1, // APi will often return an error for searches with only two characters, which is handy to show the error snacbkar :)
      onSuccess: data => {
        // snackbar shouldn't dictate where you show error messages, whether inside a RQ callback, or in a component's useEffect, as long as it's within the provider in the component tree
        // this is a less-than-usual way to get errors back from the API... look away!
        if (data.Error) {
          snackbar.error('there was an error');
          return;
        }
        snackbar.success('resolved movie search request');
      },
      onError: error => console.log(error),
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );
}
