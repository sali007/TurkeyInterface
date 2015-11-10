UIProvider = { "curId": "980", "curNom": "UAH",
  "grpId": "100001",
  "id": "7410",
  "logo": "441.gif",
  "receiptName": "",
  "sName": "Qiwi кошелек Украина",
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
                  "header": "Введите номер телефона в системе \"QIWI Кошелек\"",
                  "footer": "Внимание! Номер телефона вводится без <+38>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "38<!^\\d+${3}><!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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