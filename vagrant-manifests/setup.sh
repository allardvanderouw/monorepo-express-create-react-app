#!/usr/bin/env bash

# Add apt sources
# - MongoDB
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
# - Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# - Node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# Update apt
apt-get update

# Upgrade installed packages
apt-get upgrade -y

# Install development packages
apt-get install -y ntp
apt-get install -y git
apt-get install -y yarn

# Install tool packages
apt-get install -y nodejs
apt-get install -y mongodb-org

# Cleanup
apt-get autoremove -y
apt-get autoclean -y

# Autostart MongoDB
sudo cp /vagrant/vagrant-manifests/mongodb.service /etc/systemd/system/mongodb.service
sudo systemctl enable mongodb
sudo systemctl start mongodb

# Update npm
sudo npm install -g npm npm-check-updates

# Install node-gyp globally to prevent Yarn issues
sudo npm install -g node-gyp

# Export environment variables in a new .bash_profile
sudo rm /home/vagrant/.bash_profile
sudo touch /home/vagrant/.bash_profile
sudo echo "export PORT=${PORT}" >> /home/vagrant/.bash_profile
sudo echo "export MONGODB_URI=\"${MONGODB_URI}\"" >> /home/vagrant/.bash_profile

# Initialize database
export MONGODB_URI=${MONGODB_URI}
cd /vagrant && rm -rf node_modules/ && yarn install
