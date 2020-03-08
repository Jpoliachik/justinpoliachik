//imports needed for this function
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const recursive = require("recursive-fs");
const basePathConverter = require("base-path-converter");

const { updateDNSLink } = require("./updateDNSLink");

const pinDirectoryToIPFS = (pinataApiKey, pinataSecretApiKey) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const src = "./public";

  //we gather the files from a local directory in this example, but a valid readStream is all that's needed for each file in the directory.
  recursive.readdirr(src, function(err, dirs, files) {
    console.log("Files to upload: ", files);
    let data = new FormData();
    files.forEach(file => {
      //for each file stream, we need to include the correct relative file path
      data.append(`file`, fs.createReadStream(file), {
        filepath: basePathConverter(src, file),
      });
    });

    const metadata = JSON.stringify({
      name: "justinpoliachik.com",
    });
    data.append("pinataMetadata", metadata);

    return axios
      .post(url, data, {
        maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large directories
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      })
      .then(function(response) {
        //handle response here
        const ipfsHash = response.data.IpfsHash;
        if (!ipfsHash) {
          throw new Error("no ipfs hash found in response");
        }
        console.log(response.data);
        console.log("DONE!");

        updateDNSLink(ipfsHash);
      })
      .catch(function(error) {
        //handle error here
        throw new Error(error);
      });
  });
};

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_API_SECRET_KEY;
pinDirectoryToIPFS(pinataApiKey, pinataSecretApiKey);
