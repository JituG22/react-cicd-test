pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Git clone repo') {
            steps {
               git 'https://github.com/JituG22/react-cicd-test.git'
            }
        }
        stage('Npm install') {
            steps {
               sh "npm install"
            }
        }
    }
}
