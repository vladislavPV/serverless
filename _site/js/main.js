console.log(window.location.origin)

async function getAllUrls(urls) {
    try {
        var data = await Promise.all(
            urls.map(
                url =>
                    fetch(window.location.origin+"/recipes/"+url+".json").then(
                        (response) => response.json()
                    )));

        return (data)

    } catch (error) {
        console.log(error)

        throw (error)
    }
}

fetch(window.location.origin+"/db.json")
  .then((response) => {
    return response.json();
  })
  .then((recipes) => {
  	console.log(recipes);
  	getAllUrls(recipes["recipes"])
  		.then((responses) => {
  			console.log(responses);
  		})
  });