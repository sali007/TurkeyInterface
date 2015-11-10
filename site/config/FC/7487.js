UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7487",
  "logo": "7487.gif",
  "receiptName": "",
  "sName": "Goodline",
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
                  "mask": "<!^\\d+${1,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,12}$",
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