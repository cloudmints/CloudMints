# Getting Started with CloudMints

## Step 1: Sign Up

1. Visit [cloudmints.in/signup](https://cloudmints.in/signup)
2. Choose your plan (Free trial available)
3. Verify your email address

## Step 2: Get Your API Key

1. Login to [dashboard.cloudmints.in](https://dashboard.cloudmints.in)
2. Navigate to Settings → API Keys
3. Click "Generate New API Key"
4. Copy and save your API key securely

⚠️ **Important:** Keep your API key secret. Never commit it to version control.

## Step 3: Install CLI

```bash
# Using npm
npm install -g @cloudmints/cli

# Using pip
pip install cloudmints-cli

# Using homebrew (macOS)
brew install cloudmints
```

## Step 4: Configure CLI

```bash
cloudmints config set api-key YOUR_API_KEY
cloudmints config set region us-east-1
```

## Step 5: Create Your First Instance

```bash
# Create a virtual machine
cloudmints compute create \
  --name my-first-vm \
  --type t3.medium \
  --image ubuntu-20.04 \
  --region us-east-1

# Check instance status
cloudmints compute list

# SSH into your instance
cloudmints compute ssh my-first-vm
```

## Step 6: Deploy a Web Application

```bash
# Create a storage bucket
cloudmints storage create-bucket my-app-assets

# Upload your application files
cloudmints storage upload ./dist/* my-app-assets/

# Create a database
cloudmints database create \
  --name my-app-db \
  --engine mysql \
  --version 8.0 \
  --type db.t3.small

# Deploy your application
cloudmints deploy \
  --app-name my-web-app \
  --source ./app \
  --env production
```

## Next Steps

- [Read the full documentation](https://docs.cloudmints.in)
- [Join our Discord community](https://discord.gg/cloudmints)
- [Check out example projects](https://github.com/cloudmints/examples)
- [Watch video tutorials](https://youtube.com/cloudmints)

## Need Help?

- 📧 Email: support@cloudmints.in
- 💬 Live Chat: Available 24/7 on dashboard
- 📚 Documentation: docs.cloudmints.in
- 🐛 Report Issues: github.com/cloudmints/issues
