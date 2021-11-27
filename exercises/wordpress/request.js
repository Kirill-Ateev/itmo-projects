import "isomorphic-fetch"

(async () => {
    const rawResponse2 = await fetch('http://localhost:3000/wordpress', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: "test server"})
      });
      const content2 = await rawResponse2.json();
console.log(content2)
})();