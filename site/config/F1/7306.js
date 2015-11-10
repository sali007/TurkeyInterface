UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "7306",
  "logo": "7306.gif",
  "receiptName": "",
  "sName": "E-coupon.md",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
   {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "9193"
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
                    "header": "¬ведите персональный ID",
                  "footer": "",
                  "mask": "<!^\\d+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
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