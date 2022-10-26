var fs = require("fs");

function getPodcasts(id) {
  const { Client } = require("podcast-api");

  const client = Client({ apiKey: process.env.API_KEY });
  client
    .fetchBestPodcasts({
      genre_id: {id},
      region: "gb",
      sort: "listen_score",
      safe_mode: 0,
    })
    .then((response) => {
      // Get response json data here
      console.log(response.data);
      if (!response.data) return;
      // writeFile function with filename, content and callback function
      fs.writeFile(
        `${id}-podcasts-genre.json`,
        JSON.stringify(response.data) || "",
        function (err) {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

[68, 133, 134, 88, 135, 111, 168, 99, 107].forEach((id, index) =>
  //timeout to get around api limiting
  setTimeout(() => getPodcasts(id), 2000 * index)
);
