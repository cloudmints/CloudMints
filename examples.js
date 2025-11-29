// CloudMints SDK Examples

// Example 1: Create and manage compute instance
const CloudMints = require('@cloudmints/sdk');

const client = new CloudMints({
  apiKey: process.env.CLOUDMINTS_API_KEY // Use environment variable
});

async function deployWebServer() {
  // Create instance
  const instance = await client.compute.create({
    name: 'web-server-prod',
    type: 't3.medium',
    region: 'us-east-1',
    image: 'ubuntu-20.04',
    tags: {
      environment: 'production',
      app: 'web-server'
    }
  });

  console.log('Instance created:', instance.id);

  // Wait for instance to be running
  await client.compute.waitUntilRunning(instance.id);

  console.log('Instance is running at:', instance.publicIp);

  return instance;
}

// Example 2: Upload files to storage
async function uploadToStorage() {
  const bucket = await client.storage.createBucket({
    name: 'my-app-assets',
    region: 'us-east-1',
    public: true
  });

  const file = await client.storage.upload({
    bucket: 'my-app-assets',
    key: 'images/logo.png',
    filePath: './assets/logo.png',
    contentType: 'image/png'
  });

  console.log('File uploaded:', file.url);
}

// Example 3: Create managed database
async function setupDatabase() {
  const database = await client.database.create({
    name: 'app-database',
    engine: 'mysql',
    version: '8.0',
    instanceType: 'db.t3.small',
    storageGB: 100,
    backupRetentionDays: 7
  });

  console.log('Database endpoint:', database.endpoint);
  console.log('Username:', database.masterUsername);

  return database;
}

// Example 4: Monitor resources
async function getMetrics() {
  const metrics = await client.monitoring.getMetrics({
    resourceId: 'i-1234567890',
    metric: 'CPUUtilization',
    startTime: new Date(Date.now() - 3600000), // 1 hour ago
    endTime: new Date(),
    period: 300 // 5 minutes
  });

  console.log('Average CPU:', metrics.average);
  console.log('Max CPU:', metrics.maximum);
}

module.exports = {
  deployWebServer,
  uploadToStorage,
  setupDatabase,
  getMetrics
};
