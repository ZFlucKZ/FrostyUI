pipeline{
  agent {
    docker {
      image 'cypress/base:20.14.0'
    }
  }

  options{
    ansiColor('xterm')
  }

  tools {
    dockerTool 'docker-latest'
    nodejs 'node21.7.3'
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
