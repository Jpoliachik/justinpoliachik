const AWS = require("aws-sdk");

const updateDNSLink = ipfsHash => {
  const route53 = new AWS.Route53();

  const dnsLinkValue = `"dnslink=/ipfs/${ipfsHash}"`;

  console.log("updating DNSLink txt to:", dnsLinkValue);

  var params = {
    ChangeBatch: {
      Changes: [
        {
          Action: "UPSERT",
          ResourceRecordSet: {
            Name: "_dnslink.justinpoliachik.com",
            ResourceRecords: [
              {
                Value: dnsLinkValue,
              },
            ],
            TTL: 60,
            Type: "TXT",
          },
        },
      ],
      Comment: "Update from GitHub Action",
    },
    HostedZoneId: "Z2ZNPUAQTMLOMI",
  };

  route53.changeResourceRecordSets(params, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(data);
      console.log("DONE!");
    }
  });
};

module.exports = {
  updateDNSLink,
};
