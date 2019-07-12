# frontend-prototype
Simple structure to test frontend technologies

To start local server in order to avoid CORS and other erros due to loading resources from file//// you must have installed Python

Just go to your terminal and do the following (but make sure you are on python 3)
`python -m http.server 8080`
By default, this server will be listening on all interfaces and on port 8080.
If you want to listen to a specific interface, do the following:
`python -m http.server 8080 --bind 127.0.0.1`
Also starting from Python 3.7, you can use the –directory flag to serve files from a directory that is not necessarily the current directory.
