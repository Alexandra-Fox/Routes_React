export const logIn = (username, password) => (
    new Promise((resolve, reject) => {
      if (username === 'Alexandra' && password === '12345') {
        resolve();
      } else {
        reject(new Error('Incorrect username or password.'));
      }
    })
  );
  