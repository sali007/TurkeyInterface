
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "7670",
  "logo": "7670.gif",
  "receiptName": "",
  "sName": "TEZ GSM",
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
                    "header": "Введите номер TezGSM для пополнения",
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (372X) ХХХ-ХХ-ХХ",
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