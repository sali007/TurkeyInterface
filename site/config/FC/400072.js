UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "400072",
  "logo": "400072.gif",
  "receiptName": "",
  "sName": "РОЛ",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                    "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^.*${3,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{3,9}$",
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
};