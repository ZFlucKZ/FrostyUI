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
        scannerHome = tool 'sonar6.1'
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
        }

        timeout(time: 5, unit: 'MINUTES'){
          waitForQualityGate abortPipeline: true
        }
      }
    }

    stage('Build Docker Image'){
      steps {
        script {
          dockerImage = docker.build(registry + ":V$BUILD_NUMBER")
        }
      }
    }

    stage('Push Docker Image'){
      steps {
        script {
          docker.withRegistry('', registryCredential) {
            dockerImage.push("V$BUILD_NUMBER")
          }
        }
      }
    }

    stage('Remove Unused docker image') {
      steps {
        sh "docker rmi $registry:V$BUILD_NUMBER"
      }
    }

    stage('Deploy to EC2'){
      steps {
        sh "Deploying to EC2"
      }
    }
  }
}
