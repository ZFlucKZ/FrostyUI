pipeline{
  agent any

  tools {
    dockerTool 'docker-latest'
    nodejs 'node21.7.3'
  }

  environment {
    registry = "darkza5050/frosty-ui"
    registryCredential = 'dockerhub'
  }

  stages {
    stage('Setup cypress'){
      steps {
        sh 'cypress install'
      }

    }

    stage('Cypress Tests') {
      steps {
        sh 'pnpm install'
        sh 'pnpm cy:run'
      }
    }
  }


}
