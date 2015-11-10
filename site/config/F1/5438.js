UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "5438",
  "logo": "5438.gif",
  "receiptName": "",
  "sName": "redmax.md",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
   {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "7119"
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
                    "header": "Введите номер заказа или email",
                  "footer": "",
                  "mask": "<!^.+${1,30}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,30}$",
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
        },
        
        
        
                                {
                             "pageId" : "30606",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp1",
                                                     "disp_type" : "",
                                                     "header" : "Сумма:",
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