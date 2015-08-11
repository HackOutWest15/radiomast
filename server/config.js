ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "313431d6c7c245f1b01d7994e440b3a4",
      "secret": "c97c245cd174494fa340d10b7a62a348"
    }
  },
  { upsert: true }
);


