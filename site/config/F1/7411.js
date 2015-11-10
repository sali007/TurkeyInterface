UIProvider = { "curId": "980", "curNom": "UAH",
  "grpId": "100001",
  "id": "7411",
  "logo": "441.gif",
  "receiptName": "",
  "sName": "Qiwi кошелек Россия, Казахстан",
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
                  "footer": "",
                  "mask": "<!^\\d+${10,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,11}$",
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