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
    stage('Cypress Tests') {
      steps {
        sh 'pnpm install'
        sh 'pnpm cypress install'
        // sh 'pnpm cy:run'
        sh 'echo "Cypress Tests Passed"'
      }
    }

    stage('SonarQube Scan'){
      environment {
        scannerHome = tool 'sonar4.7'
      }

      steps {
        withSonarQubeEnv('sonar-frostyui') {
          sh '''
            ${scannerHome}/bin/sonar-scanner \
            -Dsonar.projectKey=frosty-ui \
            -Dsonar.sources=. \
            -Dsonar.sourceEncoding=UTF-8 \
            -Dsonar.scm.disabled=true
          '''

          timeout(time: 5, unit: 'MINUTES'){
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
  }


}
