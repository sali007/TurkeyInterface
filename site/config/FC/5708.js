UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "5708",
  "logo": "5708.gif",
  "receiptName": "",
  "sName": "Tezgsm",
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
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (372X) ХХХ-ХХ-ХХ",
                  "mask": "(<!^\\d+${4}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^372[0-9]{8}$",
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