PORT_SERVER = 3000
PORT_CLIENT = 3010

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "monorepo-express-create-react-app"
    vb.memory = 1024
    vb.customize ["modifyvm", :id, "--uartmode1", "disconnected"]
  end

  config.vm.hostname = "monorepo-express-create-react-app"

  config.vm.provision "shell", path: "vagrant-manifests/setup.sh", env: {
    "PORT" => PORT_SERVER,
    "MONGODB_URI" => "mongodb://localhost:27017/example"
  }

  config.vm.network "forwarded_port", guest: PORT_SERVER, host: PORT_SERVER
  config.vm.network "forwarded_port", guest: PORT_CLIENT, host: PORT_CLIENT
end
