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
         
                    bat "powershell Compress-Archive -Path 'build/**' -DestinationPath '${env.WORKSPACE}\\build.zip'"
            }
        }


         stage('Deploy to Tomcat') {
            steps {
                script {
                    def tomcatUrl = 'http://localhost:9090'  // Update with your Tomcat URL
                    def tomcatManagerUser = 'admin'          // Update with your Tomcat manager username
                    def tomcatManagerPassword = 'password'   // Update with your Tomcat manager password
                    def artifactName = 'build.zip'           // Update with your artifact name

                    withCredentials([usernamePassword(credentialsId: 'tomcat-credentials', usernameVariable: 'TOMCAT_USER', passwordVariable: 'TOMCAT_PASS')]) {
                        // Constructing the curl command to deploy to Tomcat
                        bat "curl -v -u ${TOMCAT_USER}:${TOMCAT_PASS} -T ${env.WORKSPACE}/build.zip ${tomcatUrl}/manager/text/deploy?path=/&update=true"
                    }
                }
            }
        }
    
    }
    
}
