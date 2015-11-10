UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "7923",
  "logo": "7923.gif",
  "receiptName": "",
  "sName": "klass.md",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
   {
                  "__type" : "constParams",
                  "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "9893"
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
                    "header": "Введите аккаунт",
                  "footer": "",
                  "mask": "<!^\\d+${5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5}$",
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
        },
        
        
                {
                             "pageId" : "6582",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp1",
                                                     "disp_type" : "",
                                                     "header" : "Ваше имя:",
                                                     "mask" : "<!^.+${1,40}>",
                                                     "name" : "data",
                                                     "nobr" : "false",
                                                     "regexp" : "^.+$",
                                                     "strip" : "false",
                                                     "type" : "disp_input",
                                                     "visible" : "true"
                                               }
                                         ]
                                   }
                             ]
                        }
        
        
        
      ]
    }
  ]
}