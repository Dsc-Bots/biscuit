export const GatewayManagerDefaultOptions = {
  compress: false,
  intents: 0,
  properties: {
    os: process.platform,
    browser: 'Biscuit',
    device: 'Biscuit'
  },
  url: 'wss://gateway.discord.gg',
  version: 10,
  totalShards: 1,
  lastShardId: 0,
  firstShardId: 0,
  totalWorkers: 4,
  shardsPerWorker: 25,
  spawnShardDelay: 5300,
  debug: false,
  cache: false
};
