UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "879390",
  "logo": "8793.gif",
  "receiptName": "",
  "sName": "Skype",
  "small_logo": "",
  "tag": "visible",
      "minSum":"90",
			"maxSum":"90",
  "__objects": [
   {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_serviceid",
                             "value" : "skype"
                        },
                                                                        {
                             "__type" : "param",
                             "name" : "_extra_ev_amount",
                             "value" : "90"
                        },
                                                                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "11038"
                        }
                    
                  ]
            },
          
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                    "header": "¬ведите логин skype",
                  "footer": "",
                  "mask": "<!^.+${1,30}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                  
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}