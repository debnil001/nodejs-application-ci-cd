pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages{
        stage('Node Package Installation'){
            steps{
                sh 'node -v'
                sh 'npm -v'

                sh 'npm install'
            }
        }
        stage('Build Docker Image'){
            steps{
                echo 'Building Docker image'

                sh "docker build -t my-nodejs-app:${BUILD_NUMBER} -t my-nodejs-app:latest ."
            }
        }
        stage('Push Docker Image to Registry'){
            steps{
                echo 'Pushing image to registry'

                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'docker_pswd', usernameVariable: 'docker_user')]) {
                    sh 'echo ${docker_pswd} | docker login -u ${docker_user} --password-stdin'
                    sh 'docker tag my-nodejs-app:${BUILD_NUMBER} debnildocker/my-nodejs-app:${BUILD_NUMBER}'
                    sh 'docker tag my-nodejs-app:latest debnildocker/my-nodejs-app:latest'
                    sh 'docker push debnildocker/my-nodejs-app:${BUILD_NUMBER}'
                    sh 'docker push debnildocker/my-nodejs-app:latest'
                }
            }
        }

        stage('Update image in K8s Deployment'){
            steps{
                echo 'Updating image in K8s deployment'

                sh 'sed -i "s|image: my-nodejs-app:.*|image: debnildocker/my-nodejs-app:'"${BUILD_NUMBER}"'|g" deployment.yaml'
                sh 'kubectl apply -f deployment.yaml'
            }
        }

        stage('Deploy to Local K8s Cluster'){
            steps{
                echo 'Deploying to local K8s cluster'

                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }

}