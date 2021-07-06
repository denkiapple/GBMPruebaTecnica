const IPC_URL = "https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e";

export const getData = () => {
  const params = {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // TELL REDUCER A GET IS HAPPENING

  return fetch(IPC_URL, params)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    }).catch(err => {
      return new Error(err.statusText)
    });
};
