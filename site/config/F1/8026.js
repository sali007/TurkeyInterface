
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "8026",
  "logo": "8026.gif",
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
                  "header": "Введите Ваш номер",
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (372X) ХХХ-ХХ-ХХ",
                  "mask": "<!^\\d+${11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11}$",
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