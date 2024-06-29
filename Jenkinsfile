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
             // Define variables for paths
                    def sourcePath = "build/**" // Adjust the source path pattern as needed
                    def destinationPath = "${env.WORKSPACE}\\build.zip" // Example: Saves in the workspace with a specific name
                    
                    // Execute PowerShell command to compress archive
                    bat "powershell Compress-Archive -Path '${sourcePath}' -DestinationPath '${destinationPath}'"
            }
        }
    
    }
    
}
