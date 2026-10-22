pipeline {
agent any
tools {
nodejs 'NodeJS-26'
}
stages {
stage('Install Dependencies') {
steps {
bat 'npm install'
}
}
stage('Install Playwright Browsers') {
steps {
bat 'npx playwright install'
}
}
stage('Run Tests') {
steps {
bat 'npm test'
}
}
}
post {
always {
echo 'Execution Completed'
}
}
}