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

                sh "docker build -t my-nodejs-app:${BUILD_NUMBER} ."
            }
        }
    }

}