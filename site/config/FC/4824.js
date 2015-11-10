UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100001",
  "id": "4824",
  "logo": "4824.gif",
  "receiptName": "",
  "sName": "TELETIE",
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
                  "header": "Введите номер телефона",
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (3712) ХХХХХХХ",
                  "mask": "3712<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^3712\\d{7}$",
                  "strip": "False",
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