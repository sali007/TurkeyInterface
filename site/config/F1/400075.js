UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "400075",
  "logo": "1516.gif",
  "receiptName": "",
  "sName": "Yota Интернет",
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
                    "header": "Введите номер счета или телефона",
                  "footer": "",
                  "mask": "<!^\\d+${6,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,11}$",
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