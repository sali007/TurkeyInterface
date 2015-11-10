UIProvider ={"curId":"643","curNom":"RUB",

  "grpId": "100001",
  "id": "460",
  "logo": "460.gif",
  "receiptName": "",
  "sName": "InterZet Санкт-Петербург",
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
                    "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[1-9]{1}\\d{0,5}$",
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