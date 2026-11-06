pipeline {

    agent any

    options {
        timestamps()
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'

                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies..'

                sh 'node --version'
                sh 'npm --version'

                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Validating Node.js application...'

                sh 'node --check src/app.js'
                sh 'node --check src/server.js'

                echo 'Application validation completed!'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing test cases...'

                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'All tests passed successfully!'
        }

        failure {
            echo 'Pipeline failed. Please check the logs.'
        }

        always {
            echo 'Pipeline execution completed.'
        }
    }
}