pipeline {
    agent any

	environment {
		NETLIFY_SITE_ID = '20170a80-0889-4cc2-bd78-7b886c38aed0'
		NETLIFY_AUTH_TOKEN = credentials('Netlify-Token')
	}
    stages {
	
        stage('Build') {
            agent{
				docker {
				image 'node:22.14.0-alpine'
				reuseNode true
            }
        }
			steps {
				sh '''
					ls -la
					node --version
					npm --version
					npm install
					npm run build
					ls -la
				'''
			}
		}
		
		stage('Test'){
			agent{
				docker {
				image 'node:22.14.0-alpine'
				reuseNode true
            }
        }
			steps {
				sh '''
					test -f build/index.html
					npm test
				'''
			}
		}
		
		stage('Deploy'){
			agent{
				docker {
				image 'node:22.14.0-alpine'
				reuseNode true
            }
        }
			steps {
				sh '''
					npm install netlify-cli
					node_modules/.bin/netlify --version
					echo 'Deploying Netlify production build. Site ID: $NETLIFY_SITE_ID'
					node_modules/.bin/netlify status
					node_modules/.bin/netlify deploy --prod --dir-build
				'''
			}
		}

	}
}
