UIProvider  ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "3444",
  "logo": "3444.gif",
  "receiptName": "",
  "sName": "GoodLine",
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
                  "mask": "3725<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11}$",
                  "strip": "false",
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