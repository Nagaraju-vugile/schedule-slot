# schedule-slot

# written on 08/11/2022

# Major packages used:
    "@reduxjs/toolkit": "^1.9.0",
    "react": "^18.2.0",
    "react-autosuggest": "^10.1.0",
    "react-cookie-consent": "^8.0.1",
    "react-datepicker": "^4.8.0",
    "react-google-login": "^5.2.2",
    "reactstrap": "^9.1.5",
    "redux": "^4.2.0",

# Configuration settings

    For login process we have used Google sign in module.
    Before proceeding with authentication need to configure redirect url at https://console.cloud.google.com/apis/dashboard.

    Any changes for authentication can be done using above mentioned url.

    created client id and client secret for desktop application and used in front end application.

    Whenever we would like to redirect to a particuler url path after login than we need to give in 'Authorized redirect URIs'.

    Creating credentials process: -> Credentials -> +CREATE CREDENTIALS ->Choose application type(app type we used for)

# Deployment
    For deployments we have used digitalocean.
    For deployment changes need to configure at https://cloud.digitalocean.com/apps/aebc616c-e65e-4f9d-9814-be2eeffa2112/overview

     Any changes for deployments can be done using above mentioned url.

    Project name: first project(need to update project name).
    App name: seahorse-app (https://seahorse-app-av9tp.ondigitalocean.app/)

    Running url: https://seahorse-app-av9tp.ondigitalocean.app/

    Need to configure branch name and GIT url, it will take from GIT configurations.

    Component Settings: schedule-slot

    https://github.com/Nagaraju-vugile/schedule-slot(need to update this)
    Branch: feature/theme

    Whaterver the branch we give automatically build get generated and deployed when we commit to that branch.