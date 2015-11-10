UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "4604",
  "logo": "4604.gif",
  "receiptName": "",
  "sName": "Spark.md",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
   {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "6178"
                        }
                    
                  ]
            },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "7323",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "¬ведите номер заказа",
                  "footer": "",
                  "mask": "<!^\\d+${2,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,10}$",
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