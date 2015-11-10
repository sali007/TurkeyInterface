UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "8351",
  "id": "83512",
  "logo": "8351.gif",
  "receiptName": "",
  "sName": "isic.md Пополнение",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
                       {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "10365"
                        },
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_code",
                             "value" : "2"
                        }
                  ]
            },
                        {
                  "__type" : "constParams"
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
                    "header": "Введите номер счёта",
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