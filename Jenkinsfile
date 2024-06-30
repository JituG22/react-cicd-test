pipeline {
    agent any
    
    stages {

   stage('Clean workspace') {
            steps {
                deleteDir()
            }
        }
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
                // Create ZIP file
                bat "powershell Compress-Archive -Path 'build/**' -DestinationPath '${env.WORKSPACE}\\build.zip'"
                archiveArtifacts artifacts: 'build.zip', allowEmptyArchive: true
            }
        }
        
        stage('Deploy to Tomcat') {
            steps {
                script {
                    def tomcatUrl = 'http://localhost:9090'  // Update with your Tomcat URL
                    def tomcatManagerUser = 'admin'          // Update with your Tomcat manager username
                    def tomcatManagerPassword = 'admin'   // Update with your Tomcat manager password
                    def artifactName = 'build.zip'           // Update with your artifact name

                    // Unzip and deploy the static files to Tomcat's webapps directory
                    withCredentials([usernamePassword(credentialsId: 'tomcat-credentials', usernameVariable: 'TOMCAT_USER', passwordVariable: 'TOMCAT_PASS')]) {
                        bat """
                            powershell Expand-Archive -Path '${env.WORKSPACE}\\${artifactName}' -DestinationPath 'C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT' -Force
                        """
                    }
                }
            }
        }
    
    }
    
}
