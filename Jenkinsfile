pipeline{
  agent any

  tools {
    dockerTool 'docker-latest'
    node 'node21.7.3'
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
