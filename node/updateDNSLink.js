const AWS = require("aws-sdk");

const updateDNSLink = ipfsHash => {
  const route53 = new AWS.Route53();

  const dnsLinkValue = `"dnslink=/ipfs/${ipfsHash}"`;
  const hostedZoneId = process.env.ROUTE53_HOSTED_ZONE_ID;

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
            TTL: 300,
            Type: "TXT",
          },
        },
      ],
      Comment: "Update from GitHub Action",
    },
    HostedZoneId: hostedZoneId,
  };

  route53.changeResourceRecordSets({}, (err, data) => {
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
