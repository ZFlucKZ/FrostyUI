pipeline{
  agent any

  tools {
    dockerTool 'docker-latest'
  }

  environment {
    registry = "darkza5050/frosty-ui"
    registryCredential = 'dockerhub'
  }

  stages {
    stage('Cypress Tests') {
      steps {
        sh 'pnpm install'
        sh 'pnpm cy:run'
      }
    }
  }


}
