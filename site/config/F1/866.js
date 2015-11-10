UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "866",
  "logo": "866.gif",
  "receiptName": "",
  "sName": "DOMOLINK.Центр Телеком Московский ф-л",
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
                  "mask": "<!^\\d+${12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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