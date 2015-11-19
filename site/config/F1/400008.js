
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "400008",
  "logo": "400008.gif",
  "receiptName": "",
  "sName": "МТТ Дальняя Связь",
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
                  "header": "Введите Ваш номер телефона",
                  "footer": "Внимание! Номер вводится без <8>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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