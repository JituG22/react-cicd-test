pipeline {
    agent any
    
    stages {

        stage('Git clone repo') {
            steps {
               git 'https://github.com/JituG22/react-cicd-test.git'
            }
        }
        stage('npm install') {
            steps {
               bat "npm install"
            }
        }
        stage('Npm Build') {
            steps {
               bat "npm run build"
            }
        }
        stage('Npm Test') {
            steps {
               bat "npm run test"
            }
        }
        stage('Archive artifacts') {
            steps {
            dir('demo') {
                        sh '''
                        zip -r  build.zip build/**
                        '''
                }
            }
        }
    
    }
    
}
