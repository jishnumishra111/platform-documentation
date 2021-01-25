(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(174)),c={},s={unversionedId:"Microsoft Teams",id:"Microsoft Teams",isDocsHomePage:!1,title:"Microsoft Teams",description:"What is Microsoft Teams",source:"@site/docs/Microsoft Teams.md",slug:"/Microsoft Teams",permalink:"/docs/Microsoft Teams",version:"current",sidebar:"docs",previous:{title:"WhatsAppAPI",permalink:"/docs/WhatsAppAPI"},next:{title:"Slack",permalink:"/docs/Slack"}},i=[{value:"What is Microsoft Teams",id:"what-is-microsoft-teams",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Creating a new Teams App",id:"creating-a-new-teams-app",children:[]}]},{value:"Connect your Teams app with YM bot",id:"connect-your-teams-app-with-ym-bot",children:[]},{value:"Authentication : Active Directory &amp; Graph APIs",id:"authentication--active-directory--graph-apis",children:[]},{value:"Adaptive cards in MS Teams",id:"adaptive-cards-in-ms-teams",children:[]},{value:"Advanced features",id:"advanced-features",children:[]},{value:"Task Module",id:"task-module",children:[]}],l={toc:i};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"what-is-microsoft-teams"},"What is Microsoft Teams"),Object(r.a)("p",null,"Microsoft Teams is a communication and collaboration platform that combines workplace chat, video meetings, file storage, and application integration."),Object(r.a)("p",null,"This integration will let you connect your yellow messenger bot with Microsoft Team Channel. Using Azure bot service you can create bot and connect with different channels including MS Team. The message that users send can be received at YM configured endpoint and YM bot would be able to reply to the conversation on both Personal chat or channels on MS Team."),Object(r.a)("p",null,"How does an MS Teams app integrate with YM?\n",Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/TysvA6st4vsK9LOkPrVJTzon6rjovsUoX3oOulcvG_6H77Tm0tUNmOpR4E286GMnSW-vhOzUba_QvGUiYuhWJh6QVahH57ncdNYG8oMHtrpSZSsi2AOENSQ4LsphXnMwab1VH3vN",alt:null}))),Object(r.a)("h2",{id:"getting-started"},"Getting Started"),Object(r.a)("h3",{id:"creating-a-new-teams-app"},"Creating a new Teams App"),Object(r.a)("p",null,"For Integrating Yellow Messenger MS Team channel, you will need to create a new azure bot service for which you will receive Client ID, Client Secret."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"Note:  You can not perform these  actions if you don't have access to YM  azure portal. Please reach out to Syed Parvez or Rashid Khan to create a bot service for you. You can also do it using a trial azure account with your email ID  if you\u2019re just trying things out.")),Object(r.a)("p",null,"Steps to create a bot service :"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 1"),": Goto ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://portal.azure.com/"}),"https://portal.azure.com/")," then Search for Bot Services and click on Add Button."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/EgvnrCsp6MrsjSkSnig0J4xlMHx85HTDE4Zv8xOrYEyTbEqlSw3OFhPnnCW143DDUNgV1c73lTgONTftL6j2ujl5X3QkMlSWx7T4dLBGkdeob7mpaLBy1r3p7Kccpk6R64PyViCF",alt:"Azure Home > Bot Services"}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 2"),": Select the Bot Channel Registration and Click on the Create button."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh5.googleusercontent.com/fo6oL845viHLoJhkbcUk5bqJ9Q9fRdKSFP9uqyC4jWJS9Ibsx4sQtak-iC1HsjvUvkfZ7vYeZJaQtgcbDhXN6Q2JqmE_AZZNAD_PqB8YRfcmBSuHzfVEh5onZTJwa0ilvCjv2irb",alt:"Bot Services > Create"}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 3"),": Fill the form according to the below image. "),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"Bot Handle: Set a unique bot identifier\nSubscription: Create new if haven\u2019t created earlier.\nResource Group: Create new if haven\u2019t created earlier.\nMessaging endpoint: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/botframework/%5BbotID%5D"}),"https://app.yellowmessenger.com/integrations/botframework/[botID]"),"\nMicrosoft App ID and Password: Auto create.")),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/BsFNhWA5qczUz_HJ-AO-WofnN7EenFWkDyxMMfWOq7Oaojz3dxANHIzG7T5reRm3F62n0fK21XqQHXe38HIFHj0JobIrRcOdw3pUG0d1mL66yiVZB_1Y2z6I9O-gni8ehd-qP4NX",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 4"),": After successfully deployment of Bot Service, Go to Azure Home > App Registrations and select your created App."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/JjYfm2YAL5dLzGu07o8h6qaYN6iiFNh6vSF0kXHdkcHexaRkhBdEBDv2E2DdA-FeVP7fsEBOEoYAv0jM7DAyqfxHenL2hnusGTeduO08tKXd-LZj4D5swqPz-EJOJwqvjbKA-B8X",alt:null}))),Object(r.a)("p",null,"Save the Application/Client ID and tenant ID for future use and go to Certificates & Secrets"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/TG1sKk4JqfF-GB_PP5cjIiC9q9AGTRE5ml06XPtLPC_r3aPwrYkM-gcoRGLl7ZUCN2_P5AD_YRcduzYnKnfbE2B4QLKtZ13f22tFjmBktPWPd9pS9CPoA2NXjKbFyd1AIbRplOr6",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 5"),": Click on the New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret for future use."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/9dbq3EdLvcCRSdbnml_Dbd3_mhmBCvG10VC85FSpvmGaPds3B9X8CaiTPdCnxV2S0itOcf-J-2Z1Hi2QcNbzugxiY-jtxT4F4dNJPs2r2nca6AewQZMk-vpXXVDYNRzGAWrJJ0IQ",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 6"),": Now go back to Bot Services and select your Bot service from the list and click on the Channels option."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/KyiXHuok0hwEyaSbaoIWhBzog9IsfC6a0GNLqARUrOQUK5Gyn6OvB4r3bUWhZRHjudK7r9bzxUZWybxAhKDwGbwvi4znTZBR4wEqzBbbpdQByUU5l1uIhsGqVR60zrtQZCAwslg9",alt:null}))),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh5.googleusercontent.com/3gQiHcaPS6cIcR-Ze4GMAo6Of2qcXaE5rUCpdNQLxHjg-sMo5e10xoGBY03kiPtdgtR4ALvxEniyl6FuDnHYR_VZ5q7LXRraVgkTBZNJCMLsUV7dxe6lCWJvMnBzmfN2bUxvdztK",alt:null}))),Object(r.a)("p",null,"Add the MS Team channel using Add a featured channel, then click on the Microsoft Teams (with Running health) and open it using Web or Window App. "),Object(r.a)("p",null,"You will find your bot added in the MS Team chat and can start interacting after the next step."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600235662156_image.png",alt:null}))),Object(r.a)("h2",{id:"connect-your-teams-app-with-ym-bot"},"Connect your Teams app with YM bot"),Object(r.a)("p",null,"Go to yellow messenger MS Team channel and fill those Client ID and Client Secret  and now you are ready to use MS team with Yellow Messenger bot. Test by sending an app.sendTextMessage() from main."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/2jujF7XExhGEP22XK_5yJxjK9GWgh71Bg_VCzE1sznz3mTid006WnHFSzJGucZTr6_-5eP_FVBmgvm_KWyBDSr1vCyVYGSsmOPxRZ155fwPS46bLBsublaOaWlDF_GKlgJTz2c3-",alt:null}))),Object(r.a)("p",null,"##Create your app manifest using your Azure bot service (App Studio)"),Object(r.a)("p",null,"Add App Studio from App Store which allows you to create bot manifest, Command Suggestions, Message Extensions, publishing your app etc."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh5.googleusercontent.com/gAC2XCk1xtteOmvCJFcz51ZvqC5ri6LTaI7ydhgb2JSsZaTpFR7iiVkuKePfb9P_nh567Bxylb6x_0FFrup2AyI9aEfGDmuUkhAoRVkZveDkapoR60NwxfitYAOIp9voHJKk-c1x",alt:"Install App Studio to your MS Team"}))),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"For creating a new App in App Studio:\nClick on the Create a new App and fill the app details and use the generate button for App ID.\nConnect your app studio bot with azure bot services by configuring Client ID in the Bots Section, For Testing: Install bot using Test & Distribute Section.")),Object(r.a)("h2",{id:"authentication--active-directory--graph-apis"},"Authentication : Active Directory & Graph APIs"),Object(r.a)("p",null,"App Registration on Azure AD: Click ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/432799757/Active+Directory+LDAP"}),"here"),".\nConnecting YM bot to MS Teams : Please follow Section 'Getting Started' from above for Team Integration."),Object(r.a)("p",null,"How to set dynamic scopes in Login url:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    let consent = "&prompt=consent"\n    let scopeMp = "People.Read User.ReadBasic.All Presence.Read"\n     \n    {\n       "type": "Action.OpenUrl",\n       "title": "Login",\n       "url": app.azure.auth() + encodeURIComponent(scopeMp) + consent                     }\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Add / Remove permission and Grant Admin consent for the App"),",\nGoto Azure Portal > App Registration > API Permissions"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/z37T-8_2hO-v88FOY15bYZs3ZhNy7HK2hX3mR_uKF6Qh1L77cnBuHBc2IPXZX_Qm-glHTF5mBPkQnWNVa2eo3t6MmkDGhQWrpg-jDZdVWr3So_JH7QKeS9milnNcDW7YWTDj1dhP",alt:null}))),Object(r.a)("p",null,"For enabling multi tenant: Enable multi tenant in the Azure AD integration in Yellow messenger and enable multi tenant on the App registration > Authentication"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Graph APIs"),":\nDocumentation: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0"}),"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0")),Object(r.a)("p",null,"Explorer: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/graph/graph-explorer"}),"https://developer.microsoft.com/en-us/graph/graph-explorer")),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"Note: For APIs that require Admin consent, Admin can consent for their organisation via Azure Portal or at the time of Login itself.")),Object(r.a)("h2",{id:"adaptive-cards-in-ms-teams"},"Adaptive cards in MS Teams"),Object(r.a)("p",null,"Adaptive Cards are an open card exchange format enabling developers to exchange UI content in a common and consistent way."),Object(r.a)("p",null,"Designer: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://adaptivecards.io/designer/"}),"https://adaptivecards.io/designer/")),Object(r.a)("p",null,"Documentation: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/adaptive-cards/"}),"https://docs.microsoft.com/en-us/adaptive-cards/")),Object(r.a)("p",null,"Designer functionality: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://adaptivecards.io/explorer/AdaptiveCard.html"}),"https://adaptivecards.io/explorer/AdaptiveCard.html")),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Sending Adaptive Card using yellow messenger"),":"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    let CARD_PAYLOAD_FROM_DESIGNER = {\n        "type": "AdaptiveCard",\n        "body": [\n            {\n                "type": "TextBlock",\n                "text": "sOME TEXT"\n            }\n        ],\n        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",\n        "version": "1.0"\n    }\n     \n    let card = {\n           "contentType": "application/vnd.microsoft.card.adaptive",\n           "content": CARD_PAYLOAD_FROM_DESIGNER\n    }\n    app.sendAdaptiveCard(card).then(() => {\n           resolve();\n    })\n\n \n\n    Sending a Carousel Card:\n    let card = {\n           "contentType": "application/vnd.microsoft.card.adaptive",\n           "content": CARD_PAYLOAD_FROM_DESIGNER\n    }\n     \n    let cardCarousal = [card,card,card]   //array of cards\n    app.sendCards(cardCarousal).then(() => {\n           resolve();\n    })\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Receiving Form Submission data from Adaptive Card in YM bot"),":"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/f8H8NE_VxqDlEh1GllZh5HsIENtuRbYqA3RC-GsHcUmKOPzuqs15PhjEcijTZuYXvlqQMrWVZBvQ9tuDS_k_oJY0dba49zM3EILtHi9sEgoKx8vFSPoAcZS_IQPI4FEX4PcBj7ml",alt:"Adaptive Card Example"}))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    //Received app.data\n    app.log(app.data);\n    \n    ---In Log---\n    {\n     "message":"form-data",\n      "value":{\n          "action":"saveName",\n          "namearea":"Adam"\n      }\n    }\n    \n')),Object(r.a)("h2",{id:"advanced-features"},"Advanced features"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Command Suggestions")),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/Fx5GPrPTOVWuZEA81h-fOB2QY8ro3P4mSbSCFmZTTMESktQGtMNLbsUF683UyUUEHwAmEtOTAM5TIPQ0-0XgadZv-PyMQHfi05zOeLO92YmOMkj9X6VGWdqYRXTizjK_1gygmZ8q",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 1"),": Goto App Studio > Select your App > Bots > Setup your bot using Client ID and click on the Add button in the Commands section to add suggestion commands."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/Rcla8_oDt5BLFaAA8dV_Q6uwNWZP12yW_6vypZ3dHNxtOHGVaGfWnhdhU6fkJ65XlRN104Tf_5K6LSiuhdoCx_LpzoGnUsI7PcUSGw8t2MVlt7eD3bxHYbddFV6_7VPpV_SJuAz-",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 2"),": Fill the new command fields > Click on Save. You would find Bot suggesting you the commands after reinstalling the app."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/r3j_W2Y7J4XcGnsnKEqPIsQp3_ryIJ8lCcEC8z6O2zi_UTOAWTK2mM0UWoWWrbenTRRKg-9iS_j4wLDCdJexW2nSx-05sRE4QyqzqjsQV9alcz1lNj6lW12wbzf0FWxAzZbGw5jT",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Message Extensions")),Object(r.a)("p",null,"Messaging extensions allow users to interact with your web service through buttons and forms in the Microsoft Teams client. They can search, or initiate actions, in an external system from the compose message area, the command box, or directly from a message"),Object(r.a)("p",null,"Documentation: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions"}),"https://docs.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions")),Object(r.a)("p",null,"Steps to integrate ME with Yellow Messenger:"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 1"),": Goto App Studio > Select your App > Messaging extensions > Set up"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/gQFKtWaYejsyGaE5wqDwmxs188vsZsud4TJBRUob7v9najqluRBTQMlEjCvFlbH6wOfDC9BXcLj74AcmcDPeiFU6jXeM62YPfrOBbVIeKB4eC3UtPjpodNGkK1p0uGAVjTjJIv0R",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 2"),": Configure your bot and change messaging endpoint to: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/sync/microsoft/extensions/%5BbotID%5D"}),"https://app.yellowmessenger.com/integrations/sync/microsoft/extensions/[botID]")),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/nsD_snWZRoTvoYJwLvQJom89AM3AS4dsqFNm9vI3HsTXEPu9Qs7nIvH9PqXF5dLGK_ie6SJWcW4AoS79rToiTGk7FmXSaKnxi9e-X5dVC2mOyTUTjvQDHgML0Dv5aX69XHiGxfIV",alt:null}))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Step 3"),": Click on Add Button and choose method according to the requirement then fill out the details and parameters for your message extensions."),Object(r.a)("p",null,"Action Type: Allows you to open a pop up and take multiple field values.  (e.g: Add Task)\nQuery Type: Allows you to run a query in the search field itself. (e.g: Wikipedia Search)"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/_KsG4Vgw53hdWjE9Hf1y82w6A2THRZA8G4PlXHajX8i5NWQsW1q2un8PDYGpwUNy3ytJoeY4OiNoDZavHjToxNRXmnPmUw-PeobGKTexMlxCjssqhslvnPUadGhpHC0eyzjOUNrM",alt:null}))),Object(r.a)("p",null,"Receiving responses in yellow messenger: "),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'Query Type: \n\n    app.log(app.data)\n    //In logs----------\n       {\n           "commandType": "composeExtension/query",\n           "value": {\n               "commandID" : "findwikipedia",\n               "parameters" : [\n                   {\n                       "name": "searchquery",\n                       "value":"Bumblebee"\n                   }\n               ]\n           }\n       }\n')),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"Note:")),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"}," //For initial run or Empty query\napp.data.value.parameters","[0]",'.name = "initialRun"')),Object(r.a)("p",null,"Action Type Submission:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    app.log(app.data)\n    //In logs----------\n       {\n           "commandType": "composeExtension/submitAction",\n           "value": {\n               "commandID" : "addtask",\n               "data" : {\n                   "taskname": "Some Task",\n                   "taskduedate":"2020-09-10"\n               }\n           }\n       }\n\n')),Object(r.a)("p",null,"Responding to the Message Extensions:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    let messageExt = {\n       "composeExtension": {\n           "type": "result",\n           "attachmentLayout": "list",\n           "attachments": [\n               {\n                   "contentType": "application/vnd.microsoft.card.adaptive",\n                   "content": {\n                       "type": "AdaptiveCard",\n                       "body": [\n                           {\n                               "type": "Container",\n                               "items": [\n                                   {\n                                       "type": "TextBlock",\n                                       "text": "Some Details",\n                                   }\n                               ]\n                           }\n                       ],\n                       "version": "1.0"\n                   },\n                 "preview": {\n                    "contentType": "application/vnd.microsoft.card.thumbnail",\n                    "content": {\n                           "title": "Preview Title",\n                           "text": "Preview Text"\n                       }\n                   }\n               }\n           ]\n       }\n    }\n    //Send reply directly to message extensions\n    app.sendAdaptiveCard(messageExt);\n    //Note: For multiple responses use attachments as an Array.\n')),Object(r.a)("p",null,"To run Message extension from Search bar, @mention the bot (example @Bumblebee) and select your bot from suggestion."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/GOOgO5k1l8g4PoA0fzCqKf5YcldUOhNT0WK9rgS1EuO9ESN_bWqN_LeipnOGuvTAbq7seaiWbf6duMmRKa2PIPIEjJ18fFLD7Hld2Se6rJJZsODu0m1FaZR_Vv35ksM7NCVJePUO",alt:"Message Extension using Search bar"}))),Object(r.a)("p",null,"After clicking on the preview user can view the Adaptive Card attached with the preview."),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh4.googleusercontent.com/bePbJOD8e8ACjYJj5bdtRXBRkQgMsELw8-SyXCP3eTxL2tpbrE5e-gMuAl-8UgxPJBHU8L9JepYtZO25oN9roc1I2YIfPhFn9LCJBapQFcNqV6IFwXEjM9HJnLw8M0VfI-gaT_98",alt:"Message Extension using Search bar"}))),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/gImu1kA5DxyC_QsfU31wxdxDf_qX7O9NCYgMdKYob01z-LGqR9jeWK3yVOfCS2q394a5E7Q5kgbnXcOKTpbpHPmCK-vJ5UAYuy9Wj5yDhMMFbsmgyjkOk2QRTPrIKQJueViuQQpT",alt:"Message Extension using Compose area"}))),Object(r.a)("h2",{id:"task-module"},"Task Module"),Object(r.a)("p",null,"Task modules allow you to create modal popup experiences in your Teams application. Inside the popup you can run your own custom HTML/JavaScript code, show an ","[iframe]","-based widget such as a YouTube or Microsoft Stream video or display an Adaptive card."),Object(r.a)("p",null,"Documentation: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/what-are-task-modules"}),"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/what-are-task-modules")),Object(r.a)("p",null,"Create TM using Deeplink:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'    let adaptiveCard = {\n        "contentType": "application/vnd.microsoft.card.adaptive",\n        "content": ADAPTIVE_CARD_PAYLOAD\n    }\n    \n    let cardLoad = encodeURIComponent(JSON.stringify(adaptiveCard))\n    \n    let deeplink= `https://teams.microsoft.com/l/task/<App ID from App Studio>?card=${cardLoad}&height=300&width=600&title=Some Title&completionBotId=<Client ID>`;\n    \n    app.sendQuickReplies({\n        title: \'Task Module Check\',\n        options: [{\n             title: \'Open\',\n             url: deeplink\n         }]\n     })\n\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Group Conversation"),":  (Teams / Channel)"),Object(r.a)("p",null,"The bot must be @mentioned. Your bot will not receive a message when the team or channel is mentioned, or when someone replies to a message from your bot without @mentioning it."),Object(r.a)("p",null,"Documentation: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/bots/how-to/conversations/channel-and-group-conversations?tabs=json"}),"https://docs.microsoft.com/en-us/microsoftteams/platform/bots/how-to/conversations/channel-and-group-conversations?tabs=json")),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Adding a bot in a team or channel"),":\nGoto channel and click on the + button with the tabs"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600234853416_image.png",alt:null}))),Object(r.a)("p",null,"For published bot: you can add using the search.\nFor development bot:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Goto App studio and download the bot that you want to add in the teams."),Object(r.a)("li",{parentName:"ol"},"Click on the Manage apps and then Upload a custom app from the bottom-right."),Object(r.a)("li",{parentName:"ol"},"Upload the downloaded .zip of the app.\n",Object(r.a)("img",Object(n.a)({parentName:"li"},{src:"https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600235101024_image.png",alt:null})))),Object(r.a)("p",null,"More References"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Try to learn as much about Teams apps as you can. Try to install different apps and observe the workflow and user experience."),Object(r.a)("li",{parentName:"ol"},"Learn basics of MS Teams",Object(r.a)("ol",{parentName:"li"},Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/#pivot=get-started"}),"Getting started with Teams")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.microsoft.com/microsoft-365/partners/resources/guidebook-building-apps-for-microsoft-teams"}),"Guidebook")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=ZH0sqPeNVbk&feature=youtu.be"}),"Tutorial"),", ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=LvAYtqQiLv0&feature=youtu.be&t=3046"}),"examples of use cases")," (retail, cpg, fmcg, sales, etc)"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://www.notion.so/shubhi101/MS-Teams-IP-Co-sell-28c277e956354cb3a3b6be44507f7d7e"}),"More links")))),Object(r.a)("li",{parentName:"ol"},"MS Teams UI elements",Object(r.a)("ol",{parentName:"li"},Object(r.a)("li",{parentName:"ol"},"Learn about bots, tabs, message extensions"),Object(r.a)("li",{parentName:"ol"},"Learn about ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://adaptivecards.io/"}),"adaptive cards")))),Object(r.a)("li",{parentName:"ol"},"Additional",Object(r.a)("ol",{parentName:"li"},Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/"}),"App templates")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/api/resources/webhooks?view=graph-rest-1.0"}),"Webhook for Graph API")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/toolkit/overview?context=graph%2Fapi%2F1.0&view=graph-rest-1.0"}),"MS Graph Web Toolkit")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-quickstart?view=azure-bot-service-4.0"}),"REST API integration with BotFramework")))),Object(r.a)("li",{parentName:"ol"},"Learn about Active Directory authentication",Object(r.a)("ol",{parentName:"li"},Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-flow-tab"}),"Auth flow")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-tab-aad"}),"Auth in Teams tabs"))))),Object(r.a)("p",null,"Contact Info: Sonu Kedia "))}p.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||r;return a?o.a.createElement(d,s(s({ref:t},l),{},{components:a})):o.a.createElement(d,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<r;l++)c[l]=a[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);