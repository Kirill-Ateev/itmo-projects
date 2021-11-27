require('isomorphic-fetch');

(async () => {
const rawResponse2 = await fetch('https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29yZHByZXNzLmtvZGFrdG9yLnJ1IiwiaWF0IjoxNjM4MDA4NDQ4LCJuYmYiOjE2MzgwMDg0NDgsImV4cCI6MTYzODYxMzI0OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiNyJ9fX0.0c0ZG6RW0EjO0MaaNO7xCbZKLbDHwzu5CILndl7RKNY'
    },
    body: JSON.stringify({title: "Yo", content: "Kirill Ateev", status: "publish"})
  });
  const content2 = await rawResponse2.json();
console.log(content2)
})();