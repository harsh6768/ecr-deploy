# ecr-deploy
Create a Nodejs service and RDS data and deploy it on EC2  as a Docker container .  Add CI/CD and if any branch merge it to the master branch then push docker image to ECR and manage docker image.


DRONE.IO CI SETUP

1. Create AWS EC2 Instance for run drone.io ci in ec2 
2. Create a app in github.com
   
   <img width="1438" alt="Screenshot 2021-10-23 at 3 52 30 PM" src="https://user-images.githubusercontent.com/25931598/138552403-577a0cd1-3070-415f-93f1-4a6836ea6b92.png">
   
   ----------------------
   
   <img width="1438" alt="Screenshot 2021-10-23 at 3 51 58 PM" src="https://user-images.githubusercontent.com/25931598/138552424-3452c7a6-0bea-47a8-8628-0019e6107968.png">
   
   
  >>> Replace PUBLIC_IP of EC2 INSTANCE in Homepage URL and Authorization Callback URL
   
   
3. Setup DRONE.IO CI in EC2 Instance 

    VISIT [Drone.IO Documentation](https://docs.drone.io/server/provider/github/)to setup drone ci in EC2 instance
    
    
       docker run   --volume=/var/lib/drone:/data   
       --env=DRONE_GITHUB_CLIENT_ID=GITHUB_CLIENT_ID 
       --env=DRONE_GITHUB_CLIENT_SECRET=GITHUB_CLIENT_SECRET   
       --env=DRONE_RPC_SECRET=GENERATED_RPC_SECRET   
       --env=DRONE_SERVER_HOST=EC2_INSTANCE_PUBLIC_IP   
       --env=DRONE_SERVER_PROTO=http   
       --publish=80:80   
       --publish=443:443   
       --restart=always   
       --detach=true   
       --name=drone   
       drone/drone:2
   
   



